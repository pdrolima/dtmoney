import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div className="mt-16">
      <table className="w-full box">
        <thead>
          <tr>
            <th className="font-normal leading-6 py-4 pb-8 text-left text-gray-400">
              Titulo
            </th>
            <th className="font-normal leading-6 py-4 pb-8 text-left text-gray-400">
              Valor
            </th>
            <th className="font-normal leading-6 py-4 pb-8 text-left text-gray-400">
              Categoria
            </th>
            <th className="font-normal leading-6 py-4 pb-8 text-left text-gray-400">
              Data
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="p-4 border-0 bg-white">{transaction.title}</td>
              <td className="p-4 border-0 bg-white">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.value)}
              </td>
              <td className="p-4 border-0 bg-white">{transaction.category}</td>
              <td className="p-4 border-0 bg-white">
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
