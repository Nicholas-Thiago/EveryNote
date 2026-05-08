"use client";

import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Menu />

      <main
        style={{
          minHeight: "calc(100vh - 140px)",
          backgroundColor: "#111",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          color: "white",
        }}
      >
        <Image
          src="/images/812900.png"
          alt="Logo Every Note"
          width={120}
          height={120}
        />

        <h1
          style={{
            fontSize: "42px",
          }}
        >
          Every Note
        </h1>

      </main>

      <Footer />
    </>
  );
}