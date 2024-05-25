<?php
// Simple authentication for the admin interface
session_start();

if (!isset($_SESSION['logged_in'])) {
    if ($_POST['password'] === 'your_admin_password') {
        $_SESSION['logged_in'] = true;
    } else {
        echo '<form method="post">
                <input type="password" name="password" placeholder="Enter password">
                <button type="submit">Login</button>
              </form>';
        exit;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin - Add Post</title>
</head>
<body>
    <h1>Add New Post</h1>
    <form action="add_post.php" method="post">
        <label for="title">Title:</label><br>
        <input type="text" id="title" name="title" required><br>
        <label for="excerpt">Excerpt:</label><br>
        <textarea id="excerpt" name="excerpt" required></textarea><br>
        <label for="content">Content:</label><br>
        <textarea id="content" name="content" required></textarea><br>
        <button type="submit">Add Post</button>
    </form>
</body>
</html>