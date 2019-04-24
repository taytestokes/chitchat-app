WITH conversation_users_insert AS (
    INSERT INTO conversations
        (conversation_name)
    VALUES
        ('New Conversation')
    RETURNING id
)
INSERT INTO conversation_users
    (conversation_id, user_id)
VALUES
    ((SELECT id FROM conversation_users_insert), $1),
    ((SELECT id FROM conversation_users_insert), $2);
