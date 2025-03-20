import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-inv-results',
  imports: [CurrencyPipe],
  templateUrl: './inv-results.component.html',
  styleUrl: './inv-results.component.css',
})
export class InvResultsComponent {
  constructor(private invSerice: InvestmentService) {}
  results = computed(() => this.invSerice.results());
}
