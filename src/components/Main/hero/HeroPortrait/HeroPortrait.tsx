import Bruno from "@/assets/Lcp/Retrato.jpg";
import {
  Container, Describe,
  HeroImage,
  HeroImageBlur,
  ImageWrapper,
} from "@/components/Main/hero/HeroPortrait/HeroPortrait.style";

import AuthorName from "@/components/AuthorName";

function HeroPortrait() {
  return (
    <Container>
      <div
        style={{
          position: "sticky",
          top: "var(--s0)",
        }}
      >
        <ImageWrapper>
          <HeroImageBlur width={500} alt="" src={Bruno} />
          <HeroImage
            width={500}
            alt="Bruno Moleta sorrindo visto de frente e olhando para a câmera."
            src={Bruno}
          />
        </ImageWrapper>
        <Describe style={{ fontWeight: "revert" }}>
          Fotografia feita por
          <AuthorName
            author="Yasmin Schaffer"
            site="https://www.instagram.com/yaas.schafer/"
          />
        </Describe>
      </div>
    </Container>
  );
}
export default HeroPortrait;
