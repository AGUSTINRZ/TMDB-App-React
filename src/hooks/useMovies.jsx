import { useState, useEffect, useRef } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";

function useMovies(id) {
	const [data, setData] = useState(null);
	const value = useRef(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
			);
			const json = await response.json();
			setData(json);
		}
		if (value.current !== id) {
			value.current = id;
			getData();
		}
	}, [id]);

	return data;
}

export default useMovies;
