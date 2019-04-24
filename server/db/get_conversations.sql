SELECT 
    *
FROM conversations
    WHERE id IN (
        SELECT
        DISTINCT(id) FROM conversation_users
            WHERE user_id = $1
    );