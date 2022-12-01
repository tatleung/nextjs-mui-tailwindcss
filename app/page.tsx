"use client";
import { Button, Grid, Stack, Typography } from "@mui/material";
export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Typography variant="h4">Application startup template with Next.js 13, MUI, and Tailwind CSS</Typography>
      <Stack direction="row" columnGap={1}>
        <Button variant="text" className="text-red-800">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  );
}