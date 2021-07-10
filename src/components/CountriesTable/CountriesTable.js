import { useState } from "react";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import styles from "./CountriesTable.module.css";
import Link from "next/link";

const orderBy = (countries, value, direction) => {
  if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 2));
  }

  return countries;
};

const SortArrow = ({ direction }) => {
  if (direction === "asc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }

  if (direction === "desc") {
    return (
      <div className={styles.heading_arrow}>
        <KeyboardArrowDownRounded color="inherit" />
      </div>
    );
  }

  return null;
};

const CountriesTable = ({ countries }) => {
  const [direction, setDirection] = useState(null);
  const [value, setValue] = useState();

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
  };

  const sortedCountries = orderBy(countries, value, direction);

  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_flag}></div>

        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}>
          <div>Name</div>
          {value === "name" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}>
          <div>Population</div>
          {value === "population" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection("area")}>
          <div>Area</div>
          {value === "area" && <SortArrow direction={direction} />}
        </button>

        <button
          className={styles.heading_area}
          onClick={() => setValueAndDirection("gini")}>
          <div>Gini</div>
          {value === "gini" && <SortArrow direction={direction} />}
        </button>
      </div>

      {sortedCountries.map((country) => {
        return (
          <Link href={`/country/${country.alpha3Code}`} key={country.name}>
            <div className={styles.row}>
              <div className={styles.flag}>
                <img src={country.flag} alt={country.name} />
              </div>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.population}>{country.population}</div>
              <div className={styles.area}>{country.area || 0}</div>
              <div className={styles.gini}>{country.gini || 0} %</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CountriesTable;
