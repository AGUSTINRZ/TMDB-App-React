import aluraflix from "../../public/images/aluraflix.svg";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function NavBar({ showNewContent, setShowNewContent, setId }) {
	const [yOffset, setYOffset] = useState(0);

	function handleClick() {
		setShowNewContent(!showNewContent);
		setId(null);
	}

	useEffect(() => {
		const handleScroll = () => {
			setYOffset(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`p-2 left-0 right-0 top-0 fixed w-full z-10 transition-colors ${
				yOffset > 10 ? "bg-black/70 backdrop-blur-sm" : "bg-none"
			}`}
		>
			<div className="flex justify-between items-center max-w-screen-2xl mx-auto ">
				<img
					src={aluraflix}
					alt="Logo"
					className="drop-shadow-[0px_1px_2px_rgba(0,0,0,.7)]"
				/>
				<button
					onClick={handleClick}
					className={`${
						showNewContent ? "block" : "hidden"
					} ml-auto mr-2 w-10 aspect-square rounded-full text-white bg-primary-color hover:bg-blue-600 transition-colors`}
				>
					<FontAwesomeIcon icon={faHome} />
				</button>
				<SearchBar setId={setId} setShowNewContent={setShowNewContent}/>
			</div>
		</nav>
	);
}

NavBar.propTypes = {
	showNewContent: PropTypes.bool,
	setShowNewContent: PropTypes.func,
	setId: PropTypes.func,
};

export default NavBar;
