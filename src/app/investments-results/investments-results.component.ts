import { Component, input } from '@angular/core';
import { ResultsData } from '../investment-input.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  results = input<ResultsData[]>();
}
