const BlogList = ({blogs, title}) => {

    //const blogs = props.blogs;
    //const title = props.title;


    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((i) => (
                <div className="blog-preview" key={i.id}>
                    <h2>{ i.title }</h2>
                    <p>Written by { i.author }</p>
                </div>
        ))}
        </div>
     );
}
 
export default BlogList;