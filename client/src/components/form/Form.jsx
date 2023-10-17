import axios from "axios";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { useStore, useDispatch } from "../../store/StoreProvider.js";
import { Season, Difficulty } from "./index.js";

import "./Form.css";

const Form = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const store = useStore();
  const { countriesOrigin } = store;
  const countries = [...countriesOrigin].sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  const [error, setError] = useState({
    season: "",
    countryId: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "1",
    duration: {
      hs: "00",
      min: "00",
    },
    season: [],
    countryId: [],
  });

  useEffect(() => {
    if (formData.countryId.length === 0) {
      setError({
        ...error,
        countryId: "You need to select one or more countries...",
      });
    } else {
      setError({
        ...error,
        countryId: "",
      });
    }

    if (formData.countryId.length === 0) {
      setError({
        ...error,
        countryId: "You need to select one or more countries...",
      });
      return;
    }
    if (formData.season.length === 0) {
      setError({
        ...error,
        season: "You need to select one or more Season...",
      });
      return;
    }

    if (formData.season.length > 0 && formData.countryId.length > 0) {
      setError({
        season: "",
        countryId: "",
      });
    }
  }, [formData, error]);

  const handleData = (event) => {
    let input = event.target.name;
    if (input === "name") {
      setFormData({
        ...formData,
        name: event.target.value,
      });
    }
    if (input === "durationHs") {
      console.log(event.target.value);
      setFormData({
        ...formData,
        duration: { ...formData.duration, hs: event.target.value.toString() },
      });
    }
    if (input === "durationMin") {
      setFormData({
        ...formData,
        duration: { ...formData.duration, min: event.target.value.toString() },
      });
    }

    if (input === "season") {
      if (event.target.checked) {
        // eslint-disable-next-line no-unused-expressions
        formData.season.find((season) => season === event.target.value)
          ? null
          : setFormData({
              ...formData,
              [event.target.name]: [...formData.season, event.target.value],
            });
      }
      if (!event.target.checked) {
        let seasons = formData.season.filter(
          (season) => season !== event.target.value
        );
        setFormData({
          ...formData,
          season: seasons,
        });
      }
    }

    if (input === "countryId") {
      if (event.target.checked) {
        // eslint-disable-next-line no-unused-expressions
        formData.countryId.find((country) => country === event.target.value)
          ? null
          : setFormData({
              ...formData,
              countryId: [...formData.countryId, event.target.value],
            });
      }
      if (!event.target.checked) {
        let CountryIds = formData.countryId.filter(
          (country) => country !== event.target.value
        );
        setFormData({
          ...formData,
          countryId: CountryIds,
        });
      }
      console.log(formData.countryId);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      difficulty: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let durat = (
      formData.duration.hs +
      " hs " +
      formData.duration.min +
      " min"
    ).toString();

    axios.post("http://localhost:3002/activity", {
      name: formData.name,
      duration: durat,
      difficulty: formData.difficulty,
      season: formData.season,
      CountryId: formData.countryId,
    });
    //dispatch({ type: "GET_COUNTRIES" });
    swal({
      title: "Actividad creada correctamente!",
      icon: "success",
      button: "Aceptar",
    });

    setFormData({
      name: "",
      difficulty: "1",
      duration: {
        hs: "00",
        min: "00",
      },
      season: [],
      countryId: [],
    });
    event.target.reset();
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="container_Inputs">
        <h1>CREATE ACTIVITY!</h1>
        <div className="gapOne_Inputs">
          <div className="gapOne_Article">
            <article>
              <h4>Name</h4>
              <label>
                <input
                  required
                  onChange={handleData}
                  name="name"
                  placeholder="Name..."
                  type="text"
                />
              </label>
            </article>
            <article>
              <h4>Duration</h4>
              <label>
                <input
                  required
                  className="duration_Input"
                  onChange={handleData}
                  name="durationHs"
                  max="24"
                  min="00"
                  type="number"
                />{" "}
                Hs
              </label>
              <label>
                <input
                  required
                  className="duration_Input"
                  onChange={handleData}
                  name="durationMin"
                  type="number"
                  max="59"
                  min="00"
                />{" "}
                Min
              </label>
            </article>
          </div>
        </div>

        <div className="gapTwo_Inptus">
          <select name="difficulty" onChange={handleChange}>
            <option>Difficulty</option>
            {Difficulty.map((diff) => (
              <option key={diff.value} value={diff.value}>
                {diff.value}
              </option>
            ))}
          </select>

          <div>
            {Season.map((season) => (
              <label>
                <input
                  onChange={handleData}
                  key={season.value}
                  name="season"
                  type="checkbox"
                  value={season.value}
                />
                {season.name}
              </label>
            ))}
          </div>

          <button
            className={
              error.season.length > 0 || error.countryId.length > 0
                ? "desactive"
                : null
            }
          >
            Create
          </button>
        </div>
      </div>

      <div className="container_CountrieOption">
        {error.countryId.length ? (
          <span className="error">{error.countryId}</span>
        ) : null}
        {countries.map((countrie) => (
          <label>
            <input
              onChange={handleData}
              name="countryId"
              type="checkbox"
              key={countrie.id}
              value={countrie.id}
            />{" "}
            {countrie.name}
          </label>
        ))}
      </div>
    </form>
  );
};

export default Form;
