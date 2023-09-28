import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PlasmaViewComponent } from './components/plasma-view/plasma-view.component';
import { EditViewComponent } from './components/edit-view/edit-view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard-list', component: DashboardListComponent },
  { path: 'dashboard-detail', component: DashboardDetailComponent },
  { path: 'settings', component: SettingsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'plasma-view', component: PlasmaViewComponent},
  { path: 'edit', component: EditViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
