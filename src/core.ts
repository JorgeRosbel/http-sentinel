import { type HttpErrorMessage } from '@/types';

import {
  UnknownError,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  PayloadTooLarge,
  URITooLong,
  UnsupportedMediaType,
  RangeNotSatisfiable,
  ExpectationFailed,
  ImATeapot,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  TooEarly,
  UpgradeRequired,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,
  InternalServer,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
  VariantAlsoNegotiates,
  InsufficientStorage,
  LoopDetected,
  NotExtended,
  NetworkAuthenticationRequired,
  BadRequest,
  createHttpError as customError,
} from '@/errors';

import { resolveHttpError, compare, matches } from '@/tools';

function Core() {
  const errors = {
    BadRequest: (message?: HttpErrorMessage) => {
      throw new BadRequest(message);
    },
    Unauthorized: (message?: HttpErrorMessage) => {
      throw new Unauthorized(message);
    },
    PaymentRequired: (message?: HttpErrorMessage) => {
      throw new PaymentRequired(message);
    },
    Forbidden: (message?: HttpErrorMessage) => {
      throw new Forbidden(message);
    },
    NotFound: (message?: HttpErrorMessage) => {
      throw new NotFound(message);
    },
    MethodNotAllowed: (message?: HttpErrorMessage) => {
      throw new MethodNotAllowed(message);
    },
    NotAcceptable: (message?: HttpErrorMessage) => {
      throw new NotAcceptable(message);
    },
    ProxyAuthenticationRequired: (message?: HttpErrorMessage) => {
      throw new ProxyAuthenticationRequired(message);
    },
    RequestTimeout: (message?: HttpErrorMessage) => {
      throw new RequestTimeout(message);
    },
    Conflict: (message?: HttpErrorMessage) => {
      throw new Conflict(message);
    },
    Gone: (message?: HttpErrorMessage) => {
      throw new Gone(message);
    },
    LengthRequired: (message?: HttpErrorMessage) => {
      throw new LengthRequired(message);
    },
    PreconditionFailed: (message?: HttpErrorMessage) => {
      throw new PreconditionFailed(message);
    },
    PayloadTooLarge: (message?: HttpErrorMessage) => {
      throw new PayloadTooLarge(message);
    },
    URITooLong: (message?: HttpErrorMessage) => {
      throw new URITooLong(message);
    },
    UnsupportedMediaType: (message?: HttpErrorMessage) => {
      throw new UnsupportedMediaType(message);
    },
    RangeNotSatisfiable: (message?: HttpErrorMessage) => {
      throw new RangeNotSatisfiable(message);
    },
    ExpectationFailed: (message?: HttpErrorMessage) => {
      throw new ExpectationFailed(message);
    },
    ImATeapot: (message?: HttpErrorMessage) => {
      throw new ImATeapot(message);
    },
    MisdirectedRequest: (message?: HttpErrorMessage) => {
      throw new MisdirectedRequest(message);
    },
    UnprocessableEntity: (message?: HttpErrorMessage) => {
      throw new UnprocessableEntity(message);
    },
    Locked: (message?: HttpErrorMessage) => {
      throw new Locked(message);
    },
    FailedDependency: (message?: HttpErrorMessage) => {
      throw new FailedDependency(message);
    },
    TooEarly: (message?: HttpErrorMessage) => {
      throw new TooEarly(message);
    },
    UpgradeRequired: (message?: HttpErrorMessage) => {
      throw new UpgradeRequired(message);
    },
    PreconditionRequired: (message?: HttpErrorMessage) => {
      throw new PreconditionRequired(message);
    },
    TooManyRequests: (message?: HttpErrorMessage) => {
      throw new TooManyRequests(message);
    },
    RequestHeaderFieldsTooLarge: (message?: HttpErrorMessage) => {
      throw new RequestHeaderFieldsTooLarge(message);
    },
    UnavailableForLegalReasons: (message?: HttpErrorMessage) => {
      throw new UnavailableForLegalReasons(message);
    },
    InternalServer: (message?: HttpErrorMessage) => {
      throw new InternalServer(message);
    },
    NotImplemented: (message?: HttpErrorMessage) => {
      throw new NotImplemented(message);
    },
    BadGateway: (message?: HttpErrorMessage) => {
      throw new BadGateway(message);
    },
    ServiceUnavailable: (message?: HttpErrorMessage) => {
      throw new ServiceUnavailable(message);
    },
    GatewayTimeout: (message?: HttpErrorMessage) => {
      throw new GatewayTimeout(message);
    },
    HTTPVersionNotSupported: (message?: HttpErrorMessage) => {
      throw new HTTPVersionNotSupported(message);
    },
    VariantAlsoNegotiates: (message?: HttpErrorMessage) => {
      throw new VariantAlsoNegotiates(message);
    },
    InsufficientStorage: (message?: HttpErrorMessage) => {
      throw new InsufficientStorage(message);
    },
    LoopDetected: (message?: HttpErrorMessage) => {
      throw new LoopDetected(message);
    },
    NotExtended: (message?: HttpErrorMessage) => {
      throw new NotExtended(message);
    },
    NetworkAuthenticationRequired: (message?: HttpErrorMessage) => {
      throw new NetworkAuthenticationRequired(message);
    },
    UnknownError: (message?: HttpErrorMessage) => {
      throw new UnknownError(message);
    },
  };

  const collections = {
    UnknownError,
    BadRequest,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    MethodNotAllowed,
    NotAcceptable,
    ProxyAuthenticationRequired,
    RequestTimeout,
    Conflict,
    Gone,
    LengthRequired,
    PreconditionFailed,
    PayloadTooLarge,
    URITooLong,
    UnsupportedMediaType,
    RangeNotSatisfiable,
    ExpectationFailed,
    ImATeapot,
    MisdirectedRequest,
    UnprocessableEntity,
    Locked,
    FailedDependency,
    TooEarly,
    UpgradeRequired,
    PreconditionRequired,
    TooManyRequests,
    RequestHeaderFieldsTooLarge,
    UnavailableForLegalReasons,
    InternalServer,
    NotImplemented,
    BadGateway,
    ServiceUnavailable,
    GatewayTimeout,
    HTTPVersionNotSupported,
    VariantAlsoNegotiates,
    InsufficientStorage,
    LoopDetected,
    NotExtended,
    NetworkAuthenticationRequired,
  };

  return {
    throw: errors,
    tools: { resolveHttpError, compare, matches },
    collections,
    create: { customError },
  };
}

export const stn = Core();
