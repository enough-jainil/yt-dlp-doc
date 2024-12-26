---
sidebar_position: 1
---

# Format Selection in `yt-dlp`

`yt-dlp` is a versatile tool for downloading videos and audio from various platforms. Its format selection feature allows you to specify the quality and type of media you want to download. Below is an updated guide on how to use this feature effectively.

---

## Basic Syntax

The basic syntax for format selection is:

```bash
yt-dlp -f FORMAT URL
```

- **FORMAT**: A format selector string.
- **URL**: The URL of the video or audio you want to download.

---

## View Available Formats

To see all available formats for a video, use:

```bash
yt-dlp -F URL
```

This will display a list of format codes along with their resolution, codec, and other details.

---

## Common Format Selectors

Here are some commonly used format selectors:

| Selector    | Description                                       |
| ----------- | ------------------------------------------------- |
| `best`      | Selects the best quality format (video + audio).  |
| `worst`     | Selects the worst quality format.                 |
| `bestvideo` | Selects the best quality video-only format.       |
| `bestaudio` | Selects the best quality audio-only format.       |
| `mp4`       | Selects the best MP4 format.                      |
| `136+140`   | Combines format code 136 (video) and 140 (audio). |

---

## Advanced Format Selection

### Quality Preference

You can use comparison operators to set quality preferences:

- `best[height<=720]`: Best quality video with a height of no more than 720 pixels.
- `best[fps>30]`: Best quality video with more than 30 fps.

### Format Filtering

Filter formats based on specific criteria:

- `best[ext=mp4]`: Best MP4 format.
- `best[acodec^=opus]`: Best format with Opus audio codec.

### Sorting Formats

Use `/` to specify preference order:

```bash
yt-dlp -f 'bestvideo+bestaudio/best' URL
```

This tries to download and merge the best video with the best audio, falling back to the best combined format if merging fails.

---

### Format Selection Examples

1. **Best video with best audio, prefer MP4:**

   ```bash
   yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' URL
   ```

2. **Best video no larger than 720p:**

   ```bash
   yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]' URL
   ```

3. **Best MP4 video with M4A audio:**

   ```bash
   yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' URL
   ```

4. **Worst video no worse than 480p:**

   ```bash
   yt-dlp -f 'worst[height>=480]' URL
   ```

5. **Best video and audio but no better than 720p:**
   ```bash
   yt-dlp -S 'res:720' URL
   ```

---

### Format Sorting (`-S` Option)

The `-S` option allows for more flexible sorting of formats:

```bash
yt-dlp -S 'ext:mp4:m4a' URL
```

This prefers MP4 video and M4A audio extensions.

---

### Tips for Format Selection

1. **List Formats First**: Always use `-F` to list all available formats before deciding.
2. **Combine Selectors**: Combine format selectors for precise control over video and audio quality.
3. **Check Availability**: Not all formats may be available for every video.
4. **Merge Output Format**: Use `--merge-output-format` to specify the final container if merging separate audio and video streams.

---

### Additional Options

- **Merge Output Format**: Specify the container format when merging audio and video:

  ```bash
  yt-dlp --merge-output-format mp4 -f 'bestvideo+bestaudio' URL
  ```

- **Download Subtitles**: Include subtitles in the download:
  ```bash
  yt-dlp --write-subs -f 'best' URL
  ```

---

### Conclusion

Format selection in `yt-dlp` is a powerful feature that allows you to tailor your downloads to your specific needs. Experiment with different selectors and options to find the perfect balance of quality and file size. Always check available formats using `-F` to make informed decisions.

For more advanced usage, refer to the official `yt-dlp` documentation or use `yt-dlp --help` for a full list of options.
