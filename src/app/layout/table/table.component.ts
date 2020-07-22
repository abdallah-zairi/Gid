import { Component, OnInit } from '@angular/core';
import { Employee, Service } from 'src/app/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [Service],
  preserveWhitespaces: true
})
export class TableComponent {
  employees: Employee[];
  allowSearch: boolean;
  columnChooserModes: any;

  constructor(service: Service) {
      this.employees = service.getEmployees();
      this.allowSearch = true;
      this.columnChooserModes = [{
          key: "dragAndDrop",
          name: "Drag and drop"
      }, {
          key: "select",
          name: "Select"
      }];
  }

}
