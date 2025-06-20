
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model appliedjob
 * 
 */
export type appliedjob = $Result.DefaultSelection<Prisma.$appliedjobPayload>
/**
 * Model admin
 * 
 */
export type admin = $Result.DefaultSelection<Prisma.$adminPayload>
/**
 * Model AdminActivity
 * 
 */
export type AdminActivity = $Result.DefaultSelection<Prisma.$AdminActivityPayload>
/**
 * Model PersonalDetails
 * 
 */
export type PersonalDetails = $Result.DefaultSelection<Prisma.$PersonalDetailsPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Employer
 * 
 */
export type Employer = $Result.DefaultSelection<Prisma.$EmployerPayload>
/**
 * Model Jobs
 * 
 */
export type Jobs = $Result.DefaultSelection<Prisma.$JobsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appliedjob`: Exposes CRUD operations for the **appliedjob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appliedjobs
    * const appliedjobs = await prisma.appliedjob.findMany()
    * ```
    */
  get appliedjob(): Prisma.appliedjobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.adminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminActivity`: Exposes CRUD operations for the **AdminActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminActivities
    * const adminActivities = await prisma.adminActivity.findMany()
    * ```
    */
  get adminActivity(): Prisma.AdminActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalDetails`: Exposes CRUD operations for the **PersonalDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalDetails
    * const personalDetails = await prisma.personalDetails.findMany()
    * ```
    */
  get personalDetails(): Prisma.PersonalDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employer`: Exposes CRUD operations for the **Employer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employers
    * const employers = await prisma.employer.findMany()
    * ```
    */
  get employer(): Prisma.EmployerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobs`: Exposes CRUD operations for the **Jobs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.jobs.findMany()
    * ```
    */
  get jobs(): Prisma.JobsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    appliedjob: 'appliedjob',
    admin: 'admin',
    AdminActivity: 'AdminActivity',
    PersonalDetails: 'PersonalDetails',
    Language: 'Language',
    Education: 'Education',
    Project: 'Project',
    Employer: 'Employer',
    Jobs: 'Jobs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "appliedjob" | "admin" | "adminActivity" | "personalDetails" | "language" | "education" | "project" | "employer" | "jobs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      appliedjob: {
        payload: Prisma.$appliedjobPayload<ExtArgs>
        fields: Prisma.appliedjobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appliedjobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appliedjobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          findFirst: {
            args: Prisma.appliedjobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appliedjobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          findMany: {
            args: Prisma.appliedjobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>[]
          }
          create: {
            args: Prisma.appliedjobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          createMany: {
            args: Prisma.appliedjobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.appliedjobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          update: {
            args: Prisma.appliedjobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          deleteMany: {
            args: Prisma.appliedjobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appliedjobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.appliedjobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appliedjobPayload>
          }
          aggregate: {
            args: Prisma.AppliedjobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppliedjob>
          }
          groupBy: {
            args: Prisma.appliedjobGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppliedjobGroupByOutputType>[]
          }
          count: {
            args: Prisma.appliedjobCountArgs<ExtArgs>
            result: $Utils.Optional<AppliedjobCountAggregateOutputType> | number
          }
        }
      }
      admin: {
        payload: Prisma.$adminPayload<ExtArgs>
        fields: Prisma.adminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findFirst: {
            args: Prisma.adminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          findMany: {
            args: Prisma.adminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>[]
          }
          create: {
            args: Prisma.adminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          createMany: {
            args: Prisma.adminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.adminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          update: {
            args: Prisma.adminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          deleteMany: {
            args: Prisma.adminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.adminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.adminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.adminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      AdminActivity: {
        payload: Prisma.$AdminActivityPayload<ExtArgs>
        fields: Prisma.AdminActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findFirst: {
            args: Prisma.AdminActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          findMany: {
            args: Prisma.AdminActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>[]
          }
          create: {
            args: Prisma.AdminActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          createMany: {
            args: Prisma.AdminActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          update: {
            args: Prisma.AdminActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          deleteMany: {
            args: Prisma.AdminActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminActivityPayload>
          }
          aggregate: {
            args: Prisma.AdminActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminActivity>
          }
          groupBy: {
            args: Prisma.AdminActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminActivityCountArgs<ExtArgs>
            result: $Utils.Optional<AdminActivityCountAggregateOutputType> | number
          }
        }
      }
      PersonalDetails: {
        payload: Prisma.$PersonalDetailsPayload<ExtArgs>
        fields: Prisma.PersonalDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          findFirst: {
            args: Prisma.PersonalDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          findMany: {
            args: Prisma.PersonalDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>[]
          }
          create: {
            args: Prisma.PersonalDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          createMany: {
            args: Prisma.PersonalDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PersonalDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          update: {
            args: Prisma.PersonalDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PersonalDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PersonalDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalDetailsPayload>
          }
          aggregate: {
            args: Prisma.PersonalDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalDetails>
          }
          groupBy: {
            args: Prisma.PersonalDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalDetailsCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Employer: {
        payload: Prisma.$EmployerPayload<ExtArgs>
        fields: Prisma.EmployerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findFirst: {
            args: Prisma.EmployerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          findMany: {
            args: Prisma.EmployerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>[]
          }
          create: {
            args: Prisma.EmployerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          createMany: {
            args: Prisma.EmployerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          update: {
            args: Prisma.EmployerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          deleteMany: {
            args: Prisma.EmployerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployerPayload>
          }
          aggregate: {
            args: Prisma.EmployerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployer>
          }
          groupBy: {
            args: Prisma.EmployerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployerCountArgs<ExtArgs>
            result: $Utils.Optional<EmployerCountAggregateOutputType> | number
          }
        }
      }
      Jobs: {
        payload: Prisma.$JobsPayload<ExtArgs>
        fields: Prisma.JobsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findFirst: {
            args: Prisma.JobsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          findMany: {
            args: Prisma.JobsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>[]
          }
          create: {
            args: Prisma.JobsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          createMany: {
            args: Prisma.JobsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          update: {
            args: Prisma.JobsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          deleteMany: {
            args: Prisma.JobsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobsPayload>
          }
          aggregate: {
            args: Prisma.JobsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobs>
          }
          groupBy: {
            args: Prisma.JobsGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobsGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobsCountArgs<ExtArgs>
            result: $Utils.Optional<JobsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    appliedjob?: appliedjobOmit
    admin?: adminOmit
    adminActivity?: AdminActivityOmit
    personalDetails?: PersonalDetailsOmit
    language?: LanguageOmit
    education?: EducationOmit
    project?: ProjectOmit
    employer?: EmployerOmit
    jobs?: JobsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    education: number
    projects: number
    appliedjob: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | UserCountOutputTypeCountEducationArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    appliedjob?: boolean | UserCountOutputTypeCountAppliedjobArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppliedjobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appliedjobWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    AdminActivity: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdminActivity?: boolean | AdminCountOutputTypeCountAdminActivityArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountAdminActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityWhereInput
  }


  /**
   * Count Type PersonalDetailsCountOutputType
   */

  export type PersonalDetailsCountOutputType = {
    languages: number
  }

  export type PersonalDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    languages?: boolean | PersonalDetailsCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * PersonalDetailsCountOutputType without action
   */
  export type PersonalDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetailsCountOutputType
     */
    select?: PersonalDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalDetailsCountOutputType without action
   */
  export type PersonalDetailsCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
  }


  /**
   * Count Type EmployerCountOutputType
   */

  export type EmployerCountOutputType = {
    jobs: number
  }

  export type EmployerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | EmployerCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployerCountOutputType
     */
    select?: EmployerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployerCountOutputType without action
   */
  export type EmployerCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
  }


  /**
   * Count Type JobsCountOutputType
   */

  export type JobsCountOutputType = {
    appliedjob: number
  }

  export type JobsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appliedjob?: boolean | JobsCountOutputTypeCountAppliedjobArgs
  }

  // Custom InputTypes
  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobsCountOutputType
     */
    select?: JobsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobsCountOutputType without action
   */
  export type JobsCountOutputTypeCountAppliedjobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appliedjobWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    jobapplied: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    jobapplied: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
    joinDate: Date | null
    jobapplied: number | null
    status: string | null
    mobile: string | null
    workStatus: string | null
    heading: string | null
    keySkills: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    password: string | null
    joinDate: Date | null
    jobapplied: number | null
    status: string | null
    mobile: string | null
    workStatus: string | null
    heading: string | null
    keySkills: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    password: number
    joinDate: number
    jobapplied: number
    status: number
    mobile: number
    workStatus: number
    heading: number
    keySkills: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    jobapplied?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    jobapplied?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    joinDate?: true
    jobapplied?: true
    status?: true
    mobile?: true
    workStatus?: true
    heading?: true
    keySkills?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    joinDate?: true
    jobapplied?: true
    status?: true
    mobile?: true
    workStatus?: true
    heading?: true
    keySkills?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    password?: true
    joinDate?: true
    jobapplied?: true
    status?: true
    mobile?: true
    workStatus?: true
    heading?: true
    keySkills?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    password: string
    joinDate: Date
    jobapplied: number | null
    status: string
    mobile: string
    workStatus: string
    heading: string | null
    keySkills: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    joinDate?: boolean
    jobapplied?: boolean
    status?: boolean
    mobile?: boolean
    workStatus?: boolean
    heading?: boolean
    keySkills?: boolean
    education?: boolean | User$educationArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    personalDetails?: boolean | User$personalDetailsArgs<ExtArgs>
    appliedjob?: boolean | User$appliedjobArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    joinDate?: boolean
    jobapplied?: boolean
    status?: boolean
    mobile?: boolean
    workStatus?: boolean
    heading?: boolean
    keySkills?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "password" | "joinDate" | "jobapplied" | "status" | "mobile" | "workStatus" | "heading" | "keySkills", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    education?: boolean | User$educationArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    personalDetails?: boolean | User$personalDetailsArgs<ExtArgs>
    appliedjob?: boolean | User$appliedjobArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      education: Prisma.$EducationPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      personalDetails: Prisma.$PersonalDetailsPayload<ExtArgs> | null
      appliedjob: Prisma.$appliedjobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      password: string
      joinDate: Date
      jobapplied: number | null
      status: string
      mobile: string
      workStatus: string
      heading: string | null
      keySkills: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    education<T extends User$educationArgs<ExtArgs> = {}>(args?: Subset<T, User$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    personalDetails<T extends User$personalDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$personalDetailsArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appliedjob<T extends User$appliedjobArgs<ExtArgs> = {}>(args?: Subset<T, User$appliedjobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly joinDate: FieldRef<"User", 'DateTime'>
    readonly jobapplied: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly workStatus: FieldRef<"User", 'String'>
    readonly heading: FieldRef<"User", 'String'>
    readonly keySkills: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.education
   */
  export type User$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.personalDetails
   */
  export type User$personalDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    where?: PersonalDetailsWhereInput
  }

  /**
   * User.appliedjob
   */
  export type User$appliedjobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    where?: appliedjobWhereInput
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    cursor?: appliedjobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppliedjobScalarFieldEnum | AppliedjobScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model appliedjob
   */

  export type AggregateAppliedjob = {
    _count: AppliedjobCountAggregateOutputType | null
    _avg: AppliedjobAvgAggregateOutputType | null
    _sum: AppliedjobSumAggregateOutputType | null
    _min: AppliedjobMinAggregateOutputType | null
    _max: AppliedjobMaxAggregateOutputType | null
  }

  export type AppliedjobAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    jobsId: number | null
    graduationYear: number | null
    salary: number | null
  }

  export type AppliedjobSumAggregateOutputType = {
    id: number | null
    userId: number | null
    jobsId: number | null
    graduationYear: number | null
    salary: number | null
  }

  export type AppliedjobMinAggregateOutputType = {
    id: number | null
    userId: number | null
    jobsId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    city: string | null
    state: string | null
    experience: string | null
    education: string | null
    degree: string | null
    university: string | null
    graduationYear: number | null
    resume: string | null
    photo: string | null
    coverLetter: string | null
    portfolio: string | null
    skills: string | null
    availability: string | null
    salary: number | null
    appliedAt: Date | null
    status: string | null
  }

  export type AppliedjobMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    jobsId: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    position: string | null
    city: string | null
    state: string | null
    experience: string | null
    education: string | null
    degree: string | null
    university: string | null
    graduationYear: number | null
    resume: string | null
    photo: string | null
    coverLetter: string | null
    portfolio: string | null
    skills: string | null
    availability: string | null
    salary: number | null
    appliedAt: Date | null
    status: string | null
  }

  export type AppliedjobCountAggregateOutputType = {
    id: number
    userId: number
    jobsId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    position: number
    city: number
    state: number
    experience: number
    education: number
    degree: number
    university: number
    graduationYear: number
    resume: number
    photo: number
    coverLetter: number
    portfolio: number
    skills: number
    availability: number
    salary: number
    appliedAt: number
    status: number
    _all: number
  }


  export type AppliedjobAvgAggregateInputType = {
    id?: true
    userId?: true
    jobsId?: true
    graduationYear?: true
    salary?: true
  }

  export type AppliedjobSumAggregateInputType = {
    id?: true
    userId?: true
    jobsId?: true
    graduationYear?: true
    salary?: true
  }

  export type AppliedjobMinAggregateInputType = {
    id?: true
    userId?: true
    jobsId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    city?: true
    state?: true
    experience?: true
    education?: true
    degree?: true
    university?: true
    graduationYear?: true
    resume?: true
    photo?: true
    coverLetter?: true
    portfolio?: true
    skills?: true
    availability?: true
    salary?: true
    appliedAt?: true
    status?: true
  }

  export type AppliedjobMaxAggregateInputType = {
    id?: true
    userId?: true
    jobsId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    city?: true
    state?: true
    experience?: true
    education?: true
    degree?: true
    university?: true
    graduationYear?: true
    resume?: true
    photo?: true
    coverLetter?: true
    portfolio?: true
    skills?: true
    availability?: true
    salary?: true
    appliedAt?: true
    status?: true
  }

  export type AppliedjobCountAggregateInputType = {
    id?: true
    userId?: true
    jobsId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    position?: true
    city?: true
    state?: true
    experience?: true
    education?: true
    degree?: true
    university?: true
    graduationYear?: true
    resume?: true
    photo?: true
    coverLetter?: true
    portfolio?: true
    skills?: true
    availability?: true
    salary?: true
    appliedAt?: true
    status?: true
    _all?: true
  }

  export type AppliedjobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appliedjob to aggregate.
     */
    where?: appliedjobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appliedjobs to fetch.
     */
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appliedjobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appliedjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appliedjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appliedjobs
    **/
    _count?: true | AppliedjobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppliedjobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppliedjobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppliedjobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppliedjobMaxAggregateInputType
  }

  export type GetAppliedjobAggregateType<T extends AppliedjobAggregateArgs> = {
        [P in keyof T & keyof AggregateAppliedjob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppliedjob[P]>
      : GetScalarType<T[P], AggregateAppliedjob[P]>
  }




  export type appliedjobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appliedjobWhereInput
    orderBy?: appliedjobOrderByWithAggregationInput | appliedjobOrderByWithAggregationInput[]
    by: AppliedjobScalarFieldEnum[] | AppliedjobScalarFieldEnum
    having?: appliedjobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppliedjobCountAggregateInputType | true
    _avg?: AppliedjobAvgAggregateInputType
    _sum?: AppliedjobSumAggregateInputType
    _min?: AppliedjobMinAggregateInputType
    _max?: AppliedjobMaxAggregateInputType
  }

  export type AppliedjobGroupByOutputType = {
    id: number
    userId: number
    jobsId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt: Date
    status: string
    _count: AppliedjobCountAggregateOutputType | null
    _avg: AppliedjobAvgAggregateOutputType | null
    _sum: AppliedjobSumAggregateOutputType | null
    _min: AppliedjobMinAggregateOutputType | null
    _max: AppliedjobMaxAggregateOutputType | null
  }

  type GetAppliedjobGroupByPayload<T extends appliedjobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppliedjobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppliedjobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppliedjobGroupByOutputType[P]>
            : GetScalarType<T[P], AppliedjobGroupByOutputType[P]>
        }
      >
    >


  export type appliedjobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    jobsId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    city?: boolean
    state?: boolean
    experience?: boolean
    education?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
    resume?: boolean
    photo?: boolean
    coverLetter?: boolean
    portfolio?: boolean
    skills?: boolean
    availability?: boolean
    salary?: boolean
    appliedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | JobsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appliedjob"]>



  export type appliedjobSelectScalar = {
    id?: boolean
    userId?: boolean
    jobsId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    position?: boolean
    city?: boolean
    state?: boolean
    experience?: boolean
    education?: boolean
    degree?: boolean
    university?: boolean
    graduationYear?: boolean
    resume?: boolean
    photo?: boolean
    coverLetter?: boolean
    portfolio?: boolean
    skills?: boolean
    availability?: boolean
    salary?: boolean
    appliedAt?: boolean
    status?: boolean
  }

  export type appliedjobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "jobsId" | "firstName" | "lastName" | "email" | "phone" | "position" | "city" | "state" | "experience" | "education" | "degree" | "university" | "graduationYear" | "resume" | "photo" | "coverLetter" | "portfolio" | "skills" | "availability" | "salary" | "appliedAt" | "status", ExtArgs["result"]["appliedjob"]>
  export type appliedjobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobs?: boolean | JobsDefaultArgs<ExtArgs>
  }

  export type $appliedjobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appliedjob"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobs: Prisma.$JobsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      jobsId: number
      firstName: string
      lastName: string
      email: string
      phone: string
      position: string
      city: string
      state: string
      experience: string
      education: string
      degree: string
      university: string
      graduationYear: number
      resume: string
      photo: string
      coverLetter: string
      portfolio: string
      skills: string
      availability: string
      salary: number
      appliedAt: Date
      status: string
    }, ExtArgs["result"]["appliedjob"]>
    composites: {}
  }

  type appliedjobGetPayload<S extends boolean | null | undefined | appliedjobDefaultArgs> = $Result.GetResult<Prisma.$appliedjobPayload, S>

  type appliedjobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appliedjobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppliedjobCountAggregateInputType | true
    }

  export interface appliedjobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appliedjob'], meta: { name: 'appliedjob' } }
    /**
     * Find zero or one Appliedjob that matches the filter.
     * @param {appliedjobFindUniqueArgs} args - Arguments to find a Appliedjob
     * @example
     * // Get one Appliedjob
     * const appliedjob = await prisma.appliedjob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appliedjobFindUniqueArgs>(args: SelectSubset<T, appliedjobFindUniqueArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appliedjob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appliedjobFindUniqueOrThrowArgs} args - Arguments to find a Appliedjob
     * @example
     * // Get one Appliedjob
     * const appliedjob = await prisma.appliedjob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appliedjobFindUniqueOrThrowArgs>(args: SelectSubset<T, appliedjobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appliedjob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobFindFirstArgs} args - Arguments to find a Appliedjob
     * @example
     * // Get one Appliedjob
     * const appliedjob = await prisma.appliedjob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appliedjobFindFirstArgs>(args?: SelectSubset<T, appliedjobFindFirstArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appliedjob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobFindFirstOrThrowArgs} args - Arguments to find a Appliedjob
     * @example
     * // Get one Appliedjob
     * const appliedjob = await prisma.appliedjob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appliedjobFindFirstOrThrowArgs>(args?: SelectSubset<T, appliedjobFindFirstOrThrowArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appliedjobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appliedjobs
     * const appliedjobs = await prisma.appliedjob.findMany()
     * 
     * // Get first 10 Appliedjobs
     * const appliedjobs = await prisma.appliedjob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appliedjobWithIdOnly = await prisma.appliedjob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appliedjobFindManyArgs>(args?: SelectSubset<T, appliedjobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appliedjob.
     * @param {appliedjobCreateArgs} args - Arguments to create a Appliedjob.
     * @example
     * // Create one Appliedjob
     * const Appliedjob = await prisma.appliedjob.create({
     *   data: {
     *     // ... data to create a Appliedjob
     *   }
     * })
     * 
     */
    create<T extends appliedjobCreateArgs>(args: SelectSubset<T, appliedjobCreateArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appliedjobs.
     * @param {appliedjobCreateManyArgs} args - Arguments to create many Appliedjobs.
     * @example
     * // Create many Appliedjobs
     * const appliedjob = await prisma.appliedjob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appliedjobCreateManyArgs>(args?: SelectSubset<T, appliedjobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appliedjob.
     * @param {appliedjobDeleteArgs} args - Arguments to delete one Appliedjob.
     * @example
     * // Delete one Appliedjob
     * const Appliedjob = await prisma.appliedjob.delete({
     *   where: {
     *     // ... filter to delete one Appliedjob
     *   }
     * })
     * 
     */
    delete<T extends appliedjobDeleteArgs>(args: SelectSubset<T, appliedjobDeleteArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appliedjob.
     * @param {appliedjobUpdateArgs} args - Arguments to update one Appliedjob.
     * @example
     * // Update one Appliedjob
     * const appliedjob = await prisma.appliedjob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appliedjobUpdateArgs>(args: SelectSubset<T, appliedjobUpdateArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appliedjobs.
     * @param {appliedjobDeleteManyArgs} args - Arguments to filter Appliedjobs to delete.
     * @example
     * // Delete a few Appliedjobs
     * const { count } = await prisma.appliedjob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appliedjobDeleteManyArgs>(args?: SelectSubset<T, appliedjobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appliedjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appliedjobs
     * const appliedjob = await prisma.appliedjob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appliedjobUpdateManyArgs>(args: SelectSubset<T, appliedjobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appliedjob.
     * @param {appliedjobUpsertArgs} args - Arguments to update or create a Appliedjob.
     * @example
     * // Update or create a Appliedjob
     * const appliedjob = await prisma.appliedjob.upsert({
     *   create: {
     *     // ... data to create a Appliedjob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appliedjob we want to update
     *   }
     * })
     */
    upsert<T extends appliedjobUpsertArgs>(args: SelectSubset<T, appliedjobUpsertArgs<ExtArgs>>): Prisma__appliedjobClient<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appliedjobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobCountArgs} args - Arguments to filter Appliedjobs to count.
     * @example
     * // Count the number of Appliedjobs
     * const count = await prisma.appliedjob.count({
     *   where: {
     *     // ... the filter for the Appliedjobs we want to count
     *   }
     * })
    **/
    count<T extends appliedjobCountArgs>(
      args?: Subset<T, appliedjobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppliedjobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appliedjob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppliedjobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppliedjobAggregateArgs>(args: Subset<T, AppliedjobAggregateArgs>): Prisma.PrismaPromise<GetAppliedjobAggregateType<T>>

    /**
     * Group by Appliedjob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appliedjobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends appliedjobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appliedjobGroupByArgs['orderBy'] }
        : { orderBy?: appliedjobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, appliedjobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppliedjobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appliedjob model
   */
  readonly fields: appliedjobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appliedjob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appliedjobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobs<T extends JobsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobsDefaultArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the appliedjob model
   */
  interface appliedjobFieldRefs {
    readonly id: FieldRef<"appliedjob", 'Int'>
    readonly userId: FieldRef<"appliedjob", 'Int'>
    readonly jobsId: FieldRef<"appliedjob", 'Int'>
    readonly firstName: FieldRef<"appliedjob", 'String'>
    readonly lastName: FieldRef<"appliedjob", 'String'>
    readonly email: FieldRef<"appliedjob", 'String'>
    readonly phone: FieldRef<"appliedjob", 'String'>
    readonly position: FieldRef<"appliedjob", 'String'>
    readonly city: FieldRef<"appliedjob", 'String'>
    readonly state: FieldRef<"appliedjob", 'String'>
    readonly experience: FieldRef<"appliedjob", 'String'>
    readonly education: FieldRef<"appliedjob", 'String'>
    readonly degree: FieldRef<"appliedjob", 'String'>
    readonly university: FieldRef<"appliedjob", 'String'>
    readonly graduationYear: FieldRef<"appliedjob", 'Int'>
    readonly resume: FieldRef<"appliedjob", 'String'>
    readonly photo: FieldRef<"appliedjob", 'String'>
    readonly coverLetter: FieldRef<"appliedjob", 'String'>
    readonly portfolio: FieldRef<"appliedjob", 'String'>
    readonly skills: FieldRef<"appliedjob", 'String'>
    readonly availability: FieldRef<"appliedjob", 'String'>
    readonly salary: FieldRef<"appliedjob", 'Int'>
    readonly appliedAt: FieldRef<"appliedjob", 'DateTime'>
    readonly status: FieldRef<"appliedjob", 'String'>
  }
    

  // Custom InputTypes
  /**
   * appliedjob findUnique
   */
  export type appliedjobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter, which appliedjob to fetch.
     */
    where: appliedjobWhereUniqueInput
  }

  /**
   * appliedjob findUniqueOrThrow
   */
  export type appliedjobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter, which appliedjob to fetch.
     */
    where: appliedjobWhereUniqueInput
  }

  /**
   * appliedjob findFirst
   */
  export type appliedjobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter, which appliedjob to fetch.
     */
    where?: appliedjobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appliedjobs to fetch.
     */
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appliedjobs.
     */
    cursor?: appliedjobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appliedjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appliedjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appliedjobs.
     */
    distinct?: AppliedjobScalarFieldEnum | AppliedjobScalarFieldEnum[]
  }

  /**
   * appliedjob findFirstOrThrow
   */
  export type appliedjobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter, which appliedjob to fetch.
     */
    where?: appliedjobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appliedjobs to fetch.
     */
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appliedjobs.
     */
    cursor?: appliedjobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appliedjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appliedjobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appliedjobs.
     */
    distinct?: AppliedjobScalarFieldEnum | AppliedjobScalarFieldEnum[]
  }

  /**
   * appliedjob findMany
   */
  export type appliedjobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter, which appliedjobs to fetch.
     */
    where?: appliedjobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appliedjobs to fetch.
     */
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appliedjobs.
     */
    cursor?: appliedjobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appliedjobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appliedjobs.
     */
    skip?: number
    distinct?: AppliedjobScalarFieldEnum | AppliedjobScalarFieldEnum[]
  }

  /**
   * appliedjob create
   */
  export type appliedjobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * The data needed to create a appliedjob.
     */
    data: XOR<appliedjobCreateInput, appliedjobUncheckedCreateInput>
  }

  /**
   * appliedjob createMany
   */
  export type appliedjobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appliedjobs.
     */
    data: appliedjobCreateManyInput | appliedjobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appliedjob update
   */
  export type appliedjobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * The data needed to update a appliedjob.
     */
    data: XOR<appliedjobUpdateInput, appliedjobUncheckedUpdateInput>
    /**
     * Choose, which appliedjob to update.
     */
    where: appliedjobWhereUniqueInput
  }

  /**
   * appliedjob updateMany
   */
  export type appliedjobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appliedjobs.
     */
    data: XOR<appliedjobUpdateManyMutationInput, appliedjobUncheckedUpdateManyInput>
    /**
     * Filter which appliedjobs to update
     */
    where?: appliedjobWhereInput
    /**
     * Limit how many appliedjobs to update.
     */
    limit?: number
  }

  /**
   * appliedjob upsert
   */
  export type appliedjobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * The filter to search for the appliedjob to update in case it exists.
     */
    where: appliedjobWhereUniqueInput
    /**
     * In case the appliedjob found by the `where` argument doesn't exist, create a new appliedjob with this data.
     */
    create: XOR<appliedjobCreateInput, appliedjobUncheckedCreateInput>
    /**
     * In case the appliedjob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appliedjobUpdateInput, appliedjobUncheckedUpdateInput>
  }

  /**
   * appliedjob delete
   */
  export type appliedjobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    /**
     * Filter which appliedjob to delete.
     */
    where: appliedjobWhereUniqueInput
  }

  /**
   * appliedjob deleteMany
   */
  export type appliedjobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appliedjobs to delete
     */
    where?: appliedjobWhereInput
    /**
     * Limit how many appliedjobs to delete.
     */
    limit?: number
  }

  /**
   * appliedjob without action
   */
  export type appliedjobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
  }


  /**
   * Model admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admin to aggregate.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type adminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adminWhereInput
    orderBy?: adminOrderByWithAggregationInput | adminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: adminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type adminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    AdminActivity?: boolean | admin$AdminActivityArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type adminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type adminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["admin"]>
  export type adminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdminActivity?: boolean | admin$AdminActivityArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $adminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "admin"
    objects: {
      AdminActivity: Prisma.$AdminActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = $Result.GetResult<Prisma.$adminPayload, S>

  type adminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface adminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['admin'], meta: { name: 'admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {adminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adminFindUniqueArgs>(args: SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adminFindFirstArgs>(args?: SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adminFindManyArgs>(args?: SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {adminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends adminCreateArgs>(args: SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {adminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adminCreateManyArgs>(args?: SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {adminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends adminDeleteArgs>(args: SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {adminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adminUpdateArgs>(args: SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {adminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adminDeleteManyArgs>(args?: SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adminUpdateManyArgs>(args: SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {adminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends adminUpsertArgs>(args: SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends adminCountArgs>(
      args?: Subset<T, adminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends adminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adminGroupByArgs['orderBy'] }
        : { orderBy?: adminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the admin model
   */
  readonly fields: adminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AdminActivity<T extends admin$AdminActivityArgs<ExtArgs> = {}>(args?: Subset<T, admin$AdminActivityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the admin model
   */
  interface adminFieldRefs {
    readonly id: FieldRef<"admin", 'Int'>
    readonly name: FieldRef<"admin", 'String'>
    readonly email: FieldRef<"admin", 'String'>
    readonly password: FieldRef<"admin", 'String'>
    readonly role: FieldRef<"admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * admin findUnique
   */
  export type adminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findUniqueOrThrow
   */
  export type adminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin findFirst
   */
  export type adminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findFirstOrThrow
   */
  export type adminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admin to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin findMany
   */
  export type adminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter, which admins to fetch.
     */
    where?: adminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of admins to fetch.
     */
    orderBy?: adminOrderByWithRelationInput | adminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing admins.
     */
    cursor?: adminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * admin create
   */
  export type adminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to create a admin.
     */
    data: XOR<adminCreateInput, adminUncheckedCreateInput>
  }

  /**
   * admin createMany
   */
  export type adminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many admins.
     */
    data: adminCreateManyInput | adminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * admin update
   */
  export type adminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The data needed to update a admin.
     */
    data: XOR<adminUpdateInput, adminUncheckedUpdateInput>
    /**
     * Choose, which admin to update.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin updateMany
   */
  export type adminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update admins.
     */
    data: XOR<adminUpdateManyMutationInput, adminUncheckedUpdateManyInput>
    /**
     * Filter which admins to update
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to update.
     */
    limit?: number
  }

  /**
   * admin upsert
   */
  export type adminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * The filter to search for the admin to update in case it exists.
     */
    where: adminWhereUniqueInput
    /**
     * In case the admin found by the `where` argument doesn't exist, create a new admin with this data.
     */
    create: XOR<adminCreateInput, adminUncheckedCreateInput>
    /**
     * In case the admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adminUpdateInput, adminUncheckedUpdateInput>
  }

  /**
   * admin delete
   */
  export type adminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
    /**
     * Filter which admin to delete.
     */
    where: adminWhereUniqueInput
  }

  /**
   * admin deleteMany
   */
  export type adminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which admins to delete
     */
    where?: adminWhereInput
    /**
     * Limit how many admins to delete.
     */
    limit?: number
  }

  /**
   * admin.AdminActivity
   */
  export type admin$AdminActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    where?: AdminActivityWhereInput
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    cursor?: AdminActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * admin without action
   */
  export type adminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the admin
     */
    select?: adminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the admin
     */
    omit?: adminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adminInclude<ExtArgs> | null
  }


  /**
   * Model AdminActivity
   */

  export type AggregateAdminActivity = {
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  export type AdminActivityAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    targetId: number | null
  }

  export type AdminActivitySumAggregateOutputType = {
    id: number | null
    adminId: number | null
    targetId: number | null
  }

  export type AdminActivityMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    action: string | null
    targetType: string | null
    targetId: number | null
    timestamp: Date | null
  }

  export type AdminActivityMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    action: string | null
    targetType: string | null
    targetId: number | null
    timestamp: Date | null
  }

  export type AdminActivityCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    targetType: number
    targetId: number
    timestamp: number
    _all: number
  }


  export type AdminActivityAvgAggregateInputType = {
    id?: true
    adminId?: true
    targetId?: true
  }

  export type AdminActivitySumAggregateInputType = {
    id?: true
    adminId?: true
    targetId?: true
  }

  export type AdminActivityMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    timestamp?: true
  }

  export type AdminActivityMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    timestamp?: true
  }

  export type AdminActivityCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    targetType?: true
    targetId?: true
    timestamp?: true
    _all?: true
  }

  export type AdminActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivity to aggregate.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminActivities
    **/
    _count?: true | AdminActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminActivityMaxAggregateInputType
  }

  export type GetAdminActivityAggregateType<T extends AdminActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminActivity[P]>
      : GetScalarType<T[P], AggregateAdminActivity[P]>
  }




  export type AdminActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminActivityWhereInput
    orderBy?: AdminActivityOrderByWithAggregationInput | AdminActivityOrderByWithAggregationInput[]
    by: AdminActivityScalarFieldEnum[] | AdminActivityScalarFieldEnum
    having?: AdminActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminActivityCountAggregateInputType | true
    _avg?: AdminActivityAvgAggregateInputType
    _sum?: AdminActivitySumAggregateInputType
    _min?: AdminActivityMinAggregateInputType
    _max?: AdminActivityMaxAggregateInputType
  }

  export type AdminActivityGroupByOutputType = {
    id: number
    adminId: number
    action: string
    targetType: string
    targetId: number
    timestamp: Date
    _count: AdminActivityCountAggregateOutputType | null
    _avg: AdminActivityAvgAggregateOutputType | null
    _sum: AdminActivitySumAggregateOutputType | null
    _min: AdminActivityMinAggregateOutputType | null
    _max: AdminActivityMaxAggregateOutputType | null
  }

  type GetAdminActivityGroupByPayload<T extends AdminActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
            : GetScalarType<T[P], AdminActivityGroupByOutputType[P]>
        }
      >
    >


  export type AdminActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    timestamp?: boolean
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminActivity"]>



  export type AdminActivitySelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    targetType?: boolean
    targetId?: boolean
    timestamp?: boolean
  }

  export type AdminActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "targetType" | "targetId" | "timestamp", ExtArgs["result"]["adminActivity"]>
  export type AdminActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | adminDefaultArgs<ExtArgs>
  }

  export type $AdminActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminActivity"
    objects: {
      admin: Prisma.$adminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      action: string
      targetType: string
      targetId: number
      timestamp: Date
    }, ExtArgs["result"]["adminActivity"]>
    composites: {}
  }

  type AdminActivityGetPayload<S extends boolean | null | undefined | AdminActivityDefaultArgs> = $Result.GetResult<Prisma.$AdminActivityPayload, S>

  type AdminActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminActivityCountAggregateInputType | true
    }

  export interface AdminActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminActivity'], meta: { name: 'AdminActivity' } }
    /**
     * Find zero or one AdminActivity that matches the filter.
     * @param {AdminActivityFindUniqueArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminActivityFindUniqueArgs>(args: SelectSubset<T, AdminActivityFindUniqueArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminActivityFindUniqueOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminActivityFindFirstArgs>(args?: SelectSubset<T, AdminActivityFindFirstArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindFirstOrThrowArgs} args - Arguments to find a AdminActivity
     * @example
     * // Get one AdminActivity
     * const adminActivity = await prisma.adminActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany()
     * 
     * // Get first 10 AdminActivities
     * const adminActivities = await prisma.adminActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminActivityWithIdOnly = await prisma.adminActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminActivityFindManyArgs>(args?: SelectSubset<T, AdminActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminActivity.
     * @param {AdminActivityCreateArgs} args - Arguments to create a AdminActivity.
     * @example
     * // Create one AdminActivity
     * const AdminActivity = await prisma.adminActivity.create({
     *   data: {
     *     // ... data to create a AdminActivity
     *   }
     * })
     * 
     */
    create<T extends AdminActivityCreateArgs>(args: SelectSubset<T, AdminActivityCreateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminActivities.
     * @param {AdminActivityCreateManyArgs} args - Arguments to create many AdminActivities.
     * @example
     * // Create many AdminActivities
     * const adminActivity = await prisma.adminActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminActivityCreateManyArgs>(args?: SelectSubset<T, AdminActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminActivity.
     * @param {AdminActivityDeleteArgs} args - Arguments to delete one AdminActivity.
     * @example
     * // Delete one AdminActivity
     * const AdminActivity = await prisma.adminActivity.delete({
     *   where: {
     *     // ... filter to delete one AdminActivity
     *   }
     * })
     * 
     */
    delete<T extends AdminActivityDeleteArgs>(args: SelectSubset<T, AdminActivityDeleteArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminActivity.
     * @param {AdminActivityUpdateArgs} args - Arguments to update one AdminActivity.
     * @example
     * // Update one AdminActivity
     * const adminActivity = await prisma.adminActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminActivityUpdateArgs>(args: SelectSubset<T, AdminActivityUpdateArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminActivities.
     * @param {AdminActivityDeleteManyArgs} args - Arguments to filter AdminActivities to delete.
     * @example
     * // Delete a few AdminActivities
     * const { count } = await prisma.adminActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminActivityDeleteManyArgs>(args?: SelectSubset<T, AdminActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminActivities
     * const adminActivity = await prisma.adminActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminActivityUpdateManyArgs>(args: SelectSubset<T, AdminActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminActivity.
     * @param {AdminActivityUpsertArgs} args - Arguments to update or create a AdminActivity.
     * @example
     * // Update or create a AdminActivity
     * const adminActivity = await prisma.adminActivity.upsert({
     *   create: {
     *     // ... data to create a AdminActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminActivity we want to update
     *   }
     * })
     */
    upsert<T extends AdminActivityUpsertArgs>(args: SelectSubset<T, AdminActivityUpsertArgs<ExtArgs>>): Prisma__AdminActivityClient<$Result.GetResult<Prisma.$AdminActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityCountArgs} args - Arguments to filter AdminActivities to count.
     * @example
     * // Count the number of AdminActivities
     * const count = await prisma.adminActivity.count({
     *   where: {
     *     // ... the filter for the AdminActivities we want to count
     *   }
     * })
    **/
    count<T extends AdminActivityCountArgs>(
      args?: Subset<T, AdminActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminActivityAggregateArgs>(args: Subset<T, AdminActivityAggregateArgs>): Prisma.PrismaPromise<GetAdminActivityAggregateType<T>>

    /**
     * Group by AdminActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminActivityGroupByArgs['orderBy'] }
        : { orderBy?: AdminActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminActivity model
   */
  readonly fields: AdminActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends adminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, adminDefaultArgs<ExtArgs>>): Prisma__adminClient<$Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminActivity model
   */
  interface AdminActivityFieldRefs {
    readonly id: FieldRef<"AdminActivity", 'Int'>
    readonly adminId: FieldRef<"AdminActivity", 'Int'>
    readonly action: FieldRef<"AdminActivity", 'String'>
    readonly targetType: FieldRef<"AdminActivity", 'String'>
    readonly targetId: FieldRef<"AdminActivity", 'Int'>
    readonly timestamp: FieldRef<"AdminActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminActivity findUnique
   */
  export type AdminActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findUniqueOrThrow
   */
  export type AdminActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity findFirst
   */
  export type AdminActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findFirstOrThrow
   */
  export type AdminActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivity to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminActivities.
     */
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity findMany
   */
  export type AdminActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter, which AdminActivities to fetch.
     */
    where?: AdminActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminActivities to fetch.
     */
    orderBy?: AdminActivityOrderByWithRelationInput | AdminActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminActivities.
     */
    cursor?: AdminActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminActivities.
     */
    skip?: number
    distinct?: AdminActivityScalarFieldEnum | AdminActivityScalarFieldEnum[]
  }

  /**
   * AdminActivity create
   */
  export type AdminActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminActivity.
     */
    data: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
  }

  /**
   * AdminActivity createMany
   */
  export type AdminActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminActivities.
     */
    data: AdminActivityCreateManyInput | AdminActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminActivity update
   */
  export type AdminActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminActivity.
     */
    data: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
    /**
     * Choose, which AdminActivity to update.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity updateMany
   */
  export type AdminActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminActivities.
     */
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyInput>
    /**
     * Filter which AdminActivities to update
     */
    where?: AdminActivityWhereInput
    /**
     * Limit how many AdminActivities to update.
     */
    limit?: number
  }

  /**
   * AdminActivity upsert
   */
  export type AdminActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminActivity to update in case it exists.
     */
    where: AdminActivityWhereUniqueInput
    /**
     * In case the AdminActivity found by the `where` argument doesn't exist, create a new AdminActivity with this data.
     */
    create: XOR<AdminActivityCreateInput, AdminActivityUncheckedCreateInput>
    /**
     * In case the AdminActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminActivityUpdateInput, AdminActivityUncheckedUpdateInput>
  }

  /**
   * AdminActivity delete
   */
  export type AdminActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
    /**
     * Filter which AdminActivity to delete.
     */
    where: AdminActivityWhereUniqueInput
  }

  /**
   * AdminActivity deleteMany
   */
  export type AdminActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminActivities to delete
     */
    where?: AdminActivityWhereInput
    /**
     * Limit how many AdminActivities to delete.
     */
    limit?: number
  }

  /**
   * AdminActivity without action
   */
  export type AdminActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminActivity
     */
    select?: AdminActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminActivity
     */
    omit?: AdminActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminActivityInclude<ExtArgs> | null
  }


  /**
   * Model PersonalDetails
   */

  export type AggregatePersonalDetails = {
    _count: PersonalDetailsCountAggregateOutputType | null
    _avg: PersonalDetailsAvgAggregateOutputType | null
    _sum: PersonalDetailsSumAggregateOutputType | null
    _min: PersonalDetailsMinAggregateOutputType | null
    _max: PersonalDetailsMaxAggregateOutputType | null
  }

  export type PersonalDetailsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PersonalDetailsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PersonalDetailsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    gender: string | null
    maritalStatus: string | null
    dob: string | null
    category: string | null
    differentlyAbled: string | null
    careerBreak: string | null
    address: string | null
    hometown: string | null
    pincode: string | null
  }

  export type PersonalDetailsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    gender: string | null
    maritalStatus: string | null
    dob: string | null
    category: string | null
    differentlyAbled: string | null
    careerBreak: string | null
    address: string | null
    hometown: string | null
    pincode: string | null
  }

  export type PersonalDetailsCountAggregateOutputType = {
    id: number
    userId: number
    gender: number
    maritalStatus: number
    dob: number
    category: number
    differentlyAbled: number
    careerBreak: number
    address: number
    hometown: number
    pincode: number
    _all: number
  }


  export type PersonalDetailsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PersonalDetailsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PersonalDetailsMinAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    maritalStatus?: true
    dob?: true
    category?: true
    differentlyAbled?: true
    careerBreak?: true
    address?: true
    hometown?: true
    pincode?: true
  }

  export type PersonalDetailsMaxAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    maritalStatus?: true
    dob?: true
    category?: true
    differentlyAbled?: true
    careerBreak?: true
    address?: true
    hometown?: true
    pincode?: true
  }

  export type PersonalDetailsCountAggregateInputType = {
    id?: true
    userId?: true
    gender?: true
    maritalStatus?: true
    dob?: true
    category?: true
    differentlyAbled?: true
    careerBreak?: true
    address?: true
    hometown?: true
    pincode?: true
    _all?: true
  }

  export type PersonalDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalDetails to aggregate.
     */
    where?: PersonalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalDetails to fetch.
     */
    orderBy?: PersonalDetailsOrderByWithRelationInput | PersonalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalDetails
    **/
    _count?: true | PersonalDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalDetailsMaxAggregateInputType
  }

  export type GetPersonalDetailsAggregateType<T extends PersonalDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalDetails[P]>
      : GetScalarType<T[P], AggregatePersonalDetails[P]>
  }




  export type PersonalDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalDetailsWhereInput
    orderBy?: PersonalDetailsOrderByWithAggregationInput | PersonalDetailsOrderByWithAggregationInput[]
    by: PersonalDetailsScalarFieldEnum[] | PersonalDetailsScalarFieldEnum
    having?: PersonalDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalDetailsCountAggregateInputType | true
    _avg?: PersonalDetailsAvgAggregateInputType
    _sum?: PersonalDetailsSumAggregateInputType
    _min?: PersonalDetailsMinAggregateInputType
    _max?: PersonalDetailsMaxAggregateInputType
  }

  export type PersonalDetailsGroupByOutputType = {
    id: number
    userId: number
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    _count: PersonalDetailsCountAggregateOutputType | null
    _avg: PersonalDetailsAvgAggregateOutputType | null
    _sum: PersonalDetailsSumAggregateOutputType | null
    _min: PersonalDetailsMinAggregateOutputType | null
    _max: PersonalDetailsMaxAggregateOutputType | null
  }

  type GetPersonalDetailsGroupByPayload<T extends PersonalDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PersonalDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gender?: boolean
    maritalStatus?: boolean
    dob?: boolean
    category?: boolean
    differentlyAbled?: boolean
    careerBreak?: boolean
    address?: boolean
    hometown?: boolean
    pincode?: boolean
    languages?: boolean | PersonalDetails$languagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PersonalDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalDetails"]>



  export type PersonalDetailsSelectScalar = {
    id?: boolean
    userId?: boolean
    gender?: boolean
    maritalStatus?: boolean
    dob?: boolean
    category?: boolean
    differentlyAbled?: boolean
    careerBreak?: boolean
    address?: boolean
    hometown?: boolean
    pincode?: boolean
  }

  export type PersonalDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gender" | "maritalStatus" | "dob" | "category" | "differentlyAbled" | "careerBreak" | "address" | "hometown" | "pincode", ExtArgs["result"]["personalDetails"]>
  export type PersonalDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    languages?: boolean | PersonalDetails$languagesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PersonalDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PersonalDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalDetails"
    objects: {
      languages: Prisma.$LanguagePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      gender: string
      maritalStatus: string
      dob: string
      category: string
      differentlyAbled: string
      careerBreak: string
      address: string
      hometown: string
      pincode: string
    }, ExtArgs["result"]["personalDetails"]>
    composites: {}
  }

  type PersonalDetailsGetPayload<S extends boolean | null | undefined | PersonalDetailsDefaultArgs> = $Result.GetResult<Prisma.$PersonalDetailsPayload, S>

  type PersonalDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalDetailsCountAggregateInputType | true
    }

  export interface PersonalDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalDetails'], meta: { name: 'PersonalDetails' } }
    /**
     * Find zero or one PersonalDetails that matches the filter.
     * @param {PersonalDetailsFindUniqueArgs} args - Arguments to find a PersonalDetails
     * @example
     * // Get one PersonalDetails
     * const personalDetails = await prisma.personalDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalDetailsFindUniqueArgs>(args: SelectSubset<T, PersonalDetailsFindUniqueArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PersonalDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalDetailsFindUniqueOrThrowArgs} args - Arguments to find a PersonalDetails
     * @example
     * // Get one PersonalDetails
     * const personalDetails = await prisma.personalDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsFindFirstArgs} args - Arguments to find a PersonalDetails
     * @example
     * // Get one PersonalDetails
     * const personalDetails = await prisma.personalDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalDetailsFindFirstArgs>(args?: SelectSubset<T, PersonalDetailsFindFirstArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PersonalDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsFindFirstOrThrowArgs} args - Arguments to find a PersonalDetails
     * @example
     * // Get one PersonalDetails
     * const personalDetails = await prisma.personalDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PersonalDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalDetails
     * const personalDetails = await prisma.personalDetails.findMany()
     * 
     * // Get first 10 PersonalDetails
     * const personalDetails = await prisma.personalDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalDetailsWithIdOnly = await prisma.personalDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalDetailsFindManyArgs>(args?: SelectSubset<T, PersonalDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PersonalDetails.
     * @param {PersonalDetailsCreateArgs} args - Arguments to create a PersonalDetails.
     * @example
     * // Create one PersonalDetails
     * const PersonalDetails = await prisma.personalDetails.create({
     *   data: {
     *     // ... data to create a PersonalDetails
     *   }
     * })
     * 
     */
    create<T extends PersonalDetailsCreateArgs>(args: SelectSubset<T, PersonalDetailsCreateArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PersonalDetails.
     * @param {PersonalDetailsCreateManyArgs} args - Arguments to create many PersonalDetails.
     * @example
     * // Create many PersonalDetails
     * const personalDetails = await prisma.personalDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalDetailsCreateManyArgs>(args?: SelectSubset<T, PersonalDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PersonalDetails.
     * @param {PersonalDetailsDeleteArgs} args - Arguments to delete one PersonalDetails.
     * @example
     * // Delete one PersonalDetails
     * const PersonalDetails = await prisma.personalDetails.delete({
     *   where: {
     *     // ... filter to delete one PersonalDetails
     *   }
     * })
     * 
     */
    delete<T extends PersonalDetailsDeleteArgs>(args: SelectSubset<T, PersonalDetailsDeleteArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PersonalDetails.
     * @param {PersonalDetailsUpdateArgs} args - Arguments to update one PersonalDetails.
     * @example
     * // Update one PersonalDetails
     * const personalDetails = await prisma.personalDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalDetailsUpdateArgs>(args: SelectSubset<T, PersonalDetailsUpdateArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PersonalDetails.
     * @param {PersonalDetailsDeleteManyArgs} args - Arguments to filter PersonalDetails to delete.
     * @example
     * // Delete a few PersonalDetails
     * const { count } = await prisma.personalDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalDetailsDeleteManyArgs>(args?: SelectSubset<T, PersonalDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalDetails
     * const personalDetails = await prisma.personalDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalDetailsUpdateManyArgs>(args: SelectSubset<T, PersonalDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonalDetails.
     * @param {PersonalDetailsUpsertArgs} args - Arguments to update or create a PersonalDetails.
     * @example
     * // Update or create a PersonalDetails
     * const personalDetails = await prisma.personalDetails.upsert({
     *   create: {
     *     // ... data to create a PersonalDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalDetails we want to update
     *   }
     * })
     */
    upsert<T extends PersonalDetailsUpsertArgs>(args: SelectSubset<T, PersonalDetailsUpsertArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PersonalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsCountArgs} args - Arguments to filter PersonalDetails to count.
     * @example
     * // Count the number of PersonalDetails
     * const count = await prisma.personalDetails.count({
     *   where: {
     *     // ... the filter for the PersonalDetails we want to count
     *   }
     * })
    **/
    count<T extends PersonalDetailsCountArgs>(
      args?: Subset<T, PersonalDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalDetailsAggregateArgs>(args: Subset<T, PersonalDetailsAggregateArgs>): Prisma.PrismaPromise<GetPersonalDetailsAggregateType<T>>

    /**
     * Group by PersonalDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PersonalDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalDetails model
   */
  readonly fields: PersonalDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    languages<T extends PersonalDetails$languagesArgs<ExtArgs> = {}>(args?: Subset<T, PersonalDetails$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalDetails model
   */
  interface PersonalDetailsFieldRefs {
    readonly id: FieldRef<"PersonalDetails", 'Int'>
    readonly userId: FieldRef<"PersonalDetails", 'Int'>
    readonly gender: FieldRef<"PersonalDetails", 'String'>
    readonly maritalStatus: FieldRef<"PersonalDetails", 'String'>
    readonly dob: FieldRef<"PersonalDetails", 'String'>
    readonly category: FieldRef<"PersonalDetails", 'String'>
    readonly differentlyAbled: FieldRef<"PersonalDetails", 'String'>
    readonly careerBreak: FieldRef<"PersonalDetails", 'String'>
    readonly address: FieldRef<"PersonalDetails", 'String'>
    readonly hometown: FieldRef<"PersonalDetails", 'String'>
    readonly pincode: FieldRef<"PersonalDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonalDetails findUnique
   */
  export type PersonalDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalDetails to fetch.
     */
    where: PersonalDetailsWhereUniqueInput
  }

  /**
   * PersonalDetails findUniqueOrThrow
   */
  export type PersonalDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalDetails to fetch.
     */
    where: PersonalDetailsWhereUniqueInput
  }

  /**
   * PersonalDetails findFirst
   */
  export type PersonalDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalDetails to fetch.
     */
    where?: PersonalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalDetails to fetch.
     */
    orderBy?: PersonalDetailsOrderByWithRelationInput | PersonalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalDetails.
     */
    cursor?: PersonalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalDetails.
     */
    distinct?: PersonalDetailsScalarFieldEnum | PersonalDetailsScalarFieldEnum[]
  }

  /**
   * PersonalDetails findFirstOrThrow
   */
  export type PersonalDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalDetails to fetch.
     */
    where?: PersonalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalDetails to fetch.
     */
    orderBy?: PersonalDetailsOrderByWithRelationInput | PersonalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalDetails.
     */
    cursor?: PersonalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalDetails.
     */
    distinct?: PersonalDetailsScalarFieldEnum | PersonalDetailsScalarFieldEnum[]
  }

  /**
   * PersonalDetails findMany
   */
  export type PersonalDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PersonalDetails to fetch.
     */
    where?: PersonalDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalDetails to fetch.
     */
    orderBy?: PersonalDetailsOrderByWithRelationInput | PersonalDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalDetails.
     */
    cursor?: PersonalDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalDetails.
     */
    skip?: number
    distinct?: PersonalDetailsScalarFieldEnum | PersonalDetailsScalarFieldEnum[]
  }

  /**
   * PersonalDetails create
   */
  export type PersonalDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalDetails.
     */
    data: XOR<PersonalDetailsCreateInput, PersonalDetailsUncheckedCreateInput>
  }

  /**
   * PersonalDetails createMany
   */
  export type PersonalDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalDetails.
     */
    data: PersonalDetailsCreateManyInput | PersonalDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PersonalDetails update
   */
  export type PersonalDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalDetails.
     */
    data: XOR<PersonalDetailsUpdateInput, PersonalDetailsUncheckedUpdateInput>
    /**
     * Choose, which PersonalDetails to update.
     */
    where: PersonalDetailsWhereUniqueInput
  }

  /**
   * PersonalDetails updateMany
   */
  export type PersonalDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalDetails.
     */
    data: XOR<PersonalDetailsUpdateManyMutationInput, PersonalDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PersonalDetails to update
     */
    where?: PersonalDetailsWhereInput
    /**
     * Limit how many PersonalDetails to update.
     */
    limit?: number
  }

  /**
   * PersonalDetails upsert
   */
  export type PersonalDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalDetails to update in case it exists.
     */
    where: PersonalDetailsWhereUniqueInput
    /**
     * In case the PersonalDetails found by the `where` argument doesn't exist, create a new PersonalDetails with this data.
     */
    create: XOR<PersonalDetailsCreateInput, PersonalDetailsUncheckedCreateInput>
    /**
     * In case the PersonalDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalDetailsUpdateInput, PersonalDetailsUncheckedUpdateInput>
  }

  /**
   * PersonalDetails delete
   */
  export type PersonalDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
    /**
     * Filter which PersonalDetails to delete.
     */
    where: PersonalDetailsWhereUniqueInput
  }

  /**
   * PersonalDetails deleteMany
   */
  export type PersonalDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalDetails to delete
     */
    where?: PersonalDetailsWhereInput
    /**
     * Limit how many PersonalDetails to delete.
     */
    limit?: number
  }

  /**
   * PersonalDetails.languages
   */
  export type PersonalDetails$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    cursor?: LanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * PersonalDetails without action
   */
  export type PersonalDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalDetails
     */
    select?: PersonalDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalDetails
     */
    omit?: PersonalDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalDetailsInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
    personalDetailsId: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
    personalDetailsId: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    personalDetailsId: number | null
    language: string | null
    proficiency: string | null
    read: boolean | null
    write: boolean | null
    speak: boolean | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    personalDetailsId: number | null
    language: string | null
    proficiency: string | null
    read: boolean | null
    write: boolean | null
    speak: boolean | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    personalDetailsId: number
    language: number
    proficiency: number
    read: number
    write: number
    speak: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
    personalDetailsId?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
    personalDetailsId?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    personalDetailsId?: true
    language?: true
    proficiency?: true
    read?: true
    write?: true
    speak?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    personalDetailsId?: true
    language?: true
    proficiency?: true
    read?: true
    write?: true
    speak?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    personalDetailsId?: true
    language?: true
    proficiency?: true
    read?: true
    write?: true
    speak?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    personalDetailsId: number
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personalDetailsId?: boolean
    language?: boolean
    proficiency?: boolean
    read?: boolean
    write?: boolean
    speak?: boolean
    personalDetails?: boolean | PersonalDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>



  export type LanguageSelectScalar = {
    id?: boolean
    personalDetailsId?: boolean
    language?: boolean
    proficiency?: boolean
    read?: boolean
    write?: boolean
    speak?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personalDetailsId" | "language" | "proficiency" | "read" | "write" | "speak", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalDetails?: boolean | PersonalDetailsDefaultArgs<ExtArgs>
  }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      personalDetails: Prisma.$PersonalDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      personalDetailsId: number
      language: string
      proficiency: string
      read: boolean
      write: boolean
      speak: boolean
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalDetails<T extends PersonalDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalDetailsDefaultArgs<ExtArgs>>): Prisma__PersonalDetailsClient<$Result.GetResult<Prisma.$PersonalDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly personalDetailsId: FieldRef<"Language", 'Int'>
    readonly language: FieldRef<"Language", 'String'>
    readonly proficiency: FieldRef<"Language", 'String'>
    readonly read: FieldRef<"Language", 'Boolean'>
    readonly write: FieldRef<"Language", 'Boolean'>
    readonly speak: FieldRef<"Language", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EducationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: number | null
    education: string | null
    university: string | null
    course: string | null
    specialization: string | null
    startingYear: string | null
    endingYear: string | null
    userId: number | null
  }

  export type EducationMaxAggregateOutputType = {
    id: number | null
    education: string | null
    university: string | null
    course: string | null
    specialization: string | null
    startingYear: string | null
    endingYear: string | null
    userId: number | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    education: number
    university: number
    course: number
    specialization: number
    startingYear: number
    endingYear: number
    userId: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EducationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    education?: true
    university?: true
    course?: true
    specialization?: true
    startingYear?: true
    endingYear?: true
    userId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    education?: true
    university?: true
    course?: true
    specialization?: true
    startingYear?: true
    endingYear?: true
    userId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    education?: true
    university?: true
    course?: true
    specialization?: true
    startingYear?: true
    endingYear?: true
    userId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: number
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
    userId: number
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    education?: boolean
    university?: boolean
    course?: boolean
    specialization?: boolean
    startingYear?: boolean
    endingYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>



  export type EducationSelectScalar = {
    id?: boolean
    education?: boolean
    university?: boolean
    course?: boolean
    specialization?: boolean
    startingYear?: boolean
    endingYear?: boolean
    userId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "education" | "university" | "course" | "specialization" | "startingYear" | "endingYear" | "userId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      education: string
      university: string
      course: string
      specialization: string
      startingYear: string
      endingYear: string
      userId: number
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'Int'>
    readonly education: FieldRef<"Education", 'String'>
    readonly university: FieldRef<"Education", 'String'>
    readonly course: FieldRef<"Education", 'String'>
    readonly specialization: FieldRef<"Education", 'String'>
    readonly startingYear: FieldRef<"Education", 'String'>
    readonly endingYear: FieldRef<"Education", 'String'>
    readonly userId: FieldRef<"Education", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    teamSize: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
    teamSize: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    userId: number | null
    projectTitle: string | null
    client: string | null
    projectEmployment: string | null
    projectStatus: string | null
    startYear: string | null
    startMonth: string | null
    endYear: string | null
    endMonth: string | null
    projectSite: string | null
    employmentNature: string | null
    teamSize: number | null
    role: string | null
    skills: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    projectTitle: string | null
    client: string | null
    projectEmployment: string | null
    projectStatus: string | null
    startYear: string | null
    startMonth: string | null
    endYear: string | null
    endMonth: string | null
    projectSite: string | null
    employmentNature: string | null
    teamSize: number | null
    role: string | null
    skills: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    projectTitle: number
    client: number
    projectEmployment: number
    projectStatus: number
    startYear: number
    startMonth: number
    endYear: number
    endMonth: number
    projectSite: number
    employmentNature: number
    teamSize: number
    role: number
    skills: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    userId?: true
    teamSize?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    userId?: true
    teamSize?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    projectTitle?: true
    client?: true
    projectEmployment?: true
    projectStatus?: true
    startYear?: true
    startMonth?: true
    endYear?: true
    endMonth?: true
    projectSite?: true
    employmentNature?: true
    teamSize?: true
    role?: true
    skills?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    projectTitle?: true
    client?: true
    projectEmployment?: true
    projectStatus?: true
    startYear?: true
    startMonth?: true
    endYear?: true
    endMonth?: true
    projectSite?: true
    employmentNature?: true
    teamSize?: true
    role?: true
    skills?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    projectTitle?: true
    client?: true
    projectEmployment?: true
    projectStatus?: true
    startYear?: true
    startMonth?: true
    endYear?: true
    endMonth?: true
    projectSite?: true
    employmentNature?: true
    teamSize?: true
    role?: true
    skills?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    userId: number
    projectTitle: string
    client: string | null
    projectEmployment: string | null
    projectStatus: string | null
    startYear: string | null
    startMonth: string | null
    endYear: string | null
    endMonth: string | null
    projectSite: string | null
    employmentNature: string | null
    teamSize: number | null
    role: string | null
    skills: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectTitle?: boolean
    client?: boolean
    projectEmployment?: boolean
    projectStatus?: boolean
    startYear?: boolean
    startMonth?: boolean
    endYear?: boolean
    endMonth?: boolean
    projectSite?: boolean
    employmentNature?: boolean
    teamSize?: boolean
    role?: boolean
    skills?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>



  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    projectTitle?: boolean
    client?: boolean
    projectEmployment?: boolean
    projectStatus?: boolean
    startYear?: boolean
    startMonth?: boolean
    endYear?: boolean
    endMonth?: boolean
    projectSite?: boolean
    employmentNature?: boolean
    teamSize?: boolean
    role?: boolean
    skills?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "projectTitle" | "client" | "projectEmployment" | "projectStatus" | "startYear" | "startMonth" | "endYear" | "endMonth" | "projectSite" | "employmentNature" | "teamSize" | "role" | "skills", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      projectTitle: string
      client: string | null
      projectEmployment: string | null
      projectStatus: string | null
      startYear: string | null
      startMonth: string | null
      endYear: string | null
      endMonth: string | null
      projectSite: string | null
      employmentNature: string | null
      teamSize: number | null
      role: string | null
      skills: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly userId: FieldRef<"Project", 'Int'>
    readonly projectTitle: FieldRef<"Project", 'String'>
    readonly client: FieldRef<"Project", 'String'>
    readonly projectEmployment: FieldRef<"Project", 'String'>
    readonly projectStatus: FieldRef<"Project", 'String'>
    readonly startYear: FieldRef<"Project", 'String'>
    readonly startMonth: FieldRef<"Project", 'String'>
    readonly endYear: FieldRef<"Project", 'String'>
    readonly endMonth: FieldRef<"Project", 'String'>
    readonly projectSite: FieldRef<"Project", 'String'>
    readonly employmentNature: FieldRef<"Project", 'String'>
    readonly teamSize: FieldRef<"Project", 'Int'>
    readonly role: FieldRef<"Project", 'String'>
    readonly skills: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Employer
   */

  export type AggregateEmployer = {
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  export type EmployerAvgAggregateOutputType = {
    id: number | null
    employes: number | null
    pincode: number | null
  }

  export type EmployerSumAggregateOutputType = {
    id: number | null
    employes: number | null
    pincode: number | null
  }

  export type EmployerMinAggregateOutputType = {
    id: number | null
    officialEmail: string | null
    loginEmail: string | null
    fullName: string | null
    password: string | null
    companyname: string | null
    hiringfor: string | null
    industry: string | null
    employes: number | null
    designation: string | null
    reportingmanager: string | null
    mobile: string | null
    companyType: string | null
    industryType: string | null
    contactPerson: string | null
    alias: string | null
    website: string | null
    classified: string | null
    noOfEmployes: string | null
    aboutus: string | null
    discription: string | null
    phone1: string | null
    phone2: string | null
    fax: string | null
    tan: string | null
    linkedin: string | null
    facebook: string | null
    twitter: string | null
    others: string | null
    pincode: number | null
    joinDate: Date | null
    companyaddress: string | null
    status: string | null
  }

  export type EmployerMaxAggregateOutputType = {
    id: number | null
    officialEmail: string | null
    loginEmail: string | null
    fullName: string | null
    password: string | null
    companyname: string | null
    hiringfor: string | null
    industry: string | null
    employes: number | null
    designation: string | null
    reportingmanager: string | null
    mobile: string | null
    companyType: string | null
    industryType: string | null
    contactPerson: string | null
    alias: string | null
    website: string | null
    classified: string | null
    noOfEmployes: string | null
    aboutus: string | null
    discription: string | null
    phone1: string | null
    phone2: string | null
    fax: string | null
    tan: string | null
    linkedin: string | null
    facebook: string | null
    twitter: string | null
    others: string | null
    pincode: number | null
    joinDate: Date | null
    companyaddress: string | null
    status: string | null
  }

  export type EmployerCountAggregateOutputType = {
    id: number
    officialEmail: number
    loginEmail: number
    fullName: number
    password: number
    companyname: number
    hiringfor: number
    industry: number
    employes: number
    designation: number
    reportingmanager: number
    mobile: number
    companyType: number
    industryType: number
    contactPerson: number
    alias: number
    website: number
    classified: number
    noOfEmployes: number
    aboutus: number
    discription: number
    phone1: number
    phone2: number
    fax: number
    tan: number
    linkedin: number
    facebook: number
    twitter: number
    others: number
    pincode: number
    joinDate: number
    companyaddress: number
    status: number
    _all: number
  }


  export type EmployerAvgAggregateInputType = {
    id?: true
    employes?: true
    pincode?: true
  }

  export type EmployerSumAggregateInputType = {
    id?: true
    employes?: true
    pincode?: true
  }

  export type EmployerMinAggregateInputType = {
    id?: true
    officialEmail?: true
    loginEmail?: true
    fullName?: true
    password?: true
    companyname?: true
    hiringfor?: true
    industry?: true
    employes?: true
    designation?: true
    reportingmanager?: true
    mobile?: true
    companyType?: true
    industryType?: true
    contactPerson?: true
    alias?: true
    website?: true
    classified?: true
    noOfEmployes?: true
    aboutus?: true
    discription?: true
    phone1?: true
    phone2?: true
    fax?: true
    tan?: true
    linkedin?: true
    facebook?: true
    twitter?: true
    others?: true
    pincode?: true
    joinDate?: true
    companyaddress?: true
    status?: true
  }

  export type EmployerMaxAggregateInputType = {
    id?: true
    officialEmail?: true
    loginEmail?: true
    fullName?: true
    password?: true
    companyname?: true
    hiringfor?: true
    industry?: true
    employes?: true
    designation?: true
    reportingmanager?: true
    mobile?: true
    companyType?: true
    industryType?: true
    contactPerson?: true
    alias?: true
    website?: true
    classified?: true
    noOfEmployes?: true
    aboutus?: true
    discription?: true
    phone1?: true
    phone2?: true
    fax?: true
    tan?: true
    linkedin?: true
    facebook?: true
    twitter?: true
    others?: true
    pincode?: true
    joinDate?: true
    companyaddress?: true
    status?: true
  }

  export type EmployerCountAggregateInputType = {
    id?: true
    officialEmail?: true
    loginEmail?: true
    fullName?: true
    password?: true
    companyname?: true
    hiringfor?: true
    industry?: true
    employes?: true
    designation?: true
    reportingmanager?: true
    mobile?: true
    companyType?: true
    industryType?: true
    contactPerson?: true
    alias?: true
    website?: true
    classified?: true
    noOfEmployes?: true
    aboutus?: true
    discription?: true
    phone1?: true
    phone2?: true
    fax?: true
    tan?: true
    linkedin?: true
    facebook?: true
    twitter?: true
    others?: true
    pincode?: true
    joinDate?: true
    companyaddress?: true
    status?: true
    _all?: true
  }

  export type EmployerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employer to aggregate.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employers
    **/
    _count?: true | EmployerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployerMaxAggregateInputType
  }

  export type GetEmployerAggregateType<T extends EmployerAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployer[P]>
      : GetScalarType<T[P], AggregateEmployer[P]>
  }




  export type EmployerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployerWhereInput
    orderBy?: EmployerOrderByWithAggregationInput | EmployerOrderByWithAggregationInput[]
    by: EmployerScalarFieldEnum[] | EmployerScalarFieldEnum
    having?: EmployerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployerCountAggregateInputType | true
    _avg?: EmployerAvgAggregateInputType
    _sum?: EmployerSumAggregateInputType
    _min?: EmployerMinAggregateInputType
    _max?: EmployerMaxAggregateInputType
  }

  export type EmployerGroupByOutputType = {
    id: number
    officialEmail: string
    loginEmail: string
    fullName: string | null
    password: string | null
    companyname: string | null
    hiringfor: string | null
    industry: string | null
    employes: number | null
    designation: string | null
    reportingmanager: string | null
    mobile: string | null
    companyType: string | null
    industryType: string | null
    contactPerson: string | null
    alias: string | null
    website: string | null
    classified: string | null
    noOfEmployes: string | null
    aboutus: string | null
    discription: string | null
    phone1: string | null
    phone2: string | null
    fax: string | null
    tan: string | null
    linkedin: string | null
    facebook: string | null
    twitter: string | null
    others: string | null
    pincode: number | null
    joinDate: Date
    companyaddress: string | null
    status: string
    _count: EmployerCountAggregateOutputType | null
    _avg: EmployerAvgAggregateOutputType | null
    _sum: EmployerSumAggregateOutputType | null
    _min: EmployerMinAggregateOutputType | null
    _max: EmployerMaxAggregateOutputType | null
  }

  type GetEmployerGroupByPayload<T extends EmployerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployerGroupByOutputType[P]>
            : GetScalarType<T[P], EmployerGroupByOutputType[P]>
        }
      >
    >


  export type EmployerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    officialEmail?: boolean
    loginEmail?: boolean
    fullName?: boolean
    password?: boolean
    companyname?: boolean
    hiringfor?: boolean
    industry?: boolean
    employes?: boolean
    designation?: boolean
    reportingmanager?: boolean
    mobile?: boolean
    companyType?: boolean
    industryType?: boolean
    contactPerson?: boolean
    alias?: boolean
    website?: boolean
    classified?: boolean
    noOfEmployes?: boolean
    aboutus?: boolean
    discription?: boolean
    phone1?: boolean
    phone2?: boolean
    fax?: boolean
    tan?: boolean
    linkedin?: boolean
    facebook?: boolean
    twitter?: boolean
    others?: boolean
    pincode?: boolean
    joinDate?: boolean
    companyaddress?: boolean
    status?: boolean
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employer"]>



  export type EmployerSelectScalar = {
    id?: boolean
    officialEmail?: boolean
    loginEmail?: boolean
    fullName?: boolean
    password?: boolean
    companyname?: boolean
    hiringfor?: boolean
    industry?: boolean
    employes?: boolean
    designation?: boolean
    reportingmanager?: boolean
    mobile?: boolean
    companyType?: boolean
    industryType?: boolean
    contactPerson?: boolean
    alias?: boolean
    website?: boolean
    classified?: boolean
    noOfEmployes?: boolean
    aboutus?: boolean
    discription?: boolean
    phone1?: boolean
    phone2?: boolean
    fax?: boolean
    tan?: boolean
    linkedin?: boolean
    facebook?: boolean
    twitter?: boolean
    others?: boolean
    pincode?: boolean
    joinDate?: boolean
    companyaddress?: boolean
    status?: boolean
  }

  export type EmployerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "officialEmail" | "loginEmail" | "fullName" | "password" | "companyname" | "hiringfor" | "industry" | "employes" | "designation" | "reportingmanager" | "mobile" | "companyType" | "industryType" | "contactPerson" | "alias" | "website" | "classified" | "noOfEmployes" | "aboutus" | "discription" | "phone1" | "phone2" | "fax" | "tan" | "linkedin" | "facebook" | "twitter" | "others" | "pincode" | "joinDate" | "companyaddress" | "status", ExtArgs["result"]["employer"]>
  export type EmployerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Employer$jobsArgs<ExtArgs>
    _count?: boolean | EmployerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employer"
    objects: {
      jobs: Prisma.$JobsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      officialEmail: string
      loginEmail: string
      fullName: string | null
      password: string | null
      companyname: string | null
      hiringfor: string | null
      industry: string | null
      employes: number | null
      designation: string | null
      reportingmanager: string | null
      mobile: string | null
      companyType: string | null
      industryType: string | null
      contactPerson: string | null
      alias: string | null
      website: string | null
      classified: string | null
      noOfEmployes: string | null
      aboutus: string | null
      discription: string | null
      phone1: string | null
      phone2: string | null
      fax: string | null
      tan: string | null
      linkedin: string | null
      facebook: string | null
      twitter: string | null
      others: string | null
      pincode: number | null
      joinDate: Date
      companyaddress: string | null
      status: string
    }, ExtArgs["result"]["employer"]>
    composites: {}
  }

  type EmployerGetPayload<S extends boolean | null | undefined | EmployerDefaultArgs> = $Result.GetResult<Prisma.$EmployerPayload, S>

  type EmployerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployerCountAggregateInputType | true
    }

  export interface EmployerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employer'], meta: { name: 'Employer' } }
    /**
     * Find zero or one Employer that matches the filter.
     * @param {EmployerFindUniqueArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployerFindUniqueArgs>(args: SelectSubset<T, EmployerFindUniqueArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployerFindUniqueOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployerFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployerFindFirstArgs>(args?: SelectSubset<T, EmployerFindFirstArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindFirstOrThrowArgs} args - Arguments to find a Employer
     * @example
     * // Get one Employer
     * const employer = await prisma.employer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployerFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employers
     * const employers = await prisma.employer.findMany()
     * 
     * // Get first 10 Employers
     * const employers = await prisma.employer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employerWithIdOnly = await prisma.employer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployerFindManyArgs>(args?: SelectSubset<T, EmployerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employer.
     * @param {EmployerCreateArgs} args - Arguments to create a Employer.
     * @example
     * // Create one Employer
     * const Employer = await prisma.employer.create({
     *   data: {
     *     // ... data to create a Employer
     *   }
     * })
     * 
     */
    create<T extends EmployerCreateArgs>(args: SelectSubset<T, EmployerCreateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employers.
     * @param {EmployerCreateManyArgs} args - Arguments to create many Employers.
     * @example
     * // Create many Employers
     * const employer = await prisma.employer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployerCreateManyArgs>(args?: SelectSubset<T, EmployerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employer.
     * @param {EmployerDeleteArgs} args - Arguments to delete one Employer.
     * @example
     * // Delete one Employer
     * const Employer = await prisma.employer.delete({
     *   where: {
     *     // ... filter to delete one Employer
     *   }
     * })
     * 
     */
    delete<T extends EmployerDeleteArgs>(args: SelectSubset<T, EmployerDeleteArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employer.
     * @param {EmployerUpdateArgs} args - Arguments to update one Employer.
     * @example
     * // Update one Employer
     * const employer = await prisma.employer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployerUpdateArgs>(args: SelectSubset<T, EmployerUpdateArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employers.
     * @param {EmployerDeleteManyArgs} args - Arguments to filter Employers to delete.
     * @example
     * // Delete a few Employers
     * const { count } = await prisma.employer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployerDeleteManyArgs>(args?: SelectSubset<T, EmployerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employers
     * const employer = await prisma.employer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployerUpdateManyArgs>(args: SelectSubset<T, EmployerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employer.
     * @param {EmployerUpsertArgs} args - Arguments to update or create a Employer.
     * @example
     * // Update or create a Employer
     * const employer = await prisma.employer.upsert({
     *   create: {
     *     // ... data to create a Employer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employer we want to update
     *   }
     * })
     */
    upsert<T extends EmployerUpsertArgs>(args: SelectSubset<T, EmployerUpsertArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerCountArgs} args - Arguments to filter Employers to count.
     * @example
     * // Count the number of Employers
     * const count = await prisma.employer.count({
     *   where: {
     *     // ... the filter for the Employers we want to count
     *   }
     * })
    **/
    count<T extends EmployerCountArgs>(
      args?: Subset<T, EmployerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployerAggregateArgs>(args: Subset<T, EmployerAggregateArgs>): Prisma.PrismaPromise<GetEmployerAggregateType<T>>

    /**
     * Group by Employer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployerGroupByArgs['orderBy'] }
        : { orderBy?: EmployerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employer model
   */
  readonly fields: EmployerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Employer$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Employer$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employer model
   */
  interface EmployerFieldRefs {
    readonly id: FieldRef<"Employer", 'Int'>
    readonly officialEmail: FieldRef<"Employer", 'String'>
    readonly loginEmail: FieldRef<"Employer", 'String'>
    readonly fullName: FieldRef<"Employer", 'String'>
    readonly password: FieldRef<"Employer", 'String'>
    readonly companyname: FieldRef<"Employer", 'String'>
    readonly hiringfor: FieldRef<"Employer", 'String'>
    readonly industry: FieldRef<"Employer", 'String'>
    readonly employes: FieldRef<"Employer", 'Int'>
    readonly designation: FieldRef<"Employer", 'String'>
    readonly reportingmanager: FieldRef<"Employer", 'String'>
    readonly mobile: FieldRef<"Employer", 'String'>
    readonly companyType: FieldRef<"Employer", 'String'>
    readonly industryType: FieldRef<"Employer", 'String'>
    readonly contactPerson: FieldRef<"Employer", 'String'>
    readonly alias: FieldRef<"Employer", 'String'>
    readonly website: FieldRef<"Employer", 'String'>
    readonly classified: FieldRef<"Employer", 'String'>
    readonly noOfEmployes: FieldRef<"Employer", 'String'>
    readonly aboutus: FieldRef<"Employer", 'String'>
    readonly discription: FieldRef<"Employer", 'String'>
    readonly phone1: FieldRef<"Employer", 'String'>
    readonly phone2: FieldRef<"Employer", 'String'>
    readonly fax: FieldRef<"Employer", 'String'>
    readonly tan: FieldRef<"Employer", 'String'>
    readonly linkedin: FieldRef<"Employer", 'String'>
    readonly facebook: FieldRef<"Employer", 'String'>
    readonly twitter: FieldRef<"Employer", 'String'>
    readonly others: FieldRef<"Employer", 'String'>
    readonly pincode: FieldRef<"Employer", 'Int'>
    readonly joinDate: FieldRef<"Employer", 'DateTime'>
    readonly companyaddress: FieldRef<"Employer", 'String'>
    readonly status: FieldRef<"Employer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Employer findUnique
   */
  export type EmployerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findUniqueOrThrow
   */
  export type EmployerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer findFirst
   */
  export type EmployerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findFirstOrThrow
   */
  export type EmployerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employer to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employers.
     */
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer findMany
   */
  export type EmployerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter, which Employers to fetch.
     */
    where?: EmployerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employers to fetch.
     */
    orderBy?: EmployerOrderByWithRelationInput | EmployerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employers.
     */
    cursor?: EmployerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employers.
     */
    skip?: number
    distinct?: EmployerScalarFieldEnum | EmployerScalarFieldEnum[]
  }

  /**
   * Employer create
   */
  export type EmployerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to create a Employer.
     */
    data: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
  }

  /**
   * Employer createMany
   */
  export type EmployerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employers.
     */
    data: EmployerCreateManyInput | EmployerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employer update
   */
  export type EmployerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The data needed to update a Employer.
     */
    data: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
    /**
     * Choose, which Employer to update.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer updateMany
   */
  export type EmployerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employers.
     */
    data: XOR<EmployerUpdateManyMutationInput, EmployerUncheckedUpdateManyInput>
    /**
     * Filter which Employers to update
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to update.
     */
    limit?: number
  }

  /**
   * Employer upsert
   */
  export type EmployerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * The filter to search for the Employer to update in case it exists.
     */
    where: EmployerWhereUniqueInput
    /**
     * In case the Employer found by the `where` argument doesn't exist, create a new Employer with this data.
     */
    create: XOR<EmployerCreateInput, EmployerUncheckedCreateInput>
    /**
     * In case the Employer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployerUpdateInput, EmployerUncheckedUpdateInput>
  }

  /**
   * Employer delete
   */
  export type EmployerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
    /**
     * Filter which Employer to delete.
     */
    where: EmployerWhereUniqueInput
  }

  /**
   * Employer deleteMany
   */
  export type EmployerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employers to delete
     */
    where?: EmployerWhereInput
    /**
     * Limit how many Employers to delete.
     */
    limit?: number
  }

  /**
   * Employer.jobs
   */
  export type Employer$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    cursor?: JobsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Employer without action
   */
  export type EmployerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employer
     */
    select?: EmployerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employer
     */
    omit?: EmployerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployerInclude<ExtArgs> | null
  }


  /**
   * Model Jobs
   */

  export type AggregateJobs = {
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  export type JobsAvgAggregateOutputType = {
    id: number | null
    experience: number | null
    openings: number | null
    employerId: number | null
  }

  export type JobsSumAggregateOutputType = {
    id: number | null
    experience: number | null
    openings: number | null
    employerId: number | null
  }

  export type JobsMinAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    companyName: string | null
    location: string | null
    salary: string | null
    experience: number | null
    jobType: string | null
    skills: string | null
    jobDiscription: string | null
    requirement: string | null
    responsibilities: string | null
    benifit: string | null
    posted: Date | null
    openings: number | null
    status: string | null
    Department: string | null
    employerId: number | null
  }

  export type JobsMaxAggregateOutputType = {
    id: number | null
    jobTitle: string | null
    companyName: string | null
    location: string | null
    salary: string | null
    experience: number | null
    jobType: string | null
    skills: string | null
    jobDiscription: string | null
    requirement: string | null
    responsibilities: string | null
    benifit: string | null
    posted: Date | null
    openings: number | null
    status: string | null
    Department: string | null
    employerId: number | null
  }

  export type JobsCountAggregateOutputType = {
    id: number
    jobTitle: number
    companyName: number
    location: number
    salary: number
    experience: number
    jobType: number
    skills: number
    jobDiscription: number
    requirement: number
    responsibilities: number
    benifit: number
    posted: number
    openings: number
    status: number
    Department: number
    employerId: number
    _all: number
  }


  export type JobsAvgAggregateInputType = {
    id?: true
    experience?: true
    openings?: true
    employerId?: true
  }

  export type JobsSumAggregateInputType = {
    id?: true
    experience?: true
    openings?: true
    employerId?: true
  }

  export type JobsMinAggregateInputType = {
    id?: true
    jobTitle?: true
    companyName?: true
    location?: true
    salary?: true
    experience?: true
    jobType?: true
    skills?: true
    jobDiscription?: true
    requirement?: true
    responsibilities?: true
    benifit?: true
    posted?: true
    openings?: true
    status?: true
    Department?: true
    employerId?: true
  }

  export type JobsMaxAggregateInputType = {
    id?: true
    jobTitle?: true
    companyName?: true
    location?: true
    salary?: true
    experience?: true
    jobType?: true
    skills?: true
    jobDiscription?: true
    requirement?: true
    responsibilities?: true
    benifit?: true
    posted?: true
    openings?: true
    status?: true
    Department?: true
    employerId?: true
  }

  export type JobsCountAggregateInputType = {
    id?: true
    jobTitle?: true
    companyName?: true
    location?: true
    salary?: true
    experience?: true
    jobType?: true
    skills?: true
    jobDiscription?: true
    requirement?: true
    responsibilities?: true
    benifit?: true
    posted?: true
    openings?: true
    status?: true
    Department?: true
    employerId?: true
    _all?: true
  }

  export type JobsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to aggregate.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobsMaxAggregateInputType
  }

  export type GetJobsAggregateType<T extends JobsAggregateArgs> = {
        [P in keyof T & keyof AggregateJobs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobs[P]>
      : GetScalarType<T[P], AggregateJobs[P]>
  }




  export type JobsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobsWhereInput
    orderBy?: JobsOrderByWithAggregationInput | JobsOrderByWithAggregationInput[]
    by: JobsScalarFieldEnum[] | JobsScalarFieldEnum
    having?: JobsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobsCountAggregateInputType | true
    _avg?: JobsAvgAggregateInputType
    _sum?: JobsSumAggregateInputType
    _min?: JobsMinAggregateInputType
    _max?: JobsMaxAggregateInputType
  }

  export type JobsGroupByOutputType = {
    id: number
    jobTitle: string
    companyName: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities: string | null
    benifit: string
    posted: Date
    openings: number
    status: string
    Department: string
    employerId: number
    _count: JobsCountAggregateOutputType | null
    _avg: JobsAvgAggregateOutputType | null
    _sum: JobsSumAggregateOutputType | null
    _min: JobsMinAggregateOutputType | null
    _max: JobsMaxAggregateOutputType | null
  }

  type GetJobsGroupByPayload<T extends JobsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobsGroupByOutputType[P]>
            : GetScalarType<T[P], JobsGroupByOutputType[P]>
        }
      >
    >


  export type JobsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    companyName?: boolean
    location?: boolean
    salary?: boolean
    experience?: boolean
    jobType?: boolean
    skills?: boolean
    jobDiscription?: boolean
    requirement?: boolean
    responsibilities?: boolean
    benifit?: boolean
    posted?: boolean
    openings?: boolean
    status?: boolean
    Department?: boolean
    employerId?: boolean
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    appliedjob?: boolean | Jobs$appliedjobArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobs"]>



  export type JobsSelectScalar = {
    id?: boolean
    jobTitle?: boolean
    companyName?: boolean
    location?: boolean
    salary?: boolean
    experience?: boolean
    jobType?: boolean
    skills?: boolean
    jobDiscription?: boolean
    requirement?: boolean
    responsibilities?: boolean
    benifit?: boolean
    posted?: boolean
    openings?: boolean
    status?: boolean
    Department?: boolean
    employerId?: boolean
  }

  export type JobsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobTitle" | "companyName" | "location" | "salary" | "experience" | "jobType" | "skills" | "jobDiscription" | "requirement" | "responsibilities" | "benifit" | "posted" | "openings" | "status" | "Department" | "employerId", ExtArgs["result"]["jobs"]>
  export type JobsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employer?: boolean | EmployerDefaultArgs<ExtArgs>
    appliedjob?: boolean | Jobs$appliedjobArgs<ExtArgs>
    _count?: boolean | JobsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jobs"
    objects: {
      employer: Prisma.$EmployerPayload<ExtArgs>
      appliedjob: Prisma.$appliedjobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jobTitle: string
      companyName: string | null
      location: string
      salary: string
      experience: number
      jobType: string
      skills: string
      jobDiscription: string
      requirement: string
      responsibilities: string | null
      benifit: string
      posted: Date
      openings: number
      status: string
      Department: string
      employerId: number
    }, ExtArgs["result"]["jobs"]>
    composites: {}
  }

  type JobsGetPayload<S extends boolean | null | undefined | JobsDefaultArgs> = $Result.GetResult<Prisma.$JobsPayload, S>

  type JobsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobsCountAggregateInputType | true
    }

  export interface JobsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jobs'], meta: { name: 'Jobs' } }
    /**
     * Find zero or one Jobs that matches the filter.
     * @param {JobsFindUniqueArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobsFindUniqueArgs>(args: SelectSubset<T, JobsFindUniqueArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jobs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobsFindUniqueOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobsFindUniqueOrThrowArgs>(args: SelectSubset<T, JobsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobsFindFirstArgs>(args?: SelectSubset<T, JobsFindFirstArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jobs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindFirstOrThrowArgs} args - Arguments to find a Jobs
     * @example
     * // Get one Jobs
     * const jobs = await prisma.jobs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobsFindFirstOrThrowArgs>(args?: SelectSubset<T, JobsFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.jobs.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.jobs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobsWithIdOnly = await prisma.jobs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobsFindManyArgs>(args?: SelectSubset<T, JobsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jobs.
     * @param {JobsCreateArgs} args - Arguments to create a Jobs.
     * @example
     * // Create one Jobs
     * const Jobs = await prisma.jobs.create({
     *   data: {
     *     // ... data to create a Jobs
     *   }
     * })
     * 
     */
    create<T extends JobsCreateArgs>(args: SelectSubset<T, JobsCreateArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobsCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const jobs = await prisma.jobs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobsCreateManyArgs>(args?: SelectSubset<T, JobsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jobs.
     * @param {JobsDeleteArgs} args - Arguments to delete one Jobs.
     * @example
     * // Delete one Jobs
     * const Jobs = await prisma.jobs.delete({
     *   where: {
     *     // ... filter to delete one Jobs
     *   }
     * })
     * 
     */
    delete<T extends JobsDeleteArgs>(args: SelectSubset<T, JobsDeleteArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jobs.
     * @param {JobsUpdateArgs} args - Arguments to update one Jobs.
     * @example
     * // Update one Jobs
     * const jobs = await prisma.jobs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobsUpdateArgs>(args: SelectSubset<T, JobsUpdateArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobsDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.jobs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobsDeleteManyArgs>(args?: SelectSubset<T, JobsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const jobs = await prisma.jobs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobsUpdateManyArgs>(args: SelectSubset<T, JobsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jobs.
     * @param {JobsUpsertArgs} args - Arguments to update or create a Jobs.
     * @example
     * // Update or create a Jobs
     * const jobs = await prisma.jobs.upsert({
     *   create: {
     *     // ... data to create a Jobs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jobs we want to update
     *   }
     * })
     */
    upsert<T extends JobsUpsertArgs>(args: SelectSubset<T, JobsUpsertArgs<ExtArgs>>): Prisma__JobsClient<$Result.GetResult<Prisma.$JobsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.jobs.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobsCountArgs>(
      args?: Subset<T, JobsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobsAggregateArgs>(args: Subset<T, JobsAggregateArgs>): Prisma.PrismaPromise<GetJobsAggregateType<T>>

    /**
     * Group by Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobsGroupByArgs['orderBy'] }
        : { orderBy?: JobsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jobs model
   */
  readonly fields: JobsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jobs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employer<T extends EmployerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployerDefaultArgs<ExtArgs>>): Prisma__EmployerClient<$Result.GetResult<Prisma.$EmployerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appliedjob<T extends Jobs$appliedjobArgs<ExtArgs> = {}>(args?: Subset<T, Jobs$appliedjobArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appliedjobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jobs model
   */
  interface JobsFieldRefs {
    readonly id: FieldRef<"Jobs", 'Int'>
    readonly jobTitle: FieldRef<"Jobs", 'String'>
    readonly companyName: FieldRef<"Jobs", 'String'>
    readonly location: FieldRef<"Jobs", 'String'>
    readonly salary: FieldRef<"Jobs", 'String'>
    readonly experience: FieldRef<"Jobs", 'Int'>
    readonly jobType: FieldRef<"Jobs", 'String'>
    readonly skills: FieldRef<"Jobs", 'String'>
    readonly jobDiscription: FieldRef<"Jobs", 'String'>
    readonly requirement: FieldRef<"Jobs", 'String'>
    readonly responsibilities: FieldRef<"Jobs", 'String'>
    readonly benifit: FieldRef<"Jobs", 'String'>
    readonly posted: FieldRef<"Jobs", 'DateTime'>
    readonly openings: FieldRef<"Jobs", 'Int'>
    readonly status: FieldRef<"Jobs", 'String'>
    readonly Department: FieldRef<"Jobs", 'String'>
    readonly employerId: FieldRef<"Jobs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Jobs findUnique
   */
  export type JobsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs findUniqueOrThrow
   */
  export type JobsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs findFirst
   */
  export type JobsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs findFirstOrThrow
   */
  export type JobsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs findMany
   */
  export type JobsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobsOrderByWithRelationInput | JobsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobsScalarFieldEnum | JobsScalarFieldEnum[]
  }

  /**
   * Jobs create
   */
  export type JobsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to create a Jobs.
     */
    data: XOR<JobsCreateInput, JobsUncheckedCreateInput>
  }

  /**
   * Jobs createMany
   */
  export type JobsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobsCreateManyInput | JobsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jobs update
   */
  export type JobsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The data needed to update a Jobs.
     */
    data: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
    /**
     * Choose, which Jobs to update.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs updateMany
   */
  export type JobsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobsWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Jobs upsert
   */
  export type JobsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * The filter to search for the Jobs to update in case it exists.
     */
    where: JobsWhereUniqueInput
    /**
     * In case the Jobs found by the `where` argument doesn't exist, create a new Jobs with this data.
     */
    create: XOR<JobsCreateInput, JobsUncheckedCreateInput>
    /**
     * In case the Jobs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobsUpdateInput, JobsUncheckedUpdateInput>
  }

  /**
   * Jobs delete
   */
  export type JobsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
    /**
     * Filter which Jobs to delete.
     */
    where: JobsWhereUniqueInput
  }

  /**
   * Jobs deleteMany
   */
  export type JobsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobsWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Jobs.appliedjob
   */
  export type Jobs$appliedjobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appliedjob
     */
    select?: appliedjobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appliedjob
     */
    omit?: appliedjobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appliedjobInclude<ExtArgs> | null
    where?: appliedjobWhereInput
    orderBy?: appliedjobOrderByWithRelationInput | appliedjobOrderByWithRelationInput[]
    cursor?: appliedjobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppliedjobScalarFieldEnum | AppliedjobScalarFieldEnum[]
  }

  /**
   * Jobs without action
   */
  export type JobsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jobs
     */
    select?: JobsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jobs
     */
    omit?: JobsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    joinDate: 'joinDate',
    jobapplied: 'jobapplied',
    status: 'status',
    mobile: 'mobile',
    workStatus: 'workStatus',
    heading: 'heading',
    keySkills: 'keySkills'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AppliedjobScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    jobsId: 'jobsId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    position: 'position',
    city: 'city',
    state: 'state',
    experience: 'experience',
    education: 'education',
    degree: 'degree',
    university: 'university',
    graduationYear: 'graduationYear',
    resume: 'resume',
    photo: 'photo',
    coverLetter: 'coverLetter',
    portfolio: 'portfolio',
    skills: 'skills',
    availability: 'availability',
    salary: 'salary',
    appliedAt: 'appliedAt',
    status: 'status'
  };

  export type AppliedjobScalarFieldEnum = (typeof AppliedjobScalarFieldEnum)[keyof typeof AppliedjobScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const AdminActivityScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    targetType: 'targetType',
    targetId: 'targetId',
    timestamp: 'timestamp'
  };

  export type AdminActivityScalarFieldEnum = (typeof AdminActivityScalarFieldEnum)[keyof typeof AdminActivityScalarFieldEnum]


  export const PersonalDetailsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gender: 'gender',
    maritalStatus: 'maritalStatus',
    dob: 'dob',
    category: 'category',
    differentlyAbled: 'differentlyAbled',
    careerBreak: 'careerBreak',
    address: 'address',
    hometown: 'hometown',
    pincode: 'pincode'
  };

  export type PersonalDetailsScalarFieldEnum = (typeof PersonalDetailsScalarFieldEnum)[keyof typeof PersonalDetailsScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    personalDetailsId: 'personalDetailsId',
    language: 'language',
    proficiency: 'proficiency',
    read: 'read',
    write: 'write',
    speak: 'speak'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    education: 'education',
    university: 'university',
    course: 'course',
    specialization: 'specialization',
    startingYear: 'startingYear',
    endingYear: 'endingYear',
    userId: 'userId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectTitle: 'projectTitle',
    client: 'client',
    projectEmployment: 'projectEmployment',
    projectStatus: 'projectStatus',
    startYear: 'startYear',
    startMonth: 'startMonth',
    endYear: 'endYear',
    endMonth: 'endMonth',
    projectSite: 'projectSite',
    employmentNature: 'employmentNature',
    teamSize: 'teamSize',
    role: 'role',
    skills: 'skills'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const EmployerScalarFieldEnum: {
    id: 'id',
    officialEmail: 'officialEmail',
    loginEmail: 'loginEmail',
    fullName: 'fullName',
    password: 'password',
    companyname: 'companyname',
    hiringfor: 'hiringfor',
    industry: 'industry',
    employes: 'employes',
    designation: 'designation',
    reportingmanager: 'reportingmanager',
    mobile: 'mobile',
    companyType: 'companyType',
    industryType: 'industryType',
    contactPerson: 'contactPerson',
    alias: 'alias',
    website: 'website',
    classified: 'classified',
    noOfEmployes: 'noOfEmployes',
    aboutus: 'aboutus',
    discription: 'discription',
    phone1: 'phone1',
    phone2: 'phone2',
    fax: 'fax',
    tan: 'tan',
    linkedin: 'linkedin',
    facebook: 'facebook',
    twitter: 'twitter',
    others: 'others',
    pincode: 'pincode',
    joinDate: 'joinDate',
    companyaddress: 'companyaddress',
    status: 'status'
  };

  export type EmployerScalarFieldEnum = (typeof EmployerScalarFieldEnum)[keyof typeof EmployerScalarFieldEnum]


  export const JobsScalarFieldEnum: {
    id: 'id',
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    location: 'location',
    salary: 'salary',
    experience: 'experience',
    jobType: 'jobType',
    skills: 'skills',
    jobDiscription: 'jobDiscription',
    requirement: 'requirement',
    responsibilities: 'responsibilities',
    benifit: 'benifit',
    posted: 'posted',
    openings: 'openings',
    status: 'status',
    Department: 'Department',
    employerId: 'employerId'
  };

  export type JobsScalarFieldEnum = (typeof JobsScalarFieldEnum)[keyof typeof JobsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    status: 'status',
    mobile: 'mobile',
    workStatus: 'workStatus',
    heading: 'heading',
    keySkills: 'keySkills'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const appliedjobOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    position: 'position',
    city: 'city',
    state: 'state',
    experience: 'experience',
    education: 'education',
    degree: 'degree',
    university: 'university',
    resume: 'resume',
    photo: 'photo',
    coverLetter: 'coverLetter',
    portfolio: 'portfolio',
    skills: 'skills',
    availability: 'availability',
    status: 'status'
  };

  export type appliedjobOrderByRelevanceFieldEnum = (typeof appliedjobOrderByRelevanceFieldEnum)[keyof typeof appliedjobOrderByRelevanceFieldEnum]


  export const adminOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type adminOrderByRelevanceFieldEnum = (typeof adminOrderByRelevanceFieldEnum)[keyof typeof adminOrderByRelevanceFieldEnum]


  export const AdminActivityOrderByRelevanceFieldEnum: {
    action: 'action',
    targetType: 'targetType'
  };

  export type AdminActivityOrderByRelevanceFieldEnum = (typeof AdminActivityOrderByRelevanceFieldEnum)[keyof typeof AdminActivityOrderByRelevanceFieldEnum]


  export const PersonalDetailsOrderByRelevanceFieldEnum: {
    gender: 'gender',
    maritalStatus: 'maritalStatus',
    dob: 'dob',
    category: 'category',
    differentlyAbled: 'differentlyAbled',
    careerBreak: 'careerBreak',
    address: 'address',
    hometown: 'hometown',
    pincode: 'pincode'
  };

  export type PersonalDetailsOrderByRelevanceFieldEnum = (typeof PersonalDetailsOrderByRelevanceFieldEnum)[keyof typeof PersonalDetailsOrderByRelevanceFieldEnum]


  export const LanguageOrderByRelevanceFieldEnum: {
    language: 'language',
    proficiency: 'proficiency'
  };

  export type LanguageOrderByRelevanceFieldEnum = (typeof LanguageOrderByRelevanceFieldEnum)[keyof typeof LanguageOrderByRelevanceFieldEnum]


  export const EducationOrderByRelevanceFieldEnum: {
    education: 'education',
    university: 'university',
    course: 'course',
    specialization: 'specialization',
    startingYear: 'startingYear',
    endingYear: 'endingYear'
  };

  export type EducationOrderByRelevanceFieldEnum = (typeof EducationOrderByRelevanceFieldEnum)[keyof typeof EducationOrderByRelevanceFieldEnum]


  export const ProjectOrderByRelevanceFieldEnum: {
    projectTitle: 'projectTitle',
    client: 'client',
    projectEmployment: 'projectEmployment',
    projectStatus: 'projectStatus',
    startYear: 'startYear',
    startMonth: 'startMonth',
    endYear: 'endYear',
    endMonth: 'endMonth',
    projectSite: 'projectSite',
    employmentNature: 'employmentNature',
    role: 'role',
    skills: 'skills'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const EmployerOrderByRelevanceFieldEnum: {
    officialEmail: 'officialEmail',
    loginEmail: 'loginEmail',
    fullName: 'fullName',
    password: 'password',
    companyname: 'companyname',
    hiringfor: 'hiringfor',
    industry: 'industry',
    designation: 'designation',
    reportingmanager: 'reportingmanager',
    mobile: 'mobile',
    companyType: 'companyType',
    industryType: 'industryType',
    contactPerson: 'contactPerson',
    alias: 'alias',
    website: 'website',
    classified: 'classified',
    noOfEmployes: 'noOfEmployes',
    aboutus: 'aboutus',
    discription: 'discription',
    phone1: 'phone1',
    phone2: 'phone2',
    fax: 'fax',
    tan: 'tan',
    linkedin: 'linkedin',
    facebook: 'facebook',
    twitter: 'twitter',
    others: 'others',
    companyaddress: 'companyaddress',
    status: 'status'
  };

  export type EmployerOrderByRelevanceFieldEnum = (typeof EmployerOrderByRelevanceFieldEnum)[keyof typeof EmployerOrderByRelevanceFieldEnum]


  export const JobsOrderByRelevanceFieldEnum: {
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    location: 'location',
    salary: 'salary',
    jobType: 'jobType',
    skills: 'skills',
    jobDiscription: 'jobDiscription',
    requirement: 'requirement',
    responsibilities: 'responsibilities',
    benifit: 'benifit',
    status: 'status',
    Department: 'Department'
  };

  export type JobsOrderByRelevanceFieldEnum = (typeof JobsOrderByRelevanceFieldEnum)[keyof typeof JobsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    joinDate?: DateTimeFilter<"User"> | Date | string
    jobapplied?: IntNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    workStatus?: StringFilter<"User"> | string
    heading?: StringNullableFilter<"User"> | string | null
    keySkills?: StringNullableFilter<"User"> | string | null
    education?: EducationListRelationFilter
    projects?: ProjectListRelationFilter
    personalDetails?: XOR<PersonalDetailsNullableScalarRelationFilter, PersonalDetailsWhereInput> | null
    appliedjob?: AppliedjobListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinDate?: SortOrder
    jobapplied?: SortOrderInput | SortOrder
    status?: SortOrder
    mobile?: SortOrder
    workStatus?: SortOrder
    heading?: SortOrderInput | SortOrder
    keySkills?: SortOrderInput | SortOrder
    education?: EducationOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    personalDetails?: PersonalDetailsOrderByWithRelationInput
    appliedjob?: appliedjobOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    joinDate?: DateTimeFilter<"User"> | Date | string
    jobapplied?: IntNullableFilter<"User"> | number | null
    status?: StringFilter<"User"> | string
    mobile?: StringFilter<"User"> | string
    workStatus?: StringFilter<"User"> | string
    heading?: StringNullableFilter<"User"> | string | null
    keySkills?: StringNullableFilter<"User"> | string | null
    education?: EducationListRelationFilter
    projects?: ProjectListRelationFilter
    personalDetails?: XOR<PersonalDetailsNullableScalarRelationFilter, PersonalDetailsWhereInput> | null
    appliedjob?: AppliedjobListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinDate?: SortOrder
    jobapplied?: SortOrderInput | SortOrder
    status?: SortOrder
    mobile?: SortOrder
    workStatus?: SortOrder
    heading?: SortOrderInput | SortOrder
    keySkills?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    joinDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    jobapplied?: IntNullableWithAggregatesFilter<"User"> | number | null
    status?: StringWithAggregatesFilter<"User"> | string
    mobile?: StringWithAggregatesFilter<"User"> | string
    workStatus?: StringWithAggregatesFilter<"User"> | string
    heading?: StringNullableWithAggregatesFilter<"User"> | string | null
    keySkills?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type appliedjobWhereInput = {
    AND?: appliedjobWhereInput | appliedjobWhereInput[]
    OR?: appliedjobWhereInput[]
    NOT?: appliedjobWhereInput | appliedjobWhereInput[]
    id?: IntFilter<"appliedjob"> | number
    userId?: IntFilter<"appliedjob"> | number
    jobsId?: IntFilter<"appliedjob"> | number
    firstName?: StringFilter<"appliedjob"> | string
    lastName?: StringFilter<"appliedjob"> | string
    email?: StringFilter<"appliedjob"> | string
    phone?: StringFilter<"appliedjob"> | string
    position?: StringFilter<"appliedjob"> | string
    city?: StringFilter<"appliedjob"> | string
    state?: StringFilter<"appliedjob"> | string
    experience?: StringFilter<"appliedjob"> | string
    education?: StringFilter<"appliedjob"> | string
    degree?: StringFilter<"appliedjob"> | string
    university?: StringFilter<"appliedjob"> | string
    graduationYear?: IntFilter<"appliedjob"> | number
    resume?: StringFilter<"appliedjob"> | string
    photo?: StringFilter<"appliedjob"> | string
    coverLetter?: StringFilter<"appliedjob"> | string
    portfolio?: StringFilter<"appliedjob"> | string
    skills?: StringFilter<"appliedjob"> | string
    availability?: StringFilter<"appliedjob"> | string
    salary?: IntFilter<"appliedjob"> | number
    appliedAt?: DateTimeFilter<"appliedjob"> | Date | string
    status?: StringFilter<"appliedjob"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }

  export type appliedjobOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    city?: SortOrder
    state?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
    resume?: SortOrder
    photo?: SortOrder
    coverLetter?: SortOrder
    portfolio?: SortOrder
    skills?: SortOrder
    availability?: SortOrder
    salary?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    jobs?: JobsOrderByWithRelationInput
    _relevance?: appliedjobOrderByRelevanceInput
  }

  export type appliedjobWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: appliedjobWhereInput | appliedjobWhereInput[]
    OR?: appliedjobWhereInput[]
    NOT?: appliedjobWhereInput | appliedjobWhereInput[]
    userId?: IntFilter<"appliedjob"> | number
    jobsId?: IntFilter<"appliedjob"> | number
    firstName?: StringFilter<"appliedjob"> | string
    lastName?: StringFilter<"appliedjob"> | string
    email?: StringFilter<"appliedjob"> | string
    phone?: StringFilter<"appliedjob"> | string
    position?: StringFilter<"appliedjob"> | string
    city?: StringFilter<"appliedjob"> | string
    state?: StringFilter<"appliedjob"> | string
    experience?: StringFilter<"appliedjob"> | string
    education?: StringFilter<"appliedjob"> | string
    degree?: StringFilter<"appliedjob"> | string
    university?: StringFilter<"appliedjob"> | string
    graduationYear?: IntFilter<"appliedjob"> | number
    resume?: StringFilter<"appliedjob"> | string
    photo?: StringFilter<"appliedjob"> | string
    coverLetter?: StringFilter<"appliedjob"> | string
    portfolio?: StringFilter<"appliedjob"> | string
    skills?: StringFilter<"appliedjob"> | string
    availability?: StringFilter<"appliedjob"> | string
    salary?: IntFilter<"appliedjob"> | number
    appliedAt?: DateTimeFilter<"appliedjob"> | Date | string
    status?: StringFilter<"appliedjob"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobs?: XOR<JobsScalarRelationFilter, JobsWhereInput>
  }, "id">

  export type appliedjobOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    city?: SortOrder
    state?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
    resume?: SortOrder
    photo?: SortOrder
    coverLetter?: SortOrder
    portfolio?: SortOrder
    skills?: SortOrder
    availability?: SortOrder
    salary?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
    _count?: appliedjobCountOrderByAggregateInput
    _avg?: appliedjobAvgOrderByAggregateInput
    _max?: appliedjobMaxOrderByAggregateInput
    _min?: appliedjobMinOrderByAggregateInput
    _sum?: appliedjobSumOrderByAggregateInput
  }

  export type appliedjobScalarWhereWithAggregatesInput = {
    AND?: appliedjobScalarWhereWithAggregatesInput | appliedjobScalarWhereWithAggregatesInput[]
    OR?: appliedjobScalarWhereWithAggregatesInput[]
    NOT?: appliedjobScalarWhereWithAggregatesInput | appliedjobScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"appliedjob"> | number
    userId?: IntWithAggregatesFilter<"appliedjob"> | number
    jobsId?: IntWithAggregatesFilter<"appliedjob"> | number
    firstName?: StringWithAggregatesFilter<"appliedjob"> | string
    lastName?: StringWithAggregatesFilter<"appliedjob"> | string
    email?: StringWithAggregatesFilter<"appliedjob"> | string
    phone?: StringWithAggregatesFilter<"appliedjob"> | string
    position?: StringWithAggregatesFilter<"appliedjob"> | string
    city?: StringWithAggregatesFilter<"appliedjob"> | string
    state?: StringWithAggregatesFilter<"appliedjob"> | string
    experience?: StringWithAggregatesFilter<"appliedjob"> | string
    education?: StringWithAggregatesFilter<"appliedjob"> | string
    degree?: StringWithAggregatesFilter<"appliedjob"> | string
    university?: StringWithAggregatesFilter<"appliedjob"> | string
    graduationYear?: IntWithAggregatesFilter<"appliedjob"> | number
    resume?: StringWithAggregatesFilter<"appliedjob"> | string
    photo?: StringWithAggregatesFilter<"appliedjob"> | string
    coverLetter?: StringWithAggregatesFilter<"appliedjob"> | string
    portfolio?: StringWithAggregatesFilter<"appliedjob"> | string
    skills?: StringWithAggregatesFilter<"appliedjob"> | string
    availability?: StringWithAggregatesFilter<"appliedjob"> | string
    salary?: IntWithAggregatesFilter<"appliedjob"> | number
    appliedAt?: DateTimeWithAggregatesFilter<"appliedjob"> | Date | string
    status?: StringWithAggregatesFilter<"appliedjob"> | string
  }

  export type adminWhereInput = {
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    id?: IntFilter<"admin"> | number
    name?: StringFilter<"admin"> | string
    email?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    role?: StringNullableFilter<"admin"> | string | null
    AdminActivity?: AdminActivityListRelationFilter
  }

  export type adminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    AdminActivity?: AdminActivityOrderByRelationAggregateInput
    _relevance?: adminOrderByRelevanceInput
  }

  export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: adminWhereInput | adminWhereInput[]
    OR?: adminWhereInput[]
    NOT?: adminWhereInput | adminWhereInput[]
    name?: StringFilter<"admin"> | string
    password?: StringFilter<"admin"> | string
    role?: StringNullableFilter<"admin"> | string | null
    AdminActivity?: AdminActivityListRelationFilter
  }, "id" | "email">

  export type adminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: adminCountOrderByAggregateInput
    _avg?: adminAvgOrderByAggregateInput
    _max?: adminMaxOrderByAggregateInput
    _min?: adminMinOrderByAggregateInput
    _sum?: adminSumOrderByAggregateInput
  }

  export type adminScalarWhereWithAggregatesInput = {
    AND?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    OR?: adminScalarWhereWithAggregatesInput[]
    NOT?: adminScalarWhereWithAggregatesInput | adminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"admin"> | number
    name?: StringWithAggregatesFilter<"admin"> | string
    email?: StringWithAggregatesFilter<"admin"> | string
    password?: StringWithAggregatesFilter<"admin"> | string
    role?: StringNullableWithAggregatesFilter<"admin"> | string | null
  }

  export type AdminActivityWhereInput = {
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    id?: IntFilter<"AdminActivity"> | number
    adminId?: IntFilter<"AdminActivity"> | number
    action?: StringFilter<"AdminActivity"> | string
    targetType?: StringFilter<"AdminActivity"> | string
    targetId?: IntFilter<"AdminActivity"> | number
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
  }

  export type AdminActivityOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    timestamp?: SortOrder
    admin?: adminOrderByWithRelationInput
    _relevance?: AdminActivityOrderByRelevanceInput
  }

  export type AdminActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminActivityWhereInput | AdminActivityWhereInput[]
    OR?: AdminActivityWhereInput[]
    NOT?: AdminActivityWhereInput | AdminActivityWhereInput[]
    adminId?: IntFilter<"AdminActivity"> | number
    action?: StringFilter<"AdminActivity"> | string
    targetType?: StringFilter<"AdminActivity"> | string
    targetId?: IntFilter<"AdminActivity"> | number
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, adminWhereInput>
  }, "id">

  export type AdminActivityOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    timestamp?: SortOrder
    _count?: AdminActivityCountOrderByAggregateInput
    _avg?: AdminActivityAvgOrderByAggregateInput
    _max?: AdminActivityMaxOrderByAggregateInput
    _min?: AdminActivityMinOrderByAggregateInput
    _sum?: AdminActivitySumOrderByAggregateInput
  }

  export type AdminActivityScalarWhereWithAggregatesInput = {
    AND?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    OR?: AdminActivityScalarWhereWithAggregatesInput[]
    NOT?: AdminActivityScalarWhereWithAggregatesInput | AdminActivityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminActivity"> | number
    adminId?: IntWithAggregatesFilter<"AdminActivity"> | number
    action?: StringWithAggregatesFilter<"AdminActivity"> | string
    targetType?: StringWithAggregatesFilter<"AdminActivity"> | string
    targetId?: IntWithAggregatesFilter<"AdminActivity"> | number
    timestamp?: DateTimeWithAggregatesFilter<"AdminActivity"> | Date | string
  }

  export type PersonalDetailsWhereInput = {
    AND?: PersonalDetailsWhereInput | PersonalDetailsWhereInput[]
    OR?: PersonalDetailsWhereInput[]
    NOT?: PersonalDetailsWhereInput | PersonalDetailsWhereInput[]
    id?: IntFilter<"PersonalDetails"> | number
    userId?: IntFilter<"PersonalDetails"> | number
    gender?: StringFilter<"PersonalDetails"> | string
    maritalStatus?: StringFilter<"PersonalDetails"> | string
    dob?: StringFilter<"PersonalDetails"> | string
    category?: StringFilter<"PersonalDetails"> | string
    differentlyAbled?: StringFilter<"PersonalDetails"> | string
    careerBreak?: StringFilter<"PersonalDetails"> | string
    address?: StringFilter<"PersonalDetails"> | string
    hometown?: StringFilter<"PersonalDetails"> | string
    pincode?: StringFilter<"PersonalDetails"> | string
    languages?: LanguageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PersonalDetailsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    dob?: SortOrder
    category?: SortOrder
    differentlyAbled?: SortOrder
    careerBreak?: SortOrder
    address?: SortOrder
    hometown?: SortOrder
    pincode?: SortOrder
    languages?: LanguageOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: PersonalDetailsOrderByRelevanceInput
  }

  export type PersonalDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: PersonalDetailsWhereInput | PersonalDetailsWhereInput[]
    OR?: PersonalDetailsWhereInput[]
    NOT?: PersonalDetailsWhereInput | PersonalDetailsWhereInput[]
    gender?: StringFilter<"PersonalDetails"> | string
    maritalStatus?: StringFilter<"PersonalDetails"> | string
    dob?: StringFilter<"PersonalDetails"> | string
    category?: StringFilter<"PersonalDetails"> | string
    differentlyAbled?: StringFilter<"PersonalDetails"> | string
    careerBreak?: StringFilter<"PersonalDetails"> | string
    address?: StringFilter<"PersonalDetails"> | string
    hometown?: StringFilter<"PersonalDetails"> | string
    pincode?: StringFilter<"PersonalDetails"> | string
    languages?: LanguageListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PersonalDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    dob?: SortOrder
    category?: SortOrder
    differentlyAbled?: SortOrder
    careerBreak?: SortOrder
    address?: SortOrder
    hometown?: SortOrder
    pincode?: SortOrder
    _count?: PersonalDetailsCountOrderByAggregateInput
    _avg?: PersonalDetailsAvgOrderByAggregateInput
    _max?: PersonalDetailsMaxOrderByAggregateInput
    _min?: PersonalDetailsMinOrderByAggregateInput
    _sum?: PersonalDetailsSumOrderByAggregateInput
  }

  export type PersonalDetailsScalarWhereWithAggregatesInput = {
    AND?: PersonalDetailsScalarWhereWithAggregatesInput | PersonalDetailsScalarWhereWithAggregatesInput[]
    OR?: PersonalDetailsScalarWhereWithAggregatesInput[]
    NOT?: PersonalDetailsScalarWhereWithAggregatesInput | PersonalDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PersonalDetails"> | number
    userId?: IntWithAggregatesFilter<"PersonalDetails"> | number
    gender?: StringWithAggregatesFilter<"PersonalDetails"> | string
    maritalStatus?: StringWithAggregatesFilter<"PersonalDetails"> | string
    dob?: StringWithAggregatesFilter<"PersonalDetails"> | string
    category?: StringWithAggregatesFilter<"PersonalDetails"> | string
    differentlyAbled?: StringWithAggregatesFilter<"PersonalDetails"> | string
    careerBreak?: StringWithAggregatesFilter<"PersonalDetails"> | string
    address?: StringWithAggregatesFilter<"PersonalDetails"> | string
    hometown?: StringWithAggregatesFilter<"PersonalDetails"> | string
    pincode?: StringWithAggregatesFilter<"PersonalDetails"> | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    personalDetailsId?: IntFilter<"Language"> | number
    language?: StringFilter<"Language"> | string
    proficiency?: StringFilter<"Language"> | string
    read?: BoolFilter<"Language"> | boolean
    write?: BoolFilter<"Language"> | boolean
    speak?: BoolFilter<"Language"> | boolean
    personalDetails?: XOR<PersonalDetailsScalarRelationFilter, PersonalDetailsWhereInput>
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    read?: SortOrder
    write?: SortOrder
    speak?: SortOrder
    personalDetails?: PersonalDetailsOrderByWithRelationInput
    _relevance?: LanguageOrderByRelevanceInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    personalDetailsId?: IntFilter<"Language"> | number
    language?: StringFilter<"Language"> | string
    proficiency?: StringFilter<"Language"> | string
    read?: BoolFilter<"Language"> | boolean
    write?: BoolFilter<"Language"> | boolean
    speak?: BoolFilter<"Language"> | boolean
    personalDetails?: XOR<PersonalDetailsScalarRelationFilter, PersonalDetailsWhereInput>
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    read?: SortOrder
    write?: SortOrder
    speak?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    personalDetailsId?: IntWithAggregatesFilter<"Language"> | number
    language?: StringWithAggregatesFilter<"Language"> | string
    proficiency?: StringWithAggregatesFilter<"Language"> | string
    read?: BoolWithAggregatesFilter<"Language"> | boolean
    write?: BoolWithAggregatesFilter<"Language"> | boolean
    speak?: BoolWithAggregatesFilter<"Language"> | boolean
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: IntFilter<"Education"> | number
    education?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    course?: StringFilter<"Education"> | string
    specialization?: StringFilter<"Education"> | string
    startingYear?: StringFilter<"Education"> | string
    endingYear?: StringFilter<"Education"> | string
    userId?: IntFilter<"Education"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    education?: SortOrder
    university?: SortOrder
    course?: SortOrder
    specialization?: SortOrder
    startingYear?: SortOrder
    endingYear?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: EducationOrderByRelevanceInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    education?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    course?: StringFilter<"Education"> | string
    specialization?: StringFilter<"Education"> | string
    startingYear?: StringFilter<"Education"> | string
    endingYear?: StringFilter<"Education"> | string
    userId?: IntFilter<"Education"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    education?: SortOrder
    university?: SortOrder
    course?: SortOrder
    specialization?: SortOrder
    startingYear?: SortOrder
    endingYear?: SortOrder
    userId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Education"> | number
    education?: StringWithAggregatesFilter<"Education"> | string
    university?: StringWithAggregatesFilter<"Education"> | string
    course?: StringWithAggregatesFilter<"Education"> | string
    specialization?: StringWithAggregatesFilter<"Education"> | string
    startingYear?: StringWithAggregatesFilter<"Education"> | string
    endingYear?: StringWithAggregatesFilter<"Education"> | string
    userId?: IntWithAggregatesFilter<"Education"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    userId?: IntFilter<"Project"> | number
    projectTitle?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    projectEmployment?: StringNullableFilter<"Project"> | string | null
    projectStatus?: StringNullableFilter<"Project"> | string | null
    startYear?: StringNullableFilter<"Project"> | string | null
    startMonth?: StringNullableFilter<"Project"> | string | null
    endYear?: StringNullableFilter<"Project"> | string | null
    endMonth?: StringNullableFilter<"Project"> | string | null
    projectSite?: StringNullableFilter<"Project"> | string | null
    employmentNature?: StringNullableFilter<"Project"> | string | null
    teamSize?: IntNullableFilter<"Project"> | number | null
    role?: StringNullableFilter<"Project"> | string | null
    skills?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectTitle?: SortOrder
    client?: SortOrderInput | SortOrder
    projectEmployment?: SortOrderInput | SortOrder
    projectStatus?: SortOrderInput | SortOrder
    startYear?: SortOrderInput | SortOrder
    startMonth?: SortOrderInput | SortOrder
    endYear?: SortOrderInput | SortOrder
    endMonth?: SortOrderInput | SortOrder
    projectSite?: SortOrderInput | SortOrder
    employmentNature?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: IntFilter<"Project"> | number
    projectTitle?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    projectEmployment?: StringNullableFilter<"Project"> | string | null
    projectStatus?: StringNullableFilter<"Project"> | string | null
    startYear?: StringNullableFilter<"Project"> | string | null
    startMonth?: StringNullableFilter<"Project"> | string | null
    endYear?: StringNullableFilter<"Project"> | string | null
    endMonth?: StringNullableFilter<"Project"> | string | null
    projectSite?: StringNullableFilter<"Project"> | string | null
    employmentNature?: StringNullableFilter<"Project"> | string | null
    teamSize?: IntNullableFilter<"Project"> | number | null
    role?: StringNullableFilter<"Project"> | string | null
    skills?: StringNullableFilter<"Project"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectTitle?: SortOrder
    client?: SortOrderInput | SortOrder
    projectEmployment?: SortOrderInput | SortOrder
    projectStatus?: SortOrderInput | SortOrder
    startYear?: SortOrderInput | SortOrder
    startMonth?: SortOrderInput | SortOrder
    endYear?: SortOrderInput | SortOrder
    endMonth?: SortOrderInput | SortOrder
    projectSite?: SortOrderInput | SortOrder
    employmentNature?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    userId?: IntWithAggregatesFilter<"Project"> | number
    projectTitle?: StringWithAggregatesFilter<"Project"> | string
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectEmployment?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectStatus?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startYear?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startMonth?: StringNullableWithAggregatesFilter<"Project"> | string | null
    endYear?: StringNullableWithAggregatesFilter<"Project"> | string | null
    endMonth?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectSite?: StringNullableWithAggregatesFilter<"Project"> | string | null
    employmentNature?: StringNullableWithAggregatesFilter<"Project"> | string | null
    teamSize?: IntNullableWithAggregatesFilter<"Project"> | number | null
    role?: StringNullableWithAggregatesFilter<"Project"> | string | null
    skills?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type EmployerWhereInput = {
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    id?: IntFilter<"Employer"> | number
    officialEmail?: StringFilter<"Employer"> | string
    loginEmail?: StringFilter<"Employer"> | string
    fullName?: StringNullableFilter<"Employer"> | string | null
    password?: StringNullableFilter<"Employer"> | string | null
    companyname?: StringNullableFilter<"Employer"> | string | null
    hiringfor?: StringNullableFilter<"Employer"> | string | null
    industry?: StringNullableFilter<"Employer"> | string | null
    employes?: IntNullableFilter<"Employer"> | number | null
    designation?: StringNullableFilter<"Employer"> | string | null
    reportingmanager?: StringNullableFilter<"Employer"> | string | null
    mobile?: StringNullableFilter<"Employer"> | string | null
    companyType?: StringNullableFilter<"Employer"> | string | null
    industryType?: StringNullableFilter<"Employer"> | string | null
    contactPerson?: StringNullableFilter<"Employer"> | string | null
    alias?: StringNullableFilter<"Employer"> | string | null
    website?: StringNullableFilter<"Employer"> | string | null
    classified?: StringNullableFilter<"Employer"> | string | null
    noOfEmployes?: StringNullableFilter<"Employer"> | string | null
    aboutus?: StringNullableFilter<"Employer"> | string | null
    discription?: StringNullableFilter<"Employer"> | string | null
    phone1?: StringNullableFilter<"Employer"> | string | null
    phone2?: StringNullableFilter<"Employer"> | string | null
    fax?: StringNullableFilter<"Employer"> | string | null
    tan?: StringNullableFilter<"Employer"> | string | null
    linkedin?: StringNullableFilter<"Employer"> | string | null
    facebook?: StringNullableFilter<"Employer"> | string | null
    twitter?: StringNullableFilter<"Employer"> | string | null
    others?: StringNullableFilter<"Employer"> | string | null
    pincode?: IntNullableFilter<"Employer"> | number | null
    joinDate?: DateTimeFilter<"Employer"> | Date | string
    companyaddress?: StringNullableFilter<"Employer"> | string | null
    status?: StringFilter<"Employer"> | string
    jobs?: JobsListRelationFilter
  }

  export type EmployerOrderByWithRelationInput = {
    id?: SortOrder
    officialEmail?: SortOrder
    loginEmail?: SortOrder
    fullName?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    companyname?: SortOrderInput | SortOrder
    hiringfor?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    employes?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    reportingmanager?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    industryType?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    classified?: SortOrderInput | SortOrder
    noOfEmployes?: SortOrderInput | SortOrder
    aboutus?: SortOrderInput | SortOrder
    discription?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    fax?: SortOrderInput | SortOrder
    tan?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    others?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    companyaddress?: SortOrderInput | SortOrder
    status?: SortOrder
    jobs?: JobsOrderByRelationAggregateInput
    _relevance?: EmployerOrderByRelevanceInput
  }

  export type EmployerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    officialEmail?: string
    loginEmail?: string
    AND?: EmployerWhereInput | EmployerWhereInput[]
    OR?: EmployerWhereInput[]
    NOT?: EmployerWhereInput | EmployerWhereInput[]
    fullName?: StringNullableFilter<"Employer"> | string | null
    password?: StringNullableFilter<"Employer"> | string | null
    companyname?: StringNullableFilter<"Employer"> | string | null
    hiringfor?: StringNullableFilter<"Employer"> | string | null
    industry?: StringNullableFilter<"Employer"> | string | null
    employes?: IntNullableFilter<"Employer"> | number | null
    designation?: StringNullableFilter<"Employer"> | string | null
    reportingmanager?: StringNullableFilter<"Employer"> | string | null
    mobile?: StringNullableFilter<"Employer"> | string | null
    companyType?: StringNullableFilter<"Employer"> | string | null
    industryType?: StringNullableFilter<"Employer"> | string | null
    contactPerson?: StringNullableFilter<"Employer"> | string | null
    alias?: StringNullableFilter<"Employer"> | string | null
    website?: StringNullableFilter<"Employer"> | string | null
    classified?: StringNullableFilter<"Employer"> | string | null
    noOfEmployes?: StringNullableFilter<"Employer"> | string | null
    aboutus?: StringNullableFilter<"Employer"> | string | null
    discription?: StringNullableFilter<"Employer"> | string | null
    phone1?: StringNullableFilter<"Employer"> | string | null
    phone2?: StringNullableFilter<"Employer"> | string | null
    fax?: StringNullableFilter<"Employer"> | string | null
    tan?: StringNullableFilter<"Employer"> | string | null
    linkedin?: StringNullableFilter<"Employer"> | string | null
    facebook?: StringNullableFilter<"Employer"> | string | null
    twitter?: StringNullableFilter<"Employer"> | string | null
    others?: StringNullableFilter<"Employer"> | string | null
    pincode?: IntNullableFilter<"Employer"> | number | null
    joinDate?: DateTimeFilter<"Employer"> | Date | string
    companyaddress?: StringNullableFilter<"Employer"> | string | null
    status?: StringFilter<"Employer"> | string
    jobs?: JobsListRelationFilter
  }, "id" | "officialEmail" | "loginEmail">

  export type EmployerOrderByWithAggregationInput = {
    id?: SortOrder
    officialEmail?: SortOrder
    loginEmail?: SortOrder
    fullName?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    companyname?: SortOrderInput | SortOrder
    hiringfor?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    employes?: SortOrderInput | SortOrder
    designation?: SortOrderInput | SortOrder
    reportingmanager?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    industryType?: SortOrderInput | SortOrder
    contactPerson?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    classified?: SortOrderInput | SortOrder
    noOfEmployes?: SortOrderInput | SortOrder
    aboutus?: SortOrderInput | SortOrder
    discription?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    fax?: SortOrderInput | SortOrder
    tan?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    others?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    joinDate?: SortOrder
    companyaddress?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: EmployerCountOrderByAggregateInput
    _avg?: EmployerAvgOrderByAggregateInput
    _max?: EmployerMaxOrderByAggregateInput
    _min?: EmployerMinOrderByAggregateInput
    _sum?: EmployerSumOrderByAggregateInput
  }

  export type EmployerScalarWhereWithAggregatesInput = {
    AND?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    OR?: EmployerScalarWhereWithAggregatesInput[]
    NOT?: EmployerScalarWhereWithAggregatesInput | EmployerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employer"> | number
    officialEmail?: StringWithAggregatesFilter<"Employer"> | string
    loginEmail?: StringWithAggregatesFilter<"Employer"> | string
    fullName?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    password?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    companyname?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    hiringfor?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    employes?: IntNullableWithAggregatesFilter<"Employer"> | number | null
    designation?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    reportingmanager?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    companyType?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    industryType?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    contactPerson?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    alias?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    website?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    classified?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    noOfEmployes?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    aboutus?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    discription?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    phone1?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    phone2?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    fax?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    tan?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    others?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    pincode?: IntNullableWithAggregatesFilter<"Employer"> | number | null
    joinDate?: DateTimeWithAggregatesFilter<"Employer"> | Date | string
    companyaddress?: StringNullableWithAggregatesFilter<"Employer"> | string | null
    status?: StringWithAggregatesFilter<"Employer"> | string
  }

  export type JobsWhereInput = {
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    id?: IntFilter<"Jobs"> | number
    jobTitle?: StringFilter<"Jobs"> | string
    companyName?: StringNullableFilter<"Jobs"> | string | null
    location?: StringFilter<"Jobs"> | string
    salary?: StringFilter<"Jobs"> | string
    experience?: IntFilter<"Jobs"> | number
    jobType?: StringFilter<"Jobs"> | string
    skills?: StringFilter<"Jobs"> | string
    jobDiscription?: StringFilter<"Jobs"> | string
    requirement?: StringFilter<"Jobs"> | string
    responsibilities?: StringNullableFilter<"Jobs"> | string | null
    benifit?: StringFilter<"Jobs"> | string
    posted?: DateTimeFilter<"Jobs"> | Date | string
    openings?: IntFilter<"Jobs"> | number
    status?: StringFilter<"Jobs"> | string
    Department?: StringFilter<"Jobs"> | string
    employerId?: IntFilter<"Jobs"> | number
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    appliedjob?: AppliedjobListRelationFilter
  }

  export type JobsOrderByWithRelationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrderInput | SortOrder
    location?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
    jobType?: SortOrder
    skills?: SortOrder
    jobDiscription?: SortOrder
    requirement?: SortOrder
    responsibilities?: SortOrderInput | SortOrder
    benifit?: SortOrder
    posted?: SortOrder
    openings?: SortOrder
    status?: SortOrder
    Department?: SortOrder
    employerId?: SortOrder
    employer?: EmployerOrderByWithRelationInput
    appliedjob?: appliedjobOrderByRelationAggregateInput
    _relevance?: JobsOrderByRelevanceInput
  }

  export type JobsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JobsWhereInput | JobsWhereInput[]
    OR?: JobsWhereInput[]
    NOT?: JobsWhereInput | JobsWhereInput[]
    jobTitle?: StringFilter<"Jobs"> | string
    companyName?: StringNullableFilter<"Jobs"> | string | null
    location?: StringFilter<"Jobs"> | string
    salary?: StringFilter<"Jobs"> | string
    experience?: IntFilter<"Jobs"> | number
    jobType?: StringFilter<"Jobs"> | string
    skills?: StringFilter<"Jobs"> | string
    jobDiscription?: StringFilter<"Jobs"> | string
    requirement?: StringFilter<"Jobs"> | string
    responsibilities?: StringNullableFilter<"Jobs"> | string | null
    benifit?: StringFilter<"Jobs"> | string
    posted?: DateTimeFilter<"Jobs"> | Date | string
    openings?: IntFilter<"Jobs"> | number
    status?: StringFilter<"Jobs"> | string
    Department?: StringFilter<"Jobs"> | string
    employerId?: IntFilter<"Jobs"> | number
    employer?: XOR<EmployerScalarRelationFilter, EmployerWhereInput>
    appliedjob?: AppliedjobListRelationFilter
  }, "id">

  export type JobsOrderByWithAggregationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrderInput | SortOrder
    location?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
    jobType?: SortOrder
    skills?: SortOrder
    jobDiscription?: SortOrder
    requirement?: SortOrder
    responsibilities?: SortOrderInput | SortOrder
    benifit?: SortOrder
    posted?: SortOrder
    openings?: SortOrder
    status?: SortOrder
    Department?: SortOrder
    employerId?: SortOrder
    _count?: JobsCountOrderByAggregateInput
    _avg?: JobsAvgOrderByAggregateInput
    _max?: JobsMaxOrderByAggregateInput
    _min?: JobsMinOrderByAggregateInput
    _sum?: JobsSumOrderByAggregateInput
  }

  export type JobsScalarWhereWithAggregatesInput = {
    AND?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    OR?: JobsScalarWhereWithAggregatesInput[]
    NOT?: JobsScalarWhereWithAggregatesInput | JobsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jobs"> | number
    jobTitle?: StringWithAggregatesFilter<"Jobs"> | string
    companyName?: StringNullableWithAggregatesFilter<"Jobs"> | string | null
    location?: StringWithAggregatesFilter<"Jobs"> | string
    salary?: StringWithAggregatesFilter<"Jobs"> | string
    experience?: IntWithAggregatesFilter<"Jobs"> | number
    jobType?: StringWithAggregatesFilter<"Jobs"> | string
    skills?: StringWithAggregatesFilter<"Jobs"> | string
    jobDiscription?: StringWithAggregatesFilter<"Jobs"> | string
    requirement?: StringWithAggregatesFilter<"Jobs"> | string
    responsibilities?: StringNullableWithAggregatesFilter<"Jobs"> | string | null
    benifit?: StringWithAggregatesFilter<"Jobs"> | string
    posted?: DateTimeWithAggregatesFilter<"Jobs"> | Date | string
    openings?: IntWithAggregatesFilter<"Jobs"> | number
    status?: StringWithAggregatesFilter<"Jobs"> | string
    Department?: StringWithAggregatesFilter<"Jobs"> | string
    employerId?: IntWithAggregatesFilter<"Jobs"> | number
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsUncheckedCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appliedjobCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutAppliedjobInput
    jobs: JobsCreateNestedOneWithoutAppliedjobInput
  }

  export type appliedjobUncheckedCreateInput = {
    id?: number
    userId: number
    jobsId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type appliedjobUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAppliedjobNestedInput
    jobs?: JobsUpdateOneRequiredWithoutAppliedjobNestedInput
  }

  export type appliedjobUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobsId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobCreateManyInput = {
    id?: number
    userId: number
    jobsId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type appliedjobUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    jobsId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type adminCreateInput = {
    name: string
    email: string
    password: string
    role?: string | null
    AdminActivity?: AdminActivityCreateNestedManyWithoutAdminInput
  }

  export type adminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
    AdminActivity?: AdminActivityUncheckedCreateNestedManyWithoutAdminInput
  }

  export type adminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    AdminActivity?: AdminActivityUpdateManyWithoutAdminNestedInput
  }

  export type adminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    AdminActivity?: AdminActivityUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type adminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type adminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdminActivityCreateInput = {
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
    admin: adminCreateNestedOneWithoutAdminActivityInput
  }

  export type AdminActivityUncheckedCreateInput = {
    id?: number
    adminId: number
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
  }

  export type AdminActivityUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: adminUpdateOneRequiredWithoutAdminActivityNestedInput
  }

  export type AdminActivityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityCreateManyInput = {
    id?: number
    adminId: number
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
  }

  export type AdminActivityUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalDetailsCreateInput = {
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    languages?: LanguageCreateNestedManyWithoutPersonalDetailsInput
    user: UserCreateNestedOneWithoutPersonalDetailsInput
  }

  export type PersonalDetailsUncheckedCreateInput = {
    id?: number
    userId: number
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    languages?: LanguageUncheckedCreateNestedManyWithoutPersonalDetailsInput
  }

  export type PersonalDetailsUpdateInput = {
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    languages?: LanguageUpdateManyWithoutPersonalDetailsNestedInput
    user?: UserUpdateOneRequiredWithoutPersonalDetailsNestedInput
  }

  export type PersonalDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    languages?: LanguageUncheckedUpdateManyWithoutPersonalDetailsNestedInput
  }

  export type PersonalDetailsCreateManyInput = {
    id?: number
    userId: number
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
  }

  export type PersonalDetailsUpdateManyMutationInput = {
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type PersonalDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageCreateInput = {
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
    personalDetails: PersonalDetailsCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    personalDetailsId: number
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
  }

  export type LanguageUpdateInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
    personalDetails?: PersonalDetailsUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    personalDetailsId?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageCreateManyInput = {
    id?: number
    personalDetailsId: number
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
  }

  export type LanguageUpdateManyMutationInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    personalDetailsId?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EducationCreateInput = {
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
    user: UserCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: number
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
    userId: number
  }

  export type EducationUpdateInput = {
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EducationCreateManyInput = {
    id?: number
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
    userId: number
  }

  export type EducationUpdateManyMutationInput = {
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
    user: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    userId: number
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
  }

  export type ProjectUpdateInput = {
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateManyInput = {
    id?: number
    userId: number
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployerCreateInput = {
    officialEmail: string
    loginEmail: string
    fullName?: string | null
    password?: string | null
    companyname?: string | null
    hiringfor?: string | null
    industry?: string | null
    employes?: number | null
    designation?: string | null
    reportingmanager?: string | null
    mobile?: string | null
    companyType?: string | null
    industryType?: string | null
    contactPerson?: string | null
    alias?: string | null
    website?: string | null
    classified?: string | null
    noOfEmployes?: string | null
    aboutus?: string | null
    discription?: string | null
    phone1?: string | null
    phone2?: string | null
    fax?: string | null
    tan?: string | null
    linkedin?: string | null
    facebook?: string | null
    twitter?: string | null
    others?: string | null
    pincode?: number | null
    joinDate?: Date | string
    companyaddress?: string | null
    status?: string
    jobs?: JobsCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUncheckedCreateInput = {
    id?: number
    officialEmail: string
    loginEmail: string
    fullName?: string | null
    password?: string | null
    companyname?: string | null
    hiringfor?: string | null
    industry?: string | null
    employes?: number | null
    designation?: string | null
    reportingmanager?: string | null
    mobile?: string | null
    companyType?: string | null
    industryType?: string | null
    contactPerson?: string | null
    alias?: string | null
    website?: string | null
    classified?: string | null
    noOfEmployes?: string | null
    aboutus?: string | null
    discription?: string | null
    phone1?: string | null
    phone2?: string | null
    fax?: string | null
    tan?: string | null
    linkedin?: string | null
    facebook?: string | null
    twitter?: string | null
    others?: string | null
    pincode?: number | null
    joinDate?: Date | string
    companyaddress?: string | null
    status?: string
    jobs?: JobsUncheckedCreateNestedManyWithoutEmployerInput
  }

  export type EmployerUpdateInput = {
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobs?: JobsUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    jobs?: JobsUncheckedUpdateManyWithoutEmployerNestedInput
  }

  export type EmployerCreateManyInput = {
    id?: number
    officialEmail: string
    loginEmail: string
    fullName?: string | null
    password?: string | null
    companyname?: string | null
    hiringfor?: string | null
    industry?: string | null
    employes?: number | null
    designation?: string | null
    reportingmanager?: string | null
    mobile?: string | null
    companyType?: string | null
    industryType?: string | null
    contactPerson?: string | null
    alias?: string | null
    website?: string | null
    classified?: string | null
    noOfEmployes?: string | null
    aboutus?: string | null
    discription?: string | null
    phone1?: string | null
    phone2?: string | null
    fax?: string | null
    tan?: string | null
    linkedin?: string | null
    facebook?: string | null
    twitter?: string | null
    others?: string | null
    pincode?: number | null
    joinDate?: Date | string
    companyaddress?: string | null
    status?: string
  }

  export type EmployerUpdateManyMutationInput = {
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JobsCreateInput = {
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    employer: EmployerCreateNestedOneWithoutJobsInput
    appliedjob?: appliedjobCreateNestedManyWithoutJobsInput
  }

  export type JobsUncheckedCreateInput = {
    id?: number
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    employerId: number
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobsUpdateInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
    appliedjob?: appliedjobUpdateManyWithoutJobsNestedInput
  }

  export type JobsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
    appliedjob?: appliedjobUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobsCreateManyInput = {
    id?: number
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    employerId: number
  }

  export type JobsUpdateManyMutationInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
  }

  export type JobsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type PersonalDetailsNullableScalarRelationFilter = {
    is?: PersonalDetailsWhereInput | null
    isNot?: PersonalDetailsWhereInput | null
  }

  export type AppliedjobListRelationFilter = {
    every?: appliedjobWhereInput
    some?: appliedjobWhereInput
    none?: appliedjobWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type appliedjobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinDate?: SortOrder
    jobapplied?: SortOrder
    status?: SortOrder
    mobile?: SortOrder
    workStatus?: SortOrder
    heading?: SortOrder
    keySkills?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    jobapplied?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinDate?: SortOrder
    jobapplied?: SortOrder
    status?: SortOrder
    mobile?: SortOrder
    workStatus?: SortOrder
    heading?: SortOrder
    keySkills?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joinDate?: SortOrder
    jobapplied?: SortOrder
    status?: SortOrder
    mobile?: SortOrder
    workStatus?: SortOrder
    heading?: SortOrder
    keySkills?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    jobapplied?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JobsScalarRelationFilter = {
    is?: JobsWhereInput
    isNot?: JobsWhereInput
  }

  export type appliedjobOrderByRelevanceInput = {
    fields: appliedjobOrderByRelevanceFieldEnum | appliedjobOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type appliedjobCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    city?: SortOrder
    state?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
    resume?: SortOrder
    photo?: SortOrder
    coverLetter?: SortOrder
    portfolio?: SortOrder
    skills?: SortOrder
    availability?: SortOrder
    salary?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
  }

  export type appliedjobAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    graduationYear?: SortOrder
    salary?: SortOrder
  }

  export type appliedjobMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    city?: SortOrder
    state?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
    resume?: SortOrder
    photo?: SortOrder
    coverLetter?: SortOrder
    portfolio?: SortOrder
    skills?: SortOrder
    availability?: SortOrder
    salary?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
  }

  export type appliedjobMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    position?: SortOrder
    city?: SortOrder
    state?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    degree?: SortOrder
    university?: SortOrder
    graduationYear?: SortOrder
    resume?: SortOrder
    photo?: SortOrder
    coverLetter?: SortOrder
    portfolio?: SortOrder
    skills?: SortOrder
    availability?: SortOrder
    salary?: SortOrder
    appliedAt?: SortOrder
    status?: SortOrder
  }

  export type appliedjobSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    jobsId?: SortOrder
    graduationYear?: SortOrder
    salary?: SortOrder
  }

  export type AdminActivityListRelationFilter = {
    every?: AdminActivityWhereInput
    some?: AdminActivityWhereInput
    none?: AdminActivityWhereInput
  }

  export type AdminActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type adminOrderByRelevanceInput = {
    fields: adminOrderByRelevanceFieldEnum | adminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type adminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type adminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type adminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type adminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type adminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminScalarRelationFilter = {
    is?: adminWhereInput
    isNot?: adminWhereInput
  }

  export type AdminActivityOrderByRelevanceInput = {
    fields: AdminActivityOrderByRelevanceFieldEnum | AdminActivityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminActivityCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminActivityAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    targetId?: SortOrder
  }

  export type AdminActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminActivityMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    targetType?: SortOrder
    targetId?: SortOrder
    timestamp?: SortOrder
  }

  export type AdminActivitySumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    targetId?: SortOrder
  }

  export type LanguageListRelationFilter = {
    every?: LanguageWhereInput
    some?: LanguageWhereInput
    none?: LanguageWhereInput
  }

  export type LanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalDetailsOrderByRelevanceInput = {
    fields: PersonalDetailsOrderByRelevanceFieldEnum | PersonalDetailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PersonalDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    dob?: SortOrder
    category?: SortOrder
    differentlyAbled?: SortOrder
    careerBreak?: SortOrder
    address?: SortOrder
    hometown?: SortOrder
    pincode?: SortOrder
  }

  export type PersonalDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PersonalDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    dob?: SortOrder
    category?: SortOrder
    differentlyAbled?: SortOrder
    careerBreak?: SortOrder
    address?: SortOrder
    hometown?: SortOrder
    pincode?: SortOrder
  }

  export type PersonalDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gender?: SortOrder
    maritalStatus?: SortOrder
    dob?: SortOrder
    category?: SortOrder
    differentlyAbled?: SortOrder
    careerBreak?: SortOrder
    address?: SortOrder
    hometown?: SortOrder
    pincode?: SortOrder
  }

  export type PersonalDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonalDetailsScalarRelationFilter = {
    is?: PersonalDetailsWhereInput
    isNot?: PersonalDetailsWhereInput
  }

  export type LanguageOrderByRelevanceInput = {
    fields: LanguageOrderByRelevanceFieldEnum | LanguageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    read?: SortOrder
    write?: SortOrder
    speak?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    read?: SortOrder
    write?: SortOrder
    speak?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
    language?: SortOrder
    proficiency?: SortOrder
    read?: SortOrder
    write?: SortOrder
    speak?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
    personalDetailsId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EducationOrderByRelevanceInput = {
    fields: EducationOrderByRelevanceFieldEnum | EducationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    university?: SortOrder
    course?: SortOrder
    specialization?: SortOrder
    startingYear?: SortOrder
    endingYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    university?: SortOrder
    course?: SortOrder
    specialization?: SortOrder
    startingYear?: SortOrder
    endingYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    education?: SortOrder
    university?: SortOrder
    course?: SortOrder
    specialization?: SortOrder
    startingYear?: SortOrder
    endingYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectTitle?: SortOrder
    client?: SortOrder
    projectEmployment?: SortOrder
    projectStatus?: SortOrder
    startYear?: SortOrder
    startMonth?: SortOrder
    endYear?: SortOrder
    endMonth?: SortOrder
    projectSite?: SortOrder
    employmentNature?: SortOrder
    teamSize?: SortOrder
    role?: SortOrder
    skills?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamSize?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectTitle?: SortOrder
    client?: SortOrder
    projectEmployment?: SortOrder
    projectStatus?: SortOrder
    startYear?: SortOrder
    startMonth?: SortOrder
    endYear?: SortOrder
    endMonth?: SortOrder
    projectSite?: SortOrder
    employmentNature?: SortOrder
    teamSize?: SortOrder
    role?: SortOrder
    skills?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectTitle?: SortOrder
    client?: SortOrder
    projectEmployment?: SortOrder
    projectStatus?: SortOrder
    startYear?: SortOrder
    startMonth?: SortOrder
    endYear?: SortOrder
    endMonth?: SortOrder
    projectSite?: SortOrder
    employmentNature?: SortOrder
    teamSize?: SortOrder
    role?: SortOrder
    skills?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamSize?: SortOrder
  }

  export type JobsListRelationFilter = {
    every?: JobsWhereInput
    some?: JobsWhereInput
    none?: JobsWhereInput
  }

  export type JobsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployerOrderByRelevanceInput = {
    fields: EmployerOrderByRelevanceFieldEnum | EmployerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployerCountOrderByAggregateInput = {
    id?: SortOrder
    officialEmail?: SortOrder
    loginEmail?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    companyname?: SortOrder
    hiringfor?: SortOrder
    industry?: SortOrder
    employes?: SortOrder
    designation?: SortOrder
    reportingmanager?: SortOrder
    mobile?: SortOrder
    companyType?: SortOrder
    industryType?: SortOrder
    contactPerson?: SortOrder
    alias?: SortOrder
    website?: SortOrder
    classified?: SortOrder
    noOfEmployes?: SortOrder
    aboutus?: SortOrder
    discription?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    fax?: SortOrder
    tan?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    others?: SortOrder
    pincode?: SortOrder
    joinDate?: SortOrder
    companyaddress?: SortOrder
    status?: SortOrder
  }

  export type EmployerAvgOrderByAggregateInput = {
    id?: SortOrder
    employes?: SortOrder
    pincode?: SortOrder
  }

  export type EmployerMaxOrderByAggregateInput = {
    id?: SortOrder
    officialEmail?: SortOrder
    loginEmail?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    companyname?: SortOrder
    hiringfor?: SortOrder
    industry?: SortOrder
    employes?: SortOrder
    designation?: SortOrder
    reportingmanager?: SortOrder
    mobile?: SortOrder
    companyType?: SortOrder
    industryType?: SortOrder
    contactPerson?: SortOrder
    alias?: SortOrder
    website?: SortOrder
    classified?: SortOrder
    noOfEmployes?: SortOrder
    aboutus?: SortOrder
    discription?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    fax?: SortOrder
    tan?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    others?: SortOrder
    pincode?: SortOrder
    joinDate?: SortOrder
    companyaddress?: SortOrder
    status?: SortOrder
  }

  export type EmployerMinOrderByAggregateInput = {
    id?: SortOrder
    officialEmail?: SortOrder
    loginEmail?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    companyname?: SortOrder
    hiringfor?: SortOrder
    industry?: SortOrder
    employes?: SortOrder
    designation?: SortOrder
    reportingmanager?: SortOrder
    mobile?: SortOrder
    companyType?: SortOrder
    industryType?: SortOrder
    contactPerson?: SortOrder
    alias?: SortOrder
    website?: SortOrder
    classified?: SortOrder
    noOfEmployes?: SortOrder
    aboutus?: SortOrder
    discription?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    fax?: SortOrder
    tan?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    twitter?: SortOrder
    others?: SortOrder
    pincode?: SortOrder
    joinDate?: SortOrder
    companyaddress?: SortOrder
    status?: SortOrder
  }

  export type EmployerSumOrderByAggregateInput = {
    id?: SortOrder
    employes?: SortOrder
    pincode?: SortOrder
  }

  export type EmployerScalarRelationFilter = {
    is?: EmployerWhereInput
    isNot?: EmployerWhereInput
  }

  export type JobsOrderByRelevanceInput = {
    fields: JobsOrderByRelevanceFieldEnum | JobsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type JobsCountOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
    jobType?: SortOrder
    skills?: SortOrder
    jobDiscription?: SortOrder
    requirement?: SortOrder
    responsibilities?: SortOrder
    benifit?: SortOrder
    posted?: SortOrder
    openings?: SortOrder
    status?: SortOrder
    Department?: SortOrder
    employerId?: SortOrder
  }

  export type JobsAvgOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    openings?: SortOrder
    employerId?: SortOrder
  }

  export type JobsMaxOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
    jobType?: SortOrder
    skills?: SortOrder
    jobDiscription?: SortOrder
    requirement?: SortOrder
    responsibilities?: SortOrder
    benifit?: SortOrder
    posted?: SortOrder
    openings?: SortOrder
    status?: SortOrder
    Department?: SortOrder
    employerId?: SortOrder
  }

  export type JobsMinOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    salary?: SortOrder
    experience?: SortOrder
    jobType?: SortOrder
    skills?: SortOrder
    jobDiscription?: SortOrder
    requirement?: SortOrder
    responsibilities?: SortOrder
    benifit?: SortOrder
    posted?: SortOrder
    openings?: SortOrder
    status?: SortOrder
    Department?: SortOrder
    employerId?: SortOrder
  }

  export type JobsSumOrderByAggregateInput = {
    id?: SortOrder
    experience?: SortOrder
    openings?: SortOrder
    employerId?: SortOrder
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type PersonalDetailsCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutUserInput
    connect?: PersonalDetailsWhereUniqueInput
  }

  export type appliedjobCreateNestedManyWithoutUserInput = {
    create?: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput> | appliedjobCreateWithoutUserInput[] | appliedjobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutUserInput | appliedjobCreateOrConnectWithoutUserInput[]
    createMany?: appliedjobCreateManyUserInputEnvelope
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type PersonalDetailsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutUserInput
    connect?: PersonalDetailsWhereUniqueInput
  }

  export type appliedjobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput> | appliedjobCreateWithoutUserInput[] | appliedjobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutUserInput | appliedjobCreateOrConnectWithoutUserInput[]
    createMany?: appliedjobCreateManyUserInputEnvelope
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PersonalDetailsUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutUserInput
    upsert?: PersonalDetailsUpsertWithoutUserInput
    disconnect?: PersonalDetailsWhereInput | boolean
    delete?: PersonalDetailsWhereInput | boolean
    connect?: PersonalDetailsWhereUniqueInput
    update?: XOR<XOR<PersonalDetailsUpdateToOneWithWhereWithoutUserInput, PersonalDetailsUpdateWithoutUserInput>, PersonalDetailsUncheckedUpdateWithoutUserInput>
  }

  export type appliedjobUpdateManyWithoutUserNestedInput = {
    create?: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput> | appliedjobCreateWithoutUserInput[] | appliedjobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutUserInput | appliedjobCreateOrConnectWithoutUserInput[]
    upsert?: appliedjobUpsertWithWhereUniqueWithoutUserInput | appliedjobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: appliedjobCreateManyUserInputEnvelope
    set?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    disconnect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    delete?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    update?: appliedjobUpdateWithWhereUniqueWithoutUserInput | appliedjobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: appliedjobUpdateManyWithWhereWithoutUserInput | appliedjobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutUserInput
    upsert?: PersonalDetailsUpsertWithoutUserInput
    disconnect?: PersonalDetailsWhereInput | boolean
    delete?: PersonalDetailsWhereInput | boolean
    connect?: PersonalDetailsWhereUniqueInput
    update?: XOR<XOR<PersonalDetailsUpdateToOneWithWhereWithoutUserInput, PersonalDetailsUpdateWithoutUserInput>, PersonalDetailsUncheckedUpdateWithoutUserInput>
  }

  export type appliedjobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput> | appliedjobCreateWithoutUserInput[] | appliedjobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutUserInput | appliedjobCreateOrConnectWithoutUserInput[]
    upsert?: appliedjobUpsertWithWhereUniqueWithoutUserInput | appliedjobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: appliedjobCreateManyUserInputEnvelope
    set?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    disconnect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    delete?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    update?: appliedjobUpdateWithWhereUniqueWithoutUserInput | appliedjobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: appliedjobUpdateManyWithWhereWithoutUserInput | appliedjobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppliedjobInput = {
    create?: XOR<UserCreateWithoutAppliedjobInput, UserUncheckedCreateWithoutAppliedjobInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppliedjobInput
    connect?: UserWhereUniqueInput
  }

  export type JobsCreateNestedOneWithoutAppliedjobInput = {
    create?: XOR<JobsCreateWithoutAppliedjobInput, JobsUncheckedCreateWithoutAppliedjobInput>
    connectOrCreate?: JobsCreateOrConnectWithoutAppliedjobInput
    connect?: JobsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAppliedjobNestedInput = {
    create?: XOR<UserCreateWithoutAppliedjobInput, UserUncheckedCreateWithoutAppliedjobInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppliedjobInput
    upsert?: UserUpsertWithoutAppliedjobInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppliedjobInput, UserUpdateWithoutAppliedjobInput>, UserUncheckedUpdateWithoutAppliedjobInput>
  }

  export type JobsUpdateOneRequiredWithoutAppliedjobNestedInput = {
    create?: XOR<JobsCreateWithoutAppliedjobInput, JobsUncheckedCreateWithoutAppliedjobInput>
    connectOrCreate?: JobsCreateOrConnectWithoutAppliedjobInput
    upsert?: JobsUpsertWithoutAppliedjobInput
    connect?: JobsWhereUniqueInput
    update?: XOR<XOR<JobsUpdateToOneWithWhereWithoutAppliedjobInput, JobsUpdateWithoutAppliedjobInput>, JobsUncheckedUpdateWithoutAppliedjobInput>
  }

  export type AdminActivityCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
  }

  export type AdminActivityUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
  }

  export type AdminActivityUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActivityUpsertWithWhereUniqueWithoutAdminInput | AdminActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    set?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    disconnect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    delete?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    update?: AdminActivityUpdateWithWhereUniqueWithoutAdminInput | AdminActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActivityUpdateManyWithWhereWithoutAdminInput | AdminActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
  }

  export type AdminActivityUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput> | AdminActivityCreateWithoutAdminInput[] | AdminActivityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminActivityCreateOrConnectWithoutAdminInput | AdminActivityCreateOrConnectWithoutAdminInput[]
    upsert?: AdminActivityUpsertWithWhereUniqueWithoutAdminInput | AdminActivityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminActivityCreateManyAdminInputEnvelope
    set?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    disconnect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    delete?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    connect?: AdminActivityWhereUniqueInput | AdminActivityWhereUniqueInput[]
    update?: AdminActivityUpdateWithWhereUniqueWithoutAdminInput | AdminActivityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminActivityUpdateManyWithWhereWithoutAdminInput | AdminActivityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
  }

  export type adminCreateNestedOneWithoutAdminActivityInput = {
    create?: XOR<adminCreateWithoutAdminActivityInput, adminUncheckedCreateWithoutAdminActivityInput>
    connectOrCreate?: adminCreateOrConnectWithoutAdminActivityInput
    connect?: adminWhereUniqueInput
  }

  export type adminUpdateOneRequiredWithoutAdminActivityNestedInput = {
    create?: XOR<adminCreateWithoutAdminActivityInput, adminUncheckedCreateWithoutAdminActivityInput>
    connectOrCreate?: adminCreateOrConnectWithoutAdminActivityInput
    upsert?: adminUpsertWithoutAdminActivityInput
    connect?: adminWhereUniqueInput
    update?: XOR<XOR<adminUpdateToOneWithWhereWithoutAdminActivityInput, adminUpdateWithoutAdminActivityInput>, adminUncheckedUpdateWithoutAdminActivityInput>
  }

  export type LanguageCreateNestedManyWithoutPersonalDetailsInput = {
    create?: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput> | LanguageCreateWithoutPersonalDetailsInput[] | LanguageUncheckedCreateWithoutPersonalDetailsInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutPersonalDetailsInput | LanguageCreateOrConnectWithoutPersonalDetailsInput[]
    createMany?: LanguageCreateManyPersonalDetailsInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPersonalDetailsInput = {
    create?: XOR<UserCreateWithoutPersonalDetailsInput, UserUncheckedCreateWithoutPersonalDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type LanguageUncheckedCreateNestedManyWithoutPersonalDetailsInput = {
    create?: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput> | LanguageCreateWithoutPersonalDetailsInput[] | LanguageUncheckedCreateWithoutPersonalDetailsInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutPersonalDetailsInput | LanguageCreateOrConnectWithoutPersonalDetailsInput[]
    createMany?: LanguageCreateManyPersonalDetailsInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type LanguageUpdateManyWithoutPersonalDetailsNestedInput = {
    create?: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput> | LanguageCreateWithoutPersonalDetailsInput[] | LanguageUncheckedCreateWithoutPersonalDetailsInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutPersonalDetailsInput | LanguageCreateOrConnectWithoutPersonalDetailsInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutPersonalDetailsInput | LanguageUpsertWithWhereUniqueWithoutPersonalDetailsInput[]
    createMany?: LanguageCreateManyPersonalDetailsInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutPersonalDetailsInput | LanguageUpdateWithWhereUniqueWithoutPersonalDetailsInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutPersonalDetailsInput | LanguageUpdateManyWithWhereWithoutPersonalDetailsInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPersonalDetailsNestedInput = {
    create?: XOR<UserCreateWithoutPersonalDetailsInput, UserUncheckedCreateWithoutPersonalDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPersonalDetailsInput
    upsert?: UserUpsertWithoutPersonalDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPersonalDetailsInput, UserUpdateWithoutPersonalDetailsInput>, UserUncheckedUpdateWithoutPersonalDetailsInput>
  }

  export type LanguageUncheckedUpdateManyWithoutPersonalDetailsNestedInput = {
    create?: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput> | LanguageCreateWithoutPersonalDetailsInput[] | LanguageUncheckedCreateWithoutPersonalDetailsInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutPersonalDetailsInput | LanguageCreateOrConnectWithoutPersonalDetailsInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutPersonalDetailsInput | LanguageUpsertWithWhereUniqueWithoutPersonalDetailsInput[]
    createMany?: LanguageCreateManyPersonalDetailsInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutPersonalDetailsInput | LanguageUpdateWithWhereUniqueWithoutPersonalDetailsInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutPersonalDetailsInput | LanguageUpdateManyWithWhereWithoutPersonalDetailsInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type PersonalDetailsCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<PersonalDetailsCreateWithoutLanguagesInput, PersonalDetailsUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutLanguagesInput
    connect?: PersonalDetailsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonalDetailsUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<PersonalDetailsCreateWithoutLanguagesInput, PersonalDetailsUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: PersonalDetailsCreateOrConnectWithoutLanguagesInput
    upsert?: PersonalDetailsUpsertWithoutLanguagesInput
    connect?: PersonalDetailsWhereUniqueInput
    update?: XOR<XOR<PersonalDetailsUpdateToOneWithWhereWithoutLanguagesInput, PersonalDetailsUpdateWithoutLanguagesInput>, PersonalDetailsUncheckedUpdateWithoutLanguagesInput>
  }

  export type UserCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    upsert?: UserUpsertWithoutEducationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEducationInput, UserUpdateWithoutEducationInput>, UserUncheckedUpdateWithoutEducationInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type JobsCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput> | JobsCreateWithoutEmployerInput[] | JobsUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutEmployerInput | JobsCreateOrConnectWithoutEmployerInput[]
    createMany?: JobsCreateManyEmployerInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type JobsUncheckedCreateNestedManyWithoutEmployerInput = {
    create?: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput> | JobsCreateWithoutEmployerInput[] | JobsUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutEmployerInput | JobsCreateOrConnectWithoutEmployerInput[]
    createMany?: JobsCreateManyEmployerInputEnvelope
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
  }

  export type JobsUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput> | JobsCreateWithoutEmployerInput[] | JobsUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutEmployerInput | JobsCreateOrConnectWithoutEmployerInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutEmployerInput | JobsUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobsCreateManyEmployerInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutEmployerInput | JobsUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutEmployerInput | JobsUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type JobsUncheckedUpdateManyWithoutEmployerNestedInput = {
    create?: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput> | JobsCreateWithoutEmployerInput[] | JobsUncheckedCreateWithoutEmployerInput[]
    connectOrCreate?: JobsCreateOrConnectWithoutEmployerInput | JobsCreateOrConnectWithoutEmployerInput[]
    upsert?: JobsUpsertWithWhereUniqueWithoutEmployerInput | JobsUpsertWithWhereUniqueWithoutEmployerInput[]
    createMany?: JobsCreateManyEmployerInputEnvelope
    set?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    disconnect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    delete?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    connect?: JobsWhereUniqueInput | JobsWhereUniqueInput[]
    update?: JobsUpdateWithWhereUniqueWithoutEmployerInput | JobsUpdateWithWhereUniqueWithoutEmployerInput[]
    updateMany?: JobsUpdateManyWithWhereWithoutEmployerInput | JobsUpdateManyWithWhereWithoutEmployerInput[]
    deleteMany?: JobsScalarWhereInput | JobsScalarWhereInput[]
  }

  export type EmployerCreateNestedOneWithoutJobsInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    connect?: EmployerWhereUniqueInput
  }

  export type appliedjobCreateNestedManyWithoutJobsInput = {
    create?: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput> | appliedjobCreateWithoutJobsInput[] | appliedjobUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutJobsInput | appliedjobCreateOrConnectWithoutJobsInput[]
    createMany?: appliedjobCreateManyJobsInputEnvelope
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
  }

  export type appliedjobUncheckedCreateNestedManyWithoutJobsInput = {
    create?: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput> | appliedjobCreateWithoutJobsInput[] | appliedjobUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutJobsInput | appliedjobCreateOrConnectWithoutJobsInput[]
    createMany?: appliedjobCreateManyJobsInputEnvelope
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
  }

  export type EmployerUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    connectOrCreate?: EmployerCreateOrConnectWithoutJobsInput
    upsert?: EmployerUpsertWithoutJobsInput
    connect?: EmployerWhereUniqueInput
    update?: XOR<XOR<EmployerUpdateToOneWithWhereWithoutJobsInput, EmployerUpdateWithoutJobsInput>, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type appliedjobUpdateManyWithoutJobsNestedInput = {
    create?: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput> | appliedjobCreateWithoutJobsInput[] | appliedjobUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutJobsInput | appliedjobCreateOrConnectWithoutJobsInput[]
    upsert?: appliedjobUpsertWithWhereUniqueWithoutJobsInput | appliedjobUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: appliedjobCreateManyJobsInputEnvelope
    set?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    disconnect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    delete?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    update?: appliedjobUpdateWithWhereUniqueWithoutJobsInput | appliedjobUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: appliedjobUpdateManyWithWhereWithoutJobsInput | appliedjobUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
  }

  export type appliedjobUncheckedUpdateManyWithoutJobsNestedInput = {
    create?: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput> | appliedjobCreateWithoutJobsInput[] | appliedjobUncheckedCreateWithoutJobsInput[]
    connectOrCreate?: appliedjobCreateOrConnectWithoutJobsInput | appliedjobCreateOrConnectWithoutJobsInput[]
    upsert?: appliedjobUpsertWithWhereUniqueWithoutJobsInput | appliedjobUpsertWithWhereUniqueWithoutJobsInput[]
    createMany?: appliedjobCreateManyJobsInputEnvelope
    set?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    disconnect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    delete?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    connect?: appliedjobWhereUniqueInput | appliedjobWhereUniqueInput[]
    update?: appliedjobUpdateWithWhereUniqueWithoutJobsInput | appliedjobUpdateWithWhereUniqueWithoutJobsInput[]
    updateMany?: appliedjobUpdateManyWithWhereWithoutJobsInput | appliedjobUpdateManyWithWhereWithoutJobsInput[]
    deleteMany?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EducationCreateWithoutUserInput = {
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: number
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: EducationCreateManyUserInput | EducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutUserInput = {
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PersonalDetailsCreateWithoutUserInput = {
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    languages?: LanguageCreateNestedManyWithoutPersonalDetailsInput
  }

  export type PersonalDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    languages?: LanguageUncheckedCreateNestedManyWithoutPersonalDetailsInput
  }

  export type PersonalDetailsCreateOrConnectWithoutUserInput = {
    where: PersonalDetailsWhereUniqueInput
    create: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
  }

  export type appliedjobCreateWithoutUserInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
    jobs: JobsCreateNestedOneWithoutAppliedjobInput
  }

  export type appliedjobUncheckedCreateWithoutUserInput = {
    id?: number
    jobsId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type appliedjobCreateOrConnectWithoutUserInput = {
    where: appliedjobWhereUniqueInput
    create: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput>
  }

  export type appliedjobCreateManyUserInputEnvelope = {
    data: appliedjobCreateManyUserInput | appliedjobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: IntFilter<"Education"> | number
    education?: StringFilter<"Education"> | string
    university?: StringFilter<"Education"> | string
    course?: StringFilter<"Education"> | string
    specialization?: StringFilter<"Education"> | string
    startingYear?: StringFilter<"Education"> | string
    endingYear?: StringFilter<"Education"> | string
    userId?: IntFilter<"Education"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    userId?: IntFilter<"Project"> | number
    projectTitle?: StringFilter<"Project"> | string
    client?: StringNullableFilter<"Project"> | string | null
    projectEmployment?: StringNullableFilter<"Project"> | string | null
    projectStatus?: StringNullableFilter<"Project"> | string | null
    startYear?: StringNullableFilter<"Project"> | string | null
    startMonth?: StringNullableFilter<"Project"> | string | null
    endYear?: StringNullableFilter<"Project"> | string | null
    endMonth?: StringNullableFilter<"Project"> | string | null
    projectSite?: StringNullableFilter<"Project"> | string | null
    employmentNature?: StringNullableFilter<"Project"> | string | null
    teamSize?: IntNullableFilter<"Project"> | number | null
    role?: StringNullableFilter<"Project"> | string | null
    skills?: StringNullableFilter<"Project"> | string | null
  }

  export type PersonalDetailsUpsertWithoutUserInput = {
    update: XOR<PersonalDetailsUpdateWithoutUserInput, PersonalDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<PersonalDetailsCreateWithoutUserInput, PersonalDetailsUncheckedCreateWithoutUserInput>
    where?: PersonalDetailsWhereInput
  }

  export type PersonalDetailsUpdateToOneWithWhereWithoutUserInput = {
    where?: PersonalDetailsWhereInput
    data: XOR<PersonalDetailsUpdateWithoutUserInput, PersonalDetailsUncheckedUpdateWithoutUserInput>
  }

  export type PersonalDetailsUpdateWithoutUserInput = {
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    languages?: LanguageUpdateManyWithoutPersonalDetailsNestedInput
  }

  export type PersonalDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    languages?: LanguageUncheckedUpdateManyWithoutPersonalDetailsNestedInput
  }

  export type appliedjobUpsertWithWhereUniqueWithoutUserInput = {
    where: appliedjobWhereUniqueInput
    update: XOR<appliedjobUpdateWithoutUserInput, appliedjobUncheckedUpdateWithoutUserInput>
    create: XOR<appliedjobCreateWithoutUserInput, appliedjobUncheckedCreateWithoutUserInput>
  }

  export type appliedjobUpdateWithWhereUniqueWithoutUserInput = {
    where: appliedjobWhereUniqueInput
    data: XOR<appliedjobUpdateWithoutUserInput, appliedjobUncheckedUpdateWithoutUserInput>
  }

  export type appliedjobUpdateManyWithWhereWithoutUserInput = {
    where: appliedjobScalarWhereInput
    data: XOR<appliedjobUpdateManyMutationInput, appliedjobUncheckedUpdateManyWithoutUserInput>
  }

  export type appliedjobScalarWhereInput = {
    AND?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
    OR?: appliedjobScalarWhereInput[]
    NOT?: appliedjobScalarWhereInput | appliedjobScalarWhereInput[]
    id?: IntFilter<"appliedjob"> | number
    userId?: IntFilter<"appliedjob"> | number
    jobsId?: IntFilter<"appliedjob"> | number
    firstName?: StringFilter<"appliedjob"> | string
    lastName?: StringFilter<"appliedjob"> | string
    email?: StringFilter<"appliedjob"> | string
    phone?: StringFilter<"appliedjob"> | string
    position?: StringFilter<"appliedjob"> | string
    city?: StringFilter<"appliedjob"> | string
    state?: StringFilter<"appliedjob"> | string
    experience?: StringFilter<"appliedjob"> | string
    education?: StringFilter<"appliedjob"> | string
    degree?: StringFilter<"appliedjob"> | string
    university?: StringFilter<"appliedjob"> | string
    graduationYear?: IntFilter<"appliedjob"> | number
    resume?: StringFilter<"appliedjob"> | string
    photo?: StringFilter<"appliedjob"> | string
    coverLetter?: StringFilter<"appliedjob"> | string
    portfolio?: StringFilter<"appliedjob"> | string
    skills?: StringFilter<"appliedjob"> | string
    availability?: StringFilter<"appliedjob"> | string
    salary?: IntFilter<"appliedjob"> | number
    appliedAt?: DateTimeFilter<"appliedjob"> | Date | string
    status?: StringFilter<"appliedjob"> | string
  }

  export type UserCreateWithoutAppliedjobInput = {
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppliedjobInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppliedjobInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppliedjobInput, UserUncheckedCreateWithoutAppliedjobInput>
  }

  export type JobsCreateWithoutAppliedjobInput = {
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    employer: EmployerCreateNestedOneWithoutJobsInput
  }

  export type JobsUncheckedCreateWithoutAppliedjobInput = {
    id?: number
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    employerId: number
  }

  export type JobsCreateOrConnectWithoutAppliedjobInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutAppliedjobInput, JobsUncheckedCreateWithoutAppliedjobInput>
  }

  export type UserUpsertWithoutAppliedjobInput = {
    update: XOR<UserUpdateWithoutAppliedjobInput, UserUncheckedUpdateWithoutAppliedjobInput>
    create: XOR<UserCreateWithoutAppliedjobInput, UserUncheckedCreateWithoutAppliedjobInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppliedjobInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppliedjobInput, UserUncheckedUpdateWithoutAppliedjobInput>
  }

  export type UserUpdateWithoutAppliedjobInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppliedjobInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type JobsUpsertWithoutAppliedjobInput = {
    update: XOR<JobsUpdateWithoutAppliedjobInput, JobsUncheckedUpdateWithoutAppliedjobInput>
    create: XOR<JobsCreateWithoutAppliedjobInput, JobsUncheckedCreateWithoutAppliedjobInput>
    where?: JobsWhereInput
  }

  export type JobsUpdateToOneWithWhereWithoutAppliedjobInput = {
    where?: JobsWhereInput
    data: XOR<JobsUpdateWithoutAppliedjobInput, JobsUncheckedUpdateWithoutAppliedjobInput>
  }

  export type JobsUpdateWithoutAppliedjobInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    employer?: EmployerUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobsUncheckedUpdateWithoutAppliedjobInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    employerId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminActivityCreateWithoutAdminInput = {
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
  }

  export type AdminActivityUncheckedCreateWithoutAdminInput = {
    id?: number
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
  }

  export type AdminActivityCreateOrConnectWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    create: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput>
  }

  export type AdminActivityCreateManyAdminInputEnvelope = {
    data: AdminActivityCreateManyAdminInput | AdminActivityCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AdminActivityUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    update: XOR<AdminActivityUpdateWithoutAdminInput, AdminActivityUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminActivityCreateWithoutAdminInput, AdminActivityUncheckedCreateWithoutAdminInput>
  }

  export type AdminActivityUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminActivityWhereUniqueInput
    data: XOR<AdminActivityUpdateWithoutAdminInput, AdminActivityUncheckedUpdateWithoutAdminInput>
  }

  export type AdminActivityUpdateManyWithWhereWithoutAdminInput = {
    where: AdminActivityScalarWhereInput
    data: XOR<AdminActivityUpdateManyMutationInput, AdminActivityUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminActivityScalarWhereInput = {
    AND?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
    OR?: AdminActivityScalarWhereInput[]
    NOT?: AdminActivityScalarWhereInput | AdminActivityScalarWhereInput[]
    id?: IntFilter<"AdminActivity"> | number
    adminId?: IntFilter<"AdminActivity"> | number
    action?: StringFilter<"AdminActivity"> | string
    targetType?: StringFilter<"AdminActivity"> | string
    targetId?: IntFilter<"AdminActivity"> | number
    timestamp?: DateTimeFilter<"AdminActivity"> | Date | string
  }

  export type adminCreateWithoutAdminActivityInput = {
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type adminUncheckedCreateWithoutAdminActivityInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type adminCreateOrConnectWithoutAdminActivityInput = {
    where: adminWhereUniqueInput
    create: XOR<adminCreateWithoutAdminActivityInput, adminUncheckedCreateWithoutAdminActivityInput>
  }

  export type adminUpsertWithoutAdminActivityInput = {
    update: XOR<adminUpdateWithoutAdminActivityInput, adminUncheckedUpdateWithoutAdminActivityInput>
    create: XOR<adminCreateWithoutAdminActivityInput, adminUncheckedCreateWithoutAdminActivityInput>
    where?: adminWhereInput
  }

  export type adminUpdateToOneWithWhereWithoutAdminActivityInput = {
    where?: adminWhereInput
    data: XOR<adminUpdateWithoutAdminActivityInput, adminUncheckedUpdateWithoutAdminActivityInput>
  }

  export type adminUpdateWithoutAdminActivityInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adminUncheckedUpdateWithoutAdminActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LanguageCreateWithoutPersonalDetailsInput = {
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
  }

  export type LanguageUncheckedCreateWithoutPersonalDetailsInput = {
    id?: number
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
  }

  export type LanguageCreateOrConnectWithoutPersonalDetailsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput>
  }

  export type LanguageCreateManyPersonalDetailsInputEnvelope = {
    data: LanguageCreateManyPersonalDetailsInput | LanguageCreateManyPersonalDetailsInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPersonalDetailsInput = {
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    appliedjob?: appliedjobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPersonalDetailsInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPersonalDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPersonalDetailsInput, UserUncheckedCreateWithoutPersonalDetailsInput>
  }

  export type LanguageUpsertWithWhereUniqueWithoutPersonalDetailsInput = {
    where: LanguageWhereUniqueInput
    update: XOR<LanguageUpdateWithoutPersonalDetailsInput, LanguageUncheckedUpdateWithoutPersonalDetailsInput>
    create: XOR<LanguageCreateWithoutPersonalDetailsInput, LanguageUncheckedCreateWithoutPersonalDetailsInput>
  }

  export type LanguageUpdateWithWhereUniqueWithoutPersonalDetailsInput = {
    where: LanguageWhereUniqueInput
    data: XOR<LanguageUpdateWithoutPersonalDetailsInput, LanguageUncheckedUpdateWithoutPersonalDetailsInput>
  }

  export type LanguageUpdateManyWithWhereWithoutPersonalDetailsInput = {
    where: LanguageScalarWhereInput
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyWithoutPersonalDetailsInput>
  }

  export type LanguageScalarWhereInput = {
    AND?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    OR?: LanguageScalarWhereInput[]
    NOT?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    id?: IntFilter<"Language"> | number
    personalDetailsId?: IntFilter<"Language"> | number
    language?: StringFilter<"Language"> | string
    proficiency?: StringFilter<"Language"> | string
    read?: BoolFilter<"Language"> | boolean
    write?: BoolFilter<"Language"> | boolean
    speak?: BoolFilter<"Language"> | boolean
  }

  export type UserUpsertWithoutPersonalDetailsInput = {
    update: XOR<UserUpdateWithoutPersonalDetailsInput, UserUncheckedUpdateWithoutPersonalDetailsInput>
    create: XOR<UserCreateWithoutPersonalDetailsInput, UserUncheckedCreateWithoutPersonalDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPersonalDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPersonalDetailsInput, UserUncheckedUpdateWithoutPersonalDetailsInput>
  }

  export type UserUpdateWithoutPersonalDetailsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    appliedjob?: appliedjobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPersonalDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    appliedjob?: appliedjobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PersonalDetailsCreateWithoutLanguagesInput = {
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
    user: UserCreateNestedOneWithoutPersonalDetailsInput
  }

  export type PersonalDetailsUncheckedCreateWithoutLanguagesInput = {
    id?: number
    userId: number
    gender: string
    maritalStatus: string
    dob: string
    category: string
    differentlyAbled: string
    careerBreak: string
    address: string
    hometown: string
    pincode: string
  }

  export type PersonalDetailsCreateOrConnectWithoutLanguagesInput = {
    where: PersonalDetailsWhereUniqueInput
    create: XOR<PersonalDetailsCreateWithoutLanguagesInput, PersonalDetailsUncheckedCreateWithoutLanguagesInput>
  }

  export type PersonalDetailsUpsertWithoutLanguagesInput = {
    update: XOR<PersonalDetailsUpdateWithoutLanguagesInput, PersonalDetailsUncheckedUpdateWithoutLanguagesInput>
    create: XOR<PersonalDetailsCreateWithoutLanguagesInput, PersonalDetailsUncheckedCreateWithoutLanguagesInput>
    where?: PersonalDetailsWhereInput
  }

  export type PersonalDetailsUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: PersonalDetailsWhereInput
    data: XOR<PersonalDetailsUpdateWithoutLanguagesInput, PersonalDetailsUncheckedUpdateWithoutLanguagesInput>
  }

  export type PersonalDetailsUpdateWithoutLanguagesInput = {
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPersonalDetailsNestedInput
  }

  export type PersonalDetailsUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    differentlyAbled?: StringFieldUpdateOperationsInput | string
    careerBreak?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hometown?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutEducationInput = {
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    projects?: ProjectCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEducationInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsUncheckedCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEducationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
  }

  export type UserUpsertWithoutEducationInput = {
    update: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEducationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
  }

  export type UserUpdateWithoutEducationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    fullName: string
    email: string
    password: string
    joinDate?: Date | string
    jobapplied?: number | null
    status?: string
    mobile: string
    workStatus: string
    heading?: string | null
    keySkills?: string | null
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    personalDetails?: PersonalDetailsUncheckedCreateNestedOneWithoutUserInput
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    jobapplied?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    workStatus?: StringFieldUpdateOperationsInput | string
    heading?: NullableStringFieldUpdateOperationsInput | string | null
    keySkills?: NullableStringFieldUpdateOperationsInput | string | null
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    personalDetails?: PersonalDetailsUncheckedUpdateOneWithoutUserNestedInput
    appliedjob?: appliedjobUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobsCreateWithoutEmployerInput = {
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    appliedjob?: appliedjobCreateNestedManyWithoutJobsInput
  }

  export type JobsUncheckedCreateWithoutEmployerInput = {
    id?: number
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
    appliedjob?: appliedjobUncheckedCreateNestedManyWithoutJobsInput
  }

  export type JobsCreateOrConnectWithoutEmployerInput = {
    where: JobsWhereUniqueInput
    create: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput>
  }

  export type JobsCreateManyEmployerInputEnvelope = {
    data: JobsCreateManyEmployerInput | JobsCreateManyEmployerInput[]
    skipDuplicates?: boolean
  }

  export type JobsUpsertWithWhereUniqueWithoutEmployerInput = {
    where: JobsWhereUniqueInput
    update: XOR<JobsUpdateWithoutEmployerInput, JobsUncheckedUpdateWithoutEmployerInput>
    create: XOR<JobsCreateWithoutEmployerInput, JobsUncheckedCreateWithoutEmployerInput>
  }

  export type JobsUpdateWithWhereUniqueWithoutEmployerInput = {
    where: JobsWhereUniqueInput
    data: XOR<JobsUpdateWithoutEmployerInput, JobsUncheckedUpdateWithoutEmployerInput>
  }

  export type JobsUpdateManyWithWhereWithoutEmployerInput = {
    where: JobsScalarWhereInput
    data: XOR<JobsUpdateManyMutationInput, JobsUncheckedUpdateManyWithoutEmployerInput>
  }

  export type JobsScalarWhereInput = {
    AND?: JobsScalarWhereInput | JobsScalarWhereInput[]
    OR?: JobsScalarWhereInput[]
    NOT?: JobsScalarWhereInput | JobsScalarWhereInput[]
    id?: IntFilter<"Jobs"> | number
    jobTitle?: StringFilter<"Jobs"> | string
    companyName?: StringNullableFilter<"Jobs"> | string | null
    location?: StringFilter<"Jobs"> | string
    salary?: StringFilter<"Jobs"> | string
    experience?: IntFilter<"Jobs"> | number
    jobType?: StringFilter<"Jobs"> | string
    skills?: StringFilter<"Jobs"> | string
    jobDiscription?: StringFilter<"Jobs"> | string
    requirement?: StringFilter<"Jobs"> | string
    responsibilities?: StringNullableFilter<"Jobs"> | string | null
    benifit?: StringFilter<"Jobs"> | string
    posted?: DateTimeFilter<"Jobs"> | Date | string
    openings?: IntFilter<"Jobs"> | number
    status?: StringFilter<"Jobs"> | string
    Department?: StringFilter<"Jobs"> | string
    employerId?: IntFilter<"Jobs"> | number
  }

  export type EmployerCreateWithoutJobsInput = {
    officialEmail: string
    loginEmail: string
    fullName?: string | null
    password?: string | null
    companyname?: string | null
    hiringfor?: string | null
    industry?: string | null
    employes?: number | null
    designation?: string | null
    reportingmanager?: string | null
    mobile?: string | null
    companyType?: string | null
    industryType?: string | null
    contactPerson?: string | null
    alias?: string | null
    website?: string | null
    classified?: string | null
    noOfEmployes?: string | null
    aboutus?: string | null
    discription?: string | null
    phone1?: string | null
    phone2?: string | null
    fax?: string | null
    tan?: string | null
    linkedin?: string | null
    facebook?: string | null
    twitter?: string | null
    others?: string | null
    pincode?: number | null
    joinDate?: Date | string
    companyaddress?: string | null
    status?: string
  }

  export type EmployerUncheckedCreateWithoutJobsInput = {
    id?: number
    officialEmail: string
    loginEmail: string
    fullName?: string | null
    password?: string | null
    companyname?: string | null
    hiringfor?: string | null
    industry?: string | null
    employes?: number | null
    designation?: string | null
    reportingmanager?: string | null
    mobile?: string | null
    companyType?: string | null
    industryType?: string | null
    contactPerson?: string | null
    alias?: string | null
    website?: string | null
    classified?: string | null
    noOfEmployes?: string | null
    aboutus?: string | null
    discription?: string | null
    phone1?: string | null
    phone2?: string | null
    fax?: string | null
    tan?: string | null
    linkedin?: string | null
    facebook?: string | null
    twitter?: string | null
    others?: string | null
    pincode?: number | null
    joinDate?: Date | string
    companyaddress?: string | null
    status?: string
  }

  export type EmployerCreateOrConnectWithoutJobsInput = {
    where: EmployerWhereUniqueInput
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
  }

  export type appliedjobCreateWithoutJobsInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutAppliedjobInput
  }

  export type appliedjobUncheckedCreateWithoutJobsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type appliedjobCreateOrConnectWithoutJobsInput = {
    where: appliedjobWhereUniqueInput
    create: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput>
  }

  export type appliedjobCreateManyJobsInputEnvelope = {
    data: appliedjobCreateManyJobsInput | appliedjobCreateManyJobsInput[]
    skipDuplicates?: boolean
  }

  export type EmployerUpsertWithoutJobsInput = {
    update: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
    create: XOR<EmployerCreateWithoutJobsInput, EmployerUncheckedCreateWithoutJobsInput>
    where?: EmployerWhereInput
  }

  export type EmployerUpdateToOneWithWhereWithoutJobsInput = {
    where?: EmployerWhereInput
    data: XOR<EmployerUpdateWithoutJobsInput, EmployerUncheckedUpdateWithoutJobsInput>
  }

  export type EmployerUpdateWithoutJobsInput = {
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployerUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    officialEmail?: StringFieldUpdateOperationsInput | string
    loginEmail?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    companyname?: NullableStringFieldUpdateOperationsInput | string | null
    hiringfor?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    employes?: NullableIntFieldUpdateOperationsInput | number | null
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    reportingmanager?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    companyType?: NullableStringFieldUpdateOperationsInput | string | null
    industryType?: NullableStringFieldUpdateOperationsInput | string | null
    contactPerson?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    classified?: NullableStringFieldUpdateOperationsInput | string | null
    noOfEmployes?: NullableStringFieldUpdateOperationsInput | string | null
    aboutus?: NullableStringFieldUpdateOperationsInput | string | null
    discription?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    fax?: NullableStringFieldUpdateOperationsInput | string | null
    tan?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    others?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableIntFieldUpdateOperationsInput | number | null
    joinDate?: DateTimeFieldUpdateOperationsInput | Date | string
    companyaddress?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobUpsertWithWhereUniqueWithoutJobsInput = {
    where: appliedjobWhereUniqueInput
    update: XOR<appliedjobUpdateWithoutJobsInput, appliedjobUncheckedUpdateWithoutJobsInput>
    create: XOR<appliedjobCreateWithoutJobsInput, appliedjobUncheckedCreateWithoutJobsInput>
  }

  export type appliedjobUpdateWithWhereUniqueWithoutJobsInput = {
    where: appliedjobWhereUniqueInput
    data: XOR<appliedjobUpdateWithoutJobsInput, appliedjobUncheckedUpdateWithoutJobsInput>
  }

  export type appliedjobUpdateManyWithWhereWithoutJobsInput = {
    where: appliedjobScalarWhereInput
    data: XOR<appliedjobUpdateManyMutationInput, appliedjobUncheckedUpdateManyWithoutJobsInput>
  }

  export type EducationCreateManyUserInput = {
    id?: number
    education: string
    university: string
    course: string
    specialization: string
    startingYear: string
    endingYear: string
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    projectTitle: string
    client?: string | null
    projectEmployment?: string | null
    projectStatus?: string | null
    startYear?: string | null
    startMonth?: string | null
    endYear?: string | null
    endMonth?: string | null
    projectSite?: string | null
    employmentNature?: string | null
    teamSize?: number | null
    role?: string | null
    skills?: string | null
  }

  export type appliedjobCreateManyUserInput = {
    id?: number
    jobsId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type EducationUpdateWithoutUserInput = {
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    education?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    startingYear?: StringFieldUpdateOperationsInput | string
    endingYear?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpdateWithoutUserInput = {
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectTitle?: StringFieldUpdateOperationsInput | string
    client?: NullableStringFieldUpdateOperationsInput | string | null
    projectEmployment?: NullableStringFieldUpdateOperationsInput | string | null
    projectStatus?: NullableStringFieldUpdateOperationsInput | string | null
    startYear?: NullableStringFieldUpdateOperationsInput | string | null
    startMonth?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    endMonth?: NullableStringFieldUpdateOperationsInput | string | null
    projectSite?: NullableStringFieldUpdateOperationsInput | string | null
    employmentNature?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type appliedjobUpdateWithoutUserInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    jobs?: JobsUpdateOneRequiredWithoutAppliedjobNestedInput
  }

  export type appliedjobUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobsId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobsId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AdminActivityCreateManyAdminInput = {
    id?: number
    action: string
    targetType: string
    targetId: number
    timestamp?: Date | string
  }

  export type AdminActivityUpdateWithoutAdminInput = {
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminActivityUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    targetType?: StringFieldUpdateOperationsInput | string
    targetId?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateManyPersonalDetailsInput = {
    id?: number
    language: string
    proficiency: string
    read: boolean
    write: boolean
    speak: boolean
  }

  export type LanguageUpdateWithoutPersonalDetailsInput = {
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateWithoutPersonalDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LanguageUncheckedUpdateManyWithoutPersonalDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    proficiency?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    write?: BoolFieldUpdateOperationsInput | boolean
    speak?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobsCreateManyEmployerInput = {
    id?: number
    jobTitle: string
    companyName?: string | null
    location: string
    salary: string
    experience: number
    jobType: string
    skills: string
    jobDiscription: string
    requirement: string
    responsibilities?: string | null
    benifit: string
    posted?: Date | string
    openings: number
    status?: string
    Department: string
  }

  export type JobsUpdateWithoutEmployerInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    appliedjob?: appliedjobUpdateManyWithoutJobsNestedInput
  }

  export type JobsUncheckedUpdateWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
    appliedjob?: appliedjobUncheckedUpdateManyWithoutJobsNestedInput
  }

  export type JobsUncheckedUpdateManyWithoutEmployerInput = {
    id?: IntFieldUpdateOperationsInput | number
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: StringFieldUpdateOperationsInput | string
    salary?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    jobType?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    jobDiscription?: StringFieldUpdateOperationsInput | string
    requirement?: StringFieldUpdateOperationsInput | string
    responsibilities?: NullableStringFieldUpdateOperationsInput | string | null
    benifit?: StringFieldUpdateOperationsInput | string
    posted?: DateTimeFieldUpdateOperationsInput | Date | string
    openings?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    Department?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobCreateManyJobsInput = {
    id?: number
    userId: number
    firstName: string
    lastName: string
    email: string
    phone: string
    position: string
    city: string
    state: string
    experience: string
    education: string
    degree: string
    university: string
    graduationYear: number
    resume: string
    photo: string
    coverLetter: string
    portfolio: string
    skills: string
    availability: string
    salary: number
    appliedAt?: Date | string
    status?: string
  }

  export type appliedjobUpdateWithoutJobsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAppliedjobNestedInput
  }

  export type appliedjobUncheckedUpdateWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type appliedjobUncheckedUpdateManyWithoutJobsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    education?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    university?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    resume?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    coverLetter?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    salary?: IntFieldUpdateOperationsInput | number
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}