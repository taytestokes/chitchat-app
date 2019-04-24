CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    conversation_id INTEGER REFERENCES conversations(id) 
        ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(user_id) 
        ON DELETE CASCADE,
    body TEXT,
    created_at TEXT
);