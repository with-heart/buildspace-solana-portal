import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Solana GIF Portal</title>
        <meta
          name="description"
          content="View your GIF collection in the metaverse"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Solana GIF Portal</h1>
        <p>View your GIF collection in the metaverse ✨</p>
      </main>

      <footer>
        <a href="https://twitter.com/_buildspace">built on @_buildspace</a>
      </footer>
    </div>
  )
}

export default Home
