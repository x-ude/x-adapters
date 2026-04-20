import { describe, it, expect } from 'vitest';
import { errors } from '@x-ude/sdk';
import { StackBlitzEditorAdapter } from '../src/index.js';

describe('StackBlitzEditorAdapter', () => {
  it('exposes manifest with editor capabilities', () => {
    const a = new StackBlitzEditorAdapter();
    expect(a.manifest.name).toBe('@x-ude/adapter-stackblitz-editor');
    expect(a.manifest.capabilities).toContain('editor.mount');
  });

  it('rejects mount before activate (AdapterError with code adapter.not-active)', async () => {
    const a = new StackBlitzEditorAdapter();
    await expect(a.mount('#root')).rejects.toMatchObject({
      name: 'AdapterError',
      code: 'adapter.not-active',
    });
    await expect(a.mount('#root')).rejects.toBeInstanceOf(errors.AdapterError);
  });
});
