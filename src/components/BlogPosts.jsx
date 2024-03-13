import blog_1 from "../images/blog_1.png";
import blog_2 from "../images/blog_2.png";
import blog_3 from "../images/blog_3.png";
import blog_4 from "../images/blog_4.png";
import blog_5 from "../images/blog_5.png";
import blog_6 from "../images/blog_6.png";

import Blog from "./Blog";

import styles from "./BlogPosts.module.css";

const blogInfo = [
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_1,
    title: "Our Nomenee at the Restaurants Awards",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_2,
    title: "Recipe of the week",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_3,
    title: "Our Nomenee at the Restaurants Awards",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_4,
    title: "Our Nomenee at the Restaurants Awards",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_5,
    title: "Our Nomenee at the Restaurants Awards",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
  {
    date: new Date("June 18 2018").toISOString().slice(0, 10),
    imgUrl: blog_6,
    title: "Our Nomenee at the Restaurants Awards",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non justo eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.",
  },
];

function BlogPosts() {
  return (
    <div className={styles.blogPosts}>
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
