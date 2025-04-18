import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const attributeTypeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'attributeTypeId',
  },
  ...commonSchemaFieldGroupModelType,
};
