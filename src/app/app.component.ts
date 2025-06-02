import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultsData, UserInputData } from './investment-input.model';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  resultsData?: ResultsData[];

  onCalculateInvestmentResults(data: UserInputData) {
    const { initialInvestment, duration, expectedReturn, annualInvestment } =
      data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
