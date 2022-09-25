import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

export const generateData = async (params: {
  clientRound: number;
  tripRound: { min: number; max: number };
  stepRound: { min: number; max: number };
  vehicleRound: { min: number; max: number };
  warehouseRound: { min: number; max: number };
  driverRound: { min: number; max: number };
}) => {
  //   await prisma.client.createMany({ data: genClients(params.clientRound) });
  await prisma.warehouse.createMany({
    data: genWarehouses(params.warehouseRound.min, params.warehouseRound.max),
  });
  await prisma.vehicle.createMany({
    data: genVehicles(
      params.vehicleRound.min,
      params.vehicleRound.max,
      params.warehouseRound.min,
      params.warehouseRound.max,
    ),
  });
  //   await prisma.driver.createMany({
  //     data: genDrivers(
  //       params.driverRound.min,
  //       params.driverRound.max,
  //       params.warehouseRound.min,
  //       params.warehouseRound.max,
  //     ),
  //   });
};

// const genClients = (clientRound: number): Prisma.ClientCreateManyInput[] => {
//   const clients = [];

//   for (let i = 0; i < clientRound; i++) {
//     const newClient = {
//       name: faker.company.name(),
//       email: faker.internet.email(),
//       phone: faker.phone.number('+33 (0)# ## ## ## ##'),
//     };
//     clients.push(newClient);
//   }
//   return clients;
// };

const genWarehouses = (
  min: number,
  max: number,
): Prisma.WarehouseCreateManyInput[] => {
  const warehouses = [];
  for (let i = min; min < max; i++) {
    const newWarehouse = {
      adress:
        faker.address.streetAddress() +
        ' ' +
        faker.address.cityName() +
        ' ' +
        faker.address.zipCode(),
    };
    warehouses.push(newWarehouse);
  }
  return warehouses;
};

const genVehicles = (
  min,
  max,
  warehouseMin,
  warehouseMax,
): Prisma.VehicleCreateManyInput[] => {
  const vehicles = [];
  for (let i = min; i < max; i++) {
    const newVehicle = {
      model: faker.vehicle.model(),
      capacity: faker.datatype.number({ min: 4, max: 8 }),
      warehouseId: faker.datatype.number({
        min: warehouseMin,
        max: warehouseMax,
      }),
    };
    vehicles.push(newVehicle);
  }
  return vehicles;
};

// function genDrivers(
//   min,
//   max,
//   warehouseMin,
//   warehouseMax,
// ): Prisma.DriverCreateManyInput {
//   for (let index = min; index < max; index++) {
//     return {
//       name: faker.name.fullName(),
//       warehouseId: faker.datatype.number({
//         min: warehouseMin,
//         max: warehouseMax,
//       }),
//       status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
//     };
//   }
// }
