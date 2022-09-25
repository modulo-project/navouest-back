import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding...`);

  const driver = await prisma.driver.create({
    data: { name: 'Kevin', status: 'ACTIVE' },
  });
  console.log(`Created driver with id: ${driver.id}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
