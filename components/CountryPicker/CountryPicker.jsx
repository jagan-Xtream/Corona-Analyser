import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]); //setFetchedCountries ---> going to enable to pick diff countries

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
// import React, { useState, useEffect } from "react";
// import { NativeSelect, FormControl } from "@material-ui/core";

// import { fetchCountries } from "../../api";

// import styles from "./CountryPicker.module.css";

// const Countries = ({ handleCountryChange }) => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     const fetchAPI = async () => {
//       setCountries(await fetchCountries());
//     };

//     fetchAPI();
//   }, []);

//   return (
//     <FormControl className={styles.formControl}>
//       <NativeSelect
//         defaultValue=""
//         onChange={(e) => handleCountryChange(e.target.value)}
//       >
//         <option value="">United States</option>
//         {countries.map((country, i) => (
//           <option key={i} value={country}>
//             {country}
//           </option>
//         ))}
//       </NativeSelect>
//     </FormControl>
//   );
// };

// export default Countries;
