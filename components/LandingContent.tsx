import { Box, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/utils/data";

interface LandingContentProps {}

const LandingContent: FC<LandingContentProps> = ({}) => {
  return (
    <Container>
      <Typography
        variant="h2"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        Testimonials
      </Typography>

      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </div> */}

      <Grid container spacing={4}>
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} sm={6} md={4} lg={3}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingContent;
