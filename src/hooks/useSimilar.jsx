import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../services/api_endpoints";

function useSimilar(id) {
  const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`${BASE_URL}movie/${id}/similar?language=en-US&page=1&api_key=${API_KEY}`
			);
			const json = await response.json();
			setData(json);
			console.log(json);
		}
			getData();
	}, [id]);

	return data;
}

export default useSimilar