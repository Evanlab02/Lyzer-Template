import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DonutPropsV2 } from "../helpers/propInterfaces";

export default function DonutGraphV2(props: DonutPropsV2) {
    ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

    const datasets: object[] = [];

    props.datasets.forEach((dataset) => {
        datasets.push({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.backgroundColor,
            borderColor: dataset.borderColor,
            hoverOffset: props.options.globalHoverOffset,
            rotation: props.options.globalRotation,
            circumference: props.options.globalCircumference,
            borderWidth: dataset.borderWidth,
            hoverBackgroundColor: dataset.hoverBackgroundColor
        })
    });


    const data = {
        labels: props.labels,
        datasets: datasets
    };

    return (
        <div className="doughnut-graph panel" >
            <Doughnut
                data={data as any}
                options={options}
            />
        </div >
    );
}