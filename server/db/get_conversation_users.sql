SELECT * FROM conversation_users
WHERE conversation_id = $1 AND user_id != $2;