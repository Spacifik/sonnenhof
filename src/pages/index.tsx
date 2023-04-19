import React from "react";
import { Inter } from "next/font/google";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import { sections } from "@sonnenhof/data/sections/sections-de";
import { footer } from "@sonnenhof/data/footer/footer";
import { Button } from "@sonnenhof/components/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <header className="sticky w-full h-0 top-0 bg-transparent">
        hello, world
      </header>
      <main className="flex min-h-screen flex-col items-center ">
        <video autoPlay={true} muted playsInline>
          <source src="Trailer_small.mp4" type="video/mp4" />
          <p>your browser does not support playing videos</p>
        </video>
        {sections.map((section) => (
          <Section key={section.title} {...section} />
        ))}
      </main>
      <Button
        label="show dialog"
        variant="primary"
        onClick={() => setShow(() => !show)}
      />
      <Footer {...footer} />
    </>
  );
}
