/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number };
type MaybeErrorWithCode = ErrorWithCode | null | undefined;

const createErrorFromCodeLookup = new Map<number, () => ErrorWithCode>();
const createErrorFromNameLookup = new Map<string, () => ErrorWithCode>();

/**
 * InvalidAuthority: 'Invalid authority for instruction'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAuthorityError extends Error {
  readonly code: number = 0x1770;
  readonly name: string = "InvalidAuthority";
  constructor() {
    super("Invalid authority for instruction");
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, InvalidAuthorityError);
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new InvalidAuthorityError());
createErrorFromNameLookup.set(
  "InvalidAuthority",
  () => new InvalidAuthorityError()
);

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code);
  return createError != null ? createError() : null;
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name);
  return createError != null ? createError() : null;
}
