import styles from "../styles/Login.module.scss";
import React, { useState } from "react";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import SignIn from "@/components/SignIn/SignIn";

const LoginPage = () => {
  return <SignIn></SignIn>;
};

export default LoginPage;
