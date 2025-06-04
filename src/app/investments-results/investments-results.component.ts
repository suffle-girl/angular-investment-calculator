import { Component, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  standalone: false,
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css',
})
export class InvestmentsResultsComponent {
  constructor(private investmentService: InvestmentService) {}
  results = computed(() => this.investmentService.resultsData());

  // or:
  // results = this.investmentService.resultsData.asReadOnly()
}
