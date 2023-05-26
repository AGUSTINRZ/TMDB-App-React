import { IMG_BASE_URL } from "../services/api_endpoints";
import PropTypes from "prop-types";

function ResultMovieCard({ result, setId, setShowNewContent, setIsHidden }) {
	function handleClick() {
		setId(null);
		setShowNewContent(true);
		setIsHidden(true);
		setId(result.id);
	}

	return (
		<div
			onClick={handleClick}
			className="flex gap-2 p-2 border-t border-gray-500 cursor-pointer hover:bg-zinc-700 transition-colors"
		>
			<div>
				<img
					src={`${IMG_BASE_URL}w342${result.poster_path}`}
					alt={`Poster of ${result.original_title}`}
					className="h-full object-cover rounded max-w-[4rem] min-w-[4rem] min-h-[6rem] text-sm"
				/>
			</div>
			<div>
				<h2 className="line-clamp-1 text-xl">{result.original_title}</h2>
				<p className="text-base line-clamp-3 text-zinc-300">
					{result.overview}
				</p>
			</div>
		</div>
	);
}

ResultMovieCard.propTypes = {
	result: PropTypes.object,
	setId: PropTypes.func,
	setShowNewContent: PropTypes.func,
	setIsHidden: PropTypes.func,
};

export default ResultMovieCard;
