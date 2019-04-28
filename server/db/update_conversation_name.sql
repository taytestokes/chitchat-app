update conversations
SET conversation_name = $1
WHERE conversations.id =$2;