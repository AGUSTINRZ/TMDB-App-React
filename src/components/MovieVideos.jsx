import { useState } from "react";
import useVideos from "../hooks/useVideos";
import YoutubeVideo from "./YoutubeVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function MovieVideos({ id }) {
	const [limit, setLimit] = useState(5);
	function handleClick() {
		setLimit((prevLimit) => prevLimit + 5);
	}

	const data = useVideos(id);

	return (
		<section className="text-white p-2">
			<div>
				<h3 className="text-3xl mr-auto">Videos</h3>
				<section className="flex gap-2 overflow-x-scroll scrollbar py-2 min-h-[10rem] md:min-h-[20rem] max-h-[30rem] pb-2">
					{data &&
						data.results.map((video, index) =>
							index >= limit ? null : (
								<YoutubeVideo key={video.id} videoKey={video.key} />
							)
						)}
					{data && (
						<button
							onClick={handleClick}
							className={`${
								limit >= data.results.length
									? "bg-neutral-300 cursor-default"
									: "bg-primary-color cursor-pointer"
							} px-8 md:px-12 rounded text-2xl ml-auto`}
						>
							<FontAwesomeIcon icon={faPlus} />
						</button>
					)}
				</section>
			</div>
		</section>
	);
}

MovieVideos.propTypes = {
	id: PropTypes.number,
};

export default MovieVideos;
