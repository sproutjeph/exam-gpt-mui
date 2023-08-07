"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";

const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container style={{}}>
            <Toolbar>
              <Link href="/" className="flex-1 flex">
                <div className="relative w-8 h-8 mr-4">
                  <Image fill alt="Logo" src="/logo.png" />
                </div>
                <Typography variant="h5">Exam-GPT</Typography>
              </Link>
              <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button color="inherit" variant="outlined">
                  {" "}
                  Get Started
                </Button>
              </Link>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </nav>
  );
};

export default LandingNavbar;
