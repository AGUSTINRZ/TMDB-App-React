import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";
import Spinner from "./Spinner";
import MovieMainHeader from "./MovieMainHeader";
import MovieInfo from "./MovieInfo";

function MovieSection({ id, pageContext }) {
	const [movieData, setMovieData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (pageContext === false) return;
		async function getData() {
			setIsLoading(true);
			const response = await fetch(
				`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
			);
			const json = await response.json();
			setMovieData(json);
			setIsLoading(false);
		}
		getData();
	}, [id, pageContext]);

	return (
		<>
			{movieData && !isLoading ? (
				<>
					<MovieMainHeader movieData={movieData} />
          <MovieInfo movieData={movieData}/>
				</>
			) : isLoading ? (
				<section className="flex justify-center items-center w-screen h-screen bg-stone-900 text-primary-color">
					<Spinner />
				</section>
			) : null}
		</>
	);
}

MovieSection.propTypes = {
	id: PropTypes.number,
	pageContext: PropTypes.bool,
};

export default MovieSection;
