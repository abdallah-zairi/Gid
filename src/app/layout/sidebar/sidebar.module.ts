import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SidebarRoutingModule } from './sidebar-routing.module';

@NgModule({
    imports: [CommonModule, SidebarRoutingModule],
    declarations: [SidebarComponent]
})
export class SidebarModule {}
