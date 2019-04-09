WITH conversation_users_insert AS (
    INSERT INTO conversation_users
        (user_one, user_two)
    VALUES
        ($1, $2)
    RETURNING id
)
INSERT INTO conversations
    (conversation_users)
VALUES
    ((SELECT id FROM conversation_users_insert));