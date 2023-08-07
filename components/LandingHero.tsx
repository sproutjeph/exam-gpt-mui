"use client";

import { useAuth } from "@clerk/nextjs";
import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <Container
      component="section"
      className="space-y-5 font-bold text-center  pt-24 pb-4"
    >
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool to Prepare for your O-Level Exams</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ["JAMB.", "WASSEC.", "NECO.", "POST-UTME."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <Typography variant="h6">Slove Exam past Questions with AI.</Typography>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="contained">
            <Typography variant="button">Start Sloving For Free</Typography>
          </Button>
        </Link>
      </div>
      <Typography variant="h6">No credit card required.</Typography>
    </Container>
  );
};

export default LandingHero;
