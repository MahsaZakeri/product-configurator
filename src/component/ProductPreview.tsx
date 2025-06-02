import styled from "styled-components";
import { useDesignStore } from "../store/designStore";

const TShirt = styled.div<{ color: string }>`
  width: 250px;
  height: 300px;
  background-color: ${(props) => props.color};
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextOverlay = styled.div`
  position: absolute;
  color: #000;
  font-size: 16px;
`;

const ProductPreview = () => {
  const { color, text, size } = useDesignStore();

  return (
    <div>
      <TShirt color={color}>
        <TextOverlay>{text}</TextOverlay>
      </TShirt>
      <p>Selected size: {size}</p>
    </div>
  );
};

export default ProductPreview;
