import { Intro, Summarizer } from './components';

const App = () => {
	return (
		<main>
			<div className="main">
				<div className="gradient" />
			</div>

			<div className="app">
				<Intro />
				<Summarizer />
			</div>
		</main>
	);
};

export default App;
