import { Link } from "react-router-dom"

const BlogList = ({blogs, title}) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((i) => (
                <div className="blog-preview" key={i.id}>
                    <Link to={`/blogs/${i.id}`}>
                        <h2>{ i.title }</h2>
                        <p>Written by { i.author }</p>
                    </Link>
                </div>
        ))}
        </div>
     );
}
 
export default BlogList;