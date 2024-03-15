import { calculateInvestmentResults, formatter } from '../util/investment';

export const Result = ({ data }) => {

  const result = calculateInvestmentResults(data);
  const initialInvestment =
    result[0].valueEndOfYear -
    result[0].interest -
    result[0].annualInvestment;

  return (
    <div>
      <table id='result'>
        <thead>
          <tr className='center'>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>{
          result.map((yearData) => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year} className='center'>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })
        }</tbody>
      </table>
    </div>
  )
}