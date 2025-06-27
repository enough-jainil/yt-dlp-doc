---
sidebar_position: 2
---

# Frequently Asked Questions (FAQ)

This comprehensive FAQ addresses the most commonly asked questions about yt-dlp, covering everything from basic usage to advanced features. Find quick answers to help you get the most out of yt-dlp.

## General Questions

### **Q1: What is yt-dlp and how is it different from youtube-dl?**

**A:** yt-dlp is a feature-rich fork of youtube-dl with significant improvements:

- **Faster downloads** and better performance
- **More frequent updates** (weekly/bi-weekly vs irregular)
- **Advanced format selection** with sorting capabilities
- **SponsorBlock integration** for automatic ad-skipping
- **Better platform support** with 1,000+ supported sites
- **Enhanced browser integration** for cookie extraction
- **Plugin system** for extensibility
- **Live stream support** and improved error handling

### **Q2: Is yt-dlp legal to use?**

**A:** yt-dlp itself is legal software. However, how you use it depends on:

- **Copyright laws** in your jurisdiction
- **Terms of service** of websites you download from
- **Fair use** provisions for personal/educational use
- **Content licensing** and distribution rights

**Best practices:**

- Only download content you have rights to
- Respect creators' intellectual property
- Use for personal, educational, or research purposes
- Check local laws and platform terms of service

### **Q3: What platforms and operating systems does yt-dlp support?**

**A:** yt-dlp is cross-platform and supports:

**Operating Systems:**

- **Windows** 7+ (x86, x64, ARM64)
- **macOS** 10.15+ (Intel and Apple Silicon)
- **Linux** (all major distributions)
- **Android** (via Termux)
- **iOS** (via iSH)

**Supported Sites:** 1,000+ including:

- **Video platforms**: YouTube, Vimeo, Dailymotion, Twitch
- **Social media**: TikTok, Instagram, Twitter, Facebook
- **News sites**: BBC, CNN, Reuters, many regional outlets
- **Educational**: Khan Academy, Coursera, edX
- **Live streaming**: Twitch, YouTube Live, Facebook Live

### **Q4: What are the system requirements?**

**A:** Minimum requirements:

- **Python**: 3.9+ (CPython) or 3.10+ (PyPy)
- **Memory**: 512MB RAM (more for large playlists)
- **Storage**: 50MB for installation + download space
- **Network**: Internet connection
- **Optional**: FFmpeg for advanced post-processing

## Installation and Updates

### **Q5: What are the different ways to install yt-dlp?**

**A:** yt-dlp offers multiple installation methods:

**1. Standalone Binaries (Easiest)**

Download from GitHub releases - no Python required

```bash
# Windows: yt-dlp.exe
# macOS/Linux: yt-dlp
```

**2. Python pip (Recommended for Python users)**

```bash
pip install yt-dlp
```

Install for user-only

```bash
pip install --user yt-dlp
```

**3. Package Managers**

macOS

```bash
brew install yt-dlp
```

Windows

```bash
choco install yt-dlp
```

```bash
winget install yt-dlp
```

Linux (varies by distribution)

```bash
sudo apt install yt-dlp
```

```bash
sudo dnf install yt-dlp
```

```bash
sudo pacman -S yt-dlp
```

### **Q6: How do I update yt-dlp?**

**A:** Update methods depend on installation:

Self-updater (for binaries)

```bash
yt-dlp -U
```

pip installation

```bash
pip install -U yt-dlp
```

Package managers

```bash
brew upgrade yt-dlp
```

```bash
choco upgrade yt-dlp
```

```bash
sudo apt update && sudo apt upgrade yt-dlp
```

### **Q7: Why am I getting "command not found" or "yt-dlp not recognized" errors?**

**A:** Common solutions:

**1. PATH Issues**

- Ensure installation directory is in your system PATH
- For pip user installs, add `~/.local/bin` to PATH (Linux/macOS)
- On Windows, add Python Scripts directory to PATH

**2. Installation Verification**

Check if installed

```bash
which yt-dlp
```

```bash
where yt-dlp
```

Check version

```bash
yt-dlp --version
```

**3. Alternative Execution**

If installed via pip but not in PATH

```bash
python -m yt_dlp "URL"
```

Direct execution (if binary downloaded)

```bash
./yt-dlp "URL"
```

```bash
yt-dlp.exe "URL"
```

## Basic Usage

### **Q8: How do I download a video?**

**A:** Basic download syntax:

Simple download (best quality)

```bash
yt-dlp "https://www.youtube.com/watch?v=VIDEO_ID"
```

Multiple videos

```bash
yt-dlp "URL1" "URL2" "URL3"
```

From file containing URLs

```bash
yt-dlp -a urls.txt
```

### **Q9: How do I download only audio?**

**A:** Audio extraction options:

Extract audio (default format)

```bash
yt-dlp -x "URL"
```

Specific audio format and quality

```bash
yt-dlp -x --audio-format mp3 --audio-quality 192K "URL"
```

Best audio quality

```bash
yt-dlp -x --audio-quality best "URL"
```

Keep video file after extraction

```bash
yt-dlp -x --keep-video "URL"
```

### **Q10: How do I select video quality?**

**A:** Quality selection options:

List available formats first

```bash
yt-dlp -F "URL"
```

Specific quality

```bash
yt-dlp -f "best[height<=1080]" "URL"
```

```bash
yt-dlp -f "worst[height>=720]" "URL"
```

```bash
yt-dlp -f "best[height=720]" "URL"
```

Format preferences

```bash
yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" "URL"
```

Avoid certain formats

```bash
yt-dlp -f "best[ext!=flv]" "URL"
```

### **Q11: Can I download entire playlists or channels?**

**A:** Yes, with various options:

Entire playlist

```bash
yt-dlp "PLAYLIST_URL"
```

Specific items from playlist

```bash
yt-dlp --playlist-items 1,3,5-10 "PLAYLIST_URL"
```

Reverse order

```bash
yt-dlp --playlist-reverse "PLAYLIST_URL"
```

YouTube channel (all uploads)

```bash
yt-dlp "https://www.youtube.com/@channel_name"
```

Channel playlists, shorts, live streams

```bash
yt-dlp "https://www.youtube.com/@channel_name/playlists"
```

```bash
yt-dlp "https://www.youtube.com/@channel_name/shorts"
```

```bash
yt-dlp "https://www.youtube.com/@channel_name/streams"
```

## Advanced Features

### **Q12: How do I customize output filenames and locations?**

**A:** Use output templates:

Custom filename template

```bash
yt-dlp -o "%(title)s-%(id)s.%(ext)s" "URL"
```

Organize by uploader

```bash
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" "URL"
```

Date-based organization

```bash
yt-dlp -o "%(upload_date)s/%(title)s.%(ext)s" "URL"
```

Separate paths for different content types

```bash
yt-dlp -P "video:/Videos" -P "audio:/Music" "URL"
```

Windows-safe filenames

```bash
yt-dlp --windows-filenames -o "%(title)s.%(ext)s" "URL"
```

### **Q13: How do I handle subtitles and captions?**

**A:** Subtitle options:

List available subtitles

```bash
yt-dlp --list-subs "URL"
```

Download specific language subtitles

```bash
yt-dlp --sub-langs en --write-subs "URL"
```

Download all available subtitles

```bash
yt-dlp --sub-langs all --write-subs "URL"
```

Auto-generated subtitles

```bash
yt-dlp --write-auto-subs --sub-langs en "URL"
```

Embed subtitles in video

```bash
yt-dlp --embed-subs --sub-langs en "URL"
```

Convert subtitle format

```bash
yt-dlp --convert-subs srt --write-subs "URL"
```

### **Q14: Can I use yt-dlp in my Python scripts?**

**A:** Yes, yt-dlp provides a Python API:

```python
import yt_dlp

# Basic usage
ydl_opts = {}
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['https://www.youtube.com/watch?v=VIDEO_ID'])

# With options
ydl_opts = {
    'format': 'bestaudio/best',
    'outtmpl': '%(title)s.%(ext)s',
}
with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download(['URL'])
```

### **Q15: How do I download live streams?**

**A:** Live stream options:

Download live stream (will stop when stream ends)

```bash
yt-dlp "LIVE_STREAM_URL"
```

Download from start (experimental)

```bash
yt-dlp --live-from-start "LIVE_STREAM_URL"
```

Wait for live stream to start

```bash
yt-dlp --wait-for-video 60 "LIVE_STREAM_URL"
```

Record for specific duration

```bash
yt-dlp --download-sections "*0-3600" "LIVE_STREAM_URL"
```

## Troubleshooting

### **Q16: Why are my downloads slow?**

**A:** Speed optimization strategies:

Use external downloader (fastest)

```bash
yt-dlp --external-downloader aria2c --external-downloader-args "-x 16 -s 16" "URL"
```

Limit rate to avoid throttling

```bash
yt-dlp --limit-rate 2M "URL"
```

Concurrent fragment downloads

```bash
yt-dlp --concurrent-fragments 4 "URL"
```

Different user agent

```bash
yt-dlp --user-agent "Mozilla/5.0..." "URL"
```

### **Q17: How do I bypass geo-restrictions?**

**A:** Geo-restriction bypass methods:

Built-in geo-bypass

```bash
yt-dlp --geo-bypass "URL"
```

```bash
yt-dlp --geo-bypass-country US "URL"
```

Use proxy

```bash
yt-dlp --proxy socks5://127.0.0.1:9150 "URL"
```

```bash
yt-dlp --proxy http://proxy.example.com:8080 "URL"
```

VPN (external solution)

```bash
# Connect to VPN first, then run yt-dlp normally
```

### **Q18: How do I download age-restricted or private content?**

**A:** Authentication methods:

Use browser cookies (recommended)

```bash
yt-dlp --cookies-from-browser firefox "URL"
```

```bash
yt-dlp --cookies-from-browser chrome "URL"
```

Specific browser profile

```bash
yt-dlp --cookies-from-browser "firefox:Profile Name" "URL"
```

Manual login (less secure)

```bash
yt-dlp --username YOUR_USERNAME --password YOUR_PASSWORD "URL"
```

Cookies file

```bash
yt-dlp --cookies cookies.txt "URL"
```

### **Q19: What do I do when yt-dlp says "video unavailable"?**

**A:** Troubleshooting steps:

1. **Update yt-dlp**: `yt-dlp -U`
2. **Check with verbose output**: `yt-dlp -v "URL"`
3. **Try geo-bypass**: `yt-dlp --geo-bypass "URL"`
4. **Use browser cookies**: `yt-dlp --cookies-from-browser chrome "URL"`
5. **Check if video actually exists** (visit URL in browser)
6. **Try different user agent**: `yt-dlp --user-agent "Mozilla/5.0..." "URL"`

### **Q20: How do I fix FFmpeg-related errors?**

**A:** FFmpeg troubleshooting:

Check if FFmpeg is available

```bash
yt-dlp --check-formats "URL"
```

Specify FFmpeg location

```bash
yt-dlp --ffmpeg-location /path/to/ffmpeg "URL"
```

Skip post-processing if FFmpeg issues

```bash
yt-dlp --no-post-overwrites "URL"
```

Install FFmpeg

```bash
# Windows: Download from ffmpeg.org
# macOS: brew install ffmpeg
# Linux: sudo apt install ffmpeg
```

## Configuration and Automation

### **Q21: How do I create configuration files?**

**A:** Configuration file locations and syntax:

**Linux/macOS:**

- `~/.config/yt-dlp/config`
- `~/.yt-dlp.conf`

**Windows:**

- `%APPDATA%\yt-dlp\config.txt`
- `%APPDATA%\yt-dlp.conf`

**Example config file:**

```
# Default format selection
-f bestvideo[height<=1080]+bestaudio/best

# Output template
-o %(uploader)s/%(title)s.%(ext)s

# Always extract metadata
--embed-metadata
--embed-thumbnail

# Subtitle preferences
--sub-langs en,es
--write-subs
```

### **Q22: How do I avoid re-downloading videos?**

**A:** Use download archives:

Create and use download archive

```bash
yt-dlp --download-archive archive.txt "PLAYLIST_URL"
```

Archive will track downloaded videos

```bash
# Subsequent runs will skip already downloaded content
```

### **Q23: How do I handle large playlists efficiently?**

**A:** Large playlist strategies:

Limit concurrent downloads

```bash
yt-dlp --max-downloads 50 "PLAYLIST_URL"
```

Add delays between downloads

```bash
yt-dlp --sleep-interval 5 --max-sleep-interval 15 "PLAYLIST_URL"
```

Continue on errors

```bash
yt-dlp --ignore-errors "PLAYLIST_URL"
```

Download specific date ranges

```bash
yt-dlp --dateafter 20230101 --datebefore 20231231 "PLAYLIST_URL"
```

## Privacy and Security

### **Q24: Is yt-dlp safe to use? Does it collect data?**

**A:** yt-dlp privacy and security:

**Safety:**

- **Open source** - code is publicly auditable
- **No data collection** - yt-dlp doesn't collect personal information
- **Local operation** - runs entirely on your machine
- **No telemetry** - doesn't send usage data anywhere

**Security best practices:**

- Download from official sources only
- Keep yt-dlp updated
- Be cautious with cookies and credentials
- Use secure networks for downloads
- Verify downloaded content

### **Q25: Is it safe to use cookies and login credentials?**

**A:** Cookie and credential safety:

**Browser cookie extraction (safest):**

- Cookies extracted locally from your browser
- No credentials transmitted over network
- Automatically includes 2FA tokens

**Manual credentials (less secure):**

- Only use on trusted networks
- Avoid storing passwords in scripts
- Use app-specific passwords when available
- Consider using netrc files for credential storage

**Cookie file security:**

- Don't share cookie files
- Store in secure locations
- Delete old/expired cookie files
- Use browser extraction instead when possible

## Platform-Specific Questions

### **Q26: Are there any YouTube-specific features?**

**A:** YouTube-specific capabilities:

YouTube search

```bash
yt-dlp "ytsearch10:cats"
```

YouTube Music

```bash
yt-dlp "https://music.youtube.com/watch?v=VIDEO_ID"
```

YouTube Shorts

```bash
yt-dlp "https://www.youtube.com/shorts/SHORT_ID"
```

YouTube Stories (if available)

```bash
yt-dlp "ytstories:CHANNEL_ID"
```

Skip sponsored segments (SponsorBlock)

```bash
yt-dlp --sponsorblock-mark all "URL"
```

```bash
yt-dlp --sponsorblock-remove sponsor "URL"
```

Different player clients (if needed)

```bash
yt-dlp --extractor-args "youtube:player_client=web" "URL"
```

### **Q27: How do I download from social media platforms?**

**A:** Social media specific tips:

**Instagram:**

Requires authentication for most content

```bash
yt-dlp --cookies-from-browser chrome "INSTAGRAM_URL"
```

**TikTok:**

Avoid watermarks

```bash
yt-dlp --extractor-args "tiktok:api_hostname=api16-normal-c-useast1a.tiktokv.com" "URL"
```

**Twitter:**

May require authentication

```bash
yt-dlp --cookies-from-browser firefox "TWITTER_URL"
```

## Development and Contributing

### **Q28: How can I contribute to yt-dlp?**

**A:** Ways to contribute:

**Bug Reports:**

- Use GitHub issues with detailed information
- Include yt-dlp version, command used, error message
- Test with latest version first

**Feature Requests:**

- Check existing issues first
- Provide clear use cases and examples
- Be patient - development is volunteer-driven

**Code Contributions:**

- Fork the repository on GitHub
- Follow coding standards and guidelines
- Submit pull requests with clear descriptions
- Add tests for new features

**Documentation:**

- Improve existing documentation
- Add examples and use cases
- Translate to other languages

### **Q29: How do I report bugs effectively?**

**A:** Effective bug reporting:

**Include this information:**

yt-dlp version

```bash
yt-dlp --version
```

Full command used

```bash
yt-dlp -v "URL"
```

Operating system and Python version

```bash
python --version
```

**Steps for good bug reports:**

1. **Search existing issues** first
2. **Test with latest version**: `yt-dlp -U`
3. **Use verbose output**: Add `-v` flag
4. **Provide minimal example** that reproduces the issue
5. **Include complete error message**
6. **Mention if URL is private** (don't share private URLs)

## Getting Help

### **Q30: Where can I get additional help and support?**

**A:** Support resources:

**Official Channels:**

- **GitHub Issues**: [yt-dlp/yt-dlp/issues](https://github.com/yt-dlp/yt-dlp/issues)
- **GitHub Discussions**: For questions and community support
- **Documentation**: Comprehensive guides and examples

**Community Resources:**

- **Reddit**: r/youtubedl community
- **Discord**: yt-dlp community servers
- **Stack Overflow**: Programming-related questions

**Professional Support:**

- Custom extractor development
- Enterprise integration consulting
- Compliance and legal guidance
- Performance optimization services

**Self-Help Resources:**

Built-in help

```bash
yt-dlp --help
```

Verbose output for debugging

```bash
yt-dlp -v
```

Check supported sites

```bash
yt-dlp --list-extractors
```

Format information

```bash
yt-dlp -F "URL"
```

---

**Remember:** This FAQ covers common questions, but yt-dlp is a powerful tool with many advanced features. For detailed information on specific topics, refer to the comprehensive documentation sections covering installation, basic usage, advanced features, and platform-specific guides.
