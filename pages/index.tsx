import {
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {GifGrid} from '../components/gif-grid'
import {useWallet} from '../hooks/use-wallet'

const ConnectedContainer = () => {
  return <GifGrid />
}

const Home: NextPage = () => {
  const {isConnected, connectWallet} = useWallet()

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      minH="100vh"
      px={2}
      py={3}
    >
      <Head>
        <title>Solana GIF Portal</title>
        <meta
          name="description"
          content="View your GIF collection in the metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack as="main" spacing={4} w="full">
        <Heading as="h1">
          <HStack>
            <Image
              src="/solana.svg"
              alt="Solana logo"
              width="35px"
              height="35px"
            />
            <span>Solana GIF Portal</span>
          </HStack>
        </Heading>
        <Text align="center">View your GIF collection in the metaverse ✨</Text>
        {isConnected ? (
          <ConnectedContainer />
        ) : (
          <Button onClick={connectWallet}>Connect to Wallet</Button>
        )}
      </VStack>

      <Flex
        as="footer"
        position="absolute"
        bottom={0}
        left={0}
        w="100vw"
        pb={12}
        justify="center"
      >
        <Link href="https://twitter.com/_buildspace">
          built on @_buildspace
        </Link>
      </Flex>
    </Flex>
  )
}

export default Home
