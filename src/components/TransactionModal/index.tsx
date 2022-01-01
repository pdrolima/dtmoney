import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/axios';
import { useTransactions } from '../../hooks/useTransactions';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ title, category, value });

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0"
      className="relative border-none bg-white w-full max-w-2xl p-12 mt-12 mx-auto rounded border border-gray-300"
    >
      <h2 className="text-2xl font-bold mb-4 p-1">Nova transação</h2>
      <form onSubmit={handleCreateNewTransaction}>
        <div className="mb-4">
          <input
            className="font-normal p-5 border-gray-300 appearance-none border rounded w-full text-gray-400 focus:outline-none focus:shadow-outline bg-gray-100"
            id="name"
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="font-normal p-5 border-gray-300 appearance-none border rounded w-full text-gray-400 focus:outline-none focus:shadow-outline bg-gray-100"
            id="value"
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <input type="checkbox" name="" id="" />
          </div>
        </div>
        <div className="mb-4">
          <input
            className="font-normal p-5 border-gray-300 appearance-none border rounded w-full text-gray-400 focus:outline-none focus:shadow-outline bg-gray-100"
            id="name"
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="bg-green-400 text-white text-center p-5 w-full rounded
           transition-[filter] hover:duration-100 hover:brightness-90"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </Modal>
  );
}
