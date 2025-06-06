/**
 * @since 2.0.0
 */
import { Data, Effect } from "effect";
import * as CML from "@anastasia-labs/cardano-multiplatform-lib-nodejs";

/**
 * Type alias for the CML AnchorDocHash class
 *
 * @since 2.0.0
 * @category Types
 */
export type AnchorDocHash = CML.AnchorDocHash;

/**
 * Error class for AnchorDocHash operations
 *
 * This error is thrown when operations on AnchorDocHash instances fail.
 *
 * @since 2.0.0
 * @category Errors
 */
export class AnchorDocHashError extends Data.TaggedError("AnchorDocHashError")<{
  message?: string;
}> {}

/**
 * Method free of AnchorDocHash
 *
 * @since 2.0.0
 * @category Methods
 */
export const free: (
  instance: CML.AnchorDocHash,
) => Effect.Effect<void, AnchorDocHashError> = Effect.fn(
  (instance: CML.AnchorDocHash) =>
    Effect.try({
      try: () => instance.free(),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.free failed Hint: Check if you're calling free() more than once.`,
        }),
    }),
);

/**
 * Unsafely calls instance.free without Effect wrapper
 *
 * @since 2.0.0
 * @category MethodsUnsafe
 */
export const freeUnsafe = (instance: CML.AnchorDocHash): void =>
  Effect.runSync(free(instance));

/**
 * Method toBech32 of AnchorDocHash
 *
 * @since 2.0.0
 * @category Methods
 */
export const toBech32: (
  instance: CML.AnchorDocHash,
  prefix: string,
) => Effect.Effect<string, AnchorDocHashError> = Effect.fn(
  (instance: CML.AnchorDocHash, prefix: string) =>
    Effect.try({
      try: () => instance.to_bech32(prefix),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.toBech32 failed with parameters: ${prefix}. AnchorDocHash is not valid for string conversion. `,
        }),
    }),
);

/**
 * Unsafely calls instance.toBech32 without Effect wrapper
 *
 * @since 2.0.0
 * @category MethodsUnsafe
 */
export const toBech32Unsafe = (
  instance: CML.AnchorDocHash,
  prefix: string,
): string => Effect.runSync(toBech32(instance, prefix));

/**
 * Static method fromBech32 of AnchorDocHash
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromBech32: (
  bech32Str: string,
) => Effect.Effect<CML.AnchorDocHash, AnchorDocHashError> = Effect.fn(
  function* (bech32Str: string) {
    return yield* Effect.try({
      try: () => CML.AnchorDocHash.from_bech32(bech32Str),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.fromBech32 failed with parameters: ${bech32Str}. `,
        }),
    });
  },
);

/**
 * Unsafely calls AnchorDocHash.fromBech32 without Effect wrapper
 *
 * @since 2.0.0
 * @category ConstructorsUnsafe
 */
export const fromBech32Unsafe = (bech32Str: string): CML.AnchorDocHash =>
  Effect.runSync(fromBech32(bech32Str));

/**
 * Method toRawBytes of AnchorDocHash
 *
 * @since 2.0.0
 * @category Methods
 */
export const toRawBytes: (
  instance: CML.AnchorDocHash,
) => Effect.Effect<Uint8Array, AnchorDocHashError> = Effect.fn(
  (instance: CML.AnchorDocHash) =>
    Effect.try({
      try: () => instance.to_raw_bytes(),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.toRawBytes failed AnchorDocHash is not valid for Uint8Array conversion. Hint: Check byte length and encoding.`,
        }),
    }),
);

/**
 * Unsafely calls instance.toRawBytes without Effect wrapper
 *
 * @since 2.0.0
 * @category MethodsUnsafe
 */
export const toRawBytesUnsafe = (instance: CML.AnchorDocHash): Uint8Array =>
  Effect.runSync(toRawBytes(instance));

/**
 * Static method fromRawBytes of AnchorDocHash
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromRawBytes: (
  bytes: Uint8Array,
) => Effect.Effect<CML.AnchorDocHash, AnchorDocHashError> = Effect.fn(
  function* (bytes: Uint8Array) {
    return yield* Effect.try({
      try: () => CML.AnchorDocHash.from_raw_bytes(bytes),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.fromRawBytes failed with parameters: ${bytes}. Hint: Check byte length and encoding.`,
        }),
    });
  },
);

/**
 * Unsafely calls AnchorDocHash.fromRawBytes without Effect wrapper
 *
 * @since 2.0.0
 * @category ConstructorsUnsafe
 */
export const fromRawBytesUnsafe = (bytes: Uint8Array): CML.AnchorDocHash =>
  Effect.runSync(fromRawBytes(bytes));

/**
 * Method toHex of AnchorDocHash
 *
 * @since 2.0.0
 * @category Methods
 */
export const toHex: (
  instance: CML.AnchorDocHash,
) => Effect.Effect<string, AnchorDocHashError> = Effect.fn(
  (instance: CML.AnchorDocHash) =>
    Effect.try({
      try: () => instance.to_hex(),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.toHex failed AnchorDocHash is not valid for string conversion. Hint: Ensure hex string has valid characters and length.`,
        }),
    }),
);

/**
 * Unsafely calls instance.toHex without Effect wrapper
 *
 * @since 2.0.0
 * @category MethodsUnsafe
 */
export const toHexUnsafe = (instance: CML.AnchorDocHash): string =>
  Effect.runSync(toHex(instance));

/**
 * Static method fromHex of AnchorDocHash
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromHex: (
  input: string,
) => Effect.Effect<CML.AnchorDocHash, AnchorDocHashError> = Effect.fn(
  function* (input: string) {
    return yield* Effect.try({
      try: () => CML.AnchorDocHash.from_hex(input),
      catch: () =>
        new AnchorDocHashError({
          message: `AnchorDocHash.fromHex failed with parameters: ${input}. Hint: Ensure hex string has valid characters and length.`,
        }),
    });
  },
);

/**
 * Unsafely calls AnchorDocHash.fromHex without Effect wrapper
 *
 * @since 2.0.0
 * @category ConstructorsUnsafe
 */
export const fromHexUnsafe = (input: string): CML.AnchorDocHash =>
  Effect.runSync(fromHex(input));
