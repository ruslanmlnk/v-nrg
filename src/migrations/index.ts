import * as migration_20260420_084925_products_cms_fields from './20260420_084925_products_cms_fields'
import * as migration_20260603_000000_users_dealer_discount from './20260603_000000_users_dealer_discount'
import * as migration_20260603_010000_orders_collection from './20260603_010000_orders_collection'

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
]
