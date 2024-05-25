<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Post</title>
    <link rel="stylesheet" href="styless.css">
</head>
<body>
    <div class="post-content">
        <?php
        $conn = new mysqli('localhost', 'username', 'password', 'database');
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        $id = intval($_GET['id']);
        $sql = "SELECT title, content FROM posts WHERE id=$id";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<h1>" . $row["title"] . "</h1>";
                echo "<p>" . $row["content"] . "</p>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
        ?>
    </div>
</body>
</html>