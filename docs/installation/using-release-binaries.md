---
sidebar_position: 6
---

# Using Release Binaries

yt-dlp provides pre-compiled binaries for different platforms, making installation simple without requiring Python or other dependencies. All binaries are available from the [GitHub releases page](https://github.com/yt-dlp/yt-dlp/releases).

## Recommended Binaries

The following binaries are recommended for most users:

### Windows

- **[yt-dlp.exe](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.exe)** - Windows (Win8+) standalone x64 binary **(recommended for Windows)**

### Linux/BSD

- **[yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp)** - Platform-independent [zipimport](https://docs.python.org/3/library/zipimport.html) binary. Needs Python **(recommended for Linux/BSD)**

### macOS

- **[yt-dlp_macos](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos)** - Universal MacOS (10.15+) standalone executable **(recommended for macOS)**

## Alternative Binaries

### Windows Alternatives

- **[yt-dlp_x86.exe](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_x86.exe)** - Windows (Win8+) standalone x86 (32-bit) binary
- **[yt-dlp_win.zip](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_win.zip)** - Unpackaged Windows executable (no auto-update)

### Linux Alternatives

- **[yt-dlp_linux](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux)** - Linux standalone x64 binary
- **[yt-dlp_linux_armv7l](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux_armv7l)** - Linux standalone armv7l (32-bit) binary
- **[yt-dlp_linux_aarch64](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_linux_aarch64)** - Linux standalone aarch64 (64-bit) binary

### macOS Alternatives

- **[yt-dlp_macos.zip](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos.zip)** - Unpackaged MacOS (10.15+) executable (no auto-update)
- **[yt-dlp_macos_legacy](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos_legacy)** - MacOS (10.9+) standalone x64 executable

## Installation Steps

### Windows

1. Download the appropriate `.exe` file
2. Place it in a directory that's in your PATH, or create a new directory and add it to PATH
3. Open Command Prompt or PowerShell and test:

```cmd
yt-dlp --version
```

### Linux/BSD

1. Download the `yt-dlp` binary
2. Make it executable:

```bash
chmod a+rx yt-dlp
```

3. Move to PATH:

```bash
sudo mv yt-dlp /usr/local/bin/
```

4. Test:

```bash
yt-dlp --version
```

### macOS

1. Download the `yt-dlp_macos` binary
2. Rename and make executable:

```bash
mv yt-dlp_macos yt-dlp
```

```bash
chmod a+rx yt-dlp
```

3. Move to PATH:

```bash
sudo mv yt-dlp /usr/local/bin/
```

4. Test:

```bash
yt-dlp --version
```

## Updating Binaries

### Automatic Update

Most release binaries support self-updating:

```bash
yt-dlp -U
```

### Update Channels

There are three release channels available:

#### Stable (Default)

- Default channel with tested releases

```bash
yt-dlp -U
```

#### Nightly (Recommended)

- Daily builds with latest patches and changes
- **Recommended for regular users**

```bash
yt-dlp --update-to nightly
```

Available from [yt-dlp-nightly-builds](https://github.com/yt-dlp/yt-dlp-nightly-builds/releases)

#### Master

- Built after each commit to master branch
- Latest fixes but may have regressions

```bash
yt-dlp --update-to master
```

Available from [yt-dlp-master-builds](https://github.com/yt-dlp/yt-dlp-master-builds/releases)

### Advanced Update Options

Switch to a different channel

```bash
yt-dlp --update-to nightly
```

Upgrade/downgrade to specific version

```bash
yt-dlp --update-to stable@2023.07.06
```

Update to specific tag

```bash
yt-dlp --update-to 2023.10.07
```

Update from different repository

```bash
yt-dlp --update-to example/yt-dlp@2023.09.24
```

## Verification Files

For security-conscious users, verification files are available:

- **[SHA2-512SUMS](https://github.com/yt-dlp/yt-dlp/releases/latest/download/SHA2-512SUMS)** - GNU-style SHA512 checksums
- **[SHA2-512SUMS.sig](https://github.com/yt-dlp/yt-dlp/releases/latest/download/SHA2-512SUMS.sig)** - GPG signature for SHA512 sums
- **[SHA2-256SUMS](https://github.com/yt-dlp/yt-dlp/releases/latest/download/SHA2-256SUMS)** - GNU-style SHA256 checksums
- **[SHA2-256SUMS.sig](https://github.com/yt-dlp/yt-dlp/releases/latest/download/SHA2-256SUMS.sig)** - GPG signature for SHA256 sums

### Verifying Downloads

Import the public key

```bash
curl -L https://github.com/yt-dlp/yt-dlp/raw/master/public.key | gpg --import
```

Verify signatures

```bash
gpg --verify SHA2-256SUMS.sig SHA2-256SUMS
```

```bash
gpg --verify SHA2-512SUMS.sig SHA2-512SUMS
```

## Source Code

- **[yt-dlp.tar.gz](https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp.tar.gz)** - Source tarball containing manpages, shell completion files, etc.

## Troubleshooting

### Issue Reporting

If you experience issues with the **stable** release, install the **nightly** release before submitting a bug report:

```bash
yt-dlp --update-to nightly
```

### Dependencies

Most standalone binaries include all necessary dependencies. However, some features may require:

- **ffmpeg** and **ffprobe** for format merging and post-processing
- Additional libraries for specific sites or features

### Windows Dependencies

On Windows, if you get an error about missing `MSVCR100.dll`, install the [Microsoft Visual C++ 2010 SP1 Redistributable Package (x86)](https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe).

## All Releases

You can find all releases at: [https://github.com/yt-dlp/yt-dlp/releases](https://github.com/yt-dlp/yt-dlp/releases)

```

```
