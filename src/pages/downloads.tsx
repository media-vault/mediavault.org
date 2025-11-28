import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './downloads.module.css';

export default function Downloads() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Downloads - ${siteConfig.title}`}
      description="Download LibreUno or build from source.">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Downloads</h1>
          <p className="hero__subtitle">Your Entire Library, One Interface.</p>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>No Prebuilt Downloads Yet</h2>
            <p>
              LibreUno is currently in development. There are no official downloads available at this time.
            </p>
            <p>
              However, you can <strong>build LibreUno from source</strong> using our documentation.
            </p>
            <Link className="button button--primary button--lg" to="/docs/installation/source">
              Build from Source
            </Link>
          </div>
        </section>

        <section className="margin-vert--xl text--center">
          <div className="container">
            <h3>Why Build from Source?</h3>
            <p>
              - Stay on the cutting edge with the latest features. <br />
              - Customize LibreUno to your environment. <br />
              - Contribute to the open-source community.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
