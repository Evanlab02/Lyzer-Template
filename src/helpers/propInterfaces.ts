export interface DonutProps {
    labels: string[],
    datasets: DonutDataSet[],
    options: DonutOptions
}

export interface DonutDataSet {
    label: string,
    data: number[],
    backgroundColor: string[],
    hoverOffset: number | undefined,
    rotation: number | undefined,
    circumference: number | undefined,
}

export interface DonutOptions {
    cutout: string | undefined,
    responsive: boolean | undefined,
    showLegend: boolean | undefined,
    legendPosition: string | undefined,
    showTitle: boolean | undefined,
    titleText: string | undefined,
    titleSize: number | undefined,
    titleWeight: string | undefined,
    titleAlign: string | undefined,
    titleColor: string | undefined,
    showTooltip: boolean | undefined,
}
