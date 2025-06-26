---
sidebar_position: 1
---

# Live Stream Handling

yt-dlp provides comprehensive support for downloading live streams, including ongoing broadcasts, scheduled streams, and stream recordings.

## Basic Live Stream Download

### Download Active Live Stream

```bash
# Download ongoing live stream
yt-dlp "LIVE_STREAM_URL"

# Download with specific quality
yt-dlp -f "best[height<=1080]" "LIVE_STREAM_URL"

# Download audio only from live stream
yt-dlp -x "LIVE_STREAM_URL"
```

### Live Stream Recording

```bash
# Record live stream from start
yt-dlp --live-from-start "LIVE_STREAM_URL"

# Record from current point
yt-dlp --no-live-from-start "LIVE_STREAM_URL"

# Record with time limit
yt-dlp --live-from-start --download-sections "*0:30:00" "LIVE_STREAM_URL"
```

## Stream Scheduling and Waiting

### Wait for Scheduled Streams

```bash
# Wait for stream to start
yt-dlp --wait-for-video 30 "SCHEDULED_STREAM_URL"

# Wait with range (min-max minutes)
yt-dlp --wait-for-video 10-60 "SCHEDULED_STREAM_URL"

# Don't wait for streams
yt-dlp --no-wait-for-video "SCHEDULED_STREAM_URL"
```

### Monitoring Stream Status

```bash
# Check if stream is live
yt-dlp --list-formats "STREAM_URL"

# Monitor stream with verbose output
yt-dlp --verbose --wait-for-video 60 "STREAM_URL"

# Get stream information without downloading
yt-dlp --skip-download --write-info-json "STREAM_URL"
```

## Live Stream Quality and Format

### Format Selection for Streams

```bash
# Best available live quality
yt-dlp -f "best[protocol=m3u8_native]/best[protocol=dash]/best" "STREAM_URL"

# Specific protocol preference
yt-dlp -f "best[protocol=m3u8_native]" "STREAM_URL"

# HLS stream selection
yt-dlp -f "best[protocol^=m3u8]" "STREAM_URL"

# DASH stream selection
yt-dlp -f "best[protocol=dash]" "STREAM_URL"
```

### Quality Control

```bash
# Limit stream quality
yt-dlp -f "best[height<=720][protocol=m3u8_native]" "STREAM_URL"

# Audio bitrate preference for live streams
yt-dlp -f "best[abr>=128][protocol=m3u8_native]" "STREAM_URL"

# Mobile-friendly live stream
yt-dlp -f "worst[height>=480]" "STREAM_URL"
```

## Platform-Specific Live Stream Handling

### YouTube Live

```bash
# YouTube live stream
yt-dlp --live-from-start "https://youtube.com/watch?v=LIVE_VIDEO_ID"

# YouTube premiere
yt-dlp --wait-for-video 60 "https://youtube.com/watch?v=PREMIERE_ID"

# YouTube live with chat
yt-dlp --write-comments "https://youtube.com/watch?v=LIVE_VIDEO_ID"
```

### Twitch

```bash
# Twitch live stream
yt-dlp "https://twitch.tv/streamer_name"

# Twitch with chat
yt-dlp --write-comments "https://twitch.tv/streamer_name"

# Twitch VOD recording
yt-dlp "https://twitch.tv/videos/VOD_ID"
```

### Facebook Live

```bash
# Facebook live stream
yt-dlp --cookies-from-browser chrome "https://facebook.com/user/videos/LIVE_ID"

# Facebook with authentication
yt-dlp --username user --password pass "https://facebook.com/live_url"
```

### Instagram Live

```bash
# Instagram live story
yt-dlp --cookies-from-browser chrome "https://instagram.com/stories/user/LIVE_ID"

# Instagram IGTV live
yt-dlp --cookies-from-browser firefox "https://instagram.com/tv/LIVE_ID"
```

## Advanced Live Stream Options

### Fragment Handling

```bash
# Keep live fragments
yt-dlp --keep-fragments "STREAM_URL"

# Skip unavailable fragments
yt-dlp --skip-unavailable-fragments "STREAM_URL"

# Abort on fragment errors
yt-dlp --abort-on-unavailable-fragments "STREAM_URL"
```

### Live Stream Retry Logic

```bash
# Retry configuration for live streams
yt-dlp --retries 10 --fragment-retries 5 "STREAM_URL"

# Sleep between retries
yt-dlp --retry-sleep linear=1::2 "STREAM_URL"

# Retry with exponential backoff
yt-dlp --retry-sleep exp=1:120 "STREAM_URL"
```

### Concurrent Download

```bash
# Concurrent fragment download for live streams
yt-dlp --concurrent-fragments 4 "STREAM_URL"

# External downloader for live streams
yt-dlp --external-downloader ffmpeg "STREAM_URL"
```

## Live Stream Recording Strategies

### Continuous Recording

```bash
# Record entire stream duration
yt-dlp --live-from-start --no-part "STREAM_URL"

# Record with restart on connection loss
yt-dlp --live-from-start --retries infinite "STREAM_URL"

# Record with custom timeout
yt-dlp --socket-timeout 30 "STREAM_URL"
```

### Segmented Recording

```bash
# Record in segments
yt-dlp --download-sections "*0:60:00" "STREAM_URL"

# Multiple time segments
yt-dlp --download-sections "*0:30:00,*30:00-60:00" "STREAM_URL"

# Skip beginning of stream
yt-dlp --download-sections "*10:00-inf" "STREAM_URL"
```

### Stream Archiving

```bash
# Archive live stream with metadata
yt-dlp --live-from-start --write-info-json --write-description "STREAM_URL"

# Archive with thumbnail
yt-dlp --live-from-start --write-thumbnail "STREAM_URL"

# Complete archival package
yt-dlp --live-from-start --write-info-json --write-description --write-thumbnail --write-comments "STREAM_URL"
```

## Live Stream Monitoring and Automation

### Automated Stream Recording

```bash
#!/bin/bash
# Live stream monitoring script
STREAM_URL="$1"
OUTPUT_DIR="$2"

while true; do
    yt-dlp --wait-for-video 30 --live-from-start \
           -o "$OUTPUT_DIR/%(uploader)s_%(upload_date)s_%(title)s.%(ext)s" \
           "$STREAM_URL"
    sleep 300  # Wait 5 minutes before checking again
done
```

### Stream Notification

```bash
# Record with notification
yt-dlp --live-from-start --exec "notify-send 'Stream ended'" "STREAM_URL"

# Execute custom script on completion
yt-dlp --live-from-start --exec "upload_to_cloud.sh {}" "STREAM_URL"
```

### Multiple Stream Monitoring

```bash
# Monitor multiple streams
yt-dlp --wait-for-video 60 --batch-file live_streams.txt

# Parallel stream recording
parallel -j 4 "yt-dlp --live-from-start {} -o 'streams/%(uploader)s_%(title)s.%(ext)s'" :::: stream_urls.txt
```

## Live Stream Post-Processing

### Real-time Processing

```bash
# Post-process during recording
yt-dlp --live-from-start --embed-thumbnail --add-metadata "STREAM_URL"

# Convert format during recording
yt-dlp --live-from-start --merge-output-format mp4 "STREAM_URL"

# Extract audio from live stream
yt-dlp --live-from-start -x --audio-format mp3 "STREAM_URL"
```

### Stream Analysis

```bash
# Analyze stream quality
yt-dlp --list-formats --verbose "STREAM_URL"

# Monitor bitrate and quality
yt-dlp --verbose --print-traffic "STREAM_URL"

# Stream metadata extraction
yt-dlp --skip-download --write-info-json "STREAM_URL"
```

## Live Chat and Comments

### Chat Recording

```bash
# Record live chat (YouTube)
yt-dlp --write-comments "YOUTUBE_LIVE_URL"

# Chat with specific format
yt-dlp --write-comments --comment-format json "STREAM_URL"

# Embedded chat in video (where supported)
yt-dlp --embed-comments "STREAM_URL"
```

### Chat Processing

```bash
# Process chat separately
yt-dlp --skip-download --write-comments "STREAM_URL"

# Chat with timestamps
yt-dlp --write-comments --write-info-json "STREAM_URL"
```

## Error Handling and Recovery

### Connection Issues

```bash
# Handle connection drops
yt-dlp --live-from-start --retries infinite --fragment-retries 10 "STREAM_URL"

# Ignore network errors
yt-dlp --live-from-start --ignore-errors "STREAM_URL"

# Continue on fragment loss
yt-dlp --live-from-start --skip-unavailable-fragments "STREAM_URL"
```

### Stream Interruption Recovery

```bash
# Resume interrupted stream
yt-dlp --continue --live-from-start "STREAM_URL"

# Force restart on failure
yt-dlp --no-continue --live-from-start "STREAM_URL"

# Custom recovery script
yt-dlp --live-from-start --exec-before-download "backup_progress.sh {}" "STREAM_URL"
```

## Performance Optimization

### Network Optimization

```bash
# Optimize for live streams
yt-dlp --live-from-start --buffer-size 2048 --http-chunk-size 1M "STREAM_URL"

# Reduce latency
yt-dlp --live-from-start --socket-timeout 10 "STREAM_URL"

# Increase connection pooling
yt-dlp --live-from-start --source-address YOUR_IP "STREAM_URL"
```

### Resource Management

```bash
# Limit disk usage during recording
yt-dlp --live-from-start --max-filesize 1G "STREAM_URL"

# Rotate recordings
yt-dlp --live-from-start --download-sections "*0:60:00" \
       -o "stream_%(timestamp)s.%(ext)s" "STREAM_URL"
```

## Troubleshooting Live Streams

### Common Issues

```bash
# Debug live stream problems
yt-dlp --verbose --debug --live-from-start "STREAM_URL"

# Test stream availability
yt-dlp --list-formats "STREAM_URL"

# Check protocol support
yt-dlp --verbose "STREAM_URL" 2>&1 | grep -i protocol
```

### Stream Quality Issues

```bash
# Force specific protocol
yt-dlp -f "best[protocol=m3u8_native]" "STREAM_URL"

# Avoid problematic formats
yt-dlp -f "best[protocol!=dash]" "STREAM_URL"

# Manual format selection
yt-dlp -F "STREAM_URL"  # List formats
yt-dlp -f FORMAT_CODE "STREAM_URL"
```

## Best Practices

1. **Start from Beginning**: Use `--live-from-start` for complete recording
2. **Handle Interruptions**: Configure retries and error handling
3. **Monitor Quality**: Check available formats before recording
4. **Manage Storage**: Consider file size limits for long streams
5. **Use Appropriate Protocols**: Prefer m3u8_native for HLS streams
6. **Automate Monitoring**: Use scripts for scheduled or recurring streams
7. **Backup Recordings**: Have redundant storage for important streams
8. **Test Configuration**: Verify settings with short test recordings

Live stream handling in yt-dlp provides robust capabilities for capturing real-time content with reliable recording, quality control, and error recovery mechanisms.
