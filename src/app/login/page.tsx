"use client";

import Link from "next/link";
import * as S from "./styles";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";

export default function Login() {
  
    const router = useRouter();
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
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "bold",
          }}
        >
          Login
        </h1>

        <S.Container>

            <S.LoginBox>

                <S.Input
                    type="text"
                    placeholder="Email ou nome de usuário"
                />

            <S.Input
                type="password"
                placeholder="Senha"
            />

            <S.ForgotPassword>
                Esqueceu a senha?
            </S.ForgotPassword>

            <S.RegisterText>
                Primeira vez usando o EveryNote?

            <Link href="./cadastro">
                Cadastre-se
            </Link>
            </S.RegisterText>

            <S.Button>
                Continuar
            </S.Button>

                </S.LoginBox>

                </S.Container>
      </main>

      <Footer />
    </>
  );
}