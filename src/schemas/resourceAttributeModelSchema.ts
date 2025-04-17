import { commonSchemaFieldGroupModelType, commonSchemaFieldDefObjectIdRequired } from '@freight/common-schema-fields';

export const resourceAttributeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'resourceAttributeId',
  },
  attributeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'AttributeModel',
  },
  resourceId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'ResourceModel',
  },
  ...commonSchemaFieldGroupModelType,
};
