import { TbCornerDownLeft, TbLink } from 'react-icons/tb';
// import { loader } from '../assets';

const Summarizer = () => {
	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				<form
					className="relative justify-center items-center"
					onSubmit={() => {}}
				>
					<TbLink />
					<input />

					<button>
						<TbCornerDownLeft />
					</button>
				</form>
			</div>
		</section>
	);
};

export default Summarizer;

// TbCopy
// TbCheck
