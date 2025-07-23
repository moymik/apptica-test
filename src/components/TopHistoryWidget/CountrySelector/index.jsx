import React, {useEffect} from 'react';
import styles from './index.module.css';

const CountrySelector = () => {

/*
  useEffect(() => {
    fetchCountries(dispatch);
  }, [dispatch]);

  if (loading) return <div>Loading countries...</div>;
  if (error) return <div>Error: {error}</div>;
*/
  return (
      <>
        <p>select country</p>
        <select className={styles.select}>
          {/*countries.countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
          ))*/
          }
          select</select>
      </>
  );
};

export default CountrySelector;