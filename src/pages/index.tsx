import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Section } from "../components/section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Button
            variant="primary"
            label="hello world"
            onClick={() => alert("click")}
          />
          <Button
            variant="secondary"
            label="hello world"
            onClick={() => alert("click")}
          />
        </div>
        <Section
          title="hello world"
          text="Lorem ipsum dolor sit amet"
          buttons={[
            { label: "3D tour", variant: "secondary" },
            { label: "make a gift", variant: "secondary" },
          ]}
        />
      </main>
      <Footer
        phone="+123456789"
        email="info@sonnenhof.de"
        links={["career", "press", "agb", "impressum"].map((label) => ({
          label,
          onClick: () => alert(`clicked ${label}`),
        }))}
      />
    </>
  );
}
