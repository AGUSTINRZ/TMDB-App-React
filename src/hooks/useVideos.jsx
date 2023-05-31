import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";

function useVideos(id) {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&`
			);
			const json = await response.json();
			setData(json);
			console.log(json);
		}
			getData();
	}, [id]);

	return data;
}

export default useVideos;