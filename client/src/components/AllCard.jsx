import Card from "./Card.jsx";
import { useStore, useDispatch } from "../store/StoreProvider.js";
import "./styles/AllCard.css";
import { useEffect } from "react";

const AllCard = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const { countriesOrigin, countries, indexOne, indexTwo } = store;

  return (
    <div className="container_AllCard">
      {countries
        ?.map((countrie) => <Card id={countrie.id} flag={countrie.flag} />)
        .slice(indexOne, indexTwo)}
    </div>
  );
};

export default AllCard;
