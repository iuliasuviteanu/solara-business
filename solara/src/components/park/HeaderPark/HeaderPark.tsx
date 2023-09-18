import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "../../Header/Header.module.scss";
import styless from "./HeaderPark.module.scss";
const HeaderPark = () => {
  return (
    <>
      <AppBar
        position="static"
        className={`${styles.header} ${styless.headerPark}`}
      >
        <main className="main">
          <Container className={styles.header__container}>
            <Toolbar disableGutters>
              <Typography
                className={styles.header__logocontainer}
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/images/solara-logo.png"
                  width={35}
                  height={35}
                  alt="Picture of the author"
                />
                <p className={styles.header__logo}>
                  Solara <span>Market</span>
                </p>
              </Typography>

              <Box sx={{ flexGrow: 0 }} className={styles.user}>
                <IconButton sx={{ p: 0 }} className={styles.user__icon}>
                  <p>Solara Park</p>
                  <Avatar
                    className={styles.user__avatar}
                    alt="Remy Sharp"
                    src="https://i.pravatar.cc/300"
                  />
                  <button className={styles.user__button}>SIGN OUT</button>
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </main>
      </AppBar>
    </>
  );
};

export default HeaderPark;
