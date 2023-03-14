import { useContext } from 'react';
import './style.scss';
import { AppContext } from '../App/App';

function ButtonStatus() {

    const {changeStatus, status} = useContext(AppContext);

    const buttons = [
        { status: 'all', name: 'All' },
        { status: 'active', name: 'Active' },
        { status: 'complited', name: 'Completed' }
    ]

    const renderButtons = buttons.map(item => {

        let className;

        if (item.status === status) {
            className = 'btn-active'
        }

        return (
            <div className="todobar__status" key={item.status}>
                <button className={className} onClick={() => changeStatus(item.status)}>{item.name}</button>
            </div>
        );
    })

    return renderButtons;
}

export default ButtonStatus;
