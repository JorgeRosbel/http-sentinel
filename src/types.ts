export type HttpErrorMessage =
  | 'BadRequest'
  | 'Unauthorized'
  | 'PaymentRequired'
  | 'Forbidden'
  | 'NotFound'
  | 'MethodNotAllowed'
  | 'NotAcceptable'
  | 'ProxyAuthenticationRequired'
  | 'RequestTimeout'
  | 'Conflict'
  | 'Gone'
  | 'LengthRequired'
  | 'PreconditionFailed'
  | 'PayloadTooLarge'
  | 'URITooLong'
  | 'UnsupportedMediaType'
  | 'RangeNotSatisfiable'
  | 'ExpectationFailed'
  | 'ImATeapot'
  | 'MisdirectedRequest'
  | 'UnprocessableEntity'
  | 'Locked'
  | 'FailedDependency'
  | 'TooEarly'
  | 'UpgradeRequired'
  | 'PreconditionRequired'
  | 'TooManyRequests'
  | 'RequestHeaderFieldsTooLarge'
  | 'UnavailableForLegalReasons'
  | 'InternalServer'
  | 'NotImplemented'
  | 'BadGateway'
  | 'ServiceUnavailable'
  | 'GatewayTimeout'
  | 'HTTPVersionNotSupported'
  | 'VariantAlsoNegotiates'
  | 'InsufficientStorage'
  | 'LoopDetected'
  | 'NotExtended'
  | 'NetworkAuthenticationRequired'
  | 'UnknownError'
  | (string & {});

export type HttpStatusCode =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511
  | 0;

export interface RequestError {
  message: string;
  name: string;
  statusCode?: HttpStatusCode;
}

export interface ApiResponse<U> {
  error: RequestError | null;
  data: U | null;
  success: boolean;
}

export interface RequestModel {
  url: RequestInfo | URL;
  options?: RequestInit;
  timeout?: number;
}

export interface RequestMethods {
  get: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  post: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  put: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  patch: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  delete: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  options: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
  head: <U>(params: RequestModel) => Promise<ApiResponse<U>>;
}
