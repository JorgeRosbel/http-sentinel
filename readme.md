# HTTP Error Handling Library

A TypeScript library that provides a comprehensive set of HTTP error classes and utilities for handling HTTP errors in your applications.

## Features

- Complete set of HTTP error classes (4xx and 5xx status codes)
- Type-safe error handling
- Custom error messages support
- Utility functions for error type checking
- TypeScript support with full type definitions
- Factory function for creating custom HTTP errors

## Installation

```bash
npm i http-sentinel
```

## Usage

### Basic Usage

```typescript
import { NotFound, BadRequest } from 'http-sentinel';

// Throw a 404 error
throw new NotFound();

// Throw a 400 error
throw new BadRequest();
```

### Error Type Checking

```typescript
import { isSentinelError, check_error_type, throw_error_by_status_code } from 'http-sentinel';

// Check if an error is any HTTP error
try {
  // Your code here
} catch (error) {
  if (isSentinelError(error)) {
    console.log(`HTTP Error: ${error.status_code} - ${error.message}`);
  }
}

// Check if an error is a specific type
try {
  // Your code here
} catch (error) {
  if (isSentinelError(error) && check_error_type(error, NotFound)) {
    console.log('Resource not found');
  }
}

// Throw an error by status code
throw_error_by_status_code(404); // Throws a NotFound error
```

### Creating Custom HTTP Errors

```typescript
import { createHttpError } from 'http-sentinel';

// Create a custom HTTP error class
const CustomError = createHttpError("Custom Error", "CustomError", 499);

// Use the custom error
throw new CustomError();
```

### React Component Example

```typescript
import { useState } from 'react';
import { 
  isSentinelError, 
  check_error_type, 
  throw_error_by_status_code,
  BadGateway,
  Unauthorized,
  TooManyRequests,
  type ExpectedError 
} from 'http-sentinel';

function App() {
  const [error, setError] = useState<ExpectedError | null>(null);
  
  try {
    // Simulate an API call that might fail
    const status = 429; // Too Many Requests
    throw_error_by_status_code(status);
  } catch (err: unknown) {
    if (isSentinelError(err)) {
      console.error(`Error: ${err.message}`);
      console.log(`Status Code: ${err.status_code}`);
      if (error === null) {
        setError(err);
      }
    }
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error Details</h2>
        <ul>
          <li>
            {check_error_type(error, BadGateway) 
              ? "🔌 Server is having connectivity issues" 
              : "✅ Server connection is stable"}
          </li>
          <li>
            {check_error_type(error, Unauthorized) 
              ? "🔑 Authentication required" 
              : "✅ Authentication is valid"}
          </li>
          <li>
            {check_error_type(error, TooManyRequests) 
              ? "⏳ Please wait before making more requests" 
              : "✅ Request rate is within limits"}
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Welcome to the App</h1>
      <p>Everything is working correctly!</p>
    </div>
  );
}

export default App;
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

### Factory Function

#### `createHttpError(defaultMessage: HttpErrorMessage, defaultName: HttpErrorMessage, statusCode?: HttpStatusCode)`

Creates a new HTTP error class with the specified default message, name, and status code.

### Utility Functions

#### `isSentinelError(error: unknown): error is ExpectedError`

Type guard function to check if an error is an instance of any HTTP error class.

#### `check_error_type(error: ExpectedError, error_class: ReturnType<typeof createHttpError>): boolean`

Checks if the given error is an instance of a specific HTTP error class.

#### `throw_error_by_status_code(status_code: HttpStatusCode): never`

Throws the appropriate HTTP error based on the provided status code. Supports all standard HTTP status codes (4xx and 5xx).

## TypeScript Support

The library includes TypeScript definitions for all error classes and utility functions. It exports the following types:

- `HttpErrorMessage`: Union type of all possible HTTP error message names
- `HttpStatusCode`: Union type of all possible HTTP status codes
- `ExpectedError`: Union type of all possible HTTP error instances

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
