import * as sdk from '@x-ude/sdk';
import { StackBlitzEditorAdapter } from '@x-ude/adapter-stackblitz-editor';

const out = document.getElementById('out')!;
const mountResult = document.getElementById('mountResult')!;
const runMount = document.getElementById('runMount') as HTMLButtonElement;

const adapter = new StackBlitzEditorAdapter();

const stubEngine: sdk.Engine = {
  version: '0.0.0-smoke',
  async createSession() {
    throw new sdk.EngineError('smoke', 'stub engine');
  },
  async readAst() {
    throw new sdk.EngineError('smoke', 'stub engine');
  },
  async applyPatch() {
    throw new sdk.EngineError('smoke', 'stub engine');
  },
};

const report = {
  sdkExports: Object.keys(sdk).sort(),
  adapterManifest: adapter.manifest,
  engineVersion: stubEngine.version,
};
out.textContent = JSON.stringify(report, null, 2);

runMount.addEventListener('click', async () => {
  try {
    await adapter.mount('#root');
    mountResult.innerHTML = '<span class="fail">FAIL — expected AdapterError</span>';
  } catch (err: unknown) {
    const ok =
      err instanceof sdk.AdapterError &&
      err.code === 'adapter.not-active' &&
      err instanceof sdk.XUdeError;
    mountResult.innerHTML = ok
      ? '<span class="pass">PASS — AdapterError(adapter.not-active)</span>'
      : `<span class="fail">FAIL — ${(err as Error).message}</span>`;
  }
});
