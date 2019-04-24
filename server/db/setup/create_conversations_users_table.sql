CREATE TABLE conversation_users (
    id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES conversations(id) 
        ON DELETE CASCADE,
    user_id INT REFERENCES Users(user_id)
);