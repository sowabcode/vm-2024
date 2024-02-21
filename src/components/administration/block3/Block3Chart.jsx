import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    height: 240,
    // width: 350,
    margin: [15, 0, 40, 32],
  },
  title: {
    text: "",
    align: "left",
  },
  legend: {
    enabled: false,
    align: "left",
  },
  xAxis: {
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Apr",
      "Mai",
      "Jui",
      "Jul",
      "Aout",
      "sept",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: [
    {
      data: [5, 2, 15, 4, 8, 6, 10, 13, 5, 8, 9, 3],
    },
  ],
};

const Block3Chart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Block3Chart;
