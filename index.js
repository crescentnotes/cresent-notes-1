import express from "express";
import multer from 'multer';
import session from 'express-session';
import bodyParser from "body-parser";
import path from 'path';
import pg from "pg";
import pkg from 'pg';
import { fileURLToPath } from 'url';
import bcrypt from "bcrypt";
import passport from "passport";
import crypto from 'crypto';
import nodemailer from 'nodemailer'; 
import jwt from 'jsonwebtoken';
 
 
// const { Client } = pkg;
const { Pool } = pkg;
const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
// Database connection
// Database connection using pg.Client
 const db = new pg.Client({
  user: 'postgres.rqibetocqeuusrgsjrhi',  // Your database username
  host: 'aws-0-ap-southeast-1.pooler.supabase.com',  // Host URL
  database: 'postgres',  // Database name
  password: 'Irfan@0132Irfan',  // Replace with your actual password
  port: 6543,  // Port number
});

// Connect to the database
db.connect();
 
const saltrounds = 10;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
  },
});
app.get('/notes', async (req, res) => {
  const { branch, department, semester } = req.query;
  console.log(`Fetching notes for: Branch=${branch}, Department=${department}, Semester=${semester}`); // Debug log
  try {
    const query = `
      SELECT *
      FROM notes
      WHERE branch = $1 AND department = $2 AND semester = $3
      ORDER BY serial_number
    `;
    const result = await db.query(query, [branch, department, semester]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const upload = multer({ storage });
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(session({
//     secret: 'your-session-secret',
//     resave: false,
//     saveUninitialized: true,
// }));
// app.use(session({
//   secret: 'your-session-secret',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { 
//     // Remove maxAge to make the session last until the browser is closed
//     // You can also add other options like 'secure' or 'httpOnly' for security
//   }
// }));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { expires: false } // Session expires after 15 minutes (15 * 60 * 1000 ms)
}));

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
      // Check if the session has expired
      if (req.session.cookie.expires > Date.now()) {
          return next();
      } else {
          req.session.destroy(err => {
              if (err) {
                  console.error("Error destroying session:", err);
                  return res.status(500).send("Internal Server Error");
              }
              res.redirect('/login');
          });
      }
  } else {
      res.redirect('/login');
  }
};

app.get('/', (req, res) => {
  if (req.session.user) {
    res.render('index', { user: req.session.user });
  } else {
    res.redirect('/login');
  }
});


app.use(express.urlencoded({ extended: true }));

// Create a transporter for sending emails
 
 
 
 



app.get("/admin", (req, res) => {
    res.render("admin.ejs");
});
app.get('/admin-forgot-password',(req,res)=>{
  res.render('admin-forgot-password.ejs')
});
 
app.get("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send("Error logging out");
    }
    res.redirect('/');
  });
});
app.delete('/adminpanel/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await db.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
          return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
  
});


app.delete('/adminpanel/login-attempts/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const result = await db.query('DELETE FROM logins WHERE id = $1', [id]);
      if (result.rowCount === 0) {
          return res.status(404).json({ error: 'Login attempt not found' });
      }
      res.status(200).json({ message: 'Login attempt deleted successfully' });
  } catch (error) {
      console.error('Error deleting login attempt:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});
app.delete('/deleteForm/:id', (req, res) => {
  const formId = req.params.id;
  
  // Logic to delete the form from your database
  // For example, using a function like deleteFormById(formId)

  deleteFormById(formId)
    .then(() => {
      res.json({ success: true });
    })
    .catch(error => {
      console.error('Error deleting form:', error);
      res.json({ success: false });
    });
});

// Function to delete the form from the database
function deleteFormById(id) {
  // Implement your database delete logic here
  // For example, if you're using PostgreSQL:
  return db.query('DELETE FROM forms WHERE id = $1', [id]);
}
app.delete('/deleteAdminLogin/:id', (req, res) => {
  const adminLoginId = req.params.id;
  
  // Logic to delete the admin login from your database
  // For example, using a function like deleteAdminLoginById(adminLoginId)

  deleteAdminLoginById(adminLoginId)
    .then(() => {
      res.json({ success: true });
    })
    .catch(error => {
      console.error('Error deleting admin login:', error);
      res.json({ success: false });
    });
});

// Function to delete the admin login from the database
function deleteAdminLoginById(id) {
  // Implement your database delete logic here
  // For example, if you're using PostgreSQL:
  return db.query('DELETE FROM adminlogins WHERE id = $1', [id]);
}

app.delete('/adminpanel/admin-users/:id', async (req, res) => {
  const { id } = req.params;

  // Ensure the admin user with ID 2 cannot be deleted
  if (id === '2') {
    return res.status(403).json({ error: 'Cannot delete this admin user' });
  }

  try {
    const result = await db.query('DELETE FROM userss WHERE id = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Admin user not found' });
    }

    res.status(200).json({ message: 'Admin user deleted successfully' });
  } catch (error) {
    console.error('Error deleting admin user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/profile', isAuthenticated, (req, res) => {
  // Make sure req.user exists and contains user data
  if (req.session.user) {
      res.render('profile.ejs', { user: req.session.user });
  } else {
      res.redirect('/login'); // Redirect to login if no user data is available
  }
});
app.get('/login', (req, res) => {
  res.render('login.ejs'); // Render your login page
});
app.get('/password-reset',(req,res)=>{
  res.render('password-reset.ejs')
});

// app.post('/update-profile', async (req, res) => {
//     const email = req.body.email;
//     const avatarUrl = req.body.avatarUrl;

//     try {
//         await db.query("UPDATE users SET avatarurl = $1 WHERE email = $2", [avatarUrl, email]);
//         res.redirect('/profile');
//     } catch (err) {
//         console.error("Database Query Error: ", err);
//         res.status(500).send("Internal Server Error");
//     }
// });
 


 
 




app.post('/admin', async (req, res) => {
  const email = req.body.username.trim();
  const password = req.body.password;

  // console.log('Login attempt with email:', email);  // Log login attempt

  try {
    const result = await db.query("SELECT * FROM userss WHERE email = $1", [email]);

    if (result.rows.length > 0) {
      const user1 = result.rows[0];
      const storedPassword1 = user1.password;

      // console.log('User found:', user1);  // Log user found

      const passwordMatch = await bcrypt.compare(password, storedPassword1);

      if (passwordMatch) {
        req.session.isAuthenticated = true;
        req.session.user1 = user1;  // Store user information in session

        // console.log('Password matched. Storing login record.');  // Log password match

        // Insert login record into logins table
        try {
          const insertResult = await db.query("INSERT INTO adminlogins (email) VALUES ($1) RETURNING *", [email]);
          // console.log("Login record inserted:", insertResult.rows[0]);  // Log insert result
        } catch (insertErr) {
          console.error("Error inserting login record:", insertErr);
        }

        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Database Query Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get('/adminpanel', async (req, res) => {
  if (req.session.isAuthenticated) {
    // Query to fetch users
    db.query('SELECT * FROM users', (userError, userResult) => {
      if (userError) {
        console.error("Error fetching users: ", userError);
        res.status(500).send("Internal Server Error");
        return;
      }

      // Query to fetch login attempts
      db.query('SELECT * FROM logins', (loginError, loginResult) => {
        if (loginError) {
          console.error("Error fetching login attempts: ", loginError);
          res.status(500).send("Internal Server Error");
          return;
        }

        // Query to fetch forms
        db.query('SELECT * FROM forms', (formError, formResult) => {
          if (formError) {
            console.error("Error fetching forms: ", formError);
            res.status(500).send("Internal Server Error");
            return;
          }

          // Query to fetch admin logins
          db.query('SELECT * FROM adminlogins', (adminloginError, adminloginsResult) => {
            if (adminloginError) {
              console.error("Error fetching admin logins: ", adminloginError);
              res.status(500).send("Internal Server Error");
              return;
            }

            // Query to fetch notes
            db.query('SELECT * FROM notes', (notesError, notesResult) => {
              if (notesError) {
                console.error("Error fetching notes: ", notesError);
                res.status(500).send("Internal Server Error");
                return;
              }
              db.query('SELECT * FROM userss', (userssError, userssResult) => {
                if (userssError) {
                  console.error("Error fetching notes: ", userssError);
                  res.status(500).send("Internal Server Error");
                  return;
                }
              // Render admin panel with users, login attempts, forms, admin logins, and notes
              res.render('adminpanel', { 
                users: userResult.rows,
                logins: loginResult.rows,
                forms: formResult.rows,
                adminlogins: adminloginsResult.rows,
                notes: notesResult.rows, // Add notes data
                admins: userssResult.rows
              });
            });
          });
        });
      });
    });
  });
  } else {
    res.redirect('/admin');
  }
});

app.post('/adminpanel', upload.single('pdf'), async (req, res) => {
  const { id, branch, department, semester, serial_number, course_code, subject_name, module_1 } = req.body;
  const pdf = req.file ? req.file.filename : req.body.current_pdf; // Use existing PDF if no new file uploaded

  try {
      if (id) {
          // Update existing note
          await db.query(
              'UPDATE notes SET branch = $1, department = $2, semester = $3, serial_number = $4, course_code = $5, subject_name = $6, module_1 = $7, pdf = $8 WHERE id = $9',
              [branch, department, semester, serial_number, course_code, subject_name, module_1, pdf, id]
          );
      } else {
          // Insert new note
          await db.query(
              'INSERT INTO notes (branch, department, semester, serial_number, course_code, subject_name, module_1, pdf) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
              [branch, department, semester, serial_number, course_code, subject_name, module_1, pdf]
          );
      }
      res.redirect('/adminpanel');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
});
app.post('/adminpanel/edit', upload.single('pdf'), async (req, res) => {
  const { id, branch, department, semester, serial_number, course_code, subject_name, module_1 } = req.body;
  const pdf = req.file ? req.file.filename : req.body.current_pdf; // Use existing PDF if no new file uploaded

  try {
      await db.query(
          'UPDATE notes SET branch = $1, department = $2, semester = $3, serial_number = $4, course_code = $5, subject_name = $6, module_1 = $7, pdf = $8 WHERE id = $9',
          [branch, department, semester, serial_number, course_code, subject_name, module_1, pdf, id]
      );
      res.redirect('/adminpanel');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Change Password Route
app.post('/change-admin-password', async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const email = req.session.user1?.email;

  if (!email) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }

  try {
    // Fetch the user from the database
    const result = await db.query("SELECT * FROM userss WHERE email = $1", [email]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      // Compare old password with stored hashed password
      const oldPasswordMatch = await bcrypt.compare(oldPassword, storedPassword);

      if (oldPasswordMatch) {
        // Hash the new password
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        // Update the password in the database
        await db.query("UPDATE userss SET password = $1 WHERE email = $2", [hashedNewPassword, email]);

        console.log('Password successfully changed for email:', email);
        res.json({ success: true, message: "Password has been changed successfully" });
      } else {
        res.status(401).json({ success: false, message: "Old password is incorrect" });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("Error changing password:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post('/register-admin', (req, res) => {
  const { email, password } = req.body;

  console.log('Received registration data:', { email, password }); // Log received data

  if (!email || !password) {
    console.log('Missing email or password');
    return res.json({ success: false, message: 'Email and password are required.' });
  }

  // Check if email already exists
  db.query('SELECT * FROM userss WHERE email = $1', [email], (err, result) => {
    if (err) {
      console.error('Database query error:', err); // Log error
      return res.json({ success: false, message: 'An error occurred. Please try again later.' });
    }

    if (result.rows.length > 0) {
      console.log('Email already exists:', email);
      return res.json({ success: false, message: 'Email already exists.' });
    }

    // Hash the password before storing
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Password hashing error:', err); // Log error
        return res.json({ success: false, message: 'An error occurred while hashing the password.' });
      }

      // Insert the new admin user into the database
      db.query('INSERT INTO userss (email, password) VALUES ($1, $2)', [email, hashedPassword], (err) => {
        if (err) {
          console.error('Database insert error:', err); // Log error
          return res.json({ success: false, message: 'An error occurred. Please try again later.' });
        }

        console.log('Admin registered successfully:', email);
        res.json({ success: true, message: 'Admin registered successfully!' });
      });
    });
  });
});





app.get("/register", (req, res) => {
    res.render("register.ejs");
});


app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (checkResult.rows.length > 0) {
      res.status(409).json({ message: "Email already exists" });
    } else {
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
          res.status(500).json({ message: "Internal Server Error" });
        } else {
          await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hash]);
          res.status(201).json({ message: "User registered successfully" });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// post request for admin forgot password

app.post("/admin-forgot-password", async (req, res) => {
  const email = req.body.email;
  console.log("Received email:", email);  // Log the received email

  try {
    // Check if the email exists in the database
    const checkResult = await db.query("SELECT * FROM  userss WHERE email = $1", [email]);
    console.log("Query result:", checkResult.rows);

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Generate a reset token and expiration time
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiration = Date.now() + 3600000; // 1 hour from now

    // Update the admin user with the reset token and expiration
    await db.query("UPDATE  userss SET reset_token = $1, reset_token_expiration = $2 WHERE email = $3", [token, tokenExpiration, email]);

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'crescentnotes53@gmail.com',
        pass: 'onpj uefc apvk rhkb' // Use the App Password if 2FA is enabled
      }
    });

    // Email options
    const mailOptions = {
      to: email,
      from: 'crescentnotes53@gmail.com',
      subject: 'Admin Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your admin account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/admin-reset/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    // Send the email
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "Reset link sent" });
    });
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/admin-reset/:token', async (req, res) => {
  const token = req.params.token;

  try {
    const result = await db.query(
      "SELECT * FROM  userss WHERE reset_token = $1 AND reset_token_expiration > $2",
      [token, Date.now()]
    );

    if (result.rows.length === 0) {
      return res.status(400).send('Password reset token is invalid or has expired.');
    }

    res.render('admin-reset-password', { token });
  } catch (err) {
    console.error("Error verifying reset token:", err);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/admin-reset/:token", async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;

  try {
    // Check if the token is valid
    const result = await db.query(
      "SELECT * FROM  userss WHERE reset_token = $1 AND reset_token_expiration > $2",
      [token, Date.now()]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the admin user's password and clear the reset token
    await db.query(
      "UPDATE  userss SET password = $1, reset_token = NULL, reset_token_expiration = NULL WHERE reset_token = $2",
      [hashedPassword, token]
    );

    // Respond with JSON and include a redirect URL
    res.json({ success: true, redirectTo: '/admin', message: "Password reset successfully." });
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});



app.post('/login', async (req, res) => {
  const email = req.body.username.trim();
  const password = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      bcrypt.compare(password, storedPassword, async (err, isMatch) => {
        if (err) {
          console.error("Password comparison error: ", err);
          return res.status(500).json({ message: "Internal Server Error" });
        }

        if (isMatch) {
          req.session.user = user;  // Store user info in session

          // Insert login record into logins table
          try {
            await db.query("INSERT INTO logins (email) VALUES ($1)", [email]);
          } catch (insertErr) {
            console.error("Error inserting login record: ", insertErr);
          }

          res.json({ success: true });
        } else {
          res.status(401).json({ message: "Incorrect Password" });
        }
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error("Database Query Error: ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/reset-password", async (req, res) => {
  const email = req.body.email;
  console.log("Received email:", email);  // Log the received email

  try {
    // Check if the email exists in the database
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    console.log("Query result:", checkResult.rows);

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // Generate a reset token and expiration time
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiration = Date.now() + 3600000; // 1 hour from now

    // Update the user with the reset token and expiration
    await db.query("UPDATE users SET reset_token = $1, reset_token_expiration = $2 WHERE email = $3", [token, tokenExpiration, email]);

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'crescentnotes53@gmail.com',
        pass: 'onpj uefc apvk rhkb' // Use the App Password if 2FA is enabled
      }
    });

    // Email options
    const mailOptions = {
      to: email,
      from: 'crescentnotes53@gmail.com',
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    // Send the email
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "Reset link sent" });
    });
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

 
app.get('/reset/:token', (req, res) => {
  const { token } = req.params;
  res.render('reset-password', { token });
});

app.post("/reset/:token", async (req, res) => {
  const token = req.params.token;
  const { password } = req.body;

  try {
    // Check if the token is valid
    const result = await db.query(
      "SELECT * FROM users WHERE reset_token = $1 AND reset_token_expiration > $2",
      [token, Date.now()]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password and clear the reset token
    await db.query(
      "UPDATE users SET password = $1, reset_token = NULL, reset_token_expiration = NULL WHERE reset_token = $2",
      [hashedPassword, token]
    );

    res.json({ message: "Password reset successfully" });

  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Log the received data for debugging
  console.log('Received form data:', { name, email, message });

  // Insert the form data into the database
  const query = 'INSERT INTO forms (name, email, message) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, message];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting form data:', err);
      return res.status(500).send('Internal Server Error');
    }

    if (req.session.user) {
      res.render('index', {
        user: req.session.user,
        loginsucess: '✅Thank you for contacting us.',
      });
    } else {
      res.redirect('/login');
    }
  });
});



export async function fetchUsers() {
    const result = await db.query('SELECT * FROM users');
    return result.rows;
}
// Express route to handle notes update
 
 

 

app.get('/adminpanel', (req, res) => {
  res.render('adminpanel');
});

 

app.get('/', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM notes');
      const notes = result.rows;
      res.render('index', { notes });
  } catch (err) {
      console.error(err);
      res.send('Error fetching notes');
  }
});

// app.use('/uploads', express.static('uploads'));
// app.use((req, res, next) => {
//   res.status(404).render('404');
// });

app.use((req, res, next) => {
  res.status(404).render('404');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
