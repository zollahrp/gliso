import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gliso - Detergen ramah lingkungan",
  description: "Gliso, detergen dengan kapsul larut air. Bersih maksimal, limbah minimal!",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Expert />
      {/* <Gallery /> */}
      <Newsletter />
    </main>
  );
}
