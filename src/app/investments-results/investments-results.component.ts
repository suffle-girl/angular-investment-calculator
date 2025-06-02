import { Component, Input } from '@angular/core';
import { ResultsData } from '../investment-input.model';

@Component({
  selector: 'app-investments-results',
  imports: [],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  @Input() results?: ResultsData[];
}
