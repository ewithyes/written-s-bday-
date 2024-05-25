<?php
$conn = new mysqli('localhost', 'username', 'password', 'database');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = $_POST['title'];
$excerpt = $_POST['excerpt'];
$content = $_POST['content'];

$sql = "INSERT INTO posts (title, excerpt, content) VALUES ('$title', '$excerpt', '$content')";

if ($conn->query($sql) === TRUE) {
    echo "New post created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>