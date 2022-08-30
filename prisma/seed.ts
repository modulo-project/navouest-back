import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const fakeClient: Prisma.ClientCreateInput[] = [
  {
    email: faker.internet.email(null, null, 'navouest.example'),
    name: faker.name.fullName(),
    phone: faker.phone.number(),
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const data of fakeClient) {
    const client = await prisma.client.create({
      data,
    });
    console.log(`Created client with id: ${client.id}`);
  }
  console.log(`Seeding finished.`);
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
