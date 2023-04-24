/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Inter } from "next/font/google";
import { Section } from "@sonnenhof/components/section";
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

            <Section
              hint="Events & Konferenzen"
              title="business | events"
              text="270m² Eventfläche mit modernster Technik"
              background="events"
              buttons={[]}
            />

            <Section
              hint="Pool und Thermalbad"
              title="indoor | outdoor"
              text="Exklusiver Innen- und Außenpool mit Massagebereich"
              background="pool"
              buttons={[]}
            />

            <Section
              hint="Wellness & Spa"
              title="Face | Body"
              text="Luxoriöser SPA Bereich mit Sauna, Eis-Lounge, Dampfbad und Massagezentrum"
              background="wellness"
              buttons={[]}
            />

            <Section
              hint="Ausflüge & Incentives"
              title="wald | natur | historie"
              text="25.000 Hektar Wald-Nationalpark & staatlich anerkannter Kurort"
              background="activities"
              buttons={[]}
            />

            <Section
              hint="Breakfast/Lunch & Fine dining"
              title="Wildbachklamm | the fine"
              text="Lichtdurchflutetes Restaurant mit exklusiver Fine Dining Area"
              background="dining"
              buttons={[]}
            />
          </div>
        </main>
      </Layout>
    </>
  );
}
