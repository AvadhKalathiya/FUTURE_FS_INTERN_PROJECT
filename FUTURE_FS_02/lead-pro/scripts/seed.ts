import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/leadpro';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

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

const User = mongoose.model('User', userSchema);
const Lead = mongoose.model('Lead', leadSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Lead.deleteMany({});
    console.log('Cleared existing data');

    // Create demo user
    const hashedPassword = await bcrypt.hash('demo123', 10);
    const demoUser = await User.create({
      email: 'demo@example.com',
      password: hashedPassword,
      name: 'Demo User',
    });
    console.log('Created demo user');

    // Sample leads data
    const sampleLeads = [
      {
        name: 'Rahul Sharma',
        email: 'rahul.sharma@gmail.com',
        phone: '+91 98765 43210',
        company: 'TechNova India',
        status: 'new',
        value: 50000,
        notes: 'Interested in software solutions',
      },
      {
        name: 'Priya Patel',
        email: 'priya.patel@yahoo.com',
        phone: '+91 98234 56789',
        company: 'Patel Enterprises',
        status: 'contacted',
        value: 75000,
        notes: 'Requested product demo',
      },
      {
        name: 'Amit Verma',
        email: 'amit.verma@innovate.in',
        phone: '+91 98123 45678',
        company: 'Innovate Solutions',
        status: 'qualified',
        value: 120000,
        notes: 'Budget approved',
      },
      {
        name: 'Neha Gupta',
        email: 'neha.gupta@gmail.com',
        phone: '+91 98987 65432',
        company: 'BrightTech Pvt Ltd',
        status: 'new',
        value: 45000,
        notes: 'Asked for pricing',
      },
      {
        name: 'Rohan Mehta',
        email: 'rohan.mehta@futuretech.in',
        phone: '+91 97654 32109',
        company: 'FutureTech India',
        status: 'won',
        value: 200000,
        notes: 'Successfully closed deal',
      },
      {
        name: 'Anjali Desai',
        email: 'anjali.desai@yahoo.com',
        phone: '+91 98456 78901',
        company: 'Desai Industries',
        status: 'contacted',
        value: 68000,
        notes: 'Follow-up meeting scheduled',
      },
      {
        name: 'Karan Singh',
        email: 'karan.singh@gmail.com',
        phone: '+91 97987 12345',
        company: 'NextGen Technologies',
        status: 'qualified',
        value: 95000,
        notes: 'Interested in premium plan',
      },
      {
        name: 'Sneha Iyer',
        email: 'sneha.iyer@globalcorp.in',
        phone: '+91 98876 54321',
        company: 'GlobalCorp India',
        status: 'new',
        value: 55000,
        notes: 'Needs technical consultation',
      },
      {
        name: 'Arjun Nair',
        email: 'arjun.nair@startuplab.in',
        phone: '+91 97765 43210',
        company: 'StartupLab India',
        status: 'lost',
        value: 30000,
        notes: 'Selected competitor',
      },
      {
        name: 'Pooja Shah',
        email: 'pooja.shah@alphatech.in',
        phone: '+91 98654 21098',
        company: 'AlphaTech Pvt Ltd',
        status: 'won',
        value: 175000,
        notes: 'Signed yearly contract',
      },
    ];

    const firstNames = [
      'Aarav', 'Vihaan', 'Vivaan', 'Ananya', 'Diya', 'Saanvi', 'Pari', 'Anika', 'Navya', 'Aadhya',
      'Advait', 'Arjun', 'Reyansh', 'Aryan', 'Ishaan', 'Shaurya', 'Atharv', 'Pranav', 'Aditya', 'Reyansh',
      'Myra', 'Aanya', 'Anvi', 'Pihu', 'Kiara', 'Eva', 'Avni', 'Amaira', 'Saisha', 'Anaya'
    ];

    const lastNames = [
      'Sharma', 'Verma', 'Gupta', 'Singh', 'Patel', 'Kumar', 'Jain', 'Agarwal', 'Mehta', 'Shah',
      'Chopra', 'Khanna', 'Kapoor', 'Malhotra', 'Bhatia', 'Saxena', 'Trivedi', 'Rao', 'Nair', 'Iyer',
      'Pillai', 'Menon', 'Chatterjee', 'Banerjee', 'Mukherjee', 'Das', 'Saha', 'Ghosh', 'Roy', 'Sen',
      'Dutta', 'Mitra', 'Bhattacharya', 'Chakraborty', 'Ganguly', 'Majumdar', 'Sarkar', 'Pal', 'De', 'Bose'
    ];

    const companySuffixes = [
      'Technologies', 'Solutions', 'Systems', 'Software', 'Digital', 'Innovations', 'Labs', 'Corp', 'Enterprises', 'Pvt Ltd',
      'India', 'Global', 'Tech', 'IT', 'Services', 'Consulting', 'Group', 'Ventures', 'Partners', 'Studio'
    ];

    const domains = [
      'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'innovate.in', 'techcorp.in', 'futuretech.in', 'globalcorp.in', 'alphatech.in', 'startuplab.in'
    ];

    const statuses: ('new' | 'contacted' | 'qualified' | 'won' | 'lost')[] = ['new', 'contacted', 'qualified', 'won', 'lost'];

    const notesTemplates = [
      'Interested in our services', 'Requested a demo', 'Budget approved', 'Needs more information', 'Successfully closed deal',
      'Follow-up scheduled', 'Interested in premium plan', 'Technical consultation needed', 'Selected competitor', 'Signed contract',
      'Initial contact made', 'Proposal sent', 'Negotiation in progress', 'Lost to competition', 'Won the deal'
    ];

    // Create sample leads
    const leads = sampleLeads.map(lead => ({
      ...lead,
      userId: demoUser._id,
    }));

    // Generate 100 additional dummy leads
    for (let i = 11; i <= 110; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const name = `${firstName} ${lastName}`;
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domains[Math.floor(Math.random() * domains.length)]}`;
      const phone = `+91 ${9000000000 + Math.floor(Math.random() * 1000000000)}`;
      const company = `${firstName}${lastName} ${companySuffixes[Math.floor(Math.random() * companySuffixes.length)]}`;
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const value = Math.floor(Math.random() * 200000) + 10000;
      const notes = notesTemplates[Math.floor(Math.random() * notesTemplates.length)];

      leads.push({
        userId: demoUser._id,
        name,
        email,
        phone,
        company,
        status,
        value,
        notes,
      });
    }

    await Lead.insertMany(leads);
    console.log(`Created ${leads.length} leads`);

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
