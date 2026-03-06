# Security Best Practices

## 🔐 Environment Variables

Your project uses the following sensitive environment variables:

### MONGODB_URI
- **Production**: Using MongoDB Atlas ✅ (Already configured)
- **Database**: `crm` database on Cluster0
- **Keep secret**: Never commit this to version control
- **Rotate credentials**: Consider rotating password periodically

### JWT_SECRET
- **Current**: `mySecretKey123`
- **Purpose**: Signing authentication tokens
- **⚠️ Warning**: This is a weak secret. For production, use a strong random string:

```bash
# Generate a secure random JWT_SECRET
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
# Output: 8f5d9e2a1c7b4f6e3a9d2c5b8e1f4a7c6b9e2d5f8a1c4e7b0d3f6a9c2e5b8
```

## ✅ Security Checklist

- [ ] Never commit `.env.local` to Git
- [ ] `.env.local` is in `.gitignore` ✅
- [ ] Use strong random JWT_SECRET (32+ chars)
- [ ] Rotate JWT_SECRET periodically
- [ ] Keep MongoDB credentials secure
- [ ] Use MongoDB IP whitelist
- [ ] Enable MongoDB authentication
- [ ] Use HTTPS in production
- [ ] Set secure cookie flags (httpOnly, secure, sameSite)
- [ ] Validate all API inputs
- [ ] Implement rate limiting on auth endpoints
- [ ] Use CORS headers appropriately

## 🚀 Production Setup

### For Vercel Deployment:

1. **Set environment variables** in Vercel Dashboard:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Generated secure random string

2. **Generate new JWT_SECRET for production**:
```bash
# Don't use local development secret in production!
NODE_ENV=production node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

3. **Database Security**:
   - ✅ IP Whitelist enabled in MongoDB Atlas
   - ✅ Strong password policy
   - ✅ Database user authentication required
   - Consider: SSL certificate pinning for enhanced security

## 🔒 Token Details

**JWT tokens** created with your `JWT_SECRET`:
- Algorithm: HS256 (HMAC SHA-256)
- Expiration: 7 days
- Stored in: HTTP-only cookie
- Secure flag: Auto-enabled in production

## 📋 Token Payload
```json
{
  "userId": "mongoDB_user_id",
  "email": "user@example.com",
  "iat": 1234567890,
  "exp": 1235172690
}
```

## 🆘 If Credentials Leaked

1. **Immediately rotate JWT_SECRET**:
   - Generate new secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   - Update in Vercel environment variables
   - Restart deployment

2. **MongoDB credentials**:
   - Change database user password in MongoDB Atlas
   - Update `MONGODB_URI` in environment variables
   - Monitor database logs for suspicious activity

## 📚 References

- [OWASP Secret Management](https://owasp.org/www-community/vulnerabilities/Sensitive_Data_Exposure)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [MongoDB Security Checklist](https://docs.mongodb.com/manual/administration/security-checklist/)
