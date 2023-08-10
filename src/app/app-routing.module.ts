import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { PortComponent } from './components/port/port.component';
import { CertComponent } from './components/cert/cert.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'port', component: PortComponent },
  {path: 'cert', component: CertComponent},
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
