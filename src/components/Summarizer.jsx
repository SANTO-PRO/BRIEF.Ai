import { RxLink1 } from 'react-icons/rx';
import { TbCopy, TbCornerDownLeft } from 'react-icons/tb';
// import { loader } from '../assets';
import { useEffect, useState } from 'react';
import { useLazyGetSummaryQuery } from '../store';

const Summarizer = () => {
	const [allArticles, setAllArticles] = useState([]);
	const [article, setArticle] = useState({
		url: '',
		summary: '',
	});

	const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery();

	useEffect(() => {
		const articlesFromLoaclStorage = JSON.parse(
			localStorage.getItem('articles'),
		);

		if (articlesFromLoaclStorage) setAllArticles(articlesFromLoaclStorage);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { data } = await getSummary({ articleUrl: article.url });

		if (data?.summary) {
			const newArticle = { ...article, summary: data.summary };
			const updatedAllArticles = [newArticle, ...allArticles];

			setArticle(newArticle);
			setAllArticles(updatedAllArticles);

			localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
		}
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
				<div className="flex flex-col gap-1 max-h-60 overflow-t-auto">
					{allArticles.map((item, index) => (
						<div
							key={`link-${index}`}
							onClick={() => setArticle(item)}
							className="link_card"
						>
							<div className="copy_btn">
								<TbCopy className="w-[50%] h-[50%] object-contain" />
							</div>
							<p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
								{item.url}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Summary  */}

			<div className=""></div>
		</section>
	);
};

export default Summarizer;

//
// TbCheck
