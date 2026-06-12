import * as migration_20260420_084925_products_cms_fields from './20260420_084925_products_cms_fields'
import * as migration_20260603_000000_users_dealer_discount from './20260603_000000_users_dealer_discount'
import * as migration_20260603_010000_orders_collection from './20260603_010000_orders_collection'
import * as migration_20260605_010000_legal_pages from './20260605_010000_legal_pages'
import * as migration_20260612_010000_home_global from './20260612_010000_home_global'

export const migrations = [
  {
    up: migration_20260420_084925_products_cms_fields.up,
    down: migration_20260420_084925_products_cms_fields.down,
    name: '20260420_084925_products_cms_fields',
  },
  {
    up: migration_20260603_000000_users_dealer_discount.up,
    down: migration_20260603_000000_users_dealer_discount.down,
    name: '20260603_000000_users_dealer_discount',
  },
  {
    up: migration_20260603_010000_orders_collection.up,
    down: migration_20260603_010000_orders_collection.down,
    name: '20260603_010000_orders_collection',
  },
  {
    up: migration_20260605_010000_legal_pages.up,
    down: migration_20260605_010000_legal_pages.down,
    name: '20260605_010000_legal_pages',
  },
  {
    up: migration_20260612_010000_home_global.up,
    down: migration_20260612_010000_home_global.down,
    name: '20260612_010000_home_global',
  },
]
