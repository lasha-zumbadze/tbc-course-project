import styles from "./Blog.module.css";

function Blog({ imgUrl, title, blog }) {
  return (
    <div className={styles.blogCart}>
      <img src={imgUrl} alt="blog" />
      <h2>{title}</h2>
      <p>{blog}</p>
      <div className={styles.buttons}>
        <button className={styles.addCart}>CART</button>
        <button className={styles.view}>VIEW</button>
      </div>
    </div>
  );
}

export default Blog;
