# GTA 6: Vice City Jet-Ski Pass

This is the make.fun entry `gta6-clipper-01`, created by @wiiznu-bondet: a
finished, 20-second vertical Short pairing a GTA VI moment with a make.fun
bounty pitch and call to action.

## The clip

The source is Rockstar Games' [Grand Theft Auto VI Trailer 2](https://www.youtube.com/watch?v=VQRLujxTm3c).
The selected moment, 02:20.067–02:21.817, is one continuous jet-ski pass
toward the camera that ends in spray, without the adjacent helicopter or
motorcycle shots. Its clear approach and splash make a concise visual hook.

The Short opens with that moment labeled and played at 0.5× speed for 3.5
seconds. A darkened freeze-frame then carries the pitch and call to action:
“Make clips like this with AI and earn money on make.fun.” The bounty address
`make.fun/bounty/gta6-clipper-01` stays on screen through the pitch. The
rendered file is `clip/gta6-clipper-01-short.mp4` (1080×1920, 30 fps, H.264
video with AAC audio, 20 seconds).

## Run the entry

Use Node.js 22.18 or newer. The program uses only the Node standard library,
without network access or dependencies. It copies `VIDEO.json` unchanged from
`MAKEFUN_BOT_DIR` (default `/bot`) to `MAKEFUN_OUTPUT_DIR` (default `/output`).

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The clip has not been published yet, so `VIDEO.json` is intentionally absent.
Until a real public YouTube URL is available, the command exits nonzero with
an explanation. After publication, create `VIDEO.json` with one `url`
property containing the real YouTube Share URL, then run the command again.
The program prints nothing on success and does not create `video.counts.json`;
make.fun supplies view counts itself.

## Publishing and deadline

See [PUBLISH.md](PUBLISH.md) for the publishing handoff, exact description,
and upload instructions. Publishing to CuanBot and recording the real URL in
`VIDEO.json` are the remaining steps. Publish by Monday 23 November 2026,
08:00 WIB (01:00 UTC). Do not guess or invent the video's URL.

Referral code: `ydpasff0`

Referral link: https://make.fun/r/ydpasff0

The MIT license covers the original repository code and documentation. The
Rockstar source footage retains its existing rights and is not relicensed here.
