import React, { PureComponent } from "react";
import Chart from "chart.js";

class DoughnutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    this.doughnutChart = new Chart(this.chartRef.current, {
      type: "doughnut",
      data: {
        labels: this.props.labels,
        datasets: this.props.datasets.map((dataset) => {
          return {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.color,
            borderColor: "white",
            borderWidth: 1,
            hoverBackgroundColor: "green",
          };
        }),
      },
    });
  }
  componentDidUpdate() {
    this.doughnutChart.data.labels = this.props.labels;
    this.doughnutChart.data.datasets = this.props.datasets;
    this.doughnutChart.update();
  }
  render() {
    return (
      <canvas ref={this.chartRef} style={{ backgroundColor: "white" }}>
        Oops!..there was an error loading the chart
      </canvas>
    );
  }
}

export default React.memo(DoughnutChart);
