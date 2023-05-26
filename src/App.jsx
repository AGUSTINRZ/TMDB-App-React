import useMovieLists from "./hooks/useMovieLists";
import NavBar from "./components/NavBar";
import MainHeader from "./components/MainHeader";
import MoviesList from "./components/MoviesList";
import MovieSection from "./components/MovieSection";
import { useState } from "react";

function App() {
	const [id, setId] = useState(null);
	const [showNewContent, setShowNewContent] = useState(false);

	const [popularMovies, setPopularPage, isPopularLoading] =
		useMovieLists("popular");
	const [topRatedMovies, setTopRatedPage, isTopRatedLoading] =
		useMovieLists("top_rated");
	const [upcomingMovies, setUpcomingPage, isUpcomingLoading] =
		useMovieLists("upcoming");
	const [nowPlayingMovies, setPlayingPage, isPlayingLoading] =
		useMovieLists("now_playing");

	return (
		<>
			<header className="font-noto-sans">
				<NavBar showNewContent={showNewContent} setShowNewContent={setShowNewContent} setId={setId}/>
			</header>
			<main className="bg-black font-noto-sans">
				{showNewContent ? (
					<>
						<MovieSection id={id} pageContext={showNewContent}/>
					</>
				) : (
					<>
						{popularMovies && (
							<MainHeader id={id ? id : popularMovies.results[0].id} setPageContext={setShowNewContent} setId={setId}/>
						)}
						<section className="max-w-screen-2xl mx-auto p-2 text-white overflow-hidden relative md:-mt-[5vh]">
							{popularMovies && (
								<MoviesList
									data={popularMovies}
									title="Popular Movies"
									setId={setId}
									setPage={setPopularPage}
									isLoading={isPopularLoading}
									setPageContext={setShowNewContent}
								/>
							)}
							{topRatedMovies && (
								<MoviesList
									data={topRatedMovies}
									title="Top Rated Movies"
									setId={setId}
									setPage={setTopRatedPage}
									isLoading={isTopRatedLoading}
									setPageContext={setShowNewContent}
								/>
							)}
							{upcomingMovies && (
								<MoviesList
									data={upcomingMovies}
									title="Upcoming Movies"
									setId={setId}
									setPage={setUpcomingPage}
									isLoading={isUpcomingLoading}
									setPageContext={setShowNewContent}
								/>
							)}
							{nowPlayingMovies && (
								<MoviesList
									data={nowPlayingMovies}
									title="Now Playing Movies"
									setId={setId}
									setPage={setPlayingPage}
									isLoading={isPlayingLoading}
									setPageContext={setShowNewContent}
								/>
							)}
						</section>
					</>
				)}
			</main>
		</>
	);
}

export default App;
