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

Download yt-dlp.exe from GitHub releases
Place in a directory in your PATH

Recommended locations:
System-wide: C:\Windows\System32\
User-specific: %LOCALAPPDATA%\Microsoft\WindowsApps\
Custom: C:\Tools\yt-dlp\

**Adding to PATH:**

Temporary (current session only)

```cmd
set PATH=%PATH%;C:\Tools\yt-dlp
```

Permanent (all sessions)

```cmd
setx PATH "%PATH%;C:\Tools\yt-dlp"
```

Verify installation

```cmd
yt-dlp --version
```

#### Method 2: Package Managers

**Chocolatey:**

Install as Administrator

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

Install yt-dlp

```powershell
choco install yt-dlp
```

**Scoop:**

Install Scoop

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

```powershell
irm get.scoop.sh | iex
```

Install yt-dlp

```powershell
scoop install yt-dlp
```

**winget:**

Install yt-dlp

```cmd
winget install yt-dlp.yt-dlp
```

#### Method 3: Python pip

Install Python from python.org or Microsoft Store
Install yt-dlp

```cmd
python -m pip install -U "yt-dlp[default]"
```

Or using Python Launcher

```cmd
py -m pip install -U "yt-dlp[default]"
```

### Windows-Specific Configuration

#### PowerShell Profile Setup

Create PowerShell profile

```powershell
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
```

Add yt-dlp aliases and functions

```powershell
Add-Content -Path $PROFILE -Value @'
# yt-dlp aliases
function yt-dlp-audio { yt-dlp -x --audio-format mp3 $args }
function yt-dlp-video { yt-dlp -f "bestvideo[height<=1080]+bestaudio/best[height<=1080]" $args }
function yt-dlp-playlist { yt-dlp -o "%(playlist)s/%(playlist_index)s - %(title)s.%(ext)s" $args }
'@
```

#### Windows Defender Exclusions

Add yt-dlp to Windows Defender exclusions (if needed)

```powershell
Add-MpPreference -ExclusionPath "C:\Tools\yt-dlp\yt-dlp.exe"
```

```powershell
Add-MpPreference -ExclusionProcess "yt-dlp.exe"
```

### Windows-Specific Usage

#### File Path Handling

Use double quotes for paths with spaces

```cmd
yt-dlp -o "C:\Users\%USERNAME%\Videos\%(title)s.%(ext)s" URL
```

Use forward slashes or escaped backslashes

```cmd
yt-dlp -o "C:/Users/%USERNAME%/Videos/%(title)s.%(ext)s" URL
```

```cmd
yt-dlp -o "C:\\Users\\%USERNAME%\\Videos\\%(title)s.%(ext)s" URL
```

#### Network Configuration

Configure proxy for corporate networks

```cmd
yt-dlp --proxy http://proxy.company.com:8080 URL
```

Use system proxy settings

```cmd
yt-dlp --proxy "" URL
```

Bypass SSL verification (if needed)

```cmd
yt-dlp --no-check-certificates URL
```

### Windows Troubleshooting

#### Common Issues

**MSVCR100.dll Missing:**

Download and install Microsoft Visual C++ 2010 SP1 Redistributable
x86: https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe
x64: https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x64.exe

**PowerShell Execution Policy:**

Check current policy

```powershell
Get-ExecutionPolicy
```

Set policy for current user

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Bypass policy temporarily

```powershell
powershell -ExecutionPolicy Bypass -File script.ps1
```

**Long Path Support:**

Enable long path support (Windows 10 1607+)
Run as Administrator

```cmd
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

Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Add to PATH (Apple Silicon Macs)

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Install yt-dlp

```bash
brew install yt-dlp
```

Install FFmpeg (recommended)

```bash
brew install ffmpeg
```

#### Method 2: MacPorts

Install MacPorts from macports.org
Update MacPorts

```bash
sudo port selfupdate
```

Install yt-dlp

```bash
sudo port install yt-dlp
```

Install FFmpeg

```bash
sudo port install ffmpeg
```

#### Method 3: Binary Installation

Download yt-dlp_macos from GitHub releases

```bash
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp_macos -o yt-dlp
```

Make executable

```bash
chmod +x yt-dlp
```

Remove quarantine attribute (if needed)

```bash
xattr -d com.apple.quarantine yt-dlp
```

Install system-wide

```bash
sudo mv yt-dlp /usr/local/bin/
```

Or install user-specific

```bash
mkdir -p ~/.local/bin
```

```bash
mv yt-dlp ~/.local/bin/
```

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```

```bash
source ~/.zshrc
```

#### Method 4: Python pip

Install using system Python

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

Install using Homebrew Python

```bash
/opt/homebrew/bin/python3 -m pip install -U "yt-dlp[default]"
```

Add to PATH if needed

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
```

### macOS-Specific Configuration

#### Shell Configuration

**For Zsh (default on macOS Catalina+):**

Add to ~/.zshrc

```bash
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
```

```bash
source ~/.zshrc
```

**For Bash:**

Add to ~/.bash_profile or ~/.bashrc

```bash
cat >> ~/.bash_profile << 'EOF'
# yt-dlp configuration
export YT_DLP_CONFIG_HOME="$HOME/.config/yt-dlp"
alias yt-audio='yt-dlp -x --audio-format mp3'
EOF
```

```bash
source ~/.bash_profile
```

#### System Integration

Create macOS Service:

Create Automator service for right-click download

1. Open Automator
2. Create new Service
3. Add "Run Shell Script" action
4. Set script to: yt-dlp -o "~/Downloads/%(title)s.%(ext)s" "$@"
5. Save as "Download with yt-dlp"

### macOS-Specific Usage

#### Handling Gatekeeper

If macOS blocks the binary

```bash
sudo spctl --add /usr/local/bin/yt-dlp
```

```bash
sudo spctl --enable /usr/local/bin/yt-dlp
```

Or disable Gatekeeper temporarily

```bash
sudo spctl --master-disable
```

Re-enable after use

```bash
sudo spctl --master-enable
```

#### File System Considerations

Handle special characters in filenames

```bash
yt-dlp --restrict-filenames URL
```

Use case-sensitive file system

```bash
yt-dlp -o "%(title)s.%(ext)s" --no-overwrites URL
```

### macOS Troubleshooting

#### Common Issues

**SSL Certificate Errors:**

Update certificates

```bash
/Applications/Python\ 3.x/Install\ Certificates.command
```

Or install certificates via Homebrew

```bash
brew install ca-certificates
```

**Permission Denied:**

Fix permissions

```bash
chmod +x /usr/local/bin/yt-dlp
```

Use user installation

```bash
python3 -m pip install --user yt-dlp
```

**Command Not Found:**

Check PATH

```bash
echo $PATH
```

Add to PATH

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.zshrc
```

```bash
source ~/.zshrc
```

## Linux

### Distribution-Specific Instructions

#### Ubuntu/Debian

**System Requirements:**

- Ubuntu 18.04+ or Debian 10+
- Python 3.9+ (available in Ubuntu 20.04+)

**Installation:**

Update package list

```bash
sudo apt update
```

Install from official PPA (recommended)

```bash
sudo add-apt-repository ppa:yt-dlp/stable
```

```bash
sudo apt update
```

```bash
sudo apt install yt-dlp
```

Install dependencies

```bash
sudo apt install ffmpeg python3-pip
```

Alternative: pip installation

```bash
sudo apt install python3-pip
```

```bash
pip3 install --user "yt-dlp[default]"
```

#### Fedora/CentOS/RHEL

**Fedora:**

Install from official repository

```bash
sudo dnf install yt-dlp ffmpeg
```

Install from RPM Fusion (if needed)

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```

```bash
sudo dnf install yt-dlp
```

**CentOS/RHEL:**

Enable EPEL

```bash
sudo dnf install epel-release
```

Install yt-dlp

```bash
sudo dnf install yt-dlp ffmpeg
```

Or use pip

```bash
sudo dnf install python3-pip
```

```bash
pip3 install --user "yt-dlp[default]"
```

#### Arch Linux

Install from official repository

```bash
sudo pacman -S yt-dlp ffmpeg
```

Install from AUR (development version)

```bash
yay -S yt-dlp-git
```

Or using paru

```bash
paru -S yt-dlp-git
```

#### openSUSE

Install from official repository

```bash
sudo zypper install yt-dlp ffmpeg
```

Add multimedia repository

```bash
sudo zypper addrepo https://download.opensuse.org/repositories/multimedia:/apps/openSUSE_Tumbleweed/ multimedia
```

```bash
sudo zypper refresh
```

```bash
sudo zypper install yt-dlp
```

#### Alpine Linux

Update package index

```bash
apk update
```

Install yt-dlp

```bash
apk add yt-dlp ffmpeg
```

Install from edge (latest version)

```bash
echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
```

```bash
apk update
```

```bash
apk add yt-dlp
```

### Linux-Specific Configuration

#### Systemd Service

Create systemd service for automated downloads

```bash
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
```

Enable and start service

```bash
sudo systemctl enable yt-dlp-monitor
```

```bash
sudo systemctl start yt-dlp-monitor
```

#### Cron Jobs

Add to crontab for scheduled downloads

```bash
crontab -e
```

Download from URL list every hour

```bash
0 * * * * /usr/local/bin/yt-dlp --batch-file ~/urls.txt --download-archive ~/downloaded.txt
```

Update yt-dlp weekly

```bash
0 0 * * 0 /usr/local/bin/yt-dlp -U
```

### Linux-Specific Usage

#### Performance Optimization

Use multiple connections

```bash
yt-dlp --concurrent-fragments 4 URL
```

Limit bandwidth

```bash
yt-dlp --limit-rate 1M URL
```

Use external downloader

```bash
yt-dlp --downloader aria2c --downloader-args "aria2c:-x 16 -s 16" URL
```

#### File System Integration

Set extended attributes

```bash
yt-dlp --xattr URL
```

Use custom output directory structure

```bash
yt-dlp -o "/media/storage/%(uploader)s/%(upload_date>%Y-%m-%d)s - %(title)s.%(ext)s" URL
```

### Linux Troubleshooting

#### Permission Issues

Fix permissions for user installation

```bash
chmod +x ~/.local/bin/yt-dlp
```

Add to PATH

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

#### Dependency Issues

Install missing dependencies

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
sudo pacman -S base-devel python
```

## Android (Termux)

### Prerequisites

- **Termux**: Install from F-Droid (recommended) or Google Play Store
- **Storage Access**: Grant storage permissions
- **Keyboard**: Consider installing Hacker's Keyboard for better terminal experience

### Installation

Update Termux packages

```bash
pkg update
```

```bash
pkg upgrade
```

Grant storage access

```bash
termux-setup-storage
```

Install Python and dependencies

```bash
pkg install python ffmpeg
```

Install yt-dlp

```bash
pip install "yt-dlp[default]"
```

Optional: Install additional tools

```bash
pkg install curl wget git nano
```

### Android-Specific Configuration

Create configuration directory

```bash
mkdir -p ~/.config/yt-dlp
```

Create configuration file

```bash
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

Download to external storage

```bash
yt-dlp -o "~/storage/downloads/%(title)s.%(ext)s" URL
```

Download audio for music apps

```bash
yt-dlp -x --audio-format mp3 -o "~/storage/music/%(title)s.%(ext)s" URL
```

Low bandwidth mode

```bash
yt-dlp -f "worst" URL
```

## iOS (iSH)

### Prerequisites

- **iSH**: Install from App Store
- **Files App**: For file management
- **Patience**: iSH emulation can be slow

### Installation

Update Alpine packages

```bash
apk update
```

Install Python and dependencies

```bash
apk add python3 py3-pip ffmpeg
```

Install yt-dlp

```bash
pip3 install yt-dlp
```

Create symlink for easier access

```bash
ln -s /usr/bin/python3 /usr/bin/python
```

### iOS-Specific Usage

Download to Files app directory

```bash
yt-dlp -o "/root/Downloads/%(title)s.%(ext)s" URL
```

Use lower quality for faster processing

```bash
yt-dlp -f "worst[height<=480]" URL
```

## Chrome OS

### Linux Container Setup

Enable Linux development environment in Chrome OS settings
Open Terminal app

Update packages

```bash
sudo apt update
```

Install Python and yt-dlp

```bash
sudo apt install python3-pip
```

```bash
pip3 install --user "yt-dlp[default]"
```

Add to PATH

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

### Chrome OS-Specific Usage

Download to Downloads folder (shared with Chrome OS)

```bash
yt-dlp -o "~/Downloads/%(title)s.%(ext)s" URL
```

Use Chrome OS file manager integration

```bash
yt-dlp --write-info-json URL
```

## Cross-Platform Best Practices

### Configuration Management

Create portable configuration

```bash
mkdir -p ~/.config/yt-dlp
```

```bash
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

Cross-platform download script:

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

Platform-specific optimizations

```bash
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
