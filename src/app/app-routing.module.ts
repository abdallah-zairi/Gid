import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './layout/activity/activity.component';
import { DeliveryComponent } from './layout/delivery/delivery.component';
import { LotComponent } from './layout/lot/lot.component';
import { TableComponent } from './layout/table/table.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [



  {
    path: 'signin',
    component:SigninComponent,
    
   },
   {
    path: 'signup',
    component:SignupComponent,
   },
  
  { 
    path: '', redirectTo: '/signin', pathMatch: 'full' ,
    canActivate: [AuthGuard]
   
},
  
   { 
     path: '*', redirectTo: '/signin'
     },
 { 
   path: 'dashboard', component: SidebarComponent ,

   children:[

  {
    path:'lot',
    component:LotComponent,
   
  },

  {
    path:'activity',
    component:ActivityComponent,
  },
  {
    path:'lese',
    component:DeliveryComponent,
  },
  
 ]},

 

    // loadChildren: () => import('./layout/sidebar/sidebar.module').then((m) => m.SidebarModule),
    // canActivate: [AuthGuard]

//  { path: 'lot', loadChildren: () => import('./layout/lot/lot.module').then((m) => m.LotModule) },
// { path: 'Boni', loadChildren: () => import('./activity/activity.module').then((m) => m.ActivityModule) },
// {
//     path: 'lese',
//     loadChildren: () => import('./delivery/delivery.module').then((m) => m.DeliveryModule)
// },
  // {path:'',
  // component:SidebarComponent},
  // {path:'*',
  // component:SidebarComponent},
  // {path:'home', component:SidebarComponent, children:[
  //   {path:'tables', component: TableComponent}
  // ]},
  // {path:'activitys',
  //   component:ActivityComponent},
  // {path:'deliverys',
  //   component:DeliveryComponent},
  // {path:'lots',
  //   component:LotComponent},
  //   {path:'tables',
  //   component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

