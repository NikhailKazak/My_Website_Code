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
            <div class="grid-item-non-sidebar"><b>Monthly Blog</b>
              <div class="Note1">
                {/* {text} */}
                May 5, 2023:
                <br/><br/> 
                Hey peeps! With the summer starting, 
                I thought it would be kind of nice 
                to reflect on the year so far.
                <br/><br/>
                Back in January, I started a co-op at Warner Bros.
                Discovery, and to be honest, I didn't know what to
                expect, as I've never been in a student QA position.
                Initially, like any other placement, I started out
                with training, just becoming familiar with the
                responsibilities of role, and this quickly shifted
                to working on a larger project. 
                <br/><br/>
                Due to the proprietary nature of the project, I 
                cannot disclose much information about it until its 
                official release. That being said, it is the soon
                to be released app, MAX, and I am glad that I 
                had a hand in contributing to it. 
                Anyways, getting to what I did, I learned how to
                manually test an application, in addition to 
                performing events testing, and test automation.
                I had the opportunity to learn how to use resources
                such as TestRail, Jira, Confluence and other industry
                standard software.
                <br/><br/>
                Aside from just work, there was also the culture and
                the people, that made the experience that much better!
                Everyone was super friendly and supportive, and 
                genuinely interested in your well being. There was a 
                ton of merch which is great for any co-op experience, 
                and there was FREE food!
                <br/><br/>
                Overall, it has been a wonderful experience and I'm
                happy to be returning in the fall! Beyond that though,
                I have picked up a few summer courses and have managed
                get back into Unreal Engine. 

              </div>
            </div>
        </div>
    </div>
  );
};
export default BlogPage;