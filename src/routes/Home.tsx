import { useEffect, useState } from 'react';
import Movie from '../components/Characters';
import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };

  console.log(characters);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {characters.map((characters) => (
            <Movie
              key={characters.id}
              id={characters.id}
              name={characters.name}
              thumbnail={characters.thumbnail}
              description={characters.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
