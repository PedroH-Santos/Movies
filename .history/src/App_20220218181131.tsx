import { lazy, useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';


import { SideBar } from './components/SideBar';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

const Content = lazy(async () => {
  return import('./components/Content').then(mod => mod.Content);
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

