import { Injectable, signal } from '@angular/core';
import { InvestmentResultsType, InvestmentType } from '../types';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  results = signal<InvestmentResultsType[] | undefined>(undefined);

  calculateInvestmentResults(data: InvestmentType) {
    const { annualInvestment, duration, expectedReturn, initInvestment } = data;
    const annualData = [];
    let investmentValue = initInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmount: initInvestment + annualInvestment * year,
      });
    }
    this.results.set(annualData);
  }
}
