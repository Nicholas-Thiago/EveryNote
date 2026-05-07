"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import Footer from "../footer/footer";

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
            src="/images/812900.png"
            alt="Logo Every Note"
            width={120}
            height={120}
          />

          <S.Title>Every Note</S.Title>

          <S.Subtitle>
            Livros e Filmes em só um lugar.
          </S.Subtitle>
          
          <S.Subtitle>
              Descubra, avalie e compartilhe.
          </S.Subtitle>

          <S.Subtitle>
              Se cadastre hoje e não perca mais um mundo de novidades.
          </S.Subtitle>
        </S.Content>

      </S.Container>

      <Footer />
    </>
  );
}