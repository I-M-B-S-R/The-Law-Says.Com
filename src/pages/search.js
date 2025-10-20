import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import styles from './Search.module.css';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    titles: true,
    chapters: true,
    articles: true,
    sections: true
  });

  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      // Filter results based on selected filters
      const filteredResults = data.filter(result => {
        if (result.type === 'title' && filters.titles) return true;
        if (result.type === 'chapter' && filters.chapters) return true;
        if (result.type === 'article' && filters.articles) return true;
        if (result.type === 'section' && filters.sections) return true;
        return false;
      });
      
      setResults(filteredResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    if (q) {
      setSearchQuery(q);
      performSearch(q);
    }
  }, [q, performSearch]);


  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const highlightText = (text, query) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <mark key={i} className={styles.highlight}>{part}</mark> : part
    );
  };

  const getResultUrl = (result) => {
    if (result.type === 'title') {
      return `/states/arizona/title/${result.titleNumber}`;
    } else if (result.type === 'chapter') {
      return `/states/arizona/title/${result.titleNumber}/chapter/${result.chapterNumber}`;
    } else if (result.type === 'article') {
      return `/states/arizona/title/${result.titleNumber}/chapter/${result.chapterNumber}/article/${result.articleNumber}`;
    } else if (result.type === 'section') {
      return `/states/arizona/title/${result.titleNumber}/chapter/${result.chapterNumber}/article/${result.articleNumber}/section/${result.sectionNumber}`;
    }
    return '#';
  };

  return (
    <Layout 
      title="Search Arizona Laws"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Search', href: '/search' }
      ]}
    >
      <div className={styles.searchContainer}>
        <div className={styles.searchHeader}>
          <h1>Search Arizona Revised Statutes</h1>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search titles, chapters, articles, or sections..."
              className={styles.searchInput}
              autoFocus
            />
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </form>
        </div>

        <div className={styles.filtersContainer}>
          <h3>Filter Results:</h3>
          <div className={styles.filters}>
            <label className={styles.filterLabel}>
              <input
                type="checkbox"
                checked={filters.titles}
                onChange={() => handleFilterChange('titles')}
              />
              <span>Titles</span>
            </label>
            <label className={styles.filterLabel}>
              <input
                type="checkbox"
                checked={filters.chapters}
                onChange={() => handleFilterChange('chapters')}
              />
              <span>Chapters</span>
            </label>
            <label className={styles.filterLabel}>
              <input
                type="checkbox"
                checked={filters.articles}
                onChange={() => handleFilterChange('articles')}
              />
              <span>Articles</span>
            </label>
            <label className={styles.filterLabel}>
              <input
                type="checkbox"
                checked={filters.sections}
                onChange={() => handleFilterChange('sections')}
              />
              <span>Sections</span>
            </label>
          </div>
        </div>

        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Searching...</p>
          </div>
        )}

        {!loading && searchQuery && results.length === 0 && (
          <div className={styles.noResults}>
            <p>No results found for &quot;{searchQuery}&quot;</p>
            <p>Try different keywords or check your spelling</p>
          </div>
        )}


        {!loading && results.length > 0 && (
          <div className={styles.resultsContainer}>
            <div className={styles.resultsHeader}>
              <h2>Found {results.length} result{results.length !== 1 ? 's' : ''}</h2>
            </div>
            <div className={styles.results}>
              {results.map((result, index) => (
                <div key={index} className={styles.resultItem}>
                  <div className={styles.resultType}>
                    {result.type.toUpperCase()}
                  </div>
                  <a href={getResultUrl(result)} className={styles.resultLink}>
                    <h3>{highlightText(result.title, searchQuery)}</h3>
                    {result.description && (
                      <p className={styles.resultDescription}>
                        {highlightText(result.description, searchQuery)}
                      </p>
                    )}
                    <div className={styles.resultPath}>
                      {result.type === 'chapter' && `Title ${result.titleNumber} › Chapter ${result.chapterNumber}`}
                      {result.type === 'article' && `Title ${result.titleNumber} › Chapter ${result.chapterNumber} › Article ${result.articleNumber}`}
                      {result.type === 'section' && `Title ${result.titleNumber} › Chapter ${result.chapterNumber} › Article ${result.articleNumber} › Section ${result.sectionNumber}`}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
