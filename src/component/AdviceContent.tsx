import { StyledContent } from "../styles/Styles";

interface Prop {
  onContentLoad: {
    id: number | undefined;
    advice: string | undefined;
  };
  loadingProp: boolean;
}

function AdviceContent({ onContentLoad, loadingProp }: Prop) {
  return (
    <>
      <h6>Advice #{onContentLoad.id}</h6>
      <StyledContent variant={loadingProp}>
        "{onContentLoad.advice}"
      </StyledContent>
    </>
  );
}

export default AdviceContent;
