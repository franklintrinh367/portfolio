import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ContactComponent } from './contact/contact.component';
import { ControllerComponent } from './controller/controller.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: 'controller', component: ControllerComponent, children: [
    {path: 'main', component: MainNavComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: ProjectComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
