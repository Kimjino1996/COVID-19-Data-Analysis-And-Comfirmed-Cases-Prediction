import React from "react";
import { VectorMap } from "react-jvectormap";

class Map extends React.Component {
  
  // App 으로 data 전달 하기
  handleClick = (e, countryCode) => {
    // this.refs.map.$mapObject.tip.hide();
    
    // tip hide
    setTimeout(()=> { Array.from(document.getElementsByClassName("jvectormap-tip")).forEach((el) => { el.style.display = 'none' }); },10);
    // 데이터 전달
    this.props.onCreate(countryCode);
  };


  render() {
    const {selectCountry} = this.props;
    var mapData = {};
    mapData[`${selectCountry}`] = 110;
    // console.log("MAP render");
    // console.log(mapData);
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          type="text/css"
          media="screen"
        />
        <VectorMap
          map={"world_mill"}
          backgroundColor="transparent" //change it to ocean blue: #0077be
          zoomOnScroll={true}
          onRegionClick={this.handleClick} //gets the country code
          containerClassName="map"
          containerStyle={{
            width: "100%",
            height: "400px",
          }}
          regionStyle={{
            initial: {
              fill: "#e4e4e4",
              "fill-opacity": 0.9,
              stroke: "none",
              "stroke-width": 0,
              "stroke-opacity": 0,
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: "pointer",
            },
            selected: {
              fill: "#2938bc", //color for the clicked country
            },
            selectedHover: {},
          }}
          regionsSelectable={true}
          regionsSelectableOne={true}
          series={{
            regions: [
              {
                values : mapData,
                //this is your data
                scale: ["#146804", "#C43030"], //your color game's here
                normalizeFunction: "polynomial",
              },
            ],
          }}
        />
      </div>
    );
  }
}
export default Map;
