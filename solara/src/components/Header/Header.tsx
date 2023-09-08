import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import styles from "./Header.module.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import WalletIcon from "@mui/icons-material/Wallet";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";
import { useRouter } from "next/router";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOnClickWallet = () => {
    router.push("/client/wallet");
  };

  const handleOnClickDashboard = () => {
    router.push("/client/dashboard");
  };

  const handleOnClickUser = () => {
    router.push("/client/account");
  };

  const handleOnClickSettings = () => {
    router.push("/client/settings");
  };
  return (
    <AppBar position="static" className={styles.header}>
      <main className="main">
        <Container className={styles.header__container}>
          <Toolbar disableGutters>
            <HamburgerMenu />

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
                  <PersonIcon onClick={handleOnClickUser}></PersonIcon>
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
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                className={styles.user__icon}
              >
                <p>John Doe</p>
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
  );
};
export default Header;
