import { useEffect, useState } from 'react';

import { MovieCard } from '../components/MovieCard';
import { api } from '../services/api';

import '../styles/global.scss';

import '../styles/sidebar.scss';
import '../styles/content.scss';
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: any) {
  // Complete aqui
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  const rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <MovieCard key={movies[index].imdbID} title={movies[index].Title} poster={movies[index].Poster} runtime={movies[index].Runtime} rating={movies[index].Ratings[0].Value} />
    )
  }

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.genreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${props.genreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [props.genreId]);


  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            <AutoSizer>
              <List height={300} rowHeight={30} width={900} overscanRowCount={5} rowCount={results.length} rowRenderer={rowRenderer }/>
            </AutoSizer>
          </div>
        </main>
      </div>

    </>
  )
}