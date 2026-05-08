"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import Footer from "../components/footer/Footer";

import * as S from "./styles";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <S.Container>

        <S.Content>
          <Image
            src="/imagens/maca.png"
            alt="Logo Every Note"
            width={120}
            height={120}
          />

          <S.Title>Every Note</S.Title>

          <S.Subtitle>
              Descubra, avalie e compartilhe.
          </S.Subtitle>
        </S.Content>

      </S.Container>

      <Footer />
    </>
  );
}