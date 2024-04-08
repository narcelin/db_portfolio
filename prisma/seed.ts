import { PrismaClient } from '@prisma/client'
import {users as usersData, customers as customersData, invoices as invoicesData, revenue as revenueData} from './seedData'

const prisma = new PrismaClient()
async function main() {
  const seedUsers = await prisma.users.createMany({
    data: usersData
  });

  const seedCustomers = await prisma.customers.createMany({
    data: customersData
  });

  const seedInvoices = await prisma.invoices.createMany({
    data: invoicesData
  });
 
  const seedRevenue = await prisma.revenue.createMany({
    data: revenueData
  })

  console.log({ seedUsers, seedInvoices, seedCustomers, seedRevenue })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })