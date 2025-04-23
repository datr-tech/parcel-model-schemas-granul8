import { resourceAttributeModelSchemaOptions } from '@app-pmsg/schemas';
import { commonSchemaOptions } from '@datr.tech/parcel-model-schemas-common-fields';

describe('resourceAttributeModelSchemaOptions', () => {
  describe('positive', () => {
    test('should contain the expected props', () => {
      // Arrange
      const propsExpected = {
        collection: 'resourceAttribute',
        ...commonSchemaOptions,
      };

      // Act
      const propsFound = { ...resourceAttributeModelSchemaOptions };

      // Assert
      expect(propsFound).toStrictEqual(propsExpected);
    });
  });
});
