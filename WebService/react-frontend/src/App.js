import React from "react";
import "./App.css";
import CanvasJSReact from "./library/canvasjs.react";
import Map from "./library/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends React.Component {
  state = {
    country: "",
    graphData: [],
  };

  // Map에서 선택 된 나라 정보 받아오기
  handleCountry = (data) => {
    this.setState({ country: data });
    console.log(data);
  };

  render() {
    const { country } = this.state;
    console.log("Main render");
    console.log(country);
    const options = {
      animationEnabled: true,
      title: {
        text: country,
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        title: "Sales (in USD)",
        prefix: "$",
        includeZero: false,
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 10000 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 2313 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 },
          ],
        },
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 },
          ],
        },
      ],
    };
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper style={{ margin: 5 }}>
              <Map onCreate={this.handleCountry} selectCountry = {country} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ margin: 5 }}>
              <CanvasJSChart options={options} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

// module.exports = App;
export default App;
