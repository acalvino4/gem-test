import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GEM test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the "Get to know Augustine" quiz!</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
        <p>Warning! once you submit a question, you cannot go back!</p>
      </main>
    </div>
  )
}
