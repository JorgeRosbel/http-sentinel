import { describe, it, expect, beforeEach, vi } from 'vitest';
import { stn } from '../src/core';

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Error Handling Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should be functions', () => {
    const { throw: errors, tools, collections, create } = stn;

    Object.entries(errors).forEach(errorFunc => {
      expect(typeof errorFunc[1]).toBe('function');
    });

    Object.entries(tools).forEach(tool => {
      expect(typeof tool[1]).toBe('function');
    });

    Object.entries(collections).forEach(collection => {
      expect(typeof collection[1]).toBe('function');
    });

    expect(typeof create.customError).toBe('function');
  });

  it('should throw the correct errors', () => {
    expect(() => stn.throw.BadRequest()).toThrowError('BadRequest');
    expect(() => stn.throw.Unauthorized()).toThrowError('Unauthorized');
    expect(() => stn.throw.NotFound()).toThrowError('NotFound');
    expect(() => stn.throw.InternalServer()).toThrowError('InternalServer');
  });

  it('errors should have the correct properties', async () => {
    try {
      stn.throw.Unauthorized('Unauthorized access');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Unauthorized access');
      expect(error).toHaveProperty('status_code', 401);
      expect(error).toHaveProperty('name', 'Unauthorized');
    }
  });

  it('should correctly identify HTTP errors', () => {
    const status = 404;
    try {
      stn.tools.resolveHttpError(status);
    } catch (error) {
      expect(error).toBeInstanceOf(stn.collections.NotFound);
      expect(error).toHaveProperty('name', 'NotFound');
      expect(error).toHaveProperty('status_code', 404);
    }
  });

  it('should detect sentinel collection errors correctly', () => {
    try {
      stn.throw.BadRequest('Invalid request format');
    } catch (error) {
      expect(stn.tools.matches(error)).toBe(true);
      expect(stn.tools.compare(error, stn.collections.BadRequest)).toBe(true);
    }
  });

  it('should not match custom errors with matches', () => {
    try {
      const customError = stn.create.customError('CustomError', 'Example message');
      throw customError;
    } catch (error) {
      expect(stn.tools.matches(error)).toBe(false);
    }
  });

  it('should throw the correct error when calling an API', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });

    try {
      const res = await mockFetch('https://api.example.com/data');

      if (!res.ok) {
        throw stn.tools.resolveHttpError(res.status);
      }
    } catch (error) {
      expect(error).toBeInstanceOf(stn.collections.NotFound);
      expect(error).toHaveProperty('name', 'NotFound');
      expect(error).toHaveProperty('status_code', 404);
      expect(error).toHaveProperty('message', 'NotFound');
    }
  });

  it('should throw an UnknownError when the status code is not recognized', () => {
    const status = undefined;
    try {
      stn.tools.resolveHttpError(status);
    } catch (error) {
      expect(error).toBeInstanceOf(stn.collections.UnknownError);
      expect(error).toHaveProperty('name', 'UnknownError');
      expect(error).toHaveProperty('status_code', 0);
      expect(error).toHaveProperty('message', 'UnknownError');
    }
  });
});
