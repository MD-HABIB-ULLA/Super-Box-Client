// import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
// import revenueData from "../../../../../public/data/revenueData.json";
import sourceData from "../../../../../public/data/sourceData.json";


const BarChart = () => {
    return (
        <div className="">
            <Bar
                data={{
                    labels: sourceData.map((data) => data.label),
                    datasets: [
                        {
                            label: "Count",
                            data: sourceData.map((data) => data.value),
                            backgroundColor: [
                                "rgba(43, 63, 229, 0.8)",
                                "rgba(250, 192, 19, 0.8)",
                                "rgba(253, 135, 135, 0.8)",
                            ],
                            borderRadius: 5,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            text: "Revenue Source",
                        },
                    },
                }}
            />
        </div>
    );
};

export default BarChart;