import React from "react";
import "./App.css";
import CanvasJSReact from "./library/canvasjs.react";
import Map from "./library/Map";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "./covid_logo.png";
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const config = {
  headers: { "Access-Control-Allow-Origin": "*" },
};

class App extends React.Component {
  state = {
    country: "",
    graphData: [],
    visible: false,
  };

  // Map에서 선택 된 나라 정보 받아오기
  handleCountry = (data) => {
    this.setState({ country: data, visible: true });
    var sendData = { country: { data } };
    console.log(sendData);

    // 서버로 그래프 데이터 받아오기
    axios.get(`http://127.0.0.1:5000/getData/${data}`).then((res) => {
      console.log(res.data);
    });

    console.log(data);
  };

  render() {
    const { country, visible } = this.state;
    console.log("Main render");
    console.log(window.token);
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
        <div style={{ textAlign: "center", margin: 1 }}>
          <img src={logo} />
        </div>
        <Grid container spacing={3} justify="center" style={{ padding: 10 }}>
          <Grid item xs={12} sm={6}>
            <Paper style={{ padding: 5 }}>
              <Map onCreate={this.handleCountry} selectCountry={country} />
            </Paper>
          </Grid>
          {visible ? (
            <Grid item xs={12} sm={6}>
              <Paper style={{ padding: 5 }}>
                <CanvasJSChart options={options} />
              </Paper>
            </Grid>
          ) : null}
        </Grid>
      </div>
    );
  }
}

// module.exports = App;
export default App;
