CREATE TABLE subscribers (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    phone_number text NOT NULL,
    curator_id INTEGER 
        REFERENCES curators(id) ON DELETE CASCADE NOT NULL
);