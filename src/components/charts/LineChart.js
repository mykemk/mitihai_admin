import React, { Component } from "react";
import Chart from "chart.js";
class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    this.lineChart = new Chart(this.chartRef.current, {
      type: "line",
      data: {
        labels: this.props.labels,
        datasets: this.props.datasets.map((dataset) => {
          return {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.background,
            borderColor: dataset.color,
            borderWidth: 1,
            lineTension: 0.8,
            pointBackgroundColor: "green",
            pointHoverBackgroundColor: "black",
            pointBorderColor: "white",
            pointHitRadius: 2,
            pointRadius: 5,
            //spanGaps: true,
          };
        }),
      },
    });
  }
  componentWillUpdate() {
    this.lineChart.data.labales = this.props.labels;
    this.lineChart.data.datasets = this.props.datasets;
    this.lineChart.update();
  }
  render() {
    return (
      <canvas ref={this.chartRef} style={{ backgroundColor: "white" }}></canvas>
    );
  }
}
export default React.memo(LineChart);
