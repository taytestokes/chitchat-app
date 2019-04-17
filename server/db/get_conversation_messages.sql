SELECT * FROM messages
    WHERE conversation_id = (
        SELECT conversation_id
            FROM conversations
        WHERE
            conversation_id = $1
    );