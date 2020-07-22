import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
    imports: [CommonModule, ActivityRoutingModule],
    declarations: [ActivityComponent]
})
export class ActivityModule {}
