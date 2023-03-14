import './_reset.scss';
import './_base.scss';
import Header from "./../Header";
import Main from "./../Main";
import { useState, createContext, useEffect } from 'react';

export const AppContext = createContext(null);

function App() {

	const [toData, setToData] = useState([]);

	const [status, setStatus] = useState('all');


	const addItem = (title) => {
		setToData(toData => {
			const ID = toData.length === 0 ? 0 : toData[toData.length - 1]['id'] + 1
			const newItem = { id: ID, title: title, done: false }
			const newArray = [...toData, newItem];

			return newArray
		});
	}

	const deleteAllItems = () => {
		setToData(toData => toData.filter(task => task.done === false))
	}

	const deleteItems = (id) => {
		setToData(toData => toData.filter(task => task.id !== id || task.done === false))
	}

	const toggleParam = (id, param) => {
		setToData(toData => {
			const newArray = toData.map(task => {
				return {
					...task,
					[param]: task.id === id ? !task[param] : task[param]
				}
			})
			return newArray
		})
	}

	const onToggleDone = (id) => {
		toggleParam(id, 'done')
	}

	const filterByStatus = (toData, status) => {
		switch(status) {
			case 'all':
				return toData;
			case 'active':
				return toData.filter(task => task.done === false);
			case 'complited':
				return toData.filter(task => task.done !== false);
			default:
				return toData;
		}
	}

	const changeStatus = (status) => {
		setStatus(status)
	}

	useEffect(() => {
		setToData(JSON.parse(localStorage.getItem('data')))
		setStatus(localStorage.getItem('status'))
	}, [])

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(toData))
		localStorage.setItem('status', status)
	}, [toData, status]);


	const filterByStatusItems = filterByStatus(toData, status)

	return (
		<AppContext.Provider 
		value={
			{toData, 
			addItem, 
			onToggleDone, 
			filterByStatusItems, 
			changeStatus, 
			status, 
			deleteItems, 
			deleteAllItems}
			}>
			<Header />
			<Main />
		</AppContext.Provider>
	);
}

export default App;