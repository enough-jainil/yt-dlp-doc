---
sidebar_position: 3
---

# Dependencies and Requirements

yt-dlp has various dependencies depending on the features you want to use. This comprehensive guide covers all dependencies, their purposes, installation methods, and troubleshooting for optimal yt-dlp functionality.

## Python Version Requirements

yt-dlp requires:

- **Python 3.9+** (CPython)
- **Python 3.10+** (PyPy)

Other versions and implementations may or may not work correctly.

### Checking Python Version

Check Python version

```bash
python3 --version
```

```bash
python --version
```

Check if Python meets requirements

```bash
python3 -c "import sys; print('✓' if sys.version_info >= (3, 9) else '✗', 'Python version:', sys.version)"
```

## Strongly Recommended Dependencies

### FFmpeg and FFprobe

**[ffmpeg](https://www.ffmpeg.org) and [ffprobe](https://www.ffmpeg.org)** are essential for most yt-dlp operations:

- **Required for**: Merging separate video and audio files
- **Used for**: Various post-processing tasks, format conversion, metadata embedding
- **License**: [Depends on the build](https://www.ffmpeg.org/legal.html)

#### Installation Methods

**Windows:**

Using Chocolatey

```cmd
choco install ffmpeg
```

Using Scoop

```cmd
scoop install ffmpeg
```

Manual installation
Download from https://ffmpeg.org/download.html
Add to PATH

**macOS:**

Using Homebrew

```bash
brew install ffmpeg
```

Using MacPorts

```bash
sudo port install ffmpeg
```

**Linux:**

Ubuntu/Debian

```bash
sudo apt install ffmpeg
```

Fedora

```bash
sudo dnf install ffmpeg
```

Arch Linux

```bash
sudo pacman -S ffmpeg
```

Alpine

```bash
apk add ffmpeg
```

#### Custom FFmpeg Builds

yt-dlp provides [custom FFmpeg builds](https://github.com/yt-dlp/FFmpeg-Builds) with patches for known issues:

- **Repository**: [yt-dlp/FFmpeg-Builds](https://github.com/yt-dlp/FFmpeg-Builds)
- **Purpose**: Fixes specific issues when used with yt-dlp
- **Recommendation**: Use these builds for best compatibility

> **Important**: You need the ffmpeg _binary_, **NOT** [the Python package with the same name](https://pypi.org/project/ffmpeg)

#### Verification

Check FFmpeg installation

```bash
ffmpeg -version
```

```bash
ffprobe -version
```

Check if yt-dlp can find FFmpeg

```bash
yt-dlp --verbose 2>&1 | grep -i ffmpeg
```

## Networking Dependencies

### Essential Networking Libraries

#### certifi \*

Provides Mozilla's root certificate bundle for HTTPS connections

```bash
pip install certifi
```

- **License**: [MPLv2](https://github.com/certifi/python-certifi/blob/master/LICENSE)
- **Used for**: SSL/TLS certificate verification

#### brotli or brotlicffi \*

[Brotli](https://en.wikipedia.org/wiki/Brotli) content encoding support

```bash
pip install brotli
```

```bash
pip install brotlicffi
```

- **Options**:
  - [brotli](https://github.com/google/brotli) - [MIT License](https://github.com/google/brotli/blob/master/LICENSE)
  - [brotlicffi](https://github.com/python-hyper/brotlicffi) - [MIT License](https://github.com/python-hyper/brotlicffi/blob/master/LICENSE)
- **Used for**: Decompressing Brotli-compressed web content

#### websockets \*

Downloading over websocket protocols

```bash
pip install websockets
```

- **License**: [BSD-3-Clause](https://github.com/aaugustin/websockets/blob/main/LICENSE)
- **Used for**: Live streams and real-time content

#### requests \*

HTTP library for HTTPS proxy and persistent connections

```bash
pip install requests
```

- **License**: [Apache-2.0](https://github.com/psf/requests/blob/main/LICENSE)
- **Used for**: Enhanced HTTP handling and proxy support

### Browser Impersonation

The following provide support for impersonating browser requests, which may be required for sites that employ TLS fingerprinting:

#### curl_cffi (Recommended)

Python binding for [curl-impersonate](https://github.com/lexiforest/curl-impersonate)

```bash
pip install "yt-dlp[default,curl-cffi]"
```

- **Features**: Impersonation targets for Chrome, Edge, and Safari
- **License**: [MIT](https://github.com/lexiforest/curl_cffi/blob/main/LICENSE)
- **Availability**: Included in `yt-dlp.exe`, `yt-dlp_linux`, and `yt-dlp_macos` builds

#### Alternative Browser Impersonation

Install curl_cffi separately

```bash
pip install curl-cffi
```

Verify installation

```bash
python3 -c "import curl_cffi; print('curl_cffi available')"
```

## Metadata Dependencies

### Audio/Video Metadata

#### mutagen \*

`--embed-thumbnail` in certain formats, metadata manipulation

```bash
pip install mutagen
```

- **License**: [GPLv2+](https://github.com/quodlibet/mutagen/blob/master/COPYING)
- **Supported formats**: MP3, MP4, FLAC, OGG, and more

#### AtomicParsley

`--embed-thumbnail` in `mp4`/`m4a` files when `mutagen`/`ffmpeg` cannot

macOS

```bash
brew install atomicparsley
```

Ubuntu/Debian

```bash
sudo apt install atomicparsley
```

Windows (manual download required)
Download from GitHub releases

- **License**: [GPLv2+](https://github.com/wez/atomicparsley/blob/master/COPYING)

### Extended Attributes

For writing xattr metadata (`--xattr`) on **Mac** and **BSD**:

#### xattr

Extended attributes support on macOS

```bash
pip install xattr
```

- **License**: [MIT](https://github.com/xattr/xattr/blob/master/LICENSE.txt)

#### pyxattr

Extended attributes support on Linux

```bash
pip install pyxattr
```

- **License**: [LGPL2.1](https://github.com/iustin/pyxattr/blob/master/COPYING)

#### setfattr

Extended attributes support (system utility)

- **License**: [GPLv2+](http://git.savannah.nongnu.org/cgit/attr.git/tree/doc/COPYING)
- **Installation**: Usually pre-installed on Linux systems

## Miscellaneous Dependencies

### Encryption

#### pycryptodomex \*

Decrypting AES-128 HLS streams and various other encrypted data

```bash
pip install pycryptodomex
```

- **License**: [BSD-2-Clause](https://github.com/Legrandin/pycryptodome/blob/master/LICENSE.rst)
- **Used for**: Encrypted content from various platforms

### JavaScript Execution

#### phantomjs

Used in extractors where JavaScript needs to be run

Ubuntu/Debian

```bash
sudo apt install phantomjs
```

macOS

```bash
brew install phantomjs
```

Or download from phantomjs.org

- **License**: [BSD-3-Clause](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD)
- **Note**: Being phased out in favor of other solutions

### System Integration

#### secretstorage \*

`--cookies-from-browser` to access **Gnome** keyring while decrypting **Chromium** cookies on **Linux**

```bash
pip install secretstorage
```

- **License**: [BSD-3-Clause](https://github.com/mitya57/secretstorage/blob/master/LICENSE)
- **Platform**: Linux with GNOME desktop environment

### External Downloaders

Any external downloader you want to use with `--downloader`:

#### aria2c

Parallel downloading with multiple connections

Ubuntu/Debian

```bash
sudo apt install aria2
```

macOS

```bash
brew install aria2
```

Windows

```cmd
choco install aria2
```

Usage

```bash
yt-dlp --downloader aria2c URL
```

#### curl

Alternative HTTP downloader

Usage

```bash
yt-dlp --downloader curl URL
```

- **Installation**: Usually pre-installed on Unix systems

#### wget

Alternative HTTP downloader

Usage

```bash
yt-dlp --downloader wget URL
```

- **Installation**: Usually pre-installed on Linux

#### axel

Multi-connection downloader

Ubuntu/Debian

```bash
sudo apt install axel
```

macOS

```bash
brew install axel
```

#### httpie

Modern HTTP client

```bash
pip install httpie
```

## Deprecated Dependencies

### Legacy Media Tools

#### avconv and avprobe

**Deprecated** alternative to ffmpeg

- **License**: [Depends on the build](https://libav.org/legal)
- **Recommendation**: Use ffmpeg instead
- **Note**: No longer actively maintained

#### sponskrub

For the now **deprecated** [sponskrub options](#sponskrub-options)

- **License**: [GPLv3+](https://github.com/faissaloo/SponSkrub/blob/master/LICENCE.md)
- **Recommendation**: Use `--sponsorblock` options instead
- **Migration**: Replace `--sponskrub` with `--sponsorblock-remove`

#### rtmpdump

Downloading `rtmp` streams

- **License**: [GPLv2+](http://rtmpdump.mplayerhq.hu)
- **Alternative**: Use `--downloader ffmpeg` instead
- **Status**: Rarely needed in modern usage

#### mplayer or mpv

Downloading `rstp`/`mms` streams

- **License**: [GPLv2+](https://github.com/mpv-player/mpv/blob/master/Copyright)
- **Alternative**: Use `--downloader ffmpeg` instead

## Checking Dependencies

### Verbose Output

To see all available dependencies, run:

```bash
yt-dlp --verbose
```

This will show which dependencies are installed and available.

### Dependency Check Script

```bash
#!/bin/bash
# check-dependencies.sh

echo "=== yt-dlp Dependency Check ==="

# Check Python version
python3 -c "
import sys
version = sys.version_info
if version >= (3, 9):
    print('✓ Python version: {}.{}.{}'.format(version.major, version.minor, version.micro))
else:
    print('✗ Python version: {}.{}.{} (requires 3.9+)'.format(version.major, version.minor, version.micro))
"

# Check yt-dlp
if command -v yt-dlp >/dev/null 2>&1; then
    echo "✓ yt-dlp: $(yt-dlp --version)"
else
    echo "✗ yt-dlp: Not found"
fi

# Check FFmpeg
if command -v ffmpeg >/dev/null 2>&1; then
    echo "✓ FFmpeg: $(ffmpeg -version 2>/dev/null | head -1 | cut -d' ' -f3)"
else
    echo "✗ FFmpeg: Not found"
fi

# Check Python dependencies
python3 -c "
dependencies = [
    'certifi', 'brotli', 'websockets', 'requests',
    'mutagen', 'pycryptodomex', 'curl_cffi'
]

for dep in dependencies:
    try:
        __import__(dep)
        print(f'✓ {dep}: Available')
    except ImportError:
        print(f'✗ {dep}: Not available')
"
```

### Warning System

yt-dlp will warn you if you don't have the necessary dependencies for a specific task you're attempting.

## Installation Groups

When installing via pip, you can specify groups to install related dependencies:

### Default Group

```bash
pip install "yt-dlp[default]"
```

Includes most common dependencies:

- `certifi`
- `brotli` or `brotlicffi`
- `websockets`
- `requests`
- `mutagen`
- `pycryptodomex`

### Curl-cffi Group

```bash
pip install "yt-dlp[default,curl-cffi]"
```

Adds browser impersonation capabilities with `curl_cffi`.

### Complete Installation

Install with all optional dependencies

```bash
pip install "yt-dlp[default,curl-cffi]" mutagen atomicparsley
```

### Custom Installation Groups

Minimal networking

```bash
pip install "yt-dlp" certifi requests
```

Media processing focused

```bash
pip install "yt-dlp[default]" mutagen
```

Development installation

```bash
pip install "yt-dlp[default,curl-cffi]" pytest flake8
```

## Standalone Binary Dependencies

The standalone release binaries include:

- Python interpreter (3.11+)
- All dependencies marked with **\***
- Most common networking and processing libraries
- curl_cffi for browser impersonation

### Binary Advantages

- **No Python installation required**
- **All dependencies included**
- **Single file deployment**
- **Consistent behavior across systems**

### Binary Limitations

- **Larger file size**
- **Cannot add custom Python packages**
- **Fixed Python version**

## Platform-Specific Dependency Notes

### Windows

- May require [Microsoft Visual C++ 2010 SP1 Redistributable Package](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe) for some features
- FFmpeg binaries are available from [yt-dlp/FFmpeg-Builds](https://github.com/yt-dlp/FFmpeg-Builds)
- Windows Defender may flag downloaded binaries

### Linux

- Most dependencies available through package managers
- May need additional development headers for compilation:

Ubuntu/Debian

```bash
sudo apt install python3-dev build-essential
```

Fedora

```bash
sudo dnf groupinstall "Development Tools"
```

```bash
sudo dnf install python3-devel
```

Arch Linux

```bash
sudo pacman -S base-devel
```

### macOS

- Homebrew recommended for installing dependencies
- Some dependencies may require Xcode command line tools:

```bash
xcode-select --install
```

- Apple Silicon Macs may need Rosetta 2 for some binaries

### Android (Termux)

Essential packages

```bash
pkg install python ffmpeg
```

Optional dependencies

```bash
pkg install curl wget aria2
```

## Troubleshooting Dependencies

### Common Issues

#### SSL Certificate Errors

Update certificates

```bash
pip install --upgrade certifi
```

macOS specific

```bash
/Applications/Python\ 3.x/Install\ Certificates.command
```

#### Missing FFmpeg

Check if FFmpeg is in PATH

```bash
which ffmpeg
```

Specify FFmpeg location

```bash
yt-dlp --ffmpeg-location /path/to/ffmpeg URL
```

#### Import Errors

Check specific dependency

```bash
python3 -c "import requests; print('requests OK')"
```

Reinstall problematic dependency

```bash
pip install --force-reinstall requests
```

#### Permission Errors

Use user installation

```bash
pip install --user "yt-dlp[default]"
```

Fix permissions

```bash
chmod +x ~/.local/bin/yt-dlp
```

### Dependency Conflicts

Use virtual environment

```bash
python3 -m venv yt-dlp-env
```

```bash
source yt-dlp-env/bin/activate
```

```bash
pip install "yt-dlp[default]"
```

Or use pipx

```bash
pipx install "yt-dlp[default]"
```

## Performance Optimization

### Dependency Selection

For maximum performance

```bash
pip install "yt-dlp[default,curl-cffi]"
```

For minimal resource usage

```bash
pip install yt-dlp certifi
```

### External Downloader Configuration

aria2c with optimal settings

```bash
yt-dlp --downloader aria2c \
       --downloader-args "aria2c:-x 16 -s 16 -k 1M" \
       URL
```

## License Compliance

To use or redistribute yt-dlp with its dependencies, you must agree to their respective licensing terms. Each dependency has its own license requirements.

### License Summary

- **Most permissive**: MIT, BSD licenses
- **Copyleft**: GPL licenses (require source distribution)
- **Commercial considerations**: Check individual licenses

---

**Legend**: Dependencies marked with **\*** are included in standalone binary releases.

Understanding and properly configuring yt-dlp's dependencies ensures optimal performance and access to all features. Choose the installation method and dependency set that best matches your use case and system requirements.
