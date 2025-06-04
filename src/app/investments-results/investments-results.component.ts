import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  results = computed(() => this.investmentService.resultsData());

  // or:
  // results = this.investmentService.resultsData.asReadOnly()
}
