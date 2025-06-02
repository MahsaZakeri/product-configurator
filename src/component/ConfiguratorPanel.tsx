import styled from "styled-components";
import { useDesignStore } from "../store/designStore";
import { ProductSize } from "../models/ProductSize";

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  gap: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 6px 10px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  height: 45px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ConfiguratorPanel = () => {
  const { color, text, size, setColor, setText, setSize, resetDesign } = useDesignStore();

  return (
    <PanelWrapper>
      <h2>Product Configurator</h2>

      <Label>
        Pick color:
        <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </Label>

      <Label>
        Add text:
        <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </Label>

      <Label>
        Select size:
        <Select value={size} onChange={(e) => setSize(e.target.value as ProductSize)}>
          {Object.values(ProductSize).map((sz) => (
            <option key={sz} value={sz}>
              {sz}
            </option>
          ))}
        </Select>
      </Label>

      <Button onClick={resetDesign}>Reset</Button>
    </PanelWrapper>
  );
};

export default ConfiguratorPanel;
