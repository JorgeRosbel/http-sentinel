import { type HttpErrorMessage, HttpStatusCode } from './types';

export function createHttpError(
  defaultMessage: HttpErrorMessage,
  defaultName: HttpErrorMessage,
  statusCode?: HttpStatusCode
) {
  return class extends Error {
    public readonly status_code = statusCode;

    constructor(message = defaultMessage) {
      super(message);
      this.name = defaultName;
      Object.setPrototypeOf(this, new.target.prototype);
    }
  };
}

// Creación de las clases de error HTTP usando la fábrica
// 400 - Bad Request
export const BadRequest = createHttpError('BadRequest', 'BadRequest', 400);
// 401 - Unauthorized
export const Unauthorized = createHttpError('Unauthorized', 'Unauthorized', 401);
// 402 - Payment Required
export const PaymentRequired = createHttpError('PaymentRequired', 'PaymentRequired', 402);
// 403 - Forbidden
export const Forbidden = createHttpError('Forbidden', 'Forbidden', 403);
// 404 - Not Found
export const NotFound = createHttpError('NotFound', 'NotFound', 404);
// 405 - Method Not Allowed
export const MethodNotAllowed = createHttpError('MethodNotAllowed', 'MethodNotAllowed', 405);
// 406 - Not Acceptable
export const NotAcceptable = createHttpError('NotAcceptable', 'NotAcceptable', 406);
// 407 - Proxy Authentication Required
export const ProxyAuthenticationRequired = createHttpError(
  'ProxyAuthenticationRequired',
  'ProxyAuthenticationRequired',
  407
);
// 408 - Request Timeout
export const RequestTimeout = createHttpError('RequestTimeout', 'RequestTimeout', 408);
// 409 - Conflict
export const Conflict = createHttpError('Conflict', 'Conflict', 409);
// 410 - Gone
export const Gone = createHttpError('Gone', 'Gone', 410);
// 411 - Length Required
export const LengthRequired = createHttpError('LengthRequired', 'LengthRequired', 411);
// 412 - Precondition Failed
export const PreconditionFailed = createHttpError('PreconditionFailed', 'PreconditionFailed', 412);
// 413 - Payload Too Large
export const PayloadTooLarge = createHttpError('PayloadTooLarge', 'PayloadTooLarge', 413);
// 414 - URI Too Long
export const URITooLong = createHttpError('URITooLong', 'URITooLong', 414);
// 415 - Unsupported Media Type
export const UnsupportedMediaType = createHttpError(
  'UnsupportedMediaType',
  'UnsupportedMediaType',
  415
);
// 416 - Range Not Satisfiable
export const RangeNotSatisfiable = createHttpError(
  'RangeNotSatisfiable',
  'RangeNotSatisfiable',
  416
);
// 417 - Expectation Failed
export const ExpectationFailed = createHttpError('ExpectationFailed', 'ExpectationFailed', 417);
// 418 - I'm a teapot
export const ImATeapot = createHttpError('ImATeapot', 'ImATeapot', 418);
// 421 - Misdirected Request
export const MisdirectedRequest = createHttpError('MisdirectedRequest', 'MisdirectedRequest', 421);
// 422 - Unprocessable Entity
export const UnprocessableEntity = createHttpError(
  'UnprocessableEntity',
  'UnprocessableEntity',
  422
);
// 423 - Locked
export const Locked = createHttpError('Locked', 'Locked', 423);
// 424 - Failed Dependency
export const FailedDependency = createHttpError('FailedDependency', 'FailedDependency', 424);
// 425 - Too Early
export const TooEarly = createHttpError('TooEarly', 'TooEarly', 425);
// 426 - Upgrade Required
export const UpgradeRequired = createHttpError('UpgradeRequired', 'UpgradeRequired', 426);
// 428 - Precondition Required
export const PreconditionRequired = createHttpError(
  'PreconditionRequired',
  'PreconditionRequired',
  428
);
// 429 - Too Many Requests
export const TooManyRequests = createHttpError('TooManyRequests', 'TooManyRequests', 429);
// 431 - Request Header Fields Too Large
export const RequestHeaderFieldsTooLarge = createHttpError(
  'RequestHeaderFieldsTooLarge',
  'RequestHeaderFieldsTooLarge',
  431
);
// 451 - Unavailable For Legal Reasons
export const UnavailableForLegalReasons = createHttpError(
  'UnavailableForLegalReasons',
  'UnavailableForLegalReasons',
  451
);

// 500 - Internal Server Error
export const InternalServer = createHttpError('InternalServer', 'InternalServer', 500);
// 501 - Not Implemented
export const NotImplemented = createHttpError('NotImplemented', 'NotImplemented', 501);
// 502 - Bad Gateway
export const BadGateway = createHttpError('BadGateway', 'BadGateway', 502);
// 503 - Service Unavailable
export const ServiceUnavailable = createHttpError('ServiceUnavailable', 'ServiceUnavailable', 503);
// 504 - Gateway Timeout
export const GatewayTimeout = createHttpError('GatewayTimeout', 'GatewayTimeout', 504);
// 505 - HTTP Version Not Supported
export const HTTPVersionNotSupported = createHttpError(
  'HTTPVersionNotSupported',
  'HTTPVersionNotSupported',
  505
);
// 506 - Variant Also Negotiates
export const VariantAlsoNegotiates = createHttpError(
  'VariantAlsoNegotiates',
  'VariantAlsoNegotiates',
  506
);
// 507 - Insufficient Storage
export const InsufficientStorage = createHttpError(
  'InsufficientStorage',
  'InsufficientStorage',
  507
);
// 508 - Loop Detected
export const LoopDetected = createHttpError('LoopDetected', 'LoopDetected', 508);
// 510 - Not Extended
export const NotExtended = createHttpError('NotExtended', 'NotExtended', 510);
// 511 - Network Authentication Required
export const NetworkAuthenticationRequired = createHttpError(
  'NetworkAuthenticationRequired',
  'NetworkAuthenticationRequired',
  511
);

export type ExpectedError =
  | InstanceType<typeof BadRequest>
  | InstanceType<typeof Unauthorized>
  | InstanceType<typeof PaymentRequired>
  | InstanceType<typeof Forbidden>
  | InstanceType<typeof NotFound>
  | InstanceType<typeof MethodNotAllowed>
  | InstanceType<typeof NotAcceptable>
  | InstanceType<typeof ProxyAuthenticationRequired>
  | InstanceType<typeof RequestTimeout>
  | InstanceType<typeof Conflict>
  | InstanceType<typeof Gone>
  | InstanceType<typeof LengthRequired>
  | InstanceType<typeof PreconditionFailed>
  | InstanceType<typeof PayloadTooLarge>
  | InstanceType<typeof URITooLong>
  | InstanceType<typeof UnsupportedMediaType>
  | InstanceType<typeof RangeNotSatisfiable>
  | InstanceType<typeof ExpectationFailed>
  | InstanceType<typeof ImATeapot>
  | InstanceType<typeof MisdirectedRequest>
  | InstanceType<typeof UnprocessableEntity>
  | InstanceType<typeof Locked>
  | InstanceType<typeof FailedDependency>
  | InstanceType<typeof TooEarly>
  | InstanceType<typeof UpgradeRequired>
  | InstanceType<typeof PreconditionRequired>
  | InstanceType<typeof TooManyRequests>
  | InstanceType<typeof RequestHeaderFieldsTooLarge>
  | InstanceType<typeof UnavailableForLegalReasons>
  | InstanceType<typeof InternalServer>
  | InstanceType<typeof NotImplemented>
  | InstanceType<typeof BadGateway>
  | InstanceType<typeof ServiceUnavailable>
  | InstanceType<typeof GatewayTimeout>
  | InstanceType<typeof HTTPVersionNotSupported>
  | InstanceType<typeof VariantAlsoNegotiates>
  | InstanceType<typeof InsufficientStorage>
  | InstanceType<typeof LoopDetected>
  | InstanceType<typeof NotExtended>
  | InstanceType<typeof NetworkAuthenticationRequired>;
