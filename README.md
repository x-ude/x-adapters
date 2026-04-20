# @x-ude/adapters

Integration adapters for the x-ude engine. Each adapter lives in its own
workspace package under `packages/` and depends on the public contract
[`@x-ude/sdk`](https://github.com/x-ude/x-engine-sdk).

## Packages

| Package | Capability | Status |
|---|---|---|
| `@x-ude/adapter-stackblitz-editor` | `editor.*` | scaffolded |
| `@x-ude/adapter-ide-vscode` | `ide.*` | placeholder |
| `@x-ude/adapter-llm-openai` | `llm.*` | placeholder |
| `@x-ude/adapter-vcs-github` | `vcs.*` | placeholder |

## Local development

```bash
pnpm install
pnpm run build    # turbo-ordered across packages
pnpm run test
```

## Conformance

Adapters must implement the corresponding contract from `@x-ude/sdk` and
pass the conformance harness (future work, SDK-owned).

## License

Apache-2.0
