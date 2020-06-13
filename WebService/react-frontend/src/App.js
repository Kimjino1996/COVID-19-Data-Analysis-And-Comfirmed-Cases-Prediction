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
    // 서버로 그래프 데이터 받아오기
    axios.get(`http://127.0.0.1:5000/getData/${data}`).then((res) => {
      // graph data 만들기
      var prediction = [];
      var real = [];
      // console.log(res.data.prediction);
      // console.log(res.data.real);
      res.data.prediction.map((d) => {
        var dataSplit = d.split("-");
        var year = parseInt(dataSplit[0]);
        var month = parseInt(dataSplit[1]);
        var day = parseInt(dataSplit[2]);
        if (dataSplit[3] !== "None") {
          var confirm = parseFloat(dataSplit[3]);
          prediction.push({ x: new Date(year, month - 1, day), y: confirm });
        }
      });
      res.data.real.map((d) => {
        var dataSplit = d.split("-");
        var year = parseInt(dataSplit[0]);
        var month = parseInt(dataSplit[1]);
        var day = parseInt(dataSplit[2]);
        if (dataSplit[3] !== "None") {
          var confirm = parseFloat(dataSplit[3]);
          real.push({ x: new Date(year, month - 1, day), y: confirm });
        }
      });
      var graphData = {
        animationEnable: true,
        title: { text: data },
        axisX: { valueFormatString: "MM/DD" },
        axisY: {
          title: "Confirmer",
          includeZero: false,
        },
        data: [
          {
            yValueFormatString: "#,###",
            xValueFormatString: "YYYY/MM/DD 예측",
            type: "spline",
            dataPoints: prediction,
          },
          {
            yValueFormatString: "#,###",
            xValueFormatString: "YYYY/MM/DD 실제",
            type: "spline",
            dataPoints: real,
          },
        ],
      };
      // console.log(real);
      this.setState({ country: data, visible: true, graphData });
    });
    // console.log(data);
  };

  render() {
    const { country, visible, graphData } = this.state;
    console.log("Main render");
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
                <CanvasJSChart options={graphData} />
                <div style={{ textAlign: "center" }}>
                  <span style={({ color: 0x000 }, { font_size: 20 })}>
                    방역수준 : 우수
                  </span>
                </div>
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
