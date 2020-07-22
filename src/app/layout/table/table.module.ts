import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableRoutingModule } from './table-routing.module';

@NgModule({
    imports: [CommonModule, TableRoutingModule],
    declarations: [TableComponent]
})
export class TableModule {}
