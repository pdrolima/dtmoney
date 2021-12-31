import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import './index.css';
import { TransactionModal } from './components/TransactionModal';

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenTransactionModalOpen() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenTransactionModalOpen} />
      <Dashboard />

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
    </>
  );
}
