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

- **`[OPTIONS]`** - Optional flags and parameters that modify behavior
- **`URL`** - The video, playlist, or channel URL to download
- **Multiple URLs** - You can specify multiple URLs to download in batch

## Essential First Steps

### 1. Simple Video Download

```bash
# Download a single video (best quality available)
yt-dlp "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# Download from any supported site
yt-dlp "https://vimeo.com/123456789"
```

### 2. Check Available Formats

Before downloading, see what formats are available:

```bash
# List all available formats
yt-dlp -F "https://www.youtube.com/watch?v=VIDEO_ID"

# Or use --list-formats
yt-dlp --list-formats URL
```

### 3. Download Specific Quality

```bash
# Download best quality up to 720p
yt-dlp -f "best[height<=720]" URL

# Download best MP4 format
yt-dlp -f "best[ext=mp4]" URL

# Download specific format by ID (from -F list)
yt-dlp -f 22 URL
```

## Common Use Cases

### Audio-Only Downloads

```bash
# Extract audio in best quality
yt-dlp -x URL

# Extract audio as MP3
yt-dlp -x --audio-format mp3 URL

# Extract audio with specific quality
yt-dlp -x --audio-format mp3 --audio-quality 0 URL
```

### Playlist Downloads

```bash
# Download entire playlist
yt-dlp "https://www.youtube.com/playlist?list=PLAYLIST_ID"

# Download specific items from playlist
yt-dlp -I 1-5,10,15-20 PLAYLIST_URL

# Download playlist starting from item 10
yt-dlp --playlist-start 10 PLAYLIST_URL
```

### Custom File Organization

```bash
# Organize by uploader
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL

# Include upload date
yt-dlp -o "%(upload_date)s - %(title)s.%(ext)s" URL

# Playlist organization
yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL
```

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
# Best quality with fallbacks
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
       --merge-output-format mp4 URL
```

### Audio Collection Download

```bash
# Download playlist as MP3 with good organization
yt-dlp -x --audio-format mp3 --audio-quality 0 \
       -o "%(uploader)s/%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" \
       PLAYLIST_URL
```

### Archive and Resume Downloads

```bash
# Large playlist with resume capability
yt-dlp --download-archive downloaded.txt \
       --continue --ignore-errors \
       -o "%(uploader)s/%(upload_date)s - %(title)s.%(ext)s" \
       CHANNEL_URL
```

### Subtitle Download

```bash
# Download video with English subtitles
yt-dlp --write-subs --sub-langs en --embed-subs \
       -f "best[height<=720]" URL
```

## Command-Line Tips

### Quoting and Special Characters

```bash
# Always quote URLs with special characters
yt-dlp "https://example.com/video?param=value&other=value"

# Quote output templates with spaces or special chars
yt-dlp -o "%(uploader)s - %(title)s.%(ext)s" URL
```

### Using Configuration Files

Create a config file to avoid repeating options:

```bash
# Create ~/.config/yt-dlp/config
echo "--download-archive archive.txt" >> ~/.config/yt-dlp/config
echo "--continue" >> ~/.config/yt-dlp/config
echo "--ignore-errors" >> ~/.config/yt-dlp/config

# Now yt-dlp will use these options automatically
yt-dlp URL
```

### Batch Processing

```bash
# Create a file with URLs (urls.txt)
# Then process all at once
yt-dlp --batch-file urls.txt

# Or use shell features
cat urls.txt | xargs -I {} yt-dlp {}
```

## Testing and Simulation

### Safe Testing

```bash
# Simulate download (don't actually download)
yt-dlp -s URL

# Print what the filename would be
yt-dlp --print filename -o "%(title)s.%(ext)s" URL

# Check formats without downloading
yt-dlp -F URL
```

### Verbose Output

```bash
# See detailed information about what yt-dlp is doing
yt-dlp -v URL

# Even more verbose for debugging
yt-dlp -vv URL
```

## Getting Help

### Built-in Help

```bash
# Full help text
yt-dlp --help

# Help for specific option
yt-dlp --help | grep -A5 -B5 "option-name"
```

### Version and Updates

```bash
# Check current version
yt-dlp --version

# Update to latest version
yt-dlp -U

# Update to nightly builds (recommended)
yt-dlp --update-to nightly
```

## Quick Reference Card

### Most Common Commands

```bash
# Basic download
yt-dlp URL

# Audio only
yt-dlp -x URL

# Specific quality
yt-dlp -f "best[height<=720]" URL

# With subtitles
yt-dlp --write-subs --sub-langs en URL

# Playlist with numbering
yt-dlp -o "%(playlist_index)s - %(title)s.%(ext)s" PLAYLIST_URL

# Resume interrupted downloads
yt-dlp --continue --download-archive archive.txt URL
```

This guide covers the essential basics. For comprehensive option references, advanced features, and detailed explanations, refer to the other documentation sections.
