import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data: blogs, isPanding, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {isPanding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
