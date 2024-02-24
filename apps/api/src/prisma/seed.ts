import { hashPassword } from '../utils/helpers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: '',
      password: hashPassword('Admin1234'),
    },
  });
}
main()
  .then(async () => {
    console.info('Seed data successfully.');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
