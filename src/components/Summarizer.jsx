import { RxLink1 } from 'react-icons/rx';
import { TbCornerDownLeft } from 'react-icons/tb';
// import { loader } from '../assets';
import { useState } from 'react';
import { useLazyGetSummaryQuery } from '../store';

const Summarizer = () => {
	const [article, setArticle] = useState({
		url: '',
		summary: '',
	});

	const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data } = await getSummary({ articleUrl: article.url });

		console.log(data.summary);
	};

	return (
		<section className="mt-16 w-full max-w-xl">
			<div className="flex flex-col w-full gap-2">
				{/* Search  */}
				<form
					className="relative justify-center items-center"
					onSubmit={handleSubmit}
				>
					<RxLink1 className="absolute letf-0 mt-3.5 ml-3" />

					<input
						type="url"
						placeholder="Enter Your URL"
						value={article.url}
						onChange={(e) => setArticle({ ...article, url: e.target.value })}
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

				{/* URL History  */}
			</div>
		</section>
	);
};

export default Summarizer;

// TbCopy
// TbCheck
