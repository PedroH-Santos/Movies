import { useEffect, useState,lazy } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';


import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

const Content = dynamic(() => {
  return import('./components/Content').then(mod => mod.Content);
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
function dynamic(arg0: () => Promise<(props: any) => JSX.Element>, arg1: { loading: () => JSX.Element; }) {
  throw new Error('Function not implemented.');
}

