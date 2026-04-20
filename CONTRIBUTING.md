# Contributing to @x-ude/adapters

Each adapter is a standalone workspace package under `packages/` that
implements a contract from [`@x-ude/sdk`](https://github.com/x-ude/x-engine-sdk).

## Rules

1. One adapter per package; no cross-adapter imports.
2. Dependencies on engine internals are forbidden. Use `@x-ude/sdk` only.
3. Public packages ship under `@x-ude/adapter-*`; internal-only tooling stays
   `private: true`.
4. Every adapter defines a `manifest` and passes the conformance harness
   (future work, SDK-owned).

## Local workflow

```bash
pnpm install
pnpm run build    # turbo-ordered
pnpm run test
```

Branch: work lands on `claude/system-architecture-strategy-9XYax` until the
split-migration is finalised.
