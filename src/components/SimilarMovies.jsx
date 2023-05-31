import MovieCard from "../components/MovieCard"
import PropTypes from "prop-types";
import useSimilar from "../hooks/useSimilar"

function SimilarMovies({ id, setId, setPageContext }) {
  const data = useSimilar(id)

  return (
    <>
      {data && (
        <section className='p-2 text-white'>
          <h3 className="text-3xl mb-2">Similar Movies</h3>
          <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 place-items-center'>
            {data.results.map(movie => (
                <MovieCard key={movie.id} data={movie} setId={setId} setPageContext={setPageContext} />
            ))}
          </section>
        </section>
      )}
    </>
  )
}

SimilarMovies.propTypes = {
	id: PropTypes.number,
	setId: PropTypes.func,
  setPageContext: PropTypes.func
};

export default SimilarMovies