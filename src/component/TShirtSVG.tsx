const TShirtSVG = ({ color = "#ffffff", stroke = "#cccccc" }) => (
  <svg width="400" height="400" viewBox="6 8 18 15" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 11L22.3 14.9L20.1 14.2V22.9H10V14.2L7.6 15.2L6 11L11.2 8.1V8.2L14.5 11.9C14.6 12 14.7 12.1 14.9 12.1C15 12.1 15.2 12 15.3 11.9L18.7 8.2C18.7 8.2 18.7 8.1 18.8 8.1L24 11Z"
      fill={color}
      stroke={stroke}
      strokeWidth="0.3"
    />
  </svg>
);

export default TShirtSVG;
