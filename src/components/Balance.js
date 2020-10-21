import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../actions";

export default function Balance() {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((a, b) => (a = a + b), 0);
  const income = amounts.filter((a) => a > 0).reduce((a, b) => (a = a + b), 0);
  const expence = Math.abs(
    amounts.filter((a) => a < 0).reduce((a, b) => (a = a + b), 0)
  );

  return (
    <div>
      <h2>Expense Tracker</h2>

      <div className="container">
        <h4>Your Balance</h4>
        <h1>${total}</h1>

        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p className="money plus">+${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">-${expence}</p>
          </div>
        </div>

        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={transaction.amount < 0 ? "minus" : "plus"}
            >
              {transaction.text}
              <span>${transaction.amount}</span>
              <button
                onClick={() => dispatch(deleteTransaction(transaction.id))}
                className="delete-btn"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
