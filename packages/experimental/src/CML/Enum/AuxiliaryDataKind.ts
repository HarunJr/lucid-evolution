/**
 * @since 2.0.0
 */
import * as CML from "@anastasia-labs/cardano-multiplatform-lib-nodejs";

/**
 * Type alias for the CML AuxiliaryDataKind enum
 *
 * @since 2.0.0
 * @category Types
 */
export type AuxiliaryDataKind = CML.AuxiliaryDataKind;

/**
 * Shelley variant of the AuxiliaryDataKind enum
 *
 * @since 2.0.0
 * @category Variants
 */
export const Shelley = CML.AuxiliaryDataKind.Shelley;

/**
 * ShelleyMA variant of the AuxiliaryDataKind enum
 *
 * @since 2.0.0
 * @category Variants
 */
export const ShelleyMA = CML.AuxiliaryDataKind.ShelleyMA;

/**
 * Conway variant of the AuxiliaryDataKind enum
 *
 * @since 2.0.0
 * @category Variants
 */
export const Conway = CML.AuxiliaryDataKind.Conway;

/**
 * Get all values of the AuxiliaryDataKind enum
 *
 * @since 2.0.0
 * @category Utils
 */
export const values = (): Array<CML.AuxiliaryDataKind> => [
  CML.AuxiliaryDataKind.Shelley,
  CML.AuxiliaryDataKind.ShelleyMA,
  CML.AuxiliaryDataKind.Conway,
];

/**
 * Convert AuxiliaryDataKind enum value to string
 *
 * @since 2.0.0
 * @category Utils
 */
export const toString = (value: CML.AuxiliaryDataKind): string => {
  switch (value) {
    case CML.AuxiliaryDataKind.Shelley:
      return "Shelley";
    case CML.AuxiliaryDataKind.ShelleyMA:
      return "ShelleyMA";
    case CML.AuxiliaryDataKind.Conway:
      return "Conway";
    default:
      return "Unknown";
  }
};

/**
 * Convert string to AuxiliaryDataKind enum value
 *
 * @since 2.0.0
 * @category Utils
 */
export const fromString = (str: string): CML.AuxiliaryDataKind | undefined => {
  switch (str) {
    case "Shelley":
      return CML.AuxiliaryDataKind.Shelley;
    case "ShelleyMA":
      return CML.AuxiliaryDataKind.ShelleyMA;
    case "Conway":
      return CML.AuxiliaryDataKind.Conway;
    default:
      return undefined;
  }
};
