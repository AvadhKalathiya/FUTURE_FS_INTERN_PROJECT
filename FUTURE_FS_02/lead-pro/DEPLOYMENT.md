# Lead Pro - Deployment Guide

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
```bash
pnpm install
# or npm install
```

2. **Setup environment variables:**
Copy `.env.example` to `.env.local` and update with your MongoDB URI:
```bash
cp .env.example .env.local
```

3. **Start MongoDB locally:**
```bash
# Using MongoDB Community Edition
mongod --dbpath /path/to/data
```

4. **Run development server:**
```bash
pnpm dev
# or npm run dev
```

5. **Access the application:**
- Open http://localhost:3000 in your browser

---

## 🌐 Production Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Connect to Vercel:**
- Go to https://vercel.com/dashboard
- Click "New Project"
- Select your GitHub repository
- Import project

3. **Configure Environment Variables:**
- In Vercel Dashboard → Settings → Environment Variables
- Add `MONGODB_URI` with your MongoDB Atlas connection string
- Add `NODE_ENV=production`

4. **Deploy:**
```bash
vercel --prod
```

### Option 2: Deploy to Other Platforms

**Heroku, Railway, Render, etc.:**
- Set `MONGODB_URI` environment variable to production database
- Ensure Node.js version compatibility (18+)
- Configure build and start scripts in package.json

---

## 🗄️ Database Setup

### Local MongoDB
```bash
# Install MongoDB Community Edition
# macOS: brew install mongodb-community
# Windows: Download from mongodb.com
# Linux: apt-get install -y mongodb

# Start MongoDB
mongod
```

### MongoDB Atlas (Cloud - Recommended for Production)

1. Create account at https://mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/leadpro`
4. Add to `.env.local` or Vercel environment variables

---

## 🔧 Troubleshooting

### Middleware Error 500
- Check `middleware.ts` configuration
- Ensure matcher pattern doesn't conflict with API routes
- Verify environment variables are loaded

### Database Connection Failed
- Verify `MONGODB_URI` is correct and accessible
- For local: ensure MongoDB is running
- For cloud: check IP whitelist in MongoDB Atlas
- Check username/password for authentication

### Port Already in Use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## 📝 Environment Variables

| Variable | Required | Example |
|----------|----------|---------|
| MONGODB_URI | Yes | mongodb+srv://user:pass@cluster.mongodb.net/leadpro |
| NODE_ENV | No | production |
| NEXT_PUBLIC_API_URL | No | https://your-domain.com |

---

## ✅ Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database connection tested
- [ ] API routes tested locally
- [ ] UI tested in production build: `npm run build && npm start`
- [ ] Error handling implemented
- [ ] CORS/security headers configured
- [ ] Sensitive data removed from code

---

## 🆘 Support

For issues or questions:
- Check logs: `vercel logs`
- Enable debug mode: Add `DEBUG=*` to environment
- Review middleware matcher pattern
- Verify database connectivity
