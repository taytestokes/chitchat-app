SELECT 
    *
FROM conversations
    WHERE conversation_users IN (
        SELECT
        DISTINCT(id) FROM conversation_users
            WHERE user_id = $1;
    );