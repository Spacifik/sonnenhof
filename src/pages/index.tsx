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
import { Image } from "@sonnenhof/components/image";

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
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://customer-mpt8p3umq4r630uj.cloudflarestream.com/e2c0d8fe33b9c367e67c0e6a713c9539/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-mpt8p3umq4r630uj.cloudflarestream.com%2Fe2c0d8fe33b9c367e67c0e6a713c9539%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              style={{
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            ></iframe>
          </div>
          <video
            className="object-cover max-h-90vh w-screen"
            autoPlay
            muted
            playsInline
            loop
          >
            <source
              src="https://customer-mpt8p3umq4r630uj.cloudflarestream.com/e2c0d8fe33b9c367e67c0e6a713c9539/iframe?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-mpt8p3umq4r630uj.cloudflarestream.com%2Fe2c0d8fe33b9c367e67c0e6a713c9539%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
              type="video/mp4"
            />
            <p>your browser does not support playing videos</p>
          </video>
          <div className="md:flex md:flex-wrap">
            <Section
              hint="zimmer & suiten"
              title="rubin | saphir | diamond"
              text="147 Zimmer und Suiten mit wundervoller Aussicht und Balkon in einem ausgefallenen Design"
              background="rooms"
              buttons={[]}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
