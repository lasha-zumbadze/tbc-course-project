import styles from "./Profile.module.css";
import Navigation from "../components/Navigation";

function Profile() {
  return (
    <>
      <Navigation />
      <div className={styles.profilePage}>
        <h2>Create Profile</h2>
        <form className={styles.profileForm}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" />
          <label htmlFor="lastname">Your lastname</label>
          <input type="text" id="lastname" />
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
          <label htmlFor="newPasword">New password</label>
          <input type="password" id="newPassword" />
          <label htmlFor="confirmPass">Confirm new password</label>
          <input type="password" id="confirmPass" />
          <button className={styles.submit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
