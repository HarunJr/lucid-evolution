import { Data, Effect, ParseResult, Schema } from "effect";
import * as Hex from "./Hex.js";

export class SerializationError extends Data.TaggedError("SerializationError")<{
  message?: ParseResult.ParseError;
}> {}

/**
 * Serialization function interfaces for encoding and decoding data
 *
 * @since 1.0.0
 * @category encoding/decoding
 */

/**
 * Base serialization function type
 *
 * @since 1.0.0
 * @category model
 */
export interface SerializationFn<Input, Output, Error = never> {
  (input: Input): Effect.Effect<Output, Error>;
}

/**
 * Synchronous serialization function that throws on error
 *
 * @since 1.0.0
 * @category model
 */
export interface SerializationFnSync<Input, Output> {
  (input: Input): Output;
}

// To/from CBOR interfaces

/**
 * Converts a value to its CBOR byte representation
 *
 * @since 1.0.0
 * @category encoding/decoding
 */
export type ToCBORBytes<T> = SerializationFnSync<T, Uint8Array>;

/**
 * Converts a value to its CBOR hex string representation
 *
 * @since 1.0.0
 * @category encoding/decoding
 */
export type ToCBOR<T> = SerializationFnSync<T, Hex.HexString>;

/**
 * Creates a value from its CBOR hex string representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromCBOR<Input, Output, Error = never> = SerializationFn<
  Input,
  Output,
  Error
>;

/**
 * Creates a value from its CBOR hex string representation, throws on error
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromCBOROrThrow<Input, Output> = SerializationFnSync<Input, Output>;

/**
 * Creates a value from its CBOR byte representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromCBORBytes<Output, Error = never> = SerializationFn<
  Uint8Array,
  Output,
  Error
>;

/**
 * Creates a value from its CBOR byte representation, throws on error
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromCBORBytesOrThrow<T> = SerializationFnSync<Uint8Array, T>;

// To/from bytes interfaces

/**
 * Creates a value from its byte representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromBytes<Output, Error = never> = SerializationFn<
  Uint8Array,
  Output,
  Error
>;

/**
 * Creates a value from its hex string representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromHex<Output, Error = never> = SerializationFn<
  string,
  Output,
  Error
>;

/**
 * Creates a value from its bech32 string representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromBech32<Output, Error = never> = SerializationFn<
  string,
  Output,
  Error
>;

/**
 * Creates a value from string representation
 *
 * @since 1.0.0
 * @category constructors
 */
export type FromString<Output, Error = never> = SerializationFn<
  string,
  Output,
  Error
>;

/**
 * Converts a value to its byte representation
 *
 * @since 1.0.0
 * @category encoding/decoding
 */
export type ToBytes<T> = SerializationFnSync<T, Uint8Array>;

/**
 * Creates a value from a string identifier
 *
 * @since 1.0.0
 * @category constructors
 */
export type Make<Output, Error = never> = SerializationFn<
  string,
  Output,
  Error
>;

/**
 * Creates a value from a string identifier, throws on error
 *
 * @since 1.0.0
 * @category constructors
 */
export type MakeOrThrow<Input, Output> = SerializationFnSync<Input, Output>;

/**
 * Type predicate for runtime type checking
 *
 * @since 1.0.0
 * @category predicates
 */
export interface TypePredicate<T> {
  (value: unknown): value is T;
}

export const encode =
  <A, I, R>(schema: Schema.Schema<A, I, R>) =>
  (value: A) =>
    Schema.encode(schema)(value).pipe(
      Effect.mapError((e) => new SerializationError({ message: e })),
    );
export const decode =
  <A, I, R>(schema: Schema.Schema<A, I, R>) =>
  (value: I) =>
    Schema.decode(schema)(value).pipe(
      Effect.mapError((e) => new SerializationError({ message: e })),
    );

export const encodeEither =
  <A, I>(schema: Schema.Schema<A, I>) =>
  (value: A) =>
    Schema.encodeEither(schema)(value).pipe(
      Effect.mapError((e) => new SerializationError({ message: e })),
    );

export const decodeEither =
  <A, I>(schema: Schema.Schema<A, I>) =>
  (value: I) =>
    Schema.decodeEither(schema)(value).pipe(
      Effect.mapError((e) => new SerializationError({ message: e })),
    );

export const encodeOrThrow =
  <A, I>(schema: Schema.Schema<A, I>) =>
  (value: A): I => {
    try {
      return Schema.encodeSync(schema)(value);
    } catch (error) {
      throw new SerializationError({
        message: error as ParseResult.ParseError,
      });
    }
  };

export const decodeOrThrow =
  <A, I>(schema: Schema.Schema<A, I>) =>
  (value: unknown) => {
    try {
      return Schema.decodeUnknownSync(schema)(value);
    } catch (error) {
      throw new SerializationError({
        message: error as ParseResult.ParseError,
      });
    }
  };

export const formatError = (parseError: ParseResult.ParseError) =>
  JSON.stringify(ParseResult.ArrayFormatter.formatErrorSync(parseError));
