import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './forum.module.css';

export default function Forum() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Forum - ${siteConfig.title}`}
      description="Join the community discussions and stay up to date with LibreUno.">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Forum Coming Soon</h1>
          <p className="hero__subtitle">Your Entire Library, One Interface.</p>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Community Discussions</h2>
            <p>
              We are planning to build a dedicated forum for LibreUno where users can discuss development, 
              share ideas, ask questions, and connect with the community.
            </p>
            <p className="margin-vert--md">
              Stay tuned! We’ll announce the official forum as soon as it’s ready.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
