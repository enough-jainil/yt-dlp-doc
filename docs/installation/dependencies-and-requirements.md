---
sidebar_position: 6
---

# Dependencies and Requirements

yt-dlp has various dependencies depending on the features you want to use. This comprehensive guide covers all dependencies, their purposes, installation methods, and troubleshooting for optimal yt-dlp functionality.

## Python Version Requirements

yt-dlp requires:

- **Python 3.9+** (CPython)
- **Python 3.10+** (PyPy)

Other versions and implementations may or may not work correctly.

### Checking Python Version

```bash
# Check Python version
python3 --version
python --version

# Check if Python meets requirements
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

```cmd
# Using Chocolatey
choco install ffmpeg

# Using Scoop
scoop install ffmpeg

# Manual installation
# Download from https://ffmpeg.org/download.html
# Add to PATH
```

**macOS:**

```bash
# Using Homebrew
brew install ffmpeg

# Using MacPorts
sudo port install ffmpeg
```

**Linux:**

```bash
# Ubuntu/Debian
sudo apt install ffmpeg

# Fedora
sudo dnf install ffmpeg

# Arch Linux
sudo pacman -S ffmpeg

# Alpine
apk add ffmpeg
```

#### Custom FFmpeg Builds

yt-dlp provides [custom FFmpeg builds](https://github.com/yt-dlp/FFmpeg-Builds) with patches for known issues:

- **Repository**: [yt-dlp/FFmpeg-Builds](https://github.com/yt-dlp/FFmpeg-Builds)
- **Purpose**: Fixes specific issues when used with yt-dlp
- **Recommendation**: Use these builds for best compatibility

> **Important**: You need the ffmpeg _binary_, **NOT** [the Python package with the same name](https://pypi.org/project/ffmpeg)

#### Verification

```bash
# Check FFmpeg installation
ffmpeg -version
ffprobe -version

# Check if yt-dlp can find FFmpeg
yt-dlp --verbose 2>&1 | grep -i ffmpeg
```

## Networking Dependencies

### Essential Networking Libraries

#### certifi \*

- **Purpose**: Provides Mozilla's root certificate bundle for HTTPS connections
- **License**: [MPLv2](https://github.com/certifi/python-certifi/blob/master/LICENSE)
- **Installation**: `pip install certifi`
- **Used for**: SSL/TLS certificate verification

#### brotli or brotlicffi \*

- **Purpose**: [Brotli](https://en.wikipedia.org/wiki/Brotli) content encoding support
- **Options**:
  - [brotli](https://github.com/google/brotli) - [MIT License](https://github.com/google/brotli/blob/master/LICENSE)
  - [brotlicffi](https://github.com/python-hyper/brotlicffi) - [MIT License](https://github.com/python-hyper/brotlicffi/blob/master/LICENSE)
- **Installation**: `pip install brotli` or `pip install brotlicffi`
- **Used for**: Decompressing Brotli-compressed web content

#### websockets \*

- **Purpose**: Downloading over websocket protocols
- **License**: [BSD-3-Clause](https://github.com/aaugustin/websockets/blob/main/LICENSE)
- **Installation**: `pip install websockets`
- **Used for**: Live streams and real-time content

#### requests \*

- **Purpose**: HTTP library for HTTPS proxy and persistent connections
- **License**: [Apache-2.0](https://github.com/psf/requests/blob/main/LICENSE)
- **Installation**: `pip install requests`
- **Used for**: Enhanced HTTP handling and proxy support

### Browser Impersonation

The following provide support for impersonating browser requests, which may be required for sites that employ TLS fingerprinting:

#### curl_cffi (Recommended)

- **Purpose**: Python binding for [curl-impersonate](https://github.com/lexiforest/curl-impersonate)
- **Features**: Impersonation targets for Chrome, Edge, and Safari
- **License**: [MIT](https://github.com/lexiforest/curl_cffi/blob/main/LICENSE)
- **Installation**: `pip install "yt-dlp[default,curl-cffi]"`
- **Availability**: Included in `yt-dlp.exe`, `yt-dlp_linux`, and `yt-dlp_macos` builds

#### Alternative Browser Impersonation

```bash
# Install curl_cffi separately
pip install curl-cffi

# Verify installation
python3 -c "import curl_cffi; print('curl_cffi available')"
```

## Metadata Dependencies

### Audio/Video Metadata

#### mutagen \*

- **Purpose**: `--embed-thumbnail` in certain formats, metadata manipulation
- **License**: [GPLv2+](https://github.com/quodlibet/mutagen/blob/master/COPYING)
- **Installation**: `pip install mutagen`
- **Supported formats**: MP3, MP4, FLAC, OGG, and more

#### AtomicParsley

- **Purpose**: `--embed-thumbnail` in `mp4`/`m4a` files when `mutagen`/`ffmpeg` cannot
- **License**: [GPLv2+](https://github.com/wez/atomicparsley/blob/master/COPYING)
- **Installation**:

  ```bash
  # macOS
  brew install atomicparsley

  # Ubuntu/Debian
  sudo apt install atomicparsley

  # Windows (manual download required)
  # Download from GitHub releases
  ```

### Extended Attributes

For writing xattr metadata (`--xattr`) on **Mac** and **BSD**:

#### xattr

- **Purpose**: Extended attributes support on macOS
- **License**: [MIT](https://github.com/xattr/xattr/blob/master/LICENSE.txt)
- **Installation**: `pip install xattr`

#### pyxattr

- **Purpose**: Extended attributes support on Linux
- **License**: [LGPL2.1](https://github.com/iustin/pyxattr/blob/master/COPYING)
- **Installation**: `pip install pyxattr`

#### setfattr

- **Purpose**: Extended attributes support (system utility)
- **License**: [GPLv2+](http://git.savannah.nongnu.org/cgit/attr.git/tree/doc/COPYING)
- **Installation**: Usually pre-installed on Linux systems

## Miscellaneous Dependencies

### Encryption

#### pycryptodomex \*

- **Purpose**: Decrypting AES-128 HLS streams and various other encrypted data
- **License**: [BSD-2-Clause](https://github.com/Legrandin/pycryptodome/blob/master/LICENSE.rst)
- **Installation**: `pip install pycryptodomex`
- **Used for**: Encrypted content from various platforms

### JavaScript Execution

#### phantomjs

- **Purpose**: Used in extractors where JavaScript needs to be run
- **License**: [BSD-3-Clause](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD)
- **Installation**:

  ```bash
  # Ubuntu/Debian
  sudo apt install phantomjs

  # macOS
  brew install phantomjs

  # Or download from phantomjs.org
  ```

- **Note**: Being phased out in favor of other solutions

### System Integration

#### secretstorage \*

- **Purpose**: `--cookies-from-browser` to access **Gnome** keyring while decrypting **Chromium** cookies on **Linux**
- **License**: [BSD-3-Clause](https://github.com/mitya57/secretstorage/blob/master/LICENSE)
- **Installation**: `pip install secretstorage`
- **Platform**: Linux with GNOME desktop environment

### External Downloaders

Any external downloader you want to use with `--downloader`:

#### aria2c

- **Purpose**: Parallel downloading with multiple connections
- **Installation**:

  ```bash
  # Ubuntu/Debian
  sudo apt install aria2

  # macOS
  brew install aria2

  # Windows
  choco install aria2
  ```

- **Usage**: `yt-dlp --downloader aria2c URL`

#### curl

- **Purpose**: Alternative HTTP downloader
- **Installation**: Usually pre-installed on Unix systems
- **Usage**: `yt-dlp --downloader curl URL`

#### wget

- **Purpose**: Alternative HTTP downloader
- **Installation**: Usually pre-installed on Linux
- **Usage**: `yt-dlp --downloader wget URL`

#### axel

- **Purpose**: Multi-connection downloader
- **Installation**:

  ```bash
  # Ubuntu/Debian
  sudo apt install axel

  # macOS
  brew install axel
  ```

#### httpie

- **Purpose**: Modern HTTP client
- **Installation**: `pip install httpie`

## Deprecated Dependencies

### Legacy Media Tools

#### avconv and avprobe

- **Status**: **Deprecated** alternative to ffmpeg
- **License**: [Depends on the build](https://libav.org/legal)
- **Recommendation**: Use ffmpeg instead
- **Note**: No longer actively maintained

#### sponskrub

- **Purpose**: For the now **deprecated** [sponskrub options](#sponskrub-options)
- **License**: [GPLv3+](https://github.com/faissaloo/SponSkrub/blob/master/LICENCE.md)
- **Recommendation**: Use `--sponsorblock` options instead
- **Migration**: Replace `--sponskrub` with `--sponsorblock-remove`

#### rtmpdump

- **Purpose**: Downloading `rtmp` streams
- **License**: [GPLv2+](http://rtmpdump.mplayerhq.hu)
- **Alternative**: Use `--downloader ffmpeg` instead
- **Status**: Rarely needed in modern usage

#### mplayer or mpv

- **Purpose**: Downloading `rstp`/`mms` streams
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

```bash
# Install with all optional dependencies
pip install "yt-dlp[default,curl-cffi]" mutagen atomicparsley
```

### Custom Installation Groups

```bash
# Minimal networking
pip install "yt-dlp" certifi requests

# Media processing focused
pip install "yt-dlp[default]" mutagen

# Development installation
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

  ```bash
  # Ubuntu/Debian
  sudo apt install python3-dev build-essential

  # Fedora
  sudo dnf groupinstall "Development Tools"
  sudo dnf install python3-devel

  # Arch Linux
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

```bash
# Essential packages
pkg install python ffmpeg

# Optional dependencies
pkg install curl wget aria2
```

## Troubleshooting Dependencies

### Common Issues

#### SSL Certificate Errors

```bash
# Update certificates
pip install --upgrade certifi

# macOS specific
/Applications/Python\ 3.x/Install\ Certificates.command
```

#### Missing FFmpeg

```bash
# Check if FFmpeg is in PATH
which ffmpeg

# Specify FFmpeg location
yt-dlp --ffmpeg-location /path/to/ffmpeg URL
```

#### Import Errors

```bash
# Check specific dependency
python3 -c "import requests; print('requests OK')"

# Reinstall problematic dependency
pip install --force-reinstall requests
```

#### Permission Errors

```bash
# Use user installation
pip install --user "yt-dlp[default]"

# Fix permissions
chmod +x ~/.local/bin/yt-dlp
```

### Dependency Conflicts

```bash
# Use virtual environment
python3 -m venv yt-dlp-env
source yt-dlp-env/bin/activate
pip install "yt-dlp[default]"

# Or use pipx
pipx install "yt-dlp[default]"
```

## Performance Optimization

### Dependency Selection

```bash
# For maximum performance
pip install "yt-dlp[default,curl-cffi]"

# For minimal resource usage
pip install yt-dlp certifi
```

### External Downloader Configuration

```bash
# aria2c with optimal settings
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
