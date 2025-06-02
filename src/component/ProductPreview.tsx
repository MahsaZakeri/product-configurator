import styled from "styled-components";
import { useDesignStore } from "../store/designStore";
import TShirtSVG from "./TShirtSVG";

const SvgWrapper = styled.div`
  width: 100%px;
  height: 100%px;
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: bold;
  pointer-events: none;
  text-align: center;
  width: 195px;
  z-index: 3;
  word-wrap: break-word;
`;

const ProductPreview = () => {
  const { color, text, size } = useDesignStore();

  return (
    <div>
      <SvgWrapper>
        <TShirtSVG color={color} />
        <TextOverlay>{text}</TextOverlay>
      </SvgWrapper>
      <p>Selected size: {size}</p>
    </div>
  );
};

export default ProductPreview;
