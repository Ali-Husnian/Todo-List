import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <center><h2>{title}</h2></center>
            {
                blogs.map(blog => (
                    <div className="blog-preview" key={blog.id} >
                        <Link to={`blog/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                        {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;