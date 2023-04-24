/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Inter } from "next/font/google";
import { Footer } from "../components/footer";
import { Section } from "../components/section";
import { sections } from "@sonnenhof/data/sections/sections-de";
import { footer } from "@sonnenhof/data/footer/footer";
import { Button } from "@sonnenhof/components/button";
import { LogoNoTextSvg } from "@sonnenhof/svg/logo-no-text";
import { LogoTextSvg } from "@sonnenhof/svg/logo-text";
import { Layout } from "@sonnenhof/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div
        id="overlay-root"
        className="absolute top-0 left-0 h-screen w-full"
      ></div>
      <Layout>
        <main className="flex min-h-screen flex-col items-center scrollbar-hide">
          <video
            className="object-cover max-h-90vh w-screen"
            autoPlay={true}
            muted
            playsInline
          >
            <source src="Trailer_small.mp4" type="video/mp4" />
            <p>your browser does not support playing videos</p>
          </video>
          <div className="md:flex md:flex-wrap">
            {sections.map((section) => (
              <Section key={section.title} {...section} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}
