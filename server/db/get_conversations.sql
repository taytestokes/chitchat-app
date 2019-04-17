SELECT 
    *
FROM conversations
    WHERE conversation_users IN (
        SELECT
        DISTINCT(id) FROM conversation_users
            WHERE user_one = $1 
            OR user_two = $1
    );