import { IPensionInfo, IMonthlyDepositInfo } from "../interfaces/pension.interface";

export default class PensionLogic {

    public calculatePension(pensionInfo: IPensionInfo) {
        let {currentAmount, deposit, depositFee, managementFee, years, yieldValue} = pensionInfo;
        const months = years * 12;
        let managementFeeTotal = 0;
        for(let i=0; i<months; i++) {
            currentAmount = (currentAmount + deposit) * (1 + (yieldValue * 0.01 / 12));
            const currentManagementFee = currentAmount * managementFee * 0.01 / 12;
            managementFeeTotal += currentManagementFee;
            currentAmount = currentAmount - (deposit * depositFee * 0.01) - (currentManagementFee);  
        }
        return {
            totalAmount: this.numberWithCommas(currentAmount),
            managementFeeTotal: this.numberWithCommas(managementFeeTotal),
            depositFeeTotal: this.numberWithCommas(depositFee * 0.01 * deposit * months),
        }
    }

    public calculateMonthlyDeposit(monthlyDepositInfo: IMonthlyDepositInfo) {
        const {contribution, employerContribution, salary, severance} = monthlyDepositInfo;
        return this.numberWithCommas(salary * (contribution + employerContribution + severance) * 0.01);
    }

    private numberWithCommas = (num: number) => num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}