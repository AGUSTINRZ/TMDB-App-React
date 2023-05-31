import { useState } from "react";
import useVideos from "../hooks/useVideos";
import YoutubeVideo from "./YoutubeVideo";
import PropTypes from "prop-types";

function MovieVideos({ id }) {
	const [type, setType] = useState("Trailer");

	const data = useVideos(id);

	return (
		<section className="text-white p-2">
			<div>
				<div className="flex justify-between">
					<h3 className="text-3xl mr-auto">Videos</h3>
					<div className="flex items-center justify-end flex-wrap gap-2">
						<button
							onClick={() => setType("Trailer")}
							className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
								type === "Trailer" ? "bg-primary-color" : "bg-zinc-900"
							}`}
						>
							Trailers
						</button>
						<button
							onClick={() => setType("Teaser")}
							className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
								type === "Teaser" ? "bg-primary-color" : "bg-zinc-900"
							}`}
						>
							Teasers
						</button>
						<button
							onClick={() => setType("Featurette")}
							className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
								type === "Featurette" ? "bg-primary-color" : "bg-zinc-900"
							}`}
						>
							Featurette
						</button>
						<button
							onClick={() => setType("Behind the Scenes")}
							className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
								type === "Behind the Scenes"
									? "bg-primary-color"
									: "bg-zinc-900"
							}`}
						>
							Behind the scenes
						</button>
					</div>
				</div>
				<section className="flex gap-2 overflow-x-scroll scrollbar py-2 min-h-[10rem] md:min-h-[26rem] max-h-[30rem] pb-2">
					{data &&
						(() => {
							const filteredVideos = data.results.filter(
								(video) => video.type === type
							);
							if (filteredVideos.length === 0) {
								return (
									<div className="flex w-full min-h-[26rem] text-2xl justify-center items-center">
										<h3>No videos found</h3>
									</div>
								);
							} else {
								return filteredVideos.map((video) => (
									<YoutubeVideo key={video.id} videoKey={video.key} />
								));
							}
						})()}
				</section>
			</div>
		</section>
	);
}

MovieVideos.propTypes = {
	id: PropTypes.number,
};

export default MovieVideos;
