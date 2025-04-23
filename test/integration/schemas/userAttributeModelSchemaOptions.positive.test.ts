import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { userAttributeModelSchemaOptions } from './../../../dist';

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
