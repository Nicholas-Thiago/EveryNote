"use client";

import Menu from "../components/menu/Menu";
import Footer from "../components/Footer/Footer";

import * as S from "./styles";

import {
  FaHeart,
  FaEye
} from "react-icons/fa";

export default function Livros() {
  return (
    <>
      <Menu />

      <S.Container>

        <S.SectionTitle>
          Livros Populares do Momento!
        </S.SectionTitle>

        <S.BooksRow>

          <S.BookCard>

            <S.Cover
              src="https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>500</span>
                </S.ActionItem>

                <S.ActionItem >
                    <FaHeart />
                    <span>315</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>260</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>129</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="https://upload.wikimedia.org/wikipedia/pt/0/0c/Dias-de-cao.jpg"
            />

                <S.Actions>

                <S.ActionItem>
                    <FaEye />
                    <span>206</span>
                </S.ActionItem>

                <S.ActionItem>
                    <FaHeart />
                    <span>77</span>
                </S.ActionItem>

                </S.Actions>

          </S.BookCard>

          <S.BookCard>

            <S.Cover
              src="http://localhost:3000/imagens/fnaf.jpg"
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
              src="https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"
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
              src="https://m.media-amazon.com/images/I/51GRmbc4mCL._SY445_SX342_ML2_.jpg"
            />

          </S.BookCardLarge>

          <S.BookCardLarge>

            <S.CoverLarge
              src="https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535943993/pao-dos-anjos.jpg"
            />

          </S.BookCardLarge>

        </S.BooksRow>

      </S.Container>

      <Footer />
    </>
  );
}