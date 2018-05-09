import { Component, OnInit } from '@angular/core';
import { AlertsService } from './services/alerts/alerts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _alertsService: AlertsService) { }
  // Initialize variables that will be injected into children components
  public alerts;
  private totalAlerts;
  public detailedAlert;
  // Call alerts service here, so that we are only making one http request per page load
  ngOnInit() {
    this._alertsService.getAlerts().subscribe(
      data => { this.totalAlerts = data; this.alerts = this.totalAlerts; this.detailedAlert = this.alerts[0]},
      err => console.error(err),
      () => console.log('done')    
    )
  }
  /**
   * Filter results by attribute and value, or reset if attribute is = to 'reset'
   * @param attribute which attribute to filter on
   * @param value what value that attribute should =
   */
  filterAlerts(attribute: string, value: string) {
    if (attribute === 'Reset') {
      this.resetAlerts();
      this.detailedAlert = this.alerts[0];
    } else {
      this.alerts = this.totalAlerts.filter((el) => {
        return el[attribute] === value;
      })

      this.detailedAlert = this.alerts[0];
    }
  }
  /**
   * resets alerts to total alerts, and resets detailed(or currently selected alert) to its default (first element in alerts array)
   */
  resetAlerts(){
    this.alerts = this.totalAlerts;
    this.detailedAlert = this.alerts[0]
  }
  /**
   * Select individual alert, trigered by child component event emitter
   * @param alert alert object, model definition in models/alert.model
   */
  selectAlert(alert){
    this.detailedAlert = alert;
  }
}
