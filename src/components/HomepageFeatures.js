import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Information Theory',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        Theoretical background of Informatics, Natural Language Processing and Cybernetics. Developments in Quantum Information.


      </>
    ),
  },
  {
    title: 'Quantum Computing',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        Theoretical overview of Quantum Computing technologies, Quantum Cryptography, and Quantum Information. Practical examples and experiments with quantum algorithms.
      </>
    ),
  },
  {
    title: 'Data Science',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        The example books are focused on Data Science and Data Management applications. Check out <code>books</code> directory.
      </>
    ),
  },
  {
    title: 'Applied Informatics',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        Informatics in Scientific Research, Data Management and Analysis. Using tools of Data Scientist in application in natural science applications.


      </>
    ),
  },
  {
    title: 'Open Source Toolbox',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        Software used in the example tutorials is open source and readily available to download, install and use.
      </>
    ),
  },
  {
    title: 'Easy to Access',
    Svg: require('../../static/img/book-cover-1.svg').default,
    description: (
      <>
        All books and articles in the project are open access. The publishing framework of the project is tailored to be easily read on mobile devices.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
