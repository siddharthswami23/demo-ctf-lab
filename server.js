const express = require("express");
const app = express();

// Homepage
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TechStore - Online Electronics Shop</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        
        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          transition: opacity 0.3s;
        }
        .nav-links a:hover { opacity: 0.8; }
        
        .search-section {
          background: #f8f9fa;
          padding: 3rem 0;
          text-align: center;
        }
        .search-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .search-container h1 {
          margin-bottom: 2rem;
          color: #333;
          font-size: 2.5rem;
        }
        .search-box {
          display: flex;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 50px;
          overflow: hidden;
        }
        .search-box input {
          flex: 1;
          padding: 15px 25px;
          border: none;
          font-size: 1rem;
          outline: none;
        }
        .search-box button {
          padding: 15px 35px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .search-box button:hover {
          transform: scale(1.05);
        }
        
        .results-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 20px;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .product-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .product-card:hover {
          transform: translateY(-5px);
        }
        .product-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, #e0e0e0, #f5f5f5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: #999;
        }
        .product-info {
          padding: 1.5rem;
        }
        .product-name {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }
        .product-price {
          font-size: 1.5rem;
          color: #667eea;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .buy-button {
          width: 100%;
          padding: 10px;
          background: #764ba2;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
        }
        
        footer {
          background: #2d3748;
          color: white;
          text-align: center;
          padding: 2rem;
          margin-top: 4rem;
        }
      </style>
    </head>
    <body>
      <header>
        <div class="header-content">
          <div class="logo">
            <i class="fas fa-shopping-cart"></i>
            TechStore
          </div>
          <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/deals">Deals</a></li>
            <li><a href="/account">Account</a></li>
          </ul>
        </div>
      </header>

      <div class="search-section">
        <div class="search-container">
          <h1>Find Your Perfect Device</h1>
          <form method="GET" action="/search" class="search-box">
            <input type="text" name="q" placeholder="Search for laptops, phones, tablets...">
            <button type="submit"><i class="fas fa-search"></i> Search</button>
          </form>
        </div>
      </div>

      <div class="results-section">
        <h2>Featured Products</h2>
        <div class="products-grid">
          <div class="product-card">
            <div class="product-image">💻</div>
            <div class="product-info">
              <div class="product-name">MacBook Pro 16"</div>
              <div class="product-price">$2,499</div>
              <button class="buy-button">Add to Cart</button>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">📱</div>
            <div class="product-info">
              <div class="product-name">iPhone 15 Pro</div>
              <div class="product-price">$999</div>
              <button class="buy-button">Add to Cart</button>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">🎧</div>
            <div class="product-info">
              <div class="product-name">AirPods Pro</div>
              <div class="product-price">$249</div>
              <button class="buy-button">Add to Cart</button>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">⌚</div>
            <div class="product-info">
              <div class="product-name">Apple Watch</div>
              <div class="product-price">$399</div>
              <button class="buy-button">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 TechStore. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

// Search page - VULNERABLE TO XSS
app.get("/search", (req, res) => {
  const query = req.query.q || "";

  // ❌ VULNERABILITY: User input reflected without encoding
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Search Results - TechStore</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; }
        
        header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .logo a { color: white; text-decoration: none; }
        
        .search-header {
          background: white;
          padding: 2rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .search-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .search-box {
          display: flex;
          max-width: 800px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border-radius: 50px;
          overflow: hidden;
          background: white;
        }
        .search-box input {
          flex: 1;
          padding: 15px 25px;
          border: none;
          font-size: 1rem;
          outline: none;
        }
        .search-box button {
          padding: 15px 35px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
        }
        
        .results-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 20px;
        }
        .results-info {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          margin-bottom: 2rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .results-info h2 {
          color: #333;
          margin-bottom: 0.5rem;
        }
        .search-term {
          color: #667eea;
          font-weight: 600;
        }
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #666;
        }
      </style>
    </head>
    <body>
      <header>
        <div class="header-content">
          <div class="logo">
            <i class="fas fa-shopping-cart"></i>
            <a href="/">TechStore</a>
          </div>
        </div>
      </header>

      <div class="search-header">
        <div class="search-container">
          <form method="GET" action="/search" class="search-box">
            <input type="text" name="q" placeholder="Search products..." value="${query}">
            <button type="submit"><i class="fas fa-search"></i> Search</button>
          </form>
        </div>
      </div>

      <div class="results-container">
        ${query ? `
        <div class="results-info">
          <h2>Search Results</h2>
          <p>You searched for: <span class="search-term">${query}</span></p>
        </div>
        
        <div class="no-results">
          <i class="fas fa-search" style="font-size: 4rem; color: #ddd; margin-bottom: 1rem;"></i>
          <h3>No products found matching "${query}"</h3>
          <p>Try different keywords or browse our featured products</p>
        </div>
        ` : '<div class="no-results"><p>Enter a search term to find products</p></div>'}
      </div>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`TechStore running at http://localhost:${PORT}`);
});
