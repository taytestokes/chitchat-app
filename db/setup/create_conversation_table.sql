CREATE TABLE conversations (
    conversation_id SERIAL PRIMARY KEY,
    conversation_users INT REFERENCES conversation_users(id)
        ON DELETE CASCADE,
    created_at DATE
);