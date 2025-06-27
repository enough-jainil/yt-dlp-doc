---
sidebar_position: 1
---

# Getting Started with yt-dlp

This guide covers the essential basics of using yt-dlp, from simple downloads to common usage patterns. For comprehensive option references, see the detailed documentation sections.

## Basic Command Syntax

The general syntax for yt-dlp commands is:

```bash
yt-dlp [OPTIONS] URL [URL...]
```

- **[OPTIONS]** - Optional flags and parameters that modify behavior
- **URL** - The video, playlist, or channel URL to download
- **Multiple URLs** - You can specify multiple URLs to download in batch

## Essential First Steps

### 1. Simple Video Download

```bash
yt-dlp "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Download a single video (best quality available).

```bash
yt-dlp "https://vimeo.com/123456789"
```

Download from any supported site.

### 2. Check Available Formats

Before downloading, see what formats are available:

```bash
yt-dlp -F "https://www.youtube.com/watch?v=VIDEO_ID"
```

List all available formats.

```bash
yt-dlp --list-formats URL
```

List all available formats.

### 3. Download Specific Quality

```bash
yt-dlp -f "best[height<=720]" URL
```

Download best quality up to 720p.

```bash
yt-dlp -f "best[ext=mp4]" URL
```

Download best MP4 format.

```bash
yt-dlp -f 22 URL
```

Download specific format by ID (from -F list).

## Common Use Cases

### Audio-Only Downloads

```bash
yt-dlp -x URL
```

Extract audio in best quality.

```bash
yt-dlp -x --audio-format mp3 URL
```

Extract audio as MP3.

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 URL
```

Extract audio with specific quality.

### Playlist Downloads

```bash
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"
```

Download entire playlist.

```bash
yt-dlp -I 1-5,10,15-20 PLAYLIST_URL
```

Download specific items from playlist.

```bash
yt-dlp --playlist-start 10 PLAYLIST_URL
```

Download playlist starting from item 10.

### Custom File Organization

```bash
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL
```

Organize by uploader.

```bash
yt-dlp -o "%(upload_date)s - %(title)s.%(ext)s" URL
```

Include upload date.

```bash
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

Playlist organization.

## Essential Options Reference

### Download Control

| Option                    | Description              | Example                          |
| ------------------------- | ------------------------ | -------------------------------- |
| `-f FORMAT`               | Select video format      | `-f "best[height<=1080]"`        |
| `-x`                      | Extract audio only       | `-x --audio-format mp3`          |
| `-o TEMPLATE`             | Output filename template | `-o "%(title)s.%(ext)s"`         |
| `--download-archive FILE` | Skip already downloaded  | `--download-archive archive.txt` |

### Quality and Format

| Option                  | Description                | Example                     |
| ----------------------- | -------------------------- | --------------------------- |
| `-F`                    | List available formats     | `-F`                        |
| `-S CRITERIA`           | Sort formats by quality    | `-S "res,fps"`              |
| `--merge-output-format` | Container for merged files | `--merge-output-format mp4` |

### Network and Performance

| Option              | Description          | Example                           |
| ------------------- | -------------------- | --------------------------------- |
| `--limit-rate RATE` | Limit download speed | `--limit-rate 1M`                 |
| `--retries N`       | Number of retries    | `--retries 10`                    |
| `--proxy URL`       | Use proxy server     | `--proxy socks5://127.0.0.1:1080` |

### Subtitles and Metadata

| Option              | Description             | Example                       |
| ------------------- | ----------------------- | ----------------------------- |
| `--write-subs`      | Download subtitle files | `--write-subs --sub-langs en` |
| `--embed-metadata`  | Embed metadata in file  | `--embed-metadata`            |
| `--write-thumbnail` | Download thumbnail      | `--write-thumbnail`           |

### Playlist and Filtering

| Option             | Description           | Example                            |
| ------------------ | --------------------- | ---------------------------------- |
| `-I ITEMS`         | Select playlist items | `-I 1-10,15,20-25`                 |
| `--dateafter DATE` | Download after date   | `--dateafter 20230101`             |
| `--match-filters`  | Filter by conditions  | `--match-filters "duration > 300"` |

## Common Command Patterns

### High-Quality Video Download

```bash
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" --merge-output-format mp4 URL
```

Best quality with fallbacks.

### Audio Collection Download

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 -o "%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

Download playlist as MP3 with good organization.

### Archive and Resume Downloads

```bash
yt-dlp --download-archive downloaded.txt --continue --ignore-errors -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" CHANNEL_URL
```

Large playlist with resume capability.

### Subtitle Download

```bash
yt-dlp --write-subs --sub-langs en --embed-subs -f "best[height<=720]" URL
```

Download video with English subtitles.

## Command-Line Tips

### Quoting and Special Characters

```bash
yt-dlp "https://example.com/video?param=value&other=value"
```

Always quote URLs with special characters.

```bash
yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" URL
```

Quote output templates with spaces or special chars.

### Using Configuration Files

Create a config file to avoid repeating options:

```bash
echo "--download-archive archive.txt" >> ~/.config/yt-dlp/config
```

Add download archive option to config.

```bash
echo "--continue" >> ~/.config/yt-dlp/config
```

Add continue option to config.

```bash
echo "--ignore-errors" >> ~/.config/yt-dlp/config
```

Add ignore errors option to config.

Now yt-dlp will use these options automatically:

```bash
yt-dlp URL
```

### Batch Processing

```bash
yt-dlp --batch-file urls.txt
```

Process all URLs from a file.

```bash
cat urls.txt | xargs -I {} yt-dlp {}
```

Use shell features to process URLs.

## Testing and Simulation

### Safe Testing

```bash
yt-dlp -s URL
```

Simulate download (don't actually download).

```bash
yt-dlp --print filename -o "%(title)s.%(ext)s" URL
```

Print what the filename would be.

```bash
yt-dlp -F URL
```

Check formats without downloading.

### Verbose Output

```bash
yt-dlp -v URL
```

See detailed information about what yt-dlp is doing.

```bash
yt-dlp -vv URL
```

Even more verbose for debugging.

## Getting Help

### Built-in Help

```bash
yt-dlp --help
```

Full help text.

```bash
yt-dlp --help | grep -A5 -B5 "option-name"
```

Help for specific option.

### Version and Updates

```bash
yt-dlp --version
```

Check current version.

```bash
yt-dlp -U
```

Update to latest version.

```bash
yt-dlp --update-to nightly
```

Update to nightly builds (recommended).

## Quick Reference Card

### Most Common Commands

```bash
yt-dlp URL
```

Basic download.

```bash
yt-dlp -x URL
```

Audio only.

```bash
yt-dlp -f "best[height<=720]" URL
```

Specific quality.

```bash
yt-dlp --write-subs --sub-langs en URL
```

With subtitles.

```bash
yt-dlp -o "%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

Playlist with numbering.

```bash
yt-dlp --continue --download-archive archive.txt URL
```

Resume interrupted downloads.

This guide covers the essential basics. For comprehensive option references, advanced features, and detailed explanations, refer to the other documentation sections.
