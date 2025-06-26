---
sidebar_position: 1
---

# Authentication Methods

yt-dlp supports various authentication methods to access private content, age-restricted videos, and platform-specific features.

## Browser Cookie Integration

### Automatic Cookie Import

```bash
# Import cookies from Chrome
yt-dlp --cookies-from-browser chrome "VIDEO_URL"

# Import cookies from Firefox
yt-dlp --cookies-from-browser firefox "VIDEO_URL"

# Import cookies from Safari
yt-dlp --cookies-from-browser safari "VIDEO_URL"

# Import cookies from Edge
yt-dlp --cookies-from-browser edge "VIDEO_URL"
```

### Profile-Specific Cookies

```bash
# Chrome with specific profile
yt-dlp --cookies-from-browser "chrome:Profile 1" "VIDEO_URL"

# Firefox with specific profile
yt-dlp --cookies-from-browser "firefox:default-release" "VIDEO_URL"

# Custom profile path
yt-dlp --cookies-from-browser "chrome:/path/to/profile" "VIDEO_URL"
```

### Browser Container Support

```bash
# Firefox containers
yt-dlp --cookies-from-browser "firefox:default-release:Personal" "VIDEO_URL"

# Multiple container isolation
yt-dlp --cookies-from-browser "firefox:default-release:Work" "VIDEO_URL"
```

## Manual Cookie Files

### Cookie File Formats

```bash
# Netscape cookie format
yt-dlp --cookies cookies.txt "VIDEO_URL"

# JSON cookie format
yt-dlp --cookies cookies.json "VIDEO_URL"

# Multiple cookie files
yt-dlp --cookies "cookies1.txt,cookies2.txt" "VIDEO_URL"
```

### Exporting Cookies

**Browser Extension Method:**

1. Install "cookies.txt" extension
2. Navigate to the target site
3. Export cookies to file
4. Use with yt-dlp

**Manual Export Example:**

```bash
# Example cookies.txt format
# .youtube.com	TRUE	/	FALSE	1234567890	session_token	abc123
# .youtube.com	TRUE	/	FALSE	1234567890	LOGIN_INFO	xyz789
```

## Username/Password Authentication

### Basic Login

```bash
# Username and password
yt-dlp --username "your_username" --password "your_password" "VIDEO_URL"

# Interactive password prompt
yt-dlp --username "your_username" --password "" "VIDEO_URL"

# Store credentials securely
yt-dlp --username "user" --password "$(cat password_file)" "VIDEO_URL"
```

### Two-Factor Authentication

```bash
# For platforms supporting 2FA
yt-dlp --username "user" --password "pass" --twofactor "123456" "VIDEO_URL"

# Interactive 2FA prompt
yt-dlp --username "user" --password "pass" --twofactor "" "VIDEO_URL"
```

### Platform-Specific Login

```bash
# Crunchyroll login
yt-dlp --username "user" --password "pass" "https://crunchyroll.com/video"

# Adobe Pass for TV networks
yt-dlp --ap-mso "provider" --ap-username "user" --ap-password "pass" "VIDEO_URL"
```

## OAuth and Token Authentication

### YouTube OAuth

```bash
# OAuth for YouTube private videos
yt-dlp --oauth2-token "your_oauth_token" "PRIVATE_YOUTUBE_URL"

# Interactive OAuth flow
yt-dlp --oauth2-interactive "PRIVATE_YOUTUBE_URL"
```

### API Token Authentication

```bash
# Custom API token
yt-dlp --api-token "your_api_token" "VIDEO_URL"

# Bearer token
yt-dlp --http-header "Authorization: Bearer your_token" "VIDEO_URL"
```

## Network and Proxy Authentication

### Proxy with Authentication

```bash
# HTTP proxy with auth
yt-dlp --proxy "http://user:pass@proxy.com:8080" "VIDEO_URL"

# SOCKS proxy with auth
yt-dlp --proxy "socks5://user:pass@proxy.com:1080" "VIDEO_URL"

# Multiple proxy authentication
yt-dlp --proxy "http://user:pass@proxy1.com:8080,http://user2:pass2@proxy2.com:8080" "VIDEO_URL"
```

### HTTP Authentication

```bash
# Basic HTTP authentication
yt-dlp --http-header "Authorization: Basic $(echo -n 'user:pass' | base64)" "VIDEO_URL"

# Custom authentication headers
yt-dlp --http-header "X-API-Key: your_key" --http-header "X-User-Token: token" "VIDEO_URL"
```

## Platform-Specific Authentication

### YouTube

```bash
# YouTube with browser cookies
yt-dlp --cookies-from-browser chrome "https://youtube.com/watch?v=PRIVATE_VIDEO"

# YouTube Music authentication
yt-dlp --cookies-from-browser firefox "https://music.youtube.com/watch?v=PRIVATE_SONG"

# YouTube Premium content
yt-dlp --cookies-from-browser chrome "https://youtube.com/premium_content"
```

### Twitch

```bash
# Twitch subscriber content
yt-dlp --cookies-from-browser firefox "https://twitch.tv/subscriber_video"

# Twitch VOD with authentication
yt-dlp --cookies-from-browser chrome "https://twitch.tv/videos/subscriber_vod"
```

### Netflix/Streaming Services

```bash
# Netflix with cookies (where legally permitted)
yt-dlp --cookies-from-browser chrome "NETFLIX_URL"

# Disney+ authentication
yt-dlp --cookies-from-browser firefox "DISNEY_PLUS_URL"

# HBO Max authentication
yt-dlp --cookies-from-browser edge "HBO_MAX_URL"
```

### Social Media Platforms

```bash
# Instagram private content
yt-dlp --cookies-from-browser chrome "INSTAGRAM_PRIVATE_URL"

# Facebook private videos
yt-dlp --cookies-from-browser firefox "FACEBOOK_PRIVATE_URL"

# Twitter private content
yt-dlp --cookies-from-browser chrome "TWITTER_PRIVATE_URL"
```

## Advanced Authentication

### Session Management

```bash
# Save session for reuse
yt-dlp --cookies-from-browser chrome --write-cookies session.txt "VIDEO_URL"

# Load saved session
yt-dlp --cookies session.txt "VIDEO_URL"

# Session with expiration handling
yt-dlp --cookies session.txt --refresh-cookies "VIDEO_URL"
```

### Authentication Caching

```bash
# Cache authentication data
yt-dlp --cache-dir ~/.cache/yt-dlp --cookies-from-browser chrome "VIDEO_URL"

# Clear authentication cache
yt-dlp --rm-cache-dir "VIDEO_URL"

# Force authentication refresh
yt-dlp --no-cache-dir --cookies-from-browser chrome "VIDEO_URL"
```

### Multi-Account Support

```bash
# Different accounts for different sites
yt-dlp --cookies youtube_cookies.txt "YOUTUBE_URL"
yt-dlp --cookies twitch_cookies.txt "TWITCH_URL"

# Account-specific configuration
yt-dlp --config-location youtube_config.conf "YOUTUBE_URL"
```

## Security Considerations

### Cookie Security

```bash
# Secure cookie storage
chmod 600 cookies.txt

# Encrypted cookie storage
gpg -c cookies.txt
yt-dlp --cookies <(gpg -d cookies.txt.gpg) "VIDEO_URL"

# Temporary cookie usage
yt-dlp --cookies /tmp/temp_cookies.txt "VIDEO_URL" && rm /tmp/temp_cookies.txt
```

### Credential Management

```bash
# Environment variables
export YTDLP_USERNAME="your_username"
export YTDLP_PASSWORD="your_password"
yt-dlp "VIDEO_URL"

# Configuration file with restricted permissions
echo "--username your_user" > ~/.config/yt-dlp/auth.conf
echo "--password your_pass" >> ~/.config/yt-dlp/auth.conf
chmod 600 ~/.config/yt-dlp/auth.conf
yt-dlp --config-location ~/.config/yt-dlp/auth.conf "VIDEO_URL"
```

## Troubleshooting Authentication

### Common Authentication Issues

```bash
# Debug authentication process
yt-dlp --verbose --cookies-from-browser chrome "VIDEO_URL"

# Test cookie validity
yt-dlp --cookies cookies.txt --list-formats "VIDEO_URL"

# Force fresh authentication
yt-dlp --rm-cache-dir --cookies-from-browser chrome "VIDEO_URL"
```

### Cookie Problems

```bash
# Check cookie format
file cookies.txt

# Validate cookie file
yt-dlp --cookies cookies.txt --verbose "VIDEO_URL" 2>&1 | grep -i cookie

# Browser-specific debugging
yt-dlp --cookies-from-browser chrome --verbose --debug "VIDEO_URL"
```

### Login Failures

```bash
# Interactive login debugging
yt-dlp --username "user" --password "" --verbose "VIDEO_URL"

# Check network connectivity
yt-dlp --verbose --proxy "" "VIDEO_URL"

# Bypass geographical restrictions
yt-dlp --proxy "socks5://proxy:1080" --cookies-from-browser chrome "VIDEO_URL"
```

## Automation and Scripting

### Automated Authentication

```bash
#!/bin/bash
# Authentication automation script
SITE="$1"
URL="$2"

case "$SITE" in
  "youtube")
    yt-dlp --cookies-from-browser chrome "$URL"
    ;;
  "twitch")
    yt-dlp --cookies-from-browser firefox "$URL"
    ;;
  *)
    yt-dlp --cookies-from-browser chrome "$URL"
    ;;
esac
```

### Batch Authentication

```bash
# Multiple sites with different authentication
yt-dlp --cookies youtube_cookies.txt --batch-file youtube_urls.txt
yt-dlp --cookies twitch_cookies.txt --batch-file twitch_urls.txt
yt-dlp --username user --password pass --batch-file login_urls.txt
```

### Scheduled Downloads

```bash
# Cron job with authentication
0 2 * * * yt-dlp --cookies-from-browser chrome --batch-file daily_downloads.txt
```

## Best Practices

1. **Use Browser Cookies**: Most reliable method for modern websites
2. **Secure Storage**: Protect cookie files and credentials
3. **Regular Updates**: Refresh cookies periodically
4. **Account Separation**: Use different credentials for different purposes
5. **Test Authentication**: Verify access before batch operations
6. **Respect Terms**: Follow platform terms of service
7. **Monitor Changes**: Watch for authentication method changes
8. **Backup Credentials**: Securely backup authentication data

Authentication in yt-dlp provides flexible options for accessing private and restricted content while maintaining security and respecting platform policies.
