SELECT conversations.conversation_id, messages.body
    FROM conversations
INNER JOIN messages ON conversations.conversation_id = messages.conversation_id
WHERE conversations.conversation_id IN (
        SELECT DISTINCT (id) FROM conversation_users
            WHERE conversation_users.user_one = $1
                OR conversation_users.user_two = $1
    )
ORDER BY messages.message_id DESC
    LIMIT 1;