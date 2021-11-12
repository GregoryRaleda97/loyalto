import React from 'react';
import Row from '../../components/row/Genre';
import styles from './styles/RowContainer.module.css';

const RowContainer = () => (
  <div className={styles.container}>
    <Row category="GenreMovies" isNetflixRow>Genre Movies</Row>
  </div>
);

export default RowContainer;
