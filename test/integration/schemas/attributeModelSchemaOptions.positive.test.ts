import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';
import { attributeModelSchemaOptions } from './../../../dist';

describe('attributeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'attribute',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...attributeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
