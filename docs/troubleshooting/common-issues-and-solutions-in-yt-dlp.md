---
sidebar_position: 1
---

# Common Issues and Solutions in yt-dlp

This comprehensive troubleshooting guide covers the most frequently encountered problems when using yt-dlp, along with detailed solutions, prevention strategies, and advanced debugging techniques. Use this guide to quickly resolve issues and optimize your yt-dlp experience.

## Quick Diagnostic Commands

Before diving into specific issues, these commands help diagnose problems:

Check yt-dlp version and update

```bash
yt-dlp --version
```

```bash
yt-dlp -U
```

Test with verbose output

```bash
yt-dlp -v "URL"
```

Check available formats

```bash
yt-dlp -F "URL"
```

Test network connectivity

```bash
yt-dlp --list-extractors | grep -i "site_name"
```

## 1. Video Unavailable Errors

### **Common Scenarios**

- **"Video unavailable"**: Video removed, private, or region-locked
- **"This video is not available"**: Geographic restrictions or platform issues
- **"Sign in to confirm your age"**: Age-restricted content
- **"Private video"**: Access restrictions

### **Diagnostic Steps**

Check if video exists with verbose output

```bash
yt-dlp -v "URL"
```

Test different user agents

```bash
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "URL"
```

Check geo-bypass options

```bash
yt-dlp --geo-bypass --geo-bypass-country US "URL"
```

### **Solutions**

#### **Authentication Issues**

Use browser cookies (recommended)

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

```bash
yt-dlp --cookies-from-browser chrome "URL"
```

Manual login (less secure)

```bash
yt-dlp --username YOUR_USERNAME --password YOUR_PASSWORD "URL"
```

Use cookies file

```bash
yt-dlp --cookies cookies.txt "URL"
```

#### **Geo-Restrictions**

Enable geo-bypass

```bash
yt-dlp --geo-bypass "URL"
```

Specify country

```bash
yt-dlp --geo-bypass-country US "URL"
```

Use proxy/VPN

```bash
yt-dlp --proxy socks5://127.0.0.1:9150 "URL"
```

```bash
yt-dlp --proxy http://proxy.example.com:8080 "URL"
```

#### **Age-Restricted Content**

Use cookies from logged-in browser

```bash
yt-dlp --cookies-from-browser chrome "URL"
```

Bypass age verification (YouTube)

```bash
yt-dlp --age-limit 18 "URL"
```

### **Prevention**

- Keep yt-dlp updated: `yt-dlp -U`
- Use authenticated browser sessions
- Test URLs before batch downloads

## 2. Format Selection and Quality Issues

### **Common Problems**

- **"Requested format not available"**: Format doesn't exist
- **"No video formats found"**: Extractor issues
- **"Format not supported"**: Codec/container issues
- **Poor quality selection**: Wrong format priorities

### **Diagnostic Commands**

List all available formats

```bash
yt-dlp -F "URL"
```

Show format selection process

```bash
yt-dlp -v -f "bestvideo+bestaudio" "URL"
```

Test specific format

```bash
yt-dlp -f 137 "URL"
```

### **Solutions**

#### **Basic Format Selection**

Best quality (default)

```bash
yt-dlp "URL"
```

Specific quality

```bash
yt-dlp -f "best[height<=1080]" "URL"
```

```bash
yt-dlp -f "worst[height>=720]" "URL"
```

Audio only

```bash
yt-dlp -f "bestaudio" -x "URL"
```

Video only

```bash
yt-dlp -f "bestvideo" "URL"
```

#### **Advanced Format Selection**

Best video + audio combination

```bash
yt-dlp -f "bestvideo+bestaudio/best" "URL"
```

Prefer MP4 format

```bash
yt-dlp -f "best[ext=mp4]/best" "URL"
```

Avoid certain formats

```bash
yt-dlp -f "best[ext!=flv]" "URL"
```

Codec preferences

```bash
yt-dlp -f "best[vcodec^=avc1]" "URL"
```

#### **Fallback Strategies**

Multiple format fallbacks

```bash
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]/best" "URL"
```

Force format merging

```bash
yt-dlp -f "bestvideo+bestaudio" --merge-output-format mp4 "URL"
```

## 3. Download Speed and Performance Issues

### **Common Causes**

- **Network throttling**: ISP or server limitations
- **Server congestion**: High traffic periods
- **Inefficient downloaders**: Single-threaded downloads
- **Geographic distance**: Far from content servers

### **Speed Optimization**

#### **External Downloaders**

Use aria2c (fastest, multi-connection)

```bash
yt-dlp --external-downloader aria2c --external-downloader-args "-x 16 -s 16" "URL"
```

Use wget

```bash
yt-dlp --external-downloader wget "URL"
```

Use curl

```bash
yt-dlp --external-downloader curl "URL"
```

#### **Connection Management**

Limit download rate (prevent throttling)

```bash
yt-dlp --limit-rate 2M "URL"
```

Multiple retries

```bash
yt-dlp -R 10 "URL"
```

Fragment concurrent downloads

```bash
yt-dlp --concurrent-fragments 4 "URL"
```

Sleep between downloads

```bash
yt-dlp --sleep-interval 5 "URL"
```

#### **Network Optimization**

Use different source address

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

Custom user agent

```bash
yt-dlp --user-agent "Mozilla/5.0..." "URL"
```

IPv4 only (faster DNS)

```bash
yt-dlp --force-ipv4 "URL"
```

## 4. Network and Connection Errors

### **Common Error Messages**

- **"HTTP Error 403: Forbidden"**: Access denied
- **"Connection refused"**: Server unavailable
- **"Timeout"**: Network connectivity issues
- **"SSL Certificate verification failed"**: HTTPS issues

### **Network Troubleshooting**

#### **Basic Network Issues**

Increase timeout

```bash
yt-dlp --socket-timeout 30 "URL"
```

Ignore SSL errors (use cautiously)

```bash
yt-dlp --no-check-certificate "URL"
```

Force IPv4

```bash
yt-dlp --force-ipv4 "URL"
```

Use different DNS

```bash
yt-dlp --source-address 8.8.8.8 "URL"
```

#### **Proxy and VPN Configuration**

HTTP proxy

```bash
yt-dlp --proxy http://proxy:8080 "URL"
```

SOCKS proxy

```bash
yt-dlp --proxy socks5://127.0.0.1:1080 "URL"
```

Proxy with authentication

```bash
yt-dlp --proxy http://user:pass@proxy:8080 "URL"
```

No proxy for specific domains

```bash
yt-dlp --proxy "http://proxy:8080" --no-proxy "example.com" "URL"
```

#### **Advanced Network Options**

Custom headers

```bash
yt-dlp --add-header "Referer:https://example.com" "URL"
```

Client certificate

```bash
yt-dlp --client-certificate cert.pem --client-certificate-key key.pem "URL"
```

Interface binding

```bash
yt-dlp --source-address 192.168.1.100 "URL"
```

## 5. Subtitle and Caption Issues

### **Common Problems**

- **No subtitles available**: Content lacks captions
- **Wrong language**: Incorrect subtitle selection
- **Format issues**: Incompatible subtitle formats
- **Embedding failures**: Post-processing problems

### **Subtitle Solutions**

#### **Basic Subtitle Operations**

List available subtitles

```bash
yt-dlp --list-subs "URL"
```

Download specific language

```bash
yt-dlp --sub-langs en --write-subs "URL"
```

Download all subtitles

```bash
yt-dlp --sub-langs all --write-subs "URL"
```

Auto-generated subtitles

```bash
yt-dlp --write-auto-subs --sub-langs en "URL"
```

#### **Subtitle Processing**

Convert subtitle format

```bash
yt-dlp --convert-subs srt --write-subs "URL"
```

Embed subtitles in video

```bash
yt-dlp --embed-subs --sub-langs en "URL"
```

Both write and embed

```bash
yt-dlp --write-subs --embed-subs --sub-langs en "URL"
```

## 6. Playlist and Batch Download Issues

### **Common Problems**

- **Partial playlist downloads**: Some videos fail
- **Wrong playlist order**: Unexpected download sequence
- **Memory issues**: Large playlists overwhelming system
- **Rate limiting**: Too many requests

### **Playlist Solutions**

#### **Playlist Control**

Download entire playlist

```bash
yt-dlp --yes-playlist "PLAYLIST_URL"
```

Specific items

```bash
yt-dlp --playlist-items 1,3,5-10 "PLAYLIST_URL"
```

Reverse order

```bash
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

Start from specific item

```bash
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

#### **Error Handling**

Continue on errors

```bash
yt-dlp --ignore-errors "PLAYLIST_URL"
```

Abort on first error

```bash
yt-dlp --abort-on-error "PLAYLIST_URL"
```

Skip unavailable videos

```bash
yt-dlp --ignore-no-formats-error "PLAYLIST_URL"
```

#### **Rate Limiting for Playlists**

Sleep between downloads

```bash
yt-dlp --sleep-interval 5 --max-sleep-interval 15 "PLAYLIST_URL"
```

Limit concurrent downloads

```bash
yt-dlp --max-downloads 50 "PLAYLIST_URL"
```

## 7. File System and Output Issues

### **Common Problems**

- **Invalid filename characters**: OS restrictions
- **Path too long**: File system limitations
- **Permission denied**: Access rights issues
- **Disk space**: Insufficient storage

### **File System Solutions**

#### **Filename Handling**

Restrict filenames to ASCII

```bash
yt-dlp --restrict-filenames "URL"
```

Custom output template

```bash
yt-dlp -o "%(title).50s-%(id)s.%(ext)s" "URL"
```

Windows-safe filenames

```bash
yt-dlp -o "%(title)s.%(ext)s" --windows-filenames "URL"
```

Avoid filename conflicts

```bash
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" "URL"
```

#### **Path Management**

Specify download directory

```bash
yt-dlp -o "/path/to/downloads/%(title)s.%(ext)s" "URL"
```

Separate paths for different content

```bash
yt-dlp -P "video:/videos" -P "audio:/music" "URL"
```

Temporary directory

```bash
yt-dlp --paths temp:/tmp "URL"
```

## 8. FFmpeg and Post-Processing Issues

### **Common Problems**

- **FFmpeg not found**: Installation or PATH issues
- **Conversion failures**: Codec or format problems
- **Audio extraction errors**: Format compatibility
- **Metadata embedding failures**: Container limitations

### **FFmpeg Solutions**

#### **Installation and Configuration**

Check FFmpeg availability

```bash
yt-dlp --check-formats "URL"
```

Specify FFmpeg location

```bash
yt-dlp --ffmpeg-location /usr/local/bin/ffmpeg "URL"
```

Skip post-processing

```bash
yt-dlp --no-post-overwrites "URL"
```

#### **Audio Processing**

Extract audio with specific codec

```bash
yt-dlp -x --audio-format mp3 --audio-quality 192K "URL"
```

Keep video after audio extraction

```bash
yt-dlp -x --keep-video "URL"
```

Audio quality control

```bash
yt-dlp -x --audio-quality best "URL"
```

#### **Video Processing**

Remux to different container

```bash
yt-dlp --remux-video mp4 "URL"
```

Re-encode video

```bash
yt-dlp --recode-video mp4 "URL"
```

Embed metadata

```bash
yt-dlp --embed-metadata --embed-thumbnail "URL"
```

## 9. Authentication and Cookie Issues

### **Common Problems**

- **Login required**: Private or premium content
- **Cookie expiration**: Outdated authentication
- **Two-factor authentication**: Additional security
- **Browser compatibility**: Cookie extraction issues

### **Authentication Solutions**

#### **Browser Cookie Extraction**

Extract from specific browser

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

```bash
yt-dlp --cookies-from-browser chrome "URL"
```

```bash
yt-dlp --cookies-from-browser safari "URL"
```

Specify profile

```bash
yt-dlp --cookies-from-browser "firefox:Profile Name" "URL"
```

Container support (Firefox)

```bash
yt-dlp --cookies-from-browser "firefox:Profile:Container" "URL"
```

#### **Manual Authentication**

Username/password login

```bash
yt-dlp --username user --password pass "URL"
```

Two-factor authentication

```bash
yt-dlp --username user --password pass --twofactor 123456 "URL"
```

Netrc file authentication

```bash
yt-dlp --netrc "URL"
```

## 10. Platform-Specific Issues

### **YouTube-Specific Problems**

#### **Age Restrictions and Sign-in**

Bypass age verification

```bash
yt-dlp --cookies-from-browser chrome "URL"
```

YouTube Premium content

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

#### **Throttling and Rate Limits**

Slower downloads to avoid throttling

```bash
yt-dlp --limit-rate 1M --sleep-interval 5 "URL"
```

Use different extraction method

```bash
yt-dlp --extractor-args "youtube:player_client=web" "URL"
```

### **Social Media Platforms**

#### **Instagram**

Stories and highlights

```bash
yt-dlp --cookies-from-browser chrome "INSTAGRAM_URL"
```

#### **TikTok**

Avoid watermarks

```bash
yt-dlp --extractor-args "tiktok:api_hostname=api16-normal-c-useast1a.tiktokv.com" "URL"
```

## 11. Performance and Resource Issues

### **Memory Management**

Limit concurrent fragments

```bash
yt-dlp --concurrent-fragments 2 "URL"
```

Buffer size control

```bash
yt-dlp --buffer-size 16K "URL"
```

HTTP chunk size

```bash
yt-dlp --http-chunk-size 1M "URL"
```

### **CPU Optimization**

Disable post-processing

```bash
yt-dlp --no-post-overwrites "URL"
```

Limit extraction info

```bash
yt-dlp --no-write-info-json --no-write-description "URL"
```

## 12. Advanced Debugging

### **Verbose Logging**

Full verbose output

```bash
yt-dlp -vvv "URL"
```

Debug network

```bash
yt-dlp --debug --print-traffic "URL"
```

Dump pages

```bash
yt-dlp --dump-pages --write-pages "URL"
```

### **Error Analysis**

Simulate download (no actual download)

```bash
yt-dlp -s "URL"
```

Check formats only

```bash
yt-dlp -F "URL"
```

Test extraction

```bash
yt-dlp --get-url "URL"
```

## Prevention and Best Practices

### **Regular Maintenance**

- Update yt-dlp regularly: `yt-dlp -U`
- Update FFmpeg when needed
- Clear browser cookies periodically
- Monitor disk space for large downloads

### **Optimal Configuration**

- Use configuration files for consistent settings
- Set up proper output templates
- Configure external downloaders
- Implement proper error handling in scripts

### **Monitoring and Logging**

Log all operations

```bash
yt-dlp --verbose --output "%(title)s.%(ext)s" "URL" 2>&1 | tee download.log
```

Archive successful downloads

```bash
yt-dlp --download-archive archive.txt "URL"
```

## Getting Additional Help

### **Community Resources**

- **GitHub Issues**: [yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **Reddit**: r/youtubedl community
- **Discord**: yt-dlp community server

### **Reporting Bugs**

When reporting issues, include:

- yt-dlp version: `yt-dlp --version`
- Full command used
- Complete error message
- Operating system and Python version
- URL (if not private/sensitive)

### **Professional Support**

For enterprise or commercial use, consider:

- Professional consultation services
- Custom extractor development
- Integration support
- Compliance and legal guidance

This troubleshooting guide covers the most common issues encountered with yt-dlp. For specific platform issues or advanced use cases, refer to the dedicated sections in this documentation or seek community support through the official channels.
