import { attributeTypeModelSchemaOptions } from '@app-pmsg/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('attributeTypeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'attributeType',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...attributeTypeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
