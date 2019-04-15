import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatSidenavModule, MatButtonModule, MatIconModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { ContactComponent } from './contact/contact.component';
import { ControllerComponent } from './controller/controller.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [SidebarComponent, MainNavComponent, ContactComponent, ControllerComponent, ResumeComponent, ProjectComponent],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
