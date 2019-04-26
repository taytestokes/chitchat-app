SELECT 
conversation_name, message_id, conversation_id, users.user_id, body, created_at, picture, username
FROM conversations
INNER JOIN messages ON conversations.id = messages.conversation_id
INNER JOIN users ON messages.user_id != users.user_id
WHERE conversation_id = $1
ORDER BY message_id DESC
LIMIT 1;