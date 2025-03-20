export type InvestmentType = {
  initInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type InvestmentResultsType = {
  totalInterest: number;
  totalAmount: number;
  annualInvestment: number;
  interest: number;
  valueEndOfYear: number;
  year: number;
};
