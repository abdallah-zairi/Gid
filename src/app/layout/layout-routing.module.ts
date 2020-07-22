import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LotComponent } from './lot/lot.component';


 const routes: Routes = [];
//     // {path:'lot',redirectTo:'/lot', children:[
//     //      {path:'reb', component: LotComponent}
//     //      ]},
//     {
//         path: '',
//         component: LayoutComponent,
//         children: [
//             // { path: '', redirectTo: 'sidebar', pathMatch: 'prefix' },
//             // {
//             //     path: 'dashboard',
//             //     loadChildren: () => import('./layout/LayoutModule').then((m) => m.DashboardModule)
//             // },
//             { path: 'lot', loadChildren: () => import('./lot/lot.module').then((m) => m.LotModule) },
//             { path: 'activity', loadChildren: () => import('./activity/activity.module').then((m) => m.ActivityModule) },
//             { path: 'lese', loadChildren: () => import('./delivery/delivery.module').then((m) => m.DeliveryModule) },
                        
//         ]
//     }
    
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
   
})
export class LayoutRoutingModule {}
