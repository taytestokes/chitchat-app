SELECT user_id, username, email FROM users
    WHERE user_id != $1;