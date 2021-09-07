DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS transactions;

CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username TEXT,
    user_points INTEGER
);

CREATE TABLE transactions (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    payer TEXT,
    points INTEGER,
    stamp TIMESTAMP,
    linked_user BIGINT,
    CONSTRAINT fk_app
    FOREIGN KEY(linked_user)
    REFERENCES users(id)
    
);



