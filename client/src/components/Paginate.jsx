import { useStore, useDispatch } from "../store/StoreProvider.js";

import "./styles/Paginate.css";

const Paginate = () => {
  const dispatch = useDispatch();
  const store = useStore();

  const {
    countries,
    currentPage,
    cantPerPage,
    minBtn,
    maxBtn,
    indexOne,
    indexTwo,
  } = store;
  const cantButtons = Math.ceil(countries.length / cantPerPage);
  const buttons = [];
  for (let i = 0; i < Math.ceil(countries.length / cantPerPage); i++) {
    buttons.push(i);
  }

  const handleClick = (event) => {
    const selectedPage = Number(event.target.value);

    // si la pagina seleccionada 2 y current es 0 por ej
    if (selectedPage !== currentPage) {
      dispatch({ type: "PAGE", payload: selectedPage });
      dispatch({
        type: "INDEX",
        payload: [(selectedPage - 1) * cantPerPage, selectedPage * cantPerPage],
      });
    }
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    dispatch({ type: "PAGE", payload: currentPage - 1 });
    dispatch({
      type: "INDEX",
      payload: [indexOne - cantPerPage, indexTwo - cantPerPage],
    });
    if (minBtn === 0) return;
    dispatch({ type: "INDEX_BTN", payload: [minBtn - 1, maxBtn - 1] });
  };

  const handleNext = () => {
    if (currentPage === cantButtons) return;
    dispatch({ type: "PAGE", payload: currentPage + 1 });
    dispatch({
      type: "INDEX",
      payload: [indexOne + cantPerPage, indexTwo + cantPerPage],
    });
    if (cantButtons >= 5) {
      if (maxBtn !== buttons.length) {
        dispatch({ type: "INDEX_BTN", payload: [minBtn + 1, maxBtn + 1] });
      }
    }
  };

  return (
    <div className="container_Paginate">
      {buttons.length ? (
        <>
          <button onClick={handlePrev}>{"<<"}</button>
          {buttons
            .map((btn) => (
              <button
                className={`${currentPage === btn + 1 ? "btn_active" : "btn"}`}
                value={btn + 1}
                key={btn}
                onClick={handleClick}
              >
                {btn + 1}
              </button>
            ))
            .slice(minBtn, maxBtn)}

          <button onClick={handleNext}>{">>"}</button>
        </>
      ) : null}
    </div>
  );
};

export default Paginate;
