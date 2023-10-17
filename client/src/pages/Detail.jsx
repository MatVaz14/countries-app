import { Navbar, Info, Loading } from "../components";
import { useStore, useDispatch } from "../store/StoreProvider.js";

const Detail = () => {
  const store = useStore();
  const { isLoadingDetail } = store;
  return (
    <section>
      <Navbar page={1} />
      {isLoadingDetail === true ? <Loading /> : <Info />}
    </section>
  );
};

export default Detail;
