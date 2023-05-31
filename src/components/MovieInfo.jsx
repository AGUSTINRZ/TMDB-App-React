import PropTypes from "prop-types";
import MovieCast from "./MovieCast";
import { IMG_BASE_URL } from "../services/api_endpoints";
import MovieImages from "./MovieImages";
import MovieVideos from "./MovieVideos";
import SimilarMovies from "./SimilarMovies";

function MovieInfo({ movieData, setId, setPageContext }) {
	return (
		<>
			{movieData && (
				<section className="max-w-screen-2xl mx-auto relative md:-mt-[5vh]">
					<section className="md:mb-10">
						<MovieCast id={movieData.id} />
					</section>
					<section className="flex flex-col md:flex-row gap-2 text-white px-2 mb-10">
						<img
							src={`${IMG_BASE_URL}w780${movieData.poster_path}`}
							alt={`Poster of ${movieData.original_title}`}
							title={`Poster of ${movieData.original_title}`}
							className="md:max-w-[30%] rounded object-cover"
						/>
						<div className="flex flex-col justify-around gap-4">
							<div>
								<h3 className="text-5xl font-semibold">
									{movieData.original_title}
								</h3>
								<span className="text-lg text-zinc-200">
									Released on {movieData.release_date.slice(0, 4)}
								</span>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">Overview</h3>
								<p className="text-lg text-zinc-200">{movieData.overview}</p>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">Genres</h3>
								<p className="text-lg text-zinc-200">
									{movieData.genres.map((genre) => genre.name).join(", ")}
								</p>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">Production Companies</h3>
								<span className="text-zinc-200">
									{movieData.production_companies
										.map((company) => company.name)
										.join(", ")}
								</span>
							</div>
							<div>
								<h3 className="text-2xl font-semibold">Production Countries</h3>
								<span className="text-zinc-200">
									{movieData.production_countries
										.map((country) => country.name)
										.join(", ")}
								</span>
							</div>
						</div>
					</section>
					<MovieImages id={movieData.id} />
					<MovieVideos id={movieData.id} />
					<SimilarMovies id={movieData.id} setId={setId} setPageContext={setPageContext} />
				</section>
			)}
		</>
	);
}

MovieInfo.propTypes = {
	movieData: PropTypes.object,
	setId: PropTypes.func,
	setPageContext: PropTypes.func
};

export default MovieInfo;
