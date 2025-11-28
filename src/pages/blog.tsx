import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './blog.module.css';
import Link from '@docusaurus/Link';

export default function Blog() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Blog - ${siteConfig.title}`}
      description="Updates, news, and announcements from the LibreUno project.">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Blog</h1>
          <p className="hero__subtitle">Your Entire Library, One Interface.</p>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Coming Soon</h2>
            <p>
              The LibreUno blog is not live yet, but we plan to share updates, development progress, announcements, and insights here in the near future.
            </p>
            <p>
              In the meantime, you can keep up with the project via our <Link to="/contact">Discord channel</Link> or by checking the documentation.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
