import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const {data: blogs, isPending,error} = useFetch('http://localhost:8000/blogs');

    // [
    //     {title: 'My new Website', body: 'lorem ipsum......', author: 'Abhi', id: 1},
    //     {title: 'Welcome party', body: 'lorem ipsum......', author: 'Avishek', id: 2},
    //     {title: 'Web dev top Tips', body: 'lorem ipsum......', author: 'Chiya', id: 3}
    // ]
    
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);        
    // }
    
    return ( 
        <div className="home">
            {/* {error && <div>{error}</div>}
            {isPending && <div>Loading.........</div> }
           {blogs && <BlogList blogs = {blogs} title="All Blogs" />} */}


{isPending ? <div>loading...</div>: error ? <div>{error}</div>: <BlogList blogs = {blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;