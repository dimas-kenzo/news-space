import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Blog() {
  
  const [articles, setArticles] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function(){
    document.title='Blog'
}, [])
  
  useEffect(function () {
    async function getArticle() {
      //const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles/');
      const request = await fetch('https://api.jokolodang.com/api/v1');
      const response = await request.json();
      setArticles(response);
      console.log(response);
      setLoading(false)
    }
    
    getArticle();
  }, [])

  return (
    <section className="section">
      <h1 className="section-title">Blog Page</h1>
      {loading && <i>Loading article ... </i>}
            {!loading && (
                <div className="articles">
                    {articles.map(function (article) {
                        return (
                          <article key={article.id} className="article">
                            <h2 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                            <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                          </article>
                        )
                    })}
                </div>
            )}

    </section>
  )
}