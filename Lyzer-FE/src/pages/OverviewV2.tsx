import DonutGraphV2 from "../components/DonutGraphV2";
import LineChart from "../components/LineChart";
import SchedulePanel from "../components/SchedulePanel";
import { DonutDataSetV2, DonutOptionsV2, DonutPropsV2 } from "../helpers/propInterfaces";

export default function OverviewV2() {
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
        "rgba(0,0,85,100%)",
        "rgba(0,0,230,60%)",
        "rgba(0,70,0,100%)",
        "rgba(0,222,222,100%)",
        "rgba(0,255,255,100%)",
        "rgba(255,0,0,65%)",
        "#ff0000",
        "#669900",
        "#ff33cc",
        "#cc0099"
    ];

    const hovorColors = [
        "rgba(0,0,230,100%)",
        "rgba(0,0,230,100%)",
        "rgba(0,100,0,100%)",
        "rgba(0,255,255,100%)",
        "rgba(150,255,255,100%)",
        "rgba(255,0,0,100%)",
        "#ff0000",
        "#669900",
        "#ff33cc",
        "#cc0099"
    ];

    const msBorder = [
        "rgba(237,231,225,50%)"
    ]

    const driverDatasets: DonutDataSetV2[] = [
        {
            label: "Points",
            data: points,
            backgroundColor: colors,
            borderColor: msBorder,
            borderWidth: 1,
            hoverBackgroundColor: hovorColors
        }
    ];

    const driverOptions: DonutOptionsV2 = {
        cutout: "70%",
        responsive: true,
        showLegend: true,
        legendPosition: "left",
        showTooltip: true,
        showTitle: true,
        titleText: "WDC Points",
        titleSize: 20,
        titleWeight: "bold",
        titleAlign: "center",
        titleColor: "white",
        globalHoverOffset: 35,
        globalRotation: 0,
        globalCircumference: 360
    };

    const driverDonutProps: DonutPropsV2 = {
        labels: drivers,
        datasets: driverDatasets,
        options: driverOptions
    };

    const driverDataSetsMultiSeries: DonutDataSetV2[] = [
        {
            label: "Verstappen",
            data: [144, 12],
            backgroundColor: ["#00004d", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Perez",
            data: [105, 51],
            backgroundColor: ["#000066", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Alonso",
            data: [93, 63],
            backgroundColor: ["#006600", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Hamilton",
            data: [69, 87],
            backgroundColor: ["#33cccc", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Russel",
            data: [50, 106],
            backgroundColor: ["#00ffff", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Sainz",
            data: [48, 108],
            backgroundColor: ["#cc0000", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Leclerc",
            data: [42, 114],
            backgroundColor: ["#ff0000", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder

        },
        {
            label: "Stroll",
            data: [27, 129],
            backgroundColor: ["#669900", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Ocon",
            data: [21, 135],
            backgroundColor: ["#ff33cc", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        },
        {
            label: "Gasly",
            data: [14, 142],
            backgroundColor: ["#cc0099", "#1a1a1a"],
            borderWidth: 1,
            borderColor: msBorder
        }
    ]

    const driverMSOptions: DonutOptionsV2 = {
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
        globalCircumference: 180,
        globalHoverOffset: 5,
        globalRotation: 270
    };

    const driverMultiSeriesProps: DonutPropsV2 = {
        labels: ["Points", "Missed Points"],
        datasets: driverDataSetsMultiSeries,
        options: driverMSOptions
    }

    return (
        <div>
            <h1>Lyzer</h1>
            <h2>Overview V2</h2>
            <SchedulePanel />
            <div className="panel-grid">
                <LineChart />
                <DonutGraphV2 {...driverDonutProps} />
                <DonutGraphV2 {...driverMultiSeriesProps} />
            </div>
        </div>
    );
}