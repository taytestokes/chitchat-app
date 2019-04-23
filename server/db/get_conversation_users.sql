SELECT user_id, username, email, pic_url FROM users
INNER JOIN conversation_users 
ON users.user_id = conversation_users.user_one 
OR users.user_id = conversation_users.user_two
WHERE conversation_users.id = (SELECT conversation_id FROM conversations WHERE conversation_id = $1);