"use client";

import {
  DownLoadButton,
  LandingContent,
  LandingHero,
  LandingNavbar,
} from "@/components";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <section className="min-h-screen mb-10">
      <LandingNavbar />
      <LandingHero />
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <DownLoadButton image="/apple-btn.svg" storeLink="/" />
        <DownLoadButton image="/google-btn.svg" storeLink="/" />
      </Stack>
      <LandingContent />
    </section>
  );
}
