import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashCardComponent } from './dash-card/dash-card.component';
import { WidgetsComponent } from './widgets.component';
import { Ng2OdometerModule } from 'ng2-odometer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { RoundGraphComponent } from './round-graph/round-graph.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    RoundProgressModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatChipsModule,
    Ng2OdometerModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [DashCardComponent, LineGraphComponent, LocationCardComponent, RoundGraphComponent, BarGraphComponent, WidgetsComponent, DoughnutGraphComponent, RoundGraphComponent],
  exports: [DashCardComponent, LineGraphComponent, LocationCardComponent,RoundGraphComponent, BarGraphComponent, WidgetsComponent]
})
export class WidgetsModule { }
