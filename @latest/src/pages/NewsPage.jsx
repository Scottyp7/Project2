import React, { useState } from 'react';
import '../styles/NewsPage.css'

const newsData = {
  'World': [
    { title: 'World News 1', content: 'Content for world news 1.' },
    { title: 'World News 2', content: 'Content for world news 2.' },
  ],
  'Technology': [
    { title: 'Tech News 1', content: 'Content for tech news 1.' },
    { title: 'Tech News 2', content: 'Content for tech news 2.' },
  ],
  'Sports': [
    { title: 'Sports News 1', content: 'Content for sports news 1.' },
    { title: 'Sports News 2', content: 'Content for sports news 2.' },
  ],
  'Entertainment': [
    { title: 'Entertainment News 1', content: 'Content for entertainment news 1.' },
    { title: 'Entertainment News 2', content: 'Content for entertainment news 2.' },
  ],
};

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('World');

  return (
    <div className="news-container">
      <header className="news-header">
        <h1>News Website</h1>
      </header>
      <div className="news-content">
        <aside className="news-sidebar">
          {Object.keys(newsData).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`news-category ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </aside>
        <main className="news-main">
          <h2>{selectedCategory}</h2>
          {newsData[selectedCategory].map((news, index) => (
            <article key={index} className="news-article">
              <h3>{news.title}</h3>
              <p>{news.content}</p>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NewsPage;