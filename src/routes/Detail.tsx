import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import detail from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharactersDetail();
  }, []);

  const getCharactersDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setCharacter(json.data.results[0]);
    setLoading(false);
  };
  console.log(`character Detail : `, character);

  return (
    <div className={detail.container}>
      {loading ? (
        <div className={detail.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={detail.center}>
          <div className={detail.left}>
            <h1 className={detail.title}>{`${character.name}`}</h1>
            <ul className={detail.ulInfo}>
              {character.urls.map((data) => (
                <li key={data} className={detail.liInfo}>
                  <a href={data.url} target="_blank" className={detail.aTag}>
                    {data.type}
                  </a>
                </li>
              ))}
            </ul>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="thumbnail"
            />
          </div>
          <div className={detail.right}>
            <ul className={detail.ulInfo}>
              {character.series.items.map((data) => (
                <li key={data} className={detail.liInfo}>
                  <span>{`${data.name}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
Detail.propType = {};
export default Detail;
