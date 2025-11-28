import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Open-source personal media server, your media on your terms.">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons">
            <Link className="button button--secondary button--lg" to="/docs">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Why LibreUno?</h2>
            <p>
              LibreUno is a modern, open-source media server you can host yourself — 
              built for privacy, flexibility, and control over your media library.
            </p>
          </div>
        </section>

        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>Self-Hosted</h3>
                </div>
                <div className="card__body">
                  <p>Control your media server and data with full privacy and ownership.</p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>Modern UI</h3>
                </div>
                <div className="card__body">
                  <p>Streamlined, intuitive interface optimized for all devices.</p>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <h3>Open Source</h3>
                </div>
                <div className="card__body">
                  <p>Community-driven development with full transparency.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Check out the docs to learn how to install, configure, and contribute to LibreUno.</p>
            <Link className="button button--primary button--lg" to="/docs">
              Start Exploring
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
