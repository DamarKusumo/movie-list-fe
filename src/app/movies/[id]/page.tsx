'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { getMovie } from "@/services/getMovies";
import { Movie } from "@/dataTypes/Movie";

export default function Details({ params }: { params: { id: string } }) {
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data: Movie = await getMovie(params.id); // Use params.id here
            setMovie(data);
        };
        fetchMovie();
    }, [params.id]); // Include params.id in the dependency array

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <nav className="mb-4 py-5">
                <Link href="/movies" className="white hover:underline">
                    Home
                </Link>
            </nav>
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-3xl">{movie.title}</h1>
                <p className="text-lg">{movie.description}</p>
                <p className="text-base">{movie.year}</p>
            </div>
        </div>
    );
}
