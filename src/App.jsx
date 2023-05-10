import { Intro, Summary } from './components';

const App = () => {
	return (
		<main>
			<div className="main">
				<div className="gradient" />
			</div>

			<div className="app">
				<Intro />
				<Summary />
			</div>
		</main>
	);
};

export default App;
