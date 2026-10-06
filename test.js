import bcrypt from 'bcrypt';

const hash = await bcrypt.hash('abc123', 10);
console.log(await bcrypt.compare('abc123', hash)); // true