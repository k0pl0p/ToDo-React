import './style.scss';
import List from './../List';
import Todobar from './../Todobar';

function Main() {
    return (
        <main className="main">
			<div className="container">
				<div className="main__content">
					<List />
					<Todobar />
				</div>
			</div>
		</main>
    );
}

export default Main;