import styled from "styled-components";
import Ingredients from "./ingredients";

export default function TextBlock() {
  const Title = styled.h4`
    display: flex;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const MainTitle = styled.h1`
    display: flex;
    font-size: calc(20px + 2vmin);
    color: white;
  `;

  const MainDiv = styled.div`
    display: flex;
  `;

  const DottedDiv = styled.div`
    border: 6px solid black;
  `;

  return (
    <MainDiv>
      <DottedDiv>
        <MainTitle>Ricotta Cheescake Recipe</MainTitle>
        <Title>Ingredients</Title>
        {/* <Ingredients /> */}
      </DottedDiv>
    </MainDiv>
  );
}
