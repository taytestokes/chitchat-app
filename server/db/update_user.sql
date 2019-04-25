UPDATE users 
SET username = $1,
    email = $2
WHERE user_id = $3;