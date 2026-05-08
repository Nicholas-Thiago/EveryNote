"use client";

import Link from 'next/link';
import Image from "next/image";

import * as S from "./styles";

export default function Menu() {
  return (
    <S.Container>
      <S.LogoArea>

        <Image
          src="/public/imagens/812900.png"
          alt="Logo Every Note"
          width={40}
          height={40}
        />

        <S.Title>Every Note</S.Title>
      </S.LogoArea>

      <S.Nav>
        <Link href="/">Início</Link>

        <Link href="/livros">Livros</Link>

        <Link href="/filmes">Filmes</Link>

        <S.Dropdown>
          <S.DropButton>
            Menu ▼
          </S.DropButton>

          <S.DropContent>
            <Link href="/login">
              Login/Cadastro
            </Link>

            <Link href="/perfil_do_usuario">
              Perfil do Usuário
            </Link>
          </S.DropContent>
        </S.Dropdown>

      </S.Nav>
    </S.Container>
  );
}