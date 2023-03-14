import { useContext } from 'react';
import './style.scss';
import { AppContext } from '../App/App';
import ButtonStatus from '../ButtonStatus';


function Todobar() {

    const {toData, status, deleteAllItems} = useContext(AppContext);

    const newArray = toData.filter(task => task.done === false);

  return (
        <div className="todobar">
            <div className="todobar__remainder">
                <span>{status === 'complited' ? 0 : newArray.length} items left</span>
            </div>
            <ButtonStatus />
            <div className="todobar__delete">
                <button onClick={() => deleteAllItems()}>Clear Completed</button>
            </div>
        </div>
  );
}

export default Todobar;
