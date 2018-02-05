import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component'; 
import { LinkcubbyComponent } from './linkcubby/linkcubby.component';
import { FitnessmanagerComponent } from './fitnessmanager/fitnessmanager.component'; 

@NgModule({
    declarations: [
        LinkcubbyComponent,
        FitnessmanagerComponent,
        ProjectsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
        ])
    ],
    exports: [ProjectsComponent]
})
export class ProjectsModule {
}
