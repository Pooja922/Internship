import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
            <title>Demo | Home</title>
        </Head>
        <div className="main">
            <h1>Homepage</h1>
            <p>Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.</p>
            <p>It is a production-ready framework that allows developers to quickly create static and dynamic JAMstack websites and is used widely by many large companies. Next.js is one of several recommended "toolchains" available when starting a new React app, all of which provide a layer of abstraction to aid in common tasks. Traditional React apps render all their content in the client-side browser, Next.js is used to extend this functionality to include applications rendered on the server side. The copyright and trademarks for Next.js are owned by Vercel. On July 27, 2020 Next.js version 9.5 was announced, adding new capabilities including incremental static regeneration, rewrites, and redirect support.</p>
            <p>Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. Next.js requires Node.js and can be initialized using Node Package Manager. The main feature of Next.js is its use of server-side rendering to reduce the burden on web browsers and provide enhanced security.</p>
            <div className="demo_list">
                <Link href="/demo">
                    <button>See User Listing</button>
                </Link>
            </div>
        </div>
    </>
  )
}
