import React, { useState, useEffect } from 'react';
import '../styles/TrendingNews.css';
import api from '../services/api';

const TrendingNews = () => {
    const [trendingArticles, setTrendingArticles] = useState([]);

    useEffect(() => {
        fetchTrendingArticles();
    }, []);

    const fetchTrendingArticles = async () => {
        try {
            const response = await api.get('/top-headlines', {
                params: {
                    country: 'us',
                    category: 'general',
                    pageSize: 5,
                },
            });
            setTrendingArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching trending articles:', error);
        }
    };

    return (
        <div className="trending-news">
            <h2>Trending News</h2>
            {trendingArticles.map((article) => (
                <div key={article.url} className="trending-news-item">
                    <img src={article.urlToImage} alt={article.title} />
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
};

export default TrendingNews;
