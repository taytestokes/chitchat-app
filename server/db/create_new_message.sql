INSERT INTO messages
    (convi_id, user_id, body, created_at)
VALUES
    ($1, $2, $3, $4)
RETURNING *;