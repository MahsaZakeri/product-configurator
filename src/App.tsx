import Layout from "./layout/layout";
import ConfiguratorPanel from "./component/ConfiguratorPanel";
import ProductPreview from "./component/ProductPreview";

const App = () => {
  return <Layout left={<ConfiguratorPanel />} right={<ProductPreview />} />;
};

export default App;
