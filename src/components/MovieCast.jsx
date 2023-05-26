import useCast from "../hooks/useCast";
import PropTypes from "prop-types";
import CastMemberCard from "./CastMemberCard";

function MovieCast({ id }) {
	const cast = useCast(id);

	return (
		<section className="p-2">
			<h3 className="text-white text-3xl">Main Cast</h3>
			<section className="flex gap-2 scrollbar overflow-x-auto pb-2">
				{cast &&
					cast.map((castMember) => (
						<CastMemberCard key={castMember.id} data={castMember} />
					))}
			</section>
		</section>
	);
}

MovieCast.propTypes = {
	id: PropTypes.number,
};

export default MovieCast;
