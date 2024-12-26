---
sidebar_position: 1
---

# Format Selection in yt-dlp

Format selection in yt-dlp allows you to choose specific video and audio qualities for download. This powerful feature gives you control over the format of the media you're downloading.

## Basic Syntax

The basic syntax for format selection is:

```sh
yt-dlp -f FORMAT URL
```

Where `FORMAT` is a format selector string.

## Format Codes

Each downloadable media stream has a unique format code. You can view available formats using:

```sh
yt-dlp -F URL
```

## Common Format Selectors

- `best`: Select the best quality format.
- `worst`: Select the worst quality format.
- `bestvideo`: Select the best quality video-only format.
- `bestaudio`: Select the best quality audio-only format.
- `mp4`: Select the best mp4 format.
- `136+140`: Select format code 136 for video and 140 for audio.

## Advanced Format Selection

### Quality Preference

Use comparison operators to set quality preferences:

- `best[height<=720]`: Best quality video with height no more than 720 pixels.
- `best[fps>30]`: Best quality video with more than 30 fps.

### Format Filtering

Filter formats based on various criteria:

- `best[ext=mp4]`: Best mp4 format.
- `best[acodec^=opus]`: Best format with opus audio codec.

### Sorting Formats

Use `/` to specify preference order:

```sh
yt-dlp -f 'bestvideo+bestaudio/best' URL
```

This tries to download and merge the best video with the best audio, falling back to the best combined format if merging fails.

## Format Selection Examples

### Best Video with Best Audio, Prefer MP4

```sh
yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' URL
```

### Best Video No Larger Than 720p

```sh
yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]' URL
```

### Best MP4 Video with M4A Audio

```sh
yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' URL
```

### Worst Video No Worse Than 480p

```sh
yt-dlp -f 'worst[height>=480]' URL
```

### Best Video and Audio but No Better Than 720p

```sh
yt-dlp -S 'res:720' URL
```

## Format Sorting (`-S` option)

The `-S` option allows for more flexible sorting of formats:

```sh
yt-dlp -S 'ext:mp4:m4a' URL
```

This prefers mp4 video and m4a audio extensions.

## Tips for Format Selection

- Use `-F` to list all available formats before deciding.
- Combine format selectors for precise control.
- Remember that not all formats may be available for every video.
- Use `--merge-output-format` to specify the final container if merging separate audio and video.

Format selection is a powerful feature of yt-dlp. Experiment with different selectors to find the perfect balance of quality and file size for your needs.
