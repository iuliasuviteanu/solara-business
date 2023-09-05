import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import styles from "../SignIn/SignIn.module.scss";

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: any) => {
    e.preventDefault();
    // Handle sign-in logic here based on the credentials.
    if (username === "client" && password === "client") {
      console.log("Client Sign In Successful");
      router.push("/client/dashboard");
    } else if (username === "park" && password === "park") {
      console.log("Park Sign In Successful");
      router.push("/dashboard-park");
    } else if (username === "admin" && password === "admin") {
      console.log("Admin Sign In Successful");
      router.push("/dashboard-admin");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__main}>
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            style={{ padding: 20 }}
            className={styles.login__container}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Sign In to Solara Business
            </Typography>
            <form onSubmit={handleSignIn}>
              <TextField
                className={styles.login__input}
                label="Username"
                fullWidth
                required
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                variant="outlined"
                sx={{ border: "none", "& fieldset": { border: "none" } }}
              />
              <TextField
                className={styles.login__input}
                label="Password"
                type="password"
                fullWidth
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                }}
              />
              <TextField
                className={styles.login__input}
                label="Confirm Password"
                type="password"
                fullWidth
                required
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                variant="outlined"
                sx={{
                  border: "none",
                  "& fieldset": { border: "none" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className={styles.login__button}
              >
                Sign Up
              </Button>
            </form>
            <Typography className={styles.login__signup}>
              Already a member? <Link href="/login">Sign in here</Link>
            </Typography>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
