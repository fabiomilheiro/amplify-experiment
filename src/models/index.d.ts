import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerContinents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Continents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly animals?: (ContinentsAnimals | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContinents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Continents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly animals: AsyncCollection<ContinentsAnimals>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Continents = LazyLoading extends LazyLoadingDisabled ? EagerContinents : LazyContinents

export declare const Continents: (new (init: ModelInit<Continents>) => Continents) & {
  copyOf(source: Continents, mutator: (draft: MutableModel<Continents>) => MutableModel<Continents> | void): Continents;
}

type EagerAnimals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Animals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly continents?: (ContinentsAnimals | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnimals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Animals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly continents: AsyncCollection<ContinentsAnimals>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Animals = LazyLoading extends LazyLoadingDisabled ? EagerAnimals : LazyAnimals

export declare const Animals: (new (init: ModelInit<Animals>) => Animals) & {
  copyOf(source: Animals, mutator: (draft: MutableModel<Animals>) => MutableModel<Animals> | void): Animals;
}

type EagerContinentsAnimals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContinentsAnimals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly continentsId?: string | null;
  readonly animalsId?: string | null;
  readonly continents: Continents;
  readonly animals: Animals;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContinentsAnimals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContinentsAnimals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly continentsId?: string | null;
  readonly animalsId?: string | null;
  readonly continents: AsyncItem<Continents>;
  readonly animals: AsyncItem<Animals>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContinentsAnimals = LazyLoading extends LazyLoadingDisabled ? EagerContinentsAnimals : LazyContinentsAnimals

export declare const ContinentsAnimals: (new (init: ModelInit<ContinentsAnimals>) => ContinentsAnimals) & {
  copyOf(source: ContinentsAnimals, mutator: (draft: MutableModel<ContinentsAnimals>) => MutableModel<ContinentsAnimals> | void): ContinentsAnimals;
}