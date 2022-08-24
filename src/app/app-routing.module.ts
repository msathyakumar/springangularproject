import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PensionProcessComponent } from './components/pension-process/pension-process.component';

const routes: Routes = [

  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full'
  },
  {
    path:'pensionProcess',component:PensionProcessComponent,pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
