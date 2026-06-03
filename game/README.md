# Real or AI? — The Literary Challenge

A multilingual web game where players distinguish authentic literature from AI-generated imitations.

## Languages & Authors

| Language | Authors |
|----------|---------|
| English | Jane Austen, Charlotte Brontë, Arthur Conan Doyle, James Joyce, Henry Fielding, Virginia Woolf |
| Français | Flaubert, Maupassant, Zola |
| Deutsch | Kafka, Goethe, Thomas Mann |
| Italiano | Verga, Manzoni, Pirandello |
| Srpski | Njegoš, Vuk Stefanović Karadžić |

All real texts are from Project Gutenberg (public domain). AI texts are pre-generated pastiches.

## Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

Connect the `game/` subdirectory as the Vercel project root. Vercel will auto-detect Next.js.

In the Vercel dashboard:
- **Root Directory**: `game`
- **Framework**: Next.js (auto-detected)
- No environment variables needed
