import BlogPosts from "../components1/BlogPosts";
import Footer from "../components1/Footer";
import Header from "../components1/Header";
import blogBg from "../images/blog.jpg.webp";

function Blogs() {
  return (
    <>
      <Header
        backgroundImg={blogBg}
        height={75}
        title="The Venue"
        subtitle="Blogs"
      />
      <main>
        <BlogPosts />
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
