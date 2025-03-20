import { Component } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '0';
  duration = '0';

  constructor(private invService: InvestmentService) {}

  onSubmit() {
    this.invService.calculateInvestmentResults({
      initInvestment: +this.initInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });
  }
}
