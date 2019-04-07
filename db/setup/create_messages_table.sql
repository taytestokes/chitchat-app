CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    conversation_id INTEGER REFERENCES Conversations(conversation_id) 
        ON DELETE CASCADE,
    user_id INTEGER REFERENCES Users(user_id) 
        ON DELETE CASCADE,
    body TEXT,
    created_at DATE
);