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
      <main className="flex min-h-screen flex-col items-center ">
        <video autoPlay={true} muted playsInline>
          <source src="trailer-gra-2023_rKfPeu6g.mp4" type="video/mp4" />
          <p>your browser does not support playing videos</p>
        </video>
        {/* <div className="w-full h-1/2 pointer-events-none">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&controls=0"
          ></iframe>
        </div> */}
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
