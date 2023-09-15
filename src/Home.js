import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'Welcome back to React', body: 'Lorem ipsum dolor', author: 'Mario', id:1},
        {title: 'Cold reaction', body: 'For the first lorem ipsum', author: 'Luigi', id:2},
        {title: 'Welcome back to React', body: 'body: Lorem ipsum dolor, au', author: 'Red', id:3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ))
        setBlogs(newBlogs)
    }

    useEffect(() => {
        
    })

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;