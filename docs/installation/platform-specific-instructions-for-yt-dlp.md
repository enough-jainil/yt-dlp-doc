---
sidebar_position: 5
---

# Platform-specific Instructions for yt-dlp

This comprehensive guide provides detailed installation and usage instructions for yt-dlp across different operating systems and platforms, including platform-specific considerations, optimizations, and troubleshooting.

## Windows

### System Requirements

- **Operating System**: Windows 7 SP1 or later (Windows 10/11 recommended)
- **Architecture**: x86, x64, ARM64 (Windows 11)
- **Dependencies**: Microsoft Visual C++ 2010 SP1 Redistributable (for some features)
- **PowerShell**: Version 5.1 or later (for advanced usage)

### Installation Methods

#### Method 1: Standalone Executable (Recommended)

**Download and Setup:**

```cmd
# Download yt-dlp.exe from GitHub releases
# Place in a directory in your PATH

# Recommended locations:
# System-wide: C:\Windows\System32\
# User-specific: %LOCALAPPDATA%\Microsoft\WindowsApps\
# Custom: C:\Tools\yt-dlp\
```

**Adding to PATH:**

```cmd
# Temporary (current session only)
set PATH=%PATH%;C:\Tools\yt-dlp

# Permanent (all sessions)
setx PATH "%PATH%;C:\Tools\yt-dlp"

# Verify installation
yt-dlp --version
```

#### Method 2: Package Managers

**Chocolatey:**

```powershell
# Install as Administrator
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Install yt-dlp
choco install yt-dlp
```

**Scoop:**

```powershell
# Install Scoop
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# Install yt-dlp
scoop install yt-dlp
```

**winget:**

```cmd
# Install yt-dlp
winget install yt-dlp.yt-dlp
```

#### Method 3: Python pip

```cmd
# Install Python from python.org or Microsoft Store
# Install yt-dlp
python -m pip install -U "yt-dlp[default]"

# Or using Python Launcher
py -m pip install -U "yt-dlp[default]"
```

### Windows-Specific Configuration

#### PowerShell Profile Setup

```powershell
# Create PowerShell profile
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}

# Add yt-dlp aliases and functions
Add-Content -Path $PROFILE -Value @'
# yt-dlp aliases
function yt-dlp-audio { yt-dlp -x --audio-format mp3 $args }
function yt-dlp-video { yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" $args }
function yt-dlp-playlist { yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" $args }
'@
```

#### Windows Defender Exclusions

```powershell
# Add yt-dlp to Windows Defender exclusions (if needed)
Add-MpPreference -ExclusionPath "C:\Tools\yt-dlp\yt-dlp.exe"
Add-MpPreference -ExclusionProcess "yt-dlp.exe"
```

### Windows-Specific Usage

#### File Path Handling

```cmd
# Use double quotes for paths with spaces
yt-dlp -o "C:\Users\%USERNAME%\Videos\%(title)s.%(ext)s" URL

# Use forward slashes or escaped backslashes
yt-dlp -o "C:/Users/%USERNAME%/Videos/%(title)s.%(ext)s" URL
yt-dlp -o "C:\\Users\\%USERNAME%\\Videos\\%(title)s.%(ext)s" URL
```

#### Network Configuration

```cmd
# Configure proxy for corporate networks
yt-dlp --proxy http://proxy.company.com:8080 URL

# Use system proxy settings
yt-dlp --proxy "" URL

# Bypass SSL verification (if needed)
yt-dlp --no-check-certificates URL
```

### Windows Troubleshooting

#### Common Issues

**MSVCR100.dll Missing:**

```cmd
# Download and install Microsoft Visual C++ 2010 SP1 Redistributable
# x86: https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe
# x64: https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe
```

**PowerShell Execution Policy:**

```powershell
# Check current policy
Get-ExecutionPolicy

# Set policy for current user
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Bypass policy temporarily
powershell -ExecutionPolicy Bypass -File script.ps1
```

**Long Path Support:**

```cmd
# Enable long path support (Windows 10 1607+)
# Run as Administrator
reg add "HKLM\SYSTEM\CurrentControlSet\Control\FileSystem" /v LongPathsEnabled /t REG_DWORD /d 1
```

## macOS

### System Requirements

- **Operating System**: macOS 10.15 (Catalina) or later
- **Architecture**: Intel x64, Apple Silicon (M1/M2/M3)
- **Dependencies**: Command Line Tools for Xcode
- **Python**: macOS includes Python, but Python 3.9+ recommended

### Installation Methods

#### Method 1: Homebrew (Recommended)

```bash
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add to PATH (Apple Silicon Macs)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Install yt-dlp
brew install yt-dlp

# Install FFmpeg (recommended)
brew install ffmpeg
```

#### Method 2: MacPorts

```bash
# Install MacPorts from macports.org
# Update MacPorts
sudo port selfupdate

# Install yt-dlp
sudo port install yt-dlp

# Install FFmpeg
sudo port install ffmpeg
```

#### Method 3: Binary Installation

```bash
# Download yt-dlp_macos from GitHub releases
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o yt-dlp

# Make executable
chmod +x yt-dlp

# Remove quarantine attribute (if needed)
xattr -d com.apple.quarantine yt-dlp

# Install system-wide
sudo mv yt-dlp /usr/local/bin/

# Or install user-specific
mkdir -p ~/.local/bin
mv yt-dlp ~/.local/bin/
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

#### Method 4: Python pip

```bash
# Install using system Python
python3 -m pip install --user -U "yt-dlp[default]"

# Install using Homebrew Python
/opt/homebrew/bin/python3 -m pip install -U "yt-dlp[default]"

# Add to PATH if needed
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```

### macOS-Specific Configuration

#### Shell Configuration

**For Zsh (default on macOS Catalina+):**

```bash
# Add to ~/.zshrc
cat >> ~/.zshrc << 'EOF'
# yt-dlp aliases
alias yt-audio='yt-dlp -x --audio-format mp3'
alias yt-video='yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]"'
alias yt-playlist='yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s"'

# yt-dlp functions
ytdl-best() {
    yt-dlp -f "bestvideo+bestaudio/best" -o "~/Downloads/%(title)s.%(ext)s" "$@"
}
EOF

source ~/.zshrc
```

**For Bash:**

```bash
# Add to ~/.bash_profile or ~/.bashrc
cat >> ~/.bash_profile << 'EOF'
# yt-dlp configuration
export YT_DLP_CONFIG_HOME="$HOME/.config/yt-dlp"
alias yt-audio='yt-dlp -x --audio-format mp3'
EOF

source ~/.bash_profile
```

#### System Integration

**Create macOS Service:**

```bash
# Create Automator service for right-click download
# 1. Open Automator
# 2. Create new Service
# 3. Add "Run Shell Script" action
# 4. Set script to: yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "$@"
# 5. Save as "Download with yt-dlp"
```

### macOS-Specific Usage

#### Handling Gatekeeper

```bash
# If macOS blocks the binary
sudo spctl --add /usr/local/bin/yt-dlp
sudo spctl --enable /usr/local/bin/yt-dlp

# Or disable Gatekeeper temporarily
sudo spctl --master-disable
# Re-enable after use
sudo spctl --master-enable
```

#### File System Considerations

```bash
# Handle special characters in filenames
yt-dlp --restrict-filenames URL

# Use case-sensitive file system
yt-dlp -o "%(title)s.%(ext)s" --no-overwrites URL
```

### macOS Troubleshooting

#### Common Issues

**SSL Certificate Errors:**

```bash
# Update certificates
/Applications/Python\ 3.x/Install\ Certificates.command

# Or install certificates via Homebrew
brew install ca-certificates
```

**Permission Denied:**

```bash
# Fix permissions
chmod +x /usr/local/bin/yt-dlp

# Use user installation
python3 -m pip install --user yt-dlp
```

**Command Not Found:**

```bash
# Check PATH
echo $PATH

# Add to PATH
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

## Linux

### Distribution-Specific Instructions

#### Ubuntu/Debian

**System Requirements:**

- Ubuntu 18.04+ or Debian 10+
- Python 3.9+ (available in Ubuntu 20.04+)

**Installation:**

```bash
# Update package list
sudo apt update

# Install from official PPA (recommended)
sudo add-apt-repository ppa:yt-dlp/stable
sudo apt update
sudo apt install yt-dlp

# Install dependencies
sudo apt install ffmpeg python3-pip

# Alternative: pip installation
sudo apt install python3-pip
pip3 install --user "yt-dlp[default]"
```

#### Fedora/CentOS/RHEL

**Fedora:**

```bash
# Install from official repository
sudo dnf install yt-dlp ffmpeg

# Install from RPM Fusion (if needed)
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install yt-dlp
```

**CentOS/RHEL:**

```bash
# Enable EPEL
sudo dnf install epel-release

# Install yt-dlp
sudo dnf install yt-dlp ffmpeg

# Or use pip
sudo dnf install python3-pip
pip3 install --user "yt-dlp[default]"
```

#### Arch Linux

```bash
# Install from official repository
sudo pacman -S yt-dlp ffmpeg

# Install from AUR (development version)
yay -S yt-dlp-git

# Or using paru
paru -S yt-dlp-git
```

#### openSUSE

```bash
# Install from official repository
sudo zypper install yt-dlp ffmpeg

# Add multimedia repository
sudo zypper addrepo https://download.opensuse.org/repositories/multimedia:/apps/openSUSE_Tumbleweed/ multimedia
sudo zypper refresh
sudo zypper install yt-dlp
```

#### Alpine Linux

```bash
# Update package index
apk update

# Install yt-dlp
apk add yt-dlp ffmpeg

# Install from edge (latest version)
echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
apk update
apk add yt-dlp
```

### Linux-Specific Configuration

#### Systemd Service

```bash
# Create systemd service for automated downloads
sudo tee /etc/systemd/system/yt-dlp-monitor.service << 'EOF'
[Unit]
Description=yt-dlp Download Monitor
After=network.target

[Service]
Type=simple
User=ytdlp
Group=ytdlp
WorkingDirectory=/home/ytdlp
ExecStart=/usr/local/bin/yt-dlp --config-location /etc/yt-dlp/config --batch-file /etc/yt-dlp/urls.txt
Restart=always

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl enable yt-dlp-monitor
sudo systemctl start yt-dlp-monitor
```

#### Cron Jobs

```bash
# Add to crontab for scheduled downloads
crontab -e

# Download from URL list every hour
0 * * * * /usr/local/bin/yt-dlp --batch-file ~/urls.txt --download-archive ~/downloaded.txt

# Update yt-dlp weekly
0 0 * * 0 /usr/local/bin/yt-dlp -U
```

### Linux-Specific Usage

#### Performance Optimization

```bash
# Use multiple connections
yt-dlp --concurrent-fragments 4 URL

# Limit bandwidth
yt-dlp --limit-rate 1M URL

# Use external downloader
yt-dlp --downloader aria2c --downloader-args "aria2c:-x 16 -s 16" URL
```

#### File System Integration

```bash
# Set extended attributes
yt-dlp --xattr URL

# Use custom output directory structure
yt-dlp -o "/media/storage/%(uploader)s/%(upload_date>%Y-%m-%d)s - %(title)s.%(ext)s" URL
```

### Linux Troubleshooting

#### Permission Issues

```bash
# Fix permissions for user installation
chmod +x ~/.local/bin/yt-dlp

# Add to PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Dependency Issues

```bash
# Install missing dependencies
# Ubuntu/Debian
sudo apt install python3-dev build-essential

# Fedora
sudo dnf groupinstall "Development Tools"
sudo dnf install python3-devel

# Arch Linux
sudo pacman -S base-devel python
```

## Android (Termux)

### Prerequisites

- **Termux**: Install from F-Droid (recommended) or Google Play Store
- **Storage Access**: Grant storage permissions
- **Keyboard**: Consider installing Hacker's Keyboard for better terminal experience

### Installation

```bash
# Update Termux packages
pkg update && pkg upgrade

# Grant storage access
termux-setup-storage

# Install Python and dependencies
pkg install python ffmpeg

# Install yt-dlp
pip install "yt-dlp[default]"

# Optional: Install additional tools
pkg install curl wget git nano
```

### Android-Specific Configuration

```bash
# Create configuration directory
mkdir -p ~/.config/yt-dlp

# Create configuration file
cat > ~/.config/yt-dlp/config << 'EOF'
# Default output directory
-o ~/storage/downloads/%(title)s.%(ext)s

# Default format (mobile-friendly)
-f "best[height<=720]/best"

# Embed metadata
--embed-metadata
--embed-thumbnail

# Continue on errors
--ignore-errors
EOF
```

### Android-Specific Usage

```bash
# Download to external storage
yt-dlp -o "~/storage/downloads/%(title)s.%(ext)s" URL

# Download audio for music apps
yt-dlp -x --audio-format mp3 -o "~/storage/music/%(title)s.%(ext)s" URL

# Low bandwidth mode
yt-dlp -f "worst" URL
```

## iOS (iSH)

### Prerequisites

- **iSH**: Install from App Store
- **Files App**: For file management
- **Patience**: iSH emulation can be slow

### Installation

```bash
# Update Alpine packages
apk update

# Install Python and dependencies
apk add python3 py3-pip ffmpeg

# Install yt-dlp
pip3 install yt-dlp

# Create symlink for easier access
ln -s /usr/bin/python3 /usr/bin/python
```

### iOS-Specific Usage

```bash
# Download to Files app directory
yt-dlp -o "/root/Downloads/%(title)s.%(ext)s" URL

# Use lower quality for faster processing
yt-dlp -f "worst[height<=480]" URL
```

## Chrome OS

### Linux Container Setup

```bash
# Enable Linux development environment in Chrome OS settings
# Open Terminal app

# Update packages
sudo apt update

# Install Python and yt-dlp
sudo apt install python3-pip
pip3 install --user "yt-dlp[default]"

# Add to PATH
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Chrome OS-Specific Usage

```bash
# Download to Downloads folder (shared with Chrome OS)
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" URL

# Use Chrome OS file manager integration
yt-dlp --write-info-json URL
```

## Cross-Platform Best Practices

### Configuration Management

```bash
# Create portable configuration
mkdir -p ~/.config/yt-dlp
cat > ~/.config/yt-dlp/config << 'EOF'
# Output template
-o "%(uploader)s/%(upload_date>%Y-%m-%d)s - %(title)s.%(ext)s"

# Format selection
-f "bestvideo[height<=1080]+bestaudio/best[height<=1080]"

# Post-processing
--embed-metadata
--embed-chapters
--embed-thumbnail

# Error handling
--ignore-errors
--continue
EOF
```

### Automation Scripts

**Cross-platform download script:**

```bash
#!/bin/bash
# download-video.sh

# Detect platform
case "$(uname -s)" in
    Darwin)
        DOWNLOAD_DIR="$HOME/Downloads"
        ;;
    Linux)
        DOWNLOAD_DIR="$HOME/Downloads"
        ;;
    CYGWIN*|MINGW*|MSYS*)
        DOWNLOAD_DIR="$HOME/Downloads"
        ;;
    *)
        DOWNLOAD_DIR="."
        ;;
esac

# Download with platform-appropriate settings
yt-dlp -o "$DOWNLOAD_DIR/%(title)s.%(ext)s" \
       -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" \
       --embed-metadata \
       "$@"
```

### Performance Optimization

```bash
# Platform-specific optimizations
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS optimizations
    export YT_DLP_ARGS="--concurrent-fragments 2"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux optimizations
    export YT_DLP_ARGS="--concurrent-fragments 4"
elif [[ "$OSTYPE" == "msys" ]]; then
    # Windows optimizations
    export YT_DLP_ARGS="--concurrent-fragments 2 --no-mtime"
fi
```

Choose the installation method and configuration that best suits your platform and use case. Each platform has its unique considerations, but yt-dlp's cross-platform design ensures consistent functionality across all supported systems.
