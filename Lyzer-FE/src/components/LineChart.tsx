import { Chart as ChartJS, Tooltip, Legend, Title, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { Line } from "react-chartjs-2";
import "../styles/linechart.scss"

export default function LineChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = ["Bahrain", "Saudi Arabia", "Australia", "Baku", "Miami", "Monaco"];

    const dataSets = [
        {
            label: "Max Verstappen",
            data: ["25", "44", "69", "87", "113", "138"],
            borderColor: "rgba(0,0,85,100%)"
        },
        {
            label: "Sergio Perez",
            data: ["18", "43", "54", "79", "97", "97"],
            borderColor: "rgba(0,0,230,100%)"
        },
        {
            label: "Fernando Alonso",
            data: ["18", "35", "43", "52", "74", "87"],
            borderColor: "rgba(0,100,0,100%)"
        }
    ]

    const data = {
        labels: labels,
        datasets: dataSets
    }

    return (
        <div className="panel line-chart">
            <Line
                data={data as any}
                options={{ responsive: true }}
            />
        </div>

    );
}