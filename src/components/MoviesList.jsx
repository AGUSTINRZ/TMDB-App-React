import MovieCard from "./MovieCard";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function MoviesList({ data, title = "Movies list", setId, setPage, setPageContext, isLoading }) {

	function handleClick() {
		setPage(prevPage => prevPage + 1);
	}

	return (
		<section className="flex flex-col mt-2">
			<h3 className="text-2xl mb-2">{title}</h3>
			<section className="flex gap-2 overflow-x-auto scrollbar pb-9">
				{data &&
					data.results.map((movie) => (
						<MovieCard key={movie.id} data={movie} setId={setId} setPage={setPage} setPageContext={setPageContext} />
					))}
				<button onClick={handleClick} className="bg-primary-color min-w-[6rem] rounded hover:bg-blue-600 transition-colors">
					{isLoading ? <Spinner /> : <FontAwesomeIcon icon={faPlus} />}
				</button>
			</section>
		</section>
	);
}

MoviesList.propTypes = {
	data: PropTypes.object,
	title: PropTypes.string,
	setId: PropTypes.func,
	setPage: PropTypes.func,
	setPageContext: PropTypes.func,
	isLoading: PropTypes.bool
};

export default MoviesList;
