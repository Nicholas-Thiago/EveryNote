"use client";

import Link from "next/link";
import * as S from "./styles";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  
    const router = useRouter();
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    function handleContinuar() {
        if (senha.length < 6) {
            setErro("Senha deve ter pelo menos 6 caracteres");
            return;
        }
        router.push("./perfil_do_usuario");
    }

    return (
    <>
      <Menu />

      <main style={{ minHeight: "calc(100vh - 140px)", backgroundColor: "#111", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", color: "white" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>Login</h1>

        <S.Container>
            <S.LoginBox>

                <S.Input type="text" placeholder="Email ou nome de usuário" />

                <S.Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                {erro && <p style={{ color: "#ff5555", fontSize: "14px" }}>{erro}</p>}

                <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword>

                <S.RegisterText>
                    Primeira vez usando o EveryNote?
                    <Link href="./cadastro">Cadastre-se</Link>
                </S.RegisterText>
            
                <S.Button onClick={handleContinuar}>Continuar</S.Button>

            </S.LoginBox>
        </S.Container>
      </main>

      <Footer />
    </>
  );
}