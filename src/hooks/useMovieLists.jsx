import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";

function useMovieLists(listName = "popular") {
	const [data, setData] = useState(null);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function getData() {
			setIsLoading(true);
			const response = await fetch(
				`${BASE_URL}movie/${listName}?api_key=${API_KEY}&language=en-US&page=${page}`
			);
			const json = await response.json();
			setData((prevData) => {
				if (prevData === null) {
					return json;
				} else {
					return {
						...json,
						results: [...prevData.results, ...json.results],
					};
				}
			});
			setIsLoading(false);
		}
		getData();
	}, [listName, page]);

	return [ data, setPage, isLoading ];
}

export default useMovieLists;
