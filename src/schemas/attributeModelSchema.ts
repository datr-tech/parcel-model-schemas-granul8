import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

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
