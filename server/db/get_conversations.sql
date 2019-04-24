SELECT 
    conversation_id, conversation_name
FROM conversations
INNER JOIN conversation_users ON conversations.id = conversation_users.conversation_id
WHERE user_id = (
    SELECT user_id FROM users
        WHERE user_id = $1
)