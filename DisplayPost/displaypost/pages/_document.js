import Document, {Html,Main,Head,NextScript} from "next/document";

export default class CustomDocument extends Document{
    render(){
        return(
            <Html>
                <title>Blogs</title>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
                      integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
                      crossOrigin="anonymous"/>
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="description" content="Blogs"/>
                    {/*<meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}
                </Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}