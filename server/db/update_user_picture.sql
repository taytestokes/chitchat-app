update users
SET picture = $1
WHERE users.user_id =$2;