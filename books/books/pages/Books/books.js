import booksInfo from "../../booksInfo.json";
import Image from "next/image";
import Link from "next/link";

import classes from "./books.module.css"

export const getStaticProps=async()=>{
    const data=booksInfo
    return {
        props:{
            booksList:data
        }
    }
}

const books=(booksList)=>{
    return(
        <div className={classes.outer_card}>
            {booksList.booksList.map(book=>(
                <Link href={"/Books/"+book.isbn} key={book.isbn} >
                    <div className={classes.inner_card}>
                    <p>{book.title}</p>
                        <Image src={book.image} height={300} width={300}/>
                    <p>Author: {book.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default books