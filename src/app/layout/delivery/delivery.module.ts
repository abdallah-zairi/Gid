import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeliveryComponent } from './delivery.component';
import { DeliveryRoutingModule } from './delivery-routing.module';



@NgModule({
    imports: [CommonModule, DeliveryRoutingModule],
    declarations: [DeliveryComponent]
})
export class DeliveryModule {}
