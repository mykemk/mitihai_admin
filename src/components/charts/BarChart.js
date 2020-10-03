import React, { PureComponent } from "react";
import Chart from "chart.js";

class BarChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    this.barChart = new Chart(this.chartRef.current, {
      type: "bar",
      data: {
        labels: this.props.labels,
        datasets: this.props.datasets.map((dataset) => {
          return {
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.colors,
            borderColor: "gray",
            minBarLength: 8,
            barPercentage: 0.8,
          };
        }),
      },
    });
  }
  componentDidUpdate() {
    this.barChart.data.labels = this.props.labels;
    this.barChart.data.datasets = this.props.datasets;
    this.barChart.update();
  }
  render() {
    console.log("rendering...");
    return (
      <canvas ref={this.chartRef} style={{ backgroundColor: "white" }}>
        Oops..there was an error loading the chart
      </canvas>
    );
  }
}

export default React.memo(BarChart);
