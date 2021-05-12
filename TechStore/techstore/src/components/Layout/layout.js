import React from 'react';

import Header from "../Header/header";
import Content from "../Content/content"
import Footer from "../Footer/footer";

const layout = () =>{
    return(
        <div>
            <Header/>
            <main>
                <Content/>
            </main>
            <Footer/>
        </div>
    )
}

export default layout