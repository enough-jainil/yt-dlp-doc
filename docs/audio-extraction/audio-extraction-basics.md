---
sidebar_position: 1
---

# Audio Extraction Basics

yt-dlp provides comprehensive audio extraction capabilities, allowing you to extract audio from videos, convert between formats, and apply various audio processing options.

## Basic Audio Extraction

### Extract Audio Only

```bash
# Extract audio in best available quality
yt-dlp -x "VIDEO_URL"

# Extract audio with specific format
yt-dlp -x --audio-format mp3 "VIDEO_URL"

# Extract audio with quality setting
yt-dlp -x --audio-format mp3 --audio-quality 0 "VIDEO_URL"
```

### Audio Quality Settings

```bash
# Best quality (0)
yt-dlp -x --audio-quality 0 "VIDEO_URL"

# Worst quality (9)
yt-dlp -x --audio-quality 9 "VIDEO_URL"

# Specific bitrate
yt-dlp -x --audio-quality 192K "VIDEO_URL"

# Variable bitrate
yt-dlp -x --audio-quality 5 "VIDEO_URL"
```

## Audio Format Selection

### Supported Audio Formats

```bash
# MP3 (most compatible)
yt-dlp -x --audio-format mp3 "VIDEO_URL"

# AAC (high quality, good compression)
yt-dlp -x --audio-format aac "VIDEO_URL"

# FLAC (lossless compression)
yt-dlp -x --audio-format flac "VIDEO_URL"

# M4A (Apple's AAC format)
yt-dlp -x --audio-format m4a "VIDEO_URL"

# OGG (open source, good quality)
yt-dlp -x --audio-format vorbis "VIDEO_URL"

# WAV (uncompressed)
yt-dlp -x --audio-format wav "VIDEO_URL"

# OPUS (modern, efficient)
yt-dlp -x --audio-format opus "VIDEO_URL"
```

### Best Audio Selection

```bash
# Best audio regardless of container
yt-dlp -f 'bestaudio' "VIDEO_URL"

# Best audio with specific format preference
yt-dlp -f 'bestaudio[ext=m4a]/bestaudio[ext=mp3]/bestaudio' "VIDEO_URL"

# Best audio with quality constraint
yt-dlp -f 'bestaudio[abr>=128]/bestaudio' "VIDEO_URL"
```

## Advanced Audio Processing

### Post-Processing Options

```bash
# Extract audio and keep video
yt-dlp --extract-audio --keep-video "VIDEO_URL"

# Extract audio and embed thumbnail
yt-dlp -x --embed-thumbnail "VIDEO_URL"

# Extract audio with metadata
yt-dlp -x --add-metadata "VIDEO_URL"

# Extract audio with all post-processing
yt-dlp -x --embed-thumbnail --add-metadata "VIDEO_URL"
```

### Audio Modification

```bash
# Normalize audio levels
yt-dlp -x --postprocessor-args "ffmpeg:-af loudnorm" "VIDEO_URL"

# Apply fade in/out
yt-dlp -x --postprocessor-args "ffmpeg:-af afade=t=in:d=2,afade=t=out:st=28:d=2" "VIDEO_URL"

# Boost audio volume
yt-dlp -x --postprocessor-args "ffmpeg:-af volume=1.5" "VIDEO_URL"

# Cut audio to specific duration
yt-dlp -x --postprocessor-args "ffmpeg:-ss 00:00:10 -t 00:03:00" "VIDEO_URL"
```

## Audio-Specific Format Selection

### Format Filtering

```bash
# Only audio formats
yt-dlp -F "VIDEO_URL" | grep "audio only"

# Best audio under 128kbps
yt-dlp -f 'bestaudio[abr<=128]' "VIDEO_URL"

# Specific codec preference
yt-dlp -f 'bestaudio[acodec=aac]/bestaudio[acodec=mp3]/bestaudio' "VIDEO_URL"

# Avoid specific codecs
yt-dlp -f 'bestaudio[acodec!=opus]' "VIDEO_URL"
```

### Conditional Audio Extraction

```bash
# Extract audio only if video is longer than 5 minutes
yt-dlp -x --match-filters "duration > 300" "VIDEO_URL"

# Extract audio from music videos only
yt-dlp -x --match-filters "title ~= '(?i)music|song|audio'" "VIDEO_URL"
```

## Audio Metadata

### Embedding Metadata

```bash
# Add all available metadata
yt-dlp -x --add-metadata "VIDEO_URL"

# Add metadata with thumbnail
yt-dlp -x --add-metadata --embed-thumbnail "VIDEO_URL"

# Write metadata to file
yt-dlp -x --write-info-json "VIDEO_URL"
```

### Custom Metadata

```bash
# Parse additional metadata
yt-dlp -x --parse-metadata "title:%(artist)s - %(title)s" "VIDEO_URL"

# Set album information
yt-dlp -x --parse-metadata "uploader:%(album_artist)s" "VIDEO_URL"

# Custom field extraction
yt-dlp -x --parse-metadata "description:Album: (?P<album>.+)" "VIDEO_URL"
```

## Audio Output Templates

### Organizing Audio Files

```bash
# Basic audio organization
yt-dlp -x -o "%(uploader)s/%(title)s.%(ext)s" "VIDEO_URL"

# Music-specific organization
yt-dlp -x -o "%(uploader)s/%(playlist)s/%(title)s.%(ext)s" "VIDEO_URL"

# Date-based organization
yt-dlp -x -o "%(upload_date)s/%(uploader)s - %(title)s.%(ext)s" "VIDEO_URL"

# Genre-based organization (with metadata parsing)
yt-dlp -x -o "%(genre)s/%(uploader)s/%(title)s.%(ext)s" "VIDEO_URL"
```

### ID3 Tag-based Organization

```bash
# Organize by parsed artist and album
yt-dlp -x -o "%(artist)s/%(album)s/%(title)s.%(ext)s" \
  --parse-metadata "title:(?P<artist>.+?) - (?P<title>.+)" \
  --parse-metadata "uploader:(?P<album>.+)" \
  "VIDEO_URL"
```

## Audio Quality Optimization

### Bitrate Control

```bash
# Constant bitrate
yt-dlp -x --audio-format mp3 --audio-quality 192K "VIDEO_URL"

# Variable bitrate (quality-based)
yt-dlp -x --audio-format mp3 --audio-quality 2 "VIDEO_URL"

# Maximum quality
yt-dlp -x --audio-format flac --audio-quality 0 "VIDEO_URL"
```

### Codec-Specific Options

```bash
# AAC with specific profile
yt-dlp -x --audio-format aac --postprocessor-args "ffmpeg:-profile:a aac_low" "VIDEO_URL"

# MP3 with joint stereo
yt-dlp -x --audio-format mp3 --postprocessor-args "ffmpeg:-joint_stereo 1" "VIDEO_URL"

# OPUS with specific bitrate
yt-dlp -x --audio-format opus --postprocessor-args "ffmpeg:-b:a 128k" "VIDEO_URL"
```

## Batch Audio Processing

### Playlist Audio Extraction

```bash
# Extract audio from entire playlist
yt-dlp -x --audio-format mp3 "PLAYLIST_URL"

# Extract with playlist organization
yt-dlp -x -o "%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"

# Extract only specific items
yt-dlp -x -I 1:10 "PLAYLIST_URL"
```

### Batch Configuration

```bash
# Create batch file for multiple URLs
echo "https://example.com/video1" > audio_batch.txt
echo "https://example.com/video2" >> audio_batch.txt
yt-dlp -x --batch-file audio_batch.txt
```

## Platform-Specific Audio Extraction

### YouTube Music

```bash
# Extract from YouTube Music
yt-dlp -x --audio-format mp3 "https://music.youtube.com/watch?v=xxxxx"

# Extract YouTube Music playlist
yt-dlp -x -o "%(playlist)s/%(track_number)02d - %(artist)s - %(title)s.%(ext)s" \
  "https://music.youtube.com/playlist?list=xxxxx"
```

### SoundCloud

```bash
# Extract from SoundCloud
yt-dlp -x --audio-format mp3 "https://soundcloud.com/artist/track"

# SoundCloud playlist
yt-dlp -x -o "%(uploader)s/%(playlist)s/%(title)s.%(ext)s" \
  "https://soundcloud.com/artist/sets/playlist"
```

### Bandcamp

```bash
# Extract from Bandcamp
yt-dlp -x --audio-format flac "https://artist.bandcamp.com/track/song"

# Bandcamp album
yt-dlp -x -o "%(uploader)s/%(album)s/%(track_number)02d - %(title)s.%(ext)s" \
  "https://artist.bandcamp.com/album/album-name"
```

## Audio Troubleshooting

### Common Issues

```bash
# Force audio extraction when video download fails
yt-dlp -x --ignore-errors "VIDEO_URL"

# Skip unavailable audio streams
yt-dlp -x --no-abort-on-error "VIDEO_URL"

# Retry with different format
yt-dlp -x --audio-format mp3 --audio-format aac "VIDEO_URL"
```

### FFmpeg Audio Issues

```bash
# Specify FFmpeg location
yt-dlp -x --ffmpeg-location /path/to/ffmpeg "VIDEO_URL"

# Verbose FFmpeg output
yt-dlp -x --verbose "VIDEO_URL"

# Test FFmpeg installation
ffmpeg -version
```

## Best Practices

1. **Choose Appropriate Formats**: Use MP3 for compatibility, FLAC for archival, AAC for efficiency
2. **Set Quality Properly**: Use quality level 0 for best results, higher numbers for smaller files
3. **Organize Output**: Use meaningful output templates for better file organization
4. **Preserve Metadata**: Always use `--add-metadata` for music files
5. **Handle Errors**: Use error handling options for batch operations
6. **Test First**: Use `-F` to check available formats before extracting
7. **Consider Bandwidth**: Use appropriate quality settings for your use case

Audio extraction with yt-dlp provides professional-grade capabilities for creating high-quality audio files from video content across numerous platforms.
