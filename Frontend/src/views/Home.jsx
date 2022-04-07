import Public from "../routes/Public/Public";
import Private from "../routes/Private/Private";

import { KEY_AUTH } from "../services/authSlice";
import { useData } from "../hooks/useUser";

const Home = () => {
  const { authentication } = useData({ reducer: KEY_AUTH });

  return <div className="">{authentication ? <Private /> : <Public />}</div>;
};

export default Home;
