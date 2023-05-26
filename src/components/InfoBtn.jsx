import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function InfoBtn({ title, setPageContext, id, setId }) {

	function handleClick() {
		setPageContext(true)
		setId(id)
	}

	return (
		<>
			{title ? (
				<div className="flex items-center gap-2 px-2 py-1 bg-black/50 rounded border border-white hover:bg-white hover:text-black transition-colors cursor-pointer" onClick={handleClick}>
					{title && <p>{title}</p>}
					<FontAwesomeIcon icon={faInfoCircle} />
				</div>
			) : (
        <div className="hover:text-primary-color transition-colors cursor-pointer" onClick={handleClick}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      )}
		</>
	);
}

InfoBtn.propTypes = {
  title: PropTypes.string,
	setPageContext: PropTypes.func,
	id: PropTypes.number,
	setId: PropTypes.func
}

export default InfoBtn;
