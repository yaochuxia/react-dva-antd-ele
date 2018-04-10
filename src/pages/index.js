import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd-mobile';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
        <Button type="primary">111</Button>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
