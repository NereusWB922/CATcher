import { Component, OnInit } from '@angular/core';
import { PhraseTesterResponseTable } from '../shared/issue-tables/available-tables.enum';

@Component({
  selector: 'app-phase-tester-response',
  templateUrl: './phase-tester-response.component.html',
  styleUrls: ['./phase-tester-response.component.css']
})
export class PhaseTesterResponseComponent implements OnInit {
  tables: PhraseTesterResponseTable[] = Object.values(PhraseTesterResponseTable) as PhraseTesterResponseTable[];
  currentTable: PhraseTesterResponseTable = PhraseTesterResponseTable.Pending;

  constructor() {}

  ngOnInit() {}
}
