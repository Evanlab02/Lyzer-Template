import React from "react";
import DoughnutGraph from "../components/DoughnutGraph";
import { DonutDataSet, DonutOptions, DonutProps } from "../helpers/propInterfaces";
import { Link } from "react-router-dom";

export default function Overview() {
    const drivers = [
        "Verstappen",
        "Perez",
        "Alonso",
        "Hamilton",
        "Russel",
        "Sainz",
        "Leclerc",
        "Stroll",
        "Ocon",
        "Gasly"
    ];

    const points = [
        144,
        105,
        93,
        69,
        50,
        48,
        42,
        27,
        21,
        14
    ];

    const colors = [
        "#00004d",
        "#000066",
        "#006600",
        "#33cccc",
        "#00ffff",
        "#cc0000",
        "#ff0000",
        "#669900",
        "#ff33cc",
        "#cc0099"
    ];

    const driverDatasets: DonutDataSet[] = [
        {
            label: "Points",
            data: points,
            backgroundColor: colors,
            hoverOffset: 15,
            rotation: 0,
            circumference: 360
        }
    ];

    const driverOptions: DonutOptions = {
        cutout: "75%",
        responsive: true,
        showLegend: false,
        legendPosition: "bottom",
        showTooltip: true,
        showTitle: true,
        titleText: "WDC Points",
        titleSize: 20,
        titleWeight: "bold",
        titleAlign: "center",
        titleColor: "white",
    };

    const driverDonutProps: DonutProps = {
        labels: drivers,
        datasets: driverDatasets,
        options: driverOptions
    };

    const teams = [
        "Red Bull",
        "Aston Martin",
        "Mercedes",
        "Ferrari",
        "Alpine",
    ]

    const teamPoints = [
        249,
        120,
        119,
        90,
        35
    ]

    const teamColors = [
        "#00004d",
        "#006600",
        "#33cccc",
        "#cc0000",
        "#ff33cc"
    ]

    const teamDatasets: DonutDataSet[] = [
        {
            label: "Points",
            data: teamPoints,
            backgroundColor: teamColors,
            hoverOffset: 15,
            rotation: 0,
            circumference: 360
        }
    ];

    const teamOptions: DonutOptions = {
        cutout: "75%",
        responsive: true,
        showLegend: true,
        legendPosition: "bottom",
        showTooltip: true,
        showTitle: true,
        titleText: "WCC Points",
        titleSize: 20,
        titleWeight: "bold",
        titleAlign: "center",
        titleColor: "white",
    };

    const teamDonutProps: DonutProps = {
        labels: teams,
        datasets: teamDatasets,
        options: teamOptions
    };


    //156
    const driverDataSetsMultiSeries: DonutDataSet[] = [
        {
            label: "Verstappen",
            data: [144, 12],
            backgroundColor: ["#00004d", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Perez",
            data: [105, 51],
            backgroundColor: ["#000066", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Alonso",
            data: [93, 63],
            backgroundColor: ["#006600", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Hamilton",
            data: [69, 87],
            backgroundColor: ["#33cccc", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Russel",
            data: [50, 106],
            backgroundColor: ["#00ffff", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Sainz",
            data: [48, 108],
            backgroundColor: ["#cc0000", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Leclerc",
            data: [42, 114],
            backgroundColor: ["#ff0000", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Stroll",
            data: [27, 129],
            backgroundColor: ["#669900", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Ocon",
            data: [21, 135],
            backgroundColor: ["#ff33cc", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        },
        {
            label: "Gasly",
            data: [14, 142],
            backgroundColor: ["#cc0099", "#1a1a1a"],
            hoverOffset: 15,
            rotation: 270,
            circumference: 180
        }
    ]

    const driverMSOptions: DonutOptions = {
        cutout: "15%",
        responsive: true,
        showLegend: false,
        legendPosition: "bottom",
        showTooltip: true,
        showTitle: true,
        titleText: "WDC Points",
        titleSize: 20,
        titleWeight: "bold",
        titleAlign: "center",
        titleColor: "white",
    };

    const driverMultiSeriesProps: DonutProps = {
        labels: ["Points", "Missed Points"],
        datasets: driverDataSetsMultiSeries,
        options: driverMSOptions
    }


    return (
        <div>
            <h1>Lyzer</h1>
            <h2>Overview V1</h2>
            <div className="panel-grid">
                <DoughnutGraph {...driverMultiSeriesProps} />
                <DoughnutGraph {...driverDonutProps} />
                <DoughnutGraph {...teamDonutProps} />
            </div>
            <Link
                className="App-link"
                to="/OverviewV2"
            >OverviewV2</Link>
        </div>
    );
}