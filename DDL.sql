CREATE TABLE if not exists clients (
            id SERIAL PRIMARY KEY,
            name VARCHAR(90),
            email VARCHAR(90) UNIQUE,
            phone VARCHAR(13) UNIQUE,
            x FLOAT,
            y FLOAT
        );