import { Navbar, AllCard, Paginate, Loading, Filter } from "../components";
import { useStore } from "../store/StoreProvider.js";

import "./styles/Home.css";

const Home = () => {
  const store = useStore();

  const { isLoading } = store;

  return (
    <section className="section_Home">
      <div className="blue__gradientHome" />
      <div className="celeste__gradientHome" />
      <div className="pink__gradientHome" />
      <Navbar page={0} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Filter />
          <Paginate />
          <AllCard />
        </>
      )}
    </section>
  );
};

export default Home;
