CREATE TABLE conversations (
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES conversation_users(id)
        ON DELETE CASCADE
);