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
import { MatChipsModule} from '@angular/material/chips';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
@NgModule({
    imports: [
      CommonModule,
      MatButtonModule,
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
    declarations: [DashCardComponent, WidgetsComponent ],
    exports: [DashCardComponent, WidgetsComponent ]
  })
  export class WidgetsModule { }
