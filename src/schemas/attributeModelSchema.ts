import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const attributeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'attributeId',
  },
  attributeTypeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'AttributeTypeModel',
  },
  ...commonSchemaFieldGroupModelType,
};
