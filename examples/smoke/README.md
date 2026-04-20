# @x-ude/example-smoke

Minimal Vite page that imports `@x-ude/sdk` and `@x-ude/adapter-stackblitz-editor`
end-to-end. Used as the Phase F local-launch smoke check.

## Run it

From the meta-repo root (with `pnpm-workspace.yaml` that includes this example):

```bash
pnpm install
# Build SDK + adapter so the example imports live dist/ output
pnpm --filter @x-ude/sdk build
pnpm --filter @x-ude/adapter-stackblitz-editor build
# Serve
pnpm --filter @x-ude/example-smoke dev
# Open http://127.0.0.1:5173
```

## What it checks

- `@x-ude/sdk` root barrel resolves and exposes all namespaces + error classes.
- `StackBlitzEditorAdapter` instantiates, reports its manifest.
- Clicking “Try mount before activate” throws `AdapterError` with code
  `adapter.not-active` — verified `instanceof sdk.XUdeError` at runtime.

No engine implementation is present; the smoke deliberately stubs the engine.
