// dependencies: i axios react chart.js(for making charts)
// react-countup classnames(helps us to animate the numbers)

import React from "react";
import styles from "./App.module.css";
//exporting these all in index.js
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import coronaImage from "./images/image.png";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  //fetching data from api though componentDid Mount
  //updatng data -- > fetchData
  async componentDidMount() {
    // const data = await fetchData();
    const fetchedData = await fetchData();
    // console.log(data);
    this.setState({ data: fetchedData });
  }
  //method to call country chart
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country });
    //fetch the data
    //set the date
  };
  //we need the fetch data in card component so we are declaring the state
  render() {
    //styles.container --> without interfering other css module
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.Image} src={coronaImage} alt="covid-19" />
        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
