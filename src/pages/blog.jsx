/*blog.jsx*/

//Import(s)
import React, { useState, useEffect } from "react";
import "../pages/blog.css";
import Sidebar from './Sidebar'
import filePath from "../blog_posts/6_Nov2023Record.txt"
import { logEvent } from 'firebase/analytics';

//View to return 
const BlogPage = ({ analytics }) => {

  useEffect(() => {
    // Log a custom event to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: './blog' });
  }, [analytics]);
    
  //Renders text from txt file
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Error fetching the file:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that useEffect runs once after initial render


  return (
    <div className="Main">
        <title>Nikhail's Site</title>
        <div className="grid-container">
        <div className="grid-item-sidebar"><Sidebar/></div>
            <div className="grid-item-non-sidebar"><b>Monthly Blog</b>
              <div className="Note1">
                {fileContent}
              </div>
            </div>
        </div>
    </div>
  );
};
export default BlogPage;