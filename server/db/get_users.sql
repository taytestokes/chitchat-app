SELECT user_id, username, email, pic_url FROM users
    WHERE user_id != ${user_id}
    LIMIT ${page_size} OFFSET ${skip};