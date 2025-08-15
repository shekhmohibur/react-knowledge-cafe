import { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({addBookmark, markedAsReadHandler}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    addBookmark={addBookmark}
                    markedAsReadHandler={markedAsReadHandler}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;