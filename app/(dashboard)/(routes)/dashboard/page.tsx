"use client";

import { routes } from "@/constants/constants";
import { cn } from "@/utils/utils";
import { ArrowRight } from "@mui/icons-material";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface DashboardPageProps {}

const DashboardPage: FC<DashboardPageProps> = ({}) => {
  const router = useRouter();
  return (
    <section>
      <Container>
        <div className="my-8 space-y-4 ">
          <h2 className="text-2xl font-bold text-center text-white md:text-4xl">
            Solve O-Level Past Questions with AI
          </h2>
          <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
            Learn with the smartest AI - Experience the power of AI
          </p>
        </div>

        <div className="grid items-center justify-center  md:grid-cols-2 gap-4 px-4 space-y-4 md:px-8 lg:px-32 2xl:grid-cols-3 cursor-pointer ">
          {routes.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              component="a"
            >
              <CardContent
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md text-black")}>
                    <tool.icon />
                  </div>
                  <Typography variant="h6" style={{ color: "#000" }}>
                    {tool.label}
                  </Typography>
                </div>
                <ArrowRight
                  style={{
                    color: "#000",
                    fontSize: "2.5rem",
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
