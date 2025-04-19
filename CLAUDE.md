# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repo is a custom n8n node and credential repository for Truelist.io, which is an email verification service. It has an API that allows users to verify email addresses, check their validity, and get detailed information about them.

## Build & Development Commands

- Build: `pnpm build` (TypeScript compilation and icon building)
- Development: `pnpm dev` (watch mode for TypeScript)
- Lint: `pnpm lint` (ESLint for nodes, credentials, package.json)
- Fix linting: `pnpm lintfix` (Auto-fix linting issues)
- Format: `pnpm format` (Prettier formatting for nodes and credentials)

## Code Style & Guidelines

- **TypeScript**: Strict mode enabled with null checks and no implicit any
- **Imports**: Group imports by package (n8n packages first, then others)
- **Naming**: PascalCase for classes, camelCase for methods/variables
- **Classes**: Implement INodeType for nodes, ICredentialType for credentials
- **Error Handling**: Use try/catch blocks with proper error typing
- **Formatting**: Use Prettier for consistent style
- **ESLint**: Custom n8n node and credential rules enforced

## Project Structure

- Node implementations go in `nodes/{NodeName}/{NodeName}.node.ts`
- Credential implementations go in `credentials/{CredentialName}.credentials.ts`
- Nodes must implement INodeType interface and export a class
- Credentials must implement ICredentialType interface
