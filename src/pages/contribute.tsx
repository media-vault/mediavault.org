import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './contribute.module.css';

export default function Contribute() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Contribute - ${siteConfig.title}`}
      description="Learn how to contribute to LibreUno, our open-source media server project.">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Contribute</h1>
          <p className="hero__subtitle">Your Entire Library, One Interface.</p>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Get Involved</h2>
            <p>
              LibreUno is an open-source project, and we welcome contributions from the community! 
              Whether it's code, documentation, or ideas, you can help shape the future of LibreUno.
            </p>
            <p>
              Before contributing, please review our{' '}
              <Link to="/docs/community-standards">Community Standards</Link> and{' '}
              <Link to="/docs/contributing">Contributing Guidelines</Link>.
            </p>
            <p>
              You can access the full project on{' '}
              <Link to="https://github.com/libreuno/libreuno" target="_blank"
              >
                GitHub 
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
