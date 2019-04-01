CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    conversation_id INTEGER REFERENCES Conversations(conversation_id),
    user_id INTEGER REFERENCES Users(user_id),
    body TEXT,
    created_at DATE
);