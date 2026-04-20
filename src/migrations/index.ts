import * as migration_20260420_084925_products_cms_fields from './20260420_084925_products_cms_fields';

export const migrations = [
  {
    up: migration_20260420_084925_products_cms_fields.up,
    down: migration_20260420_084925_products_cms_fields.down,
    name: '20260420_084925_products_cms_fields'
  },
];
