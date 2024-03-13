import styles from "./Blog.module.css";

function Blog({ date, imgUrl, title, blog }) {
  return (
    <div className={styles.blogCart}>
      <div className={styles.blogDate}>
        <p>{date}</p>
      </div>
      <img src={imgUrl} alt="blog" />
      <h2>{title}</h2>
      <p>{blog}</p>
    </div>
  );
}

export default Blog;
