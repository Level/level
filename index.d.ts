// TypeScript Version: 3.0

import { Readable } from "stream";
import { EventEmitter } from "events";

declare namespace level {
  interface EncodingDownOptions {
    /**
     * Encoding to use for keys
     *
     * @default 'utf8'
     */
    keyEncoding?: string;

    /**
     * Encoding to use for values
     * @default 'utf8'
     */
    valueEncoding?: string;
  }

  interface LevelDownOptions {
    /**
     * Initialize an empty database at the specified location if one doesn't already exist.
     * If `false` and a database doesn't exist you will receive an error in your `open()` callback and your database won't open.
     *
     * @default true
     */
    createIfMissing?: boolean;

    /**
     * If `true`, you will receive an error in your `open()` callback if the database exists at the specified location.
     * @default true
     */
    errorIfExists?: boolean;

    /**
     * If `true`, all compressible data will be run through the Snappy compression algorithm before being stored. Snappy is very fast and shouldn't gain much speed by disabling so leave this on unless you have good reason to turn it off.
     *
     * @default true
     */
    compression: boolean;

    /**
     * The size (in bytes) of the in-memory LRU cache with frequently used uncompressed block contents.
     *
     * @default 8388608 = 8 * 1024 * 1024 = 8MB
     */
    cacheSize: number;
  }

  interface LevelJsOptions {
    /**
     * Prefix for `IDBDatabase` name.
     *
     * @default 'level-js-'
     */
    prefix: string;

    /**
     * The version to open the database with.
     *
     * @default 1
     */
    version: number;
  }

  /**
   * Passed on to the underlying store
   */
  type Options = EncodingDownOptions & LevelDownOptions & LevelJsOptions;

  interface Db extends EventEmitter {
    // TODO: determine callback and return types
    open(callback: any): any;

    // TODO
    close(callback: any): any;

    put(
      key: unknown,
      value: unknown,
      options?: Options,
      callback?: (err: null | Error) => void
    ): void;

    put(key: unknown, value: unknown, options?: Options): Promise<unknown>;

    get(
      key: unknown,
      value: unknown,
      options?: Options,
      callback?: (err: null | Error, value: unknown) => void
    ): void;

    get(key: unknown, value: unknown, options?: Options): Promise<unknown>;

    del(
      key: unknown,
      options?: Options,
      callback?: (err: null | Error) => void
    ): void;

    del(key: unknown, options?: Options): Promise<unknown>;

    // TODO: determine callback signature
    batch(array: unknown[], options?: Options, callback?: any): void;

    batch(array: unknown[], options?: Options): Promise<unknown>;

    batch(): Batch;

    isOpen(): boolean;

    isClosed(): boolean;

    createReadStream(options: StreamOptions): Readable;

    createKeyStream(options: StreamOptions): Readable;

    createValueStream(options: StreamOptions): Readable;
  }

  interface Batch {
    del(key: unknown): Batch;

    put(key: unknown, value: unknown): Batch;

    clear(): Batch;

    length: number;

    write(options: Options, callback?: (err: null | Error) => void): void;

    write(options: Options): Promise<unknown>;
  }

  interface StreamOptions {
    gt: number;
    gte: number;
    lt: number;
    lte: number;

    /**
     * @default false
     */
    reverse: boolean;

    /**
     * @default true
     */
    key: boolean;

    /**
     * @default true
     */
    values: boolean;
  }
}

declare function level(
  location: string,
  options?: level.Options,
  callback?: any
): level.Db;

export = level;
