import React, { Component } from 'react';

class ExpenseTableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar - Excluir</th>
        </tr>
      </thead>
    );
  }
}

export default ExpenseTableHead;
