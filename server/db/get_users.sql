SELECT user_id, username, email FROM users
    WHERE user_id != ${user_id}
    LIMIT ${page_size} OFFSET ${skip};