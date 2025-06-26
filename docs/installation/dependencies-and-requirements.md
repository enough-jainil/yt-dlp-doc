---
sidebar_position: 6
---

# Dependencies and Requirements

yt-dlp has various dependencies depending on the features you want to use. This guide covers all dependencies and their purposes.

## Python Version Requirements

yt-dlp requires:

- **Python 3.9+** (CPython)
- **Python 3.10+** (PyPy)

Other versions and implementations may or may not work correctly.

## Strongly Recommended Dependencies

### FFmpeg and FFprobe

**[ffmpeg](https://www.ffmpeg.org) and [ffprobe](https://www.ffmpeg.org)** are essential for most yt-dlp operations:

- **Required for**: Merging separate video and audio files
- **Used for**: Various post-processing tasks
- **License**: [Depends on the build](https://www.ffmpeg.org/legal.html)

#### Custom FFmpeg Builds

yt-dlp provides [custom FFmpeg builds](https://github.com/yt-dlp/FFmpeg-Builds) with patches for known issues:

- **Repository**: [yt-dlp/FFmpeg-Builds](https://github.com/yt-dlp/FFmpeg-Builds)
- **Purpose**: Fixes specific issues when used with yt-dlp
- **Recommendation**: Use these builds for best compatibility

> **Important**: You need the ffmpeg _binary_, **NOT** [the Python package with the same name](https://pypi.org/project/ffmpeg)

## Networking Dependencies

### Essential Networking Libraries

#### certifi \*

- **Purpose**: Provides Mozilla's root certificate bundle
- **License**: [MPLv2](https://github.com/certifi/python-certifi/blob/master/LICENSE)

#### brotli or brotlicffi \*

- **Purpose**: [Brotli](https://en.wikipedia.org/wiki/Brotli) content encoding support
- **Options**:
  - [brotli](https://github.com/google/brotli) - [MIT License](https://github.com/google/brotli/blob/master/LICENSE)
  - [brotlicffi](https://github.com/python-hyper/brotlicffi) - [MIT License](https://github.com/python-hyper/brotlicffi/blob/master/LICENSE)

#### websockets \*

- **Purpose**: Downloading over websocket
- **License**: [BSD-3-Clause](https://github.com/aaugustin/websockets/blob/main/LICENSE)

#### requests \*

- **Purpose**: HTTP library for HTTPS proxy and persistent connections
- **License**: [Apache-2.0](https://github.com/psf/requests/blob/main/LICENSE)

### Browser Impersonation

The following provide support for impersonating browser requests, which may be required for sites that employ TLS fingerprinting:

#### curl_cffi (Recommended)

- **Purpose**: Python binding for [curl-impersonate](https://github.com/lexiforest/curl-impersonate)
- **Features**: Impersonation targets for Chrome, Edge, and Safari
- **License**: [MIT](https://github.com/lexiforest/curl_cffi/blob/main/LICENSE)
- **Installation**: `pip install "yt-dlp[default,curl-cffi]"`
- **Availability**: Included in `yt-dlp.exe`, `yt-dlp_linux`, and `yt-dlp_macos` builds

## Metadata Dependencies

### Audio/Video Metadata

#### mutagen \*

- **Purpose**: `--embed-thumbnail` in certain formats
- **License**: [GPLv2+](https://github.com/quodlibet/mutagen/blob/master/COPYING)

#### AtomicParsley

- **Purpose**: `--embed-thumbnail` in `mp4`/`m4a` files when `mutagen`/`ffmpeg` cannot
- **License**: [GPLv2+](https://github.com/wez/atomicparsley/blob/master/COPYING)

### Extended Attributes

For writing xattr metadata (`--xattr`) on **Mac** and **BSD**:

#### xattr

- **Purpose**: Extended attributes support
- **License**: [MIT](https://github.com/xattr/xattr/blob/master/LICENSE.txt)

#### pyxattr

- **Purpose**: Extended attributes support
- **License**: [LGPL2.1](https://github.com/iustin/pyxattr/blob/master/COPYING)

#### setfattr

- **Purpose**: Extended attributes support
- **License**: [GPLv2+](http://git.savannah.nongnu.org/cgit/attr.git/tree/doc/COPYING)

## Miscellaneous Dependencies

### Encryption

#### pycryptodomex \*

- **Purpose**: Decrypting AES-128 HLS streams and various other data
- **License**: [BSD-2-Clause](https://github.com/Legrandin/pycryptodome/blob/master/LICENSE.rst)

### JavaScript Execution

#### phantomjs

- **Purpose**: Used in extractors where JavaScript needs to be run
- **License**: [BSD-3-Clause](https://github.com/ariya/phantomjs/blob/master/LICENSE.BSD)

### System Integration

#### secretstorage \*

- **Purpose**: `--cookies-from-browser` to access **Gnome** keyring while decrypting **Chromium** cookies on **Linux**
- **License**: [BSD-3-Clause](https://github.com/mitya57/secretstorage/blob/master/LICENSE)

### External Downloaders

Any external downloader you want to use with `--downloader`:

- **aria2c** - For parallel downloading
- **curl** - Alternative HTTP downloader
- **wget** - Alternative HTTP downloader
- **axel** - Multi-connection downloader
- **httpie** - Modern HTTP client

## Deprecated Dependencies

### Legacy Media Tools

#### avconv and avprobe

- **Status**: **Deprecated** alternative to ffmpeg
- **License**: [Depends on the build](https://libav.org/legal)
- **Recommendation**: Use ffmpeg instead

#### sponskrub

- **Purpose**: For the now **deprecated** [sponskrub options](#sponskrub-options)
- **License**: [GPLv3+](https://github.com/faissaloo/SponSkrub/blob/master/LICENCE.md)
- **Recommendation**: Use `--sponsorblock` options instead

#### rtmpdump

- **Purpose**: Downloading `rtmp` streams
- **License**: [GPLv2+](http://rtmpdump.mplayerhq.hu)
- **Alternative**: Use `--downloader ffmpeg` instead

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

### Warning System

yt-dlp will warn you if you don't have the necessary dependencies for a specific task you're attempting.

## Installation Groups

When installing via pip, you can specify groups to install related dependencies:

### Default Group

```bash
pip install "yt-dlp[default]"
```

Includes most common dependencies.

### Curl-cffi Group

```bash
pip install "yt-dlp[default,curl-cffi]"
```

Adds browser impersonation capabilities.

## Standalone Binary Dependencies

The standalone release binaries include:

- Python interpreter
- All dependencies marked with **\***
- Most common networking and processing libraries

## License Compliance

To use or redistribute yt-dlp with its dependencies, you must agree to their respective licensing terms. Each dependency has its own license requirements.

## Platform-Specific Notes

### Windows

- May require [Microsoft Visual C++ 2010 SP1 Redistributable Package](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe) for some features
- FFmpeg binaries are available from [yt-dlp/FFmpeg-Builds](https://github.com/yt-dlp/FFmpeg-Builds)

### Linux

- Most dependencies available through package managers
- May need additional development headers for some features

### macOS

- Homebrew recommended for installing dependencies
- Some dependencies may require Xcode command line tools

---

**Legend**: Dependencies marked with **\*** are included in standalone binary releases.
