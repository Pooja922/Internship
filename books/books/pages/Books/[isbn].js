import booksInfo from "../../booksInfo.json";
import Image from "next/image";
import classes from "./books.module.css"

export const getStaticPaths=async()=>{
    const data=booksInfo
    console.log(data);
    const paths=data.map(book=>{
        return {
            params:{isbn:book.isbn.toString()}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const isbn=context.params.isbn;
    const data=booksInfo.filter(book=>{
        return(book.isbn===isbn)
    })

    return{
        props:{book:data}
    }
}
const Details=({book})=>{
    return(
        <div className={classes.detail}>
            <div className={classes.imageDisplay}>
                <Image src={book[0].image} height={600} width={500}/>
            </div>
            <div className={classes.detailDisplay}>
                <h1>{book[0].title}</h1>
                <h3>{book[0].subtitle}</h3>
                <p><b>Author: </b>{book[0].author}</p>
                <p><b>ISBN: </b>{book[0].isbn}</p>
                <p><b>Pages: </b>{book[0].pages}</p>
                <p><b>Publisher: </b>{book[0].publisher}</p>
                <p><b>Published On: </b>{book[0].published}</p>
                <p>{book[0].description}</p>
                <p>For More details <a href={book[0].website}>Click Here</a></p>
            </div>
        </div>
    )
}
export default Details