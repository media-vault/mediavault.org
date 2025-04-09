import React from 'react';
import Layout from '@theme/Layout';

function Home() {
  return (
    <Layout title="Home" description="MediaVault Documentation">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Welcome to MediaVault</h1>
          <p className="hero__subtitle">Your open-source media streaming solution</p>
          <div className="button-container">
            <a href="/docs" className="button button--primary">Get Started</a>
          </div>
        </div>
      </header>
      <main>
        <section className="features">
          {/* Add other sections like features, install guide, etc. */}
        </section>
      </main>
    </Layout>
  );
}

export default Home;
