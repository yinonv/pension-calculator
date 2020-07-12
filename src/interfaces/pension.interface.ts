export interface IPensionInfo {
    currentAmount: number;
    deposit: number;
    depositFee: number;
    managementFee: number;
    yieldValue: number;
    years: number;
}

export interface IMonthlyDepositInfo {
    salary: number;
    contribution: number;
    employerContribution: number;
    severance: number;
}