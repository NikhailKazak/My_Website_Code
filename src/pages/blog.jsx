/*blog.jsx*/

//Import(s)
import React from "react";
import "../pages/blog.css";
import Sidebar from './Sidebar'
// import bp from "../blog_posts/Feb_19_2023.txt"
  
//View to return 
const BlogPage = () => {
    
    // const [text, setText] = React.useState();
    // fetch(bp)
    //   .then((response) => response.text())
    //   .then((textContent) => {
    //   setText(textContent);
    // });

  return (
    
    <div class="Main">
        <title>Nikhail's Site</title>
        <div class="grid-container">
        <div class="grid-item-sidebar"><Sidebar/></div>
            <div class="grid-item-non-sidebar"><b>Blog</b>
              <div class="Note1">
                {/* {text} */}
                March 11, 2023: <br/><br/> 
                So it's been a while since my site was 
                last available... This issue was primarly cause by a 
                discontinuation of Heroku's free tier web hosting. 
                That being said, I am back! And the site is better than 
                ever. <br/><br/>
                To non-programmers, this'll mean nothing, but the 
                main difference of this version of the site is that it 
                was made using React, whereas the last was just a Node
                server and EJS. From this point onwards, the site will 
                be hosted via Firebase! <br/><br/>
                Anyways, as for what I've been up to, I've recently 
                started an internship at Warner Bros. Discovery! 
                Honestly, I've really enjoyed my experience so far at 
                WBD, as it has not only been a great learning 
                experience, but it's also been really fun.
              </div>
            </div>
        </div>
    </div>
  );
};
export default BlogPage;