---
sidebar_position: 1
---

# Network Configuration in yt-dlp

yt-dlp provides extensive network configuration options to handle various connection scenarios, proxies, rate limiting, and geographical restrictions.

## Proxy Configuration

### Basic Proxy Setup

```bash
# HTTP proxy
yt-dlp --proxy http://proxy.example.com:8080 URL

# HTTPS proxy
yt-dlp --proxy https://proxy.example.com:8080 URL

# SOCKS4 proxy
yt-dlp --proxy socks4://proxy.example.com:1080 URL

# SOCKS5 proxy
yt-dlp --proxy socks5://proxy.example.com:1080 URL
```

### Proxy with Authentication

```bash
# HTTP proxy with username/password
yt-dlp --proxy http://username:password@proxy.example.com:8080 URL

# SOCKS5 proxy with authentication
yt-dlp --proxy socks5://username:password@proxy.example.com:1080 URL
```

### Socket Address Proxy

```bash
# Unix socket (Linux/macOS)
yt-dlp --proxy socks5://localhost:port URL

# Use proxy for specific domains only
yt-dlp --proxy http://proxy.example.com:8080 --proxy-exception "*.youtube.com" URL
```

### No Proxy Configuration

```bash
# Bypass proxy for specific patterns
yt-dlp --proxy http://proxy.example.com:8080 --proxy-exception "localhost,127.0.0.1,*.local" URL

# No proxy at all (override system proxy)
yt-dlp --no-proxy URL
```

## Source IP Address Binding

Control which network interface to use for connections:

```bash
# Bind to specific IPv4 address
yt-dlp --source-address 192.168.1.100 URL

# Bind to specific IPv6 address
yt-dlp --source-address 2001:db8::1 URL

# Force IPv4 only
yt-dlp --force-ipv4 URL

# Force IPv6 only
yt-dlp --force-ipv6 URL
```

## Rate Limiting and Throttling

### Download Speed Limiting

```bash
# Limit to 1 MB/s
yt-dlp --limit-rate 1M URL

# Limit to 500 KB/s
yt-dlp --limit-rate 500K URL

# Limit to 50 bytes/s (very slow)
yt-dlp --limit-rate 50 URL

# No rate limit (default)
yt-dlp --limit-rate infinite URL
```

### Throttling Delay

Add delays between downloads to reduce server load:

```bash
# Sleep 3 seconds between downloads
yt-dlp --sleep-interval 3 URL1 URL2 URL3

# Random sleep between 1-5 seconds
yt-dlp --min-sleep-interval 1 --max-sleep-interval 5 URL

# Sleep only before first request
yt-dlp --sleep-requests 2 URL

# Sleep between subtitle downloads
yt-dlp --sleep-subtitles 1 URL
```

### Fragment Throttling

Control fragment download behavior for segmented media:

```bash
# Limit concurrent fragments
yt-dlp --concurrent-fragments 4 URL

# Sleep between fragments
yt-dlp --sleep-interval 0.5 URL
```

## Retry and Error Handling

### Retry Configuration

```bash
# Retry downloads 10 times
yt-dlp --retries 10 URL

# Retry fragments 5 times
yt-dlp --fragment-retries 5 URL

# Infinite retries (not recommended)
yt-dlp --retries infinite URL

# No retries
yt-dlp --retries 0 URL
```

### Error Handling Options

```bash
# Continue downloading despite errors
yt-dlp --ignore-errors URL1 URL2 URL3

# Abort on first error (default)
yt-dlp --abort-on-error URL

# Skip unavailable fragments
yt-dlp --skip-unavailable-fragments URL

# Keep partial fragments on error
yt-dlp --keep-fragments URL
```

## HTTP Header Customization

### User Agent

```bash
# Custom user agent
yt-dlp --user-agent "Mozilla/5.0 (compatible; yt-dlp)" URL

# Use specific browser user agent
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" URL
```

### Custom Headers

```bash
# Add custom header
yt-dlp --add-header "Referer:https://example.com" URL

# Add multiple headers
yt-dlp --add-header "Referer:https://example.com" \
       --add-header "X-Custom-Header:value" URL

# Remove default headers
yt-dlp --add-header "User-Agent:" URL
```

## SSL/TLS Configuration

### Certificate Verification

```bash
# Skip SSL certificate verification (not recommended)
yt-dlp --no-check-certificate URL

# Use custom CA certificate bundle
yt-dlp --ca-certs /path/to/ca-bundle.crt URL

# Use system certificate store (default)
yt-dlp URL
```

### Client Certificates

```bash
# Use client certificate for authentication
yt-dlp --client-certificate /path/to/client.crt URL

# Client certificate with private key
yt-dlp --client-certificate /path/to/client.pem \
       --client-certificate-key /path/to/private.key URL

# Client certificate with password
yt-dlp --client-certificate /path/to/client.p12 \
       --client-certificate-password mypassword URL
```

## Geo-restriction Bypass

### Proxy-based Geo-bypass

```bash
# Use proxy in specific country
yt-dlp --proxy http://us-proxy.example.com:8080 URL

# Chain multiple proxies
yt-dlp --proxy http://proxy1.com:8080 --proxy http://proxy2.com:8080 URL
```

### DNS Configuration

```bash
# Use specific DNS servers
yt-dlp --dns-servers 8.8.8.8,8.8.4.4 URL

# Use DNS over HTTPS
yt-dlp --dns-servers https://cloudflare-dns.com/dns-query URL

# Use DNS over TLS
yt-dlp --dns-servers tls://1.1.1.1 URL
```

## Advanced Network Options

### Connection Timeouts

```bash
# Socket timeout (seconds)
yt-dlp --socket-timeout 30 URL

# Default timeout for network operations
yt-dlp --timeout 60 URL
```

### Keep-Alive and Connection Reuse

```bash
# Disable keep-alive
yt-dlp --no-keepalive URL

# Configure keep-alive timeout
yt-dlp --keepalive-timeout 30 URL
```

### HTTP Method Override

```bash
# Force specific HTTP methods
yt-dlp --http-method GET URL

# Use POST for all requests
yt-dlp --http-method POST URL
```

## Cookie Management

### Cookie Files

```bash
# Use Netscape format cookies
yt-dlp --cookies /path/to/cookies.txt URL

# Extract cookies from browser
yt-dlp --cookies-from-browser chrome URL
yt-dlp --cookies-from-browser firefox URL
yt-dlp --cookies-from-browser safari URL
yt-dlp --cookies-from-browser edge URL

# Extract from specific browser profile
yt-dlp --cookies-from-browser "chrome:Profile 1" URL
```

### Cookie Security

```bash
# Clear cookies after use
yt-dlp --cookies cookies.txt --clear-cookies URL

# No cookies at all
yt-dlp --no-cookies URL
```

## Network Debugging

### Verbose Network Logging

```bash
# Enable verbose output
yt-dlp --verbose URL

# Print HTTP headers
yt-dlp --print-traffic URL

# Dump pages to files
yt-dlp --dump-pages URL

# Write debug info
yt-dlp --write-debug URL
```

### Connection Testing

```bash
# Test network connectivity
yt-dlp --simulate --verbose URL

# Check available formats without downloading
yt-dlp --list-formats URL

# Test proxy connection
yt-dlp --proxy http://proxy.example.com:8080 --simulate URL
```

## Platform-Specific Network Configurations

### YouTube Network Optimization

```bash
# Optimize for YouTube
yt-dlp --extractor-args "youtube:player_client=tv,ios" \
       --concurrent-fragments 4 \
       --retries 10 URL
```

### Twitch Network Settings

```bash
# Twitch with proxy
yt-dlp --proxy socks5://proxy.example.com:1080 \
       --extractor-args "twitch:client_id=your_client_id" URL
```

### Generic Site Optimization

```bash
# General optimization for most sites
yt-dlp --retries 5 \
       --fragment-retries 10 \
       --limit-rate 2M \
       --sleep-interval 1 URL
```

## Configuration File Examples

### High-Speed Connection

```conf
# ~/.config/yt-dlp/fast-network.conf
# High-speed network configuration

# Allow maximum concurrent fragments
--concurrent-fragments 8

# High retry counts
--retries 10
--fragment-retries 10

# No rate limiting
--limit-rate infinite

# Minimal delays
--sleep-interval 0.1
```

### Limited Bandwidth

```conf
# ~/.config/yt-dlp/slow-network.conf
# Bandwidth-limited configuration

# Conservative concurrent fragments
--concurrent-fragments 2

# Rate limiting
--limit-rate 500K

# More conservative retries
--retries 5
--fragment-retries 5

# Longer delays between requests
--sleep-interval 2
--min-sleep-interval 1
--max-sleep-interval 3
```

### Corporate Network

```conf
# ~/.config/yt-dlp/corporate.conf
# Corporate network with proxy

# Corporate proxy
--proxy http://proxy.company.com:8080

# Custom user agent
--user-agent "Mozilla/5.0 (compatible; CompanyDownloader)"

# Certificate verification
--ca-certs /etc/ssl/company-ca.pem

# Conservative settings
--retries 3
--sleep-interval 1
```

### Geo-restricted Content

```conf
# ~/.config/yt-dlp/geo-bypass.conf
# Configuration for geo-restricted content

# VPN or proxy in appropriate country
--proxy socks5://vpn.example.com:1080

# Custom DNS to avoid geo-blocking
--dns-servers 8.8.8.8,1.1.1.1

# Browser-like headers
--user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
--add-header "Accept-Language:en-US,en;q=0.9"
```

## Common Network Issues and Solutions

### Connection Timeouts

```bash
# Increase timeouts for slow connections
yt-dlp --socket-timeout 60 --timeout 120 URL
```

### Rate Limiting by Server

```bash
# Add delays to avoid rate limiting
yt-dlp --sleep-interval 3 --min-sleep-interval 2 --max-sleep-interval 5 URL
```

### Proxy Connection Issues

```bash
# Test proxy connectivity
curl --proxy http://proxy.example.com:8080 http://httpbin.org/ip

# Use proxy with specific protocol
yt-dlp --proxy http://proxy.example.com:8080 --force-ipv4 URL
```

### SSL Certificate Errors

```bash
# Use system certificates
yt-dlp --ca-certs system URL

# Bypass certificate checking (not recommended)
yt-dlp --no-check-certificate URL
```

### DNS Resolution Issues

```bash
# Use alternative DNS servers
yt-dlp --dns-servers 8.8.8.8,1.1.1.1 URL

# Force IPv4 resolution
yt-dlp --force-ipv4 URL
```

## Network Monitoring and Optimization

### Bandwidth Monitoring

```bash
# Monitor download speed
yt-dlp --newline --progress URL

# Log network statistics
yt-dlp --verbose --print-traffic URL 2>&1 | tee network.log
```

### Performance Tuning

```bash
# Optimize for your connection
yt-dlp --concurrent-fragments $(nproc) \
       --limit-rate 5M \
       --retries 5 URL
```

### Batch Download Optimization

```bash
# Optimize for batch processing
yt-dlp --sleep-interval 1 \
       --retries 3 \
       --ignore-errors \
       --download-archive archive.txt \
       --batch-file urls.txt
```

## Security Considerations

### Proxy Security

1. **Use authenticated proxies** when possible
2. **Verify proxy certificates** for HTTPS proxies
3. **Avoid logging sensitive proxy credentials**
4. **Use temporary proxy credentials** when available

### Connection Security

1. **Always verify SSL certificates** in production
2. **Use strong cipher suites** when possible
3. **Monitor for man-in-the-middle attacks**
4. **Use VPN instead of proxy** for sensitive content

### Privacy Protection

```bash
# Minimize tracking
yt-dlp --user-agent "Mozilla/5.0 (generic)" \
       --no-cookies \
       --proxy socks5://localhost:9050 URL  # Tor proxy
```

Network configuration in yt-dlp is highly flexible and can be adapted to virtually any network environment. Start with basic settings and adjust based on your specific network conditions, security requirements, and performance needs.
