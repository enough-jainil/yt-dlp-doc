---
sidebar_position: 4
---

# Extractor Arguments in yt-dlp

Extractor arguments provide a way to pass specific configuration parameters to individual site extractors, allowing for fine-tuned control over how yt-dlp interacts with different platforms.

## Basic Syntax

The general syntax for extractor arguments is:

```bash
yt-dlp --extractor-args "EXTRACTOR_KEY:ARG=VALUE1,VALUE2;ARG2=VALUE3" URL
```

### Format Rules

- **Separator**: Arguments are separated by semicolons (`;`)
- **Assignment**: Use `ARG=VAL1,VAL2` format for values
- **Multiple extractors**: Use separate `--extractor-args` for each extractor
- **CLI syntax**: In command line, `ARG` can use dashes (`-`) instead of underscores (`_`)

### Examples

```bash
# Single argument
yt-dlp --extractor-args "youtube:player-client=tv" URL

# Multiple arguments for one extractor
yt-dlp --extractor-args "youtube:player-client=tv,web;formats=incomplete" URL

# Multiple extractors
yt-dlp --extractor-args "youtube:player-client=tv" --extractor-args "twitter:api=syndication" URL
```

## YouTube Extractor Arguments

YouTube is the most feature-rich extractor with extensive customization options:

### Player Client Selection

Control which YouTube player clients are used for extraction:

```bash
# Use TV and iOS clients (recommended for stability)
--extractor-args "youtube:player_client=tv,ios"

# Use web client only
--extractor-args "youtube:player_client=web"

# Use all available clients (not recommended)
--extractor-args "youtube:player_client=all"

# Exclude specific clients
--extractor-args "youtube:player_client=default,-ios"

# Default clients for different scenarios
--extractor-args "youtube:player_client=default"  # tv,ios,web (or tv,web with cookies)
```

**Available Clients**:

- `web` - Standard web player
- `web_safari` - Safari-specific web player
- `web_embedded` - Embedded player (for age-restricted content)
- `web_music` - YouTube Music player (auto-added for music.youtube.com)
- `web_creator` - Creator Studio player (requires authentication)
- `mweb` - Mobile web player
- `ios` - iOS app player
- `android` - Android app player
- `android_vr` - Android VR player
- `tv` - TV app player
- `tv_simply` - Simplified TV player
- `tv_embedded` - Embedded TV player

### Language Preferences

Set preferred language for translated metadata:

```bash
# Prefer Japanese metadata
--extractor-args "youtube:lang=ja"

# Prefer Spanish metadata
--extractor-args "youtube:lang=es"

# Prefer English (default)
--extractor-args "youtube:lang=en"
```

### Skip Content Types

Skip extraction of specific content types for faster processing:

```bash
# Skip HLS manifests
--extractor-args "youtube:skip=hls"

# Skip DASH manifests
--extractor-args "youtube:skip=dash"

# Skip auto-translated subtitles
--extractor-args "youtube:skip=translated_subs"

# Skip multiple types
--extractor-args "youtube:skip=hls,dash,translated_subs"
```

### Player Optimization

Optimize player requests for specific scenarios:

```bash
# Skip some network requests (faster but potentially less robust)
--extractor-args "youtube:player_skip=configs,webpage"

# Skip specific components
--extractor-args "youtube:player_skip=js"           # Skip JS player
--extractor-args "youtube:player_skip=initial_data" # Skip initial data request
```

### Comment Extraction

Customize comment extraction behavior:

```bash
# Sort comments by top (default: new)
--extractor-args "youtube:comment_sort=top"

# Limit comment extraction
--extractor-args "youtube:max_comments=1000,all,100"  # 1000 total, 100 replies max

# No comment limits
--extractor-args "youtube:max_comments=all,all,all,all"
```

### Format Control

Control format availability and processing:

```bash
# Include incomplete formats (live streams)
--extractor-args "youtube:formats=incomplete"

# Include duplicate formats
--extractor-args "youtube:formats=duplicate"

# Convert HTTP to DASH
--extractor-args "youtube:formats=dashy"

# Include formats missing PO tokens
--extractor-args "youtube:formats=missing_pot"

# Combine options
--extractor-args "youtube:formats=incomplete,duplicate"
```

### API Configuration

Advanced API configuration options:

```bash
# Use specific Innertube host
--extractor-args "youtube:innertube_host=studio.youtube.com"

# Use custom API key
--extractor-args "youtube:innertube_key=YOUR_API_KEY"

# Override visitor data
--extractor-args "youtube:visitor_data=YOUR_VISITOR_DATA"

# Override data sync ID
--extractor-args "youtube:data_sync_id=YOUR_DATA_SYNC_ID"
```

### Proof of Origin (PO) Tokens

Configure PO token handling for enhanced access:

```bash
# Provide PO tokens
--extractor-args "youtube:po_token=web.gvs+TOKEN1,web.player+TOKEN2"

# Enable PO token debug logging
--extractor-args "youtube:pot_trace=true"

# Control PO token fetching policy
--extractor-args "youtube:fetch_pot=always"  # always, never, auto (default)
```

### Error Handling

Configure error handling behavior:

```bash
# Raise error on incomplete data instead of warning
--extractor-args "youtube:raise_incomplete_data=true"
```

## Other Platform Extractors

### Twitter/X

```bash
# Use GraphQL API (default)
--extractor-args "twitter:api=graphql"

# Use legacy API
--extractor-args "twitter:api=legacy"

# Use syndication API
--extractor-args "twitter:api=syndication"
```

### TikTok

```bash
# Use specific API hostname
--extractor-args "tiktok:api_hostname=api22-normal-c-alisg.tiktokv.com"

# Set app information
--extractor-args "tiktok:app_name=trill"
--extractor-args "tiktok:app_version=34.1.2"
--extractor-args "tiktok:manifest_app_version=2023401020"
--extractor-args "tiktok:aid=1180"

# Set device ID for mobile API
--extractor-args "tiktok:device_id=1234567890123456789"

# Comprehensive app info
--extractor-args "tiktok:app_info=1234567890123456789/trill/34.1.2/2023401020/1180"
```

### Generic Extractor

The generic extractor handles many sites and supports various arguments:

```bash
# Pass query parameters to fragments
--extractor-args "generic:fragment_query=token=abc123"

# Pass query to variant playlists
--extractor-args "generic:variant_query=auth=xyz789"

# Set HLS decryption key
--extractor-args "generic:hls_key=ABCDEF1234567980,0xFEDCBA0987654321"

# Bypass live detection
--extractor-args "generic:is_live=false"

# Enable impersonation
--extractor-args "generic:impersonate=chrome-110"

# Disable impersonation
--extractor-args "generic:impersonate=false"
```

### Instagram

```bash
# Set custom app ID
--extractor-args "instagram:app_id=936619743392459"
```

### Twitch

```bash
# Set client ID for GraphQL requests
--extractor-args "twitch:client_id=kimne78kx3ncx6brgo4mv6wki5h1ko"
```

### Hotstar

```bash
# Ignore specific resolutions
--extractor-args "hotstar:res=sd,hd"

# Ignore video codecs
--extractor-args "hotstar:vcodec=h264,h265"

# Ignore dynamic range types
--extractor-args "hotstar:dr=sdr,hdr10"
```

### GameJolt

```bash
# Set comment sorting
--extractor-args "gamejolt:comment_sort=hot"  # hot, you, top, new
```

### SoundCloud

```bash
# Request specific formats
--extractor-args "soundcloud:formats=hls_opus,http_aac"

# Request all formats
--extractor-args "soundcloud:formats=*"

# Request all MP3 formats
--extractor-args "soundcloud:formats=*_mp3"
```

### Bilibili

```bash
# Prefer multi-FLV formats over MP4 for older videos
--extractor-args "bilibili:prefer_multi_flv=true"
```

## Advanced Usage Examples

### YouTube Optimization for Different Scenarios

**Maximum compatibility**:

```bash
yt-dlp --extractor-args "youtube:player_client=web;formats=duplicate" \
       -f "best[ext=mp4]/best" URL
```

**Speed optimization**:

```bash
yt-dlp --extractor-args "youtube:player_skip=configs,webpage;skip=dash,hls" \
       -f "best" URL
```

**High-quality with fallbacks**:

```bash
yt-dlp --extractor-args "youtube:player_client=tv,ios,web;formats=incomplete" \
       -f "bestvideo[height<=2160]+bestaudio/best" URL
```

**Audio-focused extraction**:

```bash
yt-dlp --extractor-args "youtube:skip=dash;player_client=web" \
       -x --audio-format mp3 URL
```

### Multi-Platform Batch Processing

```bash
# Optimized for various platforms
yt-dlp --extractor-args "youtube:player_client=tv,ios" \
       --extractor-args "twitter:api=syndication" \
       --extractor-args "generic:impersonate=chrome" \
       --batch-file urls.txt
```

### Platform-Specific Configurations

**YouTube with authentication**:

```bash
yt-dlp --extractor-args "youtube:player_client=web_creator,tv;comment_sort=top" \
       --cookies cookies.txt URL
```

**TikTok with mobile API**:

```bash
yt-dlp --extractor-args "tiktok:app_info=1234567890123456789" \
       --extractor-args "tiktok:device_id=9876543210987654321" URL
```

## Troubleshooting with Extractor Arguments

### Debugging Extraction Issues

```bash
# Enable verbose logging to see extraction details
yt-dlp --verbose --extractor-args "youtube:player_client=tv" URL

# Test different player clients for YouTube
yt-dlp --extractor-args "youtube:player_client=web" URL
yt-dlp --extractor-args "youtube:player_client=ios" URL
yt-dlp --extractor-args "youtube:player_client=tv" URL
```

### Common Problem Solutions

**YouTube age-restricted content**:

```bash
# Use embedded clients
--extractor-args "youtube:player_client=web_embedded,tv_embedded"
```

**YouTube missing formats**:

```bash
# Include incomplete and duplicate formats
--extractor-args "youtube:formats=incomplete,duplicate"
```

**Rate limiting issues**:

```bash
# Skip unnecessary requests
--extractor-args "youtube:player_skip=configs,initial_data"
```

**Generic extractor for stubborn sites**:

```bash
# Try browser impersonation
--extractor-args "generic:impersonate=chrome-110"
```

## Best Practices

### General Guidelines

1. **Start simple**: Begin with basic arguments and add complexity as needed
2. **Test thoroughly**: Different arguments can significantly affect extraction
3. **Platform-specific**: Use appropriate arguments for each platform
4. **Monitor changes**: Extractor arguments may change as platforms evolve
5. **Combine wisely**: Some argument combinations may conflict

### Performance Optimization

```bash
# For batch processing
--extractor-args "youtube:player_skip=configs;skip=translated_subs"

# For single video quality
--extractor-args "youtube:player_client=tv,ios;formats=incomplete"

# For audio extraction
--extractor-args "youtube:skip=dash;player_client=web"
```

### Reliability Enhancements

```bash
# Multiple fallback clients
--extractor-args "youtube:player_client=tv,ios,web"

# Include all format types
--extractor-args "youtube:formats=incomplete,duplicate"

# Comprehensive error handling
--extractor-args "youtube:raise_incomplete_data=false"
```

Extractor arguments provide powerful customization capabilities for yt-dlp's interaction with different platforms. Understanding these options allows you to optimize extraction for your specific needs, whether prioritizing speed, compatibility, or access to specific content types.
