import React from 'react';
import styles from './index.module.css';

const CountrySelector = ({ countries = [], onSelectionChanged = () => {} }) => {
  const handleChange = (e) => {
    onSelectionChanged(e.target.value);
  };

  return (
      <div className={styles.container}>
        <p className={styles.label}>Select country</p>
        <select
            className={styles.select}
            onChange={handleChange}
            defaultValue=""
        >
          <option value="" disabled>Select a country</option>
          {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
          ))}
        </select>
      </div>
  );
};

export default React.memo(CountrySelector);