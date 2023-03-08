import {
  Avatar,
  Container,
  Grid,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { Input } from "./Input";
import useStyles from "./styles";

export const Auth = () => {
  const classes = useStyles();
  const isSignUp = false;
  const [showPassword, setshowPassword] = useState(false);

  function handleChange() {
    console.log("Change");
  }
  function handleShowPassword() {
    setshowPassword((prev) => !prev);
  }
  function handleSubmit() {
    console.log("Submit");
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignUp && (
                <div>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                </div>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
                autoFocus
              />
              <Input
                name="password"
                label="Password"
                autoFocus
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignUp && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  autoFocus
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <Button
              type="submit"
              autoFocus
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
