import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
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
