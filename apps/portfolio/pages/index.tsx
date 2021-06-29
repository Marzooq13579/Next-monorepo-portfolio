import React from 'react';

import styles from './index.module.css';

import Header from '../components/header/header';
import About from '../components/about/about';
import Footer from '../../../libs/Footer';
import resumeData from '../public/resumeData';

export function Index() {

  return (
    <div className={styles.page}>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
    </div>
  );
}

export default Index;