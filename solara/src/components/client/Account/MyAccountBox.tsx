import styles from "./MyAccount.module.scss";

interface MyAccountBoxProps {
  title: string;
  description: string;
  icon: any;
}
const MyAccountBox = ({ title, description, icon }: MyAccountBoxProps) => {
  return (
    <div className={styles.myAccount__card}>
      <div className={styles.myAccount__card__details}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={styles.myAccount__card__icon}>{icon}</div>
    </div>
  );
};

export default MyAccountBox;
