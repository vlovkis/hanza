import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { IReportEmbedConfiguration, models, service, Embed } from 'powerbi-client';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent {
  // phasedEmbeddingFlag = false;
  // reportConfig: IReportEmbedConfiguration = {
  //   type: 'report',
  //   embedUrl: 'https://localhost:44300/',
  //   tokenType: models.TokenType.Embed,
  //   accessToken: '',
  //   settings: undefined,
  // };

  // reportconfig: IReportEmbedConfiguration = {
  //   type: "report",
  //   id: undefined,
  //   embedUrl: undefined,
  //   accessToken: undefined,
  //   tokenType: models.TokenType.Embed,
  //   hostname: "https://localhost:44300/EmbedInfo/Embed"
  // }
  // @ViewChild(PowerBIReportEmbedComponent)
  // reportObj!: PowerBIReportEmbedComponent;
  // eventHandlersMap = new Map([
  //   [
  //     'loaded',
  //     () => {
  //       const report = this.reportObj.getReport();
  //       report.setComponentTitle('Embedded report');
  //     },
  //   ],
  //   ['rendered', () => console.log('Report has rendered')],
  //   [
  //     'error',
  //     (event?: service.ICustomEvent<any>) => {
  //       if (event) {
  //         console.error(event.detail);
  //       }
  //     },
  //   ],
  //   ['visualClicked', () => console.log('visual clicked')],
  //   ['pageChanged', (event) => ''],
  // ]) as Map<
  //   string,
  //   (event?: service.ICustomEvent<any>, embeddedEntity?: Embed) => void | null
  // >;
  // ngOnInit() {
  //   this.embedReport();
  // }

  // embedReport(){
  //    this.reportConfig = {
  //       ...this.reportConfig,
  //        accessToken: 'cncx3tBlG/88Vb1wPSygimCcMhf9zhK2VR2kESZYc+Q=',
  //        id: '7d82e18a-6f89-483a-8044-da01ff866bc2',
  //        embedUrl: 'https://localhost:44300',
  //     };
  // }

  constructor(private router: Router ) {}

  home(){
    this.router.navigate(['/dashboard-list']);
  }
  settings(){
    this.router.navigate(['/settings']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  plasma(){
    this.router.navigate(['/plasma-view']);
  }
}
