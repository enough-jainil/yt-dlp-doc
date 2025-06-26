---
sidebar_position: 1
---

# Common Issues and Solutions in yt-dlp

This comprehensive troubleshooting guide covers the most frequently encountered problems when using yt-dlp, along with detailed solutions, prevention strategies, and advanced debugging techniques. Use this guide to quickly resolve issues and optimize your yt-dlp experience.

## Quick Diagnostic Commands

Before diving into specific issues, these commands help diagnose problems:

```bash
# Check yt-dlp version and update
yt-dlp --version
yt-dlp -U

# Test with verbose output
yt-dlp -v "URL"

# Check available formats
yt-dlp -F "URL"

# Test network connectivity
yt-dlp --list-extractors | grep -i "site_name"
```

## 1. Video Unavailable Errors

### **Common Scenarios**

- **"Video unavailable"**: Video removed, private, or region-locked
- **"This video is not available"**: Geographic restrictions or platform issues
- **"Sign in to confirm your age"**: Age-restricted content
- **"Private video"**: Access restrictions

### **Diagnostic Steps**

```bash
# Check if video exists with verbose output
yt-dlp -v "URL"

# Test different user agents
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" "URL"

# Check geo-bypass options
yt-dlp --geo-bypass --geo-bypass-country US "URL"
```

### **Solutions**

#### **Authentication Issues**

```bash
# Use browser cookies (recommended)
yt-dlp --cookies-from-browser firefox "URL"
yt-dlp --cookies-from-browser chrome "URL"

# Manual login (less secure)
yt-dlp --username YOUR_USERNAME --password YOUR_PASSWORD "URL"

# Use cookies file
yt-dlp --cookies cookies.txt "URL"
```

#### **Geo-Restrictions**

```bash
# Enable geo-bypass
yt-dlp --geo-bypass "URL"

# Specify country
yt-dlp --geo-bypass-country US "URL"

# Use proxy/VPN
yt-dlp --proxy socks5://127.0.0.1:9150 "URL"
yt-dlp --proxy http://proxy.example.com:8080 "URL"
```

#### **Age-Restricted Content**

```bash
# Use cookies from logged-in browser
yt-dlp --cookies-from-browser chrome "URL"

# Bypass age verification (YouTube)
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

```bash
# List all available formats
yt-dlp -F "URL"

# Show format selection process
yt-dlp -v -f "bestvideo+bestaudio" "URL"

# Test specific format
yt-dlp -f 137 "URL"
```

### **Solutions**

#### **Basic Format Selection**

```bash
# Best quality (default)
yt-dlp "URL"

# Specific quality
yt-dlp -f "best[height<=1080]" "URL"
yt-dlp -f "worst[height>=720]" "URL"

# Audio only
yt-dlp -f "bestaudio" -x "URL"

# Video only
yt-dlp -f "bestvideo" "URL"
```

#### **Advanced Format Selection**

```bash
# Best video + audio combination
yt-dlp -f "bestvideo+bestaudio/best" "URL"

# Prefer MP4 format
yt-dlp -f "best[ext=mp4]/best" "URL"

# Avoid certain formats
yt-dlp -f "best[ext!=flv]" "URL"

# Codec preferences
yt-dlp -f "best[vcodec^=avc1]" "URL"
```

#### **Fallback Strategies**

```bash
# Multiple format fallbacks
yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]/best" "URL"

# Force format merging
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

```bash
# Use aria2c (fastest, multi-connection)
yt-dlp --external-downloader aria2c --external-downloader-args "-x 16 -s 16" "URL"

# Use wget
yt-dlp --external-downloader wget "URL"

# Use curl
yt-dlp --external-downloader curl "URL"
```

#### **Connection Management**

```bash
# Limit download rate (prevent throttling)
yt-dlp --limit-rate 2M "URL"

# Multiple retries
yt-dlp -R 10 "URL"

# Fragment concurrent downloads
yt-dlp --concurrent-fragments 4 "URL"

# Sleep between downloads
yt-dlp --sleep-interval 5 "URL"
```

#### **Network Optimization**

```bash
# Use different source address
yt-dlp --source-address 192.168.1.100 "URL"

# Custom user agent
yt-dlp --user-agent "Mozilla/5.0..." "URL"

# IPv4 only (faster DNS)
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

```bash
# Increase timeout
yt-dlp --socket-timeout 30 "URL"

# Ignore SSL errors (use cautiously)
yt-dlp --no-check-certificate "URL"

# Force IPv4
yt-dlp --force-ipv4 "URL"

# Use different DNS
yt-dlp --source-address 8.8.8.8 "URL"
```

#### **Proxy and VPN Configuration**

```bash
# HTTP proxy
yt-dlp --proxy http://proxy:8080 "URL"

# SOCKS proxy
yt-dlp --proxy socks5://127.0.0.1:1080 "URL"

# Proxy with authentication
yt-dlp --proxy http://user:pass@proxy:8080 "URL"

# No proxy for specific domains
yt-dlp --proxy "http://proxy:8080" --no-proxy "example.com" "URL"
```

#### **Advanced Network Options**

```bash
# Custom headers
yt-dlp --add-header "Referer:https://example.com" "URL"

# Client certificate
yt-dlp --client-certificate cert.pem --client-certificate-key key.pem "URL"

# Interface binding
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

```bash
# List available subtitles
yt-dlp --list-subs "URL"

# Download specific language
yt-dlp --sub-langs en --write-subs "URL"

# Download all subtitles
yt-dlp --sub-langs all --write-subs "URL"

# Auto-generated subtitles
yt-dlp --write-auto-subs --sub-langs en "URL"
```

#### **Subtitle Processing**

```bash
# Convert subtitle format
yt-dlp --convert-subs srt --write-subs "URL"

# Embed subtitles in video
yt-dlp --embed-subs --sub-langs en "URL"

# Both write and embed
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

```bash
# Download entire playlist
yt-dlp --yes-playlist "PLAYLIST_URL"

# Specific items
yt-dlp --playlist-items 1,3,5-10 "PLAYLIST_URL"

# Reverse order
yt-dlp --playlist-reverse "PLAYLIST_URL"

# Start from specific item
yt-dlp --playlist-start 5 "PLAYLIST_URL"
```

#### **Error Handling**

```bash
# Continue on errors
yt-dlp --ignore-errors "PLAYLIST_URL"

# Abort on first error
yt-dlp --abort-on-error "PLAYLIST_URL"

# Skip unavailable videos
yt-dlp --ignore-no-formats-error "PLAYLIST_URL"
```

#### **Rate Limiting for Playlists**

```bash
# Sleep between downloads
yt-dlp --sleep-interval 5 --max-sleep-interval 15 "PLAYLIST_URL"

# Limit concurrent downloads
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

```bash
# Restrict filenames to ASCII
yt-dlp --restrict-filenames "URL"

# Custom output template
yt-dlp -o "%(title).50s-%(id)s.%(ext)s" "URL"

# Windows-safe filenames
yt-dlp -o "%(title)s.%(ext)s" --windows-filenames "URL"

# Avoid filename conflicts
yt-dlp -o "%(autonumber)03d-%(title)s.%(ext)s" "URL"
```

#### **Path Management**

```bash
# Specify download directory
yt-dlp -o "/path/to/downloads/%(title)s.%(ext)s" "URL"

# Separate paths for different content
yt-dlp -P "video:/videos" -P "audio:/music" "URL"

# Temporary directory
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

```bash
# Check FFmpeg availability
yt-dlp --check-formats "URL"

# Specify FFmpeg location
yt-dlp --ffmpeg-location /usr/local/bin/ffmpeg "URL"

# Skip post-processing
yt-dlp --no-post-overwrites "URL"
```

#### **Audio Processing**

```bash
# Extract audio with specific codec
yt-dlp -x --audio-format mp3 --audio-quality 192K "URL"

# Keep video after audio extraction
yt-dlp -x --keep-video "URL"

# Audio quality control
yt-dlp -x --audio-quality best "URL"
```

#### **Video Processing**

```bash
# Remux to different container
yt-dlp --remux-video mp4 "URL"

# Re-encode video
yt-dlp --recode-video mp4 "URL"

# Embed metadata
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

```bash
# Extract from specific browser
yt-dlp --cookies-from-browser firefox "URL"
yt-dlp --cookies-from-browser chrome "URL"
yt-dlp --cookies-from-browser safari "URL"

# Specify profile
yt-dlp --cookies-from-browser "firefox:Profile Name" "URL"

# Container support (Firefox)
yt-dlp --cookies-from-browser "firefox:Profile:Container" "URL"
```

#### **Manual Authentication**

```bash
# Username/password login
yt-dlp --username user --password pass "URL"

# Two-factor authentication
yt-dlp --username user --password pass --twofactor 123456 "URL"

# Netrc file authentication
yt-dlp --netrc "URL"
```

## 10. Platform-Specific Issues

### **YouTube-Specific Problems**

#### **Age Restrictions and Sign-in**

```bash
# Bypass age verification
yt-dlp --cookies-from-browser chrome "URL"

# YouTube Premium content
yt-dlp --cookies-from-browser firefox "URL"
```

#### **Throttling and Rate Limits**

```bash
# Slower downloads to avoid throttling
yt-dlp --limit-rate 1M --sleep-interval 5 "URL"

# Use different extraction method
yt-dlp --extractor-args "youtube:player_client=web" "URL"
```

### **Social Media Platforms**

#### **Instagram**

```bash
# Stories and highlights
yt-dlp --cookies-from-browser chrome "INSTAGRAM_URL"
```

#### **TikTok**

```bash
# Avoid watermarks
yt-dlp --extractor-args "tiktok:api_hostname=api16-normal-c-useast1a.tiktokv.com" "URL"
```

## 11. Performance and Resource Issues

### **Memory Management**

```bash
# Limit concurrent fragments
yt-dlp --concurrent-fragments 2 "URL"

# Buffer size control
yt-dlp --buffer-size 16K "URL"

# HTTP chunk size
yt-dlp --http-chunk-size 1M "URL"
```

### **CPU Optimization**

```bash
# Disable post-processing
yt-dlp --no-post-overwrites "URL"

# Limit extraction info
yt-dlp --no-write-info-json --no-write-description "URL"
```

## 12. Advanced Debugging

### **Verbose Logging**

```bash
# Full verbose output
yt-dlp -vvv "URL"

# Debug network
yt-dlp --debug --print-traffic "URL"

# Dump pages
yt-dlp --dump-pages --write-pages "URL"
```

### **Error Analysis**

```bash
# Simulate download (no actual download)
yt-dlp -s "URL"

# Check formats only
yt-dlp -F "URL"

# Test extraction
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

```bash
# Log all operations
yt-dlp --verbose --output "%(title)s.%(ext)s" "URL" 2>&1 | tee download.log

# Archive successful downloads
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
