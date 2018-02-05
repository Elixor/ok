import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ProjectsModule } from './components/projects/projects.module';

import { AppComponent } from './components/_root/app.component';
import { AboutComponent } from './components/about/about.component';
import { AvardaComponent } from './components/avarda/avarda.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeadderComponent } from './components/headder/headder.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        ContactsComponent,
        HeadderComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ProjectsModule,
        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            //{ path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
