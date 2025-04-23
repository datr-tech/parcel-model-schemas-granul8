import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

import { userAttributeModelSchema } from '@app-pmsg/schemas';

describe('userAttributeModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...userAttributeModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
