
import { useEffect, useState } from 'react';

import { Button } from '../components/Button';
import { api } from '../services/api';

import '../styles/global.scss';

import '../styles/sidebar.scss';
import '../styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


export function SideBar(props : any) {
  // Complete aqui
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);



  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.modifyId(genre.id)}
              selected={props.genreId === genre.id}
            />
          ))}
        </div>

      </nav>

    </>
  )
}