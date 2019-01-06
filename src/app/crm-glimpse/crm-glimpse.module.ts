import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { CrmGlimpseComponent } from './crm-glimpse.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '../core/core.module';
import { WidgetsModule } from '../widgets/widgets.module';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'Crm-Glimpse', component: CrmGlimpseComponent, pathMatch: 'full' }
        ]),
        PerfectScrollbarModule,
        MatToolbarModule,
        CoreModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        WidgetsModule,
        MatSidenavModule,
        MatTabsModule
        

    ],
    declarations: [CrmGlimpseComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
     
    ]
})
export class CrmGlimpseModule { }