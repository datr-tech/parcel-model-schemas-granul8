import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
