//fetching data through axios
import axios from "axios";

const url = "https://covid19.mathdro.id/api";
//fetch data

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl); //we dont need all the things
    //only we need a particular data so,{data} --destrutcing

    // confirmed: data.confirmed,
    // recovered:data.recoverd,
    // deaths: data.deaths,
    // lastUpdate:data.lastUpdate,
    //as we desturcture the data we can destructure the properties also

    return { confirmed, recovered, deaths, lastUpdate };

    // console.log(response)
  } catch (err) {
    console.log(err);
  }
};
export const fetchDailyData = async () => {
  try {
    //to get the daily date
    const { data } = await axios.get(`${url}/daily`);
    // call this function inside chart
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (err) {}
};
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
// import axios from "axios";

// const url = "https://covid19.mathdro.id/api";

// export const fetchData = async (country) => {
//   let changeableUrl = url;

//   if (country) {
//     changeableUrl = `${url}/countries/${country}`;
//   }

//   try {
//     const {
//       data: { confirmed, recovered, deaths, lastUpdate },
//     } = await axios.get(changeableUrl);

//     return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     return error;
//   }
// };

// // export const fetchDailyData = async () => {
// //   try {
// //     const { data } = await axios.get(`${url}/daily`);

// //     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
// //   } catch (error) {
// //     return error;
// //   }
// // };

// // Instead of Global, it fetches the daily data for the US
// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://api.covidtracking.com/v1/us/daily.json"
//     );

//     return data.map(({ positive, recovered, death, dateChecked: date }) => ({
//       confirmed: positive,
//       recovered,
//       deaths: death,
//       date,
//     }));
//   } catch (error) {
//     return error;
//   }
// };

// export const fetchCountries = async () => {
//   try {
//     const {
//       data: { countries },
//     } = await axios.get(`${url}/countries`);

//     return countries.map((country) => country.name);
//   } catch (error) {
//     return error;
//   }
// };
