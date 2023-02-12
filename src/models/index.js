// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Continents, Animals, ContinentsAnimals } = initSchema(schema);

export {
  Continents,
  Animals,
  ContinentsAnimals
};