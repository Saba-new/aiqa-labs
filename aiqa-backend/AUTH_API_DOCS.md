# Authentication API Documentation

## Authentication Endpoints

### 1. Register a New User

**Endpoint:** `POST http://localhost:5000/api/auth/register`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User already exists with this email"
}
```

---

### 2. Login Existing User

**Endpoint:** `POST http://localhost:5000/api/auth/login`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### 3. Get Current User (Protected Route)

**Endpoint:** `GET http://localhost:5000/api/auth/me`

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "65f1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-03-15T10:30:00.000Z",
    "updatedAt": "2024-03-15T10:30:00.000Z"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

---

## Testing with Postman

### Step 1: Register a New User
1. Open Postman
2. Create a new POST request to `http://localhost:5000/api/auth/register`
3. Go to Headers tab and add:
   - Key: `Content-Type`
   - Value: `application/json`
4. Go to Body tab, select `raw`, and choose `JSON` format
5. Paste the registration JSON:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
6. Click Send
7. **Copy the token from the response** (you'll need it for protected routes)

### Step 2: Login with Existing User
1. Create a new POST request to `http://localhost:5000/api/auth/login`
2. Add the same headers as above
3. Use the login JSON body
4. Click Send
5. **Copy the new token from the response**

### Step 3: Access Protected Route
1. Create a new GET request to `http://localhost:5000/api/auth/me`
2. Go to Headers tab and add:
   - Key: `Authorization`
   - Value: `Bearer YOUR_TOKEN_HERE` (replace YOUR_TOKEN_HERE with the actual token)
3. Click Send
4. You should see your user information

---

## Password Requirements
- Minimum 6 characters
- Passwords are automatically hashed using bcrypt before storing in database
- Never store plain-text passwords

## Security Features
- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens expire after 7 days
- Email validation
- Password never returned in API responses (except during login verification)
- Input validation using express-validator

## Database Schema

### User Model
```javascript
{
  name: String (required, 2-50 characters),
  email: String (required, unique, valid email format),
  password: String (required, min 6 characters, hashed),
  role: String (enum: ['user', 'admin'], default: 'user'),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```
