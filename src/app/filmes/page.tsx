"use client";

import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

import * as S from "./styles";

import {
  FaHeart,
  FaEye
} from "react-icons/fa";

export default function Filmes() {
  return (
    <>
      <Menu />

      <S.Container>

        <S.SectionTitle>
          Filmes Populares do Momento!
        </S.SectionTitle>

        <S.BooksRow>

          <S.BookCard>

            <S.Cover
              src="https://i.imgur.com/yU0gH6L.png"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>704</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>561</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="https://i.imgur.com/HwnXkGX.png"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>485</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>129</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="/imagens/michael.jpeg"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>985</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>777</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="https://i.imgur.com/KuMCh3p.png"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>356</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>283</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="https://i.imgur.com/hVZ4e4T.png"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>302</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>143</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

        </S.BooksRow>

        <S.SectionTitle>
          Em Breve...
        </S.SectionTitle>

        <S.BooksRow>

          <S.BookCardLarge>

            <S.CoverLarge
              src="https://i.imgur.com/vJgD00H.png"
            />

          </S.BookCardLarge>

          <S.BookCardLarge>

            <S.CoverLarge
              src="https://i.imgur.com/DxE9p0A.png"
            />

          </S.BookCardLarge>

        </S.BooksRow>

      </S.Container>

      <Footer />
    </>
  );
}