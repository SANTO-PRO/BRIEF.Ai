import { RxLink1 } from 'react-icons/rx';
import { TbCornerDownLeft } from 'react-icons/tb';
// import { loader } from '../assets';

const Summarizer = () => {
	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				<form
					className="relative justify-center items-center"
					onSubmit={() => {}}
				>
					<RxLink1 className="absolute letf-0 mt-3.5 ml-3" />

					<input
						type="url"
						placeholder="Enter Your URL"
						value=""
						onChange={() => {}}
						required
						className="url_input peer"
					/>

					<button
						type="submit"
						className="submit_btn  peer-focus:border-gray-700 peer-focus:text-gray-700
					"
					>
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
