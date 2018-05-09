import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlertModel } from '../models/alert.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() alerts: [AlertModel]
  @Output() onSelectAlert = new EventEmitter<AlertModel>();

  constructor() { }
  
  ngOnInit() {
  }

  selectAlert(alert: AlertModel) {
    this.onSelectAlert.emit(alert)
  }
}
