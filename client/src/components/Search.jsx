import { useState } from "react";
import { useStore, useDispatch } from "../store/StoreProvider.js";

import "./styles/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { cantPerPage } = store;
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const newName = event.target.value;
    setName(newName); // Actualiza el estado con el nuevo valor
    if (newName.length === 0) {
      dispatch({ type: "PAGE", payload: 1 });
      dispatch({ type: "INDEX", payload: [0, cantPerPage] });
      dispatch({ type: "INDEX_BTN", payload: [0, 5] });
      dispatch({ type: "SEARCH", payload: "" });
    } else {
      dispatch({ type: "PAGE", payload: 1 });
      dispatch({ type: "INDEX", payload: [0, cantPerPage] });
      dispatch({ type: "INDEX_BTN", payload: [0, 5] });
      dispatch({ type: "SEARCH", payload: name });
    }
  };

  return (
    <div className="container_Search">
      <input
        onChange={handleChange}
        placeholder="Search Country..."
        type="text"
      />
    </div>
  );
};

export default Search;
