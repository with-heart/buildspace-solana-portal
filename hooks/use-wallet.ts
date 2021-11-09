import {useEffect, useState} from 'react'

export interface PhantomResponse {
  publicKey: {
    toString(): string
  }
}

declare global {
  interface Window {
    solana?:
      | {isPhantom: false}
      | {
          isPhantom: true
          connect(options?: {onlyIfTrusted: boolean}): Promise<PhantomResponse>
        }
  }
}

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>()

  const checkIfWalletIsConnected = async () => {
    try {
      const {solana} = window

      if (solana?.isPhantom) {
        console.log('Phantom wallet found!')

        const response = await solana.connect({onlyIfTrusted: true})
        console.log(
          `Connected with public key ${response.publicKey.toString()}`,
        )
        setWalletAddress(response.publicKey.toString())
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    const {solana} = window

    if (solana?.isPhantom) {
      const response = await solana.connect()
      console.log(`Connected with public key ${response.publicKey.toString()}`)
      setWalletAddress(response.publicKey.toString())
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return {
    walletAddress,
    isConnected: !!walletAddress,
    connectWallet,
  }
}
