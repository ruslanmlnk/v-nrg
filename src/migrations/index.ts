import * as migration_20260420_084925_products_cms_fields from './20260420_084925_products_cms_fields'
import * as migration_20260603_000000_users_dealer_discount from './20260603_000000_users_dealer_discount'
import * as migration_20260603_010000_orders_collection from './20260603_010000_orders_collection'
import * as migration_20260605_010000_legal_pages from './20260605_010000_legal_pages'
import * as migration_20260612_010000_home_global from './20260612_010000_home_global'
import * as migration_20260612_020000_locations from './20260612_020000_locations'
import * as migration_20260613_010000_training from './20260613_010000_training'
import * as migration_20260613_020000_contacts from './20260613_020000_contacts'
import * as migration_20260613_030000_applications from './20260613_030000_applications'
import * as migration_20260617_153500_social_networks_site_settings from './20260617_153500_social_networks_site_settings'
import * as migration_20260618_061500_page_seo_globals from './20260618_061500_page_seo_globals'
import * as migration_20260622_010000_structured_order_fields from './20260622_010000_structured_order_fields'
import * as migration_20260712_000000_admin_confirmed_order_payments from './20260712_000000_admin_confirmed_order_payments'
import * as migration_20260722_080000_site_settings_topbar from './20260722_080000_site_settings_topbar'
import * as migration_20260722_090000_product_catalog_poster from './20260722_090000_product_catalog_poster'

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
  {
    up: migration_20260612_020000_locations.up,
    down: migration_20260612_020000_locations.down,
    name: '20260612_020000_locations',
  },
  {
    up: migration_20260613_010000_training.up,
    down: migration_20260613_010000_training.down,
    name: '20260613_010000_training',
  },
  {
    up: migration_20260613_020000_contacts.up,
    down: migration_20260613_020000_contacts.down,
    name: '20260613_020000_contacts',
  },
  {
    up: migration_20260613_030000_applications.up,
    down: migration_20260613_030000_applications.down,
    name: '20260613_030000_applications',
  },
  {
    up: migration_20260617_153500_social_networks_site_settings.up,
    down: migration_20260617_153500_social_networks_site_settings.down,
    name: '20260617_153500_social_networks_site_settings',
  },
  {
    up: migration_20260618_061500_page_seo_globals.up,
    down: migration_20260618_061500_page_seo_globals.down,
    name: '20260618_061500_page_seo_globals',
  },
  {
    up: migration_20260622_010000_structured_order_fields.up,
    down: migration_20260622_010000_structured_order_fields.down,
    name: '20260622_010000_structured_order_fields',
  },
  {
    up: migration_20260712_000000_admin_confirmed_order_payments.up,
    down: migration_20260712_000000_admin_confirmed_order_payments.down,
    name: '20260712_000000_admin_confirmed_order_payments',
  },
  {
    up: migration_20260722_080000_site_settings_topbar.up,
    down: migration_20260722_080000_site_settings_topbar.down,
    name: '20260722_080000_site_settings_topbar',
  },
  {
    up: migration_20260722_090000_product_catalog_poster.up,
    down: migration_20260722_090000_product_catalog_poster.down,
    name: '20260722_090000_product_catalog_poster',
  },
]
