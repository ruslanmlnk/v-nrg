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
  Article?: Maybe<Article>;
  Articles?: Maybe<Articles>;
  countArticles?: Maybe<CountArticles>;
  docAccessArticle?: Maybe<ArticlesDocAccess>;
  Order?: Maybe<Order>;
  Orders?: Maybe<Orders>;
  countOrders?: Maybe<CountOrders>;
  docAccessOrder?: Maybe<OrdersDocAccess>;
  LegalPage?: Maybe<LegalPage>;
  LegalPages?: Maybe<LegalPages>;
  countLegalPages?: Maybe<CountLegalPages>;
  docAccessLegalPage?: Maybe<Legal_PagesDocAccess>;
  Location?: Maybe<Location>;
  Locations?: Maybe<Locations>;
  countLocations?: Maybe<CountLocations>;
  docAccessLocation?: Maybe<LocationsDocAccess>;
  TrainingCategory?: Maybe<TrainingCategory>;
  TrainingCategories?: Maybe<TrainingCategories>;
  countTrainingCategories?: Maybe<CountTrainingCategories>;
  docAccessTrainingCategory?: Maybe<Training_CategoriesDocAccess>;
  TrainingVideo?: Maybe<TrainingVideo>;
  TrainingVideos?: Maybe<TrainingVideos>;
  countTrainingVideos?: Maybe<CountTrainingVideos>;
  docAccessTrainingVideo?: Maybe<Training_VideosDocAccess>;
  Application?: Maybe<Application>;
  Applications?: Maybe<Applications>;
  countApplications?: Maybe<CountApplications>;
  docAccessApplication?: Maybe<ApplicationsDocAccess>;
  DealerApplication?: Maybe<DealerApplication>;
  DealerApplications?: Maybe<DealerApplications>;
  countDealerApplications?: Maybe<CountDealerApplications>;
  docAccessDealerApplication?: Maybe<Dealer_ApplicationsDocAccess>;
  Currency?: Maybe<Currency>;
  Currencies?: Maybe<Currencies>;
  countCurrencies?: Maybe<CountCurrencies>;
  docAccessCurrency?: Maybe<CurrenciesDocAccess>;
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
  Home?: Maybe<Home>;
  docAccessHome?: Maybe<HomeDocAccess>;
  Training?: Maybe<Training>;
  docAccessTraining?: Maybe<TrainingDocAccess>;
  Contact?: Maybe<Contact>;
  docAccessContact?: Maybe<ContactsDocAccess>;
  Access?: Maybe<Access>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryMediaArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryReviewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Review_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessReviewArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Product_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Category_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryArticleArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryArticlesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Article_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountArticlesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Article_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessArticleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountOrdersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Order_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLegalPageArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLegalPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LegalPage_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountLegalPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LegalPage_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessLegalPageArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLocationArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLocationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Location_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountLocationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Location_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainingCategoryArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTrainingCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TrainingCategory_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountTrainingCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TrainingCategory_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessTrainingCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTrainingVideoArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTrainingVideosArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TrainingVideo_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountTrainingVideosArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TrainingVideo_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessTrainingVideoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryApplicationArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryApplicationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Application_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountApplicationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Application_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDealerApplicationArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDealerApplicationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DealerApplication_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountDealerApplicationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DealerApplication_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessDealerApplicationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCurrencyArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCurrenciesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Currency_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCountCurrenciesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Currency_Where>;
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessCurrencyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadKvArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryHomeArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTrainingArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role: User_Role;
  dealerDiscountPercent?: Maybe<Scalars['Float']['output']>;
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

export enum FallbackLocaleInputType {
  Uk = 'uk',
  En = 'en',
  None = 'none'
}

export enum LocaleInputType {
  Uk = 'uk',
  En = 'en'
}

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
  dealerDiscountPercent?: InputMaybe<User_DealerDiscountPercent_Operator>;
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

export type User_DealerDiscountPercent_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

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
  dealerDiscountPercent?: InputMaybe<User_DealerDiscountPercent_Operator>;
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
  dealerDiscountPercent?: InputMaybe<User_DealerDiscountPercent_Operator>;
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
  dealerDiscountPercent?: Maybe<UsersDocAccessFields_DealerDiscountPercent>;
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

export type UsersDocAccessFields_DealerDiscountPercent = {
  __typename?: 'UsersDocAccessFields_dealerDiscountPercent';
  create?: Maybe<UsersDocAccessFields_DealerDiscountPercent_Create>;
  read?: Maybe<UsersDocAccessFields_DealerDiscountPercent_Read>;
  update?: Maybe<UsersDocAccessFields_DealerDiscountPercent_Update>;
  delete?: Maybe<UsersDocAccessFields_DealerDiscountPercent_Delete>;
};

export type UsersDocAccessFields_DealerDiscountPercent_Create = {
  __typename?: 'UsersDocAccessFields_dealerDiscountPercent_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_DealerDiscountPercent_Read = {
  __typename?: 'UsersDocAccessFields_dealerDiscountPercent_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_DealerDiscountPercent_Update = {
  __typename?: 'UsersDocAccessFields_dealerDiscountPercent_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_DealerDiscountPercent_Delete = {
  __typename?: 'UsersDocAccessFields_dealerDiscountPercent_Delete';
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


export type ReviewAvatarArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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
  title?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  category?: Maybe<Array<Category>>;
  maniples?: Maybe<Scalars['Float']['output']>;
  powerWatts?: Maybe<Scalars['Float']['output']>;
  oldprice?: Maybe<Scalars['Float']['output']>;
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


export type ProductCategoryArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ProductGalleryArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ProductReviewsArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ProductMoreProductsArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ProductRecommendedTogetherArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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


export type CategoryImageArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Equipment = {
  __typename?: 'Product_Equipment';
  items?: Maybe<Array<Product_Equipment_Items>>;
};

export type Product_Equipment_Items = {
  __typename?: 'Product_Equipment_Items';
  item?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Advantages = {
  __typename?: 'Product_Advantages';
  items?: Maybe<Array<Product_Advantages_Items>>;
};

export type Product_Advantages_Items = {
  __typename?: 'Product_Advantages_Items';
  item?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Product_Video = {
  __typename?: 'Product_Video';
  items?: Maybe<Array<Media>>;
  description?: Maybe<Scalars['String']['output']>;
};


export type Product_VideoItemsArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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


export type Product_BeforeafterBeforeArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type Product_BeforeafterAfterArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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
  oldprice?: InputMaybe<Product_Oldprice_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__label?: InputMaybe<Product_Characteristics__Items__Label_Operator>;
  characteristics__items__value?: InputMaybe<Product_Characteristics__Items__Value_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__items__item?: InputMaybe<Product_Equipment__Items__Item_Operator>;
  equipment__items__id?: InputMaybe<Product_Equipment__Items__Id_Operator>;
  advantages__items__item?: InputMaybe<Product_Advantages__Items__Item_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__items?: InputMaybe<Product_Video__Items_Operator>;
  video__description?: InputMaybe<Product_Video__Description_Operator>;
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

export type Product_Oldprice_Operator = {
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

export type Product_Characteristics__Items__Label_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Characteristics__Items__Value_Operator = {
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

export type Product_Equipment__Items__Item_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Product_Equipment__Items__Id_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Advantages__Items__Item_Operator = {
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

export type Product_Video__Items_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Product_Video__Description_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
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
  oldprice?: InputMaybe<Product_Oldprice_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__label?: InputMaybe<Product_Characteristics__Items__Label_Operator>;
  characteristics__items__value?: InputMaybe<Product_Characteristics__Items__Value_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__items__item?: InputMaybe<Product_Equipment__Items__Item_Operator>;
  equipment__items__id?: InputMaybe<Product_Equipment__Items__Id_Operator>;
  advantages__items__item?: InputMaybe<Product_Advantages__Items__Item_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__items?: InputMaybe<Product_Video__Items_Operator>;
  video__description?: InputMaybe<Product_Video__Description_Operator>;
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
  oldprice?: InputMaybe<Product_Oldprice_Operator>;
  details?: InputMaybe<Product_Details_Operator>;
  shortDescription?: InputMaybe<Product_ShortDescription_Operator>;
  gallery?: InputMaybe<Product_Gallery_Operator>;
  listFeatures__feature?: InputMaybe<Product_ListFeatures__Feature_Operator>;
  listFeatures__id?: InputMaybe<Product_ListFeatures__Id_Operator>;
  compareFeatures__label?: InputMaybe<Product_CompareFeatures__Label_Operator>;
  compareFeatures__value?: InputMaybe<Product_CompareFeatures__Value_Operator>;
  compareFeatures__id?: InputMaybe<Product_CompareFeatures__Id_Operator>;
  description__content?: InputMaybe<Product_Description__Content_Operator>;
  characteristics__items__label?: InputMaybe<Product_Characteristics__Items__Label_Operator>;
  characteristics__items__value?: InputMaybe<Product_Characteristics__Items__Value_Operator>;
  characteristics__items__id?: InputMaybe<Product_Characteristics__Items__Id_Operator>;
  equipment__items__item?: InputMaybe<Product_Equipment__Items__Item_Operator>;
  equipment__items__id?: InputMaybe<Product_Equipment__Items__Id_Operator>;
  advantages__items__item?: InputMaybe<Product_Advantages__Items__Item_Operator>;
  advantages__items__id?: InputMaybe<Product_Advantages__Items__Id_Operator>;
  video__items?: InputMaybe<Product_Video__Items_Operator>;
  video__description?: InputMaybe<Product_Video__Description_Operator>;
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
  oldprice?: Maybe<ProductsDocAccessFields_Oldprice>;
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

export type ProductsDocAccessFields_Oldprice = {
  __typename?: 'ProductsDocAccessFields_oldprice';
  create?: Maybe<ProductsDocAccessFields_Oldprice_Create>;
  read?: Maybe<ProductsDocAccessFields_Oldprice_Read>;
  update?: Maybe<ProductsDocAccessFields_Oldprice_Update>;
  delete?: Maybe<ProductsDocAccessFields_Oldprice_Delete>;
};

export type ProductsDocAccessFields_Oldprice_Create = {
  __typename?: 'ProductsDocAccessFields_oldprice_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Oldprice_Read = {
  __typename?: 'ProductsDocAccessFields_oldprice_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Oldprice_Update = {
  __typename?: 'ProductsDocAccessFields_oldprice_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Oldprice_Delete = {
  __typename?: 'ProductsDocAccessFields_oldprice_Delete';
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
  label?: Maybe<ProductsDocAccessFields_Characteristics_Items_Label>;
  value?: Maybe<ProductsDocAccessFields_Characteristics_Items_Value>;
  id?: Maybe<ProductsDocAccessFields_Characteristics_Items_Id>;
};

export type ProductsDocAccessFields_Characteristics_Items_Label = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_label';
  create?: Maybe<ProductsDocAccessFields_Characteristics_Items_Label_Create>;
  read?: Maybe<ProductsDocAccessFields_Characteristics_Items_Label_Read>;
  update?: Maybe<ProductsDocAccessFields_Characteristics_Items_Label_Update>;
  delete?: Maybe<ProductsDocAccessFields_Characteristics_Items_Label_Delete>;
};

export type ProductsDocAccessFields_Characteristics_Items_Label_Create = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Label_Read = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Label_Update = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Label_Delete = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Value = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_value';
  create?: Maybe<ProductsDocAccessFields_Characteristics_Items_Value_Create>;
  read?: Maybe<ProductsDocAccessFields_Characteristics_Items_Value_Read>;
  update?: Maybe<ProductsDocAccessFields_Characteristics_Items_Value_Update>;
  delete?: Maybe<ProductsDocAccessFields_Characteristics_Items_Value_Delete>;
};

export type ProductsDocAccessFields_Characteristics_Items_Value_Create = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Value_Read = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Value_Update = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Characteristics_Items_Value_Delete = {
  __typename?: 'ProductsDocAccessFields_characteristics_items_value_Delete';
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
  items?: Maybe<ProductsDocAccessFields_Equipment_Items>;
};

export type ProductsDocAccessFields_Equipment_Items = {
  __typename?: 'ProductsDocAccessFields_equipment_items';
  create?: Maybe<ProductsDocAccessFields_Equipment_Items_Create>;
  read?: Maybe<ProductsDocAccessFields_Equipment_Items_Read>;
  update?: Maybe<ProductsDocAccessFields_Equipment_Items_Update>;
  delete?: Maybe<ProductsDocAccessFields_Equipment_Items_Delete>;
  fields?: Maybe<ProductsDocAccessFields_Equipment_Items_Fields>;
};

export type ProductsDocAccessFields_Equipment_Items_Create = {
  __typename?: 'ProductsDocAccessFields_equipment_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Read = {
  __typename?: 'ProductsDocAccessFields_equipment_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Update = {
  __typename?: 'ProductsDocAccessFields_equipment_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Delete = {
  __typename?: 'ProductsDocAccessFields_equipment_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Fields = {
  __typename?: 'ProductsDocAccessFields_equipment_items_Fields';
  item?: Maybe<ProductsDocAccessFields_Equipment_Items_Item>;
  id?: Maybe<ProductsDocAccessFields_Equipment_Items_Id>;
};

export type ProductsDocAccessFields_Equipment_Items_Item = {
  __typename?: 'ProductsDocAccessFields_equipment_items_item';
  create?: Maybe<ProductsDocAccessFields_Equipment_Items_Item_Create>;
  read?: Maybe<ProductsDocAccessFields_Equipment_Items_Item_Read>;
  update?: Maybe<ProductsDocAccessFields_Equipment_Items_Item_Update>;
  delete?: Maybe<ProductsDocAccessFields_Equipment_Items_Item_Delete>;
};

export type ProductsDocAccessFields_Equipment_Items_Item_Create = {
  __typename?: 'ProductsDocAccessFields_equipment_items_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Item_Read = {
  __typename?: 'ProductsDocAccessFields_equipment_items_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Item_Update = {
  __typename?: 'ProductsDocAccessFields_equipment_items_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Item_Delete = {
  __typename?: 'ProductsDocAccessFields_equipment_items_item_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Id = {
  __typename?: 'ProductsDocAccessFields_equipment_items_id';
  create?: Maybe<ProductsDocAccessFields_Equipment_Items_Id_Create>;
  read?: Maybe<ProductsDocAccessFields_Equipment_Items_Id_Read>;
  update?: Maybe<ProductsDocAccessFields_Equipment_Items_Id_Update>;
  delete?: Maybe<ProductsDocAccessFields_Equipment_Items_Id_Delete>;
};

export type ProductsDocAccessFields_Equipment_Items_Id_Create = {
  __typename?: 'ProductsDocAccessFields_equipment_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Id_Read = {
  __typename?: 'ProductsDocAccessFields_equipment_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Id_Update = {
  __typename?: 'ProductsDocAccessFields_equipment_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Equipment_Items_Id_Delete = {
  __typename?: 'ProductsDocAccessFields_equipment_items_id_Delete';
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
  item?: Maybe<ProductsDocAccessFields_Advantages_Items_Item>;
  id?: Maybe<ProductsDocAccessFields_Advantages_Items_Id>;
};

export type ProductsDocAccessFields_Advantages_Items_Item = {
  __typename?: 'ProductsDocAccessFields_advantages_items_item';
  create?: Maybe<ProductsDocAccessFields_Advantages_Items_Item_Create>;
  read?: Maybe<ProductsDocAccessFields_Advantages_Items_Item_Read>;
  update?: Maybe<ProductsDocAccessFields_Advantages_Items_Item_Update>;
  delete?: Maybe<ProductsDocAccessFields_Advantages_Items_Item_Delete>;
};

export type ProductsDocAccessFields_Advantages_Items_Item_Create = {
  __typename?: 'ProductsDocAccessFields_advantages_items_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Item_Read = {
  __typename?: 'ProductsDocAccessFields_advantages_items_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Item_Update = {
  __typename?: 'ProductsDocAccessFields_advantages_items_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Advantages_Items_Item_Delete = {
  __typename?: 'ProductsDocAccessFields_advantages_items_item_Delete';
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
  items?: Maybe<ProductsDocAccessFields_Video_Items>;
  description?: Maybe<ProductsDocAccessFields_Video_Description>;
};

export type ProductsDocAccessFields_Video_Items = {
  __typename?: 'ProductsDocAccessFields_video_items';
  create?: Maybe<ProductsDocAccessFields_Video_Items_Create>;
  read?: Maybe<ProductsDocAccessFields_Video_Items_Read>;
  update?: Maybe<ProductsDocAccessFields_Video_Items_Update>;
  delete?: Maybe<ProductsDocAccessFields_Video_Items_Delete>;
};

export type ProductsDocAccessFields_Video_Items_Create = {
  __typename?: 'ProductsDocAccessFields_video_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Items_Read = {
  __typename?: 'ProductsDocAccessFields_video_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Items_Update = {
  __typename?: 'ProductsDocAccessFields_video_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Items_Delete = {
  __typename?: 'ProductsDocAccessFields_video_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Description = {
  __typename?: 'ProductsDocAccessFields_video_description';
  create?: Maybe<ProductsDocAccessFields_Video_Description_Create>;
  read?: Maybe<ProductsDocAccessFields_Video_Description_Read>;
  update?: Maybe<ProductsDocAccessFields_Video_Description_Update>;
  delete?: Maybe<ProductsDocAccessFields_Video_Description_Delete>;
};

export type ProductsDocAccessFields_Video_Description_Create = {
  __typename?: 'ProductsDocAccessFields_video_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Description_Read = {
  __typename?: 'ProductsDocAccessFields_video_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Description_Update = {
  __typename?: 'ProductsDocAccessFields_video_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsDocAccessFields_Video_Description_Delete = {
  __typename?: 'ProductsDocAccessFields_video_description_Delete';
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

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  publishedAt: Scalars['DateTime']['output'];
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  cardPoster?: Maybe<Media>;
  heroImage?: Maybe<Media>;
  content?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArticleCardPosterArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ArticleHeroImageArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type ArticleContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Articles = {
  __typename?: 'Articles';
  docs: Array<Article>;
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

export type Article_Where = {
  title?: InputMaybe<Article_Title_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  generateSlug?: InputMaybe<Article_GenerateSlug_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  cardPoster?: InputMaybe<Article_CardPoster_Operator>;
  heroImage?: InputMaybe<Article_HeroImage_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
};

export type Article_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Article_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Article_Slug_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_CardPoster_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Article_HeroImage_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Article_Content_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
};

export type Article_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Article_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Article_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Article_Where_And = {
  title?: InputMaybe<Article_Title_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  generateSlug?: InputMaybe<Article_GenerateSlug_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  cardPoster?: InputMaybe<Article_CardPoster_Operator>;
  heroImage?: InputMaybe<Article_HeroImage_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
};

export type Article_Where_Or = {
  title?: InputMaybe<Article_Title_Operator>;
  publishedAt?: InputMaybe<Article_PublishedAt_Operator>;
  generateSlug?: InputMaybe<Article_GenerateSlug_Operator>;
  slug?: InputMaybe<Article_Slug_Operator>;
  cardPoster?: InputMaybe<Article_CardPoster_Operator>;
  heroImage?: InputMaybe<Article_HeroImage_Operator>;
  content?: InputMaybe<Article_Content_Operator>;
  updatedAt?: InputMaybe<Article_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Article_CreatedAt_Operator>;
  id?: InputMaybe<Article_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Article_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Article_Where_Or>>>;
};

export type CountArticles = {
  __typename?: 'countArticles';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ArticlesDocAccess = {
  __typename?: 'articlesDocAccess';
  fields?: Maybe<ArticlesDocAccessFields>;
  create?: Maybe<ArticlesCreateDocAccess>;
  read?: Maybe<ArticlesReadDocAccess>;
  update?: Maybe<ArticlesUpdateDocAccess>;
  delete?: Maybe<ArticlesDeleteDocAccess>;
};

export type ArticlesDocAccessFields = {
  __typename?: 'ArticlesDocAccessFields';
  title?: Maybe<ArticlesDocAccessFields_Title>;
  publishedAt?: Maybe<ArticlesDocAccessFields_PublishedAt>;
  generateSlug?: Maybe<ArticlesDocAccessFields_GenerateSlug>;
  slug?: Maybe<ArticlesDocAccessFields_Slug>;
  cardPoster?: Maybe<ArticlesDocAccessFields_CardPoster>;
  heroImage?: Maybe<ArticlesDocAccessFields_HeroImage>;
  content?: Maybe<ArticlesDocAccessFields_Content>;
  updatedAt?: Maybe<ArticlesDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<ArticlesDocAccessFields_CreatedAt>;
};

export type ArticlesDocAccessFields_Title = {
  __typename?: 'ArticlesDocAccessFields_title';
  create?: Maybe<ArticlesDocAccessFields_Title_Create>;
  read?: Maybe<ArticlesDocAccessFields_Title_Read>;
  update?: Maybe<ArticlesDocAccessFields_Title_Update>;
  delete?: Maybe<ArticlesDocAccessFields_Title_Delete>;
};

export type ArticlesDocAccessFields_Title_Create = {
  __typename?: 'ArticlesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Read = {
  __typename?: 'ArticlesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Update = {
  __typename?: 'ArticlesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Title_Delete = {
  __typename?: 'ArticlesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_PublishedAt = {
  __typename?: 'ArticlesDocAccessFields_publishedAt';
  create?: Maybe<ArticlesDocAccessFields_PublishedAt_Create>;
  read?: Maybe<ArticlesDocAccessFields_PublishedAt_Read>;
  update?: Maybe<ArticlesDocAccessFields_PublishedAt_Update>;
  delete?: Maybe<ArticlesDocAccessFields_PublishedAt_Delete>;
};

export type ArticlesDocAccessFields_PublishedAt_Create = {
  __typename?: 'ArticlesDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_PublishedAt_Read = {
  __typename?: 'ArticlesDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_PublishedAt_Update = {
  __typename?: 'ArticlesDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_PublishedAt_Delete = {
  __typename?: 'ArticlesDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_GenerateSlug = {
  __typename?: 'ArticlesDocAccessFields_generateSlug';
  create?: Maybe<ArticlesDocAccessFields_GenerateSlug_Create>;
  read?: Maybe<ArticlesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<ArticlesDocAccessFields_GenerateSlug_Update>;
  delete?: Maybe<ArticlesDocAccessFields_GenerateSlug_Delete>;
};

export type ArticlesDocAccessFields_GenerateSlug_Create = {
  __typename?: 'ArticlesDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_GenerateSlug_Read = {
  __typename?: 'ArticlesDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_GenerateSlug_Update = {
  __typename?: 'ArticlesDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'ArticlesDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Slug = {
  __typename?: 'ArticlesDocAccessFields_slug';
  create?: Maybe<ArticlesDocAccessFields_Slug_Create>;
  read?: Maybe<ArticlesDocAccessFields_Slug_Read>;
  update?: Maybe<ArticlesDocAccessFields_Slug_Update>;
  delete?: Maybe<ArticlesDocAccessFields_Slug_Delete>;
};

export type ArticlesDocAccessFields_Slug_Create = {
  __typename?: 'ArticlesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Slug_Read = {
  __typename?: 'ArticlesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Slug_Update = {
  __typename?: 'ArticlesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Slug_Delete = {
  __typename?: 'ArticlesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CardPoster = {
  __typename?: 'ArticlesDocAccessFields_cardPoster';
  create?: Maybe<ArticlesDocAccessFields_CardPoster_Create>;
  read?: Maybe<ArticlesDocAccessFields_CardPoster_Read>;
  update?: Maybe<ArticlesDocAccessFields_CardPoster_Update>;
  delete?: Maybe<ArticlesDocAccessFields_CardPoster_Delete>;
};

export type ArticlesDocAccessFields_CardPoster_Create = {
  __typename?: 'ArticlesDocAccessFields_cardPoster_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CardPoster_Read = {
  __typename?: 'ArticlesDocAccessFields_cardPoster_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CardPoster_Update = {
  __typename?: 'ArticlesDocAccessFields_cardPoster_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CardPoster_Delete = {
  __typename?: 'ArticlesDocAccessFields_cardPoster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_HeroImage = {
  __typename?: 'ArticlesDocAccessFields_heroImage';
  create?: Maybe<ArticlesDocAccessFields_HeroImage_Create>;
  read?: Maybe<ArticlesDocAccessFields_HeroImage_Read>;
  update?: Maybe<ArticlesDocAccessFields_HeroImage_Update>;
  delete?: Maybe<ArticlesDocAccessFields_HeroImage_Delete>;
};

export type ArticlesDocAccessFields_HeroImage_Create = {
  __typename?: 'ArticlesDocAccessFields_heroImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_HeroImage_Read = {
  __typename?: 'ArticlesDocAccessFields_heroImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_HeroImage_Update = {
  __typename?: 'ArticlesDocAccessFields_heroImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_HeroImage_Delete = {
  __typename?: 'ArticlesDocAccessFields_heroImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content = {
  __typename?: 'ArticlesDocAccessFields_content';
  create?: Maybe<ArticlesDocAccessFields_Content_Create>;
  read?: Maybe<ArticlesDocAccessFields_Content_Read>;
  update?: Maybe<ArticlesDocAccessFields_Content_Update>;
  delete?: Maybe<ArticlesDocAccessFields_Content_Delete>;
};

export type ArticlesDocAccessFields_Content_Create = {
  __typename?: 'ArticlesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Read = {
  __typename?: 'ArticlesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Update = {
  __typename?: 'ArticlesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_Content_Delete = {
  __typename?: 'ArticlesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt = {
  __typename?: 'ArticlesDocAccessFields_updatedAt';
  create?: Maybe<ArticlesDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<ArticlesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArticlesDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<ArticlesDocAccessFields_UpdatedAt_Delete>;
};

export type ArticlesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArticlesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt = {
  __typename?: 'ArticlesDocAccessFields_createdAt';
  create?: Maybe<ArticlesDocAccessFields_CreatedAt_Create>;
  read?: Maybe<ArticlesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArticlesDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<ArticlesDocAccessFields_CreatedAt_Delete>;
};

export type ArticlesDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArticlesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesCreateDocAccess = {
  __typename?: 'ArticlesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesReadDocAccess = {
  __typename?: 'ArticlesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesUpdateDocAccess = {
  __typename?: 'ArticlesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesDeleteDocAccess = {
  __typename?: 'ArticlesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int']['output'];
  orderNumber: Scalars['String']['output'];
  customer?: Maybe<User>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  customerEmail: Scalars['EmailAddress']['output'];
  orderStatus: Order_OrderStatus;
  paymentStatus: Order_PaymentStatus;
  paymentMethod: Order_PaymentMethod;
  total: Scalars['Float']['output'];
  items: Scalars['JSON']['output'];
  delivery?: Maybe<Scalars['JSON']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  monobank?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type OrderCustomerArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export enum Order_OrderStatus {
  New = 'new',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled'
}

export enum Order_PaymentStatus {
  AwaitingPayment = 'awaiting_payment',
  Processing = 'processing',
  Paid = 'paid',
  Failed = 'failed',
  Refunded = 'refunded'
}

export enum Order_PaymentMethod {
  CardOnline = 'card_online',
  MonobankParts = 'monobank_parts',
  Invoice = 'invoice',
  CashOnDelivery = 'cash_on_delivery'
}

export type Orders = {
  __typename?: 'Orders';
  docs: Array<Order>;
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

export type Order_Where = {
  orderNumber?: InputMaybe<Order_OrderNumber_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  firstName?: InputMaybe<Order_FirstName_Operator>;
  lastName?: InputMaybe<Order_LastName_Operator>;
  phone?: InputMaybe<Order_Phone_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  orderStatus?: InputMaybe<Order_OrderStatus_Operator>;
  paymentStatus?: InputMaybe<Order_PaymentStatus_Operator>;
  paymentMethod?: InputMaybe<Order_PaymentMethod_Operator>;
  total?: InputMaybe<Order_Total_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  delivery?: InputMaybe<Order_Delivery_Operator>;
  comment?: InputMaybe<Order_Comment_Operator>;
  monobank?: InputMaybe<Order_Monobank_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
};

export type Order_OrderNumber_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_Customer_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_FirstName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_LastName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_Phone_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Order_CustomerEmail_Operator = {
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type Order_OrderStatus_Operator = {
  equals?: InputMaybe<Order_OrderStatus_Input>;
  not_equals?: InputMaybe<Order_OrderStatus_Input>;
  in?: InputMaybe<Array<InputMaybe<Order_OrderStatus_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<Order_OrderStatus_Input>>>;
  all?: InputMaybe<Array<InputMaybe<Order_OrderStatus_Input>>>;
};

export enum Order_OrderStatus_Input {
  New = 'new',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled'
}

export type Order_PaymentStatus_Operator = {
  equals?: InputMaybe<Order_PaymentStatus_Input>;
  not_equals?: InputMaybe<Order_PaymentStatus_Input>;
  in?: InputMaybe<Array<InputMaybe<Order_PaymentStatus_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<Order_PaymentStatus_Input>>>;
  all?: InputMaybe<Array<InputMaybe<Order_PaymentStatus_Input>>>;
};

export enum Order_PaymentStatus_Input {
  AwaitingPayment = 'awaiting_payment',
  Processing = 'processing',
  Paid = 'paid',
  Failed = 'failed',
  Refunded = 'refunded'
}

export type Order_PaymentMethod_Operator = {
  equals?: InputMaybe<Order_PaymentMethod_Input>;
  not_equals?: InputMaybe<Order_PaymentMethod_Input>;
  in?: InputMaybe<Array<InputMaybe<Order_PaymentMethod_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<Order_PaymentMethod_Input>>>;
  all?: InputMaybe<Array<InputMaybe<Order_PaymentMethod_Input>>>;
};

export enum Order_PaymentMethod_Input {
  CardOnline = 'card_online',
  MonobankParts = 'monobank_parts',
  Invoice = 'invoice',
  CashOnDelivery = 'cash_on_delivery'
}

export type Order_Total_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
};

export type Order_Items_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
};

export type Order_Delivery_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_Comment_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_Monobank_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Order_Where_And = {
  orderNumber?: InputMaybe<Order_OrderNumber_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  firstName?: InputMaybe<Order_FirstName_Operator>;
  lastName?: InputMaybe<Order_LastName_Operator>;
  phone?: InputMaybe<Order_Phone_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  orderStatus?: InputMaybe<Order_OrderStatus_Operator>;
  paymentStatus?: InputMaybe<Order_PaymentStatus_Operator>;
  paymentMethod?: InputMaybe<Order_PaymentMethod_Operator>;
  total?: InputMaybe<Order_Total_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  delivery?: InputMaybe<Order_Delivery_Operator>;
  comment?: InputMaybe<Order_Comment_Operator>;
  monobank?: InputMaybe<Order_Monobank_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
};

export type Order_Where_Or = {
  orderNumber?: InputMaybe<Order_OrderNumber_Operator>;
  customer?: InputMaybe<Order_Customer_Operator>;
  firstName?: InputMaybe<Order_FirstName_Operator>;
  lastName?: InputMaybe<Order_LastName_Operator>;
  phone?: InputMaybe<Order_Phone_Operator>;
  customerEmail?: InputMaybe<Order_CustomerEmail_Operator>;
  orderStatus?: InputMaybe<Order_OrderStatus_Operator>;
  paymentStatus?: InputMaybe<Order_PaymentStatus_Operator>;
  paymentMethod?: InputMaybe<Order_PaymentMethod_Operator>;
  total?: InputMaybe<Order_Total_Operator>;
  items?: InputMaybe<Order_Items_Operator>;
  delivery?: InputMaybe<Order_Delivery_Operator>;
  comment?: InputMaybe<Order_Comment_Operator>;
  monobank?: InputMaybe<Order_Monobank_Operator>;
  updatedAt?: InputMaybe<Order_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Order_CreatedAt_Operator>;
  id?: InputMaybe<Order_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Order_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Order_Where_Or>>>;
};

export type CountOrders = {
  __typename?: 'countOrders';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type OrdersDocAccess = {
  __typename?: 'ordersDocAccess';
  fields?: Maybe<OrdersDocAccessFields>;
  create?: Maybe<OrdersCreateDocAccess>;
  read?: Maybe<OrdersReadDocAccess>;
  update?: Maybe<OrdersUpdateDocAccess>;
  delete?: Maybe<OrdersDeleteDocAccess>;
};

export type OrdersDocAccessFields = {
  __typename?: 'OrdersDocAccessFields';
  orderNumber?: Maybe<OrdersDocAccessFields_OrderNumber>;
  customer?: Maybe<OrdersDocAccessFields_Customer>;
  firstName?: Maybe<OrdersDocAccessFields_FirstName>;
  lastName?: Maybe<OrdersDocAccessFields_LastName>;
  phone?: Maybe<OrdersDocAccessFields_Phone>;
  customerEmail?: Maybe<OrdersDocAccessFields_CustomerEmail>;
  orderStatus?: Maybe<OrdersDocAccessFields_OrderStatus>;
  paymentStatus?: Maybe<OrdersDocAccessFields_PaymentStatus>;
  paymentMethod?: Maybe<OrdersDocAccessFields_PaymentMethod>;
  total?: Maybe<OrdersDocAccessFields_Total>;
  items?: Maybe<OrdersDocAccessFields_Items>;
  delivery?: Maybe<OrdersDocAccessFields_Delivery>;
  comment?: Maybe<OrdersDocAccessFields_Comment>;
  monobank?: Maybe<OrdersDocAccessFields_Monobank>;
  updatedAt?: Maybe<OrdersDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<OrdersDocAccessFields_CreatedAt>;
};

export type OrdersDocAccessFields_OrderNumber = {
  __typename?: 'OrdersDocAccessFields_orderNumber';
  create?: Maybe<OrdersDocAccessFields_OrderNumber_Create>;
  read?: Maybe<OrdersDocAccessFields_OrderNumber_Read>;
  update?: Maybe<OrdersDocAccessFields_OrderNumber_Update>;
  delete?: Maybe<OrdersDocAccessFields_OrderNumber_Delete>;
};

export type OrdersDocAccessFields_OrderNumber_Create = {
  __typename?: 'OrdersDocAccessFields_orderNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderNumber_Read = {
  __typename?: 'OrdersDocAccessFields_orderNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderNumber_Update = {
  __typename?: 'OrdersDocAccessFields_orderNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderNumber_Delete = {
  __typename?: 'OrdersDocAccessFields_orderNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer = {
  __typename?: 'OrdersDocAccessFields_customer';
  create?: Maybe<OrdersDocAccessFields_Customer_Create>;
  read?: Maybe<OrdersDocAccessFields_Customer_Read>;
  update?: Maybe<OrdersDocAccessFields_Customer_Update>;
  delete?: Maybe<OrdersDocAccessFields_Customer_Delete>;
};

export type OrdersDocAccessFields_Customer_Create = {
  __typename?: 'OrdersDocAccessFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Read = {
  __typename?: 'OrdersDocAccessFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Update = {
  __typename?: 'OrdersDocAccessFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Customer_Delete = {
  __typename?: 'OrdersDocAccessFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_FirstName = {
  __typename?: 'OrdersDocAccessFields_firstName';
  create?: Maybe<OrdersDocAccessFields_FirstName_Create>;
  read?: Maybe<OrdersDocAccessFields_FirstName_Read>;
  update?: Maybe<OrdersDocAccessFields_FirstName_Update>;
  delete?: Maybe<OrdersDocAccessFields_FirstName_Delete>;
};

export type OrdersDocAccessFields_FirstName_Create = {
  __typename?: 'OrdersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_FirstName_Read = {
  __typename?: 'OrdersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_FirstName_Update = {
  __typename?: 'OrdersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_FirstName_Delete = {
  __typename?: 'OrdersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_LastName = {
  __typename?: 'OrdersDocAccessFields_lastName';
  create?: Maybe<OrdersDocAccessFields_LastName_Create>;
  read?: Maybe<OrdersDocAccessFields_LastName_Read>;
  update?: Maybe<OrdersDocAccessFields_LastName_Update>;
  delete?: Maybe<OrdersDocAccessFields_LastName_Delete>;
};

export type OrdersDocAccessFields_LastName_Create = {
  __typename?: 'OrdersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_LastName_Read = {
  __typename?: 'OrdersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_LastName_Update = {
  __typename?: 'OrdersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_LastName_Delete = {
  __typename?: 'OrdersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Phone = {
  __typename?: 'OrdersDocAccessFields_phone';
  create?: Maybe<OrdersDocAccessFields_Phone_Create>;
  read?: Maybe<OrdersDocAccessFields_Phone_Read>;
  update?: Maybe<OrdersDocAccessFields_Phone_Update>;
  delete?: Maybe<OrdersDocAccessFields_Phone_Delete>;
};

export type OrdersDocAccessFields_Phone_Create = {
  __typename?: 'OrdersDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Phone_Read = {
  __typename?: 'OrdersDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Phone_Update = {
  __typename?: 'OrdersDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Phone_Delete = {
  __typename?: 'OrdersDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail = {
  __typename?: 'OrdersDocAccessFields_customerEmail';
  create?: Maybe<OrdersDocAccessFields_CustomerEmail_Create>;
  read?: Maybe<OrdersDocAccessFields_CustomerEmail_Read>;
  update?: Maybe<OrdersDocAccessFields_CustomerEmail_Update>;
  delete?: Maybe<OrdersDocAccessFields_CustomerEmail_Delete>;
};

export type OrdersDocAccessFields_CustomerEmail_Create = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Read = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Update = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CustomerEmail_Delete = {
  __typename?: 'OrdersDocAccessFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderStatus = {
  __typename?: 'OrdersDocAccessFields_orderStatus';
  create?: Maybe<OrdersDocAccessFields_OrderStatus_Create>;
  read?: Maybe<OrdersDocAccessFields_OrderStatus_Read>;
  update?: Maybe<OrdersDocAccessFields_OrderStatus_Update>;
  delete?: Maybe<OrdersDocAccessFields_OrderStatus_Delete>;
};

export type OrdersDocAccessFields_OrderStatus_Create = {
  __typename?: 'OrdersDocAccessFields_orderStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderStatus_Read = {
  __typename?: 'OrdersDocAccessFields_orderStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderStatus_Update = {
  __typename?: 'OrdersDocAccessFields_orderStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_OrderStatus_Delete = {
  __typename?: 'OrdersDocAccessFields_orderStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentStatus = {
  __typename?: 'OrdersDocAccessFields_paymentStatus';
  create?: Maybe<OrdersDocAccessFields_PaymentStatus_Create>;
  read?: Maybe<OrdersDocAccessFields_PaymentStatus_Read>;
  update?: Maybe<OrdersDocAccessFields_PaymentStatus_Update>;
  delete?: Maybe<OrdersDocAccessFields_PaymentStatus_Delete>;
};

export type OrdersDocAccessFields_PaymentStatus_Create = {
  __typename?: 'OrdersDocAccessFields_paymentStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentStatus_Read = {
  __typename?: 'OrdersDocAccessFields_paymentStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentStatus_Update = {
  __typename?: 'OrdersDocAccessFields_paymentStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentStatus_Delete = {
  __typename?: 'OrdersDocAccessFields_paymentStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentMethod = {
  __typename?: 'OrdersDocAccessFields_paymentMethod';
  create?: Maybe<OrdersDocAccessFields_PaymentMethod_Create>;
  read?: Maybe<OrdersDocAccessFields_PaymentMethod_Read>;
  update?: Maybe<OrdersDocAccessFields_PaymentMethod_Update>;
  delete?: Maybe<OrdersDocAccessFields_PaymentMethod_Delete>;
};

export type OrdersDocAccessFields_PaymentMethod_Create = {
  __typename?: 'OrdersDocAccessFields_paymentMethod_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentMethod_Read = {
  __typename?: 'OrdersDocAccessFields_paymentMethod_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentMethod_Update = {
  __typename?: 'OrdersDocAccessFields_paymentMethod_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_PaymentMethod_Delete = {
  __typename?: 'OrdersDocAccessFields_paymentMethod_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Total = {
  __typename?: 'OrdersDocAccessFields_total';
  create?: Maybe<OrdersDocAccessFields_Total_Create>;
  read?: Maybe<OrdersDocAccessFields_Total_Read>;
  update?: Maybe<OrdersDocAccessFields_Total_Update>;
  delete?: Maybe<OrdersDocAccessFields_Total_Delete>;
};

export type OrdersDocAccessFields_Total_Create = {
  __typename?: 'OrdersDocAccessFields_total_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Total_Read = {
  __typename?: 'OrdersDocAccessFields_total_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Total_Update = {
  __typename?: 'OrdersDocAccessFields_total_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Total_Delete = {
  __typename?: 'OrdersDocAccessFields_total_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items = {
  __typename?: 'OrdersDocAccessFields_items';
  create?: Maybe<OrdersDocAccessFields_Items_Create>;
  read?: Maybe<OrdersDocAccessFields_Items_Read>;
  update?: Maybe<OrdersDocAccessFields_Items_Update>;
  delete?: Maybe<OrdersDocAccessFields_Items_Delete>;
};

export type OrdersDocAccessFields_Items_Create = {
  __typename?: 'OrdersDocAccessFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Read = {
  __typename?: 'OrdersDocAccessFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Update = {
  __typename?: 'OrdersDocAccessFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Items_Delete = {
  __typename?: 'OrdersDocAccessFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Delivery = {
  __typename?: 'OrdersDocAccessFields_delivery';
  create?: Maybe<OrdersDocAccessFields_Delivery_Create>;
  read?: Maybe<OrdersDocAccessFields_Delivery_Read>;
  update?: Maybe<OrdersDocAccessFields_Delivery_Update>;
  delete?: Maybe<OrdersDocAccessFields_Delivery_Delete>;
};

export type OrdersDocAccessFields_Delivery_Create = {
  __typename?: 'OrdersDocAccessFields_delivery_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Delivery_Read = {
  __typename?: 'OrdersDocAccessFields_delivery_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Delivery_Update = {
  __typename?: 'OrdersDocAccessFields_delivery_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Delivery_Delete = {
  __typename?: 'OrdersDocAccessFields_delivery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Comment = {
  __typename?: 'OrdersDocAccessFields_comment';
  create?: Maybe<OrdersDocAccessFields_Comment_Create>;
  read?: Maybe<OrdersDocAccessFields_Comment_Read>;
  update?: Maybe<OrdersDocAccessFields_Comment_Update>;
  delete?: Maybe<OrdersDocAccessFields_Comment_Delete>;
};

export type OrdersDocAccessFields_Comment_Create = {
  __typename?: 'OrdersDocAccessFields_comment_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Comment_Read = {
  __typename?: 'OrdersDocAccessFields_comment_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Comment_Update = {
  __typename?: 'OrdersDocAccessFields_comment_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Comment_Delete = {
  __typename?: 'OrdersDocAccessFields_comment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Monobank = {
  __typename?: 'OrdersDocAccessFields_monobank';
  create?: Maybe<OrdersDocAccessFields_Monobank_Create>;
  read?: Maybe<OrdersDocAccessFields_Monobank_Read>;
  update?: Maybe<OrdersDocAccessFields_Monobank_Update>;
  delete?: Maybe<OrdersDocAccessFields_Monobank_Delete>;
};

export type OrdersDocAccessFields_Monobank_Create = {
  __typename?: 'OrdersDocAccessFields_monobank_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Monobank_Read = {
  __typename?: 'OrdersDocAccessFields_monobank_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Monobank_Update = {
  __typename?: 'OrdersDocAccessFields_monobank_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_Monobank_Delete = {
  __typename?: 'OrdersDocAccessFields_monobank_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt = {
  __typename?: 'OrdersDocAccessFields_updatedAt';
  create?: Maybe<OrdersDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<OrdersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<OrdersDocAccessFields_UpdatedAt_Delete>;
};

export type OrdersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt = {
  __typename?: 'OrdersDocAccessFields_createdAt';
  create?: Maybe<OrdersDocAccessFields_CreatedAt_Create>;
  read?: Maybe<OrdersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OrdersDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<OrdersDocAccessFields_CreatedAt_Delete>;
};

export type OrdersDocAccessFields_CreatedAt_Create = {
  __typename?: 'OrdersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Read = {
  __typename?: 'OrdersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Update = {
  __typename?: 'OrdersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OrdersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersCreateDocAccess = {
  __typename?: 'OrdersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadDocAccess = {
  __typename?: 'OrdersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateDocAccess = {
  __typename?: 'OrdersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteDocAccess = {
  __typename?: 'OrdersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPage = {
  __typename?: 'LegalPage';
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  generateSlug?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  content?: Maybe<Scalars['JSON']['output']>;
  contentMarkdown?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LegalPageContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type LegalPages = {
  __typename?: 'LegalPages';
  docs: Array<LegalPage>;
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

export type LegalPage_Where = {
  title?: InputMaybe<LegalPage_Title_Operator>;
  generateSlug?: InputMaybe<LegalPage_GenerateSlug_Operator>;
  slug?: InputMaybe<LegalPage_Slug_Operator>;
  content?: InputMaybe<LegalPage_Content_Operator>;
  contentMarkdown?: InputMaybe<LegalPage_ContentMarkdown_Operator>;
  updatedAt?: InputMaybe<LegalPage_UpdatedAt_Operator>;
  createdAt?: InputMaybe<LegalPage_CreatedAt_Operator>;
  id?: InputMaybe<LegalPage_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<LegalPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPage_Where_Or>>>;
};

export type LegalPage_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalPage_GenerateSlug_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_Slug_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalPage_Content_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_ContentMarkdown_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LegalPage_Where_And = {
  title?: InputMaybe<LegalPage_Title_Operator>;
  generateSlug?: InputMaybe<LegalPage_GenerateSlug_Operator>;
  slug?: InputMaybe<LegalPage_Slug_Operator>;
  content?: InputMaybe<LegalPage_Content_Operator>;
  contentMarkdown?: InputMaybe<LegalPage_ContentMarkdown_Operator>;
  updatedAt?: InputMaybe<LegalPage_UpdatedAt_Operator>;
  createdAt?: InputMaybe<LegalPage_CreatedAt_Operator>;
  id?: InputMaybe<LegalPage_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<LegalPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPage_Where_Or>>>;
};

export type LegalPage_Where_Or = {
  title?: InputMaybe<LegalPage_Title_Operator>;
  generateSlug?: InputMaybe<LegalPage_GenerateSlug_Operator>;
  slug?: InputMaybe<LegalPage_Slug_Operator>;
  content?: InputMaybe<LegalPage_Content_Operator>;
  contentMarkdown?: InputMaybe<LegalPage_ContentMarkdown_Operator>;
  updatedAt?: InputMaybe<LegalPage_UpdatedAt_Operator>;
  createdAt?: InputMaybe<LegalPage_CreatedAt_Operator>;
  id?: InputMaybe<LegalPage_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<LegalPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPage_Where_Or>>>;
};

export type CountLegalPages = {
  __typename?: 'countLegalPages';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Legal_PagesDocAccess = {
  __typename?: 'legal_pagesDocAccess';
  fields?: Maybe<LegalPagesDocAccessFields>;
  create?: Maybe<LegalPagesCreateDocAccess>;
  read?: Maybe<LegalPagesReadDocAccess>;
  update?: Maybe<LegalPagesUpdateDocAccess>;
  delete?: Maybe<LegalPagesDeleteDocAccess>;
};

export type LegalPagesDocAccessFields = {
  __typename?: 'LegalPagesDocAccessFields';
  title?: Maybe<LegalPagesDocAccessFields_Title>;
  generateSlug?: Maybe<LegalPagesDocAccessFields_GenerateSlug>;
  slug?: Maybe<LegalPagesDocAccessFields_Slug>;
  content?: Maybe<LegalPagesDocAccessFields_Content>;
  contentMarkdown?: Maybe<LegalPagesDocAccessFields_ContentMarkdown>;
  updatedAt?: Maybe<LegalPagesDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<LegalPagesDocAccessFields_CreatedAt>;
};

export type LegalPagesDocAccessFields_Title = {
  __typename?: 'LegalPagesDocAccessFields_title';
  create?: Maybe<LegalPagesDocAccessFields_Title_Create>;
  read?: Maybe<LegalPagesDocAccessFields_Title_Read>;
  update?: Maybe<LegalPagesDocAccessFields_Title_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_Title_Delete>;
};

export type LegalPagesDocAccessFields_Title_Create = {
  __typename?: 'LegalPagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Title_Read = {
  __typename?: 'LegalPagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Title_Update = {
  __typename?: 'LegalPagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Title_Delete = {
  __typename?: 'LegalPagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_GenerateSlug = {
  __typename?: 'LegalPagesDocAccessFields_generateSlug';
  create?: Maybe<LegalPagesDocAccessFields_GenerateSlug_Create>;
  read?: Maybe<LegalPagesDocAccessFields_GenerateSlug_Read>;
  update?: Maybe<LegalPagesDocAccessFields_GenerateSlug_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_GenerateSlug_Delete>;
};

export type LegalPagesDocAccessFields_GenerateSlug_Create = {
  __typename?: 'LegalPagesDocAccessFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_GenerateSlug_Read = {
  __typename?: 'LegalPagesDocAccessFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_GenerateSlug_Update = {
  __typename?: 'LegalPagesDocAccessFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_GenerateSlug_Delete = {
  __typename?: 'LegalPagesDocAccessFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Slug = {
  __typename?: 'LegalPagesDocAccessFields_slug';
  create?: Maybe<LegalPagesDocAccessFields_Slug_Create>;
  read?: Maybe<LegalPagesDocAccessFields_Slug_Read>;
  update?: Maybe<LegalPagesDocAccessFields_Slug_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_Slug_Delete>;
};

export type LegalPagesDocAccessFields_Slug_Create = {
  __typename?: 'LegalPagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Slug_Read = {
  __typename?: 'LegalPagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Slug_Update = {
  __typename?: 'LegalPagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Slug_Delete = {
  __typename?: 'LegalPagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Content = {
  __typename?: 'LegalPagesDocAccessFields_content';
  create?: Maybe<LegalPagesDocAccessFields_Content_Create>;
  read?: Maybe<LegalPagesDocAccessFields_Content_Read>;
  update?: Maybe<LegalPagesDocAccessFields_Content_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_Content_Delete>;
};

export type LegalPagesDocAccessFields_Content_Create = {
  __typename?: 'LegalPagesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Content_Read = {
  __typename?: 'LegalPagesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Content_Update = {
  __typename?: 'LegalPagesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_Content_Delete = {
  __typename?: 'LegalPagesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_ContentMarkdown = {
  __typename?: 'LegalPagesDocAccessFields_contentMarkdown';
  create?: Maybe<LegalPagesDocAccessFields_ContentMarkdown_Create>;
  read?: Maybe<LegalPagesDocAccessFields_ContentMarkdown_Read>;
  update?: Maybe<LegalPagesDocAccessFields_ContentMarkdown_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_ContentMarkdown_Delete>;
};

export type LegalPagesDocAccessFields_ContentMarkdown_Create = {
  __typename?: 'LegalPagesDocAccessFields_contentMarkdown_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_ContentMarkdown_Read = {
  __typename?: 'LegalPagesDocAccessFields_contentMarkdown_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_ContentMarkdown_Update = {
  __typename?: 'LegalPagesDocAccessFields_contentMarkdown_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_ContentMarkdown_Delete = {
  __typename?: 'LegalPagesDocAccessFields_contentMarkdown_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_UpdatedAt = {
  __typename?: 'LegalPagesDocAccessFields_updatedAt';
  create?: Maybe<LegalPagesDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<LegalPagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LegalPagesDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_UpdatedAt_Delete>;
};

export type LegalPagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LegalPagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LegalPagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LegalPagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LegalPagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_CreatedAt = {
  __typename?: 'LegalPagesDocAccessFields_createdAt';
  create?: Maybe<LegalPagesDocAccessFields_CreatedAt_Create>;
  read?: Maybe<LegalPagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LegalPagesDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<LegalPagesDocAccessFields_CreatedAt_Delete>;
};

export type LegalPagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'LegalPagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'LegalPagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'LegalPagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LegalPagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesCreateDocAccess = {
  __typename?: 'LegalPagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesReadDocAccess = {
  __typename?: 'LegalPagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesUpdateDocAccess = {
  __typename?: 'LegalPagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesDeleteDocAccess = {
  __typename?: 'LegalPagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  country: Scalars['String']['output'];
  city: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Float']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LocationImageArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Locations = {
  __typename?: 'Locations';
  docs: Array<Location>;
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

export type Location_Where = {
  name?: InputMaybe<Location_Name_Operator>;
  country?: InputMaybe<Location_Country_Operator>;
  city?: InputMaybe<Location_City_Operator>;
  address?: InputMaybe<Location_Address_Operator>;
  image?: InputMaybe<Location_Image_Operator>;
  latitude?: InputMaybe<Location_Latitude_Operator>;
  longitude?: InputMaybe<Location_Longitude_Operator>;
  phone?: InputMaybe<Location_Phone_Operator>;
  instagram?: InputMaybe<Location_Instagram_Operator>;
  sortOrder?: InputMaybe<Location_SortOrder_Operator>;
  isActive?: InputMaybe<Location_IsActive_Operator>;
  updatedAt?: InputMaybe<Location_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Location_CreatedAt_Operator>;
  id?: InputMaybe<Location_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Location_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Location_Where_Or>>>;
};

export type Location_Name_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Location_Country_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Location_City_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Location_Address_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Location_Image_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_Latitude_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
};

export type Location_Longitude_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
};

export type Location_Phone_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_Instagram_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_SortOrder_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_IsActive_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Location_Where_And = {
  name?: InputMaybe<Location_Name_Operator>;
  country?: InputMaybe<Location_Country_Operator>;
  city?: InputMaybe<Location_City_Operator>;
  address?: InputMaybe<Location_Address_Operator>;
  image?: InputMaybe<Location_Image_Operator>;
  latitude?: InputMaybe<Location_Latitude_Operator>;
  longitude?: InputMaybe<Location_Longitude_Operator>;
  phone?: InputMaybe<Location_Phone_Operator>;
  instagram?: InputMaybe<Location_Instagram_Operator>;
  sortOrder?: InputMaybe<Location_SortOrder_Operator>;
  isActive?: InputMaybe<Location_IsActive_Operator>;
  updatedAt?: InputMaybe<Location_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Location_CreatedAt_Operator>;
  id?: InputMaybe<Location_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Location_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Location_Where_Or>>>;
};

export type Location_Where_Or = {
  name?: InputMaybe<Location_Name_Operator>;
  country?: InputMaybe<Location_Country_Operator>;
  city?: InputMaybe<Location_City_Operator>;
  address?: InputMaybe<Location_Address_Operator>;
  image?: InputMaybe<Location_Image_Operator>;
  latitude?: InputMaybe<Location_Latitude_Operator>;
  longitude?: InputMaybe<Location_Longitude_Operator>;
  phone?: InputMaybe<Location_Phone_Operator>;
  instagram?: InputMaybe<Location_Instagram_Operator>;
  sortOrder?: InputMaybe<Location_SortOrder_Operator>;
  isActive?: InputMaybe<Location_IsActive_Operator>;
  updatedAt?: InputMaybe<Location_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Location_CreatedAt_Operator>;
  id?: InputMaybe<Location_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Location_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Location_Where_Or>>>;
};

export type CountLocations = {
  __typename?: 'countLocations';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type LocationsDocAccess = {
  __typename?: 'locationsDocAccess';
  fields?: Maybe<LocationsDocAccessFields>;
  create?: Maybe<LocationsCreateDocAccess>;
  read?: Maybe<LocationsReadDocAccess>;
  update?: Maybe<LocationsUpdateDocAccess>;
  delete?: Maybe<LocationsDeleteDocAccess>;
};

export type LocationsDocAccessFields = {
  __typename?: 'LocationsDocAccessFields';
  name?: Maybe<LocationsDocAccessFields_Name>;
  country?: Maybe<LocationsDocAccessFields_Country>;
  city?: Maybe<LocationsDocAccessFields_City>;
  address?: Maybe<LocationsDocAccessFields_Address>;
  image?: Maybe<LocationsDocAccessFields_Image>;
  latitude?: Maybe<LocationsDocAccessFields_Latitude>;
  longitude?: Maybe<LocationsDocAccessFields_Longitude>;
  phone?: Maybe<LocationsDocAccessFields_Phone>;
  instagram?: Maybe<LocationsDocAccessFields_Instagram>;
  sortOrder?: Maybe<LocationsDocAccessFields_SortOrder>;
  isActive?: Maybe<LocationsDocAccessFields_IsActive>;
  updatedAt?: Maybe<LocationsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<LocationsDocAccessFields_CreatedAt>;
};

export type LocationsDocAccessFields_Name = {
  __typename?: 'LocationsDocAccessFields_name';
  create?: Maybe<LocationsDocAccessFields_Name_Create>;
  read?: Maybe<LocationsDocAccessFields_Name_Read>;
  update?: Maybe<LocationsDocAccessFields_Name_Update>;
  delete?: Maybe<LocationsDocAccessFields_Name_Delete>;
};

export type LocationsDocAccessFields_Name_Create = {
  __typename?: 'LocationsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Name_Read = {
  __typename?: 'LocationsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Name_Update = {
  __typename?: 'LocationsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Name_Delete = {
  __typename?: 'LocationsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Country = {
  __typename?: 'LocationsDocAccessFields_country';
  create?: Maybe<LocationsDocAccessFields_Country_Create>;
  read?: Maybe<LocationsDocAccessFields_Country_Read>;
  update?: Maybe<LocationsDocAccessFields_Country_Update>;
  delete?: Maybe<LocationsDocAccessFields_Country_Delete>;
};

export type LocationsDocAccessFields_Country_Create = {
  __typename?: 'LocationsDocAccessFields_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Country_Read = {
  __typename?: 'LocationsDocAccessFields_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Country_Update = {
  __typename?: 'LocationsDocAccessFields_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Country_Delete = {
  __typename?: 'LocationsDocAccessFields_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_City = {
  __typename?: 'LocationsDocAccessFields_city';
  create?: Maybe<LocationsDocAccessFields_City_Create>;
  read?: Maybe<LocationsDocAccessFields_City_Read>;
  update?: Maybe<LocationsDocAccessFields_City_Update>;
  delete?: Maybe<LocationsDocAccessFields_City_Delete>;
};

export type LocationsDocAccessFields_City_Create = {
  __typename?: 'LocationsDocAccessFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_City_Read = {
  __typename?: 'LocationsDocAccessFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_City_Update = {
  __typename?: 'LocationsDocAccessFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_City_Delete = {
  __typename?: 'LocationsDocAccessFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Address = {
  __typename?: 'LocationsDocAccessFields_address';
  create?: Maybe<LocationsDocAccessFields_Address_Create>;
  read?: Maybe<LocationsDocAccessFields_Address_Read>;
  update?: Maybe<LocationsDocAccessFields_Address_Update>;
  delete?: Maybe<LocationsDocAccessFields_Address_Delete>;
};

export type LocationsDocAccessFields_Address_Create = {
  __typename?: 'LocationsDocAccessFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Address_Read = {
  __typename?: 'LocationsDocAccessFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Address_Update = {
  __typename?: 'LocationsDocAccessFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Address_Delete = {
  __typename?: 'LocationsDocAccessFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Image = {
  __typename?: 'LocationsDocAccessFields_image';
  create?: Maybe<LocationsDocAccessFields_Image_Create>;
  read?: Maybe<LocationsDocAccessFields_Image_Read>;
  update?: Maybe<LocationsDocAccessFields_Image_Update>;
  delete?: Maybe<LocationsDocAccessFields_Image_Delete>;
};

export type LocationsDocAccessFields_Image_Create = {
  __typename?: 'LocationsDocAccessFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Image_Read = {
  __typename?: 'LocationsDocAccessFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Image_Update = {
  __typename?: 'LocationsDocAccessFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Image_Delete = {
  __typename?: 'LocationsDocAccessFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Latitude = {
  __typename?: 'LocationsDocAccessFields_latitude';
  create?: Maybe<LocationsDocAccessFields_Latitude_Create>;
  read?: Maybe<LocationsDocAccessFields_Latitude_Read>;
  update?: Maybe<LocationsDocAccessFields_Latitude_Update>;
  delete?: Maybe<LocationsDocAccessFields_Latitude_Delete>;
};

export type LocationsDocAccessFields_Latitude_Create = {
  __typename?: 'LocationsDocAccessFields_latitude_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Latitude_Read = {
  __typename?: 'LocationsDocAccessFields_latitude_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Latitude_Update = {
  __typename?: 'LocationsDocAccessFields_latitude_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Latitude_Delete = {
  __typename?: 'LocationsDocAccessFields_latitude_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Longitude = {
  __typename?: 'LocationsDocAccessFields_longitude';
  create?: Maybe<LocationsDocAccessFields_Longitude_Create>;
  read?: Maybe<LocationsDocAccessFields_Longitude_Read>;
  update?: Maybe<LocationsDocAccessFields_Longitude_Update>;
  delete?: Maybe<LocationsDocAccessFields_Longitude_Delete>;
};

export type LocationsDocAccessFields_Longitude_Create = {
  __typename?: 'LocationsDocAccessFields_longitude_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Longitude_Read = {
  __typename?: 'LocationsDocAccessFields_longitude_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Longitude_Update = {
  __typename?: 'LocationsDocAccessFields_longitude_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Longitude_Delete = {
  __typename?: 'LocationsDocAccessFields_longitude_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Phone = {
  __typename?: 'LocationsDocAccessFields_phone';
  create?: Maybe<LocationsDocAccessFields_Phone_Create>;
  read?: Maybe<LocationsDocAccessFields_Phone_Read>;
  update?: Maybe<LocationsDocAccessFields_Phone_Update>;
  delete?: Maybe<LocationsDocAccessFields_Phone_Delete>;
};

export type LocationsDocAccessFields_Phone_Create = {
  __typename?: 'LocationsDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Phone_Read = {
  __typename?: 'LocationsDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Phone_Update = {
  __typename?: 'LocationsDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Phone_Delete = {
  __typename?: 'LocationsDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Instagram = {
  __typename?: 'LocationsDocAccessFields_instagram';
  create?: Maybe<LocationsDocAccessFields_Instagram_Create>;
  read?: Maybe<LocationsDocAccessFields_Instagram_Read>;
  update?: Maybe<LocationsDocAccessFields_Instagram_Update>;
  delete?: Maybe<LocationsDocAccessFields_Instagram_Delete>;
};

export type LocationsDocAccessFields_Instagram_Create = {
  __typename?: 'LocationsDocAccessFields_instagram_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Instagram_Read = {
  __typename?: 'LocationsDocAccessFields_instagram_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Instagram_Update = {
  __typename?: 'LocationsDocAccessFields_instagram_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_Instagram_Delete = {
  __typename?: 'LocationsDocAccessFields_instagram_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_SortOrder = {
  __typename?: 'LocationsDocAccessFields_sortOrder';
  create?: Maybe<LocationsDocAccessFields_SortOrder_Create>;
  read?: Maybe<LocationsDocAccessFields_SortOrder_Read>;
  update?: Maybe<LocationsDocAccessFields_SortOrder_Update>;
  delete?: Maybe<LocationsDocAccessFields_SortOrder_Delete>;
};

export type LocationsDocAccessFields_SortOrder_Create = {
  __typename?: 'LocationsDocAccessFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_SortOrder_Read = {
  __typename?: 'LocationsDocAccessFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_SortOrder_Update = {
  __typename?: 'LocationsDocAccessFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_SortOrder_Delete = {
  __typename?: 'LocationsDocAccessFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_IsActive = {
  __typename?: 'LocationsDocAccessFields_isActive';
  create?: Maybe<LocationsDocAccessFields_IsActive_Create>;
  read?: Maybe<LocationsDocAccessFields_IsActive_Read>;
  update?: Maybe<LocationsDocAccessFields_IsActive_Update>;
  delete?: Maybe<LocationsDocAccessFields_IsActive_Delete>;
};

export type LocationsDocAccessFields_IsActive_Create = {
  __typename?: 'LocationsDocAccessFields_isActive_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_IsActive_Read = {
  __typename?: 'LocationsDocAccessFields_isActive_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_IsActive_Update = {
  __typename?: 'LocationsDocAccessFields_isActive_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_IsActive_Delete = {
  __typename?: 'LocationsDocAccessFields_isActive_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_UpdatedAt = {
  __typename?: 'LocationsDocAccessFields_updatedAt';
  create?: Maybe<LocationsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<LocationsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LocationsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<LocationsDocAccessFields_UpdatedAt_Delete>;
};

export type LocationsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LocationsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LocationsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LocationsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LocationsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_CreatedAt = {
  __typename?: 'LocationsDocAccessFields_createdAt';
  create?: Maybe<LocationsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<LocationsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LocationsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<LocationsDocAccessFields_CreatedAt_Delete>;
};

export type LocationsDocAccessFields_CreatedAt_Create = {
  __typename?: 'LocationsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_CreatedAt_Read = {
  __typename?: 'LocationsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_CreatedAt_Update = {
  __typename?: 'LocationsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LocationsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsCreateDocAccess = {
  __typename?: 'LocationsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsReadDocAccess = {
  __typename?: 'LocationsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsUpdateDocAccess = {
  __typename?: 'LocationsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsDeleteDocAccess = {
  __typename?: 'LocationsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategory = {
  __typename?: 'TrainingCategory';
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TrainingCategories = {
  __typename?: 'TrainingCategories';
  docs: Array<TrainingCategory>;
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

export type TrainingCategory_Where = {
  title?: InputMaybe<TrainingCategory_Title_Operator>;
  sortOrder?: InputMaybe<TrainingCategory_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingCategory_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingCategory_CreatedAt_Operator>;
  id?: InputMaybe<TrainingCategory_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_Or>>>;
};

export type TrainingCategory_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TrainingCategory_SortOrder_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingCategory_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingCategory_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingCategory_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingCategory_Where_And = {
  title?: InputMaybe<TrainingCategory_Title_Operator>;
  sortOrder?: InputMaybe<TrainingCategory_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingCategory_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingCategory_CreatedAt_Operator>;
  id?: InputMaybe<TrainingCategory_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_Or>>>;
};

export type TrainingCategory_Where_Or = {
  title?: InputMaybe<TrainingCategory_Title_Operator>;
  sortOrder?: InputMaybe<TrainingCategory_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingCategory_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingCategory_CreatedAt_Operator>;
  id?: InputMaybe<TrainingCategory_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingCategory_Where_Or>>>;
};

export type CountTrainingCategories = {
  __typename?: 'countTrainingCategories';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Training_CategoriesDocAccess = {
  __typename?: 'training_categoriesDocAccess';
  fields?: Maybe<TrainingCategoriesDocAccessFields>;
  create?: Maybe<TrainingCategoriesCreateDocAccess>;
  read?: Maybe<TrainingCategoriesReadDocAccess>;
  update?: Maybe<TrainingCategoriesUpdateDocAccess>;
  delete?: Maybe<TrainingCategoriesDeleteDocAccess>;
};

export type TrainingCategoriesDocAccessFields = {
  __typename?: 'TrainingCategoriesDocAccessFields';
  title?: Maybe<TrainingCategoriesDocAccessFields_Title>;
  sortOrder?: Maybe<TrainingCategoriesDocAccessFields_SortOrder>;
  updatedAt?: Maybe<TrainingCategoriesDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<TrainingCategoriesDocAccessFields_CreatedAt>;
};

export type TrainingCategoriesDocAccessFields_Title = {
  __typename?: 'TrainingCategoriesDocAccessFields_title';
  create?: Maybe<TrainingCategoriesDocAccessFields_Title_Create>;
  read?: Maybe<TrainingCategoriesDocAccessFields_Title_Read>;
  update?: Maybe<TrainingCategoriesDocAccessFields_Title_Update>;
  delete?: Maybe<TrainingCategoriesDocAccessFields_Title_Delete>;
};

export type TrainingCategoriesDocAccessFields_Title_Create = {
  __typename?: 'TrainingCategoriesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_Title_Read = {
  __typename?: 'TrainingCategoriesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_Title_Update = {
  __typename?: 'TrainingCategoriesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_Title_Delete = {
  __typename?: 'TrainingCategoriesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_SortOrder = {
  __typename?: 'TrainingCategoriesDocAccessFields_sortOrder';
  create?: Maybe<TrainingCategoriesDocAccessFields_SortOrder_Create>;
  read?: Maybe<TrainingCategoriesDocAccessFields_SortOrder_Read>;
  update?: Maybe<TrainingCategoriesDocAccessFields_SortOrder_Update>;
  delete?: Maybe<TrainingCategoriesDocAccessFields_SortOrder_Delete>;
};

export type TrainingCategoriesDocAccessFields_SortOrder_Create = {
  __typename?: 'TrainingCategoriesDocAccessFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_SortOrder_Read = {
  __typename?: 'TrainingCategoriesDocAccessFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_SortOrder_Update = {
  __typename?: 'TrainingCategoriesDocAccessFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_SortOrder_Delete = {
  __typename?: 'TrainingCategoriesDocAccessFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'TrainingCategoriesDocAccessFields_updatedAt';
  create?: Maybe<TrainingCategoriesDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<TrainingCategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TrainingCategoriesDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingCategoriesDocAccessFields_UpdatedAt_Delete>;
};

export type TrainingCategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TrainingCategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TrainingCategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TrainingCategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TrainingCategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_CreatedAt = {
  __typename?: 'TrainingCategoriesDocAccessFields_createdAt';
  create?: Maybe<TrainingCategoriesDocAccessFields_CreatedAt_Create>;
  read?: Maybe<TrainingCategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TrainingCategoriesDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<TrainingCategoriesDocAccessFields_CreatedAt_Delete>;
};

export type TrainingCategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'TrainingCategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'TrainingCategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'TrainingCategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TrainingCategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesCreateDocAccess = {
  __typename?: 'TrainingCategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesReadDocAccess = {
  __typename?: 'TrainingCategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesUpdateDocAccess = {
  __typename?: 'TrainingCategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesDeleteDocAccess = {
  __typename?: 'TrainingCategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideo = {
  __typename?: 'TrainingVideo';
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  category?: Maybe<TrainingCategory>;
  poster?: Maybe<Media>;
  video?: Maybe<Media>;
  sortOrder?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type TrainingVideoCategoryArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type TrainingVideoPosterArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type TrainingVideoVideoArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type TrainingVideos = {
  __typename?: 'TrainingVideos';
  docs: Array<TrainingVideo>;
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

export type TrainingVideo_Where = {
  title?: InputMaybe<TrainingVideo_Title_Operator>;
  description?: InputMaybe<TrainingVideo_Description_Operator>;
  category?: InputMaybe<TrainingVideo_Category_Operator>;
  poster?: InputMaybe<TrainingVideo_Poster_Operator>;
  video?: InputMaybe<TrainingVideo_Video_Operator>;
  sortOrder?: InputMaybe<TrainingVideo_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingVideo_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingVideo_CreatedAt_Operator>;
  id?: InputMaybe<TrainingVideo_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_Or>>>;
};

export type TrainingVideo_Title_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TrainingVideo_Description_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
};

export type TrainingVideo_Category_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TrainingVideo_Poster_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TrainingVideo_Video_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type TrainingVideo_SortOrder_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingVideo_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingVideo_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingVideo_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TrainingVideo_Where_And = {
  title?: InputMaybe<TrainingVideo_Title_Operator>;
  description?: InputMaybe<TrainingVideo_Description_Operator>;
  category?: InputMaybe<TrainingVideo_Category_Operator>;
  poster?: InputMaybe<TrainingVideo_Poster_Operator>;
  video?: InputMaybe<TrainingVideo_Video_Operator>;
  sortOrder?: InputMaybe<TrainingVideo_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingVideo_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingVideo_CreatedAt_Operator>;
  id?: InputMaybe<TrainingVideo_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_Or>>>;
};

export type TrainingVideo_Where_Or = {
  title?: InputMaybe<TrainingVideo_Title_Operator>;
  description?: InputMaybe<TrainingVideo_Description_Operator>;
  category?: InputMaybe<TrainingVideo_Category_Operator>;
  poster?: InputMaybe<TrainingVideo_Poster_Operator>;
  video?: InputMaybe<TrainingVideo_Video_Operator>;
  sortOrder?: InputMaybe<TrainingVideo_SortOrder_Operator>;
  updatedAt?: InputMaybe<TrainingVideo_UpdatedAt_Operator>;
  createdAt?: InputMaybe<TrainingVideo_CreatedAt_Operator>;
  id?: InputMaybe<TrainingVideo_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TrainingVideo_Where_Or>>>;
};

export type CountTrainingVideos = {
  __typename?: 'countTrainingVideos';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Training_VideosDocAccess = {
  __typename?: 'training_videosDocAccess';
  fields?: Maybe<TrainingVideosDocAccessFields>;
  create?: Maybe<TrainingVideosCreateDocAccess>;
  read?: Maybe<TrainingVideosReadDocAccess>;
  update?: Maybe<TrainingVideosUpdateDocAccess>;
  delete?: Maybe<TrainingVideosDeleteDocAccess>;
};

export type TrainingVideosDocAccessFields = {
  __typename?: 'TrainingVideosDocAccessFields';
  title?: Maybe<TrainingVideosDocAccessFields_Title>;
  description?: Maybe<TrainingVideosDocAccessFields_Description>;
  category?: Maybe<TrainingVideosDocAccessFields_Category>;
  poster?: Maybe<TrainingVideosDocAccessFields_Poster>;
  video?: Maybe<TrainingVideosDocAccessFields_Video>;
  sortOrder?: Maybe<TrainingVideosDocAccessFields_SortOrder>;
  updatedAt?: Maybe<TrainingVideosDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<TrainingVideosDocAccessFields_CreatedAt>;
};

export type TrainingVideosDocAccessFields_Title = {
  __typename?: 'TrainingVideosDocAccessFields_title';
  create?: Maybe<TrainingVideosDocAccessFields_Title_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_Title_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_Title_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_Title_Delete>;
};

export type TrainingVideosDocAccessFields_Title_Create = {
  __typename?: 'TrainingVideosDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Title_Read = {
  __typename?: 'TrainingVideosDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Title_Update = {
  __typename?: 'TrainingVideosDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Title_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Description = {
  __typename?: 'TrainingVideosDocAccessFields_description';
  create?: Maybe<TrainingVideosDocAccessFields_Description_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_Description_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_Description_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_Description_Delete>;
};

export type TrainingVideosDocAccessFields_Description_Create = {
  __typename?: 'TrainingVideosDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Description_Read = {
  __typename?: 'TrainingVideosDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Description_Update = {
  __typename?: 'TrainingVideosDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Description_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Category = {
  __typename?: 'TrainingVideosDocAccessFields_category';
  create?: Maybe<TrainingVideosDocAccessFields_Category_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_Category_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_Category_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_Category_Delete>;
};

export type TrainingVideosDocAccessFields_Category_Create = {
  __typename?: 'TrainingVideosDocAccessFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Category_Read = {
  __typename?: 'TrainingVideosDocAccessFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Category_Update = {
  __typename?: 'TrainingVideosDocAccessFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Category_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Poster = {
  __typename?: 'TrainingVideosDocAccessFields_poster';
  create?: Maybe<TrainingVideosDocAccessFields_Poster_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_Poster_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_Poster_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_Poster_Delete>;
};

export type TrainingVideosDocAccessFields_Poster_Create = {
  __typename?: 'TrainingVideosDocAccessFields_poster_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Poster_Read = {
  __typename?: 'TrainingVideosDocAccessFields_poster_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Poster_Update = {
  __typename?: 'TrainingVideosDocAccessFields_poster_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Poster_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_poster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Video = {
  __typename?: 'TrainingVideosDocAccessFields_video';
  create?: Maybe<TrainingVideosDocAccessFields_Video_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_Video_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_Video_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_Video_Delete>;
};

export type TrainingVideosDocAccessFields_Video_Create = {
  __typename?: 'TrainingVideosDocAccessFields_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Video_Read = {
  __typename?: 'TrainingVideosDocAccessFields_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Video_Update = {
  __typename?: 'TrainingVideosDocAccessFields_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_Video_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_SortOrder = {
  __typename?: 'TrainingVideosDocAccessFields_sortOrder';
  create?: Maybe<TrainingVideosDocAccessFields_SortOrder_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_SortOrder_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_SortOrder_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_SortOrder_Delete>;
};

export type TrainingVideosDocAccessFields_SortOrder_Create = {
  __typename?: 'TrainingVideosDocAccessFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_SortOrder_Read = {
  __typename?: 'TrainingVideosDocAccessFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_SortOrder_Update = {
  __typename?: 'TrainingVideosDocAccessFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_SortOrder_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_UpdatedAt = {
  __typename?: 'TrainingVideosDocAccessFields_updatedAt';
  create?: Maybe<TrainingVideosDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_UpdatedAt_Delete>;
};

export type TrainingVideosDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TrainingVideosDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TrainingVideosDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TrainingVideosDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_CreatedAt = {
  __typename?: 'TrainingVideosDocAccessFields_createdAt';
  create?: Maybe<TrainingVideosDocAccessFields_CreatedAt_Create>;
  read?: Maybe<TrainingVideosDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TrainingVideosDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<TrainingVideosDocAccessFields_CreatedAt_Delete>;
};

export type TrainingVideosDocAccessFields_CreatedAt_Create = {
  __typename?: 'TrainingVideosDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_CreatedAt_Read = {
  __typename?: 'TrainingVideosDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_CreatedAt_Update = {
  __typename?: 'TrainingVideosDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TrainingVideosDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosCreateDocAccess = {
  __typename?: 'TrainingVideosCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosReadDocAccess = {
  __typename?: 'TrainingVideosReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosUpdateDocAccess = {
  __typename?: 'TrainingVideosUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosDeleteDocAccess = {
  __typename?: 'TrainingVideosDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['Int']['output'];
  source: Application_Source;
  name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status: Application_Status;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Application_Source {
  Contacts = 'contacts',
  HeroPopup = 'hero_popup'
}

export enum Application_Status {
  New = 'new',
  Processing = 'processing',
  Completed = 'completed',
  Rejected = 'rejected'
}

export type Applications = {
  __typename?: 'Applications';
  docs: Array<Application>;
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

export type Application_Where = {
  source?: InputMaybe<Application_Source_Operator>;
  name?: InputMaybe<Application_Name_Operator>;
  email?: InputMaybe<Application_Email_Operator>;
  phone?: InputMaybe<Application_Phone_Operator>;
  message?: InputMaybe<Application_Message_Operator>;
  status?: InputMaybe<Application_Status_Operator>;
  updatedAt?: InputMaybe<Application_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Application_CreatedAt_Operator>;
  id?: InputMaybe<Application_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Application_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Application_Where_Or>>>;
};

export type Application_Source_Operator = {
  equals?: InputMaybe<Application_Source_Input>;
  not_equals?: InputMaybe<Application_Source_Input>;
  in?: InputMaybe<Array<InputMaybe<Application_Source_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<Application_Source_Input>>>;
  all?: InputMaybe<Array<InputMaybe<Application_Source_Input>>>;
};

export enum Application_Source_Input {
  Contacts = 'contacts',
  HeroPopup = 'hero_popup'
}

export type Application_Name_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Application_Email_Operator = {
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_Phone_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_Message_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_Status_Operator = {
  equals?: InputMaybe<Application_Status_Input>;
  not_equals?: InputMaybe<Application_Status_Input>;
  in?: InputMaybe<Array<InputMaybe<Application_Status_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<Application_Status_Input>>>;
  all?: InputMaybe<Array<InputMaybe<Application_Status_Input>>>;
};

export enum Application_Status_Input {
  New = 'new',
  Processing = 'processing',
  Completed = 'completed',
  Rejected = 'rejected'
}

export type Application_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Application_Where_And = {
  source?: InputMaybe<Application_Source_Operator>;
  name?: InputMaybe<Application_Name_Operator>;
  email?: InputMaybe<Application_Email_Operator>;
  phone?: InputMaybe<Application_Phone_Operator>;
  message?: InputMaybe<Application_Message_Operator>;
  status?: InputMaybe<Application_Status_Operator>;
  updatedAt?: InputMaybe<Application_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Application_CreatedAt_Operator>;
  id?: InputMaybe<Application_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Application_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Application_Where_Or>>>;
};

export type Application_Where_Or = {
  source?: InputMaybe<Application_Source_Operator>;
  name?: InputMaybe<Application_Name_Operator>;
  email?: InputMaybe<Application_Email_Operator>;
  phone?: InputMaybe<Application_Phone_Operator>;
  message?: InputMaybe<Application_Message_Operator>;
  status?: InputMaybe<Application_Status_Operator>;
  updatedAt?: InputMaybe<Application_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Application_CreatedAt_Operator>;
  id?: InputMaybe<Application_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Application_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Application_Where_Or>>>;
};

export type CountApplications = {
  __typename?: 'countApplications';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type ApplicationsDocAccess = {
  __typename?: 'applicationsDocAccess';
  fields?: Maybe<ApplicationsDocAccessFields>;
  create?: Maybe<ApplicationsCreateDocAccess>;
  read?: Maybe<ApplicationsReadDocAccess>;
  update?: Maybe<ApplicationsUpdateDocAccess>;
  delete?: Maybe<ApplicationsDeleteDocAccess>;
};

export type ApplicationsDocAccessFields = {
  __typename?: 'ApplicationsDocAccessFields';
  source?: Maybe<ApplicationsDocAccessFields_Source>;
  name?: Maybe<ApplicationsDocAccessFields_Name>;
  email?: Maybe<ApplicationsDocAccessFields_Email>;
  phone?: Maybe<ApplicationsDocAccessFields_Phone>;
  message?: Maybe<ApplicationsDocAccessFields_Message>;
  status?: Maybe<ApplicationsDocAccessFields_Status>;
  updatedAt?: Maybe<ApplicationsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<ApplicationsDocAccessFields_CreatedAt>;
};

export type ApplicationsDocAccessFields_Source = {
  __typename?: 'ApplicationsDocAccessFields_source';
  create?: Maybe<ApplicationsDocAccessFields_Source_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Source_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Source_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Source_Delete>;
};

export type ApplicationsDocAccessFields_Source_Create = {
  __typename?: 'ApplicationsDocAccessFields_source_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Source_Read = {
  __typename?: 'ApplicationsDocAccessFields_source_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Source_Update = {
  __typename?: 'ApplicationsDocAccessFields_source_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Source_Delete = {
  __typename?: 'ApplicationsDocAccessFields_source_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Name = {
  __typename?: 'ApplicationsDocAccessFields_name';
  create?: Maybe<ApplicationsDocAccessFields_Name_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Name_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Name_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Name_Delete>;
};

export type ApplicationsDocAccessFields_Name_Create = {
  __typename?: 'ApplicationsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Name_Read = {
  __typename?: 'ApplicationsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Name_Update = {
  __typename?: 'ApplicationsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Name_Delete = {
  __typename?: 'ApplicationsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Email = {
  __typename?: 'ApplicationsDocAccessFields_email';
  create?: Maybe<ApplicationsDocAccessFields_Email_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Email_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Email_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Email_Delete>;
};

export type ApplicationsDocAccessFields_Email_Create = {
  __typename?: 'ApplicationsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Email_Read = {
  __typename?: 'ApplicationsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Email_Update = {
  __typename?: 'ApplicationsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Email_Delete = {
  __typename?: 'ApplicationsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Phone = {
  __typename?: 'ApplicationsDocAccessFields_phone';
  create?: Maybe<ApplicationsDocAccessFields_Phone_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Phone_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Phone_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Phone_Delete>;
};

export type ApplicationsDocAccessFields_Phone_Create = {
  __typename?: 'ApplicationsDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Phone_Read = {
  __typename?: 'ApplicationsDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Phone_Update = {
  __typename?: 'ApplicationsDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Phone_Delete = {
  __typename?: 'ApplicationsDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Message = {
  __typename?: 'ApplicationsDocAccessFields_message';
  create?: Maybe<ApplicationsDocAccessFields_Message_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Message_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Message_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Message_Delete>;
};

export type ApplicationsDocAccessFields_Message_Create = {
  __typename?: 'ApplicationsDocAccessFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Message_Read = {
  __typename?: 'ApplicationsDocAccessFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Message_Update = {
  __typename?: 'ApplicationsDocAccessFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Message_Delete = {
  __typename?: 'ApplicationsDocAccessFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Status = {
  __typename?: 'ApplicationsDocAccessFields_status';
  create?: Maybe<ApplicationsDocAccessFields_Status_Create>;
  read?: Maybe<ApplicationsDocAccessFields_Status_Read>;
  update?: Maybe<ApplicationsDocAccessFields_Status_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_Status_Delete>;
};

export type ApplicationsDocAccessFields_Status_Create = {
  __typename?: 'ApplicationsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Status_Read = {
  __typename?: 'ApplicationsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Status_Update = {
  __typename?: 'ApplicationsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_Status_Delete = {
  __typename?: 'ApplicationsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_UpdatedAt = {
  __typename?: 'ApplicationsDocAccessFields_updatedAt';
  create?: Maybe<ApplicationsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<ApplicationsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ApplicationsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_UpdatedAt_Delete>;
};

export type ApplicationsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ApplicationsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ApplicationsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ApplicationsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ApplicationsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_CreatedAt = {
  __typename?: 'ApplicationsDocAccessFields_createdAt';
  create?: Maybe<ApplicationsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<ApplicationsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ApplicationsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<ApplicationsDocAccessFields_CreatedAt_Delete>;
};

export type ApplicationsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ApplicationsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ApplicationsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ApplicationsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ApplicationsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsCreateDocAccess = {
  __typename?: 'ApplicationsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsReadDocAccess = {
  __typename?: 'ApplicationsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsUpdateDocAccess = {
  __typename?: 'ApplicationsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsDeleteDocAccess = {
  __typename?: 'ApplicationsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplication = {
  __typename?: 'DealerApplication';
  id: Scalars['Int']['output'];
  account?: Maybe<User>;
  companyName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  city: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  status: DealerApplication_Status;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DealerApplicationAccountArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export enum DealerApplication_Status {
  New = 'new',
  Processing = 'processing',
  Approved = 'approved',
  Rejected = 'rejected'
}

export type DealerApplications = {
  __typename?: 'DealerApplications';
  docs: Array<DealerApplication>;
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

export type DealerApplication_Where = {
  account?: InputMaybe<DealerApplication_Account_Operator>;
  companyName?: InputMaybe<DealerApplication_CompanyName_Operator>;
  firstName?: InputMaybe<DealerApplication_FirstName_Operator>;
  lastName?: InputMaybe<DealerApplication_LastName_Operator>;
  phone?: InputMaybe<DealerApplication_Phone_Operator>;
  email?: InputMaybe<DealerApplication_Email_Operator>;
  city?: InputMaybe<DealerApplication_City_Operator>;
  message?: InputMaybe<DealerApplication_Message_Operator>;
  status?: InputMaybe<DealerApplication_Status_Operator>;
  updatedAt?: InputMaybe<DealerApplication_UpdatedAt_Operator>;
  createdAt?: InputMaybe<DealerApplication_CreatedAt_Operator>;
  id?: InputMaybe<DealerApplication_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<DealerApplication_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DealerApplication_Where_Or>>>;
};

export type DealerApplication_Account_Operator = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type DealerApplication_CompanyName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DealerApplication_FirstName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DealerApplication_LastName_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DealerApplication_Phone_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DealerApplication_Email_Operator = {
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type DealerApplication_City_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DealerApplication_Message_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerApplication_Status_Operator = {
  equals?: InputMaybe<DealerApplication_Status_Input>;
  not_equals?: InputMaybe<DealerApplication_Status_Input>;
  in?: InputMaybe<Array<InputMaybe<DealerApplication_Status_Input>>>;
  not_in?: InputMaybe<Array<InputMaybe<DealerApplication_Status_Input>>>;
  all?: InputMaybe<Array<InputMaybe<DealerApplication_Status_Input>>>;
};

export enum DealerApplication_Status_Input {
  New = 'new',
  Processing = 'processing',
  Approved = 'approved',
  Rejected = 'rejected'
}

export type DealerApplication_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerApplication_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerApplication_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DealerApplication_Where_And = {
  account?: InputMaybe<DealerApplication_Account_Operator>;
  companyName?: InputMaybe<DealerApplication_CompanyName_Operator>;
  firstName?: InputMaybe<DealerApplication_FirstName_Operator>;
  lastName?: InputMaybe<DealerApplication_LastName_Operator>;
  phone?: InputMaybe<DealerApplication_Phone_Operator>;
  email?: InputMaybe<DealerApplication_Email_Operator>;
  city?: InputMaybe<DealerApplication_City_Operator>;
  message?: InputMaybe<DealerApplication_Message_Operator>;
  status?: InputMaybe<DealerApplication_Status_Operator>;
  updatedAt?: InputMaybe<DealerApplication_UpdatedAt_Operator>;
  createdAt?: InputMaybe<DealerApplication_CreatedAt_Operator>;
  id?: InputMaybe<DealerApplication_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<DealerApplication_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DealerApplication_Where_Or>>>;
};

export type DealerApplication_Where_Or = {
  account?: InputMaybe<DealerApplication_Account_Operator>;
  companyName?: InputMaybe<DealerApplication_CompanyName_Operator>;
  firstName?: InputMaybe<DealerApplication_FirstName_Operator>;
  lastName?: InputMaybe<DealerApplication_LastName_Operator>;
  phone?: InputMaybe<DealerApplication_Phone_Operator>;
  email?: InputMaybe<DealerApplication_Email_Operator>;
  city?: InputMaybe<DealerApplication_City_Operator>;
  message?: InputMaybe<DealerApplication_Message_Operator>;
  status?: InputMaybe<DealerApplication_Status_Operator>;
  updatedAt?: InputMaybe<DealerApplication_UpdatedAt_Operator>;
  createdAt?: InputMaybe<DealerApplication_CreatedAt_Operator>;
  id?: InputMaybe<DealerApplication_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<DealerApplication_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<DealerApplication_Where_Or>>>;
};

export type CountDealerApplications = {
  __typename?: 'countDealerApplications';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Dealer_ApplicationsDocAccess = {
  __typename?: 'dealer_applicationsDocAccess';
  fields?: Maybe<DealerApplicationsDocAccessFields>;
  create?: Maybe<DealerApplicationsCreateDocAccess>;
  read?: Maybe<DealerApplicationsReadDocAccess>;
  update?: Maybe<DealerApplicationsUpdateDocAccess>;
  delete?: Maybe<DealerApplicationsDeleteDocAccess>;
};

export type DealerApplicationsDocAccessFields = {
  __typename?: 'DealerApplicationsDocAccessFields';
  account?: Maybe<DealerApplicationsDocAccessFields_Account>;
  companyName?: Maybe<DealerApplicationsDocAccessFields_CompanyName>;
  firstName?: Maybe<DealerApplicationsDocAccessFields_FirstName>;
  lastName?: Maybe<DealerApplicationsDocAccessFields_LastName>;
  phone?: Maybe<DealerApplicationsDocAccessFields_Phone>;
  email?: Maybe<DealerApplicationsDocAccessFields_Email>;
  city?: Maybe<DealerApplicationsDocAccessFields_City>;
  message?: Maybe<DealerApplicationsDocAccessFields_Message>;
  status?: Maybe<DealerApplicationsDocAccessFields_Status>;
  updatedAt?: Maybe<DealerApplicationsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<DealerApplicationsDocAccessFields_CreatedAt>;
};

export type DealerApplicationsDocAccessFields_Account = {
  __typename?: 'DealerApplicationsDocAccessFields_account';
  create?: Maybe<DealerApplicationsDocAccessFields_Account_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_Account_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_Account_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_Account_Delete>;
};

export type DealerApplicationsDocAccessFields_Account_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_account_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Account_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_account_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Account_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_account_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Account_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_account_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CompanyName = {
  __typename?: 'DealerApplicationsDocAccessFields_companyName';
  create?: Maybe<DealerApplicationsDocAccessFields_CompanyName_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_CompanyName_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_CompanyName_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_CompanyName_Delete>;
};

export type DealerApplicationsDocAccessFields_CompanyName_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_companyName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CompanyName_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_companyName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CompanyName_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_companyName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CompanyName_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_companyName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_FirstName = {
  __typename?: 'DealerApplicationsDocAccessFields_firstName';
  create?: Maybe<DealerApplicationsDocAccessFields_FirstName_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_FirstName_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_FirstName_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_FirstName_Delete>;
};

export type DealerApplicationsDocAccessFields_FirstName_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_FirstName_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_FirstName_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_FirstName_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_LastName = {
  __typename?: 'DealerApplicationsDocAccessFields_lastName';
  create?: Maybe<DealerApplicationsDocAccessFields_LastName_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_LastName_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_LastName_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_LastName_Delete>;
};

export type DealerApplicationsDocAccessFields_LastName_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_LastName_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_LastName_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_LastName_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Phone = {
  __typename?: 'DealerApplicationsDocAccessFields_phone';
  create?: Maybe<DealerApplicationsDocAccessFields_Phone_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_Phone_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_Phone_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_Phone_Delete>;
};

export type DealerApplicationsDocAccessFields_Phone_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Phone_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Phone_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Phone_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Email = {
  __typename?: 'DealerApplicationsDocAccessFields_email';
  create?: Maybe<DealerApplicationsDocAccessFields_Email_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_Email_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_Email_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_Email_Delete>;
};

export type DealerApplicationsDocAccessFields_Email_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Email_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Email_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Email_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_City = {
  __typename?: 'DealerApplicationsDocAccessFields_city';
  create?: Maybe<DealerApplicationsDocAccessFields_City_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_City_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_City_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_City_Delete>;
};

export type DealerApplicationsDocAccessFields_City_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_City_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_City_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_City_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Message = {
  __typename?: 'DealerApplicationsDocAccessFields_message';
  create?: Maybe<DealerApplicationsDocAccessFields_Message_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_Message_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_Message_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_Message_Delete>;
};

export type DealerApplicationsDocAccessFields_Message_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Message_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Message_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Message_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Status = {
  __typename?: 'DealerApplicationsDocAccessFields_status';
  create?: Maybe<DealerApplicationsDocAccessFields_Status_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_Status_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_Status_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_Status_Delete>;
};

export type DealerApplicationsDocAccessFields_Status_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Status_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Status_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_Status_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_UpdatedAt = {
  __typename?: 'DealerApplicationsDocAccessFields_updatedAt';
  create?: Maybe<DealerApplicationsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_UpdatedAt_Delete>;
};

export type DealerApplicationsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CreatedAt = {
  __typename?: 'DealerApplicationsDocAccessFields_createdAt';
  create?: Maybe<DealerApplicationsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<DealerApplicationsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<DealerApplicationsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<DealerApplicationsDocAccessFields_CreatedAt_Delete>;
};

export type DealerApplicationsDocAccessFields_CreatedAt_Create = {
  __typename?: 'DealerApplicationsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CreatedAt_Read = {
  __typename?: 'DealerApplicationsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CreatedAt_Update = {
  __typename?: 'DealerApplicationsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'DealerApplicationsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsCreateDocAccess = {
  __typename?: 'DealerApplicationsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsReadDocAccess = {
  __typename?: 'DealerApplicationsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsUpdateDocAccess = {
  __typename?: 'DealerApplicationsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsDeleteDocAccess = {
  __typename?: 'DealerApplicationsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Currency = {
  __typename?: 'Currency';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  active?: Maybe<Scalars['Boolean']['output']>;
  sortOrder?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Currencies = {
  __typename?: 'Currencies';
  docs: Array<Currency>;
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

export type Currency_Where = {
  name?: InputMaybe<Currency_Name_Operator>;
  code?: InputMaybe<Currency_Code_Operator>;
  symbol?: InputMaybe<Currency_Symbol_Operator>;
  rate?: InputMaybe<Currency_Rate_Operator>;
  active?: InputMaybe<Currency_Active_Operator>;
  sortOrder?: InputMaybe<Currency_SortOrder_Operator>;
  updatedAt?: InputMaybe<Currency_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Currency_CreatedAt_Operator>;
  id?: InputMaybe<Currency_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Currency_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Currency_Where_Or>>>;
};

export type Currency_Name_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Currency_Code_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Currency_Symbol_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Currency_Rate_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
};

export type Currency_Active_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency_SortOrder_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Currency_Where_And = {
  name?: InputMaybe<Currency_Name_Operator>;
  code?: InputMaybe<Currency_Code_Operator>;
  symbol?: InputMaybe<Currency_Symbol_Operator>;
  rate?: InputMaybe<Currency_Rate_Operator>;
  active?: InputMaybe<Currency_Active_Operator>;
  sortOrder?: InputMaybe<Currency_SortOrder_Operator>;
  updatedAt?: InputMaybe<Currency_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Currency_CreatedAt_Operator>;
  id?: InputMaybe<Currency_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Currency_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Currency_Where_Or>>>;
};

export type Currency_Where_Or = {
  name?: InputMaybe<Currency_Name_Operator>;
  code?: InputMaybe<Currency_Code_Operator>;
  symbol?: InputMaybe<Currency_Symbol_Operator>;
  rate?: InputMaybe<Currency_Rate_Operator>;
  active?: InputMaybe<Currency_Active_Operator>;
  sortOrder?: InputMaybe<Currency_SortOrder_Operator>;
  updatedAt?: InputMaybe<Currency_UpdatedAt_Operator>;
  createdAt?: InputMaybe<Currency_CreatedAt_Operator>;
  id?: InputMaybe<Currency_Id_Operator>;
  AND?: InputMaybe<Array<InputMaybe<Currency_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Currency_Where_Or>>>;
};

export type CountCurrencies = {
  __typename?: 'countCurrencies';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CurrenciesDocAccess = {
  __typename?: 'currenciesDocAccess';
  fields?: Maybe<CurrenciesDocAccessFields>;
  create?: Maybe<CurrenciesCreateDocAccess>;
  read?: Maybe<CurrenciesReadDocAccess>;
  update?: Maybe<CurrenciesUpdateDocAccess>;
  delete?: Maybe<CurrenciesDeleteDocAccess>;
};

export type CurrenciesDocAccessFields = {
  __typename?: 'CurrenciesDocAccessFields';
  name?: Maybe<CurrenciesDocAccessFields_Name>;
  code?: Maybe<CurrenciesDocAccessFields_Code>;
  symbol?: Maybe<CurrenciesDocAccessFields_Symbol>;
  rate?: Maybe<CurrenciesDocAccessFields_Rate>;
  active?: Maybe<CurrenciesDocAccessFields_Active>;
  sortOrder?: Maybe<CurrenciesDocAccessFields_SortOrder>;
  updatedAt?: Maybe<CurrenciesDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<CurrenciesDocAccessFields_CreatedAt>;
};

export type CurrenciesDocAccessFields_Name = {
  __typename?: 'CurrenciesDocAccessFields_name';
  create?: Maybe<CurrenciesDocAccessFields_Name_Create>;
  read?: Maybe<CurrenciesDocAccessFields_Name_Read>;
  update?: Maybe<CurrenciesDocAccessFields_Name_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_Name_Delete>;
};

export type CurrenciesDocAccessFields_Name_Create = {
  __typename?: 'CurrenciesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Name_Read = {
  __typename?: 'CurrenciesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Name_Update = {
  __typename?: 'CurrenciesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Name_Delete = {
  __typename?: 'CurrenciesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Code = {
  __typename?: 'CurrenciesDocAccessFields_code';
  create?: Maybe<CurrenciesDocAccessFields_Code_Create>;
  read?: Maybe<CurrenciesDocAccessFields_Code_Read>;
  update?: Maybe<CurrenciesDocAccessFields_Code_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_Code_Delete>;
};

export type CurrenciesDocAccessFields_Code_Create = {
  __typename?: 'CurrenciesDocAccessFields_code_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Code_Read = {
  __typename?: 'CurrenciesDocAccessFields_code_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Code_Update = {
  __typename?: 'CurrenciesDocAccessFields_code_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Code_Delete = {
  __typename?: 'CurrenciesDocAccessFields_code_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Symbol = {
  __typename?: 'CurrenciesDocAccessFields_symbol';
  create?: Maybe<CurrenciesDocAccessFields_Symbol_Create>;
  read?: Maybe<CurrenciesDocAccessFields_Symbol_Read>;
  update?: Maybe<CurrenciesDocAccessFields_Symbol_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_Symbol_Delete>;
};

export type CurrenciesDocAccessFields_Symbol_Create = {
  __typename?: 'CurrenciesDocAccessFields_symbol_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Symbol_Read = {
  __typename?: 'CurrenciesDocAccessFields_symbol_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Symbol_Update = {
  __typename?: 'CurrenciesDocAccessFields_symbol_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Symbol_Delete = {
  __typename?: 'CurrenciesDocAccessFields_symbol_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Rate = {
  __typename?: 'CurrenciesDocAccessFields_rate';
  create?: Maybe<CurrenciesDocAccessFields_Rate_Create>;
  read?: Maybe<CurrenciesDocAccessFields_Rate_Read>;
  update?: Maybe<CurrenciesDocAccessFields_Rate_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_Rate_Delete>;
};

export type CurrenciesDocAccessFields_Rate_Create = {
  __typename?: 'CurrenciesDocAccessFields_rate_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Rate_Read = {
  __typename?: 'CurrenciesDocAccessFields_rate_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Rate_Update = {
  __typename?: 'CurrenciesDocAccessFields_rate_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Rate_Delete = {
  __typename?: 'CurrenciesDocAccessFields_rate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Active = {
  __typename?: 'CurrenciesDocAccessFields_active';
  create?: Maybe<CurrenciesDocAccessFields_Active_Create>;
  read?: Maybe<CurrenciesDocAccessFields_Active_Read>;
  update?: Maybe<CurrenciesDocAccessFields_Active_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_Active_Delete>;
};

export type CurrenciesDocAccessFields_Active_Create = {
  __typename?: 'CurrenciesDocAccessFields_active_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Active_Read = {
  __typename?: 'CurrenciesDocAccessFields_active_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Active_Update = {
  __typename?: 'CurrenciesDocAccessFields_active_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_Active_Delete = {
  __typename?: 'CurrenciesDocAccessFields_active_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_SortOrder = {
  __typename?: 'CurrenciesDocAccessFields_sortOrder';
  create?: Maybe<CurrenciesDocAccessFields_SortOrder_Create>;
  read?: Maybe<CurrenciesDocAccessFields_SortOrder_Read>;
  update?: Maybe<CurrenciesDocAccessFields_SortOrder_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_SortOrder_Delete>;
};

export type CurrenciesDocAccessFields_SortOrder_Create = {
  __typename?: 'CurrenciesDocAccessFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_SortOrder_Read = {
  __typename?: 'CurrenciesDocAccessFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_SortOrder_Update = {
  __typename?: 'CurrenciesDocAccessFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_SortOrder_Delete = {
  __typename?: 'CurrenciesDocAccessFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_UpdatedAt = {
  __typename?: 'CurrenciesDocAccessFields_updatedAt';
  create?: Maybe<CurrenciesDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<CurrenciesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CurrenciesDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_UpdatedAt_Delete>;
};

export type CurrenciesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CurrenciesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CurrenciesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CurrenciesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CurrenciesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_CreatedAt = {
  __typename?: 'CurrenciesDocAccessFields_createdAt';
  create?: Maybe<CurrenciesDocAccessFields_CreatedAt_Create>;
  read?: Maybe<CurrenciesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CurrenciesDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<CurrenciesDocAccessFields_CreatedAt_Delete>;
};

export type CurrenciesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CurrenciesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CurrenciesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CurrenciesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CurrenciesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesCreateDocAccess = {
  __typename?: 'CurrenciesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesReadDocAccess = {
  __typename?: 'CurrenciesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesUpdateDocAccess = {
  __typename?: 'CurrenciesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesDeleteDocAccess = {
  __typename?: 'CurrenciesDeleteDocAccess';
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


export type PayloadLockedDocumentDocumentArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type PayloadLockedDocumentUserArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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
  Category = 'category',
  Articles = 'articles',
  Orders = 'orders',
  LegalPages = 'legal_pages',
  Locations = 'locations',
  TrainingCategories = 'training_categories',
  TrainingVideos = 'training_videos',
  Applications = 'applications',
  DealerApplications = 'dealer_applications',
  Currencies = 'currencies'
}

export type PayloadLockedDocument_Document = User | Media | Review | Product | Category | Article | Order | LegalPage | Location | TrainingCategory | TrainingVideo | Application | DealerApplication | Currency;

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
  Category = 'category',
  Articles = 'articles',
  Orders = 'orders',
  LegalPages = 'legal_pages',
  Locations = 'locations',
  TrainingCategories = 'training_categories',
  TrainingVideos = 'training_videos',
  Applications = 'applications',
  DealerApplications = 'dealer_applications',
  Currencies = 'currencies'
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


export type PayloadPreferenceUserArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
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

export type Home = {
  __typename?: 'Home';
  hero?: Maybe<Home_Hero>;
  howItWork?: Maybe<Home_HowItWork>;
  beforeAfter?: Maybe<Array<Home_BeforeAfter>>;
  modelComparison?: Maybe<Home_ModelComparison>;
  certificatesSection?: Maybe<Home_CertificatesSection>;
  trainingSection?: Maybe<Home_TrainingSection>;
  reviewsSection?: Maybe<Home_ReviewsSection>;
  faqSection?: Maybe<Home_FaqSection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Home_Hero = {
  __typename?: 'Home_Hero';
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
};


export type Home_HeroImageArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_HowItWork = {
  __typename?: 'Home_HowItWork';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  cards?: Maybe<Array<Home_HowItWork_Cards>>;
};

export type Home_HowItWork_Cards = {
  __typename?: 'Home_HowItWork_Cards';
  icon?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};


export type Home_HowItWork_CardsIconArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_BeforeAfter = {
  __typename?: 'Home_BeforeAfter';
  before?: Maybe<Media>;
  after?: Maybe<Media>;
  id?: Maybe<Scalars['String']['output']>;
};


export type Home_BeforeAfterBeforeArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type Home_BeforeAfterAfterArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_ModelComparison = {
  __typename?: 'Home_ModelComparison';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Product>>;
};


export type Home_ModelComparisonProductsArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_CertificatesSection = {
  __typename?: 'Home_CertificatesSection';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  certificates?: Maybe<Array<Media>>;
};


export type Home_CertificatesSectionCertificatesArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_TrainingSection = {
  __typename?: 'Home_TrainingSection';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  video?: Maybe<Home_TrainingSection_Video>;
  cards?: Maybe<Array<Home_TrainingSection_Cards>>;
};

export type Home_TrainingSection_Video = {
  __typename?: 'Home_TrainingSection_Video';
  poster?: Maybe<Media>;
  file?: Maybe<Media>;
};


export type Home_TrainingSection_VideoPosterArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};


export type Home_TrainingSection_VideoFileArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_TrainingSection_Cards = {
  __typename?: 'Home_TrainingSection_Cards';
  icon?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};


export type Home_TrainingSection_CardsIconArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_ReviewsSection = {
  __typename?: 'Home_ReviewsSection';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  reviews?: Maybe<Array<Review>>;
};


export type Home_ReviewsSectionReviewsArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Home_FaqSection = {
  __typename?: 'Home_FaqSection';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Home_FaqSection_Items>>;
};

export type Home_FaqSection_Items = {
  __typename?: 'Home_FaqSection_Items';
  question?: Maybe<Scalars['String']['output']>;
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type HomeDocAccess = {
  __typename?: 'homeDocAccess';
  fields?: Maybe<HomeDocAccessFields>;
  read?: Maybe<HomeReadDocAccess>;
  update?: Maybe<HomeUpdateDocAccess>;
};

export type HomeDocAccessFields = {
  __typename?: 'HomeDocAccessFields';
  hero?: Maybe<HomeDocAccessFields_Hero>;
  howItWork?: Maybe<HomeDocAccessFields_HowItWork>;
  beforeAfter?: Maybe<HomeDocAccessFields_BeforeAfter>;
  modelComparison?: Maybe<HomeDocAccessFields_ModelComparison>;
  certificatesSection?: Maybe<HomeDocAccessFields_CertificatesSection>;
  trainingSection?: Maybe<HomeDocAccessFields_TrainingSection>;
  reviewsSection?: Maybe<HomeDocAccessFields_ReviewsSection>;
  faqSection?: Maybe<HomeDocAccessFields_FaqSection>;
  updatedAt?: Maybe<HomeDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<HomeDocAccessFields_CreatedAt>;
};

export type HomeDocAccessFields_Hero = {
  __typename?: 'HomeDocAccessFields_hero';
  create?: Maybe<HomeDocAccessFields_Hero_Create>;
  read?: Maybe<HomeDocAccessFields_Hero_Read>;
  update?: Maybe<HomeDocAccessFields_Hero_Update>;
  delete?: Maybe<HomeDocAccessFields_Hero_Delete>;
  fields?: Maybe<HomeDocAccessFields_Hero_Fields>;
};

export type HomeDocAccessFields_Hero_Create = {
  __typename?: 'HomeDocAccessFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Read = {
  __typename?: 'HomeDocAccessFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Update = {
  __typename?: 'HomeDocAccessFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Delete = {
  __typename?: 'HomeDocAccessFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Fields = {
  __typename?: 'HomeDocAccessFields_hero_Fields';
  title?: Maybe<HomeDocAccessFields_Hero_Title>;
  description?: Maybe<HomeDocAccessFields_Hero_Description>;
  image?: Maybe<HomeDocAccessFields_Hero_Image>;
};

export type HomeDocAccessFields_Hero_Title = {
  __typename?: 'HomeDocAccessFields_hero_title';
  create?: Maybe<HomeDocAccessFields_Hero_Title_Create>;
  read?: Maybe<HomeDocAccessFields_Hero_Title_Read>;
  update?: Maybe<HomeDocAccessFields_Hero_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_Hero_Title_Delete>;
};

export type HomeDocAccessFields_Hero_Title_Create = {
  __typename?: 'HomeDocAccessFields_hero_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Title_Read = {
  __typename?: 'HomeDocAccessFields_hero_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Title_Update = {
  __typename?: 'HomeDocAccessFields_hero_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Title_Delete = {
  __typename?: 'HomeDocAccessFields_hero_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Description = {
  __typename?: 'HomeDocAccessFields_hero_description';
  create?: Maybe<HomeDocAccessFields_Hero_Description_Create>;
  read?: Maybe<HomeDocAccessFields_Hero_Description_Read>;
  update?: Maybe<HomeDocAccessFields_Hero_Description_Update>;
  delete?: Maybe<HomeDocAccessFields_Hero_Description_Delete>;
};

export type HomeDocAccessFields_Hero_Description_Create = {
  __typename?: 'HomeDocAccessFields_hero_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Description_Read = {
  __typename?: 'HomeDocAccessFields_hero_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Description_Update = {
  __typename?: 'HomeDocAccessFields_hero_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Description_Delete = {
  __typename?: 'HomeDocAccessFields_hero_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Image = {
  __typename?: 'HomeDocAccessFields_hero_image';
  create?: Maybe<HomeDocAccessFields_Hero_Image_Create>;
  read?: Maybe<HomeDocAccessFields_Hero_Image_Read>;
  update?: Maybe<HomeDocAccessFields_Hero_Image_Update>;
  delete?: Maybe<HomeDocAccessFields_Hero_Image_Delete>;
};

export type HomeDocAccessFields_Hero_Image_Create = {
  __typename?: 'HomeDocAccessFields_hero_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Image_Read = {
  __typename?: 'HomeDocAccessFields_hero_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Image_Update = {
  __typename?: 'HomeDocAccessFields_hero_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_Hero_Image_Delete = {
  __typename?: 'HomeDocAccessFields_hero_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork = {
  __typename?: 'HomeDocAccessFields_howItWork';
  create?: Maybe<HomeDocAccessFields_HowItWork_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Delete>;
  fields?: Maybe<HomeDocAccessFields_HowItWork_Fields>;
};

export type HomeDocAccessFields_HowItWork_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Fields = {
  __typename?: 'HomeDocAccessFields_howItWork_Fields';
  title?: Maybe<HomeDocAccessFields_HowItWork_Title>;
  subtitle?: Maybe<HomeDocAccessFields_HowItWork_Subtitle>;
  cards?: Maybe<HomeDocAccessFields_HowItWork_Cards>;
};

export type HomeDocAccessFields_HowItWork_Title = {
  __typename?: 'HomeDocAccessFields_howItWork_title';
  create?: Maybe<HomeDocAccessFields_HowItWork_Title_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Title_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Title_Delete>;
};

export type HomeDocAccessFields_HowItWork_Title_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Title_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Title_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Title_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Subtitle = {
  __typename?: 'HomeDocAccessFields_howItWork_subtitle';
  create?: Maybe<HomeDocAccessFields_HowItWork_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Subtitle_Delete>;
};

export type HomeDocAccessFields_HowItWork_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards = {
  __typename?: 'HomeDocAccessFields_howItWork_cards';
  create?: Maybe<HomeDocAccessFields_HowItWork_Cards_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Cards_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Cards_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Cards_Delete>;
  fields?: Maybe<HomeDocAccessFields_HowItWork_Cards_Fields>;
};

export type HomeDocAccessFields_HowItWork_Cards_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Fields = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_Fields';
  icon?: Maybe<HomeDocAccessFields_HowItWork_Cards_Icon>;
  title?: Maybe<HomeDocAccessFields_HowItWork_Cards_Title>;
  description?: Maybe<HomeDocAccessFields_HowItWork_Cards_Description>;
  id?: Maybe<HomeDocAccessFields_HowItWork_Cards_Id>;
};

export type HomeDocAccessFields_HowItWork_Cards_Icon = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_icon';
  create?: Maybe<HomeDocAccessFields_HowItWork_Cards_Icon_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Cards_Icon_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Cards_Icon_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Cards_Icon_Delete>;
};

export type HomeDocAccessFields_HowItWork_Cards_Icon_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Icon_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Icon_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Icon_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Title = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_title';
  create?: Maybe<HomeDocAccessFields_HowItWork_Cards_Title_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Cards_Title_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Cards_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Cards_Title_Delete>;
};

export type HomeDocAccessFields_HowItWork_Cards_Title_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Title_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Title_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Title_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Description = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_description';
  create?: Maybe<HomeDocAccessFields_HowItWork_Cards_Description_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Cards_Description_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Cards_Description_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Cards_Description_Delete>;
};

export type HomeDocAccessFields_HowItWork_Cards_Description_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Description_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Description_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Description_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Id = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_id';
  create?: Maybe<HomeDocAccessFields_HowItWork_Cards_Id_Create>;
  read?: Maybe<HomeDocAccessFields_HowItWork_Cards_Id_Read>;
  update?: Maybe<HomeDocAccessFields_HowItWork_Cards_Id_Update>;
  delete?: Maybe<HomeDocAccessFields_HowItWork_Cards_Id_Delete>;
};

export type HomeDocAccessFields_HowItWork_Cards_Id_Create = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Id_Read = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Id_Update = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_HowItWork_Cards_Id_Delete = {
  __typename?: 'HomeDocAccessFields_howItWork_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter = {
  __typename?: 'HomeDocAccessFields_beforeAfter';
  create?: Maybe<HomeDocAccessFields_BeforeAfter_Create>;
  read?: Maybe<HomeDocAccessFields_BeforeAfter_Read>;
  update?: Maybe<HomeDocAccessFields_BeforeAfter_Update>;
  delete?: Maybe<HomeDocAccessFields_BeforeAfter_Delete>;
  fields?: Maybe<HomeDocAccessFields_BeforeAfter_Fields>;
};

export type HomeDocAccessFields_BeforeAfter_Create = {
  __typename?: 'HomeDocAccessFields_beforeAfter_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Read = {
  __typename?: 'HomeDocAccessFields_beforeAfter_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Update = {
  __typename?: 'HomeDocAccessFields_beforeAfter_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Delete = {
  __typename?: 'HomeDocAccessFields_beforeAfter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Fields = {
  __typename?: 'HomeDocAccessFields_beforeAfter_Fields';
  before?: Maybe<HomeDocAccessFields_BeforeAfter_Before>;
  after?: Maybe<HomeDocAccessFields_BeforeAfter_After>;
  id?: Maybe<HomeDocAccessFields_BeforeAfter_Id>;
};

export type HomeDocAccessFields_BeforeAfter_Before = {
  __typename?: 'HomeDocAccessFields_beforeAfter_before';
  create?: Maybe<HomeDocAccessFields_BeforeAfter_Before_Create>;
  read?: Maybe<HomeDocAccessFields_BeforeAfter_Before_Read>;
  update?: Maybe<HomeDocAccessFields_BeforeAfter_Before_Update>;
  delete?: Maybe<HomeDocAccessFields_BeforeAfter_Before_Delete>;
};

export type HomeDocAccessFields_BeforeAfter_Before_Create = {
  __typename?: 'HomeDocAccessFields_beforeAfter_before_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Before_Read = {
  __typename?: 'HomeDocAccessFields_beforeAfter_before_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Before_Update = {
  __typename?: 'HomeDocAccessFields_beforeAfter_before_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Before_Delete = {
  __typename?: 'HomeDocAccessFields_beforeAfter_before_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_After = {
  __typename?: 'HomeDocAccessFields_beforeAfter_after';
  create?: Maybe<HomeDocAccessFields_BeforeAfter_After_Create>;
  read?: Maybe<HomeDocAccessFields_BeforeAfter_After_Read>;
  update?: Maybe<HomeDocAccessFields_BeforeAfter_After_Update>;
  delete?: Maybe<HomeDocAccessFields_BeforeAfter_After_Delete>;
};

export type HomeDocAccessFields_BeforeAfter_After_Create = {
  __typename?: 'HomeDocAccessFields_beforeAfter_after_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_After_Read = {
  __typename?: 'HomeDocAccessFields_beforeAfter_after_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_After_Update = {
  __typename?: 'HomeDocAccessFields_beforeAfter_after_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_After_Delete = {
  __typename?: 'HomeDocAccessFields_beforeAfter_after_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Id = {
  __typename?: 'HomeDocAccessFields_beforeAfter_id';
  create?: Maybe<HomeDocAccessFields_BeforeAfter_Id_Create>;
  read?: Maybe<HomeDocAccessFields_BeforeAfter_Id_Read>;
  update?: Maybe<HomeDocAccessFields_BeforeAfter_Id_Update>;
  delete?: Maybe<HomeDocAccessFields_BeforeAfter_Id_Delete>;
};

export type HomeDocAccessFields_BeforeAfter_Id_Create = {
  __typename?: 'HomeDocAccessFields_beforeAfter_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Id_Read = {
  __typename?: 'HomeDocAccessFields_beforeAfter_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Id_Update = {
  __typename?: 'HomeDocAccessFields_beforeAfter_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_BeforeAfter_Id_Delete = {
  __typename?: 'HomeDocAccessFields_beforeAfter_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison = {
  __typename?: 'HomeDocAccessFields_modelComparison';
  create?: Maybe<HomeDocAccessFields_ModelComparison_Create>;
  read?: Maybe<HomeDocAccessFields_ModelComparison_Read>;
  update?: Maybe<HomeDocAccessFields_ModelComparison_Update>;
  delete?: Maybe<HomeDocAccessFields_ModelComparison_Delete>;
  fields?: Maybe<HomeDocAccessFields_ModelComparison_Fields>;
};

export type HomeDocAccessFields_ModelComparison_Create = {
  __typename?: 'HomeDocAccessFields_modelComparison_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Read = {
  __typename?: 'HomeDocAccessFields_modelComparison_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Update = {
  __typename?: 'HomeDocAccessFields_modelComparison_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Delete = {
  __typename?: 'HomeDocAccessFields_modelComparison_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Fields = {
  __typename?: 'HomeDocAccessFields_modelComparison_Fields';
  title?: Maybe<HomeDocAccessFields_ModelComparison_Title>;
  subtitle?: Maybe<HomeDocAccessFields_ModelComparison_Subtitle>;
  products?: Maybe<HomeDocAccessFields_ModelComparison_Products>;
};

export type HomeDocAccessFields_ModelComparison_Title = {
  __typename?: 'HomeDocAccessFields_modelComparison_title';
  create?: Maybe<HomeDocAccessFields_ModelComparison_Title_Create>;
  read?: Maybe<HomeDocAccessFields_ModelComparison_Title_Read>;
  update?: Maybe<HomeDocAccessFields_ModelComparison_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_ModelComparison_Title_Delete>;
};

export type HomeDocAccessFields_ModelComparison_Title_Create = {
  __typename?: 'HomeDocAccessFields_modelComparison_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Title_Read = {
  __typename?: 'HomeDocAccessFields_modelComparison_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Title_Update = {
  __typename?: 'HomeDocAccessFields_modelComparison_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Title_Delete = {
  __typename?: 'HomeDocAccessFields_modelComparison_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Subtitle = {
  __typename?: 'HomeDocAccessFields_modelComparison_subtitle';
  create?: Maybe<HomeDocAccessFields_ModelComparison_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_ModelComparison_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_ModelComparison_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_ModelComparison_Subtitle_Delete>;
};

export type HomeDocAccessFields_ModelComparison_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_modelComparison_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_modelComparison_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_modelComparison_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_modelComparison_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Products = {
  __typename?: 'HomeDocAccessFields_modelComparison_products';
  create?: Maybe<HomeDocAccessFields_ModelComparison_Products_Create>;
  read?: Maybe<HomeDocAccessFields_ModelComparison_Products_Read>;
  update?: Maybe<HomeDocAccessFields_ModelComparison_Products_Update>;
  delete?: Maybe<HomeDocAccessFields_ModelComparison_Products_Delete>;
};

export type HomeDocAccessFields_ModelComparison_Products_Create = {
  __typename?: 'HomeDocAccessFields_modelComparison_products_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Products_Read = {
  __typename?: 'HomeDocAccessFields_modelComparison_products_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Products_Update = {
  __typename?: 'HomeDocAccessFields_modelComparison_products_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ModelComparison_Products_Delete = {
  __typename?: 'HomeDocAccessFields_modelComparison_products_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection = {
  __typename?: 'HomeDocAccessFields_certificatesSection';
  create?: Maybe<HomeDocAccessFields_CertificatesSection_Create>;
  read?: Maybe<HomeDocAccessFields_CertificatesSection_Read>;
  update?: Maybe<HomeDocAccessFields_CertificatesSection_Update>;
  delete?: Maybe<HomeDocAccessFields_CertificatesSection_Delete>;
  fields?: Maybe<HomeDocAccessFields_CertificatesSection_Fields>;
};

export type HomeDocAccessFields_CertificatesSection_Create = {
  __typename?: 'HomeDocAccessFields_certificatesSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Read = {
  __typename?: 'HomeDocAccessFields_certificatesSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Update = {
  __typename?: 'HomeDocAccessFields_certificatesSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Delete = {
  __typename?: 'HomeDocAccessFields_certificatesSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Fields = {
  __typename?: 'HomeDocAccessFields_certificatesSection_Fields';
  title?: Maybe<HomeDocAccessFields_CertificatesSection_Title>;
  subtitle?: Maybe<HomeDocAccessFields_CertificatesSection_Subtitle>;
  certificates?: Maybe<HomeDocAccessFields_CertificatesSection_Certificates>;
};

export type HomeDocAccessFields_CertificatesSection_Title = {
  __typename?: 'HomeDocAccessFields_certificatesSection_title';
  create?: Maybe<HomeDocAccessFields_CertificatesSection_Title_Create>;
  read?: Maybe<HomeDocAccessFields_CertificatesSection_Title_Read>;
  update?: Maybe<HomeDocAccessFields_CertificatesSection_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_CertificatesSection_Title_Delete>;
};

export type HomeDocAccessFields_CertificatesSection_Title_Create = {
  __typename?: 'HomeDocAccessFields_certificatesSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Title_Read = {
  __typename?: 'HomeDocAccessFields_certificatesSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Title_Update = {
  __typename?: 'HomeDocAccessFields_certificatesSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Title_Delete = {
  __typename?: 'HomeDocAccessFields_certificatesSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Subtitle = {
  __typename?: 'HomeDocAccessFields_certificatesSection_subtitle';
  create?: Maybe<HomeDocAccessFields_CertificatesSection_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_CertificatesSection_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_CertificatesSection_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_CertificatesSection_Subtitle_Delete>;
};

export type HomeDocAccessFields_CertificatesSection_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_certificatesSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_certificatesSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_certificatesSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_certificatesSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Certificates = {
  __typename?: 'HomeDocAccessFields_certificatesSection_certificates';
  create?: Maybe<HomeDocAccessFields_CertificatesSection_Certificates_Create>;
  read?: Maybe<HomeDocAccessFields_CertificatesSection_Certificates_Read>;
  update?: Maybe<HomeDocAccessFields_CertificatesSection_Certificates_Update>;
  delete?: Maybe<HomeDocAccessFields_CertificatesSection_Certificates_Delete>;
};

export type HomeDocAccessFields_CertificatesSection_Certificates_Create = {
  __typename?: 'HomeDocAccessFields_certificatesSection_certificates_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Certificates_Read = {
  __typename?: 'HomeDocAccessFields_certificatesSection_certificates_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Certificates_Update = {
  __typename?: 'HomeDocAccessFields_certificatesSection_certificates_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CertificatesSection_Certificates_Delete = {
  __typename?: 'HomeDocAccessFields_certificatesSection_certificates_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection = {
  __typename?: 'HomeDocAccessFields_trainingSection';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Delete>;
  fields?: Maybe<HomeDocAccessFields_TrainingSection_Fields>;
};

export type HomeDocAccessFields_TrainingSection_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Fields = {
  __typename?: 'HomeDocAccessFields_trainingSection_Fields';
  title?: Maybe<HomeDocAccessFields_TrainingSection_Title>;
  subtitle?: Maybe<HomeDocAccessFields_TrainingSection_Subtitle>;
  video?: Maybe<HomeDocAccessFields_TrainingSection_Video>;
  cards?: Maybe<HomeDocAccessFields_TrainingSection_Cards>;
};

export type HomeDocAccessFields_TrainingSection_Title = {
  __typename?: 'HomeDocAccessFields_trainingSection_title';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Title_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Title_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Title_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Title_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Title_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Title_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Title_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Subtitle = {
  __typename?: 'HomeDocAccessFields_trainingSection_subtitle';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Subtitle_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video = {
  __typename?: 'HomeDocAccessFields_trainingSection_video';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Video_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Video_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Video_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Video_Delete>;
  fields?: Maybe<HomeDocAccessFields_TrainingSection_Video_Fields>;
};

export type HomeDocAccessFields_TrainingSection_Video_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Fields = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_Fields';
  poster?: Maybe<HomeDocAccessFields_TrainingSection_Video_Poster>;
  file?: Maybe<HomeDocAccessFields_TrainingSection_Video_File>;
};

export type HomeDocAccessFields_TrainingSection_Video_Poster = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_poster';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Video_Poster_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Video_Poster_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Video_Poster_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Video_Poster_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Video_Poster_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_poster_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Poster_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_poster_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Poster_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_poster_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_Poster_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_poster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_File = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_file';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Video_File_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Video_File_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Video_File_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Video_File_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Video_File_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_file_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_File_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_file_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_File_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_file_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Video_File_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_video_file_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Delete>;
  fields?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Fields>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Fields = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_Fields';
  icon?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Icon>;
  title?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Title>;
  description?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Description>;
  id?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Id>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Icon = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_icon';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Icon_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Icon_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Icon_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Icon_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Icon_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Icon_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Icon_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Icon_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Title = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_title';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Title_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Title_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Title_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Title_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Title_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Title_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Title_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Description = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_description';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Description_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Description_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Description_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Description_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Description_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Description_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Description_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Description_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Id = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_id';
  create?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Id_Create>;
  read?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Id_Read>;
  update?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Id_Update>;
  delete?: Maybe<HomeDocAccessFields_TrainingSection_Cards_Id_Delete>;
};

export type HomeDocAccessFields_TrainingSection_Cards_Id_Create = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Id_Read = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Id_Update = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_TrainingSection_Cards_Id_Delete = {
  __typename?: 'HomeDocAccessFields_trainingSection_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection = {
  __typename?: 'HomeDocAccessFields_reviewsSection';
  create?: Maybe<HomeDocAccessFields_ReviewsSection_Create>;
  read?: Maybe<HomeDocAccessFields_ReviewsSection_Read>;
  update?: Maybe<HomeDocAccessFields_ReviewsSection_Update>;
  delete?: Maybe<HomeDocAccessFields_ReviewsSection_Delete>;
  fields?: Maybe<HomeDocAccessFields_ReviewsSection_Fields>;
};

export type HomeDocAccessFields_ReviewsSection_Create = {
  __typename?: 'HomeDocAccessFields_reviewsSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Read = {
  __typename?: 'HomeDocAccessFields_reviewsSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Update = {
  __typename?: 'HomeDocAccessFields_reviewsSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Delete = {
  __typename?: 'HomeDocAccessFields_reviewsSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Fields = {
  __typename?: 'HomeDocAccessFields_reviewsSection_Fields';
  title?: Maybe<HomeDocAccessFields_ReviewsSection_Title>;
  subtitle?: Maybe<HomeDocAccessFields_ReviewsSection_Subtitle>;
  reviews?: Maybe<HomeDocAccessFields_ReviewsSection_Reviews>;
};

export type HomeDocAccessFields_ReviewsSection_Title = {
  __typename?: 'HomeDocAccessFields_reviewsSection_title';
  create?: Maybe<HomeDocAccessFields_ReviewsSection_Title_Create>;
  read?: Maybe<HomeDocAccessFields_ReviewsSection_Title_Read>;
  update?: Maybe<HomeDocAccessFields_ReviewsSection_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_ReviewsSection_Title_Delete>;
};

export type HomeDocAccessFields_ReviewsSection_Title_Create = {
  __typename?: 'HomeDocAccessFields_reviewsSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Title_Read = {
  __typename?: 'HomeDocAccessFields_reviewsSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Title_Update = {
  __typename?: 'HomeDocAccessFields_reviewsSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Title_Delete = {
  __typename?: 'HomeDocAccessFields_reviewsSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Subtitle = {
  __typename?: 'HomeDocAccessFields_reviewsSection_subtitle';
  create?: Maybe<HomeDocAccessFields_ReviewsSection_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_ReviewsSection_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_ReviewsSection_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_ReviewsSection_Subtitle_Delete>;
};

export type HomeDocAccessFields_ReviewsSection_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_reviewsSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_reviewsSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_reviewsSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_reviewsSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Reviews = {
  __typename?: 'HomeDocAccessFields_reviewsSection_reviews';
  create?: Maybe<HomeDocAccessFields_ReviewsSection_Reviews_Create>;
  read?: Maybe<HomeDocAccessFields_ReviewsSection_Reviews_Read>;
  update?: Maybe<HomeDocAccessFields_ReviewsSection_Reviews_Update>;
  delete?: Maybe<HomeDocAccessFields_ReviewsSection_Reviews_Delete>;
};

export type HomeDocAccessFields_ReviewsSection_Reviews_Create = {
  __typename?: 'HomeDocAccessFields_reviewsSection_reviews_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Reviews_Read = {
  __typename?: 'HomeDocAccessFields_reviewsSection_reviews_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Reviews_Update = {
  __typename?: 'HomeDocAccessFields_reviewsSection_reviews_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_ReviewsSection_Reviews_Delete = {
  __typename?: 'HomeDocAccessFields_reviewsSection_reviews_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection = {
  __typename?: 'HomeDocAccessFields_faqSection';
  create?: Maybe<HomeDocAccessFields_FaqSection_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Delete>;
  fields?: Maybe<HomeDocAccessFields_FaqSection_Fields>;
};

export type HomeDocAccessFields_FaqSection_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Fields = {
  __typename?: 'HomeDocAccessFields_faqSection_Fields';
  title?: Maybe<HomeDocAccessFields_FaqSection_Title>;
  subtitle?: Maybe<HomeDocAccessFields_FaqSection_Subtitle>;
  items?: Maybe<HomeDocAccessFields_FaqSection_Items>;
};

export type HomeDocAccessFields_FaqSection_Title = {
  __typename?: 'HomeDocAccessFields_faqSection_title';
  create?: Maybe<HomeDocAccessFields_FaqSection_Title_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Title_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Title_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Title_Delete>;
};

export type HomeDocAccessFields_FaqSection_Title_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Title_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Title_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Title_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Subtitle = {
  __typename?: 'HomeDocAccessFields_faqSection_subtitle';
  create?: Maybe<HomeDocAccessFields_FaqSection_Subtitle_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Subtitle_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Subtitle_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Subtitle_Delete>;
};

export type HomeDocAccessFields_FaqSection_Subtitle_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Subtitle_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Subtitle_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Subtitle_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items = {
  __typename?: 'HomeDocAccessFields_faqSection_items';
  create?: Maybe<HomeDocAccessFields_FaqSection_Items_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Items_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Items_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Items_Delete>;
  fields?: Maybe<HomeDocAccessFields_FaqSection_Items_Fields>;
};

export type HomeDocAccessFields_FaqSection_Items_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Fields = {
  __typename?: 'HomeDocAccessFields_faqSection_items_Fields';
  question?: Maybe<HomeDocAccessFields_FaqSection_Items_Question>;
  answer?: Maybe<HomeDocAccessFields_FaqSection_Items_Answer>;
  id?: Maybe<HomeDocAccessFields_FaqSection_Items_Id>;
};

export type HomeDocAccessFields_FaqSection_Items_Question = {
  __typename?: 'HomeDocAccessFields_faqSection_items_question';
  create?: Maybe<HomeDocAccessFields_FaqSection_Items_Question_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Items_Question_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Items_Question_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Items_Question_Delete>;
};

export type HomeDocAccessFields_FaqSection_Items_Question_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_items_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Question_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_items_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Question_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_items_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Question_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_items_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Answer = {
  __typename?: 'HomeDocAccessFields_faqSection_items_answer';
  create?: Maybe<HomeDocAccessFields_FaqSection_Items_Answer_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Items_Answer_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Items_Answer_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Items_Answer_Delete>;
};

export type HomeDocAccessFields_FaqSection_Items_Answer_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_items_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Answer_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_items_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Answer_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_items_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Answer_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_items_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Id = {
  __typename?: 'HomeDocAccessFields_faqSection_items_id';
  create?: Maybe<HomeDocAccessFields_FaqSection_Items_Id_Create>;
  read?: Maybe<HomeDocAccessFields_FaqSection_Items_Id_Read>;
  update?: Maybe<HomeDocAccessFields_FaqSection_Items_Id_Update>;
  delete?: Maybe<HomeDocAccessFields_FaqSection_Items_Id_Delete>;
};

export type HomeDocAccessFields_FaqSection_Items_Id_Create = {
  __typename?: 'HomeDocAccessFields_faqSection_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Id_Read = {
  __typename?: 'HomeDocAccessFields_faqSection_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Id_Update = {
  __typename?: 'HomeDocAccessFields_faqSection_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_FaqSection_Items_Id_Delete = {
  __typename?: 'HomeDocAccessFields_faqSection_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt = {
  __typename?: 'HomeDocAccessFields_updatedAt';
  create?: Maybe<HomeDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<HomeDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HomeDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<HomeDocAccessFields_UpdatedAt_Delete>;
};

export type HomeDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HomeDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HomeDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HomeDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt = {
  __typename?: 'HomeDocAccessFields_createdAt';
  create?: Maybe<HomeDocAccessFields_CreatedAt_Create>;
  read?: Maybe<HomeDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HomeDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<HomeDocAccessFields_CreatedAt_Delete>;
};

export type HomeDocAccessFields_CreatedAt_Create = {
  __typename?: 'HomeDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Read = {
  __typename?: 'HomeDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Update = {
  __typename?: 'HomeDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HomeDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeReadDocAccess = {
  __typename?: 'HomeReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateDocAccess = {
  __typename?: 'HomeUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Training = {
  __typename?: 'Training';
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Training_Formats>;
  videoInstructions?: Maybe<Training_VideoInstructions>;
  faq?: Maybe<Training_Faq>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Training_Formats = {
  __typename?: 'Training_Formats';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  cards?: Maybe<Array<Training_Formats_Cards>>;
};

export type Training_Formats_Cards = {
  __typename?: 'Training_Formats_Cards';
  icon?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};


export type Training_Formats_CardsIconArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type Training_VideoInstructions = {
  __typename?: 'Training_VideoInstructions';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
};

export type Training_Faq = {
  __typename?: 'Training_Faq';
  title?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Training_Faq_Items>>;
};

export type Training_Faq_Items = {
  __typename?: 'Training_Faq_Items';
  question?: Maybe<Scalars['String']['output']>;
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type TrainingDocAccess = {
  __typename?: 'trainingDocAccess';
  fields?: Maybe<TrainingDocAccessFields>;
  read?: Maybe<TrainingReadDocAccess>;
  update?: Maybe<TrainingUpdateDocAccess>;
};

export type TrainingDocAccessFields = {
  __typename?: 'TrainingDocAccessFields';
  title?: Maybe<TrainingDocAccessFields_Title>;
  description?: Maybe<TrainingDocAccessFields_Description>;
  formats?: Maybe<TrainingDocAccessFields_Formats>;
  videoInstructions?: Maybe<TrainingDocAccessFields_VideoInstructions>;
  faq?: Maybe<TrainingDocAccessFields_Faq>;
  updatedAt?: Maybe<TrainingDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<TrainingDocAccessFields_CreatedAt>;
};

export type TrainingDocAccessFields_Title = {
  __typename?: 'TrainingDocAccessFields_title';
  create?: Maybe<TrainingDocAccessFields_Title_Create>;
  read?: Maybe<TrainingDocAccessFields_Title_Read>;
  update?: Maybe<TrainingDocAccessFields_Title_Update>;
  delete?: Maybe<TrainingDocAccessFields_Title_Delete>;
};

export type TrainingDocAccessFields_Title_Create = {
  __typename?: 'TrainingDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Title_Read = {
  __typename?: 'TrainingDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Title_Update = {
  __typename?: 'TrainingDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Title_Delete = {
  __typename?: 'TrainingDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Description = {
  __typename?: 'TrainingDocAccessFields_description';
  create?: Maybe<TrainingDocAccessFields_Description_Create>;
  read?: Maybe<TrainingDocAccessFields_Description_Read>;
  update?: Maybe<TrainingDocAccessFields_Description_Update>;
  delete?: Maybe<TrainingDocAccessFields_Description_Delete>;
};

export type TrainingDocAccessFields_Description_Create = {
  __typename?: 'TrainingDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Description_Read = {
  __typename?: 'TrainingDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Description_Update = {
  __typename?: 'TrainingDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Description_Delete = {
  __typename?: 'TrainingDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats = {
  __typename?: 'TrainingDocAccessFields_formats';
  create?: Maybe<TrainingDocAccessFields_Formats_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Delete>;
  fields?: Maybe<TrainingDocAccessFields_Formats_Fields>;
};

export type TrainingDocAccessFields_Formats_Create = {
  __typename?: 'TrainingDocAccessFields_formats_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Read = {
  __typename?: 'TrainingDocAccessFields_formats_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Update = {
  __typename?: 'TrainingDocAccessFields_formats_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Fields = {
  __typename?: 'TrainingDocAccessFields_formats_Fields';
  title?: Maybe<TrainingDocAccessFields_Formats_Title>;
  subtitle?: Maybe<TrainingDocAccessFields_Formats_Subtitle>;
  cards?: Maybe<TrainingDocAccessFields_Formats_Cards>;
};

export type TrainingDocAccessFields_Formats_Title = {
  __typename?: 'TrainingDocAccessFields_formats_title';
  create?: Maybe<TrainingDocAccessFields_Formats_Title_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Title_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Title_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Title_Delete>;
};

export type TrainingDocAccessFields_Formats_Title_Create = {
  __typename?: 'TrainingDocAccessFields_formats_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Title_Read = {
  __typename?: 'TrainingDocAccessFields_formats_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Title_Update = {
  __typename?: 'TrainingDocAccessFields_formats_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Title_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Subtitle = {
  __typename?: 'TrainingDocAccessFields_formats_subtitle';
  create?: Maybe<TrainingDocAccessFields_Formats_Subtitle_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Subtitle_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Subtitle_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Subtitle_Delete>;
};

export type TrainingDocAccessFields_Formats_Subtitle_Create = {
  __typename?: 'TrainingDocAccessFields_formats_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Subtitle_Read = {
  __typename?: 'TrainingDocAccessFields_formats_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Subtitle_Update = {
  __typename?: 'TrainingDocAccessFields_formats_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Subtitle_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards = {
  __typename?: 'TrainingDocAccessFields_formats_cards';
  create?: Maybe<TrainingDocAccessFields_Formats_Cards_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Cards_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Cards_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Cards_Delete>;
  fields?: Maybe<TrainingDocAccessFields_Formats_Cards_Fields>;
};

export type TrainingDocAccessFields_Formats_Cards_Create = {
  __typename?: 'TrainingDocAccessFields_formats_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Read = {
  __typename?: 'TrainingDocAccessFields_formats_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Update = {
  __typename?: 'TrainingDocAccessFields_formats_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Fields = {
  __typename?: 'TrainingDocAccessFields_formats_cards_Fields';
  icon?: Maybe<TrainingDocAccessFields_Formats_Cards_Icon>;
  title?: Maybe<TrainingDocAccessFields_Formats_Cards_Title>;
  description?: Maybe<TrainingDocAccessFields_Formats_Cards_Description>;
  id?: Maybe<TrainingDocAccessFields_Formats_Cards_Id>;
};

export type TrainingDocAccessFields_Formats_Cards_Icon = {
  __typename?: 'TrainingDocAccessFields_formats_cards_icon';
  create?: Maybe<TrainingDocAccessFields_Formats_Cards_Icon_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Cards_Icon_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Cards_Icon_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Cards_Icon_Delete>;
};

export type TrainingDocAccessFields_Formats_Cards_Icon_Create = {
  __typename?: 'TrainingDocAccessFields_formats_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Icon_Read = {
  __typename?: 'TrainingDocAccessFields_formats_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Icon_Update = {
  __typename?: 'TrainingDocAccessFields_formats_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Icon_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Title = {
  __typename?: 'TrainingDocAccessFields_formats_cards_title';
  create?: Maybe<TrainingDocAccessFields_Formats_Cards_Title_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Cards_Title_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Cards_Title_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Cards_Title_Delete>;
};

export type TrainingDocAccessFields_Formats_Cards_Title_Create = {
  __typename?: 'TrainingDocAccessFields_formats_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Title_Read = {
  __typename?: 'TrainingDocAccessFields_formats_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Title_Update = {
  __typename?: 'TrainingDocAccessFields_formats_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Title_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Description = {
  __typename?: 'TrainingDocAccessFields_formats_cards_description';
  create?: Maybe<TrainingDocAccessFields_Formats_Cards_Description_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Cards_Description_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Cards_Description_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Cards_Description_Delete>;
};

export type TrainingDocAccessFields_Formats_Cards_Description_Create = {
  __typename?: 'TrainingDocAccessFields_formats_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Description_Read = {
  __typename?: 'TrainingDocAccessFields_formats_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Description_Update = {
  __typename?: 'TrainingDocAccessFields_formats_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Description_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Id = {
  __typename?: 'TrainingDocAccessFields_formats_cards_id';
  create?: Maybe<TrainingDocAccessFields_Formats_Cards_Id_Create>;
  read?: Maybe<TrainingDocAccessFields_Formats_Cards_Id_Read>;
  update?: Maybe<TrainingDocAccessFields_Formats_Cards_Id_Update>;
  delete?: Maybe<TrainingDocAccessFields_Formats_Cards_Id_Delete>;
};

export type TrainingDocAccessFields_Formats_Cards_Id_Create = {
  __typename?: 'TrainingDocAccessFields_formats_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Id_Read = {
  __typename?: 'TrainingDocAccessFields_formats_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Id_Update = {
  __typename?: 'TrainingDocAccessFields_formats_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Formats_Cards_Id_Delete = {
  __typename?: 'TrainingDocAccessFields_formats_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions = {
  __typename?: 'TrainingDocAccessFields_videoInstructions';
  create?: Maybe<TrainingDocAccessFields_VideoInstructions_Create>;
  read?: Maybe<TrainingDocAccessFields_VideoInstructions_Read>;
  update?: Maybe<TrainingDocAccessFields_VideoInstructions_Update>;
  delete?: Maybe<TrainingDocAccessFields_VideoInstructions_Delete>;
  fields?: Maybe<TrainingDocAccessFields_VideoInstructions_Fields>;
};

export type TrainingDocAccessFields_VideoInstructions_Create = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Read = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Update = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Delete = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Fields = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_Fields';
  title?: Maybe<TrainingDocAccessFields_VideoInstructions_Title>;
  subtitle?: Maybe<TrainingDocAccessFields_VideoInstructions_Subtitle>;
};

export type TrainingDocAccessFields_VideoInstructions_Title = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_title';
  create?: Maybe<TrainingDocAccessFields_VideoInstructions_Title_Create>;
  read?: Maybe<TrainingDocAccessFields_VideoInstructions_Title_Read>;
  update?: Maybe<TrainingDocAccessFields_VideoInstructions_Title_Update>;
  delete?: Maybe<TrainingDocAccessFields_VideoInstructions_Title_Delete>;
};

export type TrainingDocAccessFields_VideoInstructions_Title_Create = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Title_Read = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Title_Update = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Title_Delete = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Subtitle = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_subtitle';
  create?: Maybe<TrainingDocAccessFields_VideoInstructions_Subtitle_Create>;
  read?: Maybe<TrainingDocAccessFields_VideoInstructions_Subtitle_Read>;
  update?: Maybe<TrainingDocAccessFields_VideoInstructions_Subtitle_Update>;
  delete?: Maybe<TrainingDocAccessFields_VideoInstructions_Subtitle_Delete>;
};

export type TrainingDocAccessFields_VideoInstructions_Subtitle_Create = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Subtitle_Read = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Subtitle_Update = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_VideoInstructions_Subtitle_Delete = {
  __typename?: 'TrainingDocAccessFields_videoInstructions_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq = {
  __typename?: 'TrainingDocAccessFields_faq';
  create?: Maybe<TrainingDocAccessFields_Faq_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Delete>;
  fields?: Maybe<TrainingDocAccessFields_Faq_Fields>;
};

export type TrainingDocAccessFields_Faq_Create = {
  __typename?: 'TrainingDocAccessFields_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Read = {
  __typename?: 'TrainingDocAccessFields_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Update = {
  __typename?: 'TrainingDocAccessFields_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Fields = {
  __typename?: 'TrainingDocAccessFields_faq_Fields';
  title?: Maybe<TrainingDocAccessFields_Faq_Title>;
  subtitle?: Maybe<TrainingDocAccessFields_Faq_Subtitle>;
  items?: Maybe<TrainingDocAccessFields_Faq_Items>;
};

export type TrainingDocAccessFields_Faq_Title = {
  __typename?: 'TrainingDocAccessFields_faq_title';
  create?: Maybe<TrainingDocAccessFields_Faq_Title_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Title_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Title_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Title_Delete>;
};

export type TrainingDocAccessFields_Faq_Title_Create = {
  __typename?: 'TrainingDocAccessFields_faq_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Title_Read = {
  __typename?: 'TrainingDocAccessFields_faq_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Title_Update = {
  __typename?: 'TrainingDocAccessFields_faq_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Title_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Subtitle = {
  __typename?: 'TrainingDocAccessFields_faq_subtitle';
  create?: Maybe<TrainingDocAccessFields_Faq_Subtitle_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Subtitle_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Subtitle_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Subtitle_Delete>;
};

export type TrainingDocAccessFields_Faq_Subtitle_Create = {
  __typename?: 'TrainingDocAccessFields_faq_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Subtitle_Read = {
  __typename?: 'TrainingDocAccessFields_faq_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Subtitle_Update = {
  __typename?: 'TrainingDocAccessFields_faq_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Subtitle_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items = {
  __typename?: 'TrainingDocAccessFields_faq_items';
  create?: Maybe<TrainingDocAccessFields_Faq_Items_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Items_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Items_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Items_Delete>;
  fields?: Maybe<TrainingDocAccessFields_Faq_Items_Fields>;
};

export type TrainingDocAccessFields_Faq_Items_Create = {
  __typename?: 'TrainingDocAccessFields_faq_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Read = {
  __typename?: 'TrainingDocAccessFields_faq_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Update = {
  __typename?: 'TrainingDocAccessFields_faq_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Fields = {
  __typename?: 'TrainingDocAccessFields_faq_items_Fields';
  question?: Maybe<TrainingDocAccessFields_Faq_Items_Question>;
  answer?: Maybe<TrainingDocAccessFields_Faq_Items_Answer>;
  id?: Maybe<TrainingDocAccessFields_Faq_Items_Id>;
};

export type TrainingDocAccessFields_Faq_Items_Question = {
  __typename?: 'TrainingDocAccessFields_faq_items_question';
  create?: Maybe<TrainingDocAccessFields_Faq_Items_Question_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Items_Question_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Items_Question_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Items_Question_Delete>;
};

export type TrainingDocAccessFields_Faq_Items_Question_Create = {
  __typename?: 'TrainingDocAccessFields_faq_items_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Question_Read = {
  __typename?: 'TrainingDocAccessFields_faq_items_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Question_Update = {
  __typename?: 'TrainingDocAccessFields_faq_items_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Question_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_items_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Answer = {
  __typename?: 'TrainingDocAccessFields_faq_items_answer';
  create?: Maybe<TrainingDocAccessFields_Faq_Items_Answer_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Items_Answer_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Items_Answer_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Items_Answer_Delete>;
};

export type TrainingDocAccessFields_Faq_Items_Answer_Create = {
  __typename?: 'TrainingDocAccessFields_faq_items_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Answer_Read = {
  __typename?: 'TrainingDocAccessFields_faq_items_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Answer_Update = {
  __typename?: 'TrainingDocAccessFields_faq_items_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Answer_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_items_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Id = {
  __typename?: 'TrainingDocAccessFields_faq_items_id';
  create?: Maybe<TrainingDocAccessFields_Faq_Items_Id_Create>;
  read?: Maybe<TrainingDocAccessFields_Faq_Items_Id_Read>;
  update?: Maybe<TrainingDocAccessFields_Faq_Items_Id_Update>;
  delete?: Maybe<TrainingDocAccessFields_Faq_Items_Id_Delete>;
};

export type TrainingDocAccessFields_Faq_Items_Id_Create = {
  __typename?: 'TrainingDocAccessFields_faq_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Id_Read = {
  __typename?: 'TrainingDocAccessFields_faq_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Id_Update = {
  __typename?: 'TrainingDocAccessFields_faq_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_Faq_Items_Id_Delete = {
  __typename?: 'TrainingDocAccessFields_faq_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_UpdatedAt = {
  __typename?: 'TrainingDocAccessFields_updatedAt';
  create?: Maybe<TrainingDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<TrainingDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TrainingDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingDocAccessFields_UpdatedAt_Delete>;
};

export type TrainingDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TrainingDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TrainingDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TrainingDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TrainingDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_CreatedAt = {
  __typename?: 'TrainingDocAccessFields_createdAt';
  create?: Maybe<TrainingDocAccessFields_CreatedAt_Create>;
  read?: Maybe<TrainingDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TrainingDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<TrainingDocAccessFields_CreatedAt_Delete>;
};

export type TrainingDocAccessFields_CreatedAt_Create = {
  __typename?: 'TrainingDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_CreatedAt_Read = {
  __typename?: 'TrainingDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_CreatedAt_Update = {
  __typename?: 'TrainingDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TrainingDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingReadDocAccess = {
  __typename?: 'TrainingReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingUpdateDocAccess = {
  __typename?: 'TrainingUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Contact = {
  __typename?: 'Contact';
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  address?: Maybe<Scalars['String']['output']>;
  form?: Maybe<Contact_Form>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Contact_Form = {
  __typename?: 'Contact_Form';
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  socialNetworks?: Maybe<Array<Contact_Form_SocialNetworks>>;
};

export type Contact_Form_SocialNetworks = {
  __typename?: 'Contact_Form_SocialNetworks';
  label?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Media>;
  url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};


export type Contact_Form_SocialNetworksIconArgs = {
  locale?: InputMaybe<LocaleInputType>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
};

export type ContactsDocAccess = {
  __typename?: 'contactsDocAccess';
  fields?: Maybe<ContactsDocAccessFields>;
  read?: Maybe<ContactsReadDocAccess>;
  update?: Maybe<ContactsUpdateDocAccess>;
};

export type ContactsDocAccessFields = {
  __typename?: 'ContactsDocAccessFields';
  title?: Maybe<ContactsDocAccessFields_Title>;
  description?: Maybe<ContactsDocAccessFields_Description>;
  phone?: Maybe<ContactsDocAccessFields_Phone>;
  email?: Maybe<ContactsDocAccessFields_Email>;
  address?: Maybe<ContactsDocAccessFields_Address>;
  form?: Maybe<ContactsDocAccessFields_Form>;
  updatedAt?: Maybe<ContactsDocAccessFields_UpdatedAt>;
  createdAt?: Maybe<ContactsDocAccessFields_CreatedAt>;
};

export type ContactsDocAccessFields_Title = {
  __typename?: 'ContactsDocAccessFields_title';
  create?: Maybe<ContactsDocAccessFields_Title_Create>;
  read?: Maybe<ContactsDocAccessFields_Title_Read>;
  update?: Maybe<ContactsDocAccessFields_Title_Update>;
  delete?: Maybe<ContactsDocAccessFields_Title_Delete>;
};

export type ContactsDocAccessFields_Title_Create = {
  __typename?: 'ContactsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Title_Read = {
  __typename?: 'ContactsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Title_Update = {
  __typename?: 'ContactsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Title_Delete = {
  __typename?: 'ContactsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Description = {
  __typename?: 'ContactsDocAccessFields_description';
  create?: Maybe<ContactsDocAccessFields_Description_Create>;
  read?: Maybe<ContactsDocAccessFields_Description_Read>;
  update?: Maybe<ContactsDocAccessFields_Description_Update>;
  delete?: Maybe<ContactsDocAccessFields_Description_Delete>;
};

export type ContactsDocAccessFields_Description_Create = {
  __typename?: 'ContactsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Description_Read = {
  __typename?: 'ContactsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Description_Update = {
  __typename?: 'ContactsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Description_Delete = {
  __typename?: 'ContactsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone = {
  __typename?: 'ContactsDocAccessFields_phone';
  create?: Maybe<ContactsDocAccessFields_Phone_Create>;
  read?: Maybe<ContactsDocAccessFields_Phone_Read>;
  update?: Maybe<ContactsDocAccessFields_Phone_Update>;
  delete?: Maybe<ContactsDocAccessFields_Phone_Delete>;
};

export type ContactsDocAccessFields_Phone_Create = {
  __typename?: 'ContactsDocAccessFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Read = {
  __typename?: 'ContactsDocAccessFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Update = {
  __typename?: 'ContactsDocAccessFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Phone_Delete = {
  __typename?: 'ContactsDocAccessFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email = {
  __typename?: 'ContactsDocAccessFields_email';
  create?: Maybe<ContactsDocAccessFields_Email_Create>;
  read?: Maybe<ContactsDocAccessFields_Email_Read>;
  update?: Maybe<ContactsDocAccessFields_Email_Update>;
  delete?: Maybe<ContactsDocAccessFields_Email_Delete>;
};

export type ContactsDocAccessFields_Email_Create = {
  __typename?: 'ContactsDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Read = {
  __typename?: 'ContactsDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Update = {
  __typename?: 'ContactsDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Email_Delete = {
  __typename?: 'ContactsDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address = {
  __typename?: 'ContactsDocAccessFields_address';
  create?: Maybe<ContactsDocAccessFields_Address_Create>;
  read?: Maybe<ContactsDocAccessFields_Address_Read>;
  update?: Maybe<ContactsDocAccessFields_Address_Update>;
  delete?: Maybe<ContactsDocAccessFields_Address_Delete>;
};

export type ContactsDocAccessFields_Address_Create = {
  __typename?: 'ContactsDocAccessFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Read = {
  __typename?: 'ContactsDocAccessFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Update = {
  __typename?: 'ContactsDocAccessFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Address_Delete = {
  __typename?: 'ContactsDocAccessFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form = {
  __typename?: 'ContactsDocAccessFields_form';
  create?: Maybe<ContactsDocAccessFields_Form_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_Delete>;
  fields?: Maybe<ContactsDocAccessFields_Form_Fields>;
};

export type ContactsDocAccessFields_Form_Create = {
  __typename?: 'ContactsDocAccessFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Read = {
  __typename?: 'ContactsDocAccessFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Update = {
  __typename?: 'ContactsDocAccessFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Delete = {
  __typename?: 'ContactsDocAccessFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Fields = {
  __typename?: 'ContactsDocAccessFields_form_Fields';
  title?: Maybe<ContactsDocAccessFields_Form_Title>;
  description?: Maybe<ContactsDocAccessFields_Form_Description>;
  socialNetworks?: Maybe<ContactsDocAccessFields_Form_SocialNetworks>;
};

export type ContactsDocAccessFields_Form_Title = {
  __typename?: 'ContactsDocAccessFields_form_title';
  create?: Maybe<ContactsDocAccessFields_Form_Title_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_Title_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_Title_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_Title_Delete>;
};

export type ContactsDocAccessFields_Form_Title_Create = {
  __typename?: 'ContactsDocAccessFields_form_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Title_Read = {
  __typename?: 'ContactsDocAccessFields_form_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Title_Update = {
  __typename?: 'ContactsDocAccessFields_form_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Title_Delete = {
  __typename?: 'ContactsDocAccessFields_form_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Description = {
  __typename?: 'ContactsDocAccessFields_form_description';
  create?: Maybe<ContactsDocAccessFields_Form_Description_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_Description_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_Description_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_Description_Delete>;
};

export type ContactsDocAccessFields_Form_Description_Create = {
  __typename?: 'ContactsDocAccessFields_form_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Description_Read = {
  __typename?: 'ContactsDocAccessFields_form_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Description_Update = {
  __typename?: 'ContactsDocAccessFields_form_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_Description_Delete = {
  __typename?: 'ContactsDocAccessFields_form_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks';
  create?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Delete>;
  fields?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Fields>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Create = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Read = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Update = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Delete = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Fields = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_Fields';
  label?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Label>;
  icon?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Icon>;
  url?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Url>;
  id?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Id>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Label = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_label';
  create?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Label_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Label_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Label_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Label_Delete>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Label_Create = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Label_Read = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Label_Update = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Label_Delete = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Icon = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_icon';
  create?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Icon_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Icon_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Icon_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Icon_Delete>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Icon_Create = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Icon_Read = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Icon_Update = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Icon_Delete = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Url = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_url';
  create?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Url_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Url_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Url_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Url_Delete>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Url_Create = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Url_Read = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Url_Update = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Url_Delete = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Id = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_id';
  create?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Id_Create>;
  read?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Id_Read>;
  update?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Id_Update>;
  delete?: Maybe<ContactsDocAccessFields_Form_SocialNetworks_Id_Delete>;
};

export type ContactsDocAccessFields_Form_SocialNetworks_Id_Create = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Id_Read = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Id_Update = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_Form_SocialNetworks_Id_Delete = {
  __typename?: 'ContactsDocAccessFields_form_socialNetworks_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt = {
  __typename?: 'ContactsDocAccessFields_updatedAt';
  create?: Maybe<ContactsDocAccessFields_UpdatedAt_Create>;
  read?: Maybe<ContactsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ContactsDocAccessFields_UpdatedAt_Update>;
  delete?: Maybe<ContactsDocAccessFields_UpdatedAt_Delete>;
};

export type ContactsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ContactsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt = {
  __typename?: 'ContactsDocAccessFields_createdAt';
  create?: Maybe<ContactsDocAccessFields_CreatedAt_Create>;
  read?: Maybe<ContactsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ContactsDocAccessFields_CreatedAt_Update>;
  delete?: Maybe<ContactsDocAccessFields_CreatedAt_Delete>;
};

export type ContactsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ContactsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ContactsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ContactsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ContactsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsReadDocAccess = {
  __typename?: 'ContactsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsUpdateDocAccess = {
  __typename?: 'ContactsUpdateDocAccess';
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
  articles?: Maybe<ArticlesAccess>;
  orders?: Maybe<OrdersAccess>;
  legal_pages?: Maybe<Legal_PagesAccess>;
  locations?: Maybe<LocationsAccess>;
  training_categories?: Maybe<Training_CategoriesAccess>;
  training_videos?: Maybe<Training_VideosAccess>;
  applications?: Maybe<ApplicationsAccess>;
  dealer_applications?: Maybe<Dealer_ApplicationsAccess>;
  currencies?: Maybe<CurrenciesAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  home?: Maybe<HomeAccess>;
  training?: Maybe<TrainingAccess>;
  contacts?: Maybe<ContactsAccess>;
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
  dealerDiscountPercent?: Maybe<UsersFields_DealerDiscountPercent>;
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

export type UsersFields_DealerDiscountPercent = {
  __typename?: 'UsersFields_dealerDiscountPercent';
  create?: Maybe<UsersFields_DealerDiscountPercent_Create>;
  read?: Maybe<UsersFields_DealerDiscountPercent_Read>;
  update?: Maybe<UsersFields_DealerDiscountPercent_Update>;
  delete?: Maybe<UsersFields_DealerDiscountPercent_Delete>;
};

export type UsersFields_DealerDiscountPercent_Create = {
  __typename?: 'UsersFields_dealerDiscountPercent_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_DealerDiscountPercent_Read = {
  __typename?: 'UsersFields_dealerDiscountPercent_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_DealerDiscountPercent_Update = {
  __typename?: 'UsersFields_dealerDiscountPercent_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_DealerDiscountPercent_Delete = {
  __typename?: 'UsersFields_dealerDiscountPercent_Delete';
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
  oldprice?: Maybe<ProductsFields_Oldprice>;
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

export type ProductsFields_Oldprice = {
  __typename?: 'ProductsFields_oldprice';
  create?: Maybe<ProductsFields_Oldprice_Create>;
  read?: Maybe<ProductsFields_Oldprice_Read>;
  update?: Maybe<ProductsFields_Oldprice_Update>;
  delete?: Maybe<ProductsFields_Oldprice_Delete>;
};

export type ProductsFields_Oldprice_Create = {
  __typename?: 'ProductsFields_oldprice_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Oldprice_Read = {
  __typename?: 'ProductsFields_oldprice_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Oldprice_Update = {
  __typename?: 'ProductsFields_oldprice_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Oldprice_Delete = {
  __typename?: 'ProductsFields_oldprice_Delete';
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
  label?: Maybe<ProductsFields_Characteristics_Items_Label>;
  value?: Maybe<ProductsFields_Characteristics_Items_Value>;
  id?: Maybe<ProductsFields_Characteristics_Items_Id>;
};

export type ProductsFields_Characteristics_Items_Label = {
  __typename?: 'ProductsFields_characteristics_items_label';
  create?: Maybe<ProductsFields_Characteristics_Items_Label_Create>;
  read?: Maybe<ProductsFields_Characteristics_Items_Label_Read>;
  update?: Maybe<ProductsFields_Characteristics_Items_Label_Update>;
  delete?: Maybe<ProductsFields_Characteristics_Items_Label_Delete>;
};

export type ProductsFields_Characteristics_Items_Label_Create = {
  __typename?: 'ProductsFields_characteristics_items_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Label_Read = {
  __typename?: 'ProductsFields_characteristics_items_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Label_Update = {
  __typename?: 'ProductsFields_characteristics_items_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Label_Delete = {
  __typename?: 'ProductsFields_characteristics_items_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Value = {
  __typename?: 'ProductsFields_characteristics_items_value';
  create?: Maybe<ProductsFields_Characteristics_Items_Value_Create>;
  read?: Maybe<ProductsFields_Characteristics_Items_Value_Read>;
  update?: Maybe<ProductsFields_Characteristics_Items_Value_Update>;
  delete?: Maybe<ProductsFields_Characteristics_Items_Value_Delete>;
};

export type ProductsFields_Characteristics_Items_Value_Create = {
  __typename?: 'ProductsFields_characteristics_items_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Value_Read = {
  __typename?: 'ProductsFields_characteristics_items_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Value_Update = {
  __typename?: 'ProductsFields_characteristics_items_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Characteristics_Items_Value_Delete = {
  __typename?: 'ProductsFields_characteristics_items_value_Delete';
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
  items?: Maybe<ProductsFields_Equipment_Items>;
};

export type ProductsFields_Equipment_Items = {
  __typename?: 'ProductsFields_equipment_items';
  create?: Maybe<ProductsFields_Equipment_Items_Create>;
  read?: Maybe<ProductsFields_Equipment_Items_Read>;
  update?: Maybe<ProductsFields_Equipment_Items_Update>;
  delete?: Maybe<ProductsFields_Equipment_Items_Delete>;
  fields?: Maybe<ProductsFields_Equipment_Items_Fields>;
};

export type ProductsFields_Equipment_Items_Create = {
  __typename?: 'ProductsFields_equipment_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Read = {
  __typename?: 'ProductsFields_equipment_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Update = {
  __typename?: 'ProductsFields_equipment_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Delete = {
  __typename?: 'ProductsFields_equipment_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Fields = {
  __typename?: 'ProductsFields_equipment_items_Fields';
  item?: Maybe<ProductsFields_Equipment_Items_Item>;
  id?: Maybe<ProductsFields_Equipment_Items_Id>;
};

export type ProductsFields_Equipment_Items_Item = {
  __typename?: 'ProductsFields_equipment_items_item';
  create?: Maybe<ProductsFields_Equipment_Items_Item_Create>;
  read?: Maybe<ProductsFields_Equipment_Items_Item_Read>;
  update?: Maybe<ProductsFields_Equipment_Items_Item_Update>;
  delete?: Maybe<ProductsFields_Equipment_Items_Item_Delete>;
};

export type ProductsFields_Equipment_Items_Item_Create = {
  __typename?: 'ProductsFields_equipment_items_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Item_Read = {
  __typename?: 'ProductsFields_equipment_items_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Item_Update = {
  __typename?: 'ProductsFields_equipment_items_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Item_Delete = {
  __typename?: 'ProductsFields_equipment_items_item_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Id = {
  __typename?: 'ProductsFields_equipment_items_id';
  create?: Maybe<ProductsFields_Equipment_Items_Id_Create>;
  read?: Maybe<ProductsFields_Equipment_Items_Id_Read>;
  update?: Maybe<ProductsFields_Equipment_Items_Id_Update>;
  delete?: Maybe<ProductsFields_Equipment_Items_Id_Delete>;
};

export type ProductsFields_Equipment_Items_Id_Create = {
  __typename?: 'ProductsFields_equipment_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Id_Read = {
  __typename?: 'ProductsFields_equipment_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Id_Update = {
  __typename?: 'ProductsFields_equipment_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Equipment_Items_Id_Delete = {
  __typename?: 'ProductsFields_equipment_items_id_Delete';
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
  item?: Maybe<ProductsFields_Advantages_Items_Item>;
  id?: Maybe<ProductsFields_Advantages_Items_Id>;
};

export type ProductsFields_Advantages_Items_Item = {
  __typename?: 'ProductsFields_advantages_items_item';
  create?: Maybe<ProductsFields_Advantages_Items_Item_Create>;
  read?: Maybe<ProductsFields_Advantages_Items_Item_Read>;
  update?: Maybe<ProductsFields_Advantages_Items_Item_Update>;
  delete?: Maybe<ProductsFields_Advantages_Items_Item_Delete>;
};

export type ProductsFields_Advantages_Items_Item_Create = {
  __typename?: 'ProductsFields_advantages_items_item_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Item_Read = {
  __typename?: 'ProductsFields_advantages_items_item_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Item_Update = {
  __typename?: 'ProductsFields_advantages_items_item_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Advantages_Items_Item_Delete = {
  __typename?: 'ProductsFields_advantages_items_item_Delete';
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
  items?: Maybe<ProductsFields_Video_Items>;
  description?: Maybe<ProductsFields_Video_Description>;
};

export type ProductsFields_Video_Items = {
  __typename?: 'ProductsFields_video_items';
  create?: Maybe<ProductsFields_Video_Items_Create>;
  read?: Maybe<ProductsFields_Video_Items_Read>;
  update?: Maybe<ProductsFields_Video_Items_Update>;
  delete?: Maybe<ProductsFields_Video_Items_Delete>;
};

export type ProductsFields_Video_Items_Create = {
  __typename?: 'ProductsFields_video_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Items_Read = {
  __typename?: 'ProductsFields_video_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Items_Update = {
  __typename?: 'ProductsFields_video_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Items_Delete = {
  __typename?: 'ProductsFields_video_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Description = {
  __typename?: 'ProductsFields_video_description';
  create?: Maybe<ProductsFields_Video_Description_Create>;
  read?: Maybe<ProductsFields_Video_Description_Read>;
  update?: Maybe<ProductsFields_Video_Description_Update>;
  delete?: Maybe<ProductsFields_Video_Description_Delete>;
};

export type ProductsFields_Video_Description_Create = {
  __typename?: 'ProductsFields_video_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Description_Read = {
  __typename?: 'ProductsFields_video_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Description_Update = {
  __typename?: 'ProductsFields_video_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ProductsFields_Video_Description_Delete = {
  __typename?: 'ProductsFields_video_description_Delete';
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

export type ArticlesAccess = {
  __typename?: 'articlesAccess';
  fields?: Maybe<ArticlesFields>;
  create?: Maybe<ArticlesCreateAccess>;
  read?: Maybe<ArticlesReadAccess>;
  update?: Maybe<ArticlesUpdateAccess>;
  delete?: Maybe<ArticlesDeleteAccess>;
};

export type ArticlesFields = {
  __typename?: 'ArticlesFields';
  title?: Maybe<ArticlesFields_Title>;
  publishedAt?: Maybe<ArticlesFields_PublishedAt>;
  generateSlug?: Maybe<ArticlesFields_GenerateSlug>;
  slug?: Maybe<ArticlesFields_Slug>;
  cardPoster?: Maybe<ArticlesFields_CardPoster>;
  heroImage?: Maybe<ArticlesFields_HeroImage>;
  content?: Maybe<ArticlesFields_Content>;
  updatedAt?: Maybe<ArticlesFields_UpdatedAt>;
  createdAt?: Maybe<ArticlesFields_CreatedAt>;
};

export type ArticlesFields_Title = {
  __typename?: 'ArticlesFields_title';
  create?: Maybe<ArticlesFields_Title_Create>;
  read?: Maybe<ArticlesFields_Title_Read>;
  update?: Maybe<ArticlesFields_Title_Update>;
  delete?: Maybe<ArticlesFields_Title_Delete>;
};

export type ArticlesFields_Title_Create = {
  __typename?: 'ArticlesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Read = {
  __typename?: 'ArticlesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Update = {
  __typename?: 'ArticlesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Title_Delete = {
  __typename?: 'ArticlesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_PublishedAt = {
  __typename?: 'ArticlesFields_publishedAt';
  create?: Maybe<ArticlesFields_PublishedAt_Create>;
  read?: Maybe<ArticlesFields_PublishedAt_Read>;
  update?: Maybe<ArticlesFields_PublishedAt_Update>;
  delete?: Maybe<ArticlesFields_PublishedAt_Delete>;
};

export type ArticlesFields_PublishedAt_Create = {
  __typename?: 'ArticlesFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_PublishedAt_Read = {
  __typename?: 'ArticlesFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_PublishedAt_Update = {
  __typename?: 'ArticlesFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_PublishedAt_Delete = {
  __typename?: 'ArticlesFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_GenerateSlug = {
  __typename?: 'ArticlesFields_generateSlug';
  create?: Maybe<ArticlesFields_GenerateSlug_Create>;
  read?: Maybe<ArticlesFields_GenerateSlug_Read>;
  update?: Maybe<ArticlesFields_GenerateSlug_Update>;
  delete?: Maybe<ArticlesFields_GenerateSlug_Delete>;
};

export type ArticlesFields_GenerateSlug_Create = {
  __typename?: 'ArticlesFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_GenerateSlug_Read = {
  __typename?: 'ArticlesFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_GenerateSlug_Update = {
  __typename?: 'ArticlesFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_GenerateSlug_Delete = {
  __typename?: 'ArticlesFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Slug = {
  __typename?: 'ArticlesFields_slug';
  create?: Maybe<ArticlesFields_Slug_Create>;
  read?: Maybe<ArticlesFields_Slug_Read>;
  update?: Maybe<ArticlesFields_Slug_Update>;
  delete?: Maybe<ArticlesFields_Slug_Delete>;
};

export type ArticlesFields_Slug_Create = {
  __typename?: 'ArticlesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Slug_Read = {
  __typename?: 'ArticlesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Slug_Update = {
  __typename?: 'ArticlesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Slug_Delete = {
  __typename?: 'ArticlesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CardPoster = {
  __typename?: 'ArticlesFields_cardPoster';
  create?: Maybe<ArticlesFields_CardPoster_Create>;
  read?: Maybe<ArticlesFields_CardPoster_Read>;
  update?: Maybe<ArticlesFields_CardPoster_Update>;
  delete?: Maybe<ArticlesFields_CardPoster_Delete>;
};

export type ArticlesFields_CardPoster_Create = {
  __typename?: 'ArticlesFields_cardPoster_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CardPoster_Read = {
  __typename?: 'ArticlesFields_cardPoster_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CardPoster_Update = {
  __typename?: 'ArticlesFields_cardPoster_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CardPoster_Delete = {
  __typename?: 'ArticlesFields_cardPoster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_HeroImage = {
  __typename?: 'ArticlesFields_heroImage';
  create?: Maybe<ArticlesFields_HeroImage_Create>;
  read?: Maybe<ArticlesFields_HeroImage_Read>;
  update?: Maybe<ArticlesFields_HeroImage_Update>;
  delete?: Maybe<ArticlesFields_HeroImage_Delete>;
};

export type ArticlesFields_HeroImage_Create = {
  __typename?: 'ArticlesFields_heroImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_HeroImage_Read = {
  __typename?: 'ArticlesFields_heroImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_HeroImage_Update = {
  __typename?: 'ArticlesFields_heroImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_HeroImage_Delete = {
  __typename?: 'ArticlesFields_heroImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content = {
  __typename?: 'ArticlesFields_content';
  create?: Maybe<ArticlesFields_Content_Create>;
  read?: Maybe<ArticlesFields_Content_Read>;
  update?: Maybe<ArticlesFields_Content_Update>;
  delete?: Maybe<ArticlesFields_Content_Delete>;
};

export type ArticlesFields_Content_Create = {
  __typename?: 'ArticlesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Read = {
  __typename?: 'ArticlesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Update = {
  __typename?: 'ArticlesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_Content_Delete = {
  __typename?: 'ArticlesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt = {
  __typename?: 'ArticlesFields_updatedAt';
  create?: Maybe<ArticlesFields_UpdatedAt_Create>;
  read?: Maybe<ArticlesFields_UpdatedAt_Read>;
  update?: Maybe<ArticlesFields_UpdatedAt_Update>;
  delete?: Maybe<ArticlesFields_UpdatedAt_Delete>;
};

export type ArticlesFields_UpdatedAt_Create = {
  __typename?: 'ArticlesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Read = {
  __typename?: 'ArticlesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Update = {
  __typename?: 'ArticlesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_UpdatedAt_Delete = {
  __typename?: 'ArticlesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt = {
  __typename?: 'ArticlesFields_createdAt';
  create?: Maybe<ArticlesFields_CreatedAt_Create>;
  read?: Maybe<ArticlesFields_CreatedAt_Read>;
  update?: Maybe<ArticlesFields_CreatedAt_Update>;
  delete?: Maybe<ArticlesFields_CreatedAt_Delete>;
};

export type ArticlesFields_CreatedAt_Create = {
  __typename?: 'ArticlesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Read = {
  __typename?: 'ArticlesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Update = {
  __typename?: 'ArticlesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesFields_CreatedAt_Delete = {
  __typename?: 'ArticlesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArticlesCreateAccess = {
  __typename?: 'ArticlesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesReadAccess = {
  __typename?: 'ArticlesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesUpdateAccess = {
  __typename?: 'ArticlesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArticlesDeleteAccess = {
  __typename?: 'ArticlesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersAccess = {
  __typename?: 'ordersAccess';
  fields?: Maybe<OrdersFields>;
  create?: Maybe<OrdersCreateAccess>;
  read?: Maybe<OrdersReadAccess>;
  update?: Maybe<OrdersUpdateAccess>;
  delete?: Maybe<OrdersDeleteAccess>;
};

export type OrdersFields = {
  __typename?: 'OrdersFields';
  orderNumber?: Maybe<OrdersFields_OrderNumber>;
  customer?: Maybe<OrdersFields_Customer>;
  firstName?: Maybe<OrdersFields_FirstName>;
  lastName?: Maybe<OrdersFields_LastName>;
  phone?: Maybe<OrdersFields_Phone>;
  customerEmail?: Maybe<OrdersFields_CustomerEmail>;
  orderStatus?: Maybe<OrdersFields_OrderStatus>;
  paymentStatus?: Maybe<OrdersFields_PaymentStatus>;
  paymentMethod?: Maybe<OrdersFields_PaymentMethod>;
  total?: Maybe<OrdersFields_Total>;
  items?: Maybe<OrdersFields_Items>;
  delivery?: Maybe<OrdersFields_Delivery>;
  comment?: Maybe<OrdersFields_Comment>;
  monobank?: Maybe<OrdersFields_Monobank>;
  updatedAt?: Maybe<OrdersFields_UpdatedAt>;
  createdAt?: Maybe<OrdersFields_CreatedAt>;
};

export type OrdersFields_OrderNumber = {
  __typename?: 'OrdersFields_orderNumber';
  create?: Maybe<OrdersFields_OrderNumber_Create>;
  read?: Maybe<OrdersFields_OrderNumber_Read>;
  update?: Maybe<OrdersFields_OrderNumber_Update>;
  delete?: Maybe<OrdersFields_OrderNumber_Delete>;
};

export type OrdersFields_OrderNumber_Create = {
  __typename?: 'OrdersFields_orderNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderNumber_Read = {
  __typename?: 'OrdersFields_orderNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderNumber_Update = {
  __typename?: 'OrdersFields_orderNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderNumber_Delete = {
  __typename?: 'OrdersFields_orderNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer = {
  __typename?: 'OrdersFields_customer';
  create?: Maybe<OrdersFields_Customer_Create>;
  read?: Maybe<OrdersFields_Customer_Read>;
  update?: Maybe<OrdersFields_Customer_Update>;
  delete?: Maybe<OrdersFields_Customer_Delete>;
};

export type OrdersFields_Customer_Create = {
  __typename?: 'OrdersFields_customer_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Read = {
  __typename?: 'OrdersFields_customer_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Update = {
  __typename?: 'OrdersFields_customer_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Customer_Delete = {
  __typename?: 'OrdersFields_customer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_FirstName = {
  __typename?: 'OrdersFields_firstName';
  create?: Maybe<OrdersFields_FirstName_Create>;
  read?: Maybe<OrdersFields_FirstName_Read>;
  update?: Maybe<OrdersFields_FirstName_Update>;
  delete?: Maybe<OrdersFields_FirstName_Delete>;
};

export type OrdersFields_FirstName_Create = {
  __typename?: 'OrdersFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_FirstName_Read = {
  __typename?: 'OrdersFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_FirstName_Update = {
  __typename?: 'OrdersFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_FirstName_Delete = {
  __typename?: 'OrdersFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_LastName = {
  __typename?: 'OrdersFields_lastName';
  create?: Maybe<OrdersFields_LastName_Create>;
  read?: Maybe<OrdersFields_LastName_Read>;
  update?: Maybe<OrdersFields_LastName_Update>;
  delete?: Maybe<OrdersFields_LastName_Delete>;
};

export type OrdersFields_LastName_Create = {
  __typename?: 'OrdersFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_LastName_Read = {
  __typename?: 'OrdersFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_LastName_Update = {
  __typename?: 'OrdersFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_LastName_Delete = {
  __typename?: 'OrdersFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Phone = {
  __typename?: 'OrdersFields_phone';
  create?: Maybe<OrdersFields_Phone_Create>;
  read?: Maybe<OrdersFields_Phone_Read>;
  update?: Maybe<OrdersFields_Phone_Update>;
  delete?: Maybe<OrdersFields_Phone_Delete>;
};

export type OrdersFields_Phone_Create = {
  __typename?: 'OrdersFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Phone_Read = {
  __typename?: 'OrdersFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Phone_Update = {
  __typename?: 'OrdersFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Phone_Delete = {
  __typename?: 'OrdersFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail = {
  __typename?: 'OrdersFields_customerEmail';
  create?: Maybe<OrdersFields_CustomerEmail_Create>;
  read?: Maybe<OrdersFields_CustomerEmail_Read>;
  update?: Maybe<OrdersFields_CustomerEmail_Update>;
  delete?: Maybe<OrdersFields_CustomerEmail_Delete>;
};

export type OrdersFields_CustomerEmail_Create = {
  __typename?: 'OrdersFields_customerEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Read = {
  __typename?: 'OrdersFields_customerEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Update = {
  __typename?: 'OrdersFields_customerEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CustomerEmail_Delete = {
  __typename?: 'OrdersFields_customerEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderStatus = {
  __typename?: 'OrdersFields_orderStatus';
  create?: Maybe<OrdersFields_OrderStatus_Create>;
  read?: Maybe<OrdersFields_OrderStatus_Read>;
  update?: Maybe<OrdersFields_OrderStatus_Update>;
  delete?: Maybe<OrdersFields_OrderStatus_Delete>;
};

export type OrdersFields_OrderStatus_Create = {
  __typename?: 'OrdersFields_orderStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderStatus_Read = {
  __typename?: 'OrdersFields_orderStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderStatus_Update = {
  __typename?: 'OrdersFields_orderStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_OrderStatus_Delete = {
  __typename?: 'OrdersFields_orderStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentStatus = {
  __typename?: 'OrdersFields_paymentStatus';
  create?: Maybe<OrdersFields_PaymentStatus_Create>;
  read?: Maybe<OrdersFields_PaymentStatus_Read>;
  update?: Maybe<OrdersFields_PaymentStatus_Update>;
  delete?: Maybe<OrdersFields_PaymentStatus_Delete>;
};

export type OrdersFields_PaymentStatus_Create = {
  __typename?: 'OrdersFields_paymentStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentStatus_Read = {
  __typename?: 'OrdersFields_paymentStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentStatus_Update = {
  __typename?: 'OrdersFields_paymentStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentStatus_Delete = {
  __typename?: 'OrdersFields_paymentStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentMethod = {
  __typename?: 'OrdersFields_paymentMethod';
  create?: Maybe<OrdersFields_PaymentMethod_Create>;
  read?: Maybe<OrdersFields_PaymentMethod_Read>;
  update?: Maybe<OrdersFields_PaymentMethod_Update>;
  delete?: Maybe<OrdersFields_PaymentMethod_Delete>;
};

export type OrdersFields_PaymentMethod_Create = {
  __typename?: 'OrdersFields_paymentMethod_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentMethod_Read = {
  __typename?: 'OrdersFields_paymentMethod_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentMethod_Update = {
  __typename?: 'OrdersFields_paymentMethod_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_PaymentMethod_Delete = {
  __typename?: 'OrdersFields_paymentMethod_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Total = {
  __typename?: 'OrdersFields_total';
  create?: Maybe<OrdersFields_Total_Create>;
  read?: Maybe<OrdersFields_Total_Read>;
  update?: Maybe<OrdersFields_Total_Update>;
  delete?: Maybe<OrdersFields_Total_Delete>;
};

export type OrdersFields_Total_Create = {
  __typename?: 'OrdersFields_total_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Total_Read = {
  __typename?: 'OrdersFields_total_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Total_Update = {
  __typename?: 'OrdersFields_total_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Total_Delete = {
  __typename?: 'OrdersFields_total_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items = {
  __typename?: 'OrdersFields_items';
  create?: Maybe<OrdersFields_Items_Create>;
  read?: Maybe<OrdersFields_Items_Read>;
  update?: Maybe<OrdersFields_Items_Update>;
  delete?: Maybe<OrdersFields_Items_Delete>;
};

export type OrdersFields_Items_Create = {
  __typename?: 'OrdersFields_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Read = {
  __typename?: 'OrdersFields_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Update = {
  __typename?: 'OrdersFields_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Items_Delete = {
  __typename?: 'OrdersFields_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Delivery = {
  __typename?: 'OrdersFields_delivery';
  create?: Maybe<OrdersFields_Delivery_Create>;
  read?: Maybe<OrdersFields_Delivery_Read>;
  update?: Maybe<OrdersFields_Delivery_Update>;
  delete?: Maybe<OrdersFields_Delivery_Delete>;
};

export type OrdersFields_Delivery_Create = {
  __typename?: 'OrdersFields_delivery_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Delivery_Read = {
  __typename?: 'OrdersFields_delivery_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Delivery_Update = {
  __typename?: 'OrdersFields_delivery_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Delivery_Delete = {
  __typename?: 'OrdersFields_delivery_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Comment = {
  __typename?: 'OrdersFields_comment';
  create?: Maybe<OrdersFields_Comment_Create>;
  read?: Maybe<OrdersFields_Comment_Read>;
  update?: Maybe<OrdersFields_Comment_Update>;
  delete?: Maybe<OrdersFields_Comment_Delete>;
};

export type OrdersFields_Comment_Create = {
  __typename?: 'OrdersFields_comment_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Comment_Read = {
  __typename?: 'OrdersFields_comment_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Comment_Update = {
  __typename?: 'OrdersFields_comment_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Comment_Delete = {
  __typename?: 'OrdersFields_comment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Monobank = {
  __typename?: 'OrdersFields_monobank';
  create?: Maybe<OrdersFields_Monobank_Create>;
  read?: Maybe<OrdersFields_Monobank_Read>;
  update?: Maybe<OrdersFields_Monobank_Update>;
  delete?: Maybe<OrdersFields_Monobank_Delete>;
};

export type OrdersFields_Monobank_Create = {
  __typename?: 'OrdersFields_monobank_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Monobank_Read = {
  __typename?: 'OrdersFields_monobank_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Monobank_Update = {
  __typename?: 'OrdersFields_monobank_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_Monobank_Delete = {
  __typename?: 'OrdersFields_monobank_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt = {
  __typename?: 'OrdersFields_updatedAt';
  create?: Maybe<OrdersFields_UpdatedAt_Create>;
  read?: Maybe<OrdersFields_UpdatedAt_Read>;
  update?: Maybe<OrdersFields_UpdatedAt_Update>;
  delete?: Maybe<OrdersFields_UpdatedAt_Delete>;
};

export type OrdersFields_UpdatedAt_Create = {
  __typename?: 'OrdersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Read = {
  __typename?: 'OrdersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Update = {
  __typename?: 'OrdersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_UpdatedAt_Delete = {
  __typename?: 'OrdersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt = {
  __typename?: 'OrdersFields_createdAt';
  create?: Maybe<OrdersFields_CreatedAt_Create>;
  read?: Maybe<OrdersFields_CreatedAt_Read>;
  update?: Maybe<OrdersFields_CreatedAt_Update>;
  delete?: Maybe<OrdersFields_CreatedAt_Delete>;
};

export type OrdersFields_CreatedAt_Create = {
  __typename?: 'OrdersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Read = {
  __typename?: 'OrdersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Update = {
  __typename?: 'OrdersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type OrdersFields_CreatedAt_Delete = {
  __typename?: 'OrdersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type OrdersCreateAccess = {
  __typename?: 'OrdersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersReadAccess = {
  __typename?: 'OrdersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersUpdateAccess = {
  __typename?: 'OrdersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type OrdersDeleteAccess = {
  __typename?: 'OrdersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Legal_PagesAccess = {
  __typename?: 'legal_pagesAccess';
  fields?: Maybe<LegalPagesFields>;
  create?: Maybe<LegalPagesCreateAccess>;
  read?: Maybe<LegalPagesReadAccess>;
  update?: Maybe<LegalPagesUpdateAccess>;
  delete?: Maybe<LegalPagesDeleteAccess>;
};

export type LegalPagesFields = {
  __typename?: 'LegalPagesFields';
  title?: Maybe<LegalPagesFields_Title>;
  generateSlug?: Maybe<LegalPagesFields_GenerateSlug>;
  slug?: Maybe<LegalPagesFields_Slug>;
  content?: Maybe<LegalPagesFields_Content>;
  contentMarkdown?: Maybe<LegalPagesFields_ContentMarkdown>;
  updatedAt?: Maybe<LegalPagesFields_UpdatedAt>;
  createdAt?: Maybe<LegalPagesFields_CreatedAt>;
};

export type LegalPagesFields_Title = {
  __typename?: 'LegalPagesFields_title';
  create?: Maybe<LegalPagesFields_Title_Create>;
  read?: Maybe<LegalPagesFields_Title_Read>;
  update?: Maybe<LegalPagesFields_Title_Update>;
  delete?: Maybe<LegalPagesFields_Title_Delete>;
};

export type LegalPagesFields_Title_Create = {
  __typename?: 'LegalPagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Title_Read = {
  __typename?: 'LegalPagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Title_Update = {
  __typename?: 'LegalPagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Title_Delete = {
  __typename?: 'LegalPagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_GenerateSlug = {
  __typename?: 'LegalPagesFields_generateSlug';
  create?: Maybe<LegalPagesFields_GenerateSlug_Create>;
  read?: Maybe<LegalPagesFields_GenerateSlug_Read>;
  update?: Maybe<LegalPagesFields_GenerateSlug_Update>;
  delete?: Maybe<LegalPagesFields_GenerateSlug_Delete>;
};

export type LegalPagesFields_GenerateSlug_Create = {
  __typename?: 'LegalPagesFields_generateSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_GenerateSlug_Read = {
  __typename?: 'LegalPagesFields_generateSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_GenerateSlug_Update = {
  __typename?: 'LegalPagesFields_generateSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_GenerateSlug_Delete = {
  __typename?: 'LegalPagesFields_generateSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Slug = {
  __typename?: 'LegalPagesFields_slug';
  create?: Maybe<LegalPagesFields_Slug_Create>;
  read?: Maybe<LegalPagesFields_Slug_Read>;
  update?: Maybe<LegalPagesFields_Slug_Update>;
  delete?: Maybe<LegalPagesFields_Slug_Delete>;
};

export type LegalPagesFields_Slug_Create = {
  __typename?: 'LegalPagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Slug_Read = {
  __typename?: 'LegalPagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Slug_Update = {
  __typename?: 'LegalPagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Slug_Delete = {
  __typename?: 'LegalPagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Content = {
  __typename?: 'LegalPagesFields_content';
  create?: Maybe<LegalPagesFields_Content_Create>;
  read?: Maybe<LegalPagesFields_Content_Read>;
  update?: Maybe<LegalPagesFields_Content_Update>;
  delete?: Maybe<LegalPagesFields_Content_Delete>;
};

export type LegalPagesFields_Content_Create = {
  __typename?: 'LegalPagesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Content_Read = {
  __typename?: 'LegalPagesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Content_Update = {
  __typename?: 'LegalPagesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_Content_Delete = {
  __typename?: 'LegalPagesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_ContentMarkdown = {
  __typename?: 'LegalPagesFields_contentMarkdown';
  create?: Maybe<LegalPagesFields_ContentMarkdown_Create>;
  read?: Maybe<LegalPagesFields_ContentMarkdown_Read>;
  update?: Maybe<LegalPagesFields_ContentMarkdown_Update>;
  delete?: Maybe<LegalPagesFields_ContentMarkdown_Delete>;
};

export type LegalPagesFields_ContentMarkdown_Create = {
  __typename?: 'LegalPagesFields_contentMarkdown_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_ContentMarkdown_Read = {
  __typename?: 'LegalPagesFields_contentMarkdown_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_ContentMarkdown_Update = {
  __typename?: 'LegalPagesFields_contentMarkdown_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_ContentMarkdown_Delete = {
  __typename?: 'LegalPagesFields_contentMarkdown_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_UpdatedAt = {
  __typename?: 'LegalPagesFields_updatedAt';
  create?: Maybe<LegalPagesFields_UpdatedAt_Create>;
  read?: Maybe<LegalPagesFields_UpdatedAt_Read>;
  update?: Maybe<LegalPagesFields_UpdatedAt_Update>;
  delete?: Maybe<LegalPagesFields_UpdatedAt_Delete>;
};

export type LegalPagesFields_UpdatedAt_Create = {
  __typename?: 'LegalPagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_UpdatedAt_Read = {
  __typename?: 'LegalPagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_UpdatedAt_Update = {
  __typename?: 'LegalPagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_UpdatedAt_Delete = {
  __typename?: 'LegalPagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_CreatedAt = {
  __typename?: 'LegalPagesFields_createdAt';
  create?: Maybe<LegalPagesFields_CreatedAt_Create>;
  read?: Maybe<LegalPagesFields_CreatedAt_Read>;
  update?: Maybe<LegalPagesFields_CreatedAt_Update>;
  delete?: Maybe<LegalPagesFields_CreatedAt_Delete>;
};

export type LegalPagesFields_CreatedAt_Create = {
  __typename?: 'LegalPagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_CreatedAt_Read = {
  __typename?: 'LegalPagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_CreatedAt_Update = {
  __typename?: 'LegalPagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesFields_CreatedAt_Delete = {
  __typename?: 'LegalPagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LegalPagesCreateAccess = {
  __typename?: 'LegalPagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesReadAccess = {
  __typename?: 'LegalPagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesUpdateAccess = {
  __typename?: 'LegalPagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LegalPagesDeleteAccess = {
  __typename?: 'LegalPagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsAccess = {
  __typename?: 'locationsAccess';
  fields?: Maybe<LocationsFields>;
  create?: Maybe<LocationsCreateAccess>;
  read?: Maybe<LocationsReadAccess>;
  update?: Maybe<LocationsUpdateAccess>;
  delete?: Maybe<LocationsDeleteAccess>;
};

export type LocationsFields = {
  __typename?: 'LocationsFields';
  name?: Maybe<LocationsFields_Name>;
  country?: Maybe<LocationsFields_Country>;
  city?: Maybe<LocationsFields_City>;
  address?: Maybe<LocationsFields_Address>;
  image?: Maybe<LocationsFields_Image>;
  latitude?: Maybe<LocationsFields_Latitude>;
  longitude?: Maybe<LocationsFields_Longitude>;
  phone?: Maybe<LocationsFields_Phone>;
  instagram?: Maybe<LocationsFields_Instagram>;
  sortOrder?: Maybe<LocationsFields_SortOrder>;
  isActive?: Maybe<LocationsFields_IsActive>;
  updatedAt?: Maybe<LocationsFields_UpdatedAt>;
  createdAt?: Maybe<LocationsFields_CreatedAt>;
};

export type LocationsFields_Name = {
  __typename?: 'LocationsFields_name';
  create?: Maybe<LocationsFields_Name_Create>;
  read?: Maybe<LocationsFields_Name_Read>;
  update?: Maybe<LocationsFields_Name_Update>;
  delete?: Maybe<LocationsFields_Name_Delete>;
};

export type LocationsFields_Name_Create = {
  __typename?: 'LocationsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Name_Read = {
  __typename?: 'LocationsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Name_Update = {
  __typename?: 'LocationsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Name_Delete = {
  __typename?: 'LocationsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Country = {
  __typename?: 'LocationsFields_country';
  create?: Maybe<LocationsFields_Country_Create>;
  read?: Maybe<LocationsFields_Country_Read>;
  update?: Maybe<LocationsFields_Country_Update>;
  delete?: Maybe<LocationsFields_Country_Delete>;
};

export type LocationsFields_Country_Create = {
  __typename?: 'LocationsFields_country_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Country_Read = {
  __typename?: 'LocationsFields_country_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Country_Update = {
  __typename?: 'LocationsFields_country_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Country_Delete = {
  __typename?: 'LocationsFields_country_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_City = {
  __typename?: 'LocationsFields_city';
  create?: Maybe<LocationsFields_City_Create>;
  read?: Maybe<LocationsFields_City_Read>;
  update?: Maybe<LocationsFields_City_Update>;
  delete?: Maybe<LocationsFields_City_Delete>;
};

export type LocationsFields_City_Create = {
  __typename?: 'LocationsFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_City_Read = {
  __typename?: 'LocationsFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_City_Update = {
  __typename?: 'LocationsFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_City_Delete = {
  __typename?: 'LocationsFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Address = {
  __typename?: 'LocationsFields_address';
  create?: Maybe<LocationsFields_Address_Create>;
  read?: Maybe<LocationsFields_Address_Read>;
  update?: Maybe<LocationsFields_Address_Update>;
  delete?: Maybe<LocationsFields_Address_Delete>;
};

export type LocationsFields_Address_Create = {
  __typename?: 'LocationsFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Address_Read = {
  __typename?: 'LocationsFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Address_Update = {
  __typename?: 'LocationsFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Address_Delete = {
  __typename?: 'LocationsFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Image = {
  __typename?: 'LocationsFields_image';
  create?: Maybe<LocationsFields_Image_Create>;
  read?: Maybe<LocationsFields_Image_Read>;
  update?: Maybe<LocationsFields_Image_Update>;
  delete?: Maybe<LocationsFields_Image_Delete>;
};

export type LocationsFields_Image_Create = {
  __typename?: 'LocationsFields_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Image_Read = {
  __typename?: 'LocationsFields_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Image_Update = {
  __typename?: 'LocationsFields_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Image_Delete = {
  __typename?: 'LocationsFields_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Latitude = {
  __typename?: 'LocationsFields_latitude';
  create?: Maybe<LocationsFields_Latitude_Create>;
  read?: Maybe<LocationsFields_Latitude_Read>;
  update?: Maybe<LocationsFields_Latitude_Update>;
  delete?: Maybe<LocationsFields_Latitude_Delete>;
};

export type LocationsFields_Latitude_Create = {
  __typename?: 'LocationsFields_latitude_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Latitude_Read = {
  __typename?: 'LocationsFields_latitude_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Latitude_Update = {
  __typename?: 'LocationsFields_latitude_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Latitude_Delete = {
  __typename?: 'LocationsFields_latitude_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Longitude = {
  __typename?: 'LocationsFields_longitude';
  create?: Maybe<LocationsFields_Longitude_Create>;
  read?: Maybe<LocationsFields_Longitude_Read>;
  update?: Maybe<LocationsFields_Longitude_Update>;
  delete?: Maybe<LocationsFields_Longitude_Delete>;
};

export type LocationsFields_Longitude_Create = {
  __typename?: 'LocationsFields_longitude_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Longitude_Read = {
  __typename?: 'LocationsFields_longitude_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Longitude_Update = {
  __typename?: 'LocationsFields_longitude_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Longitude_Delete = {
  __typename?: 'LocationsFields_longitude_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Phone = {
  __typename?: 'LocationsFields_phone';
  create?: Maybe<LocationsFields_Phone_Create>;
  read?: Maybe<LocationsFields_Phone_Read>;
  update?: Maybe<LocationsFields_Phone_Update>;
  delete?: Maybe<LocationsFields_Phone_Delete>;
};

export type LocationsFields_Phone_Create = {
  __typename?: 'LocationsFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Phone_Read = {
  __typename?: 'LocationsFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Phone_Update = {
  __typename?: 'LocationsFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Phone_Delete = {
  __typename?: 'LocationsFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Instagram = {
  __typename?: 'LocationsFields_instagram';
  create?: Maybe<LocationsFields_Instagram_Create>;
  read?: Maybe<LocationsFields_Instagram_Read>;
  update?: Maybe<LocationsFields_Instagram_Update>;
  delete?: Maybe<LocationsFields_Instagram_Delete>;
};

export type LocationsFields_Instagram_Create = {
  __typename?: 'LocationsFields_instagram_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Instagram_Read = {
  __typename?: 'LocationsFields_instagram_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Instagram_Update = {
  __typename?: 'LocationsFields_instagram_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_Instagram_Delete = {
  __typename?: 'LocationsFields_instagram_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_SortOrder = {
  __typename?: 'LocationsFields_sortOrder';
  create?: Maybe<LocationsFields_SortOrder_Create>;
  read?: Maybe<LocationsFields_SortOrder_Read>;
  update?: Maybe<LocationsFields_SortOrder_Update>;
  delete?: Maybe<LocationsFields_SortOrder_Delete>;
};

export type LocationsFields_SortOrder_Create = {
  __typename?: 'LocationsFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_SortOrder_Read = {
  __typename?: 'LocationsFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_SortOrder_Update = {
  __typename?: 'LocationsFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_SortOrder_Delete = {
  __typename?: 'LocationsFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_IsActive = {
  __typename?: 'LocationsFields_isActive';
  create?: Maybe<LocationsFields_IsActive_Create>;
  read?: Maybe<LocationsFields_IsActive_Read>;
  update?: Maybe<LocationsFields_IsActive_Update>;
  delete?: Maybe<LocationsFields_IsActive_Delete>;
};

export type LocationsFields_IsActive_Create = {
  __typename?: 'LocationsFields_isActive_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_IsActive_Read = {
  __typename?: 'LocationsFields_isActive_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_IsActive_Update = {
  __typename?: 'LocationsFields_isActive_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_IsActive_Delete = {
  __typename?: 'LocationsFields_isActive_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_UpdatedAt = {
  __typename?: 'LocationsFields_updatedAt';
  create?: Maybe<LocationsFields_UpdatedAt_Create>;
  read?: Maybe<LocationsFields_UpdatedAt_Read>;
  update?: Maybe<LocationsFields_UpdatedAt_Update>;
  delete?: Maybe<LocationsFields_UpdatedAt_Delete>;
};

export type LocationsFields_UpdatedAt_Create = {
  __typename?: 'LocationsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_UpdatedAt_Read = {
  __typename?: 'LocationsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_UpdatedAt_Update = {
  __typename?: 'LocationsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_UpdatedAt_Delete = {
  __typename?: 'LocationsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_CreatedAt = {
  __typename?: 'LocationsFields_createdAt';
  create?: Maybe<LocationsFields_CreatedAt_Create>;
  read?: Maybe<LocationsFields_CreatedAt_Read>;
  update?: Maybe<LocationsFields_CreatedAt_Update>;
  delete?: Maybe<LocationsFields_CreatedAt_Delete>;
};

export type LocationsFields_CreatedAt_Create = {
  __typename?: 'LocationsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_CreatedAt_Read = {
  __typename?: 'LocationsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_CreatedAt_Update = {
  __typename?: 'LocationsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LocationsFields_CreatedAt_Delete = {
  __typename?: 'LocationsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LocationsCreateAccess = {
  __typename?: 'LocationsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsReadAccess = {
  __typename?: 'LocationsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsUpdateAccess = {
  __typename?: 'LocationsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LocationsDeleteAccess = {
  __typename?: 'LocationsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Training_CategoriesAccess = {
  __typename?: 'training_categoriesAccess';
  fields?: Maybe<TrainingCategoriesFields>;
  create?: Maybe<TrainingCategoriesCreateAccess>;
  read?: Maybe<TrainingCategoriesReadAccess>;
  update?: Maybe<TrainingCategoriesUpdateAccess>;
  delete?: Maybe<TrainingCategoriesDeleteAccess>;
};

export type TrainingCategoriesFields = {
  __typename?: 'TrainingCategoriesFields';
  title?: Maybe<TrainingCategoriesFields_Title>;
  sortOrder?: Maybe<TrainingCategoriesFields_SortOrder>;
  updatedAt?: Maybe<TrainingCategoriesFields_UpdatedAt>;
  createdAt?: Maybe<TrainingCategoriesFields_CreatedAt>;
};

export type TrainingCategoriesFields_Title = {
  __typename?: 'TrainingCategoriesFields_title';
  create?: Maybe<TrainingCategoriesFields_Title_Create>;
  read?: Maybe<TrainingCategoriesFields_Title_Read>;
  update?: Maybe<TrainingCategoriesFields_Title_Update>;
  delete?: Maybe<TrainingCategoriesFields_Title_Delete>;
};

export type TrainingCategoriesFields_Title_Create = {
  __typename?: 'TrainingCategoriesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_Title_Read = {
  __typename?: 'TrainingCategoriesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_Title_Update = {
  __typename?: 'TrainingCategoriesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_Title_Delete = {
  __typename?: 'TrainingCategoriesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_SortOrder = {
  __typename?: 'TrainingCategoriesFields_sortOrder';
  create?: Maybe<TrainingCategoriesFields_SortOrder_Create>;
  read?: Maybe<TrainingCategoriesFields_SortOrder_Read>;
  update?: Maybe<TrainingCategoriesFields_SortOrder_Update>;
  delete?: Maybe<TrainingCategoriesFields_SortOrder_Delete>;
};

export type TrainingCategoriesFields_SortOrder_Create = {
  __typename?: 'TrainingCategoriesFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_SortOrder_Read = {
  __typename?: 'TrainingCategoriesFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_SortOrder_Update = {
  __typename?: 'TrainingCategoriesFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_SortOrder_Delete = {
  __typename?: 'TrainingCategoriesFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_UpdatedAt = {
  __typename?: 'TrainingCategoriesFields_updatedAt';
  create?: Maybe<TrainingCategoriesFields_UpdatedAt_Create>;
  read?: Maybe<TrainingCategoriesFields_UpdatedAt_Read>;
  update?: Maybe<TrainingCategoriesFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingCategoriesFields_UpdatedAt_Delete>;
};

export type TrainingCategoriesFields_UpdatedAt_Create = {
  __typename?: 'TrainingCategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_UpdatedAt_Read = {
  __typename?: 'TrainingCategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_UpdatedAt_Update = {
  __typename?: 'TrainingCategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_UpdatedAt_Delete = {
  __typename?: 'TrainingCategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_CreatedAt = {
  __typename?: 'TrainingCategoriesFields_createdAt';
  create?: Maybe<TrainingCategoriesFields_CreatedAt_Create>;
  read?: Maybe<TrainingCategoriesFields_CreatedAt_Read>;
  update?: Maybe<TrainingCategoriesFields_CreatedAt_Update>;
  delete?: Maybe<TrainingCategoriesFields_CreatedAt_Delete>;
};

export type TrainingCategoriesFields_CreatedAt_Create = {
  __typename?: 'TrainingCategoriesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_CreatedAt_Read = {
  __typename?: 'TrainingCategoriesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_CreatedAt_Update = {
  __typename?: 'TrainingCategoriesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesFields_CreatedAt_Delete = {
  __typename?: 'TrainingCategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingCategoriesCreateAccess = {
  __typename?: 'TrainingCategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesReadAccess = {
  __typename?: 'TrainingCategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesUpdateAccess = {
  __typename?: 'TrainingCategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingCategoriesDeleteAccess = {
  __typename?: 'TrainingCategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Training_VideosAccess = {
  __typename?: 'training_videosAccess';
  fields?: Maybe<TrainingVideosFields>;
  create?: Maybe<TrainingVideosCreateAccess>;
  read?: Maybe<TrainingVideosReadAccess>;
  update?: Maybe<TrainingVideosUpdateAccess>;
  delete?: Maybe<TrainingVideosDeleteAccess>;
};

export type TrainingVideosFields = {
  __typename?: 'TrainingVideosFields';
  title?: Maybe<TrainingVideosFields_Title>;
  description?: Maybe<TrainingVideosFields_Description>;
  category?: Maybe<TrainingVideosFields_Category>;
  poster?: Maybe<TrainingVideosFields_Poster>;
  video?: Maybe<TrainingVideosFields_Video>;
  sortOrder?: Maybe<TrainingVideosFields_SortOrder>;
  updatedAt?: Maybe<TrainingVideosFields_UpdatedAt>;
  createdAt?: Maybe<TrainingVideosFields_CreatedAt>;
};

export type TrainingVideosFields_Title = {
  __typename?: 'TrainingVideosFields_title';
  create?: Maybe<TrainingVideosFields_Title_Create>;
  read?: Maybe<TrainingVideosFields_Title_Read>;
  update?: Maybe<TrainingVideosFields_Title_Update>;
  delete?: Maybe<TrainingVideosFields_Title_Delete>;
};

export type TrainingVideosFields_Title_Create = {
  __typename?: 'TrainingVideosFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Title_Read = {
  __typename?: 'TrainingVideosFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Title_Update = {
  __typename?: 'TrainingVideosFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Title_Delete = {
  __typename?: 'TrainingVideosFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Description = {
  __typename?: 'TrainingVideosFields_description';
  create?: Maybe<TrainingVideosFields_Description_Create>;
  read?: Maybe<TrainingVideosFields_Description_Read>;
  update?: Maybe<TrainingVideosFields_Description_Update>;
  delete?: Maybe<TrainingVideosFields_Description_Delete>;
};

export type TrainingVideosFields_Description_Create = {
  __typename?: 'TrainingVideosFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Description_Read = {
  __typename?: 'TrainingVideosFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Description_Update = {
  __typename?: 'TrainingVideosFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Description_Delete = {
  __typename?: 'TrainingVideosFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Category = {
  __typename?: 'TrainingVideosFields_category';
  create?: Maybe<TrainingVideosFields_Category_Create>;
  read?: Maybe<TrainingVideosFields_Category_Read>;
  update?: Maybe<TrainingVideosFields_Category_Update>;
  delete?: Maybe<TrainingVideosFields_Category_Delete>;
};

export type TrainingVideosFields_Category_Create = {
  __typename?: 'TrainingVideosFields_category_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Category_Read = {
  __typename?: 'TrainingVideosFields_category_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Category_Update = {
  __typename?: 'TrainingVideosFields_category_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Category_Delete = {
  __typename?: 'TrainingVideosFields_category_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Poster = {
  __typename?: 'TrainingVideosFields_poster';
  create?: Maybe<TrainingVideosFields_Poster_Create>;
  read?: Maybe<TrainingVideosFields_Poster_Read>;
  update?: Maybe<TrainingVideosFields_Poster_Update>;
  delete?: Maybe<TrainingVideosFields_Poster_Delete>;
};

export type TrainingVideosFields_Poster_Create = {
  __typename?: 'TrainingVideosFields_poster_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Poster_Read = {
  __typename?: 'TrainingVideosFields_poster_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Poster_Update = {
  __typename?: 'TrainingVideosFields_poster_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Poster_Delete = {
  __typename?: 'TrainingVideosFields_poster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Video = {
  __typename?: 'TrainingVideosFields_video';
  create?: Maybe<TrainingVideosFields_Video_Create>;
  read?: Maybe<TrainingVideosFields_Video_Read>;
  update?: Maybe<TrainingVideosFields_Video_Update>;
  delete?: Maybe<TrainingVideosFields_Video_Delete>;
};

export type TrainingVideosFields_Video_Create = {
  __typename?: 'TrainingVideosFields_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Video_Read = {
  __typename?: 'TrainingVideosFields_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Video_Update = {
  __typename?: 'TrainingVideosFields_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_Video_Delete = {
  __typename?: 'TrainingVideosFields_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_SortOrder = {
  __typename?: 'TrainingVideosFields_sortOrder';
  create?: Maybe<TrainingVideosFields_SortOrder_Create>;
  read?: Maybe<TrainingVideosFields_SortOrder_Read>;
  update?: Maybe<TrainingVideosFields_SortOrder_Update>;
  delete?: Maybe<TrainingVideosFields_SortOrder_Delete>;
};

export type TrainingVideosFields_SortOrder_Create = {
  __typename?: 'TrainingVideosFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_SortOrder_Read = {
  __typename?: 'TrainingVideosFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_SortOrder_Update = {
  __typename?: 'TrainingVideosFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_SortOrder_Delete = {
  __typename?: 'TrainingVideosFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_UpdatedAt = {
  __typename?: 'TrainingVideosFields_updatedAt';
  create?: Maybe<TrainingVideosFields_UpdatedAt_Create>;
  read?: Maybe<TrainingVideosFields_UpdatedAt_Read>;
  update?: Maybe<TrainingVideosFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingVideosFields_UpdatedAt_Delete>;
};

export type TrainingVideosFields_UpdatedAt_Create = {
  __typename?: 'TrainingVideosFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_UpdatedAt_Read = {
  __typename?: 'TrainingVideosFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_UpdatedAt_Update = {
  __typename?: 'TrainingVideosFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_UpdatedAt_Delete = {
  __typename?: 'TrainingVideosFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_CreatedAt = {
  __typename?: 'TrainingVideosFields_createdAt';
  create?: Maybe<TrainingVideosFields_CreatedAt_Create>;
  read?: Maybe<TrainingVideosFields_CreatedAt_Read>;
  update?: Maybe<TrainingVideosFields_CreatedAt_Update>;
  delete?: Maybe<TrainingVideosFields_CreatedAt_Delete>;
};

export type TrainingVideosFields_CreatedAt_Create = {
  __typename?: 'TrainingVideosFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_CreatedAt_Read = {
  __typename?: 'TrainingVideosFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_CreatedAt_Update = {
  __typename?: 'TrainingVideosFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosFields_CreatedAt_Delete = {
  __typename?: 'TrainingVideosFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingVideosCreateAccess = {
  __typename?: 'TrainingVideosCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosReadAccess = {
  __typename?: 'TrainingVideosReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosUpdateAccess = {
  __typename?: 'TrainingVideosUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingVideosDeleteAccess = {
  __typename?: 'TrainingVideosDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsAccess = {
  __typename?: 'applicationsAccess';
  fields?: Maybe<ApplicationsFields>;
  create?: Maybe<ApplicationsCreateAccess>;
  read?: Maybe<ApplicationsReadAccess>;
  update?: Maybe<ApplicationsUpdateAccess>;
  delete?: Maybe<ApplicationsDeleteAccess>;
};

export type ApplicationsFields = {
  __typename?: 'ApplicationsFields';
  source?: Maybe<ApplicationsFields_Source>;
  name?: Maybe<ApplicationsFields_Name>;
  email?: Maybe<ApplicationsFields_Email>;
  phone?: Maybe<ApplicationsFields_Phone>;
  message?: Maybe<ApplicationsFields_Message>;
  status?: Maybe<ApplicationsFields_Status>;
  updatedAt?: Maybe<ApplicationsFields_UpdatedAt>;
  createdAt?: Maybe<ApplicationsFields_CreatedAt>;
};

export type ApplicationsFields_Source = {
  __typename?: 'ApplicationsFields_source';
  create?: Maybe<ApplicationsFields_Source_Create>;
  read?: Maybe<ApplicationsFields_Source_Read>;
  update?: Maybe<ApplicationsFields_Source_Update>;
  delete?: Maybe<ApplicationsFields_Source_Delete>;
};

export type ApplicationsFields_Source_Create = {
  __typename?: 'ApplicationsFields_source_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Source_Read = {
  __typename?: 'ApplicationsFields_source_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Source_Update = {
  __typename?: 'ApplicationsFields_source_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Source_Delete = {
  __typename?: 'ApplicationsFields_source_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Name = {
  __typename?: 'ApplicationsFields_name';
  create?: Maybe<ApplicationsFields_Name_Create>;
  read?: Maybe<ApplicationsFields_Name_Read>;
  update?: Maybe<ApplicationsFields_Name_Update>;
  delete?: Maybe<ApplicationsFields_Name_Delete>;
};

export type ApplicationsFields_Name_Create = {
  __typename?: 'ApplicationsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Name_Read = {
  __typename?: 'ApplicationsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Name_Update = {
  __typename?: 'ApplicationsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Name_Delete = {
  __typename?: 'ApplicationsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Email = {
  __typename?: 'ApplicationsFields_email';
  create?: Maybe<ApplicationsFields_Email_Create>;
  read?: Maybe<ApplicationsFields_Email_Read>;
  update?: Maybe<ApplicationsFields_Email_Update>;
  delete?: Maybe<ApplicationsFields_Email_Delete>;
};

export type ApplicationsFields_Email_Create = {
  __typename?: 'ApplicationsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Email_Read = {
  __typename?: 'ApplicationsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Email_Update = {
  __typename?: 'ApplicationsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Email_Delete = {
  __typename?: 'ApplicationsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Phone = {
  __typename?: 'ApplicationsFields_phone';
  create?: Maybe<ApplicationsFields_Phone_Create>;
  read?: Maybe<ApplicationsFields_Phone_Read>;
  update?: Maybe<ApplicationsFields_Phone_Update>;
  delete?: Maybe<ApplicationsFields_Phone_Delete>;
};

export type ApplicationsFields_Phone_Create = {
  __typename?: 'ApplicationsFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Phone_Read = {
  __typename?: 'ApplicationsFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Phone_Update = {
  __typename?: 'ApplicationsFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Phone_Delete = {
  __typename?: 'ApplicationsFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Message = {
  __typename?: 'ApplicationsFields_message';
  create?: Maybe<ApplicationsFields_Message_Create>;
  read?: Maybe<ApplicationsFields_Message_Read>;
  update?: Maybe<ApplicationsFields_Message_Update>;
  delete?: Maybe<ApplicationsFields_Message_Delete>;
};

export type ApplicationsFields_Message_Create = {
  __typename?: 'ApplicationsFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Message_Read = {
  __typename?: 'ApplicationsFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Message_Update = {
  __typename?: 'ApplicationsFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Message_Delete = {
  __typename?: 'ApplicationsFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Status = {
  __typename?: 'ApplicationsFields_status';
  create?: Maybe<ApplicationsFields_Status_Create>;
  read?: Maybe<ApplicationsFields_Status_Read>;
  update?: Maybe<ApplicationsFields_Status_Update>;
  delete?: Maybe<ApplicationsFields_Status_Delete>;
};

export type ApplicationsFields_Status_Create = {
  __typename?: 'ApplicationsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Status_Read = {
  __typename?: 'ApplicationsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Status_Update = {
  __typename?: 'ApplicationsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_Status_Delete = {
  __typename?: 'ApplicationsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_UpdatedAt = {
  __typename?: 'ApplicationsFields_updatedAt';
  create?: Maybe<ApplicationsFields_UpdatedAt_Create>;
  read?: Maybe<ApplicationsFields_UpdatedAt_Read>;
  update?: Maybe<ApplicationsFields_UpdatedAt_Update>;
  delete?: Maybe<ApplicationsFields_UpdatedAt_Delete>;
};

export type ApplicationsFields_UpdatedAt_Create = {
  __typename?: 'ApplicationsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_UpdatedAt_Read = {
  __typename?: 'ApplicationsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_UpdatedAt_Update = {
  __typename?: 'ApplicationsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_UpdatedAt_Delete = {
  __typename?: 'ApplicationsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_CreatedAt = {
  __typename?: 'ApplicationsFields_createdAt';
  create?: Maybe<ApplicationsFields_CreatedAt_Create>;
  read?: Maybe<ApplicationsFields_CreatedAt_Read>;
  update?: Maybe<ApplicationsFields_CreatedAt_Update>;
  delete?: Maybe<ApplicationsFields_CreatedAt_Delete>;
};

export type ApplicationsFields_CreatedAt_Create = {
  __typename?: 'ApplicationsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_CreatedAt_Read = {
  __typename?: 'ApplicationsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_CreatedAt_Update = {
  __typename?: 'ApplicationsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsFields_CreatedAt_Delete = {
  __typename?: 'ApplicationsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ApplicationsCreateAccess = {
  __typename?: 'ApplicationsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsReadAccess = {
  __typename?: 'ApplicationsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsUpdateAccess = {
  __typename?: 'ApplicationsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ApplicationsDeleteAccess = {
  __typename?: 'ApplicationsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Dealer_ApplicationsAccess = {
  __typename?: 'dealer_applicationsAccess';
  fields?: Maybe<DealerApplicationsFields>;
  create?: Maybe<DealerApplicationsCreateAccess>;
  read?: Maybe<DealerApplicationsReadAccess>;
  update?: Maybe<DealerApplicationsUpdateAccess>;
  delete?: Maybe<DealerApplicationsDeleteAccess>;
};

export type DealerApplicationsFields = {
  __typename?: 'DealerApplicationsFields';
  account?: Maybe<DealerApplicationsFields_Account>;
  companyName?: Maybe<DealerApplicationsFields_CompanyName>;
  firstName?: Maybe<DealerApplicationsFields_FirstName>;
  lastName?: Maybe<DealerApplicationsFields_LastName>;
  phone?: Maybe<DealerApplicationsFields_Phone>;
  email?: Maybe<DealerApplicationsFields_Email>;
  city?: Maybe<DealerApplicationsFields_City>;
  message?: Maybe<DealerApplicationsFields_Message>;
  status?: Maybe<DealerApplicationsFields_Status>;
  updatedAt?: Maybe<DealerApplicationsFields_UpdatedAt>;
  createdAt?: Maybe<DealerApplicationsFields_CreatedAt>;
};

export type DealerApplicationsFields_Account = {
  __typename?: 'DealerApplicationsFields_account';
  create?: Maybe<DealerApplicationsFields_Account_Create>;
  read?: Maybe<DealerApplicationsFields_Account_Read>;
  update?: Maybe<DealerApplicationsFields_Account_Update>;
  delete?: Maybe<DealerApplicationsFields_Account_Delete>;
};

export type DealerApplicationsFields_Account_Create = {
  __typename?: 'DealerApplicationsFields_account_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Account_Read = {
  __typename?: 'DealerApplicationsFields_account_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Account_Update = {
  __typename?: 'DealerApplicationsFields_account_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Account_Delete = {
  __typename?: 'DealerApplicationsFields_account_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CompanyName = {
  __typename?: 'DealerApplicationsFields_companyName';
  create?: Maybe<DealerApplicationsFields_CompanyName_Create>;
  read?: Maybe<DealerApplicationsFields_CompanyName_Read>;
  update?: Maybe<DealerApplicationsFields_CompanyName_Update>;
  delete?: Maybe<DealerApplicationsFields_CompanyName_Delete>;
};

export type DealerApplicationsFields_CompanyName_Create = {
  __typename?: 'DealerApplicationsFields_companyName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CompanyName_Read = {
  __typename?: 'DealerApplicationsFields_companyName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CompanyName_Update = {
  __typename?: 'DealerApplicationsFields_companyName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CompanyName_Delete = {
  __typename?: 'DealerApplicationsFields_companyName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_FirstName = {
  __typename?: 'DealerApplicationsFields_firstName';
  create?: Maybe<DealerApplicationsFields_FirstName_Create>;
  read?: Maybe<DealerApplicationsFields_FirstName_Read>;
  update?: Maybe<DealerApplicationsFields_FirstName_Update>;
  delete?: Maybe<DealerApplicationsFields_FirstName_Delete>;
};

export type DealerApplicationsFields_FirstName_Create = {
  __typename?: 'DealerApplicationsFields_firstName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_FirstName_Read = {
  __typename?: 'DealerApplicationsFields_firstName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_FirstName_Update = {
  __typename?: 'DealerApplicationsFields_firstName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_FirstName_Delete = {
  __typename?: 'DealerApplicationsFields_firstName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_LastName = {
  __typename?: 'DealerApplicationsFields_lastName';
  create?: Maybe<DealerApplicationsFields_LastName_Create>;
  read?: Maybe<DealerApplicationsFields_LastName_Read>;
  update?: Maybe<DealerApplicationsFields_LastName_Update>;
  delete?: Maybe<DealerApplicationsFields_LastName_Delete>;
};

export type DealerApplicationsFields_LastName_Create = {
  __typename?: 'DealerApplicationsFields_lastName_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_LastName_Read = {
  __typename?: 'DealerApplicationsFields_lastName_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_LastName_Update = {
  __typename?: 'DealerApplicationsFields_lastName_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_LastName_Delete = {
  __typename?: 'DealerApplicationsFields_lastName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Phone = {
  __typename?: 'DealerApplicationsFields_phone';
  create?: Maybe<DealerApplicationsFields_Phone_Create>;
  read?: Maybe<DealerApplicationsFields_Phone_Read>;
  update?: Maybe<DealerApplicationsFields_Phone_Update>;
  delete?: Maybe<DealerApplicationsFields_Phone_Delete>;
};

export type DealerApplicationsFields_Phone_Create = {
  __typename?: 'DealerApplicationsFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Phone_Read = {
  __typename?: 'DealerApplicationsFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Phone_Update = {
  __typename?: 'DealerApplicationsFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Phone_Delete = {
  __typename?: 'DealerApplicationsFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Email = {
  __typename?: 'DealerApplicationsFields_email';
  create?: Maybe<DealerApplicationsFields_Email_Create>;
  read?: Maybe<DealerApplicationsFields_Email_Read>;
  update?: Maybe<DealerApplicationsFields_Email_Update>;
  delete?: Maybe<DealerApplicationsFields_Email_Delete>;
};

export type DealerApplicationsFields_Email_Create = {
  __typename?: 'DealerApplicationsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Email_Read = {
  __typename?: 'DealerApplicationsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Email_Update = {
  __typename?: 'DealerApplicationsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Email_Delete = {
  __typename?: 'DealerApplicationsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_City = {
  __typename?: 'DealerApplicationsFields_city';
  create?: Maybe<DealerApplicationsFields_City_Create>;
  read?: Maybe<DealerApplicationsFields_City_Read>;
  update?: Maybe<DealerApplicationsFields_City_Update>;
  delete?: Maybe<DealerApplicationsFields_City_Delete>;
};

export type DealerApplicationsFields_City_Create = {
  __typename?: 'DealerApplicationsFields_city_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_City_Read = {
  __typename?: 'DealerApplicationsFields_city_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_City_Update = {
  __typename?: 'DealerApplicationsFields_city_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_City_Delete = {
  __typename?: 'DealerApplicationsFields_city_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Message = {
  __typename?: 'DealerApplicationsFields_message';
  create?: Maybe<DealerApplicationsFields_Message_Create>;
  read?: Maybe<DealerApplicationsFields_Message_Read>;
  update?: Maybe<DealerApplicationsFields_Message_Update>;
  delete?: Maybe<DealerApplicationsFields_Message_Delete>;
};

export type DealerApplicationsFields_Message_Create = {
  __typename?: 'DealerApplicationsFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Message_Read = {
  __typename?: 'DealerApplicationsFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Message_Update = {
  __typename?: 'DealerApplicationsFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Message_Delete = {
  __typename?: 'DealerApplicationsFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Status = {
  __typename?: 'DealerApplicationsFields_status';
  create?: Maybe<DealerApplicationsFields_Status_Create>;
  read?: Maybe<DealerApplicationsFields_Status_Read>;
  update?: Maybe<DealerApplicationsFields_Status_Update>;
  delete?: Maybe<DealerApplicationsFields_Status_Delete>;
};

export type DealerApplicationsFields_Status_Create = {
  __typename?: 'DealerApplicationsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Status_Read = {
  __typename?: 'DealerApplicationsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Status_Update = {
  __typename?: 'DealerApplicationsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_Status_Delete = {
  __typename?: 'DealerApplicationsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_UpdatedAt = {
  __typename?: 'DealerApplicationsFields_updatedAt';
  create?: Maybe<DealerApplicationsFields_UpdatedAt_Create>;
  read?: Maybe<DealerApplicationsFields_UpdatedAt_Read>;
  update?: Maybe<DealerApplicationsFields_UpdatedAt_Update>;
  delete?: Maybe<DealerApplicationsFields_UpdatedAt_Delete>;
};

export type DealerApplicationsFields_UpdatedAt_Create = {
  __typename?: 'DealerApplicationsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_UpdatedAt_Read = {
  __typename?: 'DealerApplicationsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_UpdatedAt_Update = {
  __typename?: 'DealerApplicationsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_UpdatedAt_Delete = {
  __typename?: 'DealerApplicationsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CreatedAt = {
  __typename?: 'DealerApplicationsFields_createdAt';
  create?: Maybe<DealerApplicationsFields_CreatedAt_Create>;
  read?: Maybe<DealerApplicationsFields_CreatedAt_Read>;
  update?: Maybe<DealerApplicationsFields_CreatedAt_Update>;
  delete?: Maybe<DealerApplicationsFields_CreatedAt_Delete>;
};

export type DealerApplicationsFields_CreatedAt_Create = {
  __typename?: 'DealerApplicationsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CreatedAt_Read = {
  __typename?: 'DealerApplicationsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CreatedAt_Update = {
  __typename?: 'DealerApplicationsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsFields_CreatedAt_Delete = {
  __typename?: 'DealerApplicationsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type DealerApplicationsCreateAccess = {
  __typename?: 'DealerApplicationsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsReadAccess = {
  __typename?: 'DealerApplicationsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsUpdateAccess = {
  __typename?: 'DealerApplicationsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type DealerApplicationsDeleteAccess = {
  __typename?: 'DealerApplicationsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesAccess = {
  __typename?: 'currenciesAccess';
  fields?: Maybe<CurrenciesFields>;
  create?: Maybe<CurrenciesCreateAccess>;
  read?: Maybe<CurrenciesReadAccess>;
  update?: Maybe<CurrenciesUpdateAccess>;
  delete?: Maybe<CurrenciesDeleteAccess>;
};

export type CurrenciesFields = {
  __typename?: 'CurrenciesFields';
  name?: Maybe<CurrenciesFields_Name>;
  code?: Maybe<CurrenciesFields_Code>;
  symbol?: Maybe<CurrenciesFields_Symbol>;
  rate?: Maybe<CurrenciesFields_Rate>;
  active?: Maybe<CurrenciesFields_Active>;
  sortOrder?: Maybe<CurrenciesFields_SortOrder>;
  updatedAt?: Maybe<CurrenciesFields_UpdatedAt>;
  createdAt?: Maybe<CurrenciesFields_CreatedAt>;
};

export type CurrenciesFields_Name = {
  __typename?: 'CurrenciesFields_name';
  create?: Maybe<CurrenciesFields_Name_Create>;
  read?: Maybe<CurrenciesFields_Name_Read>;
  update?: Maybe<CurrenciesFields_Name_Update>;
  delete?: Maybe<CurrenciesFields_Name_Delete>;
};

export type CurrenciesFields_Name_Create = {
  __typename?: 'CurrenciesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Name_Read = {
  __typename?: 'CurrenciesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Name_Update = {
  __typename?: 'CurrenciesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Name_Delete = {
  __typename?: 'CurrenciesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Code = {
  __typename?: 'CurrenciesFields_code';
  create?: Maybe<CurrenciesFields_Code_Create>;
  read?: Maybe<CurrenciesFields_Code_Read>;
  update?: Maybe<CurrenciesFields_Code_Update>;
  delete?: Maybe<CurrenciesFields_Code_Delete>;
};

export type CurrenciesFields_Code_Create = {
  __typename?: 'CurrenciesFields_code_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Code_Read = {
  __typename?: 'CurrenciesFields_code_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Code_Update = {
  __typename?: 'CurrenciesFields_code_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Code_Delete = {
  __typename?: 'CurrenciesFields_code_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Symbol = {
  __typename?: 'CurrenciesFields_symbol';
  create?: Maybe<CurrenciesFields_Symbol_Create>;
  read?: Maybe<CurrenciesFields_Symbol_Read>;
  update?: Maybe<CurrenciesFields_Symbol_Update>;
  delete?: Maybe<CurrenciesFields_Symbol_Delete>;
};

export type CurrenciesFields_Symbol_Create = {
  __typename?: 'CurrenciesFields_symbol_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Symbol_Read = {
  __typename?: 'CurrenciesFields_symbol_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Symbol_Update = {
  __typename?: 'CurrenciesFields_symbol_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Symbol_Delete = {
  __typename?: 'CurrenciesFields_symbol_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Rate = {
  __typename?: 'CurrenciesFields_rate';
  create?: Maybe<CurrenciesFields_Rate_Create>;
  read?: Maybe<CurrenciesFields_Rate_Read>;
  update?: Maybe<CurrenciesFields_Rate_Update>;
  delete?: Maybe<CurrenciesFields_Rate_Delete>;
};

export type CurrenciesFields_Rate_Create = {
  __typename?: 'CurrenciesFields_rate_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Rate_Read = {
  __typename?: 'CurrenciesFields_rate_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Rate_Update = {
  __typename?: 'CurrenciesFields_rate_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Rate_Delete = {
  __typename?: 'CurrenciesFields_rate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Active = {
  __typename?: 'CurrenciesFields_active';
  create?: Maybe<CurrenciesFields_Active_Create>;
  read?: Maybe<CurrenciesFields_Active_Read>;
  update?: Maybe<CurrenciesFields_Active_Update>;
  delete?: Maybe<CurrenciesFields_Active_Delete>;
};

export type CurrenciesFields_Active_Create = {
  __typename?: 'CurrenciesFields_active_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Active_Read = {
  __typename?: 'CurrenciesFields_active_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Active_Update = {
  __typename?: 'CurrenciesFields_active_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_Active_Delete = {
  __typename?: 'CurrenciesFields_active_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_SortOrder = {
  __typename?: 'CurrenciesFields_sortOrder';
  create?: Maybe<CurrenciesFields_SortOrder_Create>;
  read?: Maybe<CurrenciesFields_SortOrder_Read>;
  update?: Maybe<CurrenciesFields_SortOrder_Update>;
  delete?: Maybe<CurrenciesFields_SortOrder_Delete>;
};

export type CurrenciesFields_SortOrder_Create = {
  __typename?: 'CurrenciesFields_sortOrder_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_SortOrder_Read = {
  __typename?: 'CurrenciesFields_sortOrder_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_SortOrder_Update = {
  __typename?: 'CurrenciesFields_sortOrder_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_SortOrder_Delete = {
  __typename?: 'CurrenciesFields_sortOrder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_UpdatedAt = {
  __typename?: 'CurrenciesFields_updatedAt';
  create?: Maybe<CurrenciesFields_UpdatedAt_Create>;
  read?: Maybe<CurrenciesFields_UpdatedAt_Read>;
  update?: Maybe<CurrenciesFields_UpdatedAt_Update>;
  delete?: Maybe<CurrenciesFields_UpdatedAt_Delete>;
};

export type CurrenciesFields_UpdatedAt_Create = {
  __typename?: 'CurrenciesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_UpdatedAt_Read = {
  __typename?: 'CurrenciesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_UpdatedAt_Update = {
  __typename?: 'CurrenciesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_UpdatedAt_Delete = {
  __typename?: 'CurrenciesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_CreatedAt = {
  __typename?: 'CurrenciesFields_createdAt';
  create?: Maybe<CurrenciesFields_CreatedAt_Create>;
  read?: Maybe<CurrenciesFields_CreatedAt_Read>;
  update?: Maybe<CurrenciesFields_CreatedAt_Update>;
  delete?: Maybe<CurrenciesFields_CreatedAt_Delete>;
};

export type CurrenciesFields_CreatedAt_Create = {
  __typename?: 'CurrenciesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_CreatedAt_Read = {
  __typename?: 'CurrenciesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_CreatedAt_Update = {
  __typename?: 'CurrenciesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesFields_CreatedAt_Delete = {
  __typename?: 'CurrenciesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CurrenciesCreateAccess = {
  __typename?: 'CurrenciesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesReadAccess = {
  __typename?: 'CurrenciesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesUpdateAccess = {
  __typename?: 'CurrenciesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CurrenciesDeleteAccess = {
  __typename?: 'CurrenciesDeleteAccess';
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

export type HomeAccess = {
  __typename?: 'homeAccess';
  fields?: Maybe<HomeFields>;
  read?: Maybe<HomeReadAccess>;
  update?: Maybe<HomeUpdateAccess>;
};

export type HomeFields = {
  __typename?: 'HomeFields';
  hero?: Maybe<HomeFields_Hero>;
  howItWork?: Maybe<HomeFields_HowItWork>;
  beforeAfter?: Maybe<HomeFields_BeforeAfter>;
  modelComparison?: Maybe<HomeFields_ModelComparison>;
  certificatesSection?: Maybe<HomeFields_CertificatesSection>;
  trainingSection?: Maybe<HomeFields_TrainingSection>;
  reviewsSection?: Maybe<HomeFields_ReviewsSection>;
  faqSection?: Maybe<HomeFields_FaqSection>;
  updatedAt?: Maybe<HomeFields_UpdatedAt>;
  createdAt?: Maybe<HomeFields_CreatedAt>;
};

export type HomeFields_Hero = {
  __typename?: 'HomeFields_hero';
  create?: Maybe<HomeFields_Hero_Create>;
  read?: Maybe<HomeFields_Hero_Read>;
  update?: Maybe<HomeFields_Hero_Update>;
  delete?: Maybe<HomeFields_Hero_Delete>;
  fields?: Maybe<HomeFields_Hero_Fields>;
};

export type HomeFields_Hero_Create = {
  __typename?: 'HomeFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Read = {
  __typename?: 'HomeFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Update = {
  __typename?: 'HomeFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Delete = {
  __typename?: 'HomeFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Fields = {
  __typename?: 'HomeFields_hero_Fields';
  title?: Maybe<HomeFields_Hero_Title>;
  description?: Maybe<HomeFields_Hero_Description>;
  image?: Maybe<HomeFields_Hero_Image>;
};

export type HomeFields_Hero_Title = {
  __typename?: 'HomeFields_hero_title';
  create?: Maybe<HomeFields_Hero_Title_Create>;
  read?: Maybe<HomeFields_Hero_Title_Read>;
  update?: Maybe<HomeFields_Hero_Title_Update>;
  delete?: Maybe<HomeFields_Hero_Title_Delete>;
};

export type HomeFields_Hero_Title_Create = {
  __typename?: 'HomeFields_hero_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Title_Read = {
  __typename?: 'HomeFields_hero_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Title_Update = {
  __typename?: 'HomeFields_hero_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Title_Delete = {
  __typename?: 'HomeFields_hero_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Description = {
  __typename?: 'HomeFields_hero_description';
  create?: Maybe<HomeFields_Hero_Description_Create>;
  read?: Maybe<HomeFields_Hero_Description_Read>;
  update?: Maybe<HomeFields_Hero_Description_Update>;
  delete?: Maybe<HomeFields_Hero_Description_Delete>;
};

export type HomeFields_Hero_Description_Create = {
  __typename?: 'HomeFields_hero_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Description_Read = {
  __typename?: 'HomeFields_hero_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Description_Update = {
  __typename?: 'HomeFields_hero_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Description_Delete = {
  __typename?: 'HomeFields_hero_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Image = {
  __typename?: 'HomeFields_hero_image';
  create?: Maybe<HomeFields_Hero_Image_Create>;
  read?: Maybe<HomeFields_Hero_Image_Read>;
  update?: Maybe<HomeFields_Hero_Image_Update>;
  delete?: Maybe<HomeFields_Hero_Image_Delete>;
};

export type HomeFields_Hero_Image_Create = {
  __typename?: 'HomeFields_hero_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Image_Read = {
  __typename?: 'HomeFields_hero_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Image_Update = {
  __typename?: 'HomeFields_hero_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_Hero_Image_Delete = {
  __typename?: 'HomeFields_hero_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork = {
  __typename?: 'HomeFields_howItWork';
  create?: Maybe<HomeFields_HowItWork_Create>;
  read?: Maybe<HomeFields_HowItWork_Read>;
  update?: Maybe<HomeFields_HowItWork_Update>;
  delete?: Maybe<HomeFields_HowItWork_Delete>;
  fields?: Maybe<HomeFields_HowItWork_Fields>;
};

export type HomeFields_HowItWork_Create = {
  __typename?: 'HomeFields_howItWork_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Read = {
  __typename?: 'HomeFields_howItWork_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Update = {
  __typename?: 'HomeFields_howItWork_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Delete = {
  __typename?: 'HomeFields_howItWork_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Fields = {
  __typename?: 'HomeFields_howItWork_Fields';
  title?: Maybe<HomeFields_HowItWork_Title>;
  subtitle?: Maybe<HomeFields_HowItWork_Subtitle>;
  cards?: Maybe<HomeFields_HowItWork_Cards>;
};

export type HomeFields_HowItWork_Title = {
  __typename?: 'HomeFields_howItWork_title';
  create?: Maybe<HomeFields_HowItWork_Title_Create>;
  read?: Maybe<HomeFields_HowItWork_Title_Read>;
  update?: Maybe<HomeFields_HowItWork_Title_Update>;
  delete?: Maybe<HomeFields_HowItWork_Title_Delete>;
};

export type HomeFields_HowItWork_Title_Create = {
  __typename?: 'HomeFields_howItWork_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Title_Read = {
  __typename?: 'HomeFields_howItWork_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Title_Update = {
  __typename?: 'HomeFields_howItWork_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Title_Delete = {
  __typename?: 'HomeFields_howItWork_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Subtitle = {
  __typename?: 'HomeFields_howItWork_subtitle';
  create?: Maybe<HomeFields_HowItWork_Subtitle_Create>;
  read?: Maybe<HomeFields_HowItWork_Subtitle_Read>;
  update?: Maybe<HomeFields_HowItWork_Subtitle_Update>;
  delete?: Maybe<HomeFields_HowItWork_Subtitle_Delete>;
};

export type HomeFields_HowItWork_Subtitle_Create = {
  __typename?: 'HomeFields_howItWork_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Subtitle_Read = {
  __typename?: 'HomeFields_howItWork_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Subtitle_Update = {
  __typename?: 'HomeFields_howItWork_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Subtitle_Delete = {
  __typename?: 'HomeFields_howItWork_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards = {
  __typename?: 'HomeFields_howItWork_cards';
  create?: Maybe<HomeFields_HowItWork_Cards_Create>;
  read?: Maybe<HomeFields_HowItWork_Cards_Read>;
  update?: Maybe<HomeFields_HowItWork_Cards_Update>;
  delete?: Maybe<HomeFields_HowItWork_Cards_Delete>;
  fields?: Maybe<HomeFields_HowItWork_Cards_Fields>;
};

export type HomeFields_HowItWork_Cards_Create = {
  __typename?: 'HomeFields_howItWork_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Read = {
  __typename?: 'HomeFields_howItWork_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Update = {
  __typename?: 'HomeFields_howItWork_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Delete = {
  __typename?: 'HomeFields_howItWork_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Fields = {
  __typename?: 'HomeFields_howItWork_cards_Fields';
  icon?: Maybe<HomeFields_HowItWork_Cards_Icon>;
  title?: Maybe<HomeFields_HowItWork_Cards_Title>;
  description?: Maybe<HomeFields_HowItWork_Cards_Description>;
  id?: Maybe<HomeFields_HowItWork_Cards_Id>;
};

export type HomeFields_HowItWork_Cards_Icon = {
  __typename?: 'HomeFields_howItWork_cards_icon';
  create?: Maybe<HomeFields_HowItWork_Cards_Icon_Create>;
  read?: Maybe<HomeFields_HowItWork_Cards_Icon_Read>;
  update?: Maybe<HomeFields_HowItWork_Cards_Icon_Update>;
  delete?: Maybe<HomeFields_HowItWork_Cards_Icon_Delete>;
};

export type HomeFields_HowItWork_Cards_Icon_Create = {
  __typename?: 'HomeFields_howItWork_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Icon_Read = {
  __typename?: 'HomeFields_howItWork_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Icon_Update = {
  __typename?: 'HomeFields_howItWork_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Icon_Delete = {
  __typename?: 'HomeFields_howItWork_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Title = {
  __typename?: 'HomeFields_howItWork_cards_title';
  create?: Maybe<HomeFields_HowItWork_Cards_Title_Create>;
  read?: Maybe<HomeFields_HowItWork_Cards_Title_Read>;
  update?: Maybe<HomeFields_HowItWork_Cards_Title_Update>;
  delete?: Maybe<HomeFields_HowItWork_Cards_Title_Delete>;
};

export type HomeFields_HowItWork_Cards_Title_Create = {
  __typename?: 'HomeFields_howItWork_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Title_Read = {
  __typename?: 'HomeFields_howItWork_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Title_Update = {
  __typename?: 'HomeFields_howItWork_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Title_Delete = {
  __typename?: 'HomeFields_howItWork_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Description = {
  __typename?: 'HomeFields_howItWork_cards_description';
  create?: Maybe<HomeFields_HowItWork_Cards_Description_Create>;
  read?: Maybe<HomeFields_HowItWork_Cards_Description_Read>;
  update?: Maybe<HomeFields_HowItWork_Cards_Description_Update>;
  delete?: Maybe<HomeFields_HowItWork_Cards_Description_Delete>;
};

export type HomeFields_HowItWork_Cards_Description_Create = {
  __typename?: 'HomeFields_howItWork_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Description_Read = {
  __typename?: 'HomeFields_howItWork_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Description_Update = {
  __typename?: 'HomeFields_howItWork_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Description_Delete = {
  __typename?: 'HomeFields_howItWork_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Id = {
  __typename?: 'HomeFields_howItWork_cards_id';
  create?: Maybe<HomeFields_HowItWork_Cards_Id_Create>;
  read?: Maybe<HomeFields_HowItWork_Cards_Id_Read>;
  update?: Maybe<HomeFields_HowItWork_Cards_Id_Update>;
  delete?: Maybe<HomeFields_HowItWork_Cards_Id_Delete>;
};

export type HomeFields_HowItWork_Cards_Id_Create = {
  __typename?: 'HomeFields_howItWork_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Id_Read = {
  __typename?: 'HomeFields_howItWork_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Id_Update = {
  __typename?: 'HomeFields_howItWork_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_HowItWork_Cards_Id_Delete = {
  __typename?: 'HomeFields_howItWork_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter = {
  __typename?: 'HomeFields_beforeAfter';
  create?: Maybe<HomeFields_BeforeAfter_Create>;
  read?: Maybe<HomeFields_BeforeAfter_Read>;
  update?: Maybe<HomeFields_BeforeAfter_Update>;
  delete?: Maybe<HomeFields_BeforeAfter_Delete>;
  fields?: Maybe<HomeFields_BeforeAfter_Fields>;
};

export type HomeFields_BeforeAfter_Create = {
  __typename?: 'HomeFields_beforeAfter_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Read = {
  __typename?: 'HomeFields_beforeAfter_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Update = {
  __typename?: 'HomeFields_beforeAfter_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Delete = {
  __typename?: 'HomeFields_beforeAfter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Fields = {
  __typename?: 'HomeFields_beforeAfter_Fields';
  before?: Maybe<HomeFields_BeforeAfter_Before>;
  after?: Maybe<HomeFields_BeforeAfter_After>;
  id?: Maybe<HomeFields_BeforeAfter_Id>;
};

export type HomeFields_BeforeAfter_Before = {
  __typename?: 'HomeFields_beforeAfter_before';
  create?: Maybe<HomeFields_BeforeAfter_Before_Create>;
  read?: Maybe<HomeFields_BeforeAfter_Before_Read>;
  update?: Maybe<HomeFields_BeforeAfter_Before_Update>;
  delete?: Maybe<HomeFields_BeforeAfter_Before_Delete>;
};

export type HomeFields_BeforeAfter_Before_Create = {
  __typename?: 'HomeFields_beforeAfter_before_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Before_Read = {
  __typename?: 'HomeFields_beforeAfter_before_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Before_Update = {
  __typename?: 'HomeFields_beforeAfter_before_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Before_Delete = {
  __typename?: 'HomeFields_beforeAfter_before_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_After = {
  __typename?: 'HomeFields_beforeAfter_after';
  create?: Maybe<HomeFields_BeforeAfter_After_Create>;
  read?: Maybe<HomeFields_BeforeAfter_After_Read>;
  update?: Maybe<HomeFields_BeforeAfter_After_Update>;
  delete?: Maybe<HomeFields_BeforeAfter_After_Delete>;
};

export type HomeFields_BeforeAfter_After_Create = {
  __typename?: 'HomeFields_beforeAfter_after_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_After_Read = {
  __typename?: 'HomeFields_beforeAfter_after_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_After_Update = {
  __typename?: 'HomeFields_beforeAfter_after_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_After_Delete = {
  __typename?: 'HomeFields_beforeAfter_after_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Id = {
  __typename?: 'HomeFields_beforeAfter_id';
  create?: Maybe<HomeFields_BeforeAfter_Id_Create>;
  read?: Maybe<HomeFields_BeforeAfter_Id_Read>;
  update?: Maybe<HomeFields_BeforeAfter_Id_Update>;
  delete?: Maybe<HomeFields_BeforeAfter_Id_Delete>;
};

export type HomeFields_BeforeAfter_Id_Create = {
  __typename?: 'HomeFields_beforeAfter_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Id_Read = {
  __typename?: 'HomeFields_beforeAfter_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Id_Update = {
  __typename?: 'HomeFields_beforeAfter_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_BeforeAfter_Id_Delete = {
  __typename?: 'HomeFields_beforeAfter_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison = {
  __typename?: 'HomeFields_modelComparison';
  create?: Maybe<HomeFields_ModelComparison_Create>;
  read?: Maybe<HomeFields_ModelComparison_Read>;
  update?: Maybe<HomeFields_ModelComparison_Update>;
  delete?: Maybe<HomeFields_ModelComparison_Delete>;
  fields?: Maybe<HomeFields_ModelComparison_Fields>;
};

export type HomeFields_ModelComparison_Create = {
  __typename?: 'HomeFields_modelComparison_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Read = {
  __typename?: 'HomeFields_modelComparison_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Update = {
  __typename?: 'HomeFields_modelComparison_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Delete = {
  __typename?: 'HomeFields_modelComparison_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Fields = {
  __typename?: 'HomeFields_modelComparison_Fields';
  title?: Maybe<HomeFields_ModelComparison_Title>;
  subtitle?: Maybe<HomeFields_ModelComparison_Subtitle>;
  products?: Maybe<HomeFields_ModelComparison_Products>;
};

export type HomeFields_ModelComparison_Title = {
  __typename?: 'HomeFields_modelComparison_title';
  create?: Maybe<HomeFields_ModelComparison_Title_Create>;
  read?: Maybe<HomeFields_ModelComparison_Title_Read>;
  update?: Maybe<HomeFields_ModelComparison_Title_Update>;
  delete?: Maybe<HomeFields_ModelComparison_Title_Delete>;
};

export type HomeFields_ModelComparison_Title_Create = {
  __typename?: 'HomeFields_modelComparison_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Title_Read = {
  __typename?: 'HomeFields_modelComparison_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Title_Update = {
  __typename?: 'HomeFields_modelComparison_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Title_Delete = {
  __typename?: 'HomeFields_modelComparison_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Subtitle = {
  __typename?: 'HomeFields_modelComparison_subtitle';
  create?: Maybe<HomeFields_ModelComparison_Subtitle_Create>;
  read?: Maybe<HomeFields_ModelComparison_Subtitle_Read>;
  update?: Maybe<HomeFields_ModelComparison_Subtitle_Update>;
  delete?: Maybe<HomeFields_ModelComparison_Subtitle_Delete>;
};

export type HomeFields_ModelComparison_Subtitle_Create = {
  __typename?: 'HomeFields_modelComparison_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Subtitle_Read = {
  __typename?: 'HomeFields_modelComparison_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Subtitle_Update = {
  __typename?: 'HomeFields_modelComparison_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Subtitle_Delete = {
  __typename?: 'HomeFields_modelComparison_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Products = {
  __typename?: 'HomeFields_modelComparison_products';
  create?: Maybe<HomeFields_ModelComparison_Products_Create>;
  read?: Maybe<HomeFields_ModelComparison_Products_Read>;
  update?: Maybe<HomeFields_ModelComparison_Products_Update>;
  delete?: Maybe<HomeFields_ModelComparison_Products_Delete>;
};

export type HomeFields_ModelComparison_Products_Create = {
  __typename?: 'HomeFields_modelComparison_products_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Products_Read = {
  __typename?: 'HomeFields_modelComparison_products_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Products_Update = {
  __typename?: 'HomeFields_modelComparison_products_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ModelComparison_Products_Delete = {
  __typename?: 'HomeFields_modelComparison_products_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection = {
  __typename?: 'HomeFields_certificatesSection';
  create?: Maybe<HomeFields_CertificatesSection_Create>;
  read?: Maybe<HomeFields_CertificatesSection_Read>;
  update?: Maybe<HomeFields_CertificatesSection_Update>;
  delete?: Maybe<HomeFields_CertificatesSection_Delete>;
  fields?: Maybe<HomeFields_CertificatesSection_Fields>;
};

export type HomeFields_CertificatesSection_Create = {
  __typename?: 'HomeFields_certificatesSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Read = {
  __typename?: 'HomeFields_certificatesSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Update = {
  __typename?: 'HomeFields_certificatesSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Delete = {
  __typename?: 'HomeFields_certificatesSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Fields = {
  __typename?: 'HomeFields_certificatesSection_Fields';
  title?: Maybe<HomeFields_CertificatesSection_Title>;
  subtitle?: Maybe<HomeFields_CertificatesSection_Subtitle>;
  certificates?: Maybe<HomeFields_CertificatesSection_Certificates>;
};

export type HomeFields_CertificatesSection_Title = {
  __typename?: 'HomeFields_certificatesSection_title';
  create?: Maybe<HomeFields_CertificatesSection_Title_Create>;
  read?: Maybe<HomeFields_CertificatesSection_Title_Read>;
  update?: Maybe<HomeFields_CertificatesSection_Title_Update>;
  delete?: Maybe<HomeFields_CertificatesSection_Title_Delete>;
};

export type HomeFields_CertificatesSection_Title_Create = {
  __typename?: 'HomeFields_certificatesSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Title_Read = {
  __typename?: 'HomeFields_certificatesSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Title_Update = {
  __typename?: 'HomeFields_certificatesSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Title_Delete = {
  __typename?: 'HomeFields_certificatesSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Subtitle = {
  __typename?: 'HomeFields_certificatesSection_subtitle';
  create?: Maybe<HomeFields_CertificatesSection_Subtitle_Create>;
  read?: Maybe<HomeFields_CertificatesSection_Subtitle_Read>;
  update?: Maybe<HomeFields_CertificatesSection_Subtitle_Update>;
  delete?: Maybe<HomeFields_CertificatesSection_Subtitle_Delete>;
};

export type HomeFields_CertificatesSection_Subtitle_Create = {
  __typename?: 'HomeFields_certificatesSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Subtitle_Read = {
  __typename?: 'HomeFields_certificatesSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Subtitle_Update = {
  __typename?: 'HomeFields_certificatesSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Subtitle_Delete = {
  __typename?: 'HomeFields_certificatesSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Certificates = {
  __typename?: 'HomeFields_certificatesSection_certificates';
  create?: Maybe<HomeFields_CertificatesSection_Certificates_Create>;
  read?: Maybe<HomeFields_CertificatesSection_Certificates_Read>;
  update?: Maybe<HomeFields_CertificatesSection_Certificates_Update>;
  delete?: Maybe<HomeFields_CertificatesSection_Certificates_Delete>;
};

export type HomeFields_CertificatesSection_Certificates_Create = {
  __typename?: 'HomeFields_certificatesSection_certificates_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Certificates_Read = {
  __typename?: 'HomeFields_certificatesSection_certificates_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Certificates_Update = {
  __typename?: 'HomeFields_certificatesSection_certificates_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CertificatesSection_Certificates_Delete = {
  __typename?: 'HomeFields_certificatesSection_certificates_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection = {
  __typename?: 'HomeFields_trainingSection';
  create?: Maybe<HomeFields_TrainingSection_Create>;
  read?: Maybe<HomeFields_TrainingSection_Read>;
  update?: Maybe<HomeFields_TrainingSection_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Delete>;
  fields?: Maybe<HomeFields_TrainingSection_Fields>;
};

export type HomeFields_TrainingSection_Create = {
  __typename?: 'HomeFields_trainingSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Read = {
  __typename?: 'HomeFields_trainingSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Update = {
  __typename?: 'HomeFields_trainingSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Delete = {
  __typename?: 'HomeFields_trainingSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Fields = {
  __typename?: 'HomeFields_trainingSection_Fields';
  title?: Maybe<HomeFields_TrainingSection_Title>;
  subtitle?: Maybe<HomeFields_TrainingSection_Subtitle>;
  video?: Maybe<HomeFields_TrainingSection_Video>;
  cards?: Maybe<HomeFields_TrainingSection_Cards>;
};

export type HomeFields_TrainingSection_Title = {
  __typename?: 'HomeFields_trainingSection_title';
  create?: Maybe<HomeFields_TrainingSection_Title_Create>;
  read?: Maybe<HomeFields_TrainingSection_Title_Read>;
  update?: Maybe<HomeFields_TrainingSection_Title_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Title_Delete>;
};

export type HomeFields_TrainingSection_Title_Create = {
  __typename?: 'HomeFields_trainingSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Title_Read = {
  __typename?: 'HomeFields_trainingSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Title_Update = {
  __typename?: 'HomeFields_trainingSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Title_Delete = {
  __typename?: 'HomeFields_trainingSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Subtitle = {
  __typename?: 'HomeFields_trainingSection_subtitle';
  create?: Maybe<HomeFields_TrainingSection_Subtitle_Create>;
  read?: Maybe<HomeFields_TrainingSection_Subtitle_Read>;
  update?: Maybe<HomeFields_TrainingSection_Subtitle_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Subtitle_Delete>;
};

export type HomeFields_TrainingSection_Subtitle_Create = {
  __typename?: 'HomeFields_trainingSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Subtitle_Read = {
  __typename?: 'HomeFields_trainingSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Subtitle_Update = {
  __typename?: 'HomeFields_trainingSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Subtitle_Delete = {
  __typename?: 'HomeFields_trainingSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video = {
  __typename?: 'HomeFields_trainingSection_video';
  create?: Maybe<HomeFields_TrainingSection_Video_Create>;
  read?: Maybe<HomeFields_TrainingSection_Video_Read>;
  update?: Maybe<HomeFields_TrainingSection_Video_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Video_Delete>;
  fields?: Maybe<HomeFields_TrainingSection_Video_Fields>;
};

export type HomeFields_TrainingSection_Video_Create = {
  __typename?: 'HomeFields_trainingSection_video_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Read = {
  __typename?: 'HomeFields_trainingSection_video_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Update = {
  __typename?: 'HomeFields_trainingSection_video_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Delete = {
  __typename?: 'HomeFields_trainingSection_video_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Fields = {
  __typename?: 'HomeFields_trainingSection_video_Fields';
  poster?: Maybe<HomeFields_TrainingSection_Video_Poster>;
  file?: Maybe<HomeFields_TrainingSection_Video_File>;
};

export type HomeFields_TrainingSection_Video_Poster = {
  __typename?: 'HomeFields_trainingSection_video_poster';
  create?: Maybe<HomeFields_TrainingSection_Video_Poster_Create>;
  read?: Maybe<HomeFields_TrainingSection_Video_Poster_Read>;
  update?: Maybe<HomeFields_TrainingSection_Video_Poster_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Video_Poster_Delete>;
};

export type HomeFields_TrainingSection_Video_Poster_Create = {
  __typename?: 'HomeFields_trainingSection_video_poster_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Poster_Read = {
  __typename?: 'HomeFields_trainingSection_video_poster_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Poster_Update = {
  __typename?: 'HomeFields_trainingSection_video_poster_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_Poster_Delete = {
  __typename?: 'HomeFields_trainingSection_video_poster_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_File = {
  __typename?: 'HomeFields_trainingSection_video_file';
  create?: Maybe<HomeFields_TrainingSection_Video_File_Create>;
  read?: Maybe<HomeFields_TrainingSection_Video_File_Read>;
  update?: Maybe<HomeFields_TrainingSection_Video_File_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Video_File_Delete>;
};

export type HomeFields_TrainingSection_Video_File_Create = {
  __typename?: 'HomeFields_trainingSection_video_file_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_File_Read = {
  __typename?: 'HomeFields_trainingSection_video_file_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_File_Update = {
  __typename?: 'HomeFields_trainingSection_video_file_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Video_File_Delete = {
  __typename?: 'HomeFields_trainingSection_video_file_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards = {
  __typename?: 'HomeFields_trainingSection_cards';
  create?: Maybe<HomeFields_TrainingSection_Cards_Create>;
  read?: Maybe<HomeFields_TrainingSection_Cards_Read>;
  update?: Maybe<HomeFields_TrainingSection_Cards_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Cards_Delete>;
  fields?: Maybe<HomeFields_TrainingSection_Cards_Fields>;
};

export type HomeFields_TrainingSection_Cards_Create = {
  __typename?: 'HomeFields_trainingSection_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Read = {
  __typename?: 'HomeFields_trainingSection_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Update = {
  __typename?: 'HomeFields_trainingSection_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Delete = {
  __typename?: 'HomeFields_trainingSection_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Fields = {
  __typename?: 'HomeFields_trainingSection_cards_Fields';
  icon?: Maybe<HomeFields_TrainingSection_Cards_Icon>;
  title?: Maybe<HomeFields_TrainingSection_Cards_Title>;
  description?: Maybe<HomeFields_TrainingSection_Cards_Description>;
  id?: Maybe<HomeFields_TrainingSection_Cards_Id>;
};

export type HomeFields_TrainingSection_Cards_Icon = {
  __typename?: 'HomeFields_trainingSection_cards_icon';
  create?: Maybe<HomeFields_TrainingSection_Cards_Icon_Create>;
  read?: Maybe<HomeFields_TrainingSection_Cards_Icon_Read>;
  update?: Maybe<HomeFields_TrainingSection_Cards_Icon_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Cards_Icon_Delete>;
};

export type HomeFields_TrainingSection_Cards_Icon_Create = {
  __typename?: 'HomeFields_trainingSection_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Icon_Read = {
  __typename?: 'HomeFields_trainingSection_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Icon_Update = {
  __typename?: 'HomeFields_trainingSection_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Icon_Delete = {
  __typename?: 'HomeFields_trainingSection_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Title = {
  __typename?: 'HomeFields_trainingSection_cards_title';
  create?: Maybe<HomeFields_TrainingSection_Cards_Title_Create>;
  read?: Maybe<HomeFields_TrainingSection_Cards_Title_Read>;
  update?: Maybe<HomeFields_TrainingSection_Cards_Title_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Cards_Title_Delete>;
};

export type HomeFields_TrainingSection_Cards_Title_Create = {
  __typename?: 'HomeFields_trainingSection_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Title_Read = {
  __typename?: 'HomeFields_trainingSection_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Title_Update = {
  __typename?: 'HomeFields_trainingSection_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Title_Delete = {
  __typename?: 'HomeFields_trainingSection_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Description = {
  __typename?: 'HomeFields_trainingSection_cards_description';
  create?: Maybe<HomeFields_TrainingSection_Cards_Description_Create>;
  read?: Maybe<HomeFields_TrainingSection_Cards_Description_Read>;
  update?: Maybe<HomeFields_TrainingSection_Cards_Description_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Cards_Description_Delete>;
};

export type HomeFields_TrainingSection_Cards_Description_Create = {
  __typename?: 'HomeFields_trainingSection_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Description_Read = {
  __typename?: 'HomeFields_trainingSection_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Description_Update = {
  __typename?: 'HomeFields_trainingSection_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Description_Delete = {
  __typename?: 'HomeFields_trainingSection_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Id = {
  __typename?: 'HomeFields_trainingSection_cards_id';
  create?: Maybe<HomeFields_TrainingSection_Cards_Id_Create>;
  read?: Maybe<HomeFields_TrainingSection_Cards_Id_Read>;
  update?: Maybe<HomeFields_TrainingSection_Cards_Id_Update>;
  delete?: Maybe<HomeFields_TrainingSection_Cards_Id_Delete>;
};

export type HomeFields_TrainingSection_Cards_Id_Create = {
  __typename?: 'HomeFields_trainingSection_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Id_Read = {
  __typename?: 'HomeFields_trainingSection_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Id_Update = {
  __typename?: 'HomeFields_trainingSection_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_TrainingSection_Cards_Id_Delete = {
  __typename?: 'HomeFields_trainingSection_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection = {
  __typename?: 'HomeFields_reviewsSection';
  create?: Maybe<HomeFields_ReviewsSection_Create>;
  read?: Maybe<HomeFields_ReviewsSection_Read>;
  update?: Maybe<HomeFields_ReviewsSection_Update>;
  delete?: Maybe<HomeFields_ReviewsSection_Delete>;
  fields?: Maybe<HomeFields_ReviewsSection_Fields>;
};

export type HomeFields_ReviewsSection_Create = {
  __typename?: 'HomeFields_reviewsSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Read = {
  __typename?: 'HomeFields_reviewsSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Update = {
  __typename?: 'HomeFields_reviewsSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Delete = {
  __typename?: 'HomeFields_reviewsSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Fields = {
  __typename?: 'HomeFields_reviewsSection_Fields';
  title?: Maybe<HomeFields_ReviewsSection_Title>;
  subtitle?: Maybe<HomeFields_ReviewsSection_Subtitle>;
  reviews?: Maybe<HomeFields_ReviewsSection_Reviews>;
};

export type HomeFields_ReviewsSection_Title = {
  __typename?: 'HomeFields_reviewsSection_title';
  create?: Maybe<HomeFields_ReviewsSection_Title_Create>;
  read?: Maybe<HomeFields_ReviewsSection_Title_Read>;
  update?: Maybe<HomeFields_ReviewsSection_Title_Update>;
  delete?: Maybe<HomeFields_ReviewsSection_Title_Delete>;
};

export type HomeFields_ReviewsSection_Title_Create = {
  __typename?: 'HomeFields_reviewsSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Title_Read = {
  __typename?: 'HomeFields_reviewsSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Title_Update = {
  __typename?: 'HomeFields_reviewsSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Title_Delete = {
  __typename?: 'HomeFields_reviewsSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Subtitle = {
  __typename?: 'HomeFields_reviewsSection_subtitle';
  create?: Maybe<HomeFields_ReviewsSection_Subtitle_Create>;
  read?: Maybe<HomeFields_ReviewsSection_Subtitle_Read>;
  update?: Maybe<HomeFields_ReviewsSection_Subtitle_Update>;
  delete?: Maybe<HomeFields_ReviewsSection_Subtitle_Delete>;
};

export type HomeFields_ReviewsSection_Subtitle_Create = {
  __typename?: 'HomeFields_reviewsSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Subtitle_Read = {
  __typename?: 'HomeFields_reviewsSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Subtitle_Update = {
  __typename?: 'HomeFields_reviewsSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Subtitle_Delete = {
  __typename?: 'HomeFields_reviewsSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Reviews = {
  __typename?: 'HomeFields_reviewsSection_reviews';
  create?: Maybe<HomeFields_ReviewsSection_Reviews_Create>;
  read?: Maybe<HomeFields_ReviewsSection_Reviews_Read>;
  update?: Maybe<HomeFields_ReviewsSection_Reviews_Update>;
  delete?: Maybe<HomeFields_ReviewsSection_Reviews_Delete>;
};

export type HomeFields_ReviewsSection_Reviews_Create = {
  __typename?: 'HomeFields_reviewsSection_reviews_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Reviews_Read = {
  __typename?: 'HomeFields_reviewsSection_reviews_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Reviews_Update = {
  __typename?: 'HomeFields_reviewsSection_reviews_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_ReviewsSection_Reviews_Delete = {
  __typename?: 'HomeFields_reviewsSection_reviews_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection = {
  __typename?: 'HomeFields_faqSection';
  create?: Maybe<HomeFields_FaqSection_Create>;
  read?: Maybe<HomeFields_FaqSection_Read>;
  update?: Maybe<HomeFields_FaqSection_Update>;
  delete?: Maybe<HomeFields_FaqSection_Delete>;
  fields?: Maybe<HomeFields_FaqSection_Fields>;
};

export type HomeFields_FaqSection_Create = {
  __typename?: 'HomeFields_faqSection_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Read = {
  __typename?: 'HomeFields_faqSection_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Update = {
  __typename?: 'HomeFields_faqSection_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Delete = {
  __typename?: 'HomeFields_faqSection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Fields = {
  __typename?: 'HomeFields_faqSection_Fields';
  title?: Maybe<HomeFields_FaqSection_Title>;
  subtitle?: Maybe<HomeFields_FaqSection_Subtitle>;
  items?: Maybe<HomeFields_FaqSection_Items>;
};

export type HomeFields_FaqSection_Title = {
  __typename?: 'HomeFields_faqSection_title';
  create?: Maybe<HomeFields_FaqSection_Title_Create>;
  read?: Maybe<HomeFields_FaqSection_Title_Read>;
  update?: Maybe<HomeFields_FaqSection_Title_Update>;
  delete?: Maybe<HomeFields_FaqSection_Title_Delete>;
};

export type HomeFields_FaqSection_Title_Create = {
  __typename?: 'HomeFields_faqSection_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Title_Read = {
  __typename?: 'HomeFields_faqSection_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Title_Update = {
  __typename?: 'HomeFields_faqSection_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Title_Delete = {
  __typename?: 'HomeFields_faqSection_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Subtitle = {
  __typename?: 'HomeFields_faqSection_subtitle';
  create?: Maybe<HomeFields_FaqSection_Subtitle_Create>;
  read?: Maybe<HomeFields_FaqSection_Subtitle_Read>;
  update?: Maybe<HomeFields_FaqSection_Subtitle_Update>;
  delete?: Maybe<HomeFields_FaqSection_Subtitle_Delete>;
};

export type HomeFields_FaqSection_Subtitle_Create = {
  __typename?: 'HomeFields_faqSection_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Subtitle_Read = {
  __typename?: 'HomeFields_faqSection_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Subtitle_Update = {
  __typename?: 'HomeFields_faqSection_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Subtitle_Delete = {
  __typename?: 'HomeFields_faqSection_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items = {
  __typename?: 'HomeFields_faqSection_items';
  create?: Maybe<HomeFields_FaqSection_Items_Create>;
  read?: Maybe<HomeFields_FaqSection_Items_Read>;
  update?: Maybe<HomeFields_FaqSection_Items_Update>;
  delete?: Maybe<HomeFields_FaqSection_Items_Delete>;
  fields?: Maybe<HomeFields_FaqSection_Items_Fields>;
};

export type HomeFields_FaqSection_Items_Create = {
  __typename?: 'HomeFields_faqSection_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Read = {
  __typename?: 'HomeFields_faqSection_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Update = {
  __typename?: 'HomeFields_faqSection_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Delete = {
  __typename?: 'HomeFields_faqSection_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Fields = {
  __typename?: 'HomeFields_faqSection_items_Fields';
  question?: Maybe<HomeFields_FaqSection_Items_Question>;
  answer?: Maybe<HomeFields_FaqSection_Items_Answer>;
  id?: Maybe<HomeFields_FaqSection_Items_Id>;
};

export type HomeFields_FaqSection_Items_Question = {
  __typename?: 'HomeFields_faqSection_items_question';
  create?: Maybe<HomeFields_FaqSection_Items_Question_Create>;
  read?: Maybe<HomeFields_FaqSection_Items_Question_Read>;
  update?: Maybe<HomeFields_FaqSection_Items_Question_Update>;
  delete?: Maybe<HomeFields_FaqSection_Items_Question_Delete>;
};

export type HomeFields_FaqSection_Items_Question_Create = {
  __typename?: 'HomeFields_faqSection_items_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Question_Read = {
  __typename?: 'HomeFields_faqSection_items_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Question_Update = {
  __typename?: 'HomeFields_faqSection_items_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Question_Delete = {
  __typename?: 'HomeFields_faqSection_items_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Answer = {
  __typename?: 'HomeFields_faqSection_items_answer';
  create?: Maybe<HomeFields_FaqSection_Items_Answer_Create>;
  read?: Maybe<HomeFields_FaqSection_Items_Answer_Read>;
  update?: Maybe<HomeFields_FaqSection_Items_Answer_Update>;
  delete?: Maybe<HomeFields_FaqSection_Items_Answer_Delete>;
};

export type HomeFields_FaqSection_Items_Answer_Create = {
  __typename?: 'HomeFields_faqSection_items_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Answer_Read = {
  __typename?: 'HomeFields_faqSection_items_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Answer_Update = {
  __typename?: 'HomeFields_faqSection_items_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Answer_Delete = {
  __typename?: 'HomeFields_faqSection_items_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Id = {
  __typename?: 'HomeFields_faqSection_items_id';
  create?: Maybe<HomeFields_FaqSection_Items_Id_Create>;
  read?: Maybe<HomeFields_FaqSection_Items_Id_Read>;
  update?: Maybe<HomeFields_FaqSection_Items_Id_Update>;
  delete?: Maybe<HomeFields_FaqSection_Items_Id_Delete>;
};

export type HomeFields_FaqSection_Items_Id_Create = {
  __typename?: 'HomeFields_faqSection_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Id_Read = {
  __typename?: 'HomeFields_faqSection_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Id_Update = {
  __typename?: 'HomeFields_faqSection_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_FaqSection_Items_Id_Delete = {
  __typename?: 'HomeFields_faqSection_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt = {
  __typename?: 'HomeFields_updatedAt';
  create?: Maybe<HomeFields_UpdatedAt_Create>;
  read?: Maybe<HomeFields_UpdatedAt_Read>;
  update?: Maybe<HomeFields_UpdatedAt_Update>;
  delete?: Maybe<HomeFields_UpdatedAt_Delete>;
};

export type HomeFields_UpdatedAt_Create = {
  __typename?: 'HomeFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Read = {
  __typename?: 'HomeFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Update = {
  __typename?: 'HomeFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_UpdatedAt_Delete = {
  __typename?: 'HomeFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt = {
  __typename?: 'HomeFields_createdAt';
  create?: Maybe<HomeFields_CreatedAt_Create>;
  read?: Maybe<HomeFields_CreatedAt_Read>;
  update?: Maybe<HomeFields_CreatedAt_Update>;
  delete?: Maybe<HomeFields_CreatedAt_Delete>;
};

export type HomeFields_CreatedAt_Create = {
  __typename?: 'HomeFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Read = {
  __typename?: 'HomeFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Update = {
  __typename?: 'HomeFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HomeFields_CreatedAt_Delete = {
  __typename?: 'HomeFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HomeReadAccess = {
  __typename?: 'HomeReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HomeUpdateAccess = {
  __typename?: 'HomeUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingAccess = {
  __typename?: 'trainingAccess';
  fields?: Maybe<TrainingFields>;
  read?: Maybe<TrainingReadAccess>;
  update?: Maybe<TrainingUpdateAccess>;
};

export type TrainingFields = {
  __typename?: 'TrainingFields';
  title?: Maybe<TrainingFields_Title>;
  description?: Maybe<TrainingFields_Description>;
  formats?: Maybe<TrainingFields_Formats>;
  videoInstructions?: Maybe<TrainingFields_VideoInstructions>;
  faq?: Maybe<TrainingFields_Faq>;
  updatedAt?: Maybe<TrainingFields_UpdatedAt>;
  createdAt?: Maybe<TrainingFields_CreatedAt>;
};

export type TrainingFields_Title = {
  __typename?: 'TrainingFields_title';
  create?: Maybe<TrainingFields_Title_Create>;
  read?: Maybe<TrainingFields_Title_Read>;
  update?: Maybe<TrainingFields_Title_Update>;
  delete?: Maybe<TrainingFields_Title_Delete>;
};

export type TrainingFields_Title_Create = {
  __typename?: 'TrainingFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Title_Read = {
  __typename?: 'TrainingFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Title_Update = {
  __typename?: 'TrainingFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Title_Delete = {
  __typename?: 'TrainingFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Description = {
  __typename?: 'TrainingFields_description';
  create?: Maybe<TrainingFields_Description_Create>;
  read?: Maybe<TrainingFields_Description_Read>;
  update?: Maybe<TrainingFields_Description_Update>;
  delete?: Maybe<TrainingFields_Description_Delete>;
};

export type TrainingFields_Description_Create = {
  __typename?: 'TrainingFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Description_Read = {
  __typename?: 'TrainingFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Description_Update = {
  __typename?: 'TrainingFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Description_Delete = {
  __typename?: 'TrainingFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats = {
  __typename?: 'TrainingFields_formats';
  create?: Maybe<TrainingFields_Formats_Create>;
  read?: Maybe<TrainingFields_Formats_Read>;
  update?: Maybe<TrainingFields_Formats_Update>;
  delete?: Maybe<TrainingFields_Formats_Delete>;
  fields?: Maybe<TrainingFields_Formats_Fields>;
};

export type TrainingFields_Formats_Create = {
  __typename?: 'TrainingFields_formats_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Read = {
  __typename?: 'TrainingFields_formats_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Update = {
  __typename?: 'TrainingFields_formats_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Delete = {
  __typename?: 'TrainingFields_formats_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Fields = {
  __typename?: 'TrainingFields_formats_Fields';
  title?: Maybe<TrainingFields_Formats_Title>;
  subtitle?: Maybe<TrainingFields_Formats_Subtitle>;
  cards?: Maybe<TrainingFields_Formats_Cards>;
};

export type TrainingFields_Formats_Title = {
  __typename?: 'TrainingFields_formats_title';
  create?: Maybe<TrainingFields_Formats_Title_Create>;
  read?: Maybe<TrainingFields_Formats_Title_Read>;
  update?: Maybe<TrainingFields_Formats_Title_Update>;
  delete?: Maybe<TrainingFields_Formats_Title_Delete>;
};

export type TrainingFields_Formats_Title_Create = {
  __typename?: 'TrainingFields_formats_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Title_Read = {
  __typename?: 'TrainingFields_formats_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Title_Update = {
  __typename?: 'TrainingFields_formats_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Title_Delete = {
  __typename?: 'TrainingFields_formats_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Subtitle = {
  __typename?: 'TrainingFields_formats_subtitle';
  create?: Maybe<TrainingFields_Formats_Subtitle_Create>;
  read?: Maybe<TrainingFields_Formats_Subtitle_Read>;
  update?: Maybe<TrainingFields_Formats_Subtitle_Update>;
  delete?: Maybe<TrainingFields_Formats_Subtitle_Delete>;
};

export type TrainingFields_Formats_Subtitle_Create = {
  __typename?: 'TrainingFields_formats_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Subtitle_Read = {
  __typename?: 'TrainingFields_formats_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Subtitle_Update = {
  __typename?: 'TrainingFields_formats_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Subtitle_Delete = {
  __typename?: 'TrainingFields_formats_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards = {
  __typename?: 'TrainingFields_formats_cards';
  create?: Maybe<TrainingFields_Formats_Cards_Create>;
  read?: Maybe<TrainingFields_Formats_Cards_Read>;
  update?: Maybe<TrainingFields_Formats_Cards_Update>;
  delete?: Maybe<TrainingFields_Formats_Cards_Delete>;
  fields?: Maybe<TrainingFields_Formats_Cards_Fields>;
};

export type TrainingFields_Formats_Cards_Create = {
  __typename?: 'TrainingFields_formats_cards_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Read = {
  __typename?: 'TrainingFields_formats_cards_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Update = {
  __typename?: 'TrainingFields_formats_cards_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Delete = {
  __typename?: 'TrainingFields_formats_cards_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Fields = {
  __typename?: 'TrainingFields_formats_cards_Fields';
  icon?: Maybe<TrainingFields_Formats_Cards_Icon>;
  title?: Maybe<TrainingFields_Formats_Cards_Title>;
  description?: Maybe<TrainingFields_Formats_Cards_Description>;
  id?: Maybe<TrainingFields_Formats_Cards_Id>;
};

export type TrainingFields_Formats_Cards_Icon = {
  __typename?: 'TrainingFields_formats_cards_icon';
  create?: Maybe<TrainingFields_Formats_Cards_Icon_Create>;
  read?: Maybe<TrainingFields_Formats_Cards_Icon_Read>;
  update?: Maybe<TrainingFields_Formats_Cards_Icon_Update>;
  delete?: Maybe<TrainingFields_Formats_Cards_Icon_Delete>;
};

export type TrainingFields_Formats_Cards_Icon_Create = {
  __typename?: 'TrainingFields_formats_cards_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Icon_Read = {
  __typename?: 'TrainingFields_formats_cards_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Icon_Update = {
  __typename?: 'TrainingFields_formats_cards_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Icon_Delete = {
  __typename?: 'TrainingFields_formats_cards_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Title = {
  __typename?: 'TrainingFields_formats_cards_title';
  create?: Maybe<TrainingFields_Formats_Cards_Title_Create>;
  read?: Maybe<TrainingFields_Formats_Cards_Title_Read>;
  update?: Maybe<TrainingFields_Formats_Cards_Title_Update>;
  delete?: Maybe<TrainingFields_Formats_Cards_Title_Delete>;
};

export type TrainingFields_Formats_Cards_Title_Create = {
  __typename?: 'TrainingFields_formats_cards_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Title_Read = {
  __typename?: 'TrainingFields_formats_cards_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Title_Update = {
  __typename?: 'TrainingFields_formats_cards_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Title_Delete = {
  __typename?: 'TrainingFields_formats_cards_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Description = {
  __typename?: 'TrainingFields_formats_cards_description';
  create?: Maybe<TrainingFields_Formats_Cards_Description_Create>;
  read?: Maybe<TrainingFields_Formats_Cards_Description_Read>;
  update?: Maybe<TrainingFields_Formats_Cards_Description_Update>;
  delete?: Maybe<TrainingFields_Formats_Cards_Description_Delete>;
};

export type TrainingFields_Formats_Cards_Description_Create = {
  __typename?: 'TrainingFields_formats_cards_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Description_Read = {
  __typename?: 'TrainingFields_formats_cards_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Description_Update = {
  __typename?: 'TrainingFields_formats_cards_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Description_Delete = {
  __typename?: 'TrainingFields_formats_cards_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Id = {
  __typename?: 'TrainingFields_formats_cards_id';
  create?: Maybe<TrainingFields_Formats_Cards_Id_Create>;
  read?: Maybe<TrainingFields_Formats_Cards_Id_Read>;
  update?: Maybe<TrainingFields_Formats_Cards_Id_Update>;
  delete?: Maybe<TrainingFields_Formats_Cards_Id_Delete>;
};

export type TrainingFields_Formats_Cards_Id_Create = {
  __typename?: 'TrainingFields_formats_cards_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Id_Read = {
  __typename?: 'TrainingFields_formats_cards_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Id_Update = {
  __typename?: 'TrainingFields_formats_cards_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Formats_Cards_Id_Delete = {
  __typename?: 'TrainingFields_formats_cards_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions = {
  __typename?: 'TrainingFields_videoInstructions';
  create?: Maybe<TrainingFields_VideoInstructions_Create>;
  read?: Maybe<TrainingFields_VideoInstructions_Read>;
  update?: Maybe<TrainingFields_VideoInstructions_Update>;
  delete?: Maybe<TrainingFields_VideoInstructions_Delete>;
  fields?: Maybe<TrainingFields_VideoInstructions_Fields>;
};

export type TrainingFields_VideoInstructions_Create = {
  __typename?: 'TrainingFields_videoInstructions_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Read = {
  __typename?: 'TrainingFields_videoInstructions_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Update = {
  __typename?: 'TrainingFields_videoInstructions_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Delete = {
  __typename?: 'TrainingFields_videoInstructions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Fields = {
  __typename?: 'TrainingFields_videoInstructions_Fields';
  title?: Maybe<TrainingFields_VideoInstructions_Title>;
  subtitle?: Maybe<TrainingFields_VideoInstructions_Subtitle>;
};

export type TrainingFields_VideoInstructions_Title = {
  __typename?: 'TrainingFields_videoInstructions_title';
  create?: Maybe<TrainingFields_VideoInstructions_Title_Create>;
  read?: Maybe<TrainingFields_VideoInstructions_Title_Read>;
  update?: Maybe<TrainingFields_VideoInstructions_Title_Update>;
  delete?: Maybe<TrainingFields_VideoInstructions_Title_Delete>;
};

export type TrainingFields_VideoInstructions_Title_Create = {
  __typename?: 'TrainingFields_videoInstructions_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Title_Read = {
  __typename?: 'TrainingFields_videoInstructions_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Title_Update = {
  __typename?: 'TrainingFields_videoInstructions_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Title_Delete = {
  __typename?: 'TrainingFields_videoInstructions_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Subtitle = {
  __typename?: 'TrainingFields_videoInstructions_subtitle';
  create?: Maybe<TrainingFields_VideoInstructions_Subtitle_Create>;
  read?: Maybe<TrainingFields_VideoInstructions_Subtitle_Read>;
  update?: Maybe<TrainingFields_VideoInstructions_Subtitle_Update>;
  delete?: Maybe<TrainingFields_VideoInstructions_Subtitle_Delete>;
};

export type TrainingFields_VideoInstructions_Subtitle_Create = {
  __typename?: 'TrainingFields_videoInstructions_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Subtitle_Read = {
  __typename?: 'TrainingFields_videoInstructions_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Subtitle_Update = {
  __typename?: 'TrainingFields_videoInstructions_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_VideoInstructions_Subtitle_Delete = {
  __typename?: 'TrainingFields_videoInstructions_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq = {
  __typename?: 'TrainingFields_faq';
  create?: Maybe<TrainingFields_Faq_Create>;
  read?: Maybe<TrainingFields_Faq_Read>;
  update?: Maybe<TrainingFields_Faq_Update>;
  delete?: Maybe<TrainingFields_Faq_Delete>;
  fields?: Maybe<TrainingFields_Faq_Fields>;
};

export type TrainingFields_Faq_Create = {
  __typename?: 'TrainingFields_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Read = {
  __typename?: 'TrainingFields_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Update = {
  __typename?: 'TrainingFields_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Delete = {
  __typename?: 'TrainingFields_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Fields = {
  __typename?: 'TrainingFields_faq_Fields';
  title?: Maybe<TrainingFields_Faq_Title>;
  subtitle?: Maybe<TrainingFields_Faq_Subtitle>;
  items?: Maybe<TrainingFields_Faq_Items>;
};

export type TrainingFields_Faq_Title = {
  __typename?: 'TrainingFields_faq_title';
  create?: Maybe<TrainingFields_Faq_Title_Create>;
  read?: Maybe<TrainingFields_Faq_Title_Read>;
  update?: Maybe<TrainingFields_Faq_Title_Update>;
  delete?: Maybe<TrainingFields_Faq_Title_Delete>;
};

export type TrainingFields_Faq_Title_Create = {
  __typename?: 'TrainingFields_faq_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Title_Read = {
  __typename?: 'TrainingFields_faq_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Title_Update = {
  __typename?: 'TrainingFields_faq_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Title_Delete = {
  __typename?: 'TrainingFields_faq_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Subtitle = {
  __typename?: 'TrainingFields_faq_subtitle';
  create?: Maybe<TrainingFields_Faq_Subtitle_Create>;
  read?: Maybe<TrainingFields_Faq_Subtitle_Read>;
  update?: Maybe<TrainingFields_Faq_Subtitle_Update>;
  delete?: Maybe<TrainingFields_Faq_Subtitle_Delete>;
};

export type TrainingFields_Faq_Subtitle_Create = {
  __typename?: 'TrainingFields_faq_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Subtitle_Read = {
  __typename?: 'TrainingFields_faq_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Subtitle_Update = {
  __typename?: 'TrainingFields_faq_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Subtitle_Delete = {
  __typename?: 'TrainingFields_faq_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items = {
  __typename?: 'TrainingFields_faq_items';
  create?: Maybe<TrainingFields_Faq_Items_Create>;
  read?: Maybe<TrainingFields_Faq_Items_Read>;
  update?: Maybe<TrainingFields_Faq_Items_Update>;
  delete?: Maybe<TrainingFields_Faq_Items_Delete>;
  fields?: Maybe<TrainingFields_Faq_Items_Fields>;
};

export type TrainingFields_Faq_Items_Create = {
  __typename?: 'TrainingFields_faq_items_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Read = {
  __typename?: 'TrainingFields_faq_items_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Update = {
  __typename?: 'TrainingFields_faq_items_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Delete = {
  __typename?: 'TrainingFields_faq_items_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Fields = {
  __typename?: 'TrainingFields_faq_items_Fields';
  question?: Maybe<TrainingFields_Faq_Items_Question>;
  answer?: Maybe<TrainingFields_Faq_Items_Answer>;
  id?: Maybe<TrainingFields_Faq_Items_Id>;
};

export type TrainingFields_Faq_Items_Question = {
  __typename?: 'TrainingFields_faq_items_question';
  create?: Maybe<TrainingFields_Faq_Items_Question_Create>;
  read?: Maybe<TrainingFields_Faq_Items_Question_Read>;
  update?: Maybe<TrainingFields_Faq_Items_Question_Update>;
  delete?: Maybe<TrainingFields_Faq_Items_Question_Delete>;
};

export type TrainingFields_Faq_Items_Question_Create = {
  __typename?: 'TrainingFields_faq_items_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Question_Read = {
  __typename?: 'TrainingFields_faq_items_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Question_Update = {
  __typename?: 'TrainingFields_faq_items_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Question_Delete = {
  __typename?: 'TrainingFields_faq_items_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Answer = {
  __typename?: 'TrainingFields_faq_items_answer';
  create?: Maybe<TrainingFields_Faq_Items_Answer_Create>;
  read?: Maybe<TrainingFields_Faq_Items_Answer_Read>;
  update?: Maybe<TrainingFields_Faq_Items_Answer_Update>;
  delete?: Maybe<TrainingFields_Faq_Items_Answer_Delete>;
};

export type TrainingFields_Faq_Items_Answer_Create = {
  __typename?: 'TrainingFields_faq_items_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Answer_Read = {
  __typename?: 'TrainingFields_faq_items_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Answer_Update = {
  __typename?: 'TrainingFields_faq_items_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Answer_Delete = {
  __typename?: 'TrainingFields_faq_items_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Id = {
  __typename?: 'TrainingFields_faq_items_id';
  create?: Maybe<TrainingFields_Faq_Items_Id_Create>;
  read?: Maybe<TrainingFields_Faq_Items_Id_Read>;
  update?: Maybe<TrainingFields_Faq_Items_Id_Update>;
  delete?: Maybe<TrainingFields_Faq_Items_Id_Delete>;
};

export type TrainingFields_Faq_Items_Id_Create = {
  __typename?: 'TrainingFields_faq_items_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Id_Read = {
  __typename?: 'TrainingFields_faq_items_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Id_Update = {
  __typename?: 'TrainingFields_faq_items_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_Faq_Items_Id_Delete = {
  __typename?: 'TrainingFields_faq_items_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_UpdatedAt = {
  __typename?: 'TrainingFields_updatedAt';
  create?: Maybe<TrainingFields_UpdatedAt_Create>;
  read?: Maybe<TrainingFields_UpdatedAt_Read>;
  update?: Maybe<TrainingFields_UpdatedAt_Update>;
  delete?: Maybe<TrainingFields_UpdatedAt_Delete>;
};

export type TrainingFields_UpdatedAt_Create = {
  __typename?: 'TrainingFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_UpdatedAt_Read = {
  __typename?: 'TrainingFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_UpdatedAt_Update = {
  __typename?: 'TrainingFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_UpdatedAt_Delete = {
  __typename?: 'TrainingFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_CreatedAt = {
  __typename?: 'TrainingFields_createdAt';
  create?: Maybe<TrainingFields_CreatedAt_Create>;
  read?: Maybe<TrainingFields_CreatedAt_Read>;
  update?: Maybe<TrainingFields_CreatedAt_Update>;
  delete?: Maybe<TrainingFields_CreatedAt_Delete>;
};

export type TrainingFields_CreatedAt_Create = {
  __typename?: 'TrainingFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_CreatedAt_Read = {
  __typename?: 'TrainingFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_CreatedAt_Update = {
  __typename?: 'TrainingFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TrainingFields_CreatedAt_Delete = {
  __typename?: 'TrainingFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TrainingReadAccess = {
  __typename?: 'TrainingReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TrainingUpdateAccess = {
  __typename?: 'TrainingUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsAccess = {
  __typename?: 'contactsAccess';
  fields?: Maybe<ContactsFields>;
  read?: Maybe<ContactsReadAccess>;
  update?: Maybe<ContactsUpdateAccess>;
};

export type ContactsFields = {
  __typename?: 'ContactsFields';
  title?: Maybe<ContactsFields_Title>;
  description?: Maybe<ContactsFields_Description>;
  phone?: Maybe<ContactsFields_Phone>;
  email?: Maybe<ContactsFields_Email>;
  address?: Maybe<ContactsFields_Address>;
  form?: Maybe<ContactsFields_Form>;
  updatedAt?: Maybe<ContactsFields_UpdatedAt>;
  createdAt?: Maybe<ContactsFields_CreatedAt>;
};

export type ContactsFields_Title = {
  __typename?: 'ContactsFields_title';
  create?: Maybe<ContactsFields_Title_Create>;
  read?: Maybe<ContactsFields_Title_Read>;
  update?: Maybe<ContactsFields_Title_Update>;
  delete?: Maybe<ContactsFields_Title_Delete>;
};

export type ContactsFields_Title_Create = {
  __typename?: 'ContactsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Title_Read = {
  __typename?: 'ContactsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Title_Update = {
  __typename?: 'ContactsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Title_Delete = {
  __typename?: 'ContactsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Description = {
  __typename?: 'ContactsFields_description';
  create?: Maybe<ContactsFields_Description_Create>;
  read?: Maybe<ContactsFields_Description_Read>;
  update?: Maybe<ContactsFields_Description_Update>;
  delete?: Maybe<ContactsFields_Description_Delete>;
};

export type ContactsFields_Description_Create = {
  __typename?: 'ContactsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Description_Read = {
  __typename?: 'ContactsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Description_Update = {
  __typename?: 'ContactsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Description_Delete = {
  __typename?: 'ContactsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone = {
  __typename?: 'ContactsFields_phone';
  create?: Maybe<ContactsFields_Phone_Create>;
  read?: Maybe<ContactsFields_Phone_Read>;
  update?: Maybe<ContactsFields_Phone_Update>;
  delete?: Maybe<ContactsFields_Phone_Delete>;
};

export type ContactsFields_Phone_Create = {
  __typename?: 'ContactsFields_phone_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Read = {
  __typename?: 'ContactsFields_phone_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Update = {
  __typename?: 'ContactsFields_phone_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Phone_Delete = {
  __typename?: 'ContactsFields_phone_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email = {
  __typename?: 'ContactsFields_email';
  create?: Maybe<ContactsFields_Email_Create>;
  read?: Maybe<ContactsFields_Email_Read>;
  update?: Maybe<ContactsFields_Email_Update>;
  delete?: Maybe<ContactsFields_Email_Delete>;
};

export type ContactsFields_Email_Create = {
  __typename?: 'ContactsFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Read = {
  __typename?: 'ContactsFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Update = {
  __typename?: 'ContactsFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Email_Delete = {
  __typename?: 'ContactsFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address = {
  __typename?: 'ContactsFields_address';
  create?: Maybe<ContactsFields_Address_Create>;
  read?: Maybe<ContactsFields_Address_Read>;
  update?: Maybe<ContactsFields_Address_Update>;
  delete?: Maybe<ContactsFields_Address_Delete>;
};

export type ContactsFields_Address_Create = {
  __typename?: 'ContactsFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Read = {
  __typename?: 'ContactsFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Update = {
  __typename?: 'ContactsFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Address_Delete = {
  __typename?: 'ContactsFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form = {
  __typename?: 'ContactsFields_form';
  create?: Maybe<ContactsFields_Form_Create>;
  read?: Maybe<ContactsFields_Form_Read>;
  update?: Maybe<ContactsFields_Form_Update>;
  delete?: Maybe<ContactsFields_Form_Delete>;
  fields?: Maybe<ContactsFields_Form_Fields>;
};

export type ContactsFields_Form_Create = {
  __typename?: 'ContactsFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Read = {
  __typename?: 'ContactsFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Update = {
  __typename?: 'ContactsFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Delete = {
  __typename?: 'ContactsFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Fields = {
  __typename?: 'ContactsFields_form_Fields';
  title?: Maybe<ContactsFields_Form_Title>;
  description?: Maybe<ContactsFields_Form_Description>;
  socialNetworks?: Maybe<ContactsFields_Form_SocialNetworks>;
};

export type ContactsFields_Form_Title = {
  __typename?: 'ContactsFields_form_title';
  create?: Maybe<ContactsFields_Form_Title_Create>;
  read?: Maybe<ContactsFields_Form_Title_Read>;
  update?: Maybe<ContactsFields_Form_Title_Update>;
  delete?: Maybe<ContactsFields_Form_Title_Delete>;
};

export type ContactsFields_Form_Title_Create = {
  __typename?: 'ContactsFields_form_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Title_Read = {
  __typename?: 'ContactsFields_form_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Title_Update = {
  __typename?: 'ContactsFields_form_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Title_Delete = {
  __typename?: 'ContactsFields_form_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Description = {
  __typename?: 'ContactsFields_form_description';
  create?: Maybe<ContactsFields_Form_Description_Create>;
  read?: Maybe<ContactsFields_Form_Description_Read>;
  update?: Maybe<ContactsFields_Form_Description_Update>;
  delete?: Maybe<ContactsFields_Form_Description_Delete>;
};

export type ContactsFields_Form_Description_Create = {
  __typename?: 'ContactsFields_form_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Description_Read = {
  __typename?: 'ContactsFields_form_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Description_Update = {
  __typename?: 'ContactsFields_form_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_Description_Delete = {
  __typename?: 'ContactsFields_form_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks = {
  __typename?: 'ContactsFields_form_socialNetworks';
  create?: Maybe<ContactsFields_Form_SocialNetworks_Create>;
  read?: Maybe<ContactsFields_Form_SocialNetworks_Read>;
  update?: Maybe<ContactsFields_Form_SocialNetworks_Update>;
  delete?: Maybe<ContactsFields_Form_SocialNetworks_Delete>;
  fields?: Maybe<ContactsFields_Form_SocialNetworks_Fields>;
};

export type ContactsFields_Form_SocialNetworks_Create = {
  __typename?: 'ContactsFields_form_socialNetworks_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Read = {
  __typename?: 'ContactsFields_form_socialNetworks_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Update = {
  __typename?: 'ContactsFields_form_socialNetworks_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Delete = {
  __typename?: 'ContactsFields_form_socialNetworks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Fields = {
  __typename?: 'ContactsFields_form_socialNetworks_Fields';
  label?: Maybe<ContactsFields_Form_SocialNetworks_Label>;
  icon?: Maybe<ContactsFields_Form_SocialNetworks_Icon>;
  url?: Maybe<ContactsFields_Form_SocialNetworks_Url>;
  id?: Maybe<ContactsFields_Form_SocialNetworks_Id>;
};

export type ContactsFields_Form_SocialNetworks_Label = {
  __typename?: 'ContactsFields_form_socialNetworks_label';
  create?: Maybe<ContactsFields_Form_SocialNetworks_Label_Create>;
  read?: Maybe<ContactsFields_Form_SocialNetworks_Label_Read>;
  update?: Maybe<ContactsFields_Form_SocialNetworks_Label_Update>;
  delete?: Maybe<ContactsFields_Form_SocialNetworks_Label_Delete>;
};

export type ContactsFields_Form_SocialNetworks_Label_Create = {
  __typename?: 'ContactsFields_form_socialNetworks_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Label_Read = {
  __typename?: 'ContactsFields_form_socialNetworks_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Label_Update = {
  __typename?: 'ContactsFields_form_socialNetworks_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Label_Delete = {
  __typename?: 'ContactsFields_form_socialNetworks_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Icon = {
  __typename?: 'ContactsFields_form_socialNetworks_icon';
  create?: Maybe<ContactsFields_Form_SocialNetworks_Icon_Create>;
  read?: Maybe<ContactsFields_Form_SocialNetworks_Icon_Read>;
  update?: Maybe<ContactsFields_Form_SocialNetworks_Icon_Update>;
  delete?: Maybe<ContactsFields_Form_SocialNetworks_Icon_Delete>;
};

export type ContactsFields_Form_SocialNetworks_Icon_Create = {
  __typename?: 'ContactsFields_form_socialNetworks_icon_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Icon_Read = {
  __typename?: 'ContactsFields_form_socialNetworks_icon_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Icon_Update = {
  __typename?: 'ContactsFields_form_socialNetworks_icon_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Icon_Delete = {
  __typename?: 'ContactsFields_form_socialNetworks_icon_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Url = {
  __typename?: 'ContactsFields_form_socialNetworks_url';
  create?: Maybe<ContactsFields_Form_SocialNetworks_Url_Create>;
  read?: Maybe<ContactsFields_Form_SocialNetworks_Url_Read>;
  update?: Maybe<ContactsFields_Form_SocialNetworks_Url_Update>;
  delete?: Maybe<ContactsFields_Form_SocialNetworks_Url_Delete>;
};

export type ContactsFields_Form_SocialNetworks_Url_Create = {
  __typename?: 'ContactsFields_form_socialNetworks_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Url_Read = {
  __typename?: 'ContactsFields_form_socialNetworks_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Url_Update = {
  __typename?: 'ContactsFields_form_socialNetworks_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Url_Delete = {
  __typename?: 'ContactsFields_form_socialNetworks_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Id = {
  __typename?: 'ContactsFields_form_socialNetworks_id';
  create?: Maybe<ContactsFields_Form_SocialNetworks_Id_Create>;
  read?: Maybe<ContactsFields_Form_SocialNetworks_Id_Read>;
  update?: Maybe<ContactsFields_Form_SocialNetworks_Id_Update>;
  delete?: Maybe<ContactsFields_Form_SocialNetworks_Id_Delete>;
};

export type ContactsFields_Form_SocialNetworks_Id_Create = {
  __typename?: 'ContactsFields_form_socialNetworks_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Id_Read = {
  __typename?: 'ContactsFields_form_socialNetworks_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Id_Update = {
  __typename?: 'ContactsFields_form_socialNetworks_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_Form_SocialNetworks_Id_Delete = {
  __typename?: 'ContactsFields_form_socialNetworks_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt = {
  __typename?: 'ContactsFields_updatedAt';
  create?: Maybe<ContactsFields_UpdatedAt_Create>;
  read?: Maybe<ContactsFields_UpdatedAt_Read>;
  update?: Maybe<ContactsFields_UpdatedAt_Update>;
  delete?: Maybe<ContactsFields_UpdatedAt_Delete>;
};

export type ContactsFields_UpdatedAt_Create = {
  __typename?: 'ContactsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Read = {
  __typename?: 'ContactsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Update = {
  __typename?: 'ContactsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_UpdatedAt_Delete = {
  __typename?: 'ContactsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt = {
  __typename?: 'ContactsFields_createdAt';
  create?: Maybe<ContactsFields_CreatedAt_Create>;
  read?: Maybe<ContactsFields_CreatedAt_Read>;
  update?: Maybe<ContactsFields_CreatedAt_Update>;
  delete?: Maybe<ContactsFields_CreatedAt_Delete>;
};

export type ContactsFields_CreatedAt_Create = {
  __typename?: 'ContactsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Read = {
  __typename?: 'ContactsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Update = {
  __typename?: 'ContactsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ContactsFields_CreatedAt_Delete = {
  __typename?: 'ContactsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ContactsReadAccess = {
  __typename?: 'ContactsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ContactsUpdateAccess = {
  __typename?: 'ContactsUpdateAccess';
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
  createArticle?: Maybe<Article>;
  updateArticle?: Maybe<Article>;
  deleteArticle?: Maybe<Article>;
  duplicateArticle?: Maybe<Article>;
  createOrder?: Maybe<Order>;
  updateOrder?: Maybe<Order>;
  deleteOrder?: Maybe<Order>;
  duplicateOrder?: Maybe<Order>;
  createLegalPage?: Maybe<LegalPage>;
  updateLegalPage?: Maybe<LegalPage>;
  deleteLegalPage?: Maybe<LegalPage>;
  duplicateLegalPage?: Maybe<LegalPage>;
  createLocation?: Maybe<Location>;
  updateLocation?: Maybe<Location>;
  deleteLocation?: Maybe<Location>;
  duplicateLocation?: Maybe<Location>;
  createTrainingCategory?: Maybe<TrainingCategory>;
  updateTrainingCategory?: Maybe<TrainingCategory>;
  deleteTrainingCategory?: Maybe<TrainingCategory>;
  duplicateTrainingCategory?: Maybe<TrainingCategory>;
  createTrainingVideo?: Maybe<TrainingVideo>;
  updateTrainingVideo?: Maybe<TrainingVideo>;
  deleteTrainingVideo?: Maybe<TrainingVideo>;
  duplicateTrainingVideo?: Maybe<TrainingVideo>;
  createApplication?: Maybe<Application>;
  updateApplication?: Maybe<Application>;
  deleteApplication?: Maybe<Application>;
  duplicateApplication?: Maybe<Application>;
  createDealerApplication?: Maybe<DealerApplication>;
  updateDealerApplication?: Maybe<DealerApplication>;
  deleteDealerApplication?: Maybe<DealerApplication>;
  duplicateDealerApplication?: Maybe<DealerApplication>;
  createCurrency?: Maybe<Currency>;
  updateCurrency?: Maybe<Currency>;
  deleteCurrency?: Maybe<Currency>;
  duplicateCurrency?: Maybe<Currency>;
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
  updateHome?: Maybe<Home>;
  updateTraining?: Maybe<Training>;
  updateContact?: Maybe<Contact>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateMediaArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationReviewUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationProductUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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


export type MutationCreateArticleArgs = {
  data: MutationArticleInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateArticleArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationArticleUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateArticleArgs = {
  id: Scalars['Int']['input'];
  data: MutationArticleInput;
};


export type MutationCreateOrderArgs = {
  data: MutationOrderInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationOrderUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateOrderArgs = {
  id: Scalars['Int']['input'];
  data: MutationOrderInput;
};


export type MutationCreateLegalPageArgs = {
  data: MutationLegalPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateLegalPageArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLegalPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteLegalPageArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateLegalPageArgs = {
  id: Scalars['Int']['input'];
  data: MutationLegalPageInput;
};


export type MutationCreateLocationArgs = {
  data: MutationLocationInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateLocationArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLocationUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteLocationArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateLocationArgs = {
  id: Scalars['Int']['input'];
  data: MutationLocationInput;
};


export type MutationCreateTrainingCategoryArgs = {
  data: MutationTrainingCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTrainingCategoryArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTrainingCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteTrainingCategoryArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateTrainingCategoryArgs = {
  id: Scalars['Int']['input'];
  data: MutationTrainingCategoryInput;
};


export type MutationCreateTrainingVideoArgs = {
  data: MutationTrainingVideoInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTrainingVideoArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTrainingVideoUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteTrainingVideoArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateTrainingVideoArgs = {
  id: Scalars['Int']['input'];
  data: MutationTrainingVideoInput;
};


export type MutationCreateApplicationArgs = {
  data: MutationApplicationInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateApplicationArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationApplicationUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteApplicationArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateApplicationArgs = {
  id: Scalars['Int']['input'];
  data: MutationApplicationInput;
};


export type MutationCreateDealerApplicationArgs = {
  data: MutationDealerApplicationInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateDealerApplicationArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationDealerApplicationUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteDealerApplicationArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateDealerApplicationArgs = {
  id: Scalars['Int']['input'];
  data: MutationDealerApplicationInput;
};


export type MutationCreateCurrencyArgs = {
  data: MutationCurrencyInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateCurrencyArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCurrencyUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteCurrencyArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateCurrencyArgs = {
  id: Scalars['Int']['input'];
  data: MutationCurrencyInput;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadKvArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
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


export type MutationUpdateHomeArgs = {
  data: MutationHomeInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateTrainingArgs = {
  data: MutationTrainingInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateContactArgs = {
  data: MutationContactInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};

export type MutationUserInput = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role: User_Role_MutationInput;
  dealerDiscountPercent?: InputMaybe<Scalars['Float']['input']>;
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
  dealerDiscountPercent?: InputMaybe<Scalars['Float']['input']>;
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
  dealerDiscountPercent?: Maybe<Scalars['Float']['output']>;
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
  title?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  category?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  maniples?: InputMaybe<Scalars['Float']['input']>;
  powerWatts?: InputMaybe<Scalars['Float']['input']>;
  oldprice?: InputMaybe<Scalars['Float']['input']>;
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
  feature?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_CompareFeaturesInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_DescriptionInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProduct_CharacteristicsInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProduct_Characteristics_ItemsInput>>>;
};

export type MutationProduct_Characteristics_ItemsInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_EquipmentInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProduct_Equipment_ItemsInput>>>;
};

export type MutationProduct_Equipment_ItemsInput = {
  item?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_AdvantagesInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProduct_Advantages_ItemsInput>>>;
};

export type MutationProduct_Advantages_ItemsInput = {
  item?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProduct_VideoInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
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
  oldprice?: InputMaybe<Scalars['Float']['input']>;
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
  feature?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_CompareFeaturesInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_DescriptionInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationProductUpdate_CharacteristicsInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProductUpdate_Characteristics_ItemsInput>>>;
};

export type MutationProductUpdate_Characteristics_ItemsInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_EquipmentInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProductUpdate_Equipment_ItemsInput>>>;
};

export type MutationProductUpdate_Equipment_ItemsInput = {
  item?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_AdvantagesInput = {
  items?: InputMaybe<Array<InputMaybe<MutationProductUpdate_Advantages_ItemsInput>>>;
};

export type MutationProductUpdate_Advantages_ItemsInput = {
  item?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProductUpdate_VideoInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
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

export type MutationArticleInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  publishedAt: Scalars['String']['input'];
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  cardPoster?: InputMaybe<Scalars['Int']['input']>;
  heroImage?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationArticleUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  cardPoster?: InputMaybe<Scalars['Int']['input']>;
  heroImage?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationOrderInput = {
  orderNumber: Scalars['String']['input'];
  customer?: InputMaybe<Scalars['Int']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  customerEmail: Scalars['String']['input'];
  orderStatus: Order_OrderStatus_MutationInput;
  paymentStatus: Order_PaymentStatus_MutationInput;
  paymentMethod: Order_PaymentMethod_MutationInput;
  total: Scalars['Float']['input'];
  items: Scalars['JSON']['input'];
  delivery?: InputMaybe<Scalars['JSON']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  monobank?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum Order_OrderStatus_MutationInput {
  New = 'new',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled'
}

export enum Order_PaymentStatus_MutationInput {
  AwaitingPayment = 'awaiting_payment',
  Processing = 'processing',
  Paid = 'paid',
  Failed = 'failed',
  Refunded = 'refunded'
}

export enum Order_PaymentMethod_MutationInput {
  CardOnline = 'card_online',
  MonobankParts = 'monobank_parts',
  Invoice = 'invoice',
  CashOnDelivery = 'cash_on_delivery'
}

export type MutationOrderUpdateInput = {
  orderNumber?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  orderStatus?: InputMaybe<OrderUpdate_OrderStatus_MutationInput>;
  paymentStatus?: InputMaybe<OrderUpdate_PaymentStatus_MutationInput>;
  paymentMethod?: InputMaybe<OrderUpdate_PaymentMethod_MutationInput>;
  total?: InputMaybe<Scalars['Float']['input']>;
  items?: InputMaybe<Scalars['JSON']['input']>;
  delivery?: InputMaybe<Scalars['JSON']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  monobank?: InputMaybe<Scalars['JSON']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderUpdate_OrderStatus_MutationInput {
  New = 'new',
  Processing = 'processing',
  Shipped = 'shipped',
  Delivered = 'delivered',
  Cancelled = 'cancelled'
}

export enum OrderUpdate_PaymentStatus_MutationInput {
  AwaitingPayment = 'awaiting_payment',
  Processing = 'processing',
  Paid = 'paid',
  Failed = 'failed',
  Refunded = 'refunded'
}

export enum OrderUpdate_PaymentMethod_MutationInput {
  CardOnline = 'card_online',
  MonobankParts = 'monobank_parts',
  Invoice = 'invoice',
  CashOnDelivery = 'cash_on_delivery'
}

export type MutationLegalPageInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  content?: InputMaybe<Scalars['JSON']['input']>;
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLegalPageUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  generateSlug?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLocationInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['String']['input'];
  city: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLocationUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTrainingCategoryInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTrainingCategoryUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTrainingVideoInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['Int']['input']>;
  poster?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTrainingVideoUpdateInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['Int']['input']>;
  poster?: InputMaybe<Scalars['Int']['input']>;
  video?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationApplicationInput = {
  source: Application_Source_MutationInput;
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  status: Application_Status_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum Application_Source_MutationInput {
  Contacts = 'contacts',
  HeroPopup = 'hero_popup'
}

export enum Application_Status_MutationInput {
  New = 'new',
  Processing = 'processing',
  Completed = 'completed',
  Rejected = 'rejected'
}

export type MutationApplicationUpdateInput = {
  source?: InputMaybe<ApplicationUpdate_Source_MutationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<ApplicationUpdate_Status_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum ApplicationUpdate_Source_MutationInput {
  Contacts = 'contacts',
  HeroPopup = 'hero_popup'
}

export enum ApplicationUpdate_Status_MutationInput {
  New = 'new',
  Processing = 'processing',
  Completed = 'completed',
  Rejected = 'rejected'
}

export type MutationDealerApplicationInput = {
  account?: InputMaybe<Scalars['Int']['input']>;
  companyName: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  email: Scalars['String']['input'];
  city: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  status: DealerApplication_Status_MutationInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum DealerApplication_Status_MutationInput {
  New = 'new',
  Processing = 'processing',
  Approved = 'approved',
  Rejected = 'rejected'
}

export type MutationDealerApplicationUpdateInput = {
  account?: InputMaybe<Scalars['Int']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<DealerApplicationUpdate_Status_MutationInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export enum DealerApplicationUpdate_Status_MutationInput {
  New = 'new',
  Processing = 'processing',
  Approved = 'approved',
  Rejected = 'rejected'
}

export type MutationCurrencyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
  active?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCurrencyUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  sortOrder?: InputMaybe<Scalars['Float']['input']>;
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
  Category = 'category',
  Articles = 'articles',
  Orders = 'orders',
  LegalPages = 'legal_pages',
  Locations = 'locations',
  TrainingCategories = 'training_categories',
  TrainingVideos = 'training_videos',
  Applications = 'applications',
  DealerApplications = 'dealer_applications',
  Currencies = 'currencies'
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
  Category = 'category',
  Articles = 'articles',
  Orders = 'orders',
  LegalPages = 'legal_pages',
  Locations = 'locations',
  TrainingCategories = 'training_categories',
  TrainingVideos = 'training_videos',
  Applications = 'applications',
  DealerApplications = 'dealer_applications',
  Currencies = 'currencies'
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

export type MutationHomeInput = {
  hero: MutationHome_HeroInput;
  howItWork: MutationHome_HowItWorkInput;
  beforeAfter?: InputMaybe<Array<InputMaybe<MutationHome_BeforeAfterInput>>>;
  modelComparison: MutationHome_ModelComparisonInput;
  certificatesSection: MutationHome_CertificatesSectionInput;
  trainingSection: MutationHome_TrainingSectionInput;
  reviewsSection: MutationHome_ReviewsSectionInput;
  faqSection: MutationHome_FaqSectionInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHome_HeroInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationHome_HowItWorkInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  cards?: InputMaybe<Array<InputMaybe<MutationHome_HowItWork_CardsInput>>>;
};

export type MutationHome_HowItWork_CardsInput = {
  icon?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHome_BeforeAfterInput = {
  before?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHome_ModelComparisonInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationHome_CertificatesSectionInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  certificates?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationHome_TrainingSectionInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  video: MutationHome_TrainingSection_VideoInput;
  cards?: InputMaybe<Array<InputMaybe<MutationHome_TrainingSection_CardsInput>>>;
};

export type MutationHome_TrainingSection_VideoInput = {
  poster?: InputMaybe<Scalars['Int']['input']>;
  file?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationHome_TrainingSection_CardsInput = {
  icon?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHome_ReviewsSectionInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  reviews?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type MutationHome_FaqSectionInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationHome_FaqSection_ItemsInput>>>;
};

export type MutationHome_FaqSection_ItemsInput = {
  question?: InputMaybe<Scalars['String']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTrainingInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  formats: MutationTraining_FormatsInput;
  videoInstructions: MutationTraining_VideoInstructionsInput;
  faq: MutationTraining_FaqInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTraining_FormatsInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  cards?: InputMaybe<Array<InputMaybe<MutationTraining_Formats_CardsInput>>>;
};

export type MutationTraining_Formats_CardsInput = {
  icon?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTraining_VideoInstructionsInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTraining_FaqInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<MutationTraining_Faq_ItemsInput>>>;
};

export type MutationTraining_Faq_ItemsInput = {
  question?: InputMaybe<Scalars['String']['input']>;
  answer?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContactInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  email: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  form: MutationContact_FormInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationContact_FormInput = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  socialNetworks?: InputMaybe<Array<InputMaybe<MutationContact_Form_SocialNetworksInput>>>;
};

export type MutationContact_Form_SocialNetworksInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['Int']['input']>;
  url: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
};

export type GetLayoutDataQueryVariables = Exact<{
  locale?: InputMaybe<LocaleInputType>;
}>;


export type GetLayoutDataQuery = { __typename?: 'Query', meUser?: { __typename?: 'usersMe', user?: { __typename?: 'User', id: number, email: string, firstName?: string | null, lastName?: string | null, phone?: string | null, role: User_Role, dealerDiscountPercent?: number | null } | null } | null, Products?: { __typename?: 'Products', docs: Array<{ __typename?: 'Product', id: number, title?: string | null, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, oldprice?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string, title?: string | null }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', label?: string | null, value?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', items?: Array<{ __typename?: 'Product_Equipment_Items', item?: string | null }> | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', item?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', description?: string | null, items?: Array<{ __typename?: 'Media', alt: string, mimeType?: string | null, thumbnailURL?: string | null, url?: string | null }> | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null }> } | null, Categories?: { __typename?: 'Categories', docs: Array<{ __typename?: 'Category', id: number, title?: string | null, description?: string | null, slug: string, image?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
}>;


export type GetProductBySlugQuery = { __typename?: 'Query', Products?: { __typename?: 'Products', docs: Array<{ __typename?: 'Product', id: number, title?: string | null, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, oldprice?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string, title?: string | null }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', label?: string | null, value?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', items?: Array<{ __typename?: 'Product_Equipment_Items', item?: string | null }> | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', item?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', description?: string | null, items?: Array<{ __typename?: 'Media', alt: string, mimeType?: string | null, thumbnailURL?: string | null, url?: string | null }> | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null }> } | null };

export type ProductFrontendFieldsFragment = { __typename?: 'Product', id: number, title?: string | null, price: number, rating?: number | null, slug: string, details?: string | null, shortDescription?: string | null, maniples?: number | null, oldprice?: number | null, powerWatts?: number | null, category?: Array<{ __typename?: 'Category', slug: string, title?: string | null }> | null, gallery?: Array<{ __typename?: 'Media', url?: string | null }> | null, listFeatures?: Array<{ __typename?: 'Product_ListFeatures', feature?: string | null }> | null, compareFeatures?: Array<{ __typename?: 'Product_CompareFeatures', label?: string | null, value?: string | null }> | null, description?: { __typename?: 'Product_Description', content?: unknown | null } | null, characteristics?: { __typename?: 'Product_Characteristics', items?: Array<{ __typename?: 'Product_Characteristics_Items', label?: string | null, value?: string | null }> | null } | null, equipment?: { __typename?: 'Product_Equipment', items?: Array<{ __typename?: 'Product_Equipment_Items', item?: string | null }> | null } | null, advantages?: { __typename?: 'Product_Advantages', items?: Array<{ __typename?: 'Product_Advantages_Items', item?: string | null }> | null } | null, video?: { __typename?: 'Product_Video', description?: string | null, items?: Array<{ __typename?: 'Media', alt: string, mimeType?: string | null, thumbnailURL?: string | null, url?: string | null }> | null } | null, faq?: Array<{ __typename?: 'Product_Faq', question?: string | null, answer?: string | null }> | null };

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
  oldprice
  powerWatts
  category {
    slug
    title
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
      label
      value
    }
  }
  equipment {
    items {
      item
    }
  }
  advantages {
    items {
      item
    }
  }
  video {
    description
    items {
      alt
      mimeType
      thumbnailURL
      url
    }
  }
  faq {
    question
    answer
  }
}
    `;
export const GetLayoutDataDocument = gql`
    query GetLayoutData($locale: LocaleInputType) {
  meUser {
    user {
      id
      email
      firstName
      lastName
      phone
      role
      dealerDiscountPercent
    }
  }
  Products(
    locale: $locale
    limit: 100
    sort: "createdAt"
    where: {price: {greater_than: 0}}
  ) {
    docs {
      ...ProductFrontendFields
    }
  }
  Categories(locale: $locale, limit: 100, sort: "createdAt") {
    docs {
      id
      title
      description
      slug
      image {
        url
      }
    }
  }
}
    ${ProductFrontendFieldsFragmentDoc}`;
export const GetProductBySlugDocument = gql`
    query GetProductBySlug($slug: String!, $locale: LocaleInputType) {
  Products(locale: $locale, limit: 1, where: {slug: {equals: $slug}}) {
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