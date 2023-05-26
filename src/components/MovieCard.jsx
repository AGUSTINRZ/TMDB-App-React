import PropTypes from "prop-types";
import { IMG_BASE_URL } from "../services/api_endpoints";
import InfoBtn from "./InfoBtn";

function MovieCard({ data, setId, setPageContext }) {
	function handleClick() {
		setId(data.id);
	}

	return (
		<article className="min-w-[10rem] md:min-w-[12rem] max-w-[14rem]">
			<img
				src={`${IMG_BASE_URL}w500${data.poster_path}`}
				alt={`Poster of ${data.original_title}`}
				title={`Poster of ${data.original_title}`}
				className="rounded-t-md select-none cursor-pointer object-cover w-full h-full min-h-[240px]"
				onClick={handleClick}
			/>
			<div className="flex items-center justify-between px-1 bg-zinc-800 rounded-b">
				<h4
					className="text-lg line-clamp-1"
					title={data.title}
					onClick={handleClick}
				>
					{data.title}
				</h4>
				<InfoBtn id={data.id} setId={setId} setPageContext={setPageContext}/>
			</div>
		</article>
	);
}

MovieCard.propTypes = {
	data: PropTypes.object,
	setId: PropTypes.func,
	setPageContext: PropTypes.func
};

export default MovieCard;
