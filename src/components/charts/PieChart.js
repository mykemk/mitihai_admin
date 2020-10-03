import React, { Component } from "react";
import Chart from "chart.js";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    this.pieChart = new Chart(this.chartRef.current, {
      type: "pie",
      data: {
        labels: this.props.labels,
        datasets: this.props.datasets.map((dataset) => {
          return {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.color,
            borderColor: "white",
            borderWidth: 2,
            hoverBackgroundColor: "green",
          };
        }),
      },
    });
  }
  componentDidUpdate() {
    this.pieChart.data.labels = this.props.labels;
    this.pieChart.data.datasets = this.props.datasets;
    this.pieChart.update();
  }
  render() {
    return (
      <canvas ref={this.chartRef} style={{ backgroundColor: "white" }}>
        Oops!..there was an error loading the chart
      </canvas>
    );
  }
}

export default React.memo(PieChart);
