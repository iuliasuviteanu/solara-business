import styles from "./Footer.module.scss";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <main className="main">
        <div className={styles.footer__copyright}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              src="/images/solara-logo.png"
              width={75}
              height={75}
              alt="Picture of the author"
            />
            <p className={styles.header__logo}>
              Solara <span>Market</span>
            </p>
          </Typography>
          <Typography variant="body2">
            © {new Date().getFullYear()} Solara Market. All rights reserved.
          </Typography>
        </div>
        <div className={styles.footer__left}>
          <h2>Offices</h2>
          <div className={styles.footer__left__box}>
            <p className={styles.footer__left__box__title}>Corporate office</p>
            <p className={styles.footer__left__box__text}>
              Piata Montreal 10, World Trade Center, Bucharest
            </p>
          </div>
          <div className={styles.footer__left__box}>
            <p className={styles.footer__left__box__title}>
              Operational office
            </p>
            <p className={styles.footer__left__box__text}>
              Aleea Sinaia 18, Viforata, Targoviste
            </p>
          </div>
        </div>
        <div className={styles.footer__right}>
          <h2>Details</h2>
          <div className={styles.footer__right__details}>
            <MailOutlineIcon />
            <a href="">contact@solara.app</a>
          </div>
          <div className={styles.footer__right__details}>
            <TwitterIcon />
            <a href="">twitter.com/SolaraMarket</a>
          </div>
          <div className={styles.footer__right__details}>
            <LinkedInIcon />
            <a href="">linkedin.com/SolaraMarket</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
