-- Table: users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatarurl VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: logins
CREATE TABLE logins (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: forms
CREATE TABLE forms (
    id SERIAL PRIMARY KEY,
    form_data JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: adminlogins
CREATE TABLE adminlogins (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    login_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: notes
CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    branch VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    semester INTEGER NOT NULL,
    serial_number INTEGER NOT NULL,
    course_code VARCHAR(255) NOT NULL,
    subject_name VARCHAR(255) NOT NULL,
    module_1 TEXT,
    pdf VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: userss
CREATE TABLE userss (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
