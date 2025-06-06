/**
 * @since 2.0.0
 */
import * as CML from "@anastasia-labs/cardano-multiplatform-lib-nodejs";

/**
 * Type alias for the CML ChangeSelectionAlgo enum
 *
 * @since 2.0.0
 * @category Types
 */
export type ChangeSelectionAlgo = CML.ChangeSelectionAlgo;

/**
 * Default variant of the ChangeSelectionAlgo enum
 *
 * @since 2.0.0
 * @category Variants
 */
export const Default = CML.ChangeSelectionAlgo.Default;

/**
 * Get all values of the ChangeSelectionAlgo enum
 *
 * @since 2.0.0
 * @category Utils
 */
export const values = (): Array<CML.ChangeSelectionAlgo> => [
  CML.ChangeSelectionAlgo.Default,
];

/**
 * Convert ChangeSelectionAlgo enum value to string
 *
 * @since 2.0.0
 * @category Utils
 */
export const toString = (value: CML.ChangeSelectionAlgo): string => {
  switch (value) {
    case CML.ChangeSelectionAlgo.Default:
      return "Default";
    default:
      return "Unknown";
  }
};

/**
 * Convert string to ChangeSelectionAlgo enum value
 *
 * @since 2.0.0
 * @category Utils
 */
export const fromString = (
  str: string,
): CML.ChangeSelectionAlgo | undefined => {
  switch (str) {
    case "Default":
      return CML.ChangeSelectionAlgo.Default;
    default:
      return undefined;
  }
};
