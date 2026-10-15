# MetaHuman project archive

This is a React/Vite website for the original MetaHuman project. The live prototype is no longer available; the site is an archive of its voice-first concept and the three surviving development recordings. It is **not** a working AI assistant or a live 3D demo.

## Run the website

On macOS with Node.js 22.22 or newer, double-click `run-ui.command`. The first run installs Node dependencies if needed; subsequent runs use the local installation. The site opens at `http://127.0.0.1:5173`.

From a terminal:

~~~
cd "meta-human/ui"
npm ci
npm run dev -- --host 127.0.0.1 --port 5173
~~~

The UI has no Python runtime or model-weight dependency.
The site uses React Router 8's declarative routing imports. A fresh `npm ci`,
lint, production build, and full npm audit passed on 15 October 2026.

## What the site shows

- **Home:** three original development recordings in `meta-human/ui/public/progress/`. Identical root copies were moved to a recoverable local backup during publication prep.
- **Feature Files:** twelve cards break down the described avatar-and-voice conversation workflow. They are stages of one prototype, not twelve separate shipped products. Two purple cards are explicitly future concepts and were not built.
- **Project Matrix:** four possible real-world roles—cashier, receptionist, customer service, and routine assistance. These are application directions, not completed integrations.
- **About Us:** the project team.

## Folder map

- `meta-human/ui/src/` — active website source.
- `meta-human/ui/public/progress/` — website recordings and poster frames.
- `meta-human/ui/node_modules/` — local install cache; excluded from Git and recreatable with `npm ci`.
- Root reports, `New/`, and `main paper/` — research documents preserved as project records.

Unused Python perception, conversation, and memory code and the disconnected UI demo were removed from this UI-only project. The remaining unused Python virtual environment was moved out of the publishable folder during publication prep. Generated build output is recreated with `npm run build`.

## Checks

~~~
cd "meta-human/ui"
npm run lint
npm run build
~~~

## Publishing safety

The project owner confirmed permission to publish the three recordings and the two team portraits used by the site. Those assets are included in the intended Git scope; the unused original portrait and research drafts remain excluded by `.gitignore`. Review the exact staged files once more before publishing. No GitHub repository has been created or pushed.
