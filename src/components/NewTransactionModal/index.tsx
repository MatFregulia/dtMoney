import Modal from 'react-modal';

interface NewTransactionModalPropos {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalPropos) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
        >
          <h2>Cadastrar Transação</h2>
      </Modal>
    )
}