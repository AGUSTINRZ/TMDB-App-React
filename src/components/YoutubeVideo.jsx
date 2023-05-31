import PropTypes from "prop-types";

function YoutubeVideo({ videoKey }) {
	return (
		<iframe
			src={`https://www.youtube.com/embed/${videoKey}`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
      className="w-full min-h-[16rem] md:min-h-[26rem] max-h-[26rem] aspect-video"
		></iframe>
	);
}

YoutubeVideo.propTypes = {
	videoKey: PropTypes.string,
};

export default YoutubeVideo;
