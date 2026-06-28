# TODO

## Task: Fix /dlp.html 404 on Vercel

- [ ] Inspect current deployment structure (public/ vs root html) and confirm expected file location for Vercel.
- [ ] Update vercel.json to serve /dlp.html as a static file (add a specific rewrite/disable catch-all).
- [ ] Ensure dlp.html is included in Vercel build output (move/copy into public/ or configure as public asset).
- [ ] Deploy and verify `https://bhuvanar.vercel.app/dlp.html` returns 200.
- [ ] If still 404, adjust `build`/`output` config or add redirect rule in vercel.json.
