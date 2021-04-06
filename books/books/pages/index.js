import classes from "../styles/Home.module.css"
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>BooksPedia | Home</title>
              <meta name="description" content="Search for books"/>
              <meta name="keywords" content="JavaScript, Git, ASp.net"/>
          </Head>
          <div className={classes.Home}>
              <p>That's the thing with the books. They let you travel without moving your feet.</p>
              <p>---Jhumpa Lahiri---</p>
          </div>
      </>
  )
}
