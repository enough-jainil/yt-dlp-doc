---
sidebar_position: 1
---

# Authentication Methods

yt-dlp supports various authentication methods to access private content, age-restricted videos, and platform-specific features.

## Browser Cookie Integration

### Automatic Cookie Import

Import cookies from Chrome:

```bash
yt-dlp --cookies-from-browser chrome "VIDEO_URL"
```

Import cookies from Firefox:

```bash
yt-dlp --cookies-from-browser firefox "VIDEO_URL"
```

Import cookies from Safari:

```bash
yt-dlp --cookies-from-browser safari "VIDEO_URL"
```

Import cookies from Edge:

```bash
yt-dlp --cookies-from-browser edge "VIDEO_URL"
```

### Profile-Specific Cookies

Chrome with specific profile:

```bash
yt-dlp --cookies-from-browser "chrome:Profile 1" "VIDEO_URL"
```

Firefox with specific profile:

```bash
yt-dlp --cookies-from-browser "firefox:default-release" "VIDEO_URL"
```

Custom profile path:

```bash
yt-dlp --cookies-from-browser "chrome:/path/to/profile" "VIDEO_URL"
```

### Browser Container Support

Firefox container "Personal":

```bash
yt-dlp --cookies-from-browser "firefox:default-release:Personal" "VIDEO_URL"
```

Firefox container "Work":

```bash
yt-dlp --cookies-from-browser "firefox:default-release:Work" "VIDEO_URL"
```

## Manual Cookie Files

### Cookie File Formats

Netscape cookie format:

```bash
yt-dlp --cookies cookies.txt "VIDEO_URL"
```

JSON cookie format:

```bash
yt-dlp --cookies cookies.json "VIDEO_URL"
```

Multiple cookie files:

```bash
yt-dlp --cookies "cookies1.txt,cookies2.txt" "VIDEO_URL"
```

### Exporting Cookies

Browser Extension Method:

1. Install "cookies.txt" extension
2. Navigate to the target site
3. Export cookies to file
4. Use with yt-dlp

Manual Export Example:

.youtube.com TRUE / FALSE 1234567890 session_token abc123
.youtube.com TRUE / FALSE 1234567890 LOGIN_INFO xyz789

## Username/Password Authentication

### Basic Login

Username and password:

```bash
yt-dlp --username "your_username" --password "your_password" "VIDEO_URL"
```

Interactive password prompt:

```bash
yt-dlp --username "your_username" --password "" "VIDEO_URL"
```

Store credentials securely:

```bash
yt-dlp --username "user" --password "$(cat password_file)" "VIDEO_URL"
```

### Two-Factor Authentication

Platforms supporting 2FA:

```bash
yt-dlp --username "user" --password "pass" --twofactor "123456" "VIDEO_URL"
```

Interactive 2FA prompt:

```bash
yt-dlp --username "user" --password "pass" --twofactor "" "VIDEO_URL"
```

### Platform-Specific Login

Crunchyroll login:

```bash
yt-dlp --username "user" --password "pass" "https://crunchyroll.com/video"
```

Adobe Pass (TV networks):

```bash
yt-dlp --ap-mso "provider" --ap-username "user" --ap-password "pass" "VIDEO_URL"
```

## OAuth and Token Authentication

### YouTube OAuth

OAuth token for private videos:

```bash
yt-dlp --oauth2-token "your_oauth_token" "PRIVATE_YOUTUBE_URL"
```

Interactive OAuth flow:

```bash
yt-dlp --oauth2-interactive "PRIVATE_YOUTUBE_URL"
```

### API Token Authentication

Custom API token:

```bash
yt-dlp --api-token "your_api_token" "VIDEO_URL"
```

Bearer token via HTTP header:

```bash
yt-dlp --http-header "Authorization: Bearer your_token" "VIDEO_URL"
```

## Network and Proxy Authentication

### Proxy with Authentication

HTTP proxy with credentials:

```bash
yt-dlp --proxy "http://user:pass@proxy.com:8080" "VIDEO_URL"
```

SOCKS proxy with credentials:

```bash
yt-dlp --proxy "socks5://user:pass@proxy.com:1080" "VIDEO_URL"
```

Multiple proxies:

```bash
yt-dlp --proxy "http://user:pass@proxy1.com:8080,http://user2:pass2@proxy2.com:8080" "VIDEO_URL"
```

### HTTP Authentication

Basic HTTP header:

```bash
yt-dlp --http-header "Authorization: Basic $(echo -n 'user:pass' | base64)" "VIDEO_URL"
```

Custom headers:

```bash
yt-dlp --http-header "X-API-Key: your_key" \
  --http-header "X-User-Token: token" "VIDEO_URL"
```

## Platform-Specific Authentication

### YouTube

YouTube private videos via cookies:

```bash
yt-dlp --cookies-from-browser chrome "https://youtube.com/watch?v=PRIVATE_VIDEO"
```

YouTube Music private tracks:

```bash
yt-dlp --cookies-from-browser firefox "https://music.youtube.com/watch?v=PRIVATE_SONG"
```

### Twitch

Twitch subscriber content:

```bash
yt-dlp --cookies-from-browser firefox "https://twitch.tv/subscriber_video"
```

Twitch VODs:

```bash
yt-dlp --cookies-from-browser chrome "https://twitch.tv/videos/subscriber_vod"
```

### Streaming Services

Netflix (where permitted):

```bash
yt-dlp --cookies-from-browser chrome "NETFLIX_URL"
```

Disney+:

```bash
yt-dlp --cookies-from-browser firefox "DISNEY_PLUS_URL"
```

HBO Max:

```bash
yt-dlp --cookies-from-browser edge "HBO_MAX_URL"
```

### Social Media

Instagram private content:

```bash
yt-dlp --cookies-from-browser chrome "INSTAGRAM_PRIVATE_URL"
```

Facebook private videos:

```bash
yt-dlp --cookies-from-browser firefox "FACEBOOK_PRIVATE_URL"
```

Twitter private content:

```bash
yt-dlp --cookies-from-browser chrome "TWITTER_PRIVATE_URL"
```

## Advanced Authentication

### Session Management

Save session cookies:

```bash
yt-dlp --cookies-from-browser chrome --write-cookies session.txt "VIDEO_URL"
```

Load saved session:

```bash
yt-dlp --cookies session.txt "VIDEO_URL"
```

Refresh expired cookies:

```bash
yt-dlp --cookies session.txt --refresh-cookies "VIDEO_URL"
```

### Authentication Caching

Cache directory usage:

```bash
yt-dlp --cache-dir ~/.cache/yt-dlp --cookies-from-browser chrome "VIDEO_URL"
```

Clear cache directory:

```bash
yt-dlp --rm-cache-dir "VIDEO_URL"
```

Force fresh auth:

```bash
yt-dlp --no-cache-dir --cookies-from-browser chrome "VIDEO_URL"
```

### Multi-Account Support

Use different cookie files per site:

```bash
yt-dlp --cookies youtube_cookies.txt "YOUTUBE_URL"
```

Specify config file:

```bash
yt-dlp --config-location youtube_config.conf "YOUTUBE_URL"
```

## Security Considerations

### Cookie Security

Restrict cookie file permissions:

```bash
chmod 600 cookies.txt
```

Encrypted cookie storage:

```bash
gpg -c cookies.txt
yt-dlp --cookies <(gpg -d cookies.txt.gpg) "VIDEO_URL"
```

Temporary cookie use and removal:

```bash
yt-dlp --cookies /tmp/temp_cookies.txt "VIDEO_URL" && \
  rm /tmp/temp_cookies.txt
```

### Credential Management

Set credentials via environment:

```bash
export YTDLP_USERNAME="your_username"
export YTDLP_PASSWORD="your_password"
```

Use with yt-dlp:

```bash
yt-dlp "VIDEO_URL"
```

Secure config file with permissions:

```bash
printf "--username your_user\n--password your_pass\n" > \
  ~/.config/yt-dlp/auth.conf
chmod 600 ~/.config/yt-dlp/auth.conf
yt-dlp --config-location ~/.config/yt-dlp/auth.conf "VIDEO_URL"
```

## Troubleshooting Authentication

### Common Issues

Verbose auth debug:

```bash
yt-dlp --verbose --cookies-from-browser chrome "VIDEO_URL"
```

Check available formats:

```bash
yt-dlp --cookies cookies.txt --list-formats "VIDEO_URL"
```

Force auth refresh:

```bash
yt-dlp --rm-cache-dir --cookies-from-browser chrome "VIDEO_URL"
```

### Cookie Problems

Check file type:

```bash
file cookies.txt
```

Filter cookie errors:

```bash
yt-dlp --cookies cookies.txt --verbose "VIDEO_URL" 2>&1 | grep -i cookie
```

Browser debug mode:

```bash
yt-dlp --cookies-from-browser chrome --verbose --debug "VIDEO_URL"
```

### Login Failures

Interactive login with debug:

```bash
yt-dlp --username "user" --password "" --verbose "VIDEO_URL"
```

Test network or proxy:

```bash
yt-dlp --verbose --proxy "" "VIDEO_URL"
```

Bypass geo-restrictions:

```bash
yt-dlp --proxy "socks5://proxy:1080" --cookies-from-browser chrome "VIDEO_URL"
```

## Automation and Scripting

### Automated Authentication Script

Template script:

```bash
#!/usr/bin/env bash
SITE="$1"
URL="$2"
if [[ "$SITE" == "youtube" ]]; then
  yt-dlp --cookies-from-browser chrome "$URL"
elif [[ "$SITE" == "twitch" ]]; then
  yt-dlp --cookies-from-browser firefox "$URL"
else
  yt-dlp --cookies-from-browser chrome "$URL"
fi
```

### Batch Authentication

Batch for YouTube:

```bash
yt-dlp --cookies youtube_cookies.txt --batch-file youtube_urls.txt
```

Batch for Twitch:

```bash
yt-dlp --cookies twitch_cookies.txt --batch-file twitch_urls.txt
```

Credentials batch:

```bash
yt-dlp --username user --password pass --batch-file login_urls.txt
```

### Scheduled Downloads (Cron)

Daily downloads at 2am:

```cron
0 2 * * * yt-dlp --cookies-from-browser chrome --batch-file daily_downloads.txt
```

## Best Practices

1. **Use Browser Cookies**: Most reliable for modern sites
2. **Secure Storage**: Protect cookie & credential files
3. **Refresh Regularly**: Update cookies periodically
4. **Separate Accounts**: Different creds for different uses
5. **Test Before Batches**: Verify auth works
6. **Respect ToS**: Follow platform rules
7. **Monitor Changes**: Adapt to auth method updates
8. **Backup Data**: Securely backup cookies & configs
