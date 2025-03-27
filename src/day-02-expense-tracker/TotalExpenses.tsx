import { FC } from 'react';

interface TotalExpensesProp {
  total: number;
}

const TotalExpenses: FC<TotalExpensesProp> = ({ total }) => {
  return (
    <div className="total-expenses" style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <span style={{ fontWeight: 900, fontSize: '1.1rem' }}>Total Expenses: &#8377;{total}</span>
    </div>
  );
};

export default TotalExpenses;
