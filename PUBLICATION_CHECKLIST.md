# Publication Checklist

## Keep public

- Project name: Web Radio Conexao Jamaica.
- Generic app and site architecture.
- Android module structure, Compose screens, repository interfaces, playback state models, and placeholder configuration.
- Website structure, typed API clients, mock serverless endpoints, and public-safe schema definitions.
- Generic descriptions of live player, schedule, chat, camera, ads, policies, and visualizer features.
- `.env.example`, `keystore.properties.example`, setup notes, and security documentation.

## Keep private

- Android upload keystore, Play App Signing files, signing passwords, and `keystore.properties`.
- Any real stream URL, Shoutcast/Icecast endpoint, provider station ID, chat URL, camera URL, request form URL, or internal API URL.
- Admin login names, password hashes, bearer tokens, Netlify tokens, database URLs, blob tokens, and dashboard credentials.
- Real WhatsApp number, private contact links, operational email inboxes, and private social account management links.
- Real ad campaigns, partner banners, click/impression counters, advertiser contracts, program seeds, presenter schedules, moderation records, and chat logs.
- Production privacy policy JSON if it contains real contacts, provider details, internal retention rules, or operational commitments.
- Release automation scripts that reference private GitHub repos, app signing, store uploads, or production build channels.

## Before publishing

1. Create a new clean GitHub repository from this skeleton folder.
2. Do not publish the original private repository history.
3. Confirm `.gitignore` blocks keys, `.env`, release bundles, and local build folders.
4. Run a text scan for real domains, phone numbers, provider names, station IDs, passwords, hashes, tokens, and private paths.
5. Add only sanitized screenshots or placeholder artwork.
6. Configure real deployment secrets only in private hosting dashboards.

## Why a fresh repo matters

If a secret was ever committed in the original repository, deleting the file in a later commit is not enough. Public GitHub users can still inspect old commits. Use this skeleton as a clean starting point instead of opening the private repo directly.
