"use client";

import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

import * as S from "./styles";

export default function Avaliacao() {
  return (
    <>
      <Menu />

      <S.Container>

        <S.MovieSection>

          <S.Poster
            src="/imagens/estrelas.png"
            alt="Devoradores de Estrela"
          />

          <S.MovieInfo>

            <S.TitleRow>
              <S.Title>Devoradores de Estrela</S.Title>
              <S.Year>2026</S.Year>
            </S.TitleRow>

            <S.Director>
              Dirigido por Phil Lord e Christopher Miller
            </S.Director>

            <S.Tagline>
              SALVAR O MUNDO... SEM NEM LEMBRAR QUEM VOCÊ É.
            </S.Tagline>

            <S.Synopsis>
              O professor de ciências Ryland Grace acorda em uma nave
              espacial sem nenhuma lembrança de quem é ou como chegou lá.
              Conforme sua memória retorna lentamente, ele descobre que
              precisa resolver o mistério por trás de uma substância que
              está fazendo o Sol se apagar.
            </S.Synopsis>

          </S.MovieInfo>

          <S.Actions>

            <S.ActionButton>
              Avaliar
            </S.ActionButton>

            <S.ActionButton>
              Adicionar à lista
            </S.ActionButton>

            <S.ActionButton>
              Compartilhar
            </S.ActionButton>

          </S.Actions>

        </S.MovieSection>

        <S.ReviewsSection>

          <S.SectionTitle>
            Avaliações Populares
          </S.SectionTitle>

          <S.ReviewCard>

            <S.Avatar />

            <div>
              <strong>arken</strong>
              <p>★★★★★ ❤️</p>

              <p>
                Um dos melhores filmes de ficção científica que eu já vi.
              </p>
            </div>

          </S.ReviewCard>

          <S.SectionTitle>
            Avaliações Recentes
          </S.SectionTitle>

          <S.ReviewCard>

            <S.Avatar />

            <div>
              <strong>dave468</strong>
              <p>★★★★★ ❤️</p>

              <p>
                Melhor filme que eu já vi na minha vida.
              </p>
            </div>

          </S.ReviewCard>

        </S.ReviewsSection>

      </S.Container>

      <Footer />
    </>
  );
}