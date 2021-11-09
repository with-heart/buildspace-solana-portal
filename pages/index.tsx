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
import {useWallet} from '../hooks/use-wallet'

const Home: NextPage = () => {
  const {isConnected, connectWallet} = useWallet()

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      w="100vw"
      minH="100vh"
    >
      <Head>
        <title>Solana GIF Portal</title>
        <meta
          name="description"
          content="View your GIF collection in the metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack as="main">
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
        <Text>View your GIF collection in the metaverse ✨</Text>
        {!isConnected && (
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
