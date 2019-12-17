CREATE TABLE chat.`user` (
    uid varchar(100) NOT NULL,
    name varchar(100) NULL,
    email varchar(100) NOT NULL,
    CONSTRAINT user_PK PRIMARY KEY (uid),
    CONSTRAINT user_UN UNIQUE KEY (email)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;
