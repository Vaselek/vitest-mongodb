import { describe, expect, it, vi } from 'vitest';
import { request } from '../setup';

describe('Test auth routes', () => {
  describe('Test /api/auth/register', () => {
    it('returns message on successful user creation', async () => {
      const newUserData = {
        email: 'test@test.com',
        password: 'password123'
      }
      const res = await request.post('/api/auth/register').send(newUserData);
      expect(res.body.success).toBeTruthy();
      expect(res.body.data.email).toEqual(newUserData.email);
      expect(typeof res.body.data._id).toBe('string');
    });
  });
});
