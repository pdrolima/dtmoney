import { useContext } from 'react';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import {
  TransactionsContext,
  useTransactions,
} from '../../hooks/useTransactions';

interface CardProps {
  title: string;
  value: string;
  image: string;
}

const Card = ({ title, image, value }: CardProps) => {
  return (
    <div className="bg-white rounded-md text-gray-700 p-6">
      <header className="flex items-center justify-between">
        <p>{title}</p>
        <img src={image} alt={title} />
      </header>
      <strong className="font-semibold text-3xl mt-2">{value}</strong>
    </div>
  );
};

export function Summary() {
  const { transactions } = useTransactions();

  return (
    <div className="max-w-7xl">
      <div className="grid grid-cols-3 gap-8 -mt-12 ">
        <Card title="Income" image={income} value="$1,000" />
        <Card title="Outcome" image={outcome} value="-$500" />
        <Card title="Total" image={total} value="$500" />
      </div>
    </div>
  );
}
