import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';
const initialState = {
	transactions: [
		{ id: 1, text: 'Lizzo Tickets', amount: -50 },
		{ id: 2, text: 'Stimulus Check', amount: 1200 },
		{ id: 3, text: 'Udemy Course', amount: -12 },
		{ id: 4, text: 'UberEats', amount: -15 }
	]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				addTransaction,
				deleteTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
