import { useContext, useState } from 'react';
import './style.scss';
import Title from '../Title';
import { AppContext } from '../App/App';

function Header() {

	const {addItem} = useContext(AppContext)

	const [taskTitle, setTaskTitle] = useState({title: ''});

	const onInputChange = (e) => {
		setTaskTitle({
			title: e.target.value
		})
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if (taskTitle.title.trim()) {
			addItem(taskTitle.title)
		} 

		setTaskTitle({
			title: ''
		})
	}

    return (
        <header className="header">
				<div className="container">
					<div className="header__content">
						<div className="header__logo">
							<Title />
							<div className="logo">
								<img width="30px" height="30px" src="./img/Shape.svg" alt="Shape" />
							</div>
						</div>
						<form onSubmit={onSubmit} className="header__input">
							<input value={taskTitle.title} onChange={onInputChange} type="text" placeholder="Введите задачу" />
						</form>
					</div>
				</div>
			</header>
    );
}

export default Header;