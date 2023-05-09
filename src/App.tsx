import { useState, useEffect } from "react";
import {
  GlobalStyles,
  StyledContainer,
  StyledDivider,
  StyledShufflerContainer,
  StyledShuffleDice,
} from "./styles/Styles";
import AdviceContent from "./component/AdviceContent";
import ContentDividerMobile from "./assets/pattern-divider-mobile.svg";
import contentDividerDesktop from "./assets/pattern-divider-desktop.svg";
import shufflerDice from "./assets/icon-dice.svg";
import AdviceResponse from "./Api";

interface Advice {
  id: number | undefined;
  advice: string | undefined;
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [advice, setAdvice] = useState<Advice>({
    id: undefined,
    advice: undefined,
  });

  const adviceContent = async () => {
    setIsLoading(true);
    const response = await AdviceResponse();
    setAdvice(response);
    setIsLoading(false);
  };

  useEffect(() => {
    adviceContent();
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <AdviceContent onContentLoad={advice} loadingProp={isLoading} />
        <picture>
          <source media="(min-width: 600px)" srcSet={ContentDividerMobile} />
          <source media="(max-width: 600px)" srcSet={contentDividerDesktop} />
          <StyledDivider src={contentDividerDesktop} alt="pattern-divider" />
        </picture>
        <StyledShufflerContainer onClick={adviceContent}>
          {isLoading ? (
            <StyledShuffleDice src={shufflerDice} alt="shuffler" />
          ) : (
            <img src={shufflerDice} alt="shuffler" />
          )}
        </StyledShufflerContainer>
      </StyledContainer>
    </>
  );
}

export default App;
