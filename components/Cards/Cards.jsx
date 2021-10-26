import React from "react";
//impoorting from material ui
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
//for animation
import CountUp from "react-countup";
//to do multiple styles
import cx from "classnames";
import styles from "./Cards.module.css";
// we have passed like props i.e.., data in app.js so mention data

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //cannot read value of undefined error solution
  if (!confirmed) {
    return "loading....";
  }
  //we are using material ui-core !!
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            {/* //typography -- text in material ui */}
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            {/* {confirmed.value } --> gets the values in browser */}
            <Typography variant="h6">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            {/* //last update--it is not a human readable so,, to make it we create new DATE */}
            {/* .toDateString ----> human readable format */}
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            {/* //typography -- text in material ui */}
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h6">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            {/* //typography -- text in material ui */}
            <Typography color="textSecondary" gutterBottom>
              deaths
            </Typography>
            <Typography variant="h6">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
// import React from "react";
// import { Typography, Grid } from "@material-ui/core";
// import styles from "./Cards.module.css";

// const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
//   if (!confirmed) {
//     return "Loading...";
//   }

//   return (
//     <div className={styles.container}>
//       <Typography gutterBottom variant="h4" component="h2">
//         Global
//       </Typography>
//       <Grid container spacing={3} justify="center">
//         <CardComponent
//           className={styles.infected}
//           cardTitle="Infected"
//           value={confirmed.value}
//           lastUpdate={lastUpdate}
//           cardSubtitle="Number of active cases from COVID-19."
//         />
//         <CardComponent
//           className={styles.recovered}
//           cardTitle="Recovered"
//           value={recovered.value}
//           lastUpdate={lastUpdate}
//           cardSubtitle="Number of recoveries from COVID-19."
//         />
//         <CardComponent
//           className={styles.deaths}
//           cardTitle="Deaths"
//           value={deaths.value}
//           lastUpdate={lastUpdate}
//           cardSubtitle="Number of deaths caused by COVID-19."
//         />
//       </Grid>
//     </div>
//   );
// };

// export default Info;
