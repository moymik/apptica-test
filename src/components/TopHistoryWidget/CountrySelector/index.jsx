import React from 'react';
import styles from './index.module.css';

const CountrySelector = ({countries,onSelectionChanged}) => {

  return (
      <>
        <p>select country</p>
        <select className={styles.select} onChange={(e) => {
          onSelectionChanged(e.target.value);
        }}>
          {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
          ))
          }
          select</select>
      </>
  );
};

export default CountrySelector;