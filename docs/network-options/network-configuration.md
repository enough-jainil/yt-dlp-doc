---
sidebar_position: 1
---

# Network Configuration in yt-dlp

yt-dlp provides extensive network configuration options to handle various connection scenarios, proxies, rate limiting, and geographical restrictions.

## Proxy Configuration

### Basic Proxy Setup

HTTP proxy

```bash
yt-dlp --proxy http://proxy.example.com:8080 URL
```

HTTPS proxy

```bash
yt-dlp --proxy https://proxy.example.com:8080 URL
```

SOCKS4 proxy

```bash
yt-dlp --proxy socks4://proxy.example.com:1080 URL
```

SOCKS5 proxy

```bash
yt-dlp --proxy socks5://proxy.example.com:1080 URL
```

### Proxy with Authentication

HTTP proxy with username/password

```bash
yt-dlp --proxy http://username:password@proxy.example.com:8080 URL
```

SOCKS5 proxy with authentication

```bash
yt-dlp --proxy socks5://username:password@proxy.example.com:1080 URL
```

### Socket Address Proxy

Unix socket (Linux/macOS)

```bash
yt-dlp --proxy socks5://localhost:port URL
```

Use proxy for specific domains only

```bash
yt-dlp --proxy http://proxy.example.com:8080 --proxy-exception "*.youtube.com" URL
```

### No Proxy Configuration

Bypass proxy for specific patterns

```bash
yt-dlp --proxy http://proxy.example.com:8080 --proxy-exception "localhost,127.0.0.1,*.local" URL
```

No proxy at all (override system proxy)

```bash
yt-dlp --no-proxy URL
```

## Source IP Address Binding

Control which network interface to use for connections:

Bind to specific IPv4 address

```bash
yt-dlp --source-address 192.168.1.100 URL
```

Bind to specific IPv6 address

```bash
yt-dlp --source-address 2001:db8::1 URL
```

Force IPv4 only

```bash
yt-dlp --force-ipv4 URL
```

Force IPv6 only

```bash
yt-dlp --force-ipv6 URL
```

## Rate Limiting and Throttling

### Download Speed Limiting

Limit to 1 MB/s

```bash
yt-dlp --limit-rate 1M URL
```

Limit to 500 KB/s

```bash
yt-dlp --limit-rate 500K URL
```

Limit to 50 bytes/s (very slow)

```bash
yt-dlp --limit-rate 50 URL
```

No rate limit (default)

```bash
yt-dlp --limit-rate infinite URL
```

### Throttling Delay

Add delays between downloads to reduce server load:

Sleep 3 seconds between downloads

```bash
yt-dlp --sleep-interval 3 URL1 URL2 URL3
```

Random sleep between 1-5 seconds

```bash
yt-dlp --min-sleep-interval 1 --max-sleep-interval 5 URL
```

Sleep only before first request

```bash
yt-dlp --sleep-requests 2 URL
```

Sleep between subtitle downloads

```bash
yt-dlp --sleep-subtitles 1 URL
```

### Fragment Throttling

Control fragment download behavior for segmented media:

Limit concurrent fragments

```bash
yt-dlp --concurrent-fragments 4 URL
```

Sleep between fragments

```bash
yt-dlp --sleep-interval 0.5 URL
```

## Retry and Error Handling

### Retry Configuration

Retry downloads 10 times

```bash
yt-dlp --retries 10 URL
```

Retry fragments 5 times

```bash
yt-dlp --fragment-retries 5 URL
```

Infinite retries (not recommended)

```bash
yt-dlp --retries infinite URL
```

No retries

```bash
yt-dlp --retries 0 URL
```

### Error Handling Options

Continue downloading despite errors

```bash
yt-dlp --ignore-errors URL1 URL2 URL3
```

Abort on first error (default)

```bash
yt-dlp --abort-on-error URL
```

Skip unavailable fragments

```bash
yt-dlp --skip-unavailable-fragments URL
```

Keep partial fragments on error

```bash
yt-dlp --keep-fragments URL
```

## HTTP Header Customization

### User Agent

Custom user agent

```bash
yt-dlp --user-agent "Mozilla/5.0 (compatible; yt-dlp)" URL
```

Use specific browser user agent

```bash
yt-dlp --user-agent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" URL
```

### Custom Headers

Add custom header

```bash
yt-dlp --add-header "Referer:https://example.com" URL
```

Add multiple headers

```bash
yt-dlp --add-header "Referer:https://example.com" --add-header "X-Custom-Header:value" URL
```

Remove default headers

```bash
yt-dlp --add-header "User-Agent:" URL
```

## SSL/TLS Configuration

### Certificate Verification

Skip SSL certificate verification (not recommended)

```bash
yt-dlp --no-check-certificate URL
```

Use custom CA certificate bundle

```bash
yt-dlp --ca-certs /path/to/ca-bundle.crt URL
```

Use system certificate store (default)

```bash
yt-dlp URL
```

### Client Certificates

Use client certificate for authentication

```bash
yt-dlp --client-certificate /path/to/client.crt URL
```

Client certificate with private key

```bash
yt-dlp --client-certificate /path/to/client.pem --client-certificate-key /path/to/private.key URL
```

Client certificate with password

```bash
yt-dlp --client-certificate /path/to/client.p12 --client-certificate-password mypassword URL
```

## Geo-restriction Bypass

### Proxy-based Geo-bypass

Use proxy in specific country

```bash
yt-dlp --proxy http://us-proxy.example.com:8080 URL
```

Chain multiple proxies

```bash
yt-dlp --proxy http://proxy1.com:8080 --proxy http://proxy2.com:8080 URL
```

### DNS Configuration

Use specific DNS servers

```bash
yt-dlp --dns-servers 8.8.8.8,8.8.4.4 URL
```

Use DNS over HTTPS

```bash
yt-dlp --dns-servers https://cloudflare-dns.com/dns-query URL
```

Use DNS over TLS

```bash
yt-dlp --dns-servers tls://1.1.1.1 URL
```

## Advanced Network Options

### Connection Timeouts

Socket timeout (seconds)

```bash
yt-dlp --socket-timeout 30 URL
```

Default timeout for network operations

```bash
yt-dlp --timeout 60 URL
```

### Keep-Alive and Connection Reuse

Disable keep-alive

```bash
yt-dlp --no-keepalive URL
```

Configure keep-alive timeout

```bash
yt-dlp --keepalive-timeout 30 URL
```

### HTTP Method Override

Force specific HTTP methods

```bash
yt-dlp --http-method GET URL
```

Use POST for all requests

```bash
yt-dlp --http-method POST URL
```

## Cookie Management

### Cookie Files

Use Netscape format cookies

```bash
yt-dlp --cookies /path/to/cookies.txt URL
```

Extract cookies from browser

```bash
yt-dlp --cookies-from-browser chrome URL
```

```bash
yt-dlp --cookies-from-browser firefox URL
```

```bash
yt-dlp --cookies-from-browser safari URL
```

```bash
yt-dlp --cookies-from-browser edge URL
```

Extract from specific browser profile

```bash
yt-dlp --cookies-from-browser "chrome:Profile 1" URL
```

### Cookie Security

Clear cookies after use

```bash
yt-dlp --cookies cookies.txt --clear-cookies URL
```

No cookies at all

```bash
yt-dlp --no-cookies URL
```

## Network Debugging

### Verbose Network Logging

Enable verbose output

```bash
yt-dlp --verbose URL
```

Print HTTP headers

```bash
yt-dlp --print-traffic URL
```

Dump pages to files

```bash
yt-dlp --dump-pages URL
```

Write debug info

```bash
yt-dlp --write-debug URL
```

### Connection Testing

Test network connectivity

```bash
yt-dlp --simulate --verbose URL
```

Check available formats without downloading

```bash
yt-dlp --list-formats URL
```

Test proxy connection

```bash
yt-dlp --proxy http://proxy.example.com:8080 --simulate URL
```

## Platform-Specific Network Configurations

### YouTube Network Optimization

Optimize for YouTube

```bash
yt-dlp --extractor-args "youtube:player_client=tv,ios" --concurrent-fragments 4 --retries 10 URL
```

### Twitch Network Settings

Twitch with proxy

```bash
yt-dlp --proxy socks5://proxy.example.com:1080 --extractor-args "twitch:client_id=your_client_id" URL
```

### Generic Site Optimization

General optimization for most sites

```bash
yt-dlp --retries 5 --fragment-retries 10 --limit-rate 2M --sleep-interval 1 URL
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

Increase timeouts for slow connections

```bash
yt-dlp --socket-timeout 60 --timeout 120 URL
```

### Rate Limiting by Server

Add delays to avoid rate limiting

```bash
yt-dlp --sleep-interval 3 --min-sleep-interval 2 --max-sleep-interval 5 URL
```

### Proxy Connection Issues

Test proxy connectivity

```bash
curl --proxy http://proxy.example.com:8080 http://httpbin.org/ip
```

Use proxy with specific protocol

```bash
yt-dlp --proxy http://proxy.example.com:8080 --force-ipv4 URL
```

### SSL Certificate Errors

Use system certificates

```bash
yt-dlp --ca-certs system URL
```

Bypass certificate checking (not recommended)

```bash
yt-dlp --no-check-certificate URL
```

### DNS Resolution Issues

Use alternative DNS servers

```bash
yt-dlp --dns-servers 8.8.8.8,1.1.1.1 URL
```

Force IPv4 resolution

```bash
yt-dlp --force-ipv4 URL
```

## Network Monitoring and Optimization

### Bandwidth Monitoring

Monitor download speed

```bash
yt-dlp --newline --progress URL
```

Log network statistics

```bash
yt-dlp --verbose --print-traffic URL 2>&1 | tee network.log
```

### Performance Tuning

Optimize for your connection

```bash
yt-dlp --concurrent-fragments $(nproc) --limit-rate 5M --retries 5 URL
```

### Batch Download Optimization

Optimize for batch processing

```bash
yt-dlp --sleep-interval 1 --retries 3 --ignore-errors --download-archive archive.txt --batch-file urls.txt
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

Minimize tracking

```bash
yt-dlp --user-agent "Mozilla/5.0 (generic)" --no-cookies --proxy socks5://localhost:9050 URL
```

Network configuration in yt-dlp is highly flexible and can be adapted to virtually any network environment. Start with basic settings and adjust based on your specific network conditions, security requirements, and performance needs.
