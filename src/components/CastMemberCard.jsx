import PropTypes from "prop-types";
import { IMG_BASE_URL } from "../services/api_endpoints";

function CastMemberCard({ data }) {
	return (
		<article className="bg-zinc-800 min-w-[10rem] max-w-[10rem] rounded overflow-hidden text-white">
			<div className="min-h-[15rem]">
				<img src={`${IMG_BASE_URL}w185/${data.profile_path}`} alt={`Poster of ${data.name}`} loading="lazy" className="max-h-[15rem] w-full h-full object-cover"/>
			</div>
			<div className="px-1">
				<h3 className="text-xl font-semibold">{data.name}</h3>
				<p className="text-lg">{data.character}</p>
			</div>
		</article>
	);
}

CastMemberCard.propTypes = {
	data: PropTypes.object,
};

export default CastMemberCard;
