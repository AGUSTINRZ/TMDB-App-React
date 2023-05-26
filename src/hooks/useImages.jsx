import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";

function useImages(id) {
	const [data, setData] = useState(null);

	useEffect(() => {
		async function getData() {
			const response = await fetch(
				`${BASE_URL}movie/${id}/images?api_key=${API_KEY}&`
			);
			const json = await response.json();
			setData(json);
		}
			getData();
	}, [id]);

	return data;
}

export default useImages;