import { useEffect, useState } from "react";
import { IMG_BASE_URL } from "../services/api_endpoints";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ImageSection({ images }) {
  const [limit, setLimit] = useState(5);
  function handleClick() {
    setLimit(prevLimit => prevLimit + 5);
  }

  useEffect(() => {
    setLimit(5);
  }, [images])

	return (
		<section className="flex gap-2 overflow-x-scroll scrollbar py-2 max-h-[30rem] pb-2">
			{images.length > 0 ?
				images.map((image, index) => (
          index >= limit ? null :
					<img
						key={image.file_path}
						src={`${IMG_BASE_URL}original${image.file_path}`}
						alt=""
						loading="lazy"
						className="max-h-[24rem] object-cover rounded"
					/>
				)) : <p>No images available</p>}
        <button onClick={handleClick} className={`${
								limit >= images.length
									? "bg-neutral-300 cursor-default"
									: "bg-primary-color cursor-pointer"
							} px-8 md:px-12 rounded text-2xl ml-auto`}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
		</section>
	);
}

ImageSection.propTypes = {
	images: PropTypes.array,
};

export default ImageSection;
