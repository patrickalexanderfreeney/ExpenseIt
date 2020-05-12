import React, { createContext, useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';
const initialState = {
	transactions: []
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
