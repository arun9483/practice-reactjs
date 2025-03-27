import { FC } from 'react';

interface ExpenseCategoryFilterProp {
  categories: string[];
  categoryChangeHandler: (category: string) => void;
}

const ExpenseCategoryFilter: FC<ExpenseCategoryFilterProp> = ({ categories, categoryChangeHandler }) => {
  return (
    <div className="expense-categories-filter" style={{ display: 'flex', justifyContent: 'flex-start', width: '60%' }}>
      <label>
        <span style={{ fontWeight: 'bold' }}>Select category for filtering expenses: </span>
        <select
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            categoryChangeHandler(event.target.value);
          }}
        >
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category ? category : 'All'}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default ExpenseCategoryFilter;
