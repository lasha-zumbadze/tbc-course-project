// import blog_1 from "../images/blog_1.png";
// import blog_2 from "../images/blog_2.png";
// import blog_3 from "../images/blog_3.png";
// import blog_4 from "../images/blog_4.png";
// import blog_5 from "../images/blog_5.png";
// import blog_6 from "../images/blog_6.png";

import blog_1 from "../images/model_1.png";
import blog_2 from "../images/model_2.png";
import blog_3 from "../images/model_3.png";
import blog_4 from "../images/model_4.png";
import blog_5 from "../images/model_5.png";
import blog_6 from "../images/product_1.png";

import Blog from "./Blog";
import Search from "./Search";

import styles from "./BlogPosts.module.css";

const blogInfo = [
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_1,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_2,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_3,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_4,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_5,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_6,
    title: "Wild West Hoodie",
    blog: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
];

function BlogPosts() {
  return (
    <div className={styles.blogPosts}>
      <Search />
      {blogInfo.map((blog) => (
        <Blog
          date={blog.date}
          imgUrl={blog.imgUrl}
          title={blog.title}
          blog={blog.blog}
        />
      ))}
    </div>
  );
}

export default BlogPosts;
