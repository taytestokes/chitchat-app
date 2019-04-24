SELECT * FROM messages
    WHERE conversation_id = (
        SELECT id
            FROM conversations
        WHERE
            id = $1
    )
ORDER BY message_id DESC;