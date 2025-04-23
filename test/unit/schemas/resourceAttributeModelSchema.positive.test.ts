import {
  commonSchemaFieldDefObjectIdRequired,
  commonSchemaFieldGroupModelType,
} from '@datr.tech/parcel-model-schemas-common-fields';

import { resourceAttributeModelSchema } from '@app-pmsg/schemas';

describe('resourceAttributeModelSchema', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
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

      // Act
      const propsFound = { ...resourceAttributeModelSchema };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
