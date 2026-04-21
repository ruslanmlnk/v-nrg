import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: Record<string, unknown>; output: Record<string, unknown>; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Query = {
  __typename?: 'Query';
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  countUsers?: Maybe<CountUsers>;
  docAccessUser?: Maybe<UsersDocAccess>;
  meUser?: Maybe<UsersMe>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  Media?: Maybe<Media>;
  allMedia?: Maybe<AllMedia>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  Review?: Maybe<Review>;
  Reviews?: Maybe<Reviews>;
  countReviews?: Maybe<CountReviews>;
  docAccessReview?: Maybe<ReviewsDocAccess>;
  Product?: Maybe<Product>;
  Products?: Maybe<Products>;
  countProducts?: Maybe<CountProducts>;
  docAccessProduct?: Maybe<ProductsDocAccess>;
  Category?: Maybe<Category>;
  Categories?: Maybe<Categories>;
  countCategories?: Maybe<CountCategories>;
  docAccessCategory?: Maybe<CategoryDocAccess>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  countPayloadKvs?: Maybe<CountPayloadKvs>;
  docAccessPayloadKv?: Maybe<Payload_KvDocAccess>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  Access?: Maybe<Access>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMediaArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Review_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Review_Where>;
};


export type QueryDocAccessReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
};


export type QueryDocAccessProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Category_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadKvArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: User_Role;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
};

export enum User_Role {
  Admin = 'admin',
  User = 'user',
  Dealer = 'dealer'
}

export type User_Sessions = {
  __typename?: 'User_Sessions';
  id?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type User_Where = {
  firstName?: InputMaybe<User_FirstName_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  phone?: InputMaybe<User_Phone_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
};

export type User_FirstName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_LastName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Phone_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Role_Operator = {
  equals?: InputMaybe<User_Role_Input>;
  not_equals?: InputMaybe<User_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export enum User_Role_Input {
  Admin = 'admin',
  User = 'user',
  Dealer = 'dealer'
}

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Email_Operator = {
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Sessions__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Where_And = {
  firstName?: InputMaybe<User_FirstName_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  phone?: InputMaybe<User_Phone_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
};

export type User_Where_Or = {
  firstName?: InputMaybe<User_FirstName_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  phone?: InputMaybe<User_Phone_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  fields?: Maybe<UsersDocAccessFields>;
  create?: Maybe<UsersCreateDocAccess>;
  read?: Maybe<UsersReadDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  firstName?: Maybe<UsersDocAccessFields_FirstName>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  phone?: Maybe<UsersDocAccessFields_Phone>;
  role?: Maybe<UsersDocAccessFields_Role>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
};

export type UsersDocAccessFields_FirstName = {
  __typename?: 'UsersDocAccessFields_firstName';
  create?: Maybe<UsersDocAccessFields_FirstName_Create>;
  read?: Maybe<UsersDocAccessFields_FirstName_Read>;
  update?: Maybe<UsersDocAccessFields_FirstName_Update>;
  delete?: Maybe<UsersDocAccessFields_FirstName_Delete>;
};

export type UsersDocAccessFields_FirstName_Create = {
  __typename?: 'UsersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Read = {
  __typename?: 'UsersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Update = {
  __typename?: 'UsersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FirstName_Delete = {
  __typename?: 'UsersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Phone = {
  __typename?: 'UsersDocAccessFields_phone';
  create?: Maybe<UsersDocAccessFields_Phone_Create>;
  read?: Maybe<UsersDocAccessFields_Phone_Read>;
  update?: Maybe<UsersDocAccessFields_Phone_Update>;
  delete?: Maybe<UsersDocAccessFields_Phone_Delete>;
};

export type UsersDocAccessFields_Phone_Create = {
  __typename?: 'UsersDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Phone_Read = {
  __typename?: 'UsersDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Phone_Update = {
  __typename?: 'UsersDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Phone_Delete = {
  __typename?: 'UsersDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role = {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_Role_Create>;
  read?: Maybe<UsersDocAccessFields_Role_Read>;
  update?: Maybe<UsersDocAccessFields_Role_Update>;
  delete?: Maybe<UsersDocAccessFields_Role_Delete>;
};

export type UsersDocAccessFields_Role_Create = {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Read = {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Update = {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Delete = {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Media = {
  __typename?: 'Media';
  id: Scalars['Int']['output'];
  alt: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Media_Where = {
  alt?: InputMaybe<Media_Alt_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
};

export type Media_Alt_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Url_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Filename_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_MimeType_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Media_Where_And = {
  alt?: InputMaybe<Media_Alt_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
};

export type Media_Where_Or = {
  alt?: InputMaybe<Media_Alt_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  fields?: Maybe<MediaDocAccessFields>;
  create?: Maybe<MediaCreateDocAccess>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  width?: Maybe<MediaDocAccessFields_Width>;
  height?: Maybe<MediaDocAccessFields_Height>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['Int']['output'];
  avatar?: Maybe<Media>;
  text?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Reviews = {
  __typename?: 'Reviews';
  docs: Array<Review>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Review_Where = {
  avatar?: InputMaybe<Review_Avatar_Operator>;
  text?: InputMaybe<Review_Text_Operator>;
  name?: InputMaybe<Review_Name_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
};

export type Review_Avatar_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Review_Text_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Review_Name_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Review_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Review_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Review_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Review_Where_And = {
  avatar?: InputMaybe<Review_Avatar_Operator>;
  text?: InputMaybe<Review_Text_Operator>;
  name?: InputMaybe<Review_Name_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
};

export type Review_Where_Or = {
  avatar?: InputMaybe<Review_Avatar_Operator>;
  text?: InputMaybe<Review_Text_Operator>;
  name?: InputMaybe<Review_Name_Operator>;
  updatedAt?: InputMaybe<Review_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Review_CreatedAt_Operator>;
  id?: InputMaybe<Review_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Review_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Review_Where_Or>>>;
};

export type CountReviews = {
  __typename?: 'countReviews';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ReviewsDocAccess = {
  __typename?: 'reviewsDocAccess';
  fields?: Maybe<ReviewsDocAccessFields>;
  create?: Maybe<ReviewsCreateDocAccess>;
  read?: Maybe<ReviewsReadDocAccess>;
  update?: Maybe<ReviewsUpdateDocAccess>;
  delete?: Maybe<ReviewsDeleteDocAccess>;
};

export type ReviewsDocAccessFields = {
  __typename?: 'ReviewsDocAccessFields';
  avatar?: Maybe<ReviewsDocAccessFields_Avatar>;
  text?: Maybe<ReviewsDocAccessFields_Text>;
  name?: Maybe<ReviewsDocAccessFields_Name>;
  updatedAt?: Maybe<ReviewsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<ReviewsDocAccessFields_CreatedAt>;
};

export type ReviewsDocAccessFields_Avatar = {
  __typename?: 'ReviewsDocAccessFields_avatar';
  create?: Maybe<ReviewsDocAccessFields_Avatar_Create>;
  read?: Maybe<ReviewsDocAccessFields_Avatar_Read>;
  update?: Maybe<ReviewsDocAccessFields_Avatar_Update>;
  delete?: Maybe<ReviewsDocAccessFields_Avatar_Delete>;
};

export type ReviewsDocAccessFields_Avatar_Create = {
  __typename?: 'ReviewsDocAccessFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Avatar_Read = {
  __typename?: 'ReviewsDocAccessFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Avatar_Update = {
  __typename?: 'ReviewsDocAccessFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Avatar_Delete = {
  __typename?: 'ReviewsDocAccessFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Text = {
  __typename?: 'ReviewsDocAccessFields_text';
  create?: Maybe<ReviewsDocAccessFields_Text_Create>;
  read?: Maybe<ReviewsDocAccessFields_Text_Read>;
  update?: Maybe<ReviewsDocAccessFields_Text_Update>;
  delete?: Maybe<ReviewsDocAccessFields_Text_Delete>;
};

export type ReviewsDocAccessFields_Text_Create = {
  __typename?: 'ReviewsDocAccessFields_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Text_Read = {
  __typename?: 'ReviewsDocAccessFields_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Text_Update = {
  __typename?: 'ReviewsDocAccessFields_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Text_Delete = {
  __typename?: 'ReviewsDocAccessFields_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Name = {
  __typename?: 'ReviewsDocAccessFields_name';
  create?: Maybe<ReviewsDocAccessFields_Name_Create>;
  read?: Maybe<ReviewsDocAccessFields_Name_Read>;
  update?: Maybe<ReviewsDocAccessFields_Name_Update>;
  delete?: Maybe<ReviewsDocAccessFields_Name_Delete>;
};

export type ReviewsDocAccessFields_Name_Create = {
  __typename?: 'ReviewsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Name_Read = {
  __typename?: 'ReviewsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Name_Update = {
  __typename?: 'ReviewsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_Name_Delete = {
  __typename?: 'ReviewsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt = {
  __typename?: 'ReviewsDocAccessFields_updatedAt';
  create?: Maybe<ReviewsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<ReviewsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<ReviewsDocAccessFields_UpdatedAt_Delete>;
};

export type ReviewsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ReviewsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt = {
  __typename?: 'ReviewsDocAccessFields_createdAt';
  create?: Maybe<ReviewsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<ReviewsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ReviewsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<ReviewsDocAccessFields_CreatedAt_Delete>;
};

export type ReviewsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ReviewsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsCreateDocAccess = {
  __typename?: 'ReviewsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsReadDocAccess = {
  __typename?: 'ReviewsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateDocAccess = {
  __typename?: 'ReviewsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteDocAccess = {
  __typename?: 'ReviewsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  category?: Maybe<Array<Category>>;
  maniples?: Maybe<Scalars['Float']['output']>;
  powerWatts?: Maybe<Scalars['Float']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  gallery?: Maybe<Array<Media>>;
  listFeatures?: Maybe<Array<Product_ListFeatures>>;
  compareFeatures?: Maybe<Array<Product_CompareFeatures>>;
  description?: Maybe<Product_Description>;
  characteristics?: Maybe<Product_Characteristics>;
  equipment?: Maybe<Product_Equipment>;
  advantages?: Maybe<Product_Advantages>;
  video?: Maybe<Product_Video>;
  reviews?: Maybe<Array<Review>>;
  moreProducts?: Maybe<Array<Product>>;
  recommendedTogether?: Maybe<Array<Product>>;
  faq?: Maybe<Array<Product_Faq>>;
  beforeafter?: Maybe<Array<Product_Beforeafter>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int']['output'];
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Product_ListFeatures = {
  __typename?: 'Product_ListFeatures';
  feature?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_CompareFeatures = {
  __typename?: 'Product_CompareFeatures';
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Description = {
  __typename?: 'Product_Description';
  content?: Maybe<Scalars['JSON']['output']>;
};


export type Product_DescriptionContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Product_Characteristics = {
  __typename?: 'Product_Characteristics';
  items?: Maybe<Array<Product_Characteristics_Items>>;
};

export type Product_Characteristics_Items = {
  __typename?: 'Product_Characteristics_Items';
  specification?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Equipment = {
  __typename?: 'Product_Equipment';
  content?: Maybe<Scalars['JSON']['output']>;
};


export type Product_EquipmentContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Product_Advantages = {
  __typename?: 'Product_Advantages';
  items?: Maybe<Array<Product_Advantages_Items>>;
};

export type Product_Advantages_Items = {
  __typename?: 'Product_Advantages_Items';
  advantage?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Video = {
  __typename?: 'Product_Video';
  content?: Maybe<Scalars['JSON']['output']>;
};


export type Product_VideoContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Product_Faq = {
  __typename?: 'Product_Faq';
  question?: Maybe<Scalars['String']['output']>;
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Beforeafter = {
  __typename?: 'Product_Beforeafter';
  before?: Maybe<Media>;
  after?: Maybe<Media>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Products = {
  __typename?: 'Products';
  docs: Array<Product>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Product_Where = {
  title?: InputMaybe<Product_Title_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  category?: InputMaybe<Product_Category_Operator>;
  maniples?: InputMaybe<Product_Maniples_Operator>;
  powerWatts?: InputMaybe<Product_PowerWatts_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__specification?: InputMaybe<Product_Characteristics__Items__Specification_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__content?: InputMaybe<Product_Equipment__Content_Operator>;
  advantages__items__advantage?: InputMaybe<Product_Advantages__Items__Advantage_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__content?: InputMaybe<Product_Video__Content_Operator>;
  reviews?: InputMaybe<Product_Reviews_Operator>;
  moreProducts?: InputMaybe<Product_MoreProducts_Operator>;
  recommendedTogether?: InputMaybe<Product_RecommendedTogether_Operator>;
  faq__question?: InputMaybe<Product_Faq__Question_Operator>;
  faq__answer?: InputMaybe<Product_Faq__Answer_Operator>;
  faq__id?: InputMaybe<Product_Faq__Id_Operator>;
  beforeafter__before?: InputMaybe<Product_Beforeafter__Before_Operator>;
  beforeafter__after?: InputMaybe<Product_Beforeafter__After_Operator>;
  beforeafter__id?: InputMaybe<Product_Beforeafter__Id_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
};

export type Product_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Price_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
};

export type Product_Rating_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Slug_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Category_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Maniples_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_PowerWatts_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Details_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_ShortDescription_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Gallery_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_ListFeatures__Feature_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_ListFeatures__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_CompareFeatures__Label_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_CompareFeatures__Value_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_CompareFeatures__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Description__Content_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Characteristics__Items__Specification_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Characteristics__Items__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Equipment__Content_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Advantages__Items__Advantage_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Advantages__Items__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Video__Content_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Reviews_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_MoreProducts_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_RecommendedTogether_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Faq__Question_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Faq__Answer_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Faq__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Beforeafter__Before_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Beforeafter__After_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Beforeafter__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Where_And = {
  title?: InputMaybe<Product_Title_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  category?: InputMaybe<Product_Category_Operator>;
  maniples?: InputMaybe<Product_Maniples_Operator>;
  powerWatts?: InputMaybe<Product_PowerWatts_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__specification?: InputMaybe<Product_Characteristics__Items__Specification_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__content?: InputMaybe<Product_Equipment__Content_Operator>;
  advantages__items__advantage?: InputMaybe<Product_Advantages__Items__Advantage_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__content?: InputMaybe<Product_Video__Content_Operator>;
  reviews?: InputMaybe<Product_Reviews_Operator>;
  moreProducts?: InputMaybe<Product_MoreProducts_Operator>;
  recommendedTogether?: InputMaybe<Product_RecommendedTogether_Operator>;
  faq__question?: InputMaybe<Product_Faq__Question_Operator>;
  faq__answer?: InputMaybe<Product_Faq__Answer_Operator>;
  faq__id?: InputMaybe<Product_Faq__Id_Operator>;
  beforeafter__before?: InputMaybe<Product_Beforeafter__Before_Operator>;
  beforeafter__after?: InputMaybe<Product_Beforeafter__After_Operator>;
  beforeafter__id?: InputMaybe<Product_Beforeafter__Id_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
};

export type Product_Where_Or = {
  title?: InputMaybe<Product_Title_Operator>;
  price?: InputMaybe<Product_Price_Operator>;
  rating?: InputMaybe<Product_Rating_Operator>;
  generateSlug?: InputMaybe<Product_GenerateSlug_Operator>;
  slug?: InputMaybe<Product_Slug_Operator>;
  category?: InputMaybe<Product_Category_Operator>;
  maniples?: InputMaybe<Product_Maniples_Operator>;
  powerWatts?: InputMaybe<Product_PowerWatts_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__specification?: InputMaybe<Product_Characteristics__Items__Specification_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__content?: InputMaybe<Product_Equipment__Content_Operator>;
  advantages__items__advantage?: InputMaybe<Product_Advantages__Items__Advantage_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__content?: InputMaybe<Product_Video__Content_Operator>;
  reviews?: InputMaybe<Product_Reviews_Operator>;
  moreProducts?: InputMaybe<Product_MoreProducts_Operator>;
  recommendedTogether?: InputMaybe<Product_RecommendedTogether_Operator>;
  faq__question?: InputMaybe<Product_Faq__Question_Operator>;
  faq__answer?: InputMaybe<Product_Faq__Answer_Operator>;
  faq__id?: InputMaybe<Product_Faq__Id_Operator>;
  beforeafter__before?: InputMaybe<Product_Beforeafter__Before_Operator>;
  beforeafter__after?: InputMaybe<Product_Beforeafter__After_Operator>;
  beforeafter__id?: InputMaybe<Product_Beforeafter__Id_Operator>;
  updatedAt?: InputMaybe<Product_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Product_CreatedAt_Operator>;
  id?: InputMaybe<Product_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Product_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Product_Where_Or>>>;
};

export type CountProducts = {
  __typename?: 'countProducts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ProductsDocAccess = {
  __typename?: 'productsDocAccess';
  fields?: Maybe<ProductsDocAccessFields>;
  create?: Maybe<ProductsCreateDocAccess>;
  read?: Maybe<ProductsReadDocAccess>;
  update?: Maybe<ProductsUpdateDocAccess>;
  delete?: Maybe<ProductsDeleteDocAccess>;
};

export type ProductsDocAccessFields = {
  __typename?: 'ProductsDocAccessFields';
  title?: Maybe<ProductsDocAccessFields_Title>;
  price?: Maybe<ProductsDocAccessFields_Price>;
  rating?: Maybe<ProductsDocAccessFields_Rating>;
  generateSlug?: Maybe<ProductsDocAccessFields_GenerateSlug>;
  slug?: Maybe<ProductsDocAccessFields_Slug>;
  category?: Maybe<ProductsDocAccessFields_Category>;
  maniples?: Maybe<ProductsDocAccessFields_Maniples>;
  powerWatts?: Maybe<ProductsDocAccessFields_PowerWatts>;
  details?: Maybe<ProductsDocAccessFields_Details>;
  shortDescription?: Maybe<ProductsDocAccessFields_ShortDescription>;
  gallery?: Maybe<ProductsDocAccessFields_Gallery>;
  listFeatures?: Maybe<ProductsDocAccessFields_ListFeatures>;
  compareFeatures?: Maybe<ProductsDocAccessFields_CompareFeatures>;
  description?: Maybe<ProductsDocAccessFields_Description>;
  characteristics?: Maybe<ProductsDocAccessFields_Characteristics>;
  equipment?: Maybe<ProductsDocAccessFields_Equipment>;
  advantages?: Maybe<ProductsDocAccessFields_Advantages>;
  video?: Maybe<ProductsDocAccessFields_Video>;
  reviews?: Maybe<ProductsDocAccessFields_Reviews>;
  moreProducts?: Maybe<ProductsDocAccessFields_MoreProducts>;
  recommendedTogether?: Maybe<ProductsDocAccessFields_RecommendedTogether>;
  faq?: Maybe<ProductsDocAccessFields_Faq>;
  beforeafter?: Maybe<ProductsDocAccessFields_Beforeafter>;
  updatedAt?: Maybe<ProductsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<ProductsDocAccessFields_CreatedAt>;
};

export type ProductsDocAccessFields_Title = {
  __typename?: 'ProductsDocAccessFields_title';
  create?: Maybe<ProductsDocAccessFields_Title_Create>;
  read?: Maybe<ProductsDocAccessFields_Title_Read>;
  update?: Maybe<ProductsDocAccessFields_Title_Update>;
  delete?: Maybe<ProductsDocAccessFields_Title_Delete>;
};

export type ProductsDocAccessFields_Title_Create = {
  __typename?: 'ProductsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Read = {
  __typename?: 'ProductsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Update = {
  __typename?: 'ProductsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Title_Delete = {
  __typename?: 'ProductsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price = {
  __typename?: 'ProductsDocAccessFields_price';
  create?: Maybe<ProductsDocAccessFields_Price_Create>;
  read?: Maybe<ProductsDocAccessFields_Price_Read>;
  update?: Maybe<ProductsDocAccessFields_Price_Update>;
  delete?: Maybe<ProductsDocAccessFields_Price_Delete>;
};

export type ProductsDocAccessFields_Price_Create = {
  __typename?: 'ProductsDocAccessFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Read = {
  __typename?: 'ProductsDocAccessFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Update = {
  __typename?: 'ProductsDocAccessFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Price_Delete = {
  __typename?: 'ProductsDocAccessFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating = {
  __typename?: 'ProductsDocAccessFields_rating';
  create?: Maybe<ProductsDocAccessFields_Rating_Create>;
  read?: Maybe<ProductsDocAccessFields_Rating_Read>;
  update?: Maybe<ProductsDocAccessFields_Rating_Update>;
  delete?: Maybe<ProductsDocAccessFields_Rating_Delete>;
};

export type ProductsDocAccessFields_Rating_Create = {
  __typename?: 'ProductsDocAccessFields_rating_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Read = {
  __typename?: 'ProductsDocAccessFields_rating_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Update = {
  __typename?: 'ProductsDocAccessFields_rating_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Rating_Delete = {
  __typename?: 'ProductsDocAccessFields_rating_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug = {
  __typename?: 'ProductsDocAccessFields_generateSlug';
  create?: Maybe<ProductsDocAccessFields_GenerateSlug_Create>;
  read?: Maybe<ProductsDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<ProductsDocAccessFields_GenerateSlug_Update>;
  delete?: Maybe<ProductsDocAccessFields_GenerateSlug_Delete>;
};

export type ProductsDocAccessFields_GenerateSlug_Create = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Read = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Update = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'ProductsDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug = {
  __typename?: 'ProductsDocAccessFields_slug';
  create?: Maybe<ProductsDocAccessFields_Slug_Create>;
  read?: Maybe<ProductsDocAccessFields_Slug_Read>;
  update?: Maybe<ProductsDocAccessFields_Slug_Update>;
  delete?: Maybe<ProductsDocAccessFields_Slug_Delete>;
};

export type ProductsDocAccessFields_Slug_Create = {
  __typename?: 'ProductsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Read = {
  __typename?: 'ProductsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Update = {
  __typename?: 'ProductsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Slug_Delete = {
  __typename?: 'ProductsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Category = {
  __typename?: 'ProductsDocAccessFields_category';
  create?: Maybe<ProductsDocAccessFields_Category_Create>;
  read?: Maybe<ProductsDocAccessFields_Category_Read>;
  update?: Maybe<ProductsDocAccessFields_Category_Update>;
  delete?: Maybe<ProductsDocAccessFields_Category_Delete>;
};

export type ProductsDocAccessFields_Category_Create = {
  __typename?: 'ProductsDocAccessFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Category_Read = {
  __typename?: 'ProductsDocAccessFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Category_Update = {
  __typename?: 'ProductsDocAccessFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Category_Delete = {
  __typename?: 'ProductsDocAccessFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Maniples = {
  __typename?: 'ProductsDocAccessFields_maniples';
  create?: Maybe<ProductsDocAccessFields_Maniples_Create>;
  read?: Maybe<ProductsDocAccessFields_Maniples_Read>;
  update?: Maybe<ProductsDocAccessFields_Maniples_Update>;
  delete?: Maybe<ProductsDocAccessFields_Maniples_Delete>;
};

export type ProductsDocAccessFields_Maniples_Create = {
  __typename?: 'ProductsDocAccessFields_maniples_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Maniples_Read = {
  __typename?: 'ProductsDocAccessFields_maniples_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Maniples_Update = {
  __typename?: 'ProductsDocAccessFields_maniples_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Maniples_Delete = {
  __typename?: 'ProductsDocAccessFields_maniples_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PowerWatts = {
  __typename?: 'ProductsDocAccessFields_powerWatts';
  create?: Maybe<ProductsDocAccessFields_PowerWatts_Create>;
  read?: Maybe<ProductsDocAccessFields_PowerWatts_Read>;
  update?: Maybe<ProductsDocAccessFields_PowerWatts_Update>;
  delete?: Maybe<ProductsDocAccessFields_PowerWatts_Delete>;
};

export type ProductsDocAccessFields_PowerWatts_Create = {
  __typename?: 'ProductsDocAccessFields_powerWatts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PowerWatts_Read = {
  __typename?: 'ProductsDocAccessFields_powerWatts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PowerWatts_Update = {
  __typename?: 'ProductsDocAccessFields_powerWatts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_PowerWatts_Delete = {
  __typename?: 'ProductsDocAccessFields_powerWatts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details = {
  __typename?: 'ProductsDocAccessFields_details';
  create?: Maybe<ProductsDocAccessFields_Details_Create>;
  read?: Maybe<ProductsDocAccessFields_Details_Read>;
  update?: Maybe<ProductsDocAccessFields_Details_Update>;
  delete?: Maybe<ProductsDocAccessFields_Details_Delete>;
};

export type ProductsDocAccessFields_Details_Create = {
  __typename?: 'ProductsDocAccessFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Read = {
  __typename?: 'ProductsDocAccessFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Update = {
  __typename?: 'ProductsDocAccessFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Details_Delete = {
  __typename?: 'ProductsDocAccessFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ShortDescription = {
  __typename?: 'ProductsDocAccessFields_shortDescription';
  create?: Maybe<ProductsDocAccessFields_ShortDescription_Create>;
  read?: Maybe<ProductsDocAccessFields_ShortDescription_Read>;
  update?: Maybe<ProductsDocAccessFields_ShortDescription_Update>;
  delete?: Maybe<ProductsDocAccessFields_ShortDescription_Delete>;
};

export type ProductsDocAccessFields_ShortDescription_Create = {
  __typename?: 'ProductsDocAccessFields_shortDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ShortDescription_Read = {
  __typename?: 'ProductsDocAccessFields_shortDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ShortDescription_Update = {
  __typename?: 'ProductsDocAccessFields_shortDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ShortDescription_Delete = {
  __typename?: 'ProductsDocAccessFields_shortDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery = {
  __typename?: 'ProductsDocAccessFields_gallery';
  create?: Maybe<ProductsDocAccessFields_Gallery_Create>;
  read?: Maybe<ProductsDocAccessFields_Gallery_Read>;
  update?: Maybe<ProductsDocAccessFields_Gallery_Update>;
  delete?: Maybe<ProductsDocAccessFields_Gallery_Delete>;
};

export type ProductsDocAccessFields_Gallery_Create = {
  __typename?: 'ProductsDocAccessFields_gallery_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Read = {
  __typename?: 'ProductsDocAccessFields_gallery_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Update = {
  __typename?: 'ProductsDocAccessFields_gallery_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Gallery_Delete = {
  __typename?: 'ProductsDocAccessFields_gallery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures = {
  __typename?: 'ProductsDocAccessFields_listFeatures';
  create?: Maybe<ProductsDocAccessFields_ListFeatures_Create>;
  read?: Maybe<ProductsDocAccessFields_ListFeatures_Read>;
  update?: Maybe<ProductsDocAccessFields_ListFeatures_Update>;
  delete?: Maybe<ProductsDocAccessFields_ListFeatures_Delete>;
  fields?: Maybe<ProductsDocAccessFields_ListFeatures_Fields>;
};

export type ProductsDocAccessFields_ListFeatures_Create = {
  __typename?: 'ProductsDocAccessFields_listFeatures_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Read = {
  __typename?: 'ProductsDocAccessFields_listFeatures_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Update = {
  __typename?: 'ProductsDocAccessFields_listFeatures_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Delete = {
  __typename?: 'ProductsDocAccessFields_listFeatures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Fields = {
  __typename?: 'ProductsDocAccessFields_listFeatures_Fields';
  feature?: Maybe<ProductsDocAccessFields_ListFeatures_Feature>;
  id?: Maybe<ProductsDocAccessFields_ListFeatures_Id>;
};

export type ProductsDocAccessFields_ListFeatures_Feature = {
  __typename?: 'ProductsDocAccessFields_listFeatures_feature';
  create?: Maybe<ProductsDocAccessFields_ListFeatures_Feature_Create>;
  read?: Maybe<ProductsDocAccessFields_ListFeatures_Feature_Read>;
  update?: Maybe<ProductsDocAccessFields_ListFeatures_Feature_Update>;
  delete?: Maybe<ProductsDocAccessFields_ListFeatures_Feature_Delete>;
};

export type ProductsDocAccessFields_ListFeatures_Feature_Create = {
  __typename?: 'ProductsDocAccessFields_listFeatures_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Feature_Read = {
  __typename?: 'ProductsDocAccessFields_listFeatures_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Feature_Update = {
  __typename?: 'ProductsDocAccessFields_listFeatures_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Feature_Delete = {
  __typename?: 'ProductsDocAccessFields_listFeatures_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Id = {
  __typename?: 'ProductsDocAccessFields_listFeatures_id';
  create?: Maybe<ProductsDocAccessFields_ListFeatures_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_ListFeatures_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_ListFeatures_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_ListFeatures_Id_Delete>;
};

export type ProductsDocAccessFields_ListFeatures_Id_Create = {
  __typename?: 'ProductsDocAccessFields_listFeatures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Id_Read = {
  __typename?: 'ProductsDocAccessFields_listFeatures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Id_Update = {
  __typename?: 'ProductsDocAccessFields_listFeatures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_ListFeatures_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_listFeatures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures = {
  __typename?: 'ProductsDocAccessFields_compareFeatures';
  create?: Maybe<ProductsDocAccessFields_CompareFeatures_Create>;
  read?: Maybe<ProductsDocAccessFields_CompareFeatures_Read>;
  update?: Maybe<ProductsDocAccessFields_CompareFeatures_Update>;
  delete?: Maybe<ProductsDocAccessFields_CompareFeatures_Delete>;
  fields?: Maybe<ProductsDocAccessFields_CompareFeatures_Fields>;
};

export type ProductsDocAccessFields_CompareFeatures_Create = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Read = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Update = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Delete = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Fields = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_Fields';
  label?: Maybe<ProductsDocAccessFields_CompareFeatures_Label>;
  value?: Maybe<ProductsDocAccessFields_CompareFeatures_Value>;
  id?: Maybe<ProductsDocAccessFields_CompareFeatures_Id>;
};

export type ProductsDocAccessFields_CompareFeatures_Label = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_label';
  create?: Maybe<ProductsDocAccessFields_CompareFeatures_Label_Create>;
  read?: Maybe<ProductsDocAccessFields_CompareFeatures_Label_Read>;
  update?: Maybe<ProductsDocAccessFields_CompareFeatures_Label_Update>;
  delete?: Maybe<ProductsDocAccessFields_CompareFeatures_Label_Delete>;
};

export type ProductsDocAccessFields_CompareFeatures_Label_Create = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Label_Read = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Label_Update = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Label_Delete = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Value = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_value';
  create?: Maybe<ProductsDocAccessFields_CompareFeatures_Value_Create>;
  read?: Maybe<ProductsDocAccessFields_CompareFeatures_Value_Read>;
  update?: Maybe<ProductsDocAccessFields_CompareFeatures_Value_Update>;
  delete?: Maybe<ProductsDocAccessFields_CompareFeatures_Value_Delete>;
};

export type ProductsDocAccessFields_CompareFeatures_Value_Create = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Value_Read = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Value_Update = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Value_Delete = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Id = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_id';
  create?: Maybe<ProductsDocAccessFields_CompareFeatures_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_CompareFeatures_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_CompareFeatures_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_CompareFeatures_Id_Delete>;
};

export type ProductsDocAccessFields_CompareFeatures_Id_Create = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Id_Read = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Id_Update = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CompareFeatures_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_compareFeatures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description = {
  __typename?: 'ProductsDocAccessFields_description';
  content?: Maybe<ProductsDocAccessFields_Description_Content>;
};

export type ProductsDocAccessFields_Description_Content = {
  __typename?: 'ProductsDocAccessFields_description_content';
  create?: Maybe<ProductsDocAccessFields_Description_Content_Create>;
  read?: Maybe<ProductsDocAccessFields_Description_Content_Read>;
  update?: Maybe<ProductsDocAccessFields_Description_Content_Update>;
  delete?: Maybe<ProductsDocAccessFields_Description_Content_Delete>;
};

export type ProductsDocAccessFields_Description_Content_Create = {
  __typename?: 'ProductsDocAccessFields_description_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Content_Read = {
  __typename?: 'ProductsDocAccessFields_description_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Content_Update = {
  __typename?: 'ProductsDocAccessFields_description_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Description_Content_Delete = {
  __typename?: 'ProductsDocAccessFields_description_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics = {
  __typename?: 'ProductsDocAccessFields_characteristics';
  items?: Maybe<ProductsDocAccessFields_Characteristics_Items>;
};

export type ProductsDocAccessFields_Characteristics_Items = {
  __typename?: 'ProductsDocAccessFields_characteristics_items';
  create?: Maybe<ProductsDocAccessFields_Characteristics_Items_Create>;
  read?: Maybe<ProductsDocAccessFields_Characteristics_Items_Read>;
  update?: Maybe<ProductsDocAccessFields_Characteristics_Items_Update>;
  delete?: Maybe<ProductsDocAccessFields_Characteristics_Items_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Characteristics_Items_Fields>;
};

export type ProductsDocAccessFields_Characteristics_Items_Create = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Read = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Update = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Delete = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Fields = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_Fields';
  specification?: Maybe<ProductsDocAccessFields_Characteristics_Items_Specification>;
  id?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id>;
};

export type ProductsDocAccessFields_Characteristics_Items_Specification = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_specification';
  create?: Maybe<ProductsDocAccessFields_Characteristics_Items_Specification_Create>;
  read?: Maybe<ProductsDocAccessFields_Characteristics_Items_Specification_Read>;
  update?: Maybe<ProductsDocAccessFields_Characteristics_Items_Specification_Update>;
  delete?: Maybe<ProductsDocAccessFields_Characteristics_Items_Specification_Delete>;
};

export type ProductsDocAccessFields_Characteristics_Items_Specification_Create = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_specification_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Specification_Read = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_specification_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Specification_Update = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_specification_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Specification_Delete = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_specification_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Id = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_id';
  create?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id_Delete>;
};

export type ProductsDocAccessFields_Characteristics_Items_Id_Create = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Id_Read = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Id_Update = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment = {
  __typename?: 'ProductsDocAccessFields_equipment';
  content?: Maybe<ProductsDocAccessFields_Equipment_Content>;
};

export type ProductsDocAccessFields_Equipment_Content = {
  __typename?: 'ProductsDocAccessFields_equipment_content';
  create?: Maybe<ProductsDocAccessFields_Equipment_Content_Create>;
  read?: Maybe<ProductsDocAccessFields_Equipment_Content_Read>;
  update?: Maybe<ProductsDocAccessFields_Equipment_Content_Update>;
  delete?: Maybe<ProductsDocAccessFields_Equipment_Content_Delete>;
};

export type ProductsDocAccessFields_Equipment_Content_Create = {
  __typename?: 'ProductsDocAccessFields_equipment_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Content_Read = {
  __typename?: 'ProductsDocAccessFields_equipment_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Content_Update = {
  __typename?: 'ProductsDocAccessFields_equipment_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Content_Delete = {
  __typename?: 'ProductsDocAccessFields_equipment_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages = {
  __typename?: 'ProductsDocAccessFields_advantages';
  items?: Maybe<ProductsDocAccessFields_Advantages_Items>;
};

export type ProductsDocAccessFields_Advantages_Items = {
  __typename?: 'ProductsDocAccessFields_advantages_items';
  create?: Maybe<ProductsDocAccessFields_Advantages_Items_Create>;
  read?: Maybe<ProductsDocAccessFields_Advantages_Items_Read>;
  update?: Maybe<ProductsDocAccessFields_Advantages_Items_Update>;
  delete?: Maybe<ProductsDocAccessFields_Advantages_Items_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Advantages_Items_Fields>;
};

export type ProductsDocAccessFields_Advantages_Items_Create = {
  __typename?: 'ProductsDocAccessFields_advantages_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Read = {
  __typename?: 'ProductsDocAccessFields_advantages_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Update = {
  __typename?: 'ProductsDocAccessFields_advantages_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Delete = {
  __typename?: 'ProductsDocAccessFields_advantages_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Fields = {
  __typename?: 'ProductsDocAccessFields_advantages_items_Fields';
  advantage?: Maybe<ProductsDocAccessFields_Advantages_Items_Advantage>;
  id?: Maybe<ProductsDocAccessFields_Advantages_Items_Id>;
};

export type ProductsDocAccessFields_Advantages_Items_Advantage = {
  __typename?: 'ProductsDocAccessFields_advantages_items_advantage';
  create?: Maybe<ProductsDocAccessFields_Advantages_Items_Advantage_Create>;
  read?: Maybe<ProductsDocAccessFields_Advantages_Items_Advantage_Read>;
  update?: Maybe<ProductsDocAccessFields_Advantages_Items_Advantage_Update>;
  delete?: Maybe<ProductsDocAccessFields_Advantages_Items_Advantage_Delete>;
};

export type ProductsDocAccessFields_Advantages_Items_Advantage_Create = {
  __typename?: 'ProductsDocAccessFields_advantages_items_advantage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Advantage_Read = {
  __typename?: 'ProductsDocAccessFields_advantages_items_advantage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Advantage_Update = {
  __typename?: 'ProductsDocAccessFields_advantages_items_advantage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Advantage_Delete = {
  __typename?: 'ProductsDocAccessFields_advantages_items_advantage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Id = {
  __typename?: 'ProductsDocAccessFields_advantages_items_id';
  create?: Maybe<ProductsDocAccessFields_Advantages_Items_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_Advantages_Items_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Advantages_Items_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_Advantages_Items_Id_Delete>;
};

export type ProductsDocAccessFields_Advantages_Items_Id_Create = {
  __typename?: 'ProductsDocAccessFields_advantages_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Id_Read = {
  __typename?: 'ProductsDocAccessFields_advantages_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Id_Update = {
  __typename?: 'ProductsDocAccessFields_advantages_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_advantages_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video = {
  __typename?: 'ProductsDocAccessFields_video';
  content?: Maybe<ProductsDocAccessFields_Video_Content>;
};

export type ProductsDocAccessFields_Video_Content = {
  __typename?: 'ProductsDocAccessFields_video_content';
  create?: Maybe<ProductsDocAccessFields_Video_Content_Create>;
  read?: Maybe<ProductsDocAccessFields_Video_Content_Read>;
  update?: Maybe<ProductsDocAccessFields_Video_Content_Update>;
  delete?: Maybe<ProductsDocAccessFields_Video_Content_Delete>;
};

export type ProductsDocAccessFields_Video_Content_Create = {
  __typename?: 'ProductsDocAccessFields_video_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Content_Read = {
  __typename?: 'ProductsDocAccessFields_video_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Content_Update = {
  __typename?: 'ProductsDocAccessFields_video_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Content_Delete = {
  __typename?: 'ProductsDocAccessFields_video_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Reviews = {
  __typename?: 'ProductsDocAccessFields_reviews';
  create?: Maybe<ProductsDocAccessFields_Reviews_Create>;
  read?: Maybe<ProductsDocAccessFields_Reviews_Read>;
  update?: Maybe<ProductsDocAccessFields_Reviews_Update>;
  delete?: Maybe<ProductsDocAccessFields_Reviews_Delete>;
};

export type ProductsDocAccessFields_Reviews_Create = {
  __typename?: 'ProductsDocAccessFields_reviews_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Reviews_Read = {
  __typename?: 'ProductsDocAccessFields_reviews_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Reviews_Update = {
  __typename?: 'ProductsDocAccessFields_reviews_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Reviews_Delete = {
  __typename?: 'ProductsDocAccessFields_reviews_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_MoreProducts = {
  __typename?: 'ProductsDocAccessFields_moreProducts';
  create?: Maybe<ProductsDocAccessFields_MoreProducts_Create>;
  read?: Maybe<ProductsDocAccessFields_MoreProducts_Read>;
  update?: Maybe<ProductsDocAccessFields_MoreProducts_Update>;
  delete?: Maybe<ProductsDocAccessFields_MoreProducts_Delete>;
};

export type ProductsDocAccessFields_MoreProducts_Create = {
  __typename?: 'ProductsDocAccessFields_moreProducts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_MoreProducts_Read = {
  __typename?: 'ProductsDocAccessFields_moreProducts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_MoreProducts_Update = {
  __typename?: 'ProductsDocAccessFields_moreProducts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_MoreProducts_Delete = {
  __typename?: 'ProductsDocAccessFields_moreProducts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RecommendedTogether = {
  __typename?: 'ProductsDocAccessFields_recommendedTogether';
  create?: Maybe<ProductsDocAccessFields_RecommendedTogether_Create>;
  read?: Maybe<ProductsDocAccessFields_RecommendedTogether_Read>;
  update?: Maybe<ProductsDocAccessFields_RecommendedTogether_Update>;
  delete?: Maybe<ProductsDocAccessFields_RecommendedTogether_Delete>;
};

export type ProductsDocAccessFields_RecommendedTogether_Create = {
  __typename?: 'ProductsDocAccessFields_recommendedTogether_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RecommendedTogether_Read = {
  __typename?: 'ProductsDocAccessFields_recommendedTogether_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RecommendedTogether_Update = {
  __typename?: 'ProductsDocAccessFields_recommendedTogether_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_RecommendedTogether_Delete = {
  __typename?: 'ProductsDocAccessFields_recommendedTogether_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq = {
  __typename?: 'ProductsDocAccessFields_faq';
  create?: Maybe<ProductsDocAccessFields_Faq_Create>;
  read?: Maybe<ProductsDocAccessFields_Faq_Read>;
  update?: Maybe<ProductsDocAccessFields_Faq_Update>;
  delete?: Maybe<ProductsDocAccessFields_Faq_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Faq_Fields>;
};

export type ProductsDocAccessFields_Faq_Create = {
  __typename?: 'ProductsDocAccessFields_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Read = {
  __typename?: 'ProductsDocAccessFields_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Update = {
  __typename?: 'ProductsDocAccessFields_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Delete = {
  __typename?: 'ProductsDocAccessFields_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Fields = {
  __typename?: 'ProductsDocAccessFields_faq_Fields';
  question?: Maybe<ProductsDocAccessFields_Faq_Question>;
  answer?: Maybe<ProductsDocAccessFields_Faq_Answer>;
  id?: Maybe<ProductsDocAccessFields_Faq_Id>;
};

export type ProductsDocAccessFields_Faq_Question = {
  __typename?: 'ProductsDocAccessFields_faq_question';
  create?: Maybe<ProductsDocAccessFields_Faq_Question_Create>;
  read?: Maybe<ProductsDocAccessFields_Faq_Question_Read>;
  update?: Maybe<ProductsDocAccessFields_Faq_Question_Update>;
  delete?: Maybe<ProductsDocAccessFields_Faq_Question_Delete>;
};

export type ProductsDocAccessFields_Faq_Question_Create = {
  __typename?: 'ProductsDocAccessFields_faq_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Question_Read = {
  __typename?: 'ProductsDocAccessFields_faq_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Question_Update = {
  __typename?: 'ProductsDocAccessFields_faq_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Question_Delete = {
  __typename?: 'ProductsDocAccessFields_faq_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Answer = {
  __typename?: 'ProductsDocAccessFields_faq_answer';
  create?: Maybe<ProductsDocAccessFields_Faq_Answer_Create>;
  read?: Maybe<ProductsDocAccessFields_Faq_Answer_Read>;
  update?: Maybe<ProductsDocAccessFields_Faq_Answer_Update>;
  delete?: Maybe<ProductsDocAccessFields_Faq_Answer_Delete>;
};

export type ProductsDocAccessFields_Faq_Answer_Create = {
  __typename?: 'ProductsDocAccessFields_faq_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Answer_Read = {
  __typename?: 'ProductsDocAccessFields_faq_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Answer_Update = {
  __typename?: 'ProductsDocAccessFields_faq_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Answer_Delete = {
  __typename?: 'ProductsDocAccessFields_faq_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Id = {
  __typename?: 'ProductsDocAccessFields_faq_id';
  create?: Maybe<ProductsDocAccessFields_Faq_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_Faq_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Faq_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_Faq_Id_Delete>;
};

export type ProductsDocAccessFields_Faq_Id_Create = {
  __typename?: 'ProductsDocAccessFields_faq_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Id_Read = {
  __typename?: 'ProductsDocAccessFields_faq_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Id_Update = {
  __typename?: 'ProductsDocAccessFields_faq_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Faq_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_faq_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter = {
  __typename?: 'ProductsDocAccessFields_beforeafter';
  create?: Maybe<ProductsDocAccessFields_Beforeafter_Create>;
  read?: Maybe<ProductsDocAccessFields_Beforeafter_Read>;
  update?: Maybe<ProductsDocAccessFields_Beforeafter_Update>;
  delete?: Maybe<ProductsDocAccessFields_Beforeafter_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Beforeafter_Fields>;
};

export type ProductsDocAccessFields_Beforeafter_Create = {
  __typename?: 'ProductsDocAccessFields_beforeafter_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Read = {
  __typename?: 'ProductsDocAccessFields_beforeafter_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Update = {
  __typename?: 'ProductsDocAccessFields_beforeafter_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Delete = {
  __typename?: 'ProductsDocAccessFields_beforeafter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Fields = {
  __typename?: 'ProductsDocAccessFields_beforeafter_Fields';
  before?: Maybe<ProductsDocAccessFields_Beforeafter_Before>;
  after?: Maybe<ProductsDocAccessFields_Beforeafter_After>;
  id?: Maybe<ProductsDocAccessFields_Beforeafter_Id>;
};

export type ProductsDocAccessFields_Beforeafter_Before = {
  __typename?: 'ProductsDocAccessFields_beforeafter_before';
  create?: Maybe<ProductsDocAccessFields_Beforeafter_Before_Create>;
  read?: Maybe<ProductsDocAccessFields_Beforeafter_Before_Read>;
  update?: Maybe<ProductsDocAccessFields_Beforeafter_Before_Update>;
  delete?: Maybe<ProductsDocAccessFields_Beforeafter_Before_Delete>;
};

export type ProductsDocAccessFields_Beforeafter_Before_Create = {
  __typename?: 'ProductsDocAccessFields_beforeafter_before_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Before_Read = {
  __typename?: 'ProductsDocAccessFields_beforeafter_before_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Before_Update = {
  __typename?: 'ProductsDocAccessFields_beforeafter_before_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Before_Delete = {
  __typename?: 'ProductsDocAccessFields_beforeafter_before_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_After = {
  __typename?: 'ProductsDocAccessFields_beforeafter_after';
  create?: Maybe<ProductsDocAccessFields_Beforeafter_After_Create>;
  read?: Maybe<ProductsDocAccessFields_Beforeafter_After_Read>;
  update?: Maybe<ProductsDocAccessFields_Beforeafter_After_Update>;
  delete?: Maybe<ProductsDocAccessFields_Beforeafter_After_Delete>;
};

export type ProductsDocAccessFields_Beforeafter_After_Create = {
  __typename?: 'ProductsDocAccessFields_beforeafter_after_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_After_Read = {
  __typename?: 'ProductsDocAccessFields_beforeafter_after_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_After_Update = {
  __typename?: 'ProductsDocAccessFields_beforeafter_after_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_After_Delete = {
  __typename?: 'ProductsDocAccessFields_beforeafter_after_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Id = {
  __typename?: 'ProductsDocAccessFields_beforeafter_id';
  create?: Maybe<ProductsDocAccessFields_Beforeafter_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_Beforeafter_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Beforeafter_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_Beforeafter_Id_Delete>;
};

export type ProductsDocAccessFields_Beforeafter_Id_Create = {
  __typename?: 'ProductsDocAccessFields_beforeafter_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Id_Read = {
  __typename?: 'ProductsDocAccessFields_beforeafter_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Id_Update = {
  __typename?: 'ProductsDocAccessFields_beforeafter_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Beforeafter_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_beforeafter_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt = {
  __typename?: 'ProductsDocAccessFields_updatedAt';
  create?: Maybe<ProductsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<ProductsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<ProductsDocAccessFields_UpdatedAt_Delete>;
};

export type ProductsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt = {
  __typename?: 'ProductsDocAccessFields_createdAt';
  create?: Maybe<ProductsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<ProductsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ProductsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<ProductsDocAccessFields_CreatedAt_Delete>;
};

export type ProductsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ProductsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ProductsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ProductsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ProductsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsCreateDocAccess = {
  __typename?: 'ProductsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadDocAccess = {
  __typename?: 'ProductsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateDocAccess = {
  __typename?: 'ProductsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteDocAccess = {
  __typename?: 'ProductsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Categories = {
  __typename?: 'Categories';
  docs: Array<Category>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Category_Where = {
  image?: InputMaybe<Category_Image_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
};

export type Category_Image_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Category_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_Description_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_Slug_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category_Where_And = {
  image?: InputMaybe<Category_Image_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
};

export type Category_Where_Or = {
  image?: InputMaybe<Category_Image_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  description?: InputMaybe<Category_Description_Operator>;
  generateSlug?: InputMaybe<Category_GenerateSlug_Operator>;
  slug?: InputMaybe<Category_Slug_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
};

export type CountCategories = {
  __typename?: 'countCategories';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CategoryDocAccess = {
  __typename?: 'categoryDocAccess';
  fields?: Maybe<CategoryDocAccessFields>;
  create?: Maybe<CategoryCreateDocAccess>;
  read?: Maybe<CategoryReadDocAccess>;
  update?: Maybe<CategoryUpdateDocAccess>;
  delete?: Maybe<CategoryDeleteDocAccess>;
};

export type CategoryDocAccessFields = {
  __typename?: 'CategoryDocAccessFields';
  image?: Maybe<CategoryDocAccessFields_Image>;
  title?: Maybe<CategoryDocAccessFields_Title>;
  description?: Maybe<CategoryDocAccessFields_Description>;
  generateSlug?: Maybe<CategoryDocAccessFields_GenerateSlug>;
  slug?: Maybe<CategoryDocAccessFields_Slug>;
  updatedAt?: Maybe<CategoryDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<CategoryDocAccessFields_CreatedAt>;
};

export type CategoryDocAccessFields_Image = {
  __typename?: 'CategoryDocAccessFields_image';
  create?: Maybe<CategoryDocAccessFields_Image_Create>;
  read?: Maybe<CategoryDocAccessFields_Image_Read>;
  update?: Maybe<CategoryDocAccessFields_Image_Update>;
  delete?: Maybe<CategoryDocAccessFields_Image_Delete>;
};

export type CategoryDocAccessFields_Image_Create = {
  __typename?: 'CategoryDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Image_Read = {
  __typename?: 'CategoryDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Image_Update = {
  __typename?: 'CategoryDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Image_Delete = {
  __typename?: 'CategoryDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Title = {
  __typename?: 'CategoryDocAccessFields_title';
  create?: Maybe<CategoryDocAccessFields_Title_Create>;
  read?: Maybe<CategoryDocAccessFields_Title_Read>;
  update?: Maybe<CategoryDocAccessFields_Title_Update>;
  delete?: Maybe<CategoryDocAccessFields_Title_Delete>;
};

export type CategoryDocAccessFields_Title_Create = {
  __typename?: 'CategoryDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Title_Read = {
  __typename?: 'CategoryDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Title_Update = {
  __typename?: 'CategoryDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Title_Delete = {
  __typename?: 'CategoryDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Description = {
  __typename?: 'CategoryDocAccessFields_description';
  create?: Maybe<CategoryDocAccessFields_Description_Create>;
  read?: Maybe<CategoryDocAccessFields_Description_Read>;
  update?: Maybe<CategoryDocAccessFields_Description_Update>;
  delete?: Maybe<CategoryDocAccessFields_Description_Delete>;
};

export type CategoryDocAccessFields_Description_Create = {
  __typename?: 'CategoryDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Description_Read = {
  __typename?: 'CategoryDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Description_Update = {
  __typename?: 'CategoryDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Description_Delete = {
  __typename?: 'CategoryDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_GenerateSlug = {
  __typename?: 'CategoryDocAccessFields_generateSlug';
  create?: Maybe<CategoryDocAccessFields_GenerateSlug_Create>;
  read?: Maybe<CategoryDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<CategoryDocAccessFields_GenerateSlug_Update>;
  delete?: Maybe<CategoryDocAccessFields_GenerateSlug_Delete>;
};

export type CategoryDocAccessFields_GenerateSlug_Create = {
  __typename?: 'CategoryDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_GenerateSlug_Read = {
  __typename?: 'CategoryDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_GenerateSlug_Update = {
  __typename?: 'CategoryDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'CategoryDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Slug = {
  __typename?: 'CategoryDocAccessFields_slug';
  create?: Maybe<CategoryDocAccessFields_Slug_Create>;
  read?: Maybe<CategoryDocAccessFields_Slug_Read>;
  update?: Maybe<CategoryDocAccessFields_Slug_Update>;
  delete?: Maybe<CategoryDocAccessFields_Slug_Delete>;
};

export type CategoryDocAccessFields_Slug_Create = {
  __typename?: 'CategoryDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Slug_Read = {
  __typename?: 'CategoryDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Slug_Update = {
  __typename?: 'CategoryDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_Slug_Delete = {
  __typename?: 'CategoryDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_UpdatedAt = {
  __typename?: 'CategoryDocAccessFields_updatedAt';
  create?: Maybe<CategoryDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<CategoryDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoryDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<CategoryDocAccessFields_UpdatedAt_Delete>;
};

export type CategoryDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoryDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoryDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoryDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoryDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_CreatedAt = {
  __typename?: 'CategoryDocAccessFields_createdAt';
  create?: Maybe<CategoryDocAccessFields_CreatedAt_Create>;
  read?: Maybe<CategoryDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoryDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<CategoryDocAccessFields_CreatedAt_Delete>;
};

export type CategoryDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoryDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoryDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoryDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoryDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryCreateDocAccess = {
  __typename?: 'CategoryCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryReadDocAccess = {
  __typename?: 'CategoryReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryUpdateDocAccess = {
  __typename?: 'CategoryUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryDeleteDocAccess = {
  __typename?: 'CategoryDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  data: Scalars['JSON']['output'];
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadKv_Where = {
  key?: InputMaybe<PayloadKv_Key_Operator>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
};

export type PayloadKv_Key_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Data_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadKv_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadKv_Where_And = {
  key?: InputMaybe<PayloadKv_Key_Operator>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
};

export type PayloadKv_Where_Or = {
  key?: InputMaybe<PayloadKv_Key_Operator>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
};

export type CountPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Payload_KvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  fields?: Maybe<PayloadKvDocAccessFields>;
  create?: Maybe<PayloadKvCreateDocAccess>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  key?: Maybe<PayloadKvDocAccessFields_Key>;
  data?: Maybe<PayloadKvDocAccessFields_Data>;
};

export type PayloadKvDocAccessFields_Key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_Key_Create>;
  read?: Maybe<PayloadKvDocAccessFields_Key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Key_Update>;
  delete?: Maybe<PayloadKvDocAccessFields_Key_Delete>;
};

export type PayloadKvDocAccessFields_Key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_Data_Create>;
  read?: Maybe<PayloadKvDocAccessFields_Data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Data_Update>;
  delete?: Maybe<PayloadKvDocAccessFields_Data_Delete>;
};

export type PayloadKvDocAccessFields_Data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  id: Scalars['Int']['output'];
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  user?: Maybe<PayloadLockedDocument_User_Relationship>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export enum PayloadLockedDocument_Document_RelationTo {
  Users = 'users',
  Media = 'media',
  Reviews = 'reviews',
  Products = 'products',
  Category = 'category'
}

export type PayloadLockedDocument_Document = User | Media | Review | Product | Category;

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocument_Where = {
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Users = 'users',
  Media = 'media',
  Reviews = 'reviews',
  Products = 'products',
  Category = 'category'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadLockedDocument_Where_And = {
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
};

export type PayloadLockedDocument_Where_Or = {
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  id: Scalars['Int']['output'];
  user?: Maybe<PayloadPreference_User_Relationship>;
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreference_Where = {
  user?: InputMaybe<PayloadPreference_User_Relation>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Key_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadPreference_Value_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadPreference_Where_And = {
  user?: InputMaybe<PayloadPreference_User_Relation>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
};

export type PayloadPreference_Where_Or = {
  user?: InputMaybe<PayloadPreference_User_Relation>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  users?: Maybe<UsersAccess>;
  media?: Maybe<MediaAccess>;
  reviews?: Maybe<ReviewsAccess>;
  products?: Maybe<ProductsAccess>;
  category?: Maybe<CategoryAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  fields?: Maybe<UsersFields>;
  create?: Maybe<UsersCreateAccess>;
  read?: Maybe<UsersReadAccess>;
  update?: Maybe<UsersUpdateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
};

export type UsersFields = {
  __typename?: 'UsersFields';
  firstName?: Maybe<UsersFields_FirstName>;
  lastName?: Maybe<UsersFields_LastName>;
  phone?: Maybe<UsersFields_Phone>;
  role?: Maybe<UsersFields_Role>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  sessions?: Maybe<UsersFields_Sessions>;
};

export type UsersFields_FirstName = {
  __typename?: 'UsersFields_firstName';
  create?: Maybe<UsersFields_FirstName_Create>;
  read?: Maybe<UsersFields_FirstName_Read>;
  update?: Maybe<UsersFields_FirstName_Update>;
  delete?: Maybe<UsersFields_FirstName_Delete>;
};

export type UsersFields_FirstName_Create = {
  __typename?: 'UsersFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Read = {
  __typename?: 'UsersFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Update = {
  __typename?: 'UsersFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FirstName_Delete = {
  __typename?: 'UsersFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
  delete?: Maybe<UsersFields_LastName_Delete>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Phone = {
  __typename?: 'UsersFields_phone';
  create?: Maybe<UsersFields_Phone_Create>;
  read?: Maybe<UsersFields_Phone_Read>;
  update?: Maybe<UsersFields_Phone_Update>;
  delete?: Maybe<UsersFields_Phone_Delete>;
};

export type UsersFields_Phone_Create = {
  __typename?: 'UsersFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Phone_Read = {
  __typename?: 'UsersFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Phone_Update = {
  __typename?: 'UsersFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Phone_Delete = {
  __typename?: 'UsersFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role = {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_Role_Create>;
  read?: Maybe<UsersFields_Role_Read>;
  update?: Maybe<UsersFields_Role_Update>;
  delete?: Maybe<UsersFields_Role_Delete>;
};

export type UsersFields_Role_Create = {
  __typename?: 'UsersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Read = {
  __typename?: 'UsersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Update = {
  __typename?: 'UsersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Delete = {
  __typename?: 'UsersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
  delete?: Maybe<UsersFields_Email_Delete>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  id?: Maybe<UsersFields_Sessions_Id>;
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  fields?: Maybe<MediaFields>;
  create?: Maybe<MediaCreateAccess>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  url?: Maybe<MediaFields_Url>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  filename?: Maybe<MediaFields_Filename>;
  mimeType?: Maybe<MediaFields_MimeType>;
  filesize?: Maybe<MediaFields_Filesize>;
  width?: Maybe<MediaFields_Width>;
  height?: Maybe<MediaFields_Height>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
  delete?: Maybe<MediaFields_Alt_Delete>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
  delete?: Maybe<MediaFields_Url_Delete>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
  delete?: Maybe<MediaFields_Filename_Delete>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
  delete?: Maybe<MediaFields_Width_Delete>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
  delete?: Maybe<MediaFields_Height_Delete>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsAccess = {
  __typename?: 'reviewsAccess';
  fields?: Maybe<ReviewsFields>;
  create?: Maybe<ReviewsCreateAccess>;
  read?: Maybe<ReviewsReadAccess>;
  update?: Maybe<ReviewsUpdateAccess>;
  delete?: Maybe<ReviewsDeleteAccess>;
};

export type ReviewsFields = {
  __typename?: 'ReviewsFields';
  avatar?: Maybe<ReviewsFields_Avatar>;
  text?: Maybe<ReviewsFields_Text>;
  name?: Maybe<ReviewsFields_Name>;
  updatedAt?: Maybe<ReviewsFields_UpdatedAt>;
  createdAt?: Maybe<ReviewsFields_CreatedAt>;
};

export type ReviewsFields_Avatar = {
  __typename?: 'ReviewsFields_avatar';
  create?: Maybe<ReviewsFields_Avatar_Create>;
  read?: Maybe<ReviewsFields_Avatar_Read>;
  update?: Maybe<ReviewsFields_Avatar_Update>;
  delete?: Maybe<ReviewsFields_Avatar_Delete>;
};

export type ReviewsFields_Avatar_Create = {
  __typename?: 'ReviewsFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Avatar_Read = {
  __typename?: 'ReviewsFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Avatar_Update = {
  __typename?: 'ReviewsFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Avatar_Delete = {
  __typename?: 'ReviewsFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Text = {
  __typename?: 'ReviewsFields_text';
  create?: Maybe<ReviewsFields_Text_Create>;
  read?: Maybe<ReviewsFields_Text_Read>;
  update?: Maybe<ReviewsFields_Text_Update>;
  delete?: Maybe<ReviewsFields_Text_Delete>;
};

export type ReviewsFields_Text_Create = {
  __typename?: 'ReviewsFields_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Text_Read = {
  __typename?: 'ReviewsFields_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Text_Update = {
  __typename?: 'ReviewsFields_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Text_Delete = {
  __typename?: 'ReviewsFields_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Name = {
  __typename?: 'ReviewsFields_name';
  create?: Maybe<ReviewsFields_Name_Create>;
  read?: Maybe<ReviewsFields_Name_Read>;
  update?: Maybe<ReviewsFields_Name_Update>;
  delete?: Maybe<ReviewsFields_Name_Delete>;
};

export type ReviewsFields_Name_Create = {
  __typename?: 'ReviewsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Name_Read = {
  __typename?: 'ReviewsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Name_Update = {
  __typename?: 'ReviewsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_Name_Delete = {
  __typename?: 'ReviewsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt = {
  __typename?: 'ReviewsFields_updatedAt';
  create?: Maybe<ReviewsFields_UpdatedAt_Create>;
  read?: Maybe<ReviewsFields_UpdatedAt_Read>;
  update?: Maybe<ReviewsFields_UpdatedAt_Update>;
  delete?: Maybe<ReviewsFields_UpdatedAt_Delete>;
};

export type ReviewsFields_UpdatedAt_Create = {
  __typename?: 'ReviewsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Read = {
  __typename?: 'ReviewsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Update = {
  __typename?: 'ReviewsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_UpdatedAt_Delete = {
  __typename?: 'ReviewsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt = {
  __typename?: 'ReviewsFields_createdAt';
  create?: Maybe<ReviewsFields_CreatedAt_Create>;
  read?: Maybe<ReviewsFields_CreatedAt_Read>;
  update?: Maybe<ReviewsFields_CreatedAt_Update>;
  delete?: Maybe<ReviewsFields_CreatedAt_Delete>;
};

export type ReviewsFields_CreatedAt_Create = {
  __typename?: 'ReviewsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Read = {
  __typename?: 'ReviewsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Update = {
  __typename?: 'ReviewsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsFields_CreatedAt_Delete = {
  __typename?: 'ReviewsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ReviewsCreateAccess = {
  __typename?: 'ReviewsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsReadAccess = {
  __typename?: 'ReviewsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsUpdateAccess = {
  __typename?: 'ReviewsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ReviewsDeleteAccess = {
  __typename?: 'ReviewsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsAccess = {
  __typename?: 'productsAccess';
  fields?: Maybe<ProductsFields>;
  create?: Maybe<ProductsCreateAccess>;
  read?: Maybe<ProductsReadAccess>;
  update?: Maybe<ProductsUpdateAccess>;
  delete?: Maybe<ProductsDeleteAccess>;
};

export type ProductsFields = {
  __typename?: 'ProductsFields';
  title?: Maybe<ProductsFields_Title>;
  price?: Maybe<ProductsFields_Price>;
  rating?: Maybe<ProductsFields_Rating>;
  generateSlug?: Maybe<ProductsFields_GenerateSlug>;
  slug?: Maybe<ProductsFields_Slug>;
  category?: Maybe<ProductsFields_Category>;
  maniples?: Maybe<ProductsFields_Maniples>;
  powerWatts?: Maybe<ProductsFields_PowerWatts>;
  details?: Maybe<ProductsFields_Details>;
  shortDescription?: Maybe<ProductsFields_ShortDescription>;
  gallery?: Maybe<ProductsFields_Gallery>;
  listFeatures?: Maybe<ProductsFields_ListFeatures>;
  compareFeatures?: Maybe<ProductsFields_CompareFeatures>;
  description?: Maybe<ProductsFields_Description>;
  characteristics?: Maybe<ProductsFields_Characteristics>;
  equipment?: Maybe<ProductsFields_Equipment>;
  advantages?: Maybe<ProductsFields_Advantages>;
  video?: Maybe<ProductsFields_Video>;
  reviews?: Maybe<ProductsFields_Reviews>;
  moreProducts?: Maybe<ProductsFields_MoreProducts>;
  recommendedTogether?: Maybe<ProductsFields_RecommendedTogether>;
  faq?: Maybe<ProductsFields_Faq>;
  beforeafter?: Maybe<ProductsFields_Beforeafter>;
  updatedAt?: Maybe<ProductsFields_UpdatedAt>;
  createdAt?: Maybe<ProductsFields_CreatedAt>;
};

export type ProductsFields_Title = {
  __typename?: 'ProductsFields_title';
  create?: Maybe<ProductsFields_Title_Create>;
  read?: Maybe<ProductsFields_Title_Read>;
  update?: Maybe<ProductsFields_Title_Update>;
  delete?: Maybe<ProductsFields_Title_Delete>;
};

export type ProductsFields_Title_Create = {
  __typename?: 'ProductsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Read = {
  __typename?: 'ProductsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Update = {
  __typename?: 'ProductsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Title_Delete = {
  __typename?: 'ProductsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price = {
  __typename?: 'ProductsFields_price';
  create?: Maybe<ProductsFields_Price_Create>;
  read?: Maybe<ProductsFields_Price_Read>;
  update?: Maybe<ProductsFields_Price_Update>;
  delete?: Maybe<ProductsFields_Price_Delete>;
};

export type ProductsFields_Price_Create = {
  __typename?: 'ProductsFields_price_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Read = {
  __typename?: 'ProductsFields_price_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Update = {
  __typename?: 'ProductsFields_price_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Price_Delete = {
  __typename?: 'ProductsFields_price_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating = {
  __typename?: 'ProductsFields_rating';
  create?: Maybe<ProductsFields_Rating_Create>;
  read?: Maybe<ProductsFields_Rating_Read>;
  update?: Maybe<ProductsFields_Rating_Update>;
  delete?: Maybe<ProductsFields_Rating_Delete>;
};

export type ProductsFields_Rating_Create = {
  __typename?: 'ProductsFields_rating_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Read = {
  __typename?: 'ProductsFields_rating_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Update = {
  __typename?: 'ProductsFields_rating_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Rating_Delete = {
  __typename?: 'ProductsFields_rating_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug = {
  __typename?: 'ProductsFields_generateSlug';
  create?: Maybe<ProductsFields_GenerateSlug_Create>;
  read?: Maybe<ProductsFields_GenerateSlug_Read>;
  update?: Maybe<ProductsFields_GenerateSlug_Update>;
  delete?: Maybe<ProductsFields_GenerateSlug_Delete>;
};

export type ProductsFields_GenerateSlug_Create = {
  __typename?: 'ProductsFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Read = {
  __typename?: 'ProductsFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Update = {
  __typename?: 'ProductsFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_GenerateSlug_Delete = {
  __typename?: 'ProductsFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug = {
  __typename?: 'ProductsFields_slug';
  create?: Maybe<ProductsFields_Slug_Create>;
  read?: Maybe<ProductsFields_Slug_Read>;
  update?: Maybe<ProductsFields_Slug_Update>;
  delete?: Maybe<ProductsFields_Slug_Delete>;
};

export type ProductsFields_Slug_Create = {
  __typename?: 'ProductsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Read = {
  __typename?: 'ProductsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Update = {
  __typename?: 'ProductsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Slug_Delete = {
  __typename?: 'ProductsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Category = {
  __typename?: 'ProductsFields_category';
  create?: Maybe<ProductsFields_Category_Create>;
  read?: Maybe<ProductsFields_Category_Read>;
  update?: Maybe<ProductsFields_Category_Update>;
  delete?: Maybe<ProductsFields_Category_Delete>;
};

export type ProductsFields_Category_Create = {
  __typename?: 'ProductsFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Category_Read = {
  __typename?: 'ProductsFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Category_Update = {
  __typename?: 'ProductsFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Category_Delete = {
  __typename?: 'ProductsFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Maniples = {
  __typename?: 'ProductsFields_maniples';
  create?: Maybe<ProductsFields_Maniples_Create>;
  read?: Maybe<ProductsFields_Maniples_Read>;
  update?: Maybe<ProductsFields_Maniples_Update>;
  delete?: Maybe<ProductsFields_Maniples_Delete>;
};

export type ProductsFields_Maniples_Create = {
  __typename?: 'ProductsFields_maniples_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Maniples_Read = {
  __typename?: 'ProductsFields_maniples_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Maniples_Update = {
  __typename?: 'ProductsFields_maniples_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Maniples_Delete = {
  __typename?: 'ProductsFields_maniples_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PowerWatts = {
  __typename?: 'ProductsFields_powerWatts';
  create?: Maybe<ProductsFields_PowerWatts_Create>;
  read?: Maybe<ProductsFields_PowerWatts_Read>;
  update?: Maybe<ProductsFields_PowerWatts_Update>;
  delete?: Maybe<ProductsFields_PowerWatts_Delete>;
};

export type ProductsFields_PowerWatts_Create = {
  __typename?: 'ProductsFields_powerWatts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PowerWatts_Read = {
  __typename?: 'ProductsFields_powerWatts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PowerWatts_Update = {
  __typename?: 'ProductsFields_powerWatts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_PowerWatts_Delete = {
  __typename?: 'ProductsFields_powerWatts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details = {
  __typename?: 'ProductsFields_details';
  create?: Maybe<ProductsFields_Details_Create>;
  read?: Maybe<ProductsFields_Details_Read>;
  update?: Maybe<ProductsFields_Details_Update>;
  delete?: Maybe<ProductsFields_Details_Delete>;
};

export type ProductsFields_Details_Create = {
  __typename?: 'ProductsFields_details_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Read = {
  __typename?: 'ProductsFields_details_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Update = {
  __typename?: 'ProductsFields_details_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Details_Delete = {
  __typename?: 'ProductsFields_details_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ShortDescription = {
  __typename?: 'ProductsFields_shortDescription';
  create?: Maybe<ProductsFields_ShortDescription_Create>;
  read?: Maybe<ProductsFields_ShortDescription_Read>;
  update?: Maybe<ProductsFields_ShortDescription_Update>;
  delete?: Maybe<ProductsFields_ShortDescription_Delete>;
};

export type ProductsFields_ShortDescription_Create = {
  __typename?: 'ProductsFields_shortDescription_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ShortDescription_Read = {
  __typename?: 'ProductsFields_shortDescription_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ShortDescription_Update = {
  __typename?: 'ProductsFields_shortDescription_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ShortDescription_Delete = {
  __typename?: 'ProductsFields_shortDescription_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery = {
  __typename?: 'ProductsFields_gallery';
  create?: Maybe<ProductsFields_Gallery_Create>;
  read?: Maybe<ProductsFields_Gallery_Read>;
  update?: Maybe<ProductsFields_Gallery_Update>;
  delete?: Maybe<ProductsFields_Gallery_Delete>;
};

export type ProductsFields_Gallery_Create = {
  __typename?: 'ProductsFields_gallery_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Read = {
  __typename?: 'ProductsFields_gallery_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Update = {
  __typename?: 'ProductsFields_gallery_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Gallery_Delete = {
  __typename?: 'ProductsFields_gallery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures = {
  __typename?: 'ProductsFields_listFeatures';
  create?: Maybe<ProductsFields_ListFeatures_Create>;
  read?: Maybe<ProductsFields_ListFeatures_Read>;
  update?: Maybe<ProductsFields_ListFeatures_Update>;
  delete?: Maybe<ProductsFields_ListFeatures_Delete>;
  fields?: Maybe<ProductsFields_ListFeatures_Fields>;
};

export type ProductsFields_ListFeatures_Create = {
  __typename?: 'ProductsFields_listFeatures_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Read = {
  __typename?: 'ProductsFields_listFeatures_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Update = {
  __typename?: 'ProductsFields_listFeatures_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Delete = {
  __typename?: 'ProductsFields_listFeatures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Fields = {
  __typename?: 'ProductsFields_listFeatures_Fields';
  feature?: Maybe<ProductsFields_ListFeatures_Feature>;
  id?: Maybe<ProductsFields_ListFeatures_Id>;
};

export type ProductsFields_ListFeatures_Feature = {
  __typename?: 'ProductsFields_listFeatures_feature';
  create?: Maybe<ProductsFields_ListFeatures_Feature_Create>;
  read?: Maybe<ProductsFields_ListFeatures_Feature_Read>;
  update?: Maybe<ProductsFields_ListFeatures_Feature_Update>;
  delete?: Maybe<ProductsFields_ListFeatures_Feature_Delete>;
};

export type ProductsFields_ListFeatures_Feature_Create = {
  __typename?: 'ProductsFields_listFeatures_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Feature_Read = {
  __typename?: 'ProductsFields_listFeatures_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Feature_Update = {
  __typename?: 'ProductsFields_listFeatures_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Feature_Delete = {
  __typename?: 'ProductsFields_listFeatures_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Id = {
  __typename?: 'ProductsFields_listFeatures_id';
  create?: Maybe<ProductsFields_ListFeatures_Id_Create>;
  read?: Maybe<ProductsFields_ListFeatures_Id_Read>;
  update?: Maybe<ProductsFields_ListFeatures_Id_Update>;
  delete?: Maybe<ProductsFields_ListFeatures_Id_Delete>;
};

export type ProductsFields_ListFeatures_Id_Create = {
  __typename?: 'ProductsFields_listFeatures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Id_Read = {
  __typename?: 'ProductsFields_listFeatures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Id_Update = {
  __typename?: 'ProductsFields_listFeatures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_ListFeatures_Id_Delete = {
  __typename?: 'ProductsFields_listFeatures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures = {
  __typename?: 'ProductsFields_compareFeatures';
  create?: Maybe<ProductsFields_CompareFeatures_Create>;
  read?: Maybe<ProductsFields_CompareFeatures_Read>;
  update?: Maybe<ProductsFields_CompareFeatures_Update>;
  delete?: Maybe<ProductsFields_CompareFeatures_Delete>;
  fields?: Maybe<ProductsFields_CompareFeatures_Fields>;
};

export type ProductsFields_CompareFeatures_Create = {
  __typename?: 'ProductsFields_compareFeatures_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Read = {
  __typename?: 'ProductsFields_compareFeatures_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Update = {
  __typename?: 'ProductsFields_compareFeatures_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Delete = {
  __typename?: 'ProductsFields_compareFeatures_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Fields = {
  __typename?: 'ProductsFields_compareFeatures_Fields';
  label?: Maybe<ProductsFields_CompareFeatures_Label>;
  value?: Maybe<ProductsFields_CompareFeatures_Value>;
  id?: Maybe<ProductsFields_CompareFeatures_Id>;
};

export type ProductsFields_CompareFeatures_Label = {
  __typename?: 'ProductsFields_compareFeatures_label';
  create?: Maybe<ProductsFields_CompareFeatures_Label_Create>;
  read?: Maybe<ProductsFields_CompareFeatures_Label_Read>;
  update?: Maybe<ProductsFields_CompareFeatures_Label_Update>;
  delete?: Maybe<ProductsFields_CompareFeatures_Label_Delete>;
};

export type ProductsFields_CompareFeatures_Label_Create = {
  __typename?: 'ProductsFields_compareFeatures_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Label_Read = {
  __typename?: 'ProductsFields_compareFeatures_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Label_Update = {
  __typename?: 'ProductsFields_compareFeatures_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Label_Delete = {
  __typename?: 'ProductsFields_compareFeatures_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Value = {
  __typename?: 'ProductsFields_compareFeatures_value';
  create?: Maybe<ProductsFields_CompareFeatures_Value_Create>;
  read?: Maybe<ProductsFields_CompareFeatures_Value_Read>;
  update?: Maybe<ProductsFields_CompareFeatures_Value_Update>;
  delete?: Maybe<ProductsFields_CompareFeatures_Value_Delete>;
};

export type ProductsFields_CompareFeatures_Value_Create = {
  __typename?: 'ProductsFields_compareFeatures_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Value_Read = {
  __typename?: 'ProductsFields_compareFeatures_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Value_Update = {
  __typename?: 'ProductsFields_compareFeatures_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Value_Delete = {
  __typename?: 'ProductsFields_compareFeatures_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Id = {
  __typename?: 'ProductsFields_compareFeatures_id';
  create?: Maybe<ProductsFields_CompareFeatures_Id_Create>;
  read?: Maybe<ProductsFields_CompareFeatures_Id_Read>;
  update?: Maybe<ProductsFields_CompareFeatures_Id_Update>;
  delete?: Maybe<ProductsFields_CompareFeatures_Id_Delete>;
};

export type ProductsFields_CompareFeatures_Id_Create = {
  __typename?: 'ProductsFields_compareFeatures_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Id_Read = {
  __typename?: 'ProductsFields_compareFeatures_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Id_Update = {
  __typename?: 'ProductsFields_compareFeatures_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CompareFeatures_Id_Delete = {
  __typename?: 'ProductsFields_compareFeatures_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description = {
  __typename?: 'ProductsFields_description';
  content?: Maybe<ProductsFields_Description_Content>;
};

export type ProductsFields_Description_Content = {
  __typename?: 'ProductsFields_description_content';
  create?: Maybe<ProductsFields_Description_Content_Create>;
  read?: Maybe<ProductsFields_Description_Content_Read>;
  update?: Maybe<ProductsFields_Description_Content_Update>;
  delete?: Maybe<ProductsFields_Description_Content_Delete>;
};

export type ProductsFields_Description_Content_Create = {
  __typename?: 'ProductsFields_description_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Content_Read = {
  __typename?: 'ProductsFields_description_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Content_Update = {
  __typename?: 'ProductsFields_description_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Description_Content_Delete = {
  __typename?: 'ProductsFields_description_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics = {
  __typename?: 'ProductsFields_characteristics';
  items?: Maybe<ProductsFields_Characteristics_Items>;
};

export type ProductsFields_Characteristics_Items = {
  __typename?: 'ProductsFields_characteristics_items';
  create?: Maybe<ProductsFields_Characteristics_Items_Create>;
  read?: Maybe<ProductsFields_Characteristics_Items_Read>;
  update?: Maybe<ProductsFields_Characteristics_Items_Update>;
  delete?: Maybe<ProductsFields_Characteristics_Items_Delete>;
  fields?: Maybe<ProductsFields_Characteristics_Items_Fields>;
};

export type ProductsFields_Characteristics_Items_Create = {
  __typename?: 'ProductsFields_characteristics_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Read = {
  __typename?: 'ProductsFields_characteristics_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Update = {
  __typename?: 'ProductsFields_characteristics_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Delete = {
  __typename?: 'ProductsFields_characteristics_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Fields = {
  __typename?: 'ProductsFields_characteristics_items_Fields';
  specification?: Maybe<ProductsFields_Characteristics_Items_Specification>;
  id?: Maybe<ProductsFields_Characteristics_Items_Id>;
};

export type ProductsFields_Characteristics_Items_Specification = {
  __typename?: 'ProductsFields_characteristics_items_specification';
  create?: Maybe<ProductsFields_Characteristics_Items_Specification_Create>;
  read?: Maybe<ProductsFields_Characteristics_Items_Specification_Read>;
  update?: Maybe<ProductsFields_Characteristics_Items_Specification_Update>;
  delete?: Maybe<ProductsFields_Characteristics_Items_Specification_Delete>;
};

export type ProductsFields_Characteristics_Items_Specification_Create = {
  __typename?: 'ProductsFields_characteristics_items_specification_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Specification_Read = {
  __typename?: 'ProductsFields_characteristics_items_specification_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Specification_Update = {
  __typename?: 'ProductsFields_characteristics_items_specification_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Specification_Delete = {
  __typename?: 'ProductsFields_characteristics_items_specification_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Id = {
  __typename?: 'ProductsFields_characteristics_items_id';
  create?: Maybe<ProductsFields_Characteristics_Items_Id_Create>;
  read?: Maybe<ProductsFields_Characteristics_Items_Id_Read>;
  update?: Maybe<ProductsFields_Characteristics_Items_Id_Update>;
  delete?: Maybe<ProductsFields_Characteristics_Items_Id_Delete>;
};

export type ProductsFields_Characteristics_Items_Id_Create = {
  __typename?: 'ProductsFields_characteristics_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Id_Read = {
  __typename?: 'ProductsFields_characteristics_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Id_Update = {
  __typename?: 'ProductsFields_characteristics_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Id_Delete = {
  __typename?: 'ProductsFields_characteristics_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment = {
  __typename?: 'ProductsFields_equipment';
  content?: Maybe<ProductsFields_Equipment_Content>;
};

export type ProductsFields_Equipment_Content = {
  __typename?: 'ProductsFields_equipment_content';
  create?: Maybe<ProductsFields_Equipment_Content_Create>;
  read?: Maybe<ProductsFields_Equipment_Content_Read>;
  update?: Maybe<ProductsFields_Equipment_Content_Update>;
  delete?: Maybe<ProductsFields_Equipment_Content_Delete>;
};

export type ProductsFields_Equipment_Content_Create = {
  __typename?: 'ProductsFields_equipment_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Content_Read = {
  __typename?: 'ProductsFields_equipment_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Content_Update = {
  __typename?: 'ProductsFields_equipment_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Content_Delete = {
  __typename?: 'ProductsFields_equipment_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages = {
  __typename?: 'ProductsFields_advantages';
  items?: Maybe<ProductsFields_Advantages_Items>;
};

export type ProductsFields_Advantages_Items = {
  __typename?: 'ProductsFields_advantages_items';
  create?: Maybe<ProductsFields_Advantages_Items_Create>;
  read?: Maybe<ProductsFields_Advantages_Items_Read>;
  update?: Maybe<ProductsFields_Advantages_Items_Update>;
  delete?: Maybe<ProductsFields_Advantages_Items_Delete>;
  fields?: Maybe<ProductsFields_Advantages_Items_Fields>;
};

export type ProductsFields_Advantages_Items_Create = {
  __typename?: 'ProductsFields_advantages_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Read = {
  __typename?: 'ProductsFields_advantages_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Update = {
  __typename?: 'ProductsFields_advantages_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Delete = {
  __typename?: 'ProductsFields_advantages_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Fields = {
  __typename?: 'ProductsFields_advantages_items_Fields';
  advantage?: Maybe<ProductsFields_Advantages_Items_Advantage>;
  id?: Maybe<ProductsFields_Advantages_Items_Id>;
};

export type ProductsFields_Advantages_Items_Advantage = {
  __typename?: 'ProductsFields_advantages_items_advantage';
  create?: Maybe<ProductsFields_Advantages_Items_Advantage_Create>;
  read?: Maybe<ProductsFields_Advantages_Items_Advantage_Read>;
  update?: Maybe<ProductsFields_Advantages_Items_Advantage_Update>;
  delete?: Maybe<ProductsFields_Advantages_Items_Advantage_Delete>;
};

export type ProductsFields_Advantages_Items_Advantage_Create = {
  __typename?: 'ProductsFields_advantages_items_advantage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Advantage_Read = {
  __typename?: 'ProductsFields_advantages_items_advantage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Advantage_Update = {
  __typename?: 'ProductsFields_advantages_items_advantage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Advantage_Delete = {
  __typename?: 'ProductsFields_advantages_items_advantage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Id = {
  __typename?: 'ProductsFields_advantages_items_id';
  create?: Maybe<ProductsFields_Advantages_Items_Id_Create>;
  read?: Maybe<ProductsFields_Advantages_Items_Id_Read>;
  update?: Maybe<ProductsFields_Advantages_Items_Id_Update>;
  delete?: Maybe<ProductsFields_Advantages_Items_Id_Delete>;
};

export type ProductsFields_Advantages_Items_Id_Create = {
  __typename?: 'ProductsFields_advantages_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Id_Read = {
  __typename?: 'ProductsFields_advantages_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Id_Update = {
  __typename?: 'ProductsFields_advantages_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Id_Delete = {
  __typename?: 'ProductsFields_advantages_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video = {
  __typename?: 'ProductsFields_video';
  content?: Maybe<ProductsFields_Video_Content>;
};

export type ProductsFields_Video_Content = {
  __typename?: 'ProductsFields_video_content';
  create?: Maybe<ProductsFields_Video_Content_Create>;
  read?: Maybe<ProductsFields_Video_Content_Read>;
  update?: Maybe<ProductsFields_Video_Content_Update>;
  delete?: Maybe<ProductsFields_Video_Content_Delete>;
};

export type ProductsFields_Video_Content_Create = {
  __typename?: 'ProductsFields_video_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Content_Read = {
  __typename?: 'ProductsFields_video_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Content_Update = {
  __typename?: 'ProductsFields_video_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Content_Delete = {
  __typename?: 'ProductsFields_video_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Reviews = {
  __typename?: 'ProductsFields_reviews';
  create?: Maybe<ProductsFields_Reviews_Create>;
  read?: Maybe<ProductsFields_Reviews_Read>;
  update?: Maybe<ProductsFields_Reviews_Update>;
  delete?: Maybe<ProductsFields_Reviews_Delete>;
};

export type ProductsFields_Reviews_Create = {
  __typename?: 'ProductsFields_reviews_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Reviews_Read = {
  __typename?: 'ProductsFields_reviews_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Reviews_Update = {
  __typename?: 'ProductsFields_reviews_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Reviews_Delete = {
  __typename?: 'ProductsFields_reviews_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_MoreProducts = {
  __typename?: 'ProductsFields_moreProducts';
  create?: Maybe<ProductsFields_MoreProducts_Create>;
  read?: Maybe<ProductsFields_MoreProducts_Read>;
  update?: Maybe<ProductsFields_MoreProducts_Update>;
  delete?: Maybe<ProductsFields_MoreProducts_Delete>;
};

export type ProductsFields_MoreProducts_Create = {
  __typename?: 'ProductsFields_moreProducts_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_MoreProducts_Read = {
  __typename?: 'ProductsFields_moreProducts_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_MoreProducts_Update = {
  __typename?: 'ProductsFields_moreProducts_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_MoreProducts_Delete = {
  __typename?: 'ProductsFields_moreProducts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RecommendedTogether = {
  __typename?: 'ProductsFields_recommendedTogether';
  create?: Maybe<ProductsFields_RecommendedTogether_Create>;
  read?: Maybe<ProductsFields_RecommendedTogether_Read>;
  update?: Maybe<ProductsFields_RecommendedTogether_Update>;
  delete?: Maybe<ProductsFields_RecommendedTogether_Delete>;
};

export type ProductsFields_RecommendedTogether_Create = {
  __typename?: 'ProductsFields_recommendedTogether_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RecommendedTogether_Read = {
  __typename?: 'ProductsFields_recommendedTogether_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RecommendedTogether_Update = {
  __typename?: 'ProductsFields_recommendedTogether_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_RecommendedTogether_Delete = {
  __typename?: 'ProductsFields_recommendedTogether_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq = {
  __typename?: 'ProductsFields_faq';
  create?: Maybe<ProductsFields_Faq_Create>;
  read?: Maybe<ProductsFields_Faq_Read>;
  update?: Maybe<ProductsFields_Faq_Update>;
  delete?: Maybe<ProductsFields_Faq_Delete>;
  fields?: Maybe<ProductsFields_Faq_Fields>;
};

export type ProductsFields_Faq_Create = {
  __typename?: 'ProductsFields_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Read = {
  __typename?: 'ProductsFields_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Update = {
  __typename?: 'ProductsFields_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Delete = {
  __typename?: 'ProductsFields_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Fields = {
  __typename?: 'ProductsFields_faq_Fields';
  question?: Maybe<ProductsFields_Faq_Question>;
  answer?: Maybe<ProductsFields_Faq_Answer>;
  id?: Maybe<ProductsFields_Faq_Id>;
};

export type ProductsFields_Faq_Question = {
  __typename?: 'ProductsFields_faq_question';
  create?: Maybe<ProductsFields_Faq_Question_Create>;
  read?: Maybe<ProductsFields_Faq_Question_Read>;
  update?: Maybe<ProductsFields_Faq_Question_Update>;
  delete?: Maybe<ProductsFields_Faq_Question_Delete>;
};

export type ProductsFields_Faq_Question_Create = {
  __typename?: 'ProductsFields_faq_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Question_Read = {
  __typename?: 'ProductsFields_faq_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Question_Update = {
  __typename?: 'ProductsFields_faq_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Question_Delete = {
  __typename?: 'ProductsFields_faq_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Answer = {
  __typename?: 'ProductsFields_faq_answer';
  create?: Maybe<ProductsFields_Faq_Answer_Create>;
  read?: Maybe<ProductsFields_Faq_Answer_Read>;
  update?: Maybe<ProductsFields_Faq_Answer_Update>;
  delete?: Maybe<ProductsFields_Faq_Answer_Delete>;
};

export type ProductsFields_Faq_Answer_Create = {
  __typename?: 'ProductsFields_faq_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Answer_Read = {
  __typename?: 'ProductsFields_faq_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Answer_Update = {
  __typename?: 'ProductsFields_faq_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Answer_Delete = {
  __typename?: 'ProductsFields_faq_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Id = {
  __typename?: 'ProductsFields_faq_id';
  create?: Maybe<ProductsFields_Faq_Id_Create>;
  read?: Maybe<ProductsFields_Faq_Id_Read>;
  update?: Maybe<ProductsFields_Faq_Id_Update>;
  delete?: Maybe<ProductsFields_Faq_Id_Delete>;
};

export type ProductsFields_Faq_Id_Create = {
  __typename?: 'ProductsFields_faq_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Id_Read = {
  __typename?: 'ProductsFields_faq_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Id_Update = {
  __typename?: 'ProductsFields_faq_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Faq_Id_Delete = {
  __typename?: 'ProductsFields_faq_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter = {
  __typename?: 'ProductsFields_beforeafter';
  create?: Maybe<ProductsFields_Beforeafter_Create>;
  read?: Maybe<ProductsFields_Beforeafter_Read>;
  update?: Maybe<ProductsFields_Beforeafter_Update>;
  delete?: Maybe<ProductsFields_Beforeafter_Delete>;
  fields?: Maybe<ProductsFields_Beforeafter_Fields>;
};

export type ProductsFields_Beforeafter_Create = {
  __typename?: 'ProductsFields_beforeafter_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Read = {
  __typename?: 'ProductsFields_beforeafter_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Update = {
  __typename?: 'ProductsFields_beforeafter_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Delete = {
  __typename?: 'ProductsFields_beforeafter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Fields = {
  __typename?: 'ProductsFields_beforeafter_Fields';
  before?: Maybe<ProductsFields_Beforeafter_Before>;
  after?: Maybe<ProductsFields_Beforeafter_After>;
  id?: Maybe<ProductsFields_Beforeafter_Id>;
};

export type ProductsFields_Beforeafter_Before = {
  __typename?: 'ProductsFields_beforeafter_before';
  create?: Maybe<ProductsFields_Beforeafter_Before_Create>;
  read?: Maybe<ProductsFields_Beforeafter_Before_Read>;
  update?: Maybe<ProductsFields_Beforeafter_Before_Update>;
  delete?: Maybe<ProductsFields_Beforeafter_Before_Delete>;
};

export type ProductsFields_Beforeafter_Before_Create = {
  __typename?: 'ProductsFields_beforeafter_before_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Before_Read = {
  __typename?: 'ProductsFields_beforeafter_before_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Before_Update = {
  __typename?: 'ProductsFields_beforeafter_before_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Before_Delete = {
  __typename?: 'ProductsFields_beforeafter_before_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_After = {
  __typename?: 'ProductsFields_beforeafter_after';
  create?: Maybe<ProductsFields_Beforeafter_After_Create>;
  read?: Maybe<ProductsFields_Beforeafter_After_Read>;
  update?: Maybe<ProductsFields_Beforeafter_After_Update>;
  delete?: Maybe<ProductsFields_Beforeafter_After_Delete>;
};

export type ProductsFields_Beforeafter_After_Create = {
  __typename?: 'ProductsFields_beforeafter_after_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_After_Read = {
  __typename?: 'ProductsFields_beforeafter_after_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_After_Update = {
  __typename?: 'ProductsFields_beforeafter_after_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_After_Delete = {
  __typename?: 'ProductsFields_beforeafter_after_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Id = {
  __typename?: 'ProductsFields_beforeafter_id';
  create?: Maybe<ProductsFields_Beforeafter_Id_Create>;
  read?: Maybe<ProductsFields_Beforeafter_Id_Read>;
  update?: Maybe<ProductsFields_Beforeafter_Id_Update>;
  delete?: Maybe<ProductsFields_Beforeafter_Id_Delete>;
};

export type ProductsFields_Beforeafter_Id_Create = {
  __typename?: 'ProductsFields_beforeafter_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Id_Read = {
  __typename?: 'ProductsFields_beforeafter_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Id_Update = {
  __typename?: 'ProductsFields_beforeafter_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Beforeafter_Id_Delete = {
  __typename?: 'ProductsFields_beforeafter_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt = {
  __typename?: 'ProductsFields_updatedAt';
  create?: Maybe<ProductsFields_UpdatedAt_Create>;
  read?: Maybe<ProductsFields_UpdatedAt_Read>;
  update?: Maybe<ProductsFields_UpdatedAt_Update>;
  delete?: Maybe<ProductsFields_UpdatedAt_Delete>;
};

export type ProductsFields_UpdatedAt_Create = {
  __typename?: 'ProductsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Read = {
  __typename?: 'ProductsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Update = {
  __typename?: 'ProductsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_UpdatedAt_Delete = {
  __typename?: 'ProductsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt = {
  __typename?: 'ProductsFields_createdAt';
  create?: Maybe<ProductsFields_CreatedAt_Create>;
  read?: Maybe<ProductsFields_CreatedAt_Read>;
  update?: Maybe<ProductsFields_CreatedAt_Update>;
  delete?: Maybe<ProductsFields_CreatedAt_Delete>;
};

export type ProductsFields_CreatedAt_Create = {
  __typename?: 'ProductsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Read = {
  __typename?: 'ProductsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Update = {
  __typename?: 'ProductsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_CreatedAt_Delete = {
  __typename?: 'ProductsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsCreateAccess = {
  __typename?: 'ProductsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsReadAccess = {
  __typename?: 'ProductsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsUpdateAccess = {
  __typename?: 'ProductsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProductsDeleteAccess = {
  __typename?: 'ProductsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryAccess = {
  __typename?: 'categoryAccess';
  fields?: Maybe<CategoryFields>;
  create?: Maybe<CategoryCreateAccess>;
  read?: Maybe<CategoryReadAccess>;
  update?: Maybe<CategoryUpdateAccess>;
  delete?: Maybe<CategoryDeleteAccess>;
};

export type CategoryFields = {
  __typename?: 'CategoryFields';
  image?: Maybe<CategoryFields_Image>;
  title?: Maybe<CategoryFields_Title>;
  description?: Maybe<CategoryFields_Description>;
  generateSlug?: Maybe<CategoryFields_GenerateSlug>;
  slug?: Maybe<CategoryFields_Slug>;
  updatedAt?: Maybe<CategoryFields_UpdatedAt>;
  createdAt?: Maybe<CategoryFields_CreatedAt>;
};

export type CategoryFields_Image = {
  __typename?: 'CategoryFields_image';
  create?: Maybe<CategoryFields_Image_Create>;
  read?: Maybe<CategoryFields_Image_Read>;
  update?: Maybe<CategoryFields_Image_Update>;
  delete?: Maybe<CategoryFields_Image_Delete>;
};

export type CategoryFields_Image_Create = {
  __typename?: 'CategoryFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Image_Read = {
  __typename?: 'CategoryFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Image_Update = {
  __typename?: 'CategoryFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Image_Delete = {
  __typename?: 'CategoryFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Title = {
  __typename?: 'CategoryFields_title';
  create?: Maybe<CategoryFields_Title_Create>;
  read?: Maybe<CategoryFields_Title_Read>;
  update?: Maybe<CategoryFields_Title_Update>;
  delete?: Maybe<CategoryFields_Title_Delete>;
};

export type CategoryFields_Title_Create = {
  __typename?: 'CategoryFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Title_Read = {
  __typename?: 'CategoryFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Title_Update = {
  __typename?: 'CategoryFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Title_Delete = {
  __typename?: 'CategoryFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Description = {
  __typename?: 'CategoryFields_description';
  create?: Maybe<CategoryFields_Description_Create>;
  read?: Maybe<CategoryFields_Description_Read>;
  update?: Maybe<CategoryFields_Description_Update>;
  delete?: Maybe<CategoryFields_Description_Delete>;
};

export type CategoryFields_Description_Create = {
  __typename?: 'CategoryFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Description_Read = {
  __typename?: 'CategoryFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Description_Update = {
  __typename?: 'CategoryFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Description_Delete = {
  __typename?: 'CategoryFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_GenerateSlug = {
  __typename?: 'CategoryFields_generateSlug';
  create?: Maybe<CategoryFields_GenerateSlug_Create>;
  read?: Maybe<CategoryFields_GenerateSlug_Read>;
  update?: Maybe<CategoryFields_GenerateSlug_Update>;
  delete?: Maybe<CategoryFields_GenerateSlug_Delete>;
};

export type CategoryFields_GenerateSlug_Create = {
  __typename?: 'CategoryFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_GenerateSlug_Read = {
  __typename?: 'CategoryFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_GenerateSlug_Update = {
  __typename?: 'CategoryFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_GenerateSlug_Delete = {
  __typename?: 'CategoryFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Slug = {
  __typename?: 'CategoryFields_slug';
  create?: Maybe<CategoryFields_Slug_Create>;
  read?: Maybe<CategoryFields_Slug_Read>;
  update?: Maybe<CategoryFields_Slug_Update>;
  delete?: Maybe<CategoryFields_Slug_Delete>;
};

export type CategoryFields_Slug_Create = {
  __typename?: 'CategoryFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Slug_Read = {
  __typename?: 'CategoryFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Slug_Update = {
  __typename?: 'CategoryFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_Slug_Delete = {
  __typename?: 'CategoryFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_UpdatedAt = {
  __typename?: 'CategoryFields_updatedAt';
  create?: Maybe<CategoryFields_UpdatedAt_Create>;
  read?: Maybe<CategoryFields_UpdatedAt_Read>;
  update?: Maybe<CategoryFields_UpdatedAt_Update>;
  delete?: Maybe<CategoryFields_UpdatedAt_Delete>;
};

export type CategoryFields_UpdatedAt_Create = {
  __typename?: 'CategoryFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_UpdatedAt_Read = {
  __typename?: 'CategoryFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_UpdatedAt_Update = {
  __typename?: 'CategoryFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_UpdatedAt_Delete = {
  __typename?: 'CategoryFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_CreatedAt = {
  __typename?: 'CategoryFields_createdAt';
  create?: Maybe<CategoryFields_CreatedAt_Create>;
  read?: Maybe<CategoryFields_CreatedAt_Read>;
  update?: Maybe<CategoryFields_CreatedAt_Update>;
  delete?: Maybe<CategoryFields_CreatedAt_Delete>;
};

export type CategoryFields_CreatedAt_Create = {
  __typename?: 'CategoryFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_CreatedAt_Read = {
  __typename?: 'CategoryFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_CreatedAt_Update = {
  __typename?: 'CategoryFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoryFields_CreatedAt_Delete = {
  __typename?: 'CategoryFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoryCreateAccess = {
  __typename?: 'CategoryCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryReadAccess = {
  __typename?: 'CategoryReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryUpdateAccess = {
  __typename?: 'CategoryUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoryDeleteAccess = {
  __typename?: 'CategoryDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Payload_KvAccess = {
  __typename?: 'payload_kvAccess';
  fields?: Maybe<PayloadKvFields>;
  create?: Maybe<PayloadKvCreateAccess>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  key?: Maybe<PayloadKvFields_Key>;
  data?: Maybe<PayloadKvFields_Data>;
};

export type PayloadKvFields_Key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_Key_Create>;
  read?: Maybe<PayloadKvFields_Key_Read>;
  update?: Maybe<PayloadKvFields_Key_Update>;
  delete?: Maybe<PayloadKvFields_Key_Delete>;
};

export type PayloadKvFields_Key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_Data_Create>;
  read?: Maybe<PayloadKvFields_Data_Read>;
  update?: Maybe<PayloadKvFields_Data_Update>;
  delete?: Maybe<PayloadKvFields_Data_Delete>;
};

export type PayloadKvFields_Data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  fields?: Maybe<PayloadLockedDocumentsFields>;
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  fields?: Maybe<PayloadPreferencesFields>;
  create?: Maybe<PayloadPreferencesCreateAccess>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  user?: Maybe<PayloadPreferencesFields_User>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  value?: Maybe<PayloadPreferencesFields_Value>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  unlockUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  resetPasswordUser?: Maybe<UsersResetPassword>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
  createMedia?: Maybe<Media>;
  updateMedia?: Maybe<Media>;
  deleteMedia?: Maybe<Media>;
  duplicateMedia?: Maybe<Media>;
  createReview?: Maybe<Review>;
  updateReview?: Maybe<Review>;
  deleteReview?: Maybe<Review>;
  duplicateReview?: Maybe<Review>;
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  duplicateProduct?: Maybe<Product>;
  createCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Category>;
  duplicateCategory?: Maybe<Category>;
  createPayloadKv?: Maybe<PayloadKv>;
  updatePayloadKv?: Maybe<PayloadKv>;
  deletePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationForgotPasswordUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateMediaArgs = {
  id: Scalars['Int']['input'];
  data: MutationMediaInput;
};


export type MutationCreateReviewArgs = {
  data: MutationReviewInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationReviewUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateReviewArgs = {
  id: Scalars['Int']['input'];
  data: MutationReviewInput;
};


export type MutationCreateProductArgs = {
  data: MutationProductInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateProductArgs = {
  id: Scalars['Int']['input'];
  data: MutationProductInput;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateCategoryArgs = {
  id: Scalars['Int']['input'];
  data: MutationCategoryInput;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadKvArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadKvArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicatePayloadKvArgs = {
  id: Scalars['Int']['input'];
  data: MutationPayloadKvInput;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  data: MutationPayloadLockedDocumentInput;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicatePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  data: MutationPayloadPreferenceInput;
};

export type MutationUserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role: User_Role_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  password: Scalars['String']['input'];
};

export enum User_Role_MutationInput {
  Admin = 'admin',
  User = 'user',
  Dealer = 'dealer'
}

export type MutationUser_SessionsInput = {
  id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
};

export type MutationUserUpdateInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserUpdate_Role_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export enum UserUpdate_Role_MutationInput {
  Admin = 'admin',
  User = 'user',
  Dealer = 'dealer'
}

export type MutationUserUpdate_SessionsInput = {
  id: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  role: UsersJwt_Role;
  email: Scalars['EmailAddress']['output'];
  collection: Scalars['String']['output'];
};

export enum UsersJwt_Role {
  Admin = 'admin',
  User = 'user',
  Dealer = 'dealer'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationReviewInput = {
  avatar?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationReviewUpdateInput = {
  avatar?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductInput = {
  title: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  category?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  maniples?: InputMaybe<Scalars['Float']['input']>;
  powerWatts?: InputMaybe<Scalars['Float']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  listFeatures?: InputMaybe<Array<InputMaybe<MutationProduct_ListFeaturesInput>>>;
  compareFeatures?: InputMaybe<Array<InputMaybe<MutationProduct_CompareFeaturesInput>>>;
  description?: InputMaybe<MutationProduct_DescriptionInput>;
  characteristics?: InputMaybe<MutationProduct_CharacteristicsInput>;
  equipment?: InputMaybe<MutationProduct_EquipmentInput>;
  advantages?: InputMaybe<MutationProduct_AdvantagesInput>;
  video?: InputMaybe<MutationProduct_VideoInput>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moreProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  recommendedTogether?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  faq?: InputMaybe<Array<InputMaybe<MutationProduct_FaqInput>>>;
  beforeafter?: InputMaybe<Array<InputMaybe<MutationProduct_BeforeafterInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_ListFeaturesInput = {
  feature: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_CompareFeaturesInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_DescriptionInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProduct_CharacteristicsInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProduct_Characteristics_ItemsInput>>>;
};

export type MutationProduct_Characteristics_ItemsInput = {
  specification: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_EquipmentInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProduct_AdvantagesInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProduct_Advantages_ItemsInput>>>;
};

export type MutationProduct_Advantages_ItemsInput = {
  advantage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_VideoInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProduct_FaqInput = {
  question?: InputMaybe<Scalars['String']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_BeforeafterInput = {
  before?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  maniples?: InputMaybe<Scalars['Float']['input']>;
  powerWatts?: InputMaybe<Scalars['Float']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  listFeatures?: InputMaybe<Array<InputMaybe<MutationProductUpdate_ListFeaturesInput>>>;
  compareFeatures?: InputMaybe<Array<InputMaybe<MutationProductUpdate_CompareFeaturesInput>>>;
  description?: InputMaybe<MutationProductUpdate_DescriptionInput>;
  characteristics?: InputMaybe<MutationProductUpdate_CharacteristicsInput>;
  equipment?: InputMaybe<MutationProductUpdate_EquipmentInput>;
  advantages?: InputMaybe<MutationProductUpdate_AdvantagesInput>;
  video?: InputMaybe<MutationProductUpdate_VideoInput>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  moreProducts?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  recommendedTogether?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  faq?: InputMaybe<Array<InputMaybe<MutationProductUpdate_FaqInput>>>;
  beforeafter?: InputMaybe<Array<InputMaybe<MutationProductUpdate_BeforeafterInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_ListFeaturesInput = {
  feature: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_CompareFeaturesInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_DescriptionInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductUpdate_CharacteristicsInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProductUpdate_Characteristics_ItemsInput>>>;
};

export type MutationProductUpdate_Characteristics_ItemsInput = {
  specification: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_EquipmentInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductUpdate_AdvantagesInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProductUpdate_Advantages_ItemsInput>>>;
};

export type MutationProductUpdate_Advantages_ItemsInput = {
  advantage: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_VideoInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductUpdate_FaqInput = {
  question?: InputMaybe<Scalars['String']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_BeforeafterInput = {
  before?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryInput = {
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdateInput = {
  image?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadKvInput = {
  key: Scalars['String']['input'];
  data: Scalars['JSON']['input'];
};

export type MutationPayloadKvUpdateInput = {
  key?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Users = 'users',
  Media = 'media',
  Reviews = 'reviews',
  Products = 'products',
  Category = 'category'
}

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type MutationPayloadLockedDocumentUpdateInput = {
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Users = 'users',
  Media = 'media',
  Reviews = 'reviews',
  Products = 'products',
  Category = 'category'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type MutationPayloadPreferenceInput = {
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type MutationPayloadPreferenceUpdateInput = {
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type GetLayoutDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLayoutDataQuery = { __typename?: 'Query', meUser?: { __typename?: 'usersMe', user?: { __typename?: 'User', id: number, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null, role: User_Role } | null } | null, Products?: { __typename?: 'Products', docs: Array<{ __typename?: 'Product', id: number, title: string, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', specification?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', content?: unknown | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', advantage?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', content?: unknown | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null }> } | null };

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductBySlugQuery = { __typename?: 'Query', Products?: { __typename?: 'Products', docs: Array<{ __typename?: 'Product', id: number, title: string, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', specification?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', content?: unknown | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', advantage?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', content?: unknown | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null }> } | null };

export type ProductFrontendFieldsFragment = { __typename?: 'Product', id: number, title: string, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', specification?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', content?: unknown | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', advantage?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', content?: unknown | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null };

export const ProductFrontendFieldsFragmentDoc = gql`
    fragment ProductFrontendFields on Product {
  id
  title
  price
  rating
  slug
  details
  shortDescription
  maniples
  powerWatts
  category {
    slug
  }
  gallery {
    url
  }
  listFeatures {
    feature
  }
  compareFeatures {
    label
    value
  }
  description {
    content
  }
  characteristics {
    items {
      specification
    }
  }
  equipment {
    content
  }
  advantages {
    items {
      advantage
    }
  }
  video {
    content
  }
  faq {
    question
    answer
  }
}
    `;
export const GetLayoutDataDocument = gql`
    query GetLayoutData {
  meUser {
    user {
      id
      email
      firstName
      lastName
      phone
      role
    }
  }
  Products(limit: 100, sort: "createdAt", where: {price: {greater_than: 0}}) {
    docs {
      ...ProductFrontendFields
    }
  }
}
    ${ProductFrontendFieldsFragmentDoc}`;
export const GetProductBySlugDocument = gql`
    query GetProductBySlug($slug: String!) {
  Products(limit: 1, where: {slug: {equals: $slug}}) {
    docs {
      ...ProductFrontendFields
    }
  }
}
    ${ProductFrontendFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetLayoutData(variables?: GetLayoutDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetLayoutDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLayoutDataQuery>({ document: GetLayoutDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetLayoutData', 'query', variables);
    },
    GetProductBySlug(variables: GetProductBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetProductBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductBySlugQuery>({ document: GetProductBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetProductBySlug', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;