import React from 'react';
import Row from '../../components/row/Row';
import styles from './styles/RowContainer.module.css';

const RowContainer = () => (
  <div className={styles.container}>
    <Row category="ListMovies" isNetflixRow>List Movies</Row>
  </div>
);

export default RowContainer;
