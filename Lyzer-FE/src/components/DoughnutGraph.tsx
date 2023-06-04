import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DonutProps } from "../helpers/propInterfaces";
import "../styles/doughnutgraph.scss";

export default function DoughnutGraph(props: DonutProps) {
    ChartJS.register(ArcElement, Tooltip, Legend, Title);

    const data: ChartData = {
        labels: props.labels,
        datasets: props.datasets
    };

    const options: any = {
        cutout: props.options.cutout,
        responsive: props.options.responsive,
        plugins: {
            legend: {
                display: props.options.showLegend,
                position: props.options.legendPosition,
            },
            tooltip: {
                enabled: props.options.showTooltip,
            },
            title: {
                display: props.options.showTitle,
                text: props.options.titleText,
                font: {
                    size: props.options.titleSize,
                    weight: props.options.titleWeight
                },
                align: props.options.titleAlign,
                color: props.options.titleColor,
            }
        }
    };

    return (
        <div className="doughnut-graph panel" >
            <Doughnut
                data={data as any}
                options={options}
            />
        </div >
    )
}