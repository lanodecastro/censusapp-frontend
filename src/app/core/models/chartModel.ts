

export class ChartModel {
    chartType: string;
    filtered: boolean;
    value: any;

    constructor(chartType: string, filtered: boolean, value?: any) {
        this.chartType = chartType;
        this.filtered = filtered;
        this.value = value;
    }
}