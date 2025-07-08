import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
          published: true,
        },
      ],
    },
  },
];


async function main() {
  console.log("🌱 Starting database seeding...");
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`✅ Created user with id: ${user.id}`);
  }
  console.log("🌱 Seeding completed.");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
