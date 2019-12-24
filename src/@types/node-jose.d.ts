/**
 * @file node-jose types
 * @copyright simplefox GmbH
 * @author Shrujal Shah <shrujal@peerbits.com>
 */

/// <reference types="node" />

declare module 'node-jose' {
  namespace JWE {
    function createEncrypt(
      options: {
        format?: 'compact' | 'flattened';
        zip?: boolean;
        fields?: object;
      },
      key: JWK.IKey
    ): IEncryptor;

    interface IEncryptor {
      /**
       * update
       */
      update(input: Buffer): this;
      /**
       * final
       */
      final(): Promise<string>;
    }

    function createDecrypt(key: JWK.IKey): IDecryptor;

    interface IDecryptor {
      /**
       * decrypt
       */
      decrypt(input: string): Promise<{ payload: Buffer }>;
    }
  }

  namespace JWK {
    function asKey(
      key: IRawKey,
      form?:
        | 'json'
        | 'private'
        | 'pkcs8'
        | 'public'
        | 'spki'
        | 'pkix'
        | 'x509'
        | 'pem'
    ): Promise<IKey>;

    type KeyUse = 'sig' | 'enc' | 'desc';

    interface IJWEEncryptor {
      /**
       * update
       */
      update(input: Buffer): this;
      /**
       * final
       */
      final(): Promise<string>;
    }

    interface IRawKey {
      kty: string;
      k: string;
      use?: KeyUse;
      alg?: string;
    }

    interface IKey {
      length: number;
      kty: string;
      kid: string;
      use: KeyUse;
      alg: string;
    }
  }

  namespace JWS {
    function createSign(
      options: {
        format?: 'compact' | 'flattened';
        alg?: string;
        compact?: boolean;
        fields?: object;
      },
      key: JWK.IKey | JWK.IKey[]
    ): ISigner;

    interface ISigner {
      /**
       * update
       */
      update(input: Buffer | string, encoding?: string): this;
      /**
       * final
       */
      final(): Promise<string>;
    }

    /**
     * createVerify
     */
    function createVerify(
      input: JWK.IKey,
      opts?: {
        allowEmbeddedKey?: boolean;
        algorithms?: string[];
        handlers?: unknown;
      }
    ): IVerifier;

    interface IVerifier {
      /**
       * verify
       */
      verify(
        input: string,
        opts?: { allowEmbeddedKey?: boolean }
      ): Promise<{ payload: Buffer }>;
    }
  }
}
