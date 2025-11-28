import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './contact.module.css';

export default function Contact() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Contact - ${siteConfig.title}`}
      description="Get in touch with the LibreUno community.">
      <header className="hero hero--primary">
        <div className="container text--center">
          <h1 className="hero__title">Contact Us</h1>
          <p className="hero__subtitle">Your Entire Library, One Interface.</p>
        </div>
      </header>

      <main>
        <section className="margin-vert--xl text--center">
          <div className="container">
            <h2>Join the Community</h2>
            <p>
              The best way to get support, share ideas, or contribute is through our official Discord channel.
            </p>
            <Link
              className="button button--primary button--lg"
              to="https://discord.gg/2XpemZb2vH"
              target="_blank"
            >
              Join Discord
            </Link>
            <p className="margin-top--md">
              We also have plans to set up a Matrix server with Element in the future for decentralized communication and chat archiving.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
