import { GoMarkGithub } from 'react-icons/go';
import { logo } from '../assets';

const Intro = () => {
	return (
		<header className="w-full flex justify-center items-center flex-col">
			<nav className="flex justify-between items-center w-full mb-10 pt-3">
				<img src={logo} alt="brief-ai-logo" className="w-52 object-contain" />

				<div
					className="black_btn cursor-pointer"
					onClick={() => window.open('https://github.com/DeveloperSantoGithub')}
				>
					<GoMarkGithub />
				</div>
			</nav>

			<h1 className="head_text">
				<span className="orange_gradient  font-bold">BRIEF.AI</span> <br />
				Get Any Article's Summary. <br />
				<span className="text-2xl max-md:text-xl">Powered by (GPT-4)</span>
			</h1>

			<h2 className="desc max-md:hidden">
				Say goodbye to lengthy articles and hello to simplified reading with
				Brief.Ai - the open-source article summarizer. Transform complex
				information into clear and concise summaries and enjoy an enhanced
				reading experience.
			</h2>
		</header>
	);
};

export default Intro;
