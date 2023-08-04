CREATE TABLE tasks(
    id INT IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    due_date DATE
)