# BlackboxAI Plan: Fix `https://bhuvanar.vercel.app/dlp.html` 404

## Information Gathered

- Project is a Vite + React app.
- `index.html` is the Vite entry; it loads `/src/main.jsx`.
- `vercel.json` currently rewrites `/(.*)` to `/index.html`, meaning any deep link (like `/dlp.html`) is being routed to the SPA entry.
- There is a `dlp.html` file at the repository root.
- Vite/Vercel SPA rewrite can cause `/dlp.html` to never resolve to the static `dlp.html` file, leading to 404 on Vercel.

## Plan

1. **Verify file serving rules in `vercel.json`:** confirm the rewrite rule currently routes all paths to `/index.html`.
2. **Update `vercel.json` to exempt `/dlp.html`:**
   - Add a first-match rewrite/redirect rule that serves `/dlp.html` before the catch-all SPA rewrite.
   - Option A: Explicitly rewrite `/dlp.html` to `/dlp.html` (static) and then keep catch-all.
   - Option B: Redirect `/dlp.html` → `/` + query or to an existing route (only if needed).
3. **Ensure `dlp.html` is included in Vercel build output:**
   - If Vercel still doesn’t serve the root file as-is, move/copy `dlp.html` into `public/dlp.html` (so it’s guaranteed as a static asset).
   - Update references inside `dlp.html` if they assume root paths.
4. **Deploy and verify:**
   - Check `https://bhuvanar.vercel.app/dlp.html` returns HTTP 200.
   - Confirm assets referenced by `dlp.html` load.

## Dependent Files to be edited

- `vercel.json`
- (If required) `public/dlp.html` (copy/move from root `dlp.html`)

## Followup steps

- After changes, re-deploy and test the link.

<ask_followup_question>
Confirm whether you want me to: (A) keep `dlp.html` at repo root and adjust only `vercel.json`, or (B) move/copy it into `public/dlp.html` for guaranteed static serving on Vercel.
</ask_followup_question>
