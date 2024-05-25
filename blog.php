<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Blog</title>
    <link rel="stylesheet" href="styless.css">
</head>
<body>
    <h1>Blog</h1>
    <div class="posts">
        <?php
        $conn = new mysqli('localhost', 'username', 'password', 'database');
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $sql = "SELECT id, title, excerpt FROM posts";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<div class='post'>";
                echo "<h2>" . $row["title"] . "</h2>";
                echo "<p>" . $row["excerpt"] . "</p>";
                echo "<a href='post.php?id=" . $row["id"] . "'>Read More</a>";
                echo "</div>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
        ?>
    </div>
</body>
</html>
