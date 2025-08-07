import { describe, it, expect, beforeEach, vi } from 'vitest';
import * as tools from '../src/tools';
import { BadRequest, UnknownError } from '../src/errors';

const matchesSpy = vi.spyOn(tools, 'matches');
const resolvetHttpSpy = vi.spyOn(tools, 'resolveHttpError');
const compareSpy = vi.spyOn(tools, 'compare');
const coreRequestSpy = vi.spyOn(tools, 'coreRequest');

describe('Utils test', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should identify errors thrown by http-sentinel', () => {
    try {
      const mockStatus = 404;
      tools.resolveHttpError(mockStatus);
    } catch (err: unknown) {
      expect(tools.matches(err)).toBe(true);
      expect(matchesSpy).toHaveBeenCalledWith(err);
    }
  });

  it('should throw a specific error according to the status code', () => {
    const httpErrorStatusCodes = [
      400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418,
      421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508,
      510, 511,
    ];

    httpErrorStatusCodes.forEach(code => {
      try {
        const mockStatus = code;
        tools.resolveHttpError(mockStatus);
      } catch (err: unknown) {
        if (tools.matches(err)) {
          expect(err).toBeInstanceOf(Error);
          expect(err).toEqual(
            expect.objectContaining({
              status_code: code,
            })
          );
          expect(resolvetHttpSpy).toHaveBeenCalledWith(code);
        }
      }
    });
  });

  it('should identify the error when compared with a class', () => {
    try {
      const mockStatus = 400;
      tools.resolveHttpError(mockStatus);
    } catch (err: unknown) {
      if (tools.matches(err)) {
        expect(err).toBeInstanceOf(BadRequest);
        expect(tools.compare(err, BadRequest)).toBe(true);
        expect(compareSpy).toHaveBeenCalledWith(err, BadRequest);
      }
    }
  });

  it('should throw UnknownError if status code does not exist', () => {
    try {
      const mockStatus = undefined;
      tools.resolveHttpError(mockStatus);
    } catch (err: unknown) {
      if (tools.matches(err)) {
        expect(err).toBeInstanceOf(UnknownError);
        expect(tools.compare(err, UnknownError)).toBe(true);
        expect(compareSpy).toHaveBeenCalledWith(err, UnknownError);
      }
    }
  });

  it('should contain all functions for HTTP methods', () => {
    const methods = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];
    const stn = tools.coreRequest();

    expect(stn).toBeTypeOf('object');
    Object.entries(stn).forEach(([method, fn], index) => {
      expect(fn).toBeTypeOf('function');
      expect(method).toBe(methods[index]);
    });
    expect(coreRequestSpy).toHaveBeenCalled();
  });
});
