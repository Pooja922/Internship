import classes from "./about.module.css";
import Head from "next/head";

const about=()=>{
    return(
        <>
            <Head>
                <title>BooksPedia | About</title>
            </Head>
            <div className={classes.About}>
                    <p>In BookSPedia you find the best books for JavaScript, ASP.net and Git. Get access to various publications.</p>
                    <p>Start your learning with it and make the best out of it.</p>
                <h3>JavaScript</h3>
                <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
                <p>Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web. JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.</p>
                <p>As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).</p>
                <p>The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.</p>
                <p>JavaScript engines were originally used only in web browsers, but they are now core components of other runtime systems, such as Node.js and Deno. These systems are used to build servers and are also integrated into frameworks, such as Electron and Cordova, for creating a variety of applications.</p>
                <p>Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.</p>
                <hr/>
                <h3>Git</h3>
                <p>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</p>
                <p>Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems).</p>
                <p>Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development. Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server.</p>
                <p>Git is free and open-source software distributed under GNU General Public License Version 2.</p>
                <hr/>
                <h3>ASP.net</h3>
                <p>ASP.NET is an open-source, server-side web-application framework designed for web development to produce dynamic web pages.</p>
                <p>It was developed by Microsoft to allow programmers to build dynamic web sites, applications and services.</p>
                <p>It was first released in January 2002 with version 1.0 of the .NET Framework and is the successor to Microsoft's Active Server Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension framework allows ASP.NET components to process SOAP messages.
                    ASP.NET's successor is ASP.NET Core. It is a re-implementation of ASP.NET as a modular web framework, together with other frameworks like Entity Framework. The new framework uses the new open-source .NET Compiler Platform (codename "Roslyn") and is cross platform. ASP.NET MVC, ASP.NET Web API, and ASP.NET Web Pages (a platform using only Razor pages) have merged into a unified MVC 6.</p>
            </div>
        </>
    )
}

export default about