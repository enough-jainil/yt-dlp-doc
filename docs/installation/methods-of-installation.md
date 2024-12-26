---
sidebar_position: 1
---

# Methods of Installation

yt-dlp can be installed on various platforms using different methods. Choose the one that best suits your system and preferences.

## 1. Using Release Binaries

The simplest method for most users is to download pre-compiled binaries.

### Windows

- Download the latest `yt-dlp.exe` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
- Place it in a directory within your `PATH`.

### macOS

- Download `yt-dlp_macos` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
- Rename it to `yt-dlp` and make it executable:
  ```bash
  chmod a+rx yt-dlp
  ```
- Move it to a directory in your `PATH`, e.g.:
  ```bash
  mv yt-dlp /usr/local/bin
  ```

### Linux

- Download `yt-dlp` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
- Make it executable:
  ```bash
  chmod a+rx yt-dlp
  ```
- Move it to a directory in your `PATH`, e.g.:
  ```bash
  sudo mv yt-dlp /usr/local/bin
  ```

## 2. Using pip (Python Package Manager)

For Python users, installing via pip is recommended:
