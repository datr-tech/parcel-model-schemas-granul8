import { userAttributeModelSchemaOptions } from '@app-pmsg/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('userAttributeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'userAttribute',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...userAttributeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
