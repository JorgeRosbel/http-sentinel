# HTTP Error Handling Library

A TypeScript library that provides a comprehensive set of HTTP error classes and utilities for handling HTTP errors in your applications.

## Features

- Complete set of HTTP error classes (4xx and 5xx status codes)
- Type-safe error handling
- Custom error messages support
- Utility functions for error type checking
- TypeScript support with full type definitions

## Installation

```bash
npm i http-sentinel
```

## Usage

### Basic Usage

```typescript
import { NotFound, BadRequest } from 'http-error-handler';

// Throw a 404 error
throw new NotFound();

// Throw a 400 error with custom message
throw new BadRequest();
```

### Error Type Checking

```typescript
import { isErraticError } from 'http-error-handler';

try {
  // Your code here
} catch (error) {
  if (isErraticError(error)) {
    console.log(`HTTP Error: ${error.status_code} - ${error.message}`);
  }
}
```

## Available Error Classes

### 4xx Client Errors

- `BadRequest` (400)
- `Unauthorized` (401)
- `PaymentRequired` (402)
- `Forbidden` (403)
- `NotFound` (404)
- `MethodNotAllowed` (405)
- `NotAcceptable` (406)
- `ProxyAuthenticationRequired` (407)
- `RequestTimeout` (408)
- `Conflict` (409)
- `Gone` (410)
- `LengthRequired` (411)
- `PreconditionFailed` (412)
- `PayloadTooLarge` (413)
- `URITooLong` (414)
- `UnsupportedMediaType` (415)
- `RangeNotSatisfiable` (416)
- `ExpectationFailed` (417)
- `ImATeapot` (418)
- `MisdirectedRequest` (421)
- `UnprocessableEntity` (422)
- `Locked` (423)
- `FailedDependency` (424)
- `TooEarly` (425)
- `UpgradeRequired` (426)
- `PreconditionRequired` (428)
- `TooManyRequests` (429)
- `RequestHeaderFieldsTooLarge` (431)
- `UnavailableForLegalReasons` (451)

### 5xx Server Errors

- `InternalServer` (500)
- `NotImplemented` (501)
- `BadGateway` (502)
- `ServiceUnavailable` (503)
- `GatewayTimeout` (504)
- `HTTPVersionNotSupported` (505)
- `VariantAlsoNegotiates` (506)
- `InsufficientStorage` (507)
- `LoopDetected` (508)
- `NotExtended` (510)
- `NetworkAuthenticationRequired` (511)

## API Reference

### Error Classes

Each error class extends the base `Error` class and includes:
- `status_code`: The HTTP status code
- `name`: The error name
- `message`: The error message

### Utility Functions

#### `isErraticError(error: unknown): error is ExpectedError`

Type guard function to check if an error is an instance of any HTTP error class.

## TypeScript Support

The library includes TypeScript definitions for all error classes and utility functions. It exports the following types:

- `HttpErrorMessage`: Union type of all possible HTTP error message names
- `HttpStatusCode`: Union type of all possible HTTP status codes
- `ExpectedError`: Union type of all possible HTTP error instances

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
