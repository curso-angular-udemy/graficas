import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.css']
})
export class PolarComponent {

  public polarAreaChartLabels: Label[] = ['Paella', 'Salmorejo', 'Cocido', 'Tortilla', 'Fabada'];
  public polarAreaChartData: SingleDataSet = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize() {
    const nElements = this.polarAreaChartData.length;
    const result = [];
    for (let i = 0; i < nElements; i++) {
      result.push(Math.round(Math.random() * 100));
    }
    this.polarAreaChartData = result;
  }
}
