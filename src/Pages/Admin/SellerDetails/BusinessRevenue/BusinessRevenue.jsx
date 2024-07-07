import Title from "../../../../Components/Title";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "../../../../../public/data/revenueData.json";
import sourceData from "../../../../../public/data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const BusinessRevenue = () => {
    return (
        <div className="mt-10">
            <Title title2={'Business Revenue'}></Title>

            <div className="grid grid-cols-2 gap-5 h-screen mt-20 px-4">

                <div className="">
                    <Line
                        data={{
                            labels: revenueData.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: revenueData.map((data) => data.revenue),
                                    backgroundColor: "#064FF0",
                                    borderColor: "#064FF0",
                                },
                                {
                                    label: "Cost",
                                    data: revenueData.map((data) => data.cost),
                                    backgroundColor: "#FF3030",
                                    borderColor: "#FF3030",
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                            plugins: {
                                title: {
                                    text: "Monthly Revenue & Cost",
                                },
                            },
                        }}
                    />
                </div>

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

                <div className="">
                    <Doughnut
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
                                    borderColor: [
                                        "rgba(43, 63, 229, 0.8)",
                                        "rgba(250, 192, 19, 0.8)",
                                        "rgba(253, 135, 135, 0.8)",
                                    ],
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                title: {
                                    text: "Revenue Sources",
                                },
                            },
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default BusinessRevenue;