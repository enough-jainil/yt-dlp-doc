---
sidebar_position: 1
---

# Post-Processing Basics

yt-dlp provides extensive post-processing capabilities to convert, enhance, and modify downloaded content automatically.

## Basic Post-Processing

### Audio Extraction and Conversion

```bash
# Extract audio to MP3
yt-dlp -x --audio-format mp3 "VIDEO_URL"

# Extract audio with quality setting
yt-dlp -x --audio-format mp3 --audio-quality 0 "VIDEO_URL"

# Convert to different audio formats
yt-dlp -x --audio-format aac "VIDEO_URL"
yt-dlp -x --audio-format flac "VIDEO_URL"
yt-dlp -x --audio-format wav "VIDEO_URL"
```

### Video Format Conversion

```bash
# Convert to MP4
yt-dlp --remux-video mp4 "VIDEO_URL"

# Merge video and audio to specific format
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 "VIDEO_URL"

# Convert to different video formats
yt-dlp --remux-video mkv "VIDEO_URL"
yt-dlp --remux-video avi "VIDEO_URL"
```

## Metadata Processing

### Adding Metadata

```bash
# Add basic metadata
yt-dlp --add-metadata "VIDEO_URL"

# Add metadata to audio files
yt-dlp -x --add-metadata "VIDEO_URL"

# Write metadata to external file
yt-dlp --write-info-json "VIDEO_URL"
```

### Thumbnail Processing

```bash
# Embed thumbnail in video
yt-dlp --embed-thumbnail "VIDEO_URL"

# Embed thumbnail in audio
yt-dlp -x --embed-thumbnail "VIDEO_URL"

# Write thumbnail as separate file
yt-dlp --write-thumbnail "VIDEO_URL"

# Convert thumbnail format
yt-dlp --convert-thumbnails jpg "VIDEO_URL"
```

## Subtitle Processing

### Subtitle Embedding

```bash
# Embed subtitles in video
yt-dlp --embed-subs "VIDEO_URL"

# Embed specific language subtitles
yt-dlp --embed-subs --sub-lang en "VIDEO_URL"

# Embed all available subtitles
yt-dlp --embed-subs --sub-lang all "VIDEO_URL"
```

### Subtitle Conversion

```bash
# Convert subtitle format
yt-dlp --convert-subs srt "VIDEO_URL"

# Convert to multiple formats
yt-dlp --convert-subs "srt,vtt,ass" "VIDEO_URL"

# Write and convert subtitles
yt-dlp --write-sub --convert-subs srt "VIDEO_URL"
```

## Advanced FFmpeg Processing

### Custom FFmpeg Arguments

```bash
# Apply video filters
yt-dlp --postprocessor-args "ffmpeg:-vf scale=1280:720" "VIDEO_URL"

# Audio processing
yt-dlp --postprocessor-args "ffmpeg:-af loudnorm" "VIDEO_URL"

# Multiple filters
yt-dlp --postprocessor-args "ffmpeg:-vf scale=1280:720,fps=30 -af loudnorm" "VIDEO_URL"
```

### Video Processing Examples

```bash
# Resize video
yt-dlp --postprocessor-args "ffmpeg:-vf scale=1920:1080" "VIDEO_URL"

# Change frame rate
yt-dlp --postprocessor-args "ffmpeg:-vf fps=30" "VIDEO_URL"

# Apply video filters
yt-dlp --postprocessor-args "ffmpeg:-vf brightness=0.1,contrast=1.1" "VIDEO_URL"

# Crop video
yt-dlp --postprocessor-args "ffmpeg:-vf crop=1280:720:0:0" "VIDEO_URL"
```

### Audio Processing Examples

```bash
# Normalize audio
yt-dlp --postprocessor-args "ffmpeg:-af loudnorm" "VIDEO_URL"

# Change audio bitrate
yt-dlp --postprocessor-args "ffmpeg:-b:a 192k" "VIDEO_URL"

# Apply audio filters
yt-dlp --postprocessor-args "ffmpeg:-af highpass=f=200,lowpass=f=3000" "VIDEO_URL"

# Audio fade effects
yt-dlp --postprocessor-args "ffmpeg:-af afade=t=in:d=2,afade=t=out:st=28:d=2" "VIDEO_URL"
```

## File Organization Post-Processing

### Custom Execution Scripts

```bash
# Execute script after download
yt-dlp --exec "custom_script.sh {}" "VIDEO_URL"

# Execute before download
yt-dlp --exec-before-download "prepare_script.sh {}" "VIDEO_URL"

# Multiple execution points
yt-dlp --exec-before-download "pre_script.sh {}" --exec "post_script.sh {}" "VIDEO_URL"
```

### File Movement and Organization

```bash
# Move files after processing
yt-dlp --exec "mv {} /final/destination/" "VIDEO_URL"

# Organize by date
yt-dlp --exec "mkdir -p $(date +%Y/%m) && mv {} $(date +%Y/%m)/" "VIDEO_URL"

# Custom organization script
yt-dlp --exec "organize_files.py {}" "VIDEO_URL"
```

## Platform-Specific Post-Processing

### YouTube-Specific

```bash
# Process YouTube videos with chapters
yt-dlp --add-metadata --embed-chapters "YOUTUBE_URL"

# Extract YouTube comments
yt-dlp --write-comments --embed-comments "YOUTUBE_URL"

# YouTube Music processing
yt-dlp -x --add-metadata --embed-thumbnail --parse-metadata "title:%(artist)s - %(title)s" "YOUTUBE_MUSIC_URL"
```

### Twitch-Specific

```bash
# Process Twitch VODs with chat
yt-dlp --write-comments "TWITCH_VOD_URL"

# Twitch highlights extraction
yt-dlp --download-sections "*highlights*" "TWITCH_URL"
```

## Batch Post-Processing

### Processing Multiple Files

```bash
# Batch processing with same options
yt-dlp -x --add-metadata --batch-file urls.txt

# Different processing per URL
yt-dlp --batch-file batch_config.txt
```

### Post-Processing Archives

```bash
# Process only new downloads
yt-dlp --download-archive processed.txt --add-metadata "VIDEO_URL"

# Reprocess existing files
yt-dlp --force-overwrites --remux-video mp4 "VIDEO_URL"
```

## Quality Control Post-Processing

### Video Quality Enhancement

```bash
# Upscale video (requires appropriate ffmpeg build)
yt-dlp --postprocessor-args "ffmpeg:-vf scale=1920:1080:flags=lanczos" "VIDEO_URL"

# Deinterlace video
yt-dlp --postprocessor-args "ffmpeg:-vf yadif" "VIDEO_URL"

# Stabilize video
yt-dlp --postprocessor-args "ffmpeg:-vf deshake" "VIDEO_URL"
```

### Audio Quality Enhancement

```bash
# Audio normalization
yt-dlp --postprocessor-args "ffmpeg:-af loudnorm=I=-23:LRA=7:TP=-2" "VIDEO_URL"

# Noise reduction
yt-dlp --postprocessor-args "ffmpeg:-af highpass=f=200" "VIDEO_URL"

# Dynamic range compression
yt-dlp --postprocessor-args "ffmpeg:-af compand" "VIDEO_URL"
```

## Custom Post-Processors

### Writing Custom Post-Processors

```python
# Example custom post-processor
from yt_dlp.postprocessor import PostProcessor

class CustomPostProcessor(PostProcessor):
    def run(self, info):
        filepath = info['filepath']
        # Custom processing logic here
        return [], info

# Usage in configuration
--use-postprocessor CustomPostProcessor
```

### Plugin-Based Post-Processing

```bash
# Use external post-processor plugins
yt-dlp --use-postprocessor ExternalPlugin "VIDEO_URL"

# Plugin with arguments
yt-dlp --use-postprocessor "ExternalPlugin:arg1=value1,arg2=value2" "VIDEO_URL"
```

## Error Handling in Post-Processing

### Handling Post-Processing Failures

```bash
# Continue on post-processing errors
yt-dlp --ignore-errors --add-metadata "VIDEO_URL"

# Skip post-processing if it fails
yt-dlp --no-post-overwrites --remux-video mp4 "VIDEO_URL"

# Verbose post-processing debugging
yt-dlp --verbose --add-metadata "VIDEO_URL"
```

### Recovery and Retry

```bash
# Retry post-processing
yt-dlp --force-overwrites --add-metadata "VIDEO_URL"

# Post-process existing files
yt-dlp --skip-download --add-metadata "VIDEO_URL"
```

## Performance Optimization

### Parallel Post-Processing

```bash
# Process multiple files simultaneously
parallel -j 4 "yt-dlp --add-metadata {}" ::: url1 url2 url3 url4

# Batch processing with GNU parallel
yt-dlp --batch-file urls.txt --exec "echo {} >> completed.txt"
```

### Resource Management

```bash
# Limit FFmpeg threads
yt-dlp --postprocessor-args "ffmpeg:-threads 2" "VIDEO_URL"

# Memory-efficient processing
yt-dlp --postprocessor-args "ffmpeg:-preset ultrafast" "VIDEO_URL"
```

## Configuration Examples

### Audio-Focused Configuration

```bash
# Configuration for audio extraction
--extract-audio
--audio-format mp3
--audio-quality 0
--add-metadata
--embed-thumbnail
```

### Video Archive Configuration

```bash
# Configuration for video archiving
--add-metadata
--embed-subs
--embed-thumbnail
--write-info-json
--write-description
--write-comments
```

### Streaming-Optimized Configuration

```bash
# Configuration for streaming-friendly output
--merge-output-format mp4
--postprocessor-args "ffmpeg:-movflags +faststart"
--embed-subs
--embed-thumbnail
```

## Troubleshooting Post-Processing

### Common Issues

```bash
# Debug post-processing issues
yt-dlp --verbose --debug --add-metadata "VIDEO_URL"

# Check FFmpeg installation
ffmpeg -version

# Test post-processing without download
yt-dlp --skip-download --add-metadata "VIDEO_URL"
```

### Format Compatibility

```bash
# Check supported formats
ffmpeg -formats

# Test format conversion
yt-dlp --remux-video mp4 --verbose "VIDEO_URL"

# Force format even if incompatible
yt-dlp --force-overwrites --merge-output-format mp4 "VIDEO_URL"
```

## Best Practices

1. **Test First**: Try post-processing on single files before batch operations
2. **Use Appropriate Formats**: Choose formats compatible with your use case
3. **Monitor Quality**: Check output quality after processing
4. **Handle Errors**: Use error handling options for batch processing
5. **Backup Originals**: Keep original files when experimenting
6. **Optimize Performance**: Use appropriate FFmpeg presets for speed/quality balance
7. **Document Settings**: Save working configurations for reuse
8. **Update Tools**: Keep FFmpeg and yt-dlp updated for best compatibility

Post-processing in yt-dlp provides powerful capabilities for automatically transforming downloaded content to meet specific requirements, from simple format conversion to complex audio/video enhancement workflows.
