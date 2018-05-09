import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() detailedAlert;
  @Input() totalAlerts;

  constructor() { 
  }

  ngOnInit() {
  }

  getMostHighsCountry(totAlerts) {
    let germanHighs = 0;
    let americanHighs = 0;
    let canadianHighs = 0;

    totAlerts.filter((el) => {
      return el.Severity === "High";
    })
    .filter((el) => {
      if (el.ClientCountry === "United States") {
        americanHighs++;
      } else if (el.ClientCountry === "Canada") {
        canadianHighs++;
      } else {
        germanHighs++;
      }

      return el;
    });

    const getHighestCountry = () => {
      const max = Math.max(germanHighs, americanHighs, canadianHighs);

      if (max === germanHighs) {
        return "Germany";
      } else if (max === americanHighs) {
        return "United States";
      } else {
        return "Canada";
      }
    }

    let result = getHighestCountry();
    
    return result;
  }

  getMostUsedProtocol(totAlerts) {
    let http = 0;
    let smtp = 0;
    let ftp = 0;
    let tls = 0;

    totAlerts.filter((el) => {
      if (el.Protocol === "HTTP") {
        http++;
      } else if (el.Protocol === "FTP") {
        ftp++;
      } else if (el.Protocol === "SMTP") {
        smtp++;
      } else {
        tls++;
      }

      return el;
    });

    const getHighestFrequencyProtocol = () => {
      const max = Math.max(http, smtp, ftp, tls);

      if (max === http) {
        return "HTTP";
      } else if (max === smtp) {
        return "SMTP";
      } else if (max === ftp) {
        return "FTP";
      } else {
        return "TLS";
      }
    }

    let result = getHighestFrequencyProtocol();

    return result;
  }

}
