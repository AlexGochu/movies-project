import Link from "next/link";

const MoviePage = () => {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 255,
      rating: 4.9,
      description: "The iconic Batman film directed by Christopher Nolan.",
    },
  ];
  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-semibold mb-4">Movies List</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-gray-800 p-4 rounded-lg">
            <Link
              className="text-blue-400 hover:text-blue-600"
              href={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviePage;
