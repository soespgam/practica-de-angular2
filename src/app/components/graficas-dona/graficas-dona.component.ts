import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas-dona',
  templateUrl: './graficas-dona.component.html',
  styles: []
})
export class GraficasDonaComponent implements OnInit {
  @Input() ChartLabels: String[] = [];
  @Input() ChartData: Number[] = [];
  @Input() ChartType:String = '';

  constructor() { }

  ngOnInit() {
  }

}
