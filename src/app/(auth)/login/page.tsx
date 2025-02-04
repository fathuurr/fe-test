"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginService } from "@/services/auth/login";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await loginService({ email, password });
      router.push("/dashboard");
    } catch (err: any) {
      if (err.response?.status === 405 || err.code === 405) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text:
            err.response?.data?.message ||
            "Terlalu sering salah Password segera hubungi Admin",
          confirmButtonText: "OK",
          confirmButtonColor: "#3085d6",
        });
      } else {
        setError(err.message || "Login failed");
      }
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#3f51b5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: 4,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="subtitle1">
          Log in to access your account and continue your journey
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          padding: 4,
        }}
      >
        <Container maxWidth="xs">
          <Paper
            elevation={6}
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 2,
              width: "100%",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Login System
            </Typography>

            <form onSubmit={handleLogin} style={{ width: "100%" }}>
              {error && (
                <Typography color="error" textAlign="center" mb={2}>
                  {error}
                </Typography>
              )}

              <TextField
                fullWidth
                type="email"
                label="User Name or Email ID"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ py: 1.5, mt: 2 }}
              >
                Sign in
              </Button>

              <Box mt={2} display="flex" justifyContent="center" gap={2}>
                <Image src="/google.png" alt="Google" width={32} height={32} />
                <Image
                  src="/twitter.png"
                  alt="Twitter"
                  width={32}
                  height={32}
                />
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Box>
            </form>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
