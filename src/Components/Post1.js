import React from 'react';
import Data from '../Assert/image1.png'
import './Post1.css'
const Post1 = () => {
    return (
        <div className="post" id="javascript">
            <img className="post-image" src={Data} alt="js" />
            <h2>JavaScript</h2>
            <p>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

            </p>
            <button type="button" >Read more...</button>
        </div>
    )
}
export default Post1;