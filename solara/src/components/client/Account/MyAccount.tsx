import { Avatar } from "@mui/material";
import styles from "./MyAccount.module.scss";
import MyAccountBox from "./MyAccountBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import router from "next/router";
const MyAccount = () => {
  const handleOnClick = () => {
    router.push("/login");
  };
  return (
    <main className={(styles.myAccount, "userAccount")}>
      <div className={styles.myAccount__headerBox}>
        <h1>MY ACCOUNT</h1>
      </div>
      <div className={styles.myAccount__section}>
        <div className={styles.myAccount__left}>
          <div className={styles.myAccount__left__account}>
            <Avatar
              className={styles.user__avatar}
              alt="Remy Sharp"
              src="https://i.pravatar.cc/300"
            />
          </div>
          <p className={styles.myAccount__left__name}>John Doe</p>
          <p className={styles.myAccount__left__email}>john.doe@solara.com</p>
        </div>
        <div className={styles.myAccount__right}>
          <h2>Personal information</h2>
          <h3>
            Manage your personal information, including phone numbers and email
            adress where you can be contacted.
          </h3>
          <div className={styles.myAccount__right__details}>
            <MyAccountBox
              title={"Name"}
              description={"John Doe"}
              icon={<AccountCircleIcon />}
            />
            <MyAccountBox
              title={"Date of Birth"}
              description={"07 July 1986"}
              icon={<CalendarMonthIcon />}
            />
            <MyAccountBox
              title={"Country Region"}
              description={"France, Nice"}
              icon={<PublicIcon />}
            />
            <MyAccountBox
              title={"Language"}
              description={"English ( UK ) - English"}
              icon={<LanguageIcon />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
