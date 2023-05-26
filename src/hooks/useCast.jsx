import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../services/api_endpoints";

function useCast(id) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const json = await response.json();
      setCast(json.cast)
    }
    getData()
  }, [id])

  return cast;
}

export default useCast