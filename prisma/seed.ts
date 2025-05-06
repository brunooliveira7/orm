import { prisma } from "@/prisma";

//popular uma tabela com vários inserts de uma vez
async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Andreia Oliveira",
        email: "andreia@email.com",
      },
      {
        name: "Jeová Oliveira",
        email: "jeova@email.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded successfully!");
  prisma.$disconnect();
});
