CREATE TABLE user_interaction (
    id uuid DEFAULT gen_random_uuid (),
    user_id uuid NOT NULL,
    content_id uuid NOT NULL,
    is_liked BOOLEAN DEFAULT false,
    is_read BOOLEAN DEFAULT false,
    PRIMARY KEY (user_id, content_id)
);