import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import WalletIcon from "@mui/icons-material/Wallet";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";
import styles from "../../Header/Header.module.scss";
const HeaderPark = () => {
  const handleOnClickDashboard = () => {};
  const handleOnClickPark = () => {};
  const handleOnClickWallet = () => {};
  const handleOnClickSettings = () => {};
  return (
    <>
      <AppBar position="static" className={styles.header}>
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

              <Box
                sx={{
                  flexGrow: 1,
                  display: { md: "flex" },
                  justifyContent: "center",
                }}
              >
                <div className={styles.navIcons}>
                  <div onClick={handleOnClickDashboard}>
                    <GridViewIcon></GridViewIcon>
                  </div>
                  <div>
                    <PersonIcon onClick={handleOnClickPark}></PersonIcon>
                  </div>
                  <div onClick={handleOnClickWallet}>
                    <WalletIcon></WalletIcon>
                  </div>
                  <div onClick={handleOnClickSettings}>
                    <SettingsIcon></SettingsIcon>
                  </div>
                </div>
              </Box>
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
