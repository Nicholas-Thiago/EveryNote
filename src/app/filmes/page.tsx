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
              src="http://localhost:3000/imagens/cabra.png"
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
              src="http://localhost:3000/imagens/diabo2.png"
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
              src="https://br.web.img3.acsta.net/c_310_420/img/f8/94/f894e8b434709a541988836e4408491b.jpg"
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
              src="https://upload.wikimedia.org/wikipedia/pt/8/8b/Backrooms_%28filme%29.webp"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJ_bNuSq4i_POMAlZqNANhbXDP6BNOkEl8Q&s"
            />

          </S.BookCardLarge>

          <S.BookCardLarge>

            <S.CoverLarge
              src="https://upload.wikimedia.org/wikipedia/pt/e/ee/Avengers_Doomsday_poster.jpg"
            />

          </S.BookCardLarge>

        </S.BooksRow>

      </S.Container>

      <Footer />
    </>
  );
}