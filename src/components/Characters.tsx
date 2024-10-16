import { Link } from 'react-router-dom';

import styles from './Characters.module.css';

function Characters({ id, name, thumbnail, description }) {
  return (
    <div className={styles.characters}>
      <ul>
        <li>
          <Link to={`/character/${id}`}>
            <a href="">
              <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={name}
                className="imgName"
              />
            </a>
            <h3>{name}</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Characters;
