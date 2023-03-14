import { useContext } from 'react';
import './style.scss';
import { AppContext } from './../App/App';

function List() {

	const {filterByStatusItems, onToggleDone, deleteItems} = useContext(AppContext);

	const render = filterByStatusItems.map(task => {

		let classNameText = 'list__text';
		let classNameButton = 'btn';

		if (task.done) {
			classNameText += ' done'
		}

		if (task.done) {
			classNameButton += ' btn--done'
		}

		return (
			<li className="list__item" key={task.id}>
				<button onClick={() => onToggleDone(task.id)} className={classNameButton}></button>
				<span onClick={() => onToggleDone(task.id)} className={classNameText}>{task.title}</span>
				<button onClick={() => deleteItems(task.id)} className="list__btn"></button>
			</li>
		)
	});

	const emptyList = (
		<li className="list__item">
			<span className="list__text">Список дел пуст</span>
		</li>
	)

    return (
        <ul className="list">{filterByStatusItems.length > 0 ? render : emptyList}</ul>
    );
}

export default List;