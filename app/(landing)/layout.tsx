"use client";
import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

const LandingLayout: FC<layoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default LandingLayout;
