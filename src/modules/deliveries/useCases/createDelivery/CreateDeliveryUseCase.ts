import { prisma } from '../../../../database/prismaClient';

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeleveryUseCase {
  async execute({ item_name, id_client }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        id_client,
        item_name
      }
    });
    return delivery
  }
}
