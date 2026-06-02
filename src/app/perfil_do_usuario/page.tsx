"use client";

import Menu from "../components/menu/Menu";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/navigation";

import * as S from "./styles";

export default function Perfil() {
  const router = useRouter();
  return (
    <>
      <Menu />

      <S.Container>

        <S.TopSection>

          <S.Avatar />

          <S.Title>
            Meu EveryNote
          </S.Title>

          <S.InfoRow>

            <S.InfoBox>
              <strong>Seguindo:</strong> 0
            </S.InfoBox>

            <S.InfoBox>
              <strong>Seguidores:</strong> 0
            </S.InfoBox>

            <S.InfoBox>
              <strong>Avaliações:</strong> 0
            </S.InfoBox>

          </S.InfoRow>

          <S.ButtonRow>

            <S.Button>
              Editar Perfil
            </S.Button>

            <S.Button>
              Compartilhar Perfil
            </S.Button>

          </S.ButtonRow>

        </S.TopSection>

        <S.SectionTitle>
          Continuar de onde parou
        </S.SectionTitle>

        <S.CardRow>

          <S.Poster
            src="/imagens/cabra.png"
          />

          <S.Poster
            src="/imagens/diabo2.png"
          />

          <S.Poster
            src="/imagens/michael.jpeg"
          />

          <S.Poster
            src="/imagens/fnaf.jpg"
          />

        </S.CardRow>

        <S.SectionTitle>
          Minhas Avaliações
        </S.SectionTitle>

        <S.ReviewRow>

          <S.ReviewCard>

            <S.Poster 
              onClick={() => router.push("./avaliacao")}
              src="/imagens/estrelas.png"
            />

            <S.ReviewName>
              Devoradores de Estrelas
            </S.ReviewName>

            <S.ReviewText>
              ★: 5/5
            </S.ReviewText>

            <S.ReviewText>
              “Simplesmente melhor filme sci-fi já produzido”
            </S.ReviewText>


          </S.ReviewCard>

          <S.ReviewCard>

            <S.Poster
              src="/imagens/zootopia2.png"
            />

            <S.ReviewName>
              Zootopia 2
            </S.ReviewName>

            <S.ReviewText>
              ★: 3.5/5
            </S.ReviewText>

            <S.ReviewText>
              “Uma continuação divertida!”
            </S.ReviewText>

          </S.ReviewCard>

          <S.ReviewCard>

            <S.Poster
              src="/imagens/anel.jpg"
            />

            <S.ReviewName>
              Senhor dos Anéis
            </S.ReviewName>

            <S.ReviewText>
              ★: 5/5
            </S.ReviewText>

            <S.ReviewText>
              “Final espetacular para uma trilogia incrivel”
            </S.ReviewText>

          </S.ReviewCard>

        </S.ReviewRow>

      </S.Container>

      <Footer />
    </>
  );
}