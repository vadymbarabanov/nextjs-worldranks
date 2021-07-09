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
        <button
          className={styles.heading_name}
          onClick={() => setValueAndDirection("name")}>
          <div>Name</div>
          <SortArrow />
        </button>

        <button
          className={styles.heading_population}
          onClick={() => setValueAndDirection("population")}>
          <div>Population</div>
          <SortArrow direction={direction} />
        </button>
      </div>

      {sortedCountries.map((country) => {
        return (
          <Link href={`/country/${country.alpha3Code}`}>
            <div className={styles.row}>
              <div className={styles.name}>{country.name}</div>
              <div className={styles.population}>{country.population}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default CountriesTable;
