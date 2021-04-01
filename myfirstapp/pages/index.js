import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <div>
          <Navbar/>
          <h1>HELLO</h1>
          <p>Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.</p>
          <p>Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.</p>
          <Link href="/demo">
              <a>See Ninja Listing</a>
          </Link>
          <Footer/>
      </div>
    </div>
  )
}
