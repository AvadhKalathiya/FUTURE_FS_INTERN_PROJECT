import mongoose from 'mongoose';

// Database connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/leadpro';

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Lead Schema
const leadSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'won', 'lost'],
    default: 'new',
  },
  value: { type: Number, default: 0 },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

// Models
const User = mongoose.models.User || mongoose.model('User', userSchema);
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

// Connection
let cached = global as any;

if (!cached.mongoose) {
  cached.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
  if (cached.mongoose.conn) {
    return cached.mongoose.conn;
  }

  if (!cached.mongoose.promise) {
    cached.mongoose.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.mongoose.conn = await cached.mongoose.promise;
  return cached.mongoose.conn;
}

export { User, Lead };
