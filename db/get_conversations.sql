SELECT
    *
FROM conversations
WHERE
    conversation_id IN (SELECT
    DISTINCT(conversation_id)
FROM messages
WHERE
    user_id = $1);