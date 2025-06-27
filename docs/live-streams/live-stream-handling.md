---
sidebar_position: 1
---

# Live Stream Handling

yt-dlp provides comprehensive support for downloading live streams, including ongoing broadcasts, scheduled streams, and stream recordings.

## Basic Live Stream Download

### Download Active Live Stream

Download ongoing live stream

```bash
yt-dlp "LIVE_STREAM_URL"
```

Download with specific quality

```bash
yt-dlp -f "best[height<=1080]" "LIVE_STREAM_URL"
```

Download audio only from live stream

```bash
yt-dlp -x "LIVE_STREAM_URL"
```

### Live Stream Recording

Record live stream from start

```bash
yt-dlp --live-from-start "LIVE_STREAM_URL"
```

Record from current point

```bash
yt-dlp --no-live-from-start "LIVE_STREAM_URL"
```

Record with time limit

```bash
yt-dlp --live-from-start --download-sections "*0:30:00" "LIVE_STREAM_URL"
```

## Stream Scheduling and Waiting

### Wait for Scheduled Streams

Wait for stream to start

```bash
yt-dlp --wait-for-video 30 "SCHEDULED_STREAM_URL"
```

Wait with range (min-max minutes)

```bash
yt-dlp --wait-for-video 10-60 "SCHEDULED_STREAM_URL"
```

Don't wait for streams

```bash
yt-dlp --no-wait-for-video "SCHEDULED_STREAM_URL"
```

### Monitoring Stream Status

Check if stream is live

```bash
yt-dlp --list-formats "STREAM_URL"
```

Monitor stream with verbose output

```bash
yt-dlp --verbose --wait-for-video 60 "STREAM_URL"
```

Get stream information without downloading

```bash
yt-dlp --skip-download --write-info-json "STREAM_URL"
```

## Live Stream Quality and Format

### Format Selection for Streams

Best available live quality

```bash
yt-dlp -f "best[protocol=m3u8_native]/best[protocol=dash]/best" "STREAM_URL"
```

Specific protocol preference

```bash
yt-dlp -f "best[protocol=m3u8_native]" "STREAM_URL"
```

HLS stream selection

```bash
yt-dlp -f "best[protocol^=m3u8]" "STREAM_URL"
```

DASH stream selection

```bash
yt-dlp -f "best[protocol=dash]" "STREAM_URL"
```

### Quality Control

Limit stream quality

```bash
yt-dlp -f "best[height<=720][protocol=m3u8_native]" "STREAM_URL"
```

Audio bitrate preference for live streams

```bash
yt-dlp -f "best[abr>=128][protocol=m3u8_native]" "STREAM_URL"
```

Mobile-friendly live stream

```bash
yt-dlp -f "worst[height>=480]" "STREAM_URL"
```

## Platform-Specific Live Stream Handling

### YouTube Live

YouTube live stream

```bash
yt-dlp --live-from-start "https://youtube.com/watch?v=LIVE_VIDEO_ID"
```

YouTube premiere

```bash
yt-dlp --wait-for-video 60 "https://youtube.com/watch?v=PREMIERE_ID"
```

YouTube live with chat

```bash
yt-dlp --write-comments "https://youtube.com/watch?v=LIVE_VIDEO_ID"
```

### Twitch

Twitch live stream

```bash
yt-dlp "https://twitch.tv/streamer_name"
```

Twitch with chat

```bash
yt-dlp --write-comments "https://twitch.tv/streamer_name"
```

Twitch VOD recording

```bash
yt-dlp "https://twitch.tv/videos/VOD_ID"
```

### Facebook Live

Facebook live stream

```bash
yt-dlp --cookies-from-browser chrome "https://facebook.com/user/videos/LIVE_ID"
```

Facebook with authentication

```bash
yt-dlp --username user --password pass "https://facebook.com/live_url"
```

### Instagram Live

Instagram live story

```bash
yt-dlp --cookies-from-browser chrome "https://instagram.com/stories/user/LIVE_ID"
```

Instagram IGTV live

```bash
yt-dlp --cookies-from-browser firefox "https://instagram.com/tv/LIVE_ID"
```

## Advanced Live Stream Options

### Fragment Handling

Keep live fragments

```bash
yt-dlp --keep-fragments "STREAM_URL"
```

Skip unavailable fragments

```bash
yt-dlp --skip-unavailable-fragments "STREAM_URL"
```

Abort on fragment errors

```bash
yt-dlp --abort-on-unavailable-fragments "STREAM_URL"
```

### Live Stream Retry Logic

Retry configuration for live streams

```bash
yt-dlp --retries 10 --fragment-retries 5 "STREAM_URL"
```

Sleep between retries

```bash
yt-dlp --retry-sleep linear=1::2 "STREAM_URL"
```

Retry with exponential backoff

```bash
yt-dlp --retry-sleep exp=1:120 "STREAM_URL"
```

### Concurrent Download

Concurrent fragment download for live streams

```bash
yt-dlp --concurrent-fragments 4 "STREAM_URL"
```

External downloader for live streams

```bash
yt-dlp --external-downloader ffmpeg "STREAM_URL"
```

## Live Stream Recording Strategies

### Continuous Recording

Record entire stream duration

```bash
yt-dlp --live-from-start --no-part "STREAM_URL"
```

Record with restart on connection loss

```bash
yt-dlp --live-from-start --retries infinite "STREAM_URL"
```

Record with custom timeout

```bash
yt-dlp --socket-timeout 30 "STREAM_URL"
```

### Segmented Recording

Record in segments

```bash
yt-dlp --download-sections "*0:60:00" "STREAM_URL"
```

Multiple time segments

```bash
yt-dlp --download-sections "*0:30:00,*30:00-60:00" "STREAM_URL"
```

Skip beginning of stream

```bash
yt-dlp --download-sections "*10:00-inf" "STREAM_URL"
```

### Stream Archiving

Archive live stream with metadata

```bash
yt-dlp --live-from-start --write-info-json --write-description "STREAM_URL"
```

Archive with thumbnail

```bash
yt-dlp --live-from-start --write-thumbnail "STREAM_URL"
```

Complete archival package

```bash
yt-dlp --live-from-start --write-info-json --write-description --write-thumbnail --write-comments "STREAM_URL"
```

## Live Stream Monitoring and Automation

### Automated Stream Recording

Live stream monitoring script

```bash
#!/bin/bash
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

Record with notification

```bash
yt-dlp --live-from-start --exec "notify-send 'Stream ended'" "STREAM_URL"
```

Execute custom script on completion

```bash
yt-dlp --live-from-start --exec "upload_to_cloud.sh {}" "STREAM_URL"
```

### Multiple Stream Monitoring

Monitor multiple streams

```bash
yt-dlp --wait-for-video 60 --batch-file live_streams.txt
```

Parallel stream recording

```bash
parallel -j 4 "yt-dlp --live-from-start {} -o 'streams/%(uploader)s_%(title)s.%(ext)s'" :::: stream_urls.txt
```

## Live Stream Post-Processing

### Real-time Processing

Post-process during recording

```bash
yt-dlp --live-from-start --embed-thumbnail --add-metadata "STREAM_URL"
```

Convert format during recording

```bash
yt-dlp --live-from-start --merge-output-format mp4 "STREAM_URL"
```

Extract audio from live stream

```bash
yt-dlp --live-from-start -x --audio-format mp3 "STREAM_URL"
```

### Stream Analysis

Analyze stream quality

```bash
yt-dlp --list-formats --verbose "STREAM_URL"
```

Monitor bitrate and quality

```bash
yt-dlp --verbose --print-traffic "STREAM_URL"
```

Stream metadata extraction

```bash
yt-dlp --skip-download --write-info-json "STREAM_URL"
```

## Live Chat and Comments

### Chat Recording

Record live chat (YouTube)

```bash
yt-dlp --write-comments "YOUTUBE_LIVE_URL"
```

Chat with specific format

```bash
yt-dlp --write-comments --comment-format json "STREAM_URL"
```

Embedded chat in video (where supported)

```bash
yt-dlp --embed-comments "STREAM_URL"
```

### Chat Processing

Process chat separately

```bash
yt-dlp --skip-download --write-comments "STREAM_URL"
```

Chat with timestamps

```bash
yt-dlp --write-comments --write-info-json "STREAM_URL"
```

## Error Handling and Recovery

### Connection Issues

Handle connection drops

```bash
yt-dlp --live-from-start --retries infinite --fragment-retries 10 "STREAM_URL"
```

Ignore network errors

```bash
yt-dlp --live-from-start --ignore-errors "STREAM_URL"
```

Continue on fragment loss

```bash
yt-dlp --live-from-start --skip-unavailable-fragments "STREAM_URL"
```

### Stream Interruption Recovery

Resume interrupted stream

```bash
yt-dlp --continue --live-from-start "STREAM_URL"
```

Force restart on failure

```bash
yt-dlp --no-continue --live-from-start "STREAM_URL"
```

Custom recovery script

```bash
yt-dlp --live-from-start --exec-before-download "backup_progress.sh {}" "STREAM_URL"
```

## Performance Optimization

### Network Optimization

Optimize for live streams

```bash
yt-dlp --live-from-start --buffer-size 2048 --http-chunk-size 1M "STREAM_URL"
```

Reduce latency

```bash
yt-dlp --live-from-start --socket-timeout 10 "STREAM_URL"
```

Increase connection pooling

```bash
yt-dlp --live-from-start --source-address YOUR_IP "STREAM_URL"
```

### Resource Management

Limit disk usage during recording

```bash
yt-dlp --live-from-start --max-filesize 1G "STREAM_URL"
```

Rotate recordings

```bash
yt-dlp --live-from-start --download-sections "*0:60:00" -o "stream_%(timestamp)s.%(ext)s" "STREAM_URL"
```

## Troubleshooting Live Streams

### Common Issues

Debug live stream problems

```bash
yt-dlp --verbose --debug --live-from-start "STREAM_URL"
```

Test stream availability

```bash
yt-dlp --list-formats "STREAM_URL"
```

Check protocol support

```bash
yt-dlp --verbose "STREAM_URL" 2>&1 | grep -i protocol
```

### Stream Quality Issues

Force specific protocol

```bash
yt-dlp -f "best[protocol=m3u8_native]" "STREAM_URL"
```

Avoid problematic formats

```bash
yt-dlp -f "best[protocol!=dash]" "STREAM_URL"
```

Manual format selection

```bash
yt-dlp -F "STREAM_URL"
```

List formats

```bash
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
