SELECT 
picture, username 
FROM users
INNER JOIN conversation_users 
ON users.user_id = conversation_users.user_id
WHERE conversation_users.conversation_id = $1 
AND users.user_id != $2