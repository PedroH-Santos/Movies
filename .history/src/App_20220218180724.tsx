import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';


import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

const SideBar = dynamic<any>(() => {
  return import('./components/SideBar').then(mod => mod.SideBar);
}, {
  loading: () => <span> Carregando... </span>
});


export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  return (
    
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar  genreId = {selectedGenreId} modifyId = {setSelectedGenreId} />
      <Content genreId = {selectedGenreId} />

    </div>
  )
}
function dynamic<T>(arg0: () => Promise<any>, arg1: { loading: () => JSX.Element; }) {
  throw new Error('Function not implemented.');
}

