CREATE TABLE users (
    id BIGINT GENERATED ALWAYS AS PRIMARY KEY,
    username TEXT
    userpoints INTEGER
)

CREATE TABLE transactions (
    id BIGINT GENERATED ALWAYS AS PRIMARY KEY,
    payer TEXT,
    points INTEGER,
    stamp TIMESTAMP  
)



