import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from "react-chartjs-2";
import "../styles/doughnutgraph.scss"

Chart.register([ArcElement, Tooltip, Legend]);

export default function DoughnutGraph() {
    const data = {
        labels: [
            'Max Verstappen',
            'Sergio Perez',
            'Fernando Alonso',
            'Lewis Hamilton'
        ],
        datasets: [{
            label: 'WDC Points',
            data: [144, 105, 93, 69],
            backgroundColor: [
                '#000066',
                '#0000cc',
                '#006600',
                '#00ccff'
            ],
            hoverOffset: 4,
            borderWidth: 3,
            borderColor: '#fff'
        },
        ],
        showTooltips: true,
        responsive: true
    };

    return (
        <div className="doughnut-graph">
            <Doughnut
                data={data}
            />
        </div>
    )
}