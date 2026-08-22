# Security Policy

This repository is a public-safe skeleton. It is not connected to production radio infrastructure.

## Not included

- signing keys
- production endpoints
- admin credentials
- provider IDs
- private logs or metrics
- real advertiser data
- private contact channels

## Configuration rule

All operational values must live outside Git:

- Android signing values: local `keystore.properties` or CI secrets.
- Website secrets: Netlify environment variables or another private secret manager.
- API tokens: never committed, never placed in frontend source.

## Reporting

If you find a secret or operational value accidentally committed to this public skeleton, rotate the affected credential first, then remove it from the repository history before continuing development.
