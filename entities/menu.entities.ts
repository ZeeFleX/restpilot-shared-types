import { ObjectType, Field, Int } from '@nestjs/graphql';

export interface IMenuCategory {
  id: number;
}

@ObjectType()
export class IMenuCategoryGraphQL implements IMenuCategory {
  @Field(() => Int, { description: 'Unique ID of menu category' })
  id: number;
}
