import { describe, it, expect } from 'vitest';
import { StackBlitzEditorAdapter } from '../src/index.js';

describe('StackBlitzEditorAdapter', () => {
  it('exposes manifest with editor capabilities', () => {
    const a = new StackBlitzEditorAdapter();
    expect(a.manifest.name).toBe('@x-ude/adapter-stackblitz-editor');
    expect(a.manifest.capabilities).toContain('editor.mount');
  });

  it('rejects mount before activate', async () => {
    const a = new StackBlitzEditorAdapter();
    await expect(a.mount('#root')).rejects.toThrow(/adapter.not-active/);
  });
});
