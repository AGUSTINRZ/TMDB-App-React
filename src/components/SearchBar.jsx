import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, API_KEY } from "../services/api_endpoints";
import ResultMovieCard from "./ResultMovieCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

function SearchBar({ setId, setShowNewContent }) {
	const [isHidden, setIsHidden] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [results, setResults] = useState(null);
	const [value, setValue] = useState("");
	const inputRef = useRef(null);
	const buttonRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handleClick() {
		setIsHidden(!isHidden);
		setValue("");
		setTimeout(() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		}, 0);
	}

	useEffect(() => {
		if (!value) return;
		async function getResults() {
			setIsLoading(true);
			const response = await fetch(
				`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${encodeURIComponent(
					value
				)}&include_adult=true`
			);
			const data = await response.json();
			setResults(data.results);
			setIsLoading(false);
		}
		getResults();
	}, [value]);

	return (
		<div>
			<form onSubmit={(e) => handleSubmit(e)} className="flex">
				<div
					className="flex justify-center items-center cursor-pointer text-xl text-white rounded-full bg-primary-color hover:bg-blue-600 transition-colors w-10 aspect-square"
					onClick={handleClick}
					ref={buttonRef}
				>
					<FontAwesomeIcon icon={faSearch} />
				</div>
				<div
					className={`flex bg-zinc-800 items-center fixed ${
						isHidden ? "hidden" : "block"
					} p-1 top-16 w-full md:max-w-[50rem] max-w-[94vw] left-1/2 -translate-x-1/2 rounded bg-primary-gray text-white`}
				>
					<input
						onChange={(e) => setValue(e.target.value)}
						placeholder="Search..."
						value={value}
						type="text"
						className="w-full h-full p-2 bg-transparent outline-none"
						ref={inputRef}
					/>
					{isLoading && (
						<div className="text-primary-color pr-1">
							<Spinner />
						</div>
					)}
				</div>
			</form>
			{!isHidden && (
				<section className="fixed w-full md:max-w-[50rem] max-w-[94vw] top-32 -mt-2 left-1/2 -translate-x-1/2 bg-zinc-800 text-white max-h-[75vh] rounded overflow-y-scroll scrollbar">
					{results &&
						value &&
						results.map((result) => (
							<ResultMovieCard key={result.id} result={result} setId={setId} setShowNewContent={setShowNewContent} setIsHidden={setIsHidden} />
						))}
				</section>
			)}
		</div>
	);
}

SearchBar.propTypes = {
	setId: PropTypes.func,
	setShowNewContent: PropTypes.func,
}

export default SearchBar;
