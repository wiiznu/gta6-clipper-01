# Publishing handoff — rendered; manual publication remaining

## Title

GTA 6: Vice City Jet-Ski Pass

Source footage: Rockstar Games, "Grand Theft Auto VI Trailer 2" — https://www.youtube.com/watch?v=VQRLujxTm3c

## Exact description to paste

```text
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-attic-spinner-conch

Make cool clips with AI and earn money on make.fun.
https://make.fun/bounty/gta6-clipper-01

Referral: https://make.fun/r/ydpasff0

#GTA6 #Shorts #makefun
```

## Clip

`clip/gta6-clipper-01-short.mp4`

Absolute path:
`/home/hatch/workspace/tools/makefun/entries/gta6-clipper-01/clip/gta6-clipper-01-short.mp4`

Selected source interval: 02:20.066667–02:21.816667, one continuous jet-ski
pass ending in spray, without the adjacent helicopter or motorcycle shots.
The opening presents this interval at clearly labeled 0.5× speed for 3.5 seconds.
A freeze of the final frame becomes a darkened pitch card. Total: 20 seconds.
Only the supplied trailer is used. Original source audio is slowed with the
hook, reduced in level, faded out, and padded with silence for the card.

Text schedule (seconds from clip start; end times exclusive):
- 0–3.5: GTA 6 / VICE CITY JET-SKI PASS; TRAILER 2 / 0.5x SLOW MOTION.
- 3.5–6.5: A GTA 6 moment.
- 6.5–9.5: Your AI-powered edit.
- 9.5–12.5: $500 clip bounty on make.fun
- 12.5–15: Make clips like this
- 15–17.5: with AI and earn money
- 17.5–20: on make.fun
- 3.5–20: make.fun/bounty/gta6-clipper-01
- 0–20: Footage: Rockstar Games / GTA VI Trailer 2

The final three sequential captions form the exact call to action:
"Make clips like this with AI and earn money on make.fun".
Font: installed DejaVu Sans Bold. Captions are centered inside the portrait
safe area, with the right-side platform controls and bottom UI kept clear.
Render command, filter graph, text timing, probes, and extracted frames are
recorded in `clip/verification/`.

## Verification completed in this session

- ffprobe: 1080×1920, 30 fps, H.264/yuv420p video and 48 kHz stereo AAC audio;
  both streams and container are 20.000 seconds. File size: 2,299,027 bytes.
- Full video/audio decode completed without errors.
- Extracted and visually inspected 1080×1920 JPEGs at 1.5 seconds (hook,
  125,406 bytes), 10.5 seconds (pitch, 60,635 bytes), and 18.5 seconds (final
  CTA, 56,564 bytes). Captions and bounty address are readable and unclipped.
- All caption ranges are inside 0–20 seconds. The three CTA phrases last
  2.5 seconds each, and the bounty address is visible from 3.5–20 seconds.
- Ran `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
  Expected exit code: 1. Message: `VIDEO.json is missing. Publish the video first,
  then save its real YouTube URL in VIDEO.json.` No VIDEO.json was created.

## Manual publication and URL handoff

Publishing this rendered video to CuanBot is the one remaining manual stage;
recording its real URL afterward completes the local handoff.

1. Open YouTube Studio signed into CuanBot:
   https://www.youtube.com/channel/UCV1KzQoQSliScu756b3HcJA
2. Upload the finished MP4, use the final title and exact description above, and
   answer audience and other platform disclosures accurately. Add the source
   credit line above after the exact description block.
3. Publish as Public before Monday 23 November 2026, 08:00 WIB
   (2026-11-23T01:00:00Z). The window opened 20 November 2026 at 01:00 UTC.
4. Verify public playback signed out. Keep it public until results are out.
5. Copy the video's real Share URL and write root VIDEO.json as a JSON object
   with a single `url` property containing that URL. Do not guess an ID.
6. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.

No YouTube credentials were requested. No URL has been invented. VIDEO.json is
intentionally absent. No competition check, bundle, or submission was run.

Session ID: 01a1f685-3bf6-7750-9145-47778aa73117
