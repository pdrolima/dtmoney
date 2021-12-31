import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <Summary />
      <TransactionsTable />
    </div>
  );
}
