---
sidebar_position: 1
---

# Audio Extraction Basics

yt-dlp provides comprehensive audio extraction capabilities, allowing you to extract audio from videos, convert between formats, and apply various audio processing options.

## Basic Audio Extraction

### Extract Audio Only

Extract audio in best available quality

```bash
yt-dlp -x "VIDEO_URL"
```

Extract audio with specific format

```bash
yt-dlp -x --audio-format mp3 "VIDEO_URL"
```

Extract audio with quality setting

```bash
yt-dlp -x --audio-format mp3 --audio-quality 0 "VIDEO_URL"
```

### Audio Quality Settings

Best quality (0)

```bash
yt-dlp -x --audio-quality 0 "VIDEO_URL"
```

Worst quality (9)

```bash
yt-dlp -x --audio-quality 9 "VIDEO_URL"
```

Specific bitrate

```bash
yt-dlp -x --audio-quality 192K "VIDEO_URL"
```

Variable bitrate

```bash
yt-dlp -x --audio-quality 5 "VIDEO_URL"
```

## Audio Format Selection

### Supported Audio Formats

MP3 (most compatible)

```bash
yt-dlp -x --audio-format mp3 "VIDEO_URL"
```

AAC (high quality, good compression)

```bash
yt-dlp -x --audio-format aac "VIDEO_URL"
```

FLAC (lossless compression)

```bash
yt-dlp -x --audio-format flac "VIDEO_URL"
```

M4A (Apple's AAC format)

```bash
yt-dlp -x --audio-format m4a "VIDEO_URL"
```

OGG (open source, good quality)

```bash
yt-dlp -x --audio-format vorbis "VIDEO_URL"
```

WAV (uncompressed)

```bash
yt-dlp -x --audio-format wav "VIDEO_URL"
```

OPUS (modern, efficient)

```bash
yt-dlp -x --audio-format opus "VIDEO_URL"
```

### Best Audio Selection

Best audio regardless of container

```bash
yt-dlp -f 'bestaudio' "VIDEO_URL"
```

Best audio with specific format preference

```bash
yt-dlp -f 'bestaudio[ext=m4a]/bestaudio[ext=mp3]/bestaudio' "VIDEO_URL"
```

Best audio with quality constraint

```bash
yt-dlp -f 'bestaudio[abr>=128]/bestaudio' "VIDEO_URL"
```

## Advanced Audio Processing

### Post-Processing Options

Extract audio and keep video

```bash
yt-dlp --extract-audio --keep-video "VIDEO_URL"
```

Extract audio and embed thumbnail

```bash
yt-dlp -x --embed-thumbnail "VIDEO_URL"
```

Extract audio with metadata

```bash
yt-dlp -x --add-metadata "VIDEO_URL"
```

Extract audio with all post-processing

```bash
yt-dlp -x --embed-thumbnail --add-metadata "VIDEO_URL"
```

### Audio Modification

Normalize audio levels

```bash
yt-dlp -x --postprocessor-args "ffmpeg:-af loudnorm" "VIDEO_URL"
```

Apply fade in/out

```bash
yt-dlp -x --postprocessor-args "ffmpeg:-af afade=t=in:d=2,afade=t=out:st=28:d=2" "VIDEO_URL"
```

Boost audio volume

```bash
yt-dlp -x --postprocessor-args "ffmpeg:-af volume=1.5" "VIDEO_URL"
```

Cut audio to specific duration

```bash
yt-dlp -x --postprocessor-args "ffmpeg:-ss 00:00:10 -t 00:03:00" "VIDEO_URL"
```

## Audio-Specific Format Selection

### Format Filtering

Only audio formats

```bash
yt-dlp -F "VIDEO_URL" | grep "audio only"
```

Best audio under 128kbps

```bash
yt-dlp -f 'bestaudio[abr<=128]' "VIDEO_URL"
```

Specific codec preference

```bash
yt-dlp -f 'bestaudio[acodec=aac]/bestaudio[acodec=mp3]/bestaudio' "VIDEO_URL"
```

Avoid specific codecs

```bash
yt-dlp -f 'bestaudio[acodec!=opus]' "VIDEO_URL"
```

### Conditional Audio Extraction

Extract audio only if video is longer than 5 minutes

```bash
yt-dlp -x --match-filters "duration > 300" "VIDEO_URL"
```

Extract audio from music videos only

```bash
yt-dlp -x --match-filters "title ~= '(?i)music|song|audio'" "VIDEO_URL"
```

## Audio Metadata

### Embedding Metadata

Add all available metadata

```bash
yt-dlp -x --add-metadata "VIDEO_URL"
```

Add metadata with thumbnail

```bash
yt-dlp -x --add-metadata --embed-thumbnail "VIDEO_URL"
```

Write metadata to file

```bash
yt-dlp -x --write-info-json "VIDEO_URL"
```

### Custom Metadata

Parse additional metadata

```bash
yt-dlp -x --parse-metadata "title:%(artist)s - %(title)s" "VIDEO_URL"
```

Set album information

```bash
yt-dlp -x --parse-metadata "uploader:%(album_artist)s" "VIDEO_URL"
```

Custom field extraction

```bash
yt-dlp -x --parse-metadata "description:Album: (?P<album>.+)" "VIDEO_URL"
```

## Audio Output Templates

### Organizing Audio Files

Basic audio organization

```bash
yt-dlp -x -o "%(uploader)s/%(title)s.%(ext)s" "VIDEO_URL"
```

Music-specific organization

```bash
yt-dlp -x -o "%(uploader)s/%(playlist)s/%(title)s.%(ext)s" "VIDEO_URL"
```

Date-based organization

```bash
yt-dlp -x -o "%(upload_date)s/%(uploader)s - %(title)s.%(ext)s" "VIDEO_URL"
```

Genre-based organization (with metadata parsing)

```bash
yt-dlp -x -o "%(genre)s/%(uploader)s/%(title)s.%(ext)s" "VIDEO_URL"
```

### ID3 Tag-based Organization

Organize by parsed artist and album

```bash
yt-dlp -x -o "%(artist)s/%(album)s/%(title)s.%(ext)s" \
  --parse-metadata "title:(?P<artist>.+?) - (?P<title>.+)" \
  --parse-metadata "uploader:(?P<album>.+)" \
  "VIDEO_URL"
```

## Audio Quality Optimization

### Bitrate Control

Constant bitrate

```bash
yt-dlp -x --audio-format mp3 --audio-quality 192K "VIDEO_URL"
```

Variable bitrate (quality-based)

```bash
yt-dlp -x --audio-format mp3 --audio-quality 2 "VIDEO_URL"
```

Maximum quality

```bash
yt-dlp -x --audio-format flac --audio-quality 0 "VIDEO_URL"
```

### Codec-Specific Options

AAC with specific profile

```bash
yt-dlp -x --audio-format aac --postprocessor-args "ffmpeg:-profile:a aac_low" "VIDEO_URL"
```

MP3 with joint stereo

```bash
yt-dlp -x --audio-format mp3 --postprocessor-args "ffmpeg:-joint_stereo 1" "VIDEO_URL"
```

OPUS with specific bitrate

```bash
yt-dlp -x --audio-format opus --postprocessor-args "ffmpeg:-b:a 128k" "VIDEO_URL"
```

## Batch Audio Processing

### Playlist Audio Extraction

Extract audio from entire playlist

```bash
yt-dlp -x --audio-format mp3 "PLAYLIST_URL"
```

Extract with playlist organization

```bash
yt-dlp -x -o "%(playlist)s/%(playlist_index)02d - %(title)s.%(ext)s" "PLAYLIST_URL"
```

Extract only specific items

```bash
yt-dlp -x -I 1:10 "PLAYLIST_URL"
```

### Batch Configuration

Create batch file for multiple URLs

```bash
echo "https://example.com/video1" > audio_batch.txt
echo "https://example.com/video2" >> audio_batch.txt
yt-dlp -x --batch-file audio_batch.txt
```

## Platform-Specific Audio Extraction

### YouTube Music

Extract from YouTube Music

```bash
yt-dlp -x --audio-format mp3 "https://music.youtube.com/watch?v=xxxxx"
```

Extract YouTube Music playlist

```bash
yt-dlp -x -o "%(playlist)s/%(track_number)02d - %(artist)s - %(title)s.%(ext)s" \
  "https://music.youtube.com/playlist?list=xxxxx"
```

### SoundCloud

Extract from SoundCloud

```bash
yt-dlp -x --audio-format mp3 "https://soundcloud.com/artist/track"
```

SoundCloud playlist

```bash
yt-dlp -x -o "%(uploader)s/%(playlist)s/%(title)s.%(ext)s" \
  "https://soundcloud.com/artist/sets/playlist"
```

### Bandcamp

Extract from Bandcamp

```bash
yt-dlp -x --audio-format flac "https://artist.bandcamp.com/track/song"
```

Bandcamp album

```bash
yt-dlp -x -o "%(uploader)s/%(album)s/%(track_number)02d - %(title)s.%(ext)s" \
  "https://artist.bandcamp.com/album/album-name"
```

## Audio Troubleshooting

### Common Issues

Force audio extraction when video download fails

```bash
yt-dlp -x --ignore-errors "VIDEO_URL"
```

Skip unavailable audio streams

```bash
yt-dlp -x --no-abort-on-error "VIDEO_URL"
```

Retry with different format

```bash
yt-dlp -x --audio-format mp3 --audio-format aac "VIDEO_URL"
```

### FFmpeg Audio Issues

Specify FFmpeg location

```bash
yt-dlp -x --ffmpeg-location /path/to/ffmpeg "VIDEO_URL"
```

Verbose FFmpeg output

```bash
yt-dlp -x --verbose "VIDEO_URL"
```

Test FFmpeg installation

```bash
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
