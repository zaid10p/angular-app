import { Component, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-inv-results',
  standalone: false,
  templateUrl: './inv-results.component.html',
  styleUrl: './inv-results.component.css',
})
export class InvResultsComponent {
  constructor(private invSerice: InvestmentService) {}
  results = computed(() => this.invSerice.results());
}
