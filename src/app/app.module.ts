import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LotComponent } from './layout/lot/lot.component';
import { ActivityComponent } from './layout/activity/activity.component';
import { DeliveryComponent } from './layout/delivery/delivery.component';
import { TableComponent } from './layout/table/table.component';
import { DxTreeListModule, DxSelectBoxModule, DxCheckBoxModule, DxDataGridModule } from 'devextreme-angular';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';






@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LotComponent,
    ActivityComponent,
    DeliveryComponent,
    TableComponent,
    SigninComponent,
    SignupComponent,
   
    
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    DxTreeListModule,
    DxSelectBoxModule,
    DxCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
