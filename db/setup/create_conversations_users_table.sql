CREATE TABLE conversation_users (
    id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(conversation_id) 
        ON DELETE CASCADE,
    user_one INT REFERENCES users(user_id) 
        ON DELETE CASCADE,
    user_two INT REFERENCES users(user_id) 
        ON DELETE CASCADE
);