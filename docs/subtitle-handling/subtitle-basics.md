---
sidebar_position: 1
---

# Subtitle Basics

yt-dlp provides comprehensive subtitle support, allowing you to download, convert, and embed subtitles in various formats and languages.

## Basic Subtitle Operations

### List Available Subtitles

```bash
# List all available subtitles
yt-dlp --list-subs "VIDEO_URL"

# List subtitles with details
yt-dlp --list-subs --verbose "VIDEO_URL"

# List auto-generated subtitles
yt-dlp --list-subs --list-auto-subs "VIDEO_URL"
```

### Download Subtitles

```bash
# Download subtitles (default language)
yt-dlp --write-sub "VIDEO_URL"

# Download subtitles in specific language
yt-dlp --write-sub --sub-lang en "VIDEO_URL"

# Download auto-generated subtitles
yt-dlp --write-auto-sub "VIDEO_URL"

# Download both manual and auto-generated
yt-dlp --write-sub --write-auto-sub "VIDEO_URL"
```

## Language Selection

### Single Language

```bash
# Download English subtitles
yt-dlp --write-sub --sub-lang en "VIDEO_URL"

# Download Spanish subtitles
yt-dlp --write-sub --sub-lang es "VIDEO_URL"

# Download Japanese subtitles
yt-dlp --write-sub --sub-lang ja "VIDEO_URL"
```

### Multiple Languages

```bash
# Download multiple languages
yt-dlp --write-sub --sub-lang "en,es,fr" "VIDEO_URL"

# Download all available languages
yt-dlp --write-sub --sub-lang all "VIDEO_URL"

# Download auto-generated in multiple languages
yt-dlp --write-auto-sub --sub-lang "en,es" "VIDEO_URL"
```

### Language Fallback

```bash
# Language preference with fallback
yt-dlp --write-sub --sub-lang "en,en-US,en-GB" "VIDEO_URL"

# Try manual first, then auto-generated
yt-dlp --write-sub --write-auto-sub --sub-lang en "VIDEO_URL"
```

## Subtitle Formats

### Available Formats

```bash
# WebVTT format (default)
yt-dlp --write-sub --sub-format vtt "VIDEO_URL"

# SRT format (most compatible)
yt-dlp --write-sub --sub-format srt "VIDEO_URL"

# ASS format (advanced formatting)
yt-dlp --write-sub --sub-format ass "VIDEO_URL"

# TTML format
yt-dlp --write-sub --sub-format ttml "VIDEO_URL"
```

### Format Conversion

```bash
# Convert to SRT
yt-dlp --write-sub --convert-subs srt "VIDEO_URL"

# Convert to WebVTT
yt-dlp --write-sub --convert-subs vtt "VIDEO_URL"

# Convert to ASS
yt-dlp --write-sub --convert-subs ass "VIDEO_URL"

# Convert multiple formats
yt-dlp --write-sub --convert-subs "srt,vtt" "VIDEO_URL"
```

## Embedding Subtitles

### Basic Embedding

```bash
# Embed subtitles in video
yt-dlp --embed-subs "VIDEO_URL"

# Embed specific language
yt-dlp --embed-subs --sub-lang en "VIDEO_URL"

# Embed and keep separate files
yt-dlp --embed-subs --write-sub "VIDEO_URL"
```

### Embedding Options

```bash
# Embed all available subtitles
yt-dlp --embed-subs --sub-lang all "VIDEO_URL"

# Embed with specific format
yt-dlp --embed-subs --sub-format srt "VIDEO_URL"

# Embed auto-generated subtitles
yt-dlp --embed-subs --write-auto-sub "VIDEO_URL"
```

### Container Compatibility

```bash
# Embed in MP4 (supports multiple subtitle tracks)
yt-dlp --embed-subs --merge-output-format mp4 "VIDEO_URL"

# Embed in MKV (best subtitle support)
yt-dlp --embed-subs --merge-output-format mkv "VIDEO_URL"

# Embed in WebM
yt-dlp --embed-subs --merge-output-format webm "VIDEO_URL"
```

## Advanced Subtitle Options

### Subtitle Filtering

```bash
# Only download videos with subtitles
yt-dlp --match-filters "subtitles" "VIDEO_URL"

# Only download videos with specific language subtitles
yt-dlp --match-filters "subtitles.en" "VIDEO_URL"

# Exclude videos without subtitles
yt-dlp --match-filters "!subtitles" "VIDEO_URL"
```

### Custom Subtitle Processing

```bash
# Download subtitles only (no video)
yt-dlp --skip-download --write-sub "VIDEO_URL"

# Download subtitles with specific naming
yt-dlp --write-sub -o "%(title)s.%(ext)s" "VIDEO_URL"

# Download with metadata
yt-dlp --write-sub --write-info-json "VIDEO_URL"
```

## Subtitle Organization

### Output Templates

```bash
# Organize subtitles by language
yt-dlp --write-sub --sub-lang all -o "%(uploader)s/%(title)s/%(title)s.%(ext)s" "VIDEO_URL"

# Include language in filename
yt-dlp --write-sub --sub-lang "en,es" -o "%(title)s.%(lang)s.%(ext)s" "VIDEO_URL"

# Organized subtitle structure
yt-dlp --write-sub --sub-lang all -o "%(uploader)s/%(title)s/subs/%(title)s.%(lang)s.%(ext)s" "VIDEO_URL"
```

### Subtitle-Specific Templates

```bash
# Separate subtitle directory
yt-dlp --write-sub -o "videos/%(title)s.%(ext)s" --sub-format srt "VIDEO_URL"

# Custom subtitle naming
yt-dlp --write-sub -o "%(title)s.%(ext)s" --sub-format "srt" "VIDEO_URL"
```

## Platform-Specific Subtitle Handling

### YouTube

```bash
# YouTube auto-generated subtitles
yt-dlp --write-auto-sub --sub-lang en "YOUTUBE_URL"

# YouTube manual subtitles (preferred)
yt-dlp --write-sub --sub-lang en "YOUTUBE_URL"

# YouTube multiple languages
yt-dlp --write-sub --sub-lang "en,es,fr,de,ja" "YOUTUBE_URL"

# YouTube with timestamps
yt-dlp --write-sub --sub-format vtt "YOUTUBE_URL"
```

### Twitch

```bash
# Twitch chat replay as subtitles
yt-dlp --write-sub --sub-lang rechat "TWITCH_URL"

# Twitch VOD subtitles
yt-dlp --write-sub --sub-lang en "TWITCH_URL"
```

### Netflix/Prime Video (with appropriate access)

```bash
# Platform-specific subtitle extraction
yt-dlp --write-sub --sub-lang all "PLATFORM_URL"
```

## Subtitle Processing

### Timing Adjustment

```bash
# Adjust subtitle timing with FFmpeg
yt-dlp --write-sub --postprocessor-args "ffmpeg:-itsoffset 2" "VIDEO_URL"

# Custom subtitle processing
yt-dlp --write-sub --exec "custom_subtitle_processor.py {}" "VIDEO_URL"
```

### Subtitle Cleanup

```bash
# Remove positioning information
yt-dlp --write-sub --convert-subs srt "VIDEO_URL"

# Custom subtitle processing script
yt-dlp --write-sub --exec-before-download "subtitle_cleaner.py {}" "VIDEO_URL"
```

## Batch Subtitle Operations

### Playlist Subtitles

```bash
# Download subtitles for entire playlist
yt-dlp --write-sub --sub-lang en "PLAYLIST_URL"

# Organize playlist subtitles
yt-dlp --write-sub --sub-lang all -o "%(playlist)s/%(title)s/%(title)s.%(ext)s" "PLAYLIST_URL"

# Subtitle-only playlist download
yt-dlp --skip-download --write-sub --sub-lang all "PLAYLIST_URL"
```

### Batch Processing

```bash
# Process multiple URLs with subtitles
yt-dlp --write-sub --batch-file urls.txt

# Archive subtitles separately
yt-dlp --write-sub --download-archive subs_archive.txt "VIDEO_URL"
```

## Subtitle Quality and Selection

### Preference Order

```bash
# Prefer manual over auto-generated
yt-dlp --write-sub --write-auto-sub --sub-lang en "VIDEO_URL"

# Specific subtitle source preference
yt-dlp --write-sub --sub-format "srt,vtt,ass" "VIDEO_URL"

# Quality-based selection
yt-dlp --write-sub --sub-lang "en-US,en-GB,en" "VIDEO_URL"
```

### Subtitle Metadata

```bash
# Include subtitle metadata
yt-dlp --write-sub --write-info-json "VIDEO_URL"

# Subtitle with descriptions
yt-dlp --write-sub --write-description "VIDEO_URL"
```

## Troubleshooting Subtitles

### Common Issues

```bash
# Force subtitle download even if unavailable
yt-dlp --write-sub --ignore-errors --sub-lang en "VIDEO_URL"

# Skip videos without subtitles
yt-dlp --match-filters "subtitles" "VIDEO_URL"

# Verbose subtitle debugging
yt-dlp --write-sub --verbose --sub-lang en "VIDEO_URL"
```

### Subtitle Encoding Issues

```bash
# Force UTF-8 encoding
yt-dlp --write-sub --encoding utf-8 "VIDEO_URL"

# Handle encoding errors
yt-dlp --write-sub --ignore-errors "VIDEO_URL"
```

### Format Compatibility

```bash
# Test subtitle formats
yt-dlp --list-subs --sub-format all "VIDEO_URL"

# Fallback format selection
yt-dlp --write-sub --sub-format "srt,vtt,ass,ttml" "VIDEO_URL"
```

## Configuration Examples

### Subtitle-focused Configuration

```bash
# Configuration file for subtitle downloads
echo "--write-sub" >> ~/.config/yt-dlp/config
echo "--sub-lang en,es" >> ~/.config/yt-dlp/config
echo "--convert-subs srt" >> ~/.config/yt-dlp/config
echo "--embed-subs" >> ~/.config/yt-dlp/config
```

### Multi-language Setup

```bash
# Download videos with multiple subtitle languages
yt-dlp --write-sub --embed-subs --sub-lang "en,es,fr,de" \
       --merge-output-format mkv "VIDEO_URL"
```

## Best Practices

1. **Check Availability**: Use `--list-subs` before downloading
2. **Use SRT Format**: Most compatible across players
3. **Embed When Possible**: Keeps subtitles with video files
4. **Organize by Language**: Use output templates for multi-language content
5. **Prefer Manual**: Manual subtitles are usually more accurate than auto-generated
6. **Test Formats**: Different platforms support different subtitle formats
7. **Handle Errors**: Use error handling for batch operations
8. **Backup Separately**: Keep separate subtitle files for editing

Subtitle handling in yt-dlp provides comprehensive support for downloading, converting, and managing subtitles across multiple languages and formats, making content accessible to diverse audiences.
