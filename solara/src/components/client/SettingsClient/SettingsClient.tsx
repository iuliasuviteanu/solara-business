import { Avatar } from "@mui/material";
import styles from "./SettingsClient.module.scss";

const SettingsClient = () => {
  return (
    <div className={"userAccount"}>
      <h1 className={styles.myAccount__h1}>Account Settings</h1>
      <div className={styles.myAccount__profile}>
        <h3>Profile details</h3>
        <div className={styles.myAccount__profile__uploadPhoto}>
          <div className={styles.myAccount__profile__uploadPhoto__img}>
            <Avatar
              className={styles.user__avatar}
              alt="Remy Sharp"
              src="https://i.pravatar.cc/300"
            />
          </div>
          <div className={styles.myAccount__profile__uploadPhoto__text}>
            <div className={styles.myAccount__profile__uploadPhoto__text__box}>
              <button>Upload Profile Photo</button>
              <button>Delete</button>
            </div>
            <p>
              *Image size should be at least 320px big, and less than 500kb.
              Allowed files .png and .jpeg.
            </p>
          </div>
        </div>
        <div className={styles.myAccount__profile__details}>
          <div className={styles.myAccount__profile__details__input}>
            <p>Username</p>
            <input value="John Doe" />
          </div>
          <div className={styles.myAccount__profile__details__input}>
            <p>Email</p>
            <input type="email" value="john.doe@gmail.com" />
          </div>
        </div>
      </div>
      <div className={styles.myAccount__box}>
        <div className={styles.myAccount__box__child}>
          <h3>Change password</h3>
          <p>Your password can be changed here</p>
          <button>Change Password</button>
        </div>
        <div className={styles.myAccount__box__child}>
          <h3>Close account</h3>
          <p>You can permanently delete or temporarily freeze your account</p>
          <button>Close Account</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsClient;
