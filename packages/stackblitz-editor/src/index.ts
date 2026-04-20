import type { adapters, engine, errors as sdkErrors } from '@x-ude/sdk';
import { errors } from '@x-ude/sdk';

const MANIFEST: adapters.AdapterManifest = {
  name: '@x-ude/adapter-stackblitz-editor',
  version: '0.0.0',
  capabilities: ['editor.mount', 'editor.edit', 'editor.diff'],
  sdkRange: '^0.0.0',
};

/**
 * StackBlitz editor adapter.
 *
 * Placeholder implementation. The production port of the editor lives under
 * `src/features/StackBlitzEditor` in the original monorepo and is migrated
 * manually (no git history) per MONOREPO_SPLIT_RUNBOOK.md Phase E.
 */
export class StackBlitzEditorAdapter implements adapters.EditorAdapter {
  readonly manifest: adapters.AdapterManifest = MANIFEST;
  private session: engine.Session | null = null;
  private mounted = false;

  async activate(session: engine.Session): Promise<void> {
    if (this.session) {
      throw new errors.AdapterError('adapter.already-active', 'activate called twice');
    }
    this.session = session;
  }

  async deactivate(): Promise<void> {
    if (this.mounted) await this.unmount();
    this.session = null;
  }

  async mount(_container: HTMLElement | string): Promise<void> {
    if (!this.session) {
      throw new errors.AdapterError('adapter.not-active', 'mount requires an active session');
    }
    if (this.mounted) {
      throw new errors.AdapterError('adapter.already-mounted', 'mount called twice');
    }
    this.mounted = true;
  }

  async unmount(): Promise<void> {
    this.mounted = false;
  }
}

export type { adapters as _sdkAdapters };
export type StackBlitzEditorAdapterType = StackBlitzEditorAdapter;
export type _Err = sdkErrors.AdapterError;
