import { useState } from "react";
import useImages from "../hooks/useImages";
import PropTypes from "prop-types";
import ImageSection from "./ImageSection";

function MovieImages({ id }) {
	const [section, setSection] = useState(0);
	const data = useImages(id);

	return (
		<section className="text-white p-2">
			<div className="flex jus items-center gap-2">
				<h3 className="text-3xl mr-auto">Images</h3>
				<button
					onClick={() => setSection(0)}
					className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
						section === 0 ? "bg-primary-color" : "bg-zinc-900"
					}`}
				>
					Backdrops
				</button>
				<button
					onClick={() => setSection(1)}
					className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
						section === 1 ? "bg-primary-color" : "bg-zinc-900"
					}`}
				>
					Posters
				</button>
				<button
					onClick={() => setSection(2)}
					className={`px-2 py-1 rounded hover:bg-primary-color transition-colors ${
						section === 2 ? "bg-primary-color" : "bg-zinc-900"
					}`}
				>
					Logos
				</button>
			</div>
			{data && (
				<section className="min-h-[10rem] md:min-h-[20rem]">
					{section === 0 ? (
						<ImageSection images={data.backdrops} />
					) : section === 1 ? (
						<ImageSection images={data.posters} />
					) : section === 2 ? (
						<ImageSection images={data.logos} />
					) : null}
				</section>
			)}
		</section>
	);
}

MovieImages.propTypes = {
	id: PropTypes.number,
};

export default MovieImages;
