<?php
// ❌ INTENTIONALLY VULNERABLE - No encoding applied
$search = $_GET['search'] ?? '';
?>
<!DOCTYPE html>
<html>
<head>
  <title>Search</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
    }
    h1 {
      color: #333;
    }
    input[type="text"] {
      padding: 8px;
      width: 70%;
      border: 1px solid #ccc;
    }
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    .results {
      margin-top: 20px;
      padding: 15px;
      background-color: #f5f5f5;
    }
  </style>
</head>
<body>
  <h1>Search Results</h1>
  
  <form method="GET" action="">
    <input type="text" name="search" placeholder="Enter search term..." value="<?= $search ?>">
    <button type="submit">Search</button>
  </form>
  
  <?php if ($search): ?>
  <div class="results">
    <p>You searched for: <?= $search ?></p>
  </div>
  <?php endif; ?>
</body>
</html>
