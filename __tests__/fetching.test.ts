import { describe, it, expect, beforeEach, vi } from 'vitest';
import { request } from '../src/tools';

const mockFetch = vi.fn();
global.fetch = mockFetch;

interface Test {
  name: string;
  value: number;
}

const getSpy = vi.spyOn(request, 'get');
const postSpy = vi.spyOn(request, 'post');
const putSpy = vi.spyOn(request, 'put');
const deleteSpy = vi.spyOn(request, 'delete');
const patchSpy = vi.spyOn(request, 'patch');
const headSpy = vi.spyOn(request, 'head');
const optionsSpy = vi.spyOn(request, 'options');

describe('Fetching Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch data correctly: GET', async () => {
    const fetchResponse: Test = { name: 'test', value: 42 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const { success, data, error } = await request.get<Test>('https://api.example.com/data');

    expect(getSpy).toHaveBeenCalledWith('https://api.example.com/data');
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should handle fetch errors correctly: GET', async () => {
    const expe_status = 404;
    const expe_error = 'NotFound';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: expe_status,
      json: async () => Promise.resolve(null),
    });

    const errorPayload = { message: expe_error, statusCode: expe_status, name: expe_error };

    const { success, data, error } = await request.get<Test>('https://api.example.com/data');

    expect(success).toEqual(false);
    expect(data).toEqual(null);
    expect(error).toEqual(errorPayload);
  });

  it('should handle unknown errors correctly: GET', async () => {
    const expe_status = 0;
    const expe_error = 'UnknownError';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: undefined,
      json: async () => Promise.resolve(null),
    });

    const errorPayload = { message: expe_error, statusCode: expe_status, name: expe_error };

    const { success, data, error } = await request.get<Test>('https://api.example.com/data');

    expect(success).toEqual(false);
    expect(data).toEqual(null);
    expect(error).toEqual(errorPayload);
  });

  it('should fetch data correctly: POST', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.post<Test>(
      'https://api.example.com/data',
      options
    );

    expect(postSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should fetch data correctly: POST', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.post<Test>(
      'https://api.example.com/data',
      options
    );

    expect(postSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should handle errors correctly: POST', async () => {
    const expe_status = 404;
    const expe_error = 'NotFound';

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: expe_status,
      json: async () => Promise.resolve(null),
    });

    const errorPayload = { message: expe_error, statusCode: expe_status, name: expe_error };

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.post<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );

    expect(postSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(false);
    expect(data).toEqual(null);
    expect(error).toEqual(errorPayload);
  });

  it('should options have the correct structure: POST', async () => {
    const expe_status = 404;

    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: expe_status,
      json: async () => Promise.resolve(null),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    await request.post<Test>('https://api.example.com/data', options);

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
  });

  it('should fetch data correctly: PUT', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.put<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'PUT',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
    expect(putSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should fetch data correctly: DELETE', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.delete<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'DELETE',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
    expect(deleteSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should fetch data correctly: PATCH', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.patch<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'PATCH',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
    expect(patchSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should fetch data correctly: HEAD', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.head<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'HEAD',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
    expect(headSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });

  it('should fetch data correctly: OPTIONS', async () => {
    const fetchResponse: Test = { name: 'bar', value: 1 };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => Promise.resolve(fetchResponse),
    });

    const options = {
      headers: {
        Authorization: 'Bearer xxxxxxxxxxxxxxx',
      },
      body: JSON.stringify({ id: 1, name: 'foo' }),
    };

    const { success, data, error } = await request.options<Test>(
      'https://api.example.com/data',
      options
    );

    const config = mockFetch.mock.calls[0][1];

    expect(config).toEqual(
      expect.objectContaining({
        method: 'OPTIONS',
        headers: expect.objectContaining({
          Authorization: 'Bearer xxxxxxxxxxxxxxx',
        }),
        body: expect.stringContaining(JSON.stringify({ id: 1, name: 'foo' })),
      })
    );
    expect(optionsSpy).toHaveBeenCalledWith('https://api.example.com/data', options);
    expect(success).toEqual(true);
    expect(data).toEqual(fetchResponse);
    expect(error).toBeNull();
  });
});
