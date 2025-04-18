import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

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
