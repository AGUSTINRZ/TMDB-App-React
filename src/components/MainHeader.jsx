import PropTypes from "prop-types";
import useMovies from "../hooks/useMovies";
import InfoBtn from "./InfoBtn";
import { IMG_BASE_URL } from "../services/api_endpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function MainHeader({ id, setId, setPageContext }) {
	const data = useMovies(id);

	return (
		<section className="min-h-[80vh]">
			{data && (
				<section
					className="h-[80vh] md:h-[90vh] max-h-[100vh] bg-cover bg-no-repeat bg-center bg-[image:var(--poster-url)] md:bg-[image:var(--backdrop-url)] shadow-[inset_0px_-110px_60px_-40px_rgba(0,0,0,1)]"
					style={{
						"--poster-url": `url(${IMG_BASE_URL}original${data.poster_path})`,
						"--backdrop-url": `url(${IMG_BASE_URL}original${data.backdrop_path})`,
					}}
				>
					<section className="h-full shadow-[inset_0px_-110px_60px_-40px_rgba(0,0,0,1)] backdrop-brightness-90">
						<section className="flex flex-col justify-end md:justify-center gap-4 max-w-screen-2xl mx-auto h-full p-2 text-white drop-shadow-[1px_2px_1px_rgba(0,0,0,.7)]">
							<h1 className="text-center md:text-start text-5xl font-semibold">
								{data.title}
							</h1>
							<p className="hidden md:block text-xl font-medium md:max-w-[50%]">
								{data.overview}
							</p>
							<div className="flex justify-center gap-2 md:justify-start">
								{data.homepage ? (
									<>
										<button className="flex gap-2 items-center bg-white text-black px-2 py-1 rounded font-semibold hover:bg-primary-color hover:text-white transition-colors">
											<a href={data.homepage} target="_blank" rel="noreferrer">
												Homepage
											</a>
											<FontAwesomeIcon icon={faExternalLink} />
										</button>
									</>
								) : null}
								<InfoBtn
									title="Information"
									setPageContext={setPageContext}
									id={id}
									setId={setId}
								/>
							</div>
						</section>
					</section>
				</section>
			)}
		</section>
	);
}

MainHeader.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func,
	setPageContext: PropTypes.func,
};

export default MainHeader;
