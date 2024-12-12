'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMovies } from "@/services/getMovies";
import { Movie } from "@/dataTypes/Movie";

export default function Dashboard() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data: Movie[] = await getMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
    <div className="container mx-auto p-4">
        <nav className="mb-4 py-5">
            <Link href="/movies" className="white hover:underline">
                Home
            </Link>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 dark:bg-gray-800 my-5">
            {movies.map((movie) => (
                <Link key={movie.id} href={`/movies/${movie.id}`} className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg flex flex-col">
                    <div>
                        <h2 className="text-2xl dark:text-white">{movie.title}</h2>
                        <p className="dark:text-gray-400 py-5">{movie.description}</p>
                    </div>
                    <div className="flex justify-between items-end mt-auto">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{movie.year}</p>
                        <p className="text-sm text-blue-500 dark:text-blue-400 hover:underline">Show more...</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
    );
}
