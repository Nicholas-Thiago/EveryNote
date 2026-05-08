"use client";

import Link from "next/link";
import * as S from "./styles";
import Menu from "../components/Header/Menu";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import {useState} from "react";

export default function Login() {

  const [senha, setSenha] = useState("");
  
  function validarSenha() {
    if(senha.length === 0){
      alert("Senha é obrigatória!")
      return;
    }
         
    alert("Senha válida") 
  }
  
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
                value={senha} 
                onChange={(e) => setSenha(e.target.value)}
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

            <S.Button onClick={validarSenha}>
                Continuar
            </S.Button>

                </S.LoginBox>

                </S.Container>
      </main>

      <Footer />
    </>
  );
}