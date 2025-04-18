import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/leith-common-schema-fields';

export const userAttributeModelSchema = {
  _id: {
    ...commonSchemaFieldDefObjectIdRequired,
    alias: 'userAttributeId',
  },
  attributeId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'AttributeModel',
  },
  userId: {
    ...commonSchemaFieldDefObjectIdRequired,
    ref: 'persona/UserModel',
  },
  ...commonSchemaFieldGroupModelType,
};
