---
sidebar_position: 1
---

# Methods of Installation

yt-dlp can be installed using various methods depending on your platform, preferences, and use case. This comprehensive guide covers all available installation methods to help you choose the best approach for your needs.

## Overview of Installation Methods

| Method                   | Best For           | Pros                      | Cons                    |
| ------------------------ | ------------------ | ------------------------- | ----------------------- |
| **Release Binaries**     | Most users         | Simple, self-contained    | Larger file size        |
| **pip (Python)**         | Python users       | Latest features, flexible | Requires Python         |
| **Package Managers**     | System integration | Easy updates              | May lag behind releases |
| **Building from Source** | Developers         | Cutting-edge features     | Complex setup           |

## 1. Release Binaries (Recommended for Most Users)

Pre-compiled binaries are the simplest installation method for most users. They include all dependencies and don't require Python installation.

### Windows

#### Standard Installation

1. **Download**: Get `yt-dlp.exe` from the [official releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. **Install**: Place the executable in a directory within your PATH
3. **Verify**: Open Command Prompt and run `yt-dlp --version`

#### Recommended Locations

System-wide (requires admin rights)

```cmd
C:\Windows\System32\
```

User-specific

```cmd
C:\Users\%USERNAME%\AppData\Local\Microsoft\WindowsApps\
```

Custom directory (add to PATH)

```cmd
C:\Tools\yt-dlp\
```

#### Adding to PATH

Add directory to PATH permanently

```cmd
setx PATH "%PATH%;C:\Tools\yt-dlp"
```

### macOS

#### Intel Macs

1. **Download**: Get `yt-dlp_macos` from [releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. **Rename and Make Executable**:

```bash
mv yt-dlp_macos yt-dlp
```

```bash
chmod +x yt-dlp
```

3. **Install System-wide**:

```bash
sudo mv yt-dlp /usr/local/bin/
```

#### Apple Silicon (M1/M2) Macs

1. **Download**: Get `yt-dlp_macos` (universal binary works on both architectures)
2. **Handle Security Warnings**:

Remove quarantine attribute if needed

```bash
xattr -d com.apple.quarantine yt-dlp
```

3. **Install**:

```bash
chmod +x yt-dlp
```

```bash
sudo mv yt-dlp /usr/local/bin/
```

### Linux

#### Universal Linux Binary

1. **Download**: Get `yt-dlp` from [releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. **Make Executable and Install**:

```bash
chmod +x yt-dlp
```

```bash
sudo mv yt-dlp /usr/local/bin/
```

#### Alternative Installation Locations

User-specific installation (no sudo required)

```bash
mkdir -p ~/.local/bin
```

```bash
mv yt-dlp ~/.local/bin/
```

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

### Auto-update Feature

**All binary installations support self-updating:**

Update to latest release

```bash
yt-dlp -U
```

Update to specific version

```bash
yt-dlp -U --update-to 2023.12.30
```

## 2. Python Package Installation (pip)

Best for Python users who want the latest features and flexible installation options.

### Prerequisites

- **Python 3.9+** (CPython) or **Python 3.10+** (PyPy)
- **pip** package manager

### Basic Installation

Standard installation with common dependencies

```bash
python3 -m pip install -U "yt-dlp[default]"
```

Minimal installation (core features only)

```bash
python3 -m pip install -U yt-dlp
```

### Advanced Installation Options

With browser impersonation support

```bash
python3 -m pip install -U "yt-dlp[default,curl-cffi]"
```

Development/pre-release version

```bash
python3 -m pip install -U --pre "yt-dlp[default]"
```

From GitHub master branch

```bash
python3 -m pip install -U "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz"
```

### Virtual Environment (Recommended)

Create isolated environment

```bash
python3 -m venv yt-dlp-env
```

Linux/macOS

```bash
source yt-dlp-env/bin/activate
```

Install in virtual environment

```bash
python3 -m pip install -U "yt-dlp[default]"
```

### Using pipx (Recommended for CLI Tools)

Install pipx

```bash
python3 -m pip install --user pipx
```

Install yt-dlp with pipx

```bash
pipx install "yt-dlp[default]"
```

## 3. Third-party Package Managers

Convenient for users who prefer system package managers for software management.

### Windows Package Managers

#### Chocolatey

Install Chocolatey (if not already installed)

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force
```

```powershell
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
```

```powershell
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Install yt-dlp

```powershell
choco install yt-dlp
```

Update

```powershell
choco upgrade yt-dlp
```

#### Scoop

Install Scoop (if not already installed)

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

Update

```powershell
scoop update yt-dlp
```

#### winget (Windows Package Manager)

Install

```cmd
winget install yt-dlp.yt-dlp
```

Update

```cmd
winget upgrade yt-dlp.yt-dlp
```

### macOS Package Managers

#### Homebrew

Install Homebrew (if not already installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install yt-dlp

```bash
brew install yt-dlp
```

Update

```bash
brew upgrade yt-dlp
```

#### MacPorts

Install MacPorts (requires separate installation)
Then install yt-dlp

```bash
sudo port install yt-dlp
```

Update

```bash
sudo port selfupdate
```

```bash
sudo port upgrade yt-dlp
```

### Linux Package Managers

#### Debian/Ubuntu (APT)

Add official PPA (most up-to-date)

```bash
sudo add-apt-repository ppa:yt-dlp/stable
```

```bash
sudo apt update
```

```bash
sudo apt install yt-dlp
```

Alternative: Use distribution package (may be older)

```bash
sudo apt install yt-dlp
```

#### Fedora/CentOS/RHEL (DNF/YUM)

Fedora

```bash
sudo dnf install yt-dlp
```

Enable additional repositories if needed

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```

#### Arch Linux (pacman)

Official repository

```bash
sudo pacman -S yt-dlp
```

AUR for development versions

```bash
yay -S yt-dlp-git
```

#### openSUSE (zypper)

```bash
sudo zypper install yt-dlp
```

#### Alpine Linux (apk)

Add community repository

```bash
echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories
```

Install

```bash
doas apk add yt-dlp
```

## 4. Building from Source

For developers and users who want the absolute latest features.

### Prerequisites

Install build dependencies

```bash
python3 -m pip install -U pip setuptools wheel hatchling
```

### Standard Build

Clone repository

```bash
git clone https://github.com/yt-dlp/yt-dlp.git
```

```bash
cd yt-dlp
```

Install dependencies

```bash
python3 -m pip install -U -r requirements.txt
```

Build and install

```bash
python3 -m pip install -e .
```

### Creating Standalone Executable

Install PyInstaller

```bash
python3 -m pip install pyinstaller
```

Build executable

```bash
python3 -m PyInstaller --onefile --name yt-dlp yt_dlp/__main__.py
```

### Development Installation

Clone and install in development mode

```bash
git clone https://github.com/yt-dlp/yt-dlp.git
```

```bash
cd yt-dlp
```

```bash
python3 -m pip install -e ".[default]"
```

## 5. Container/Docker Installation

For containerized environments and isolated execution.

### Docker

Run directly

```bash
docker run --rm -v "$(pwd):/downloads" jauderho/yt-dlp:latest [OPTIONS] URL
```

Build custom image

```bash
cat > Dockerfile << 'EOF'
FROM python:3.11-alpine
RUN pip install yt-dlp[default]
ENTRYPOINT ["yt-dlp"]
EOF
```

```bash
docker build -t my-yt-dlp .
```

```bash
docker run --rm -v "$(pwd):/downloads" my-yt-dlp [OPTIONS] URL
```

### Podman

Similar to Docker

```bash
podman run --rm -v "$(pwd):/downloads:Z" jauderho/yt-dlp:latest [OPTIONS] URL
```

## 6. Mobile and Alternative Platforms

### Android (Termux)

Install Termux from F-Droid
In Termux:

```bash
pkg update
```

```bash
pkg upgrade
```

```bash
pkg install python
```

```bash
pip install yt-dlp[default]
```

Optional: Install FFmpeg

```bash
pkg install ffmpeg
```

### iOS (iSH)

Install iSH from App Store
In iSH terminal:

```bash
apk update
```

```bash
apk add python3 py3-pip
```

```bash
pip3 install yt-dlp[default]
```

### Chrome OS (Linux container)

Enable Linux development environment
In Linux terminal:

```bash
sudo apt update
```

```bash
sudo apt install python3-pip
```

```bash
pip3 install --user yt-dlp[default]
```

## Installation Verification

### Basic Verification

Check version

```bash
yt-dlp --version
```

Test functionality

```bash
yt-dlp --simulate "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Check available extractors

```bash
yt-dlp --list-extractors | head -20
```

### Comprehensive Testing

Test format listing

```bash
yt-dlp -F "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

Test with different sites

```bash
yt-dlp --simulate "https://vimeo.com/123456789"
```

```bash
yt-dlp --simulate "https://soundcloud.com/example/track"
```

Check post-processing capabilities

```bash
yt-dlp --list-post-processors
```

## Choosing the Right Installation Method

### For Beginners

1. **Windows**: Use release binary (`yt-dlp.exe`)
2. **macOS**: Use Homebrew (`brew install yt-dlp`)
3. **Linux**: Use distribution package manager or release binary

### For Power Users

1. **Python developers**: Use pip with virtual environments
2. **System administrators**: Use package managers for easier updates
3. **Content creators**: Use pip for latest features and customization

### For Developers

1. **Contributing**: Build from source with development installation
2. **Testing**: Use pip with pre-release versions
3. **Integration**: Use pip in virtual environments

## Keeping yt-dlp Updated

### Binary Installations

Self-update (recommended)

```bash
yt-dlp -U
```

Check for updates without installing

```bash
yt-dlp --update --simulate
```

### pip Installations

Update to latest stable

```bash
python3 -m pip install -U yt-dlp[default]
```

Update to development version

```bash
python3 -m pip install -U --pre yt-dlp[default]
```

### Package Manager Installations

Follow your package manager's update process

macOS Homebrew

```bash
brew upgrade yt-dlp
```

Windows Chocolatey

```powershell
choco upgrade yt-dlp
```

Debian/Ubuntu

```bash
sudo apt upgrade yt-dlp
```

Arch Linux

```bash
sudo pacman -Syu yt-dlp
```

## Troubleshooting Installation Issues

### Common Problems

1. **Permission denied**: Use `--user` flag with pip or virtual environments
2. **Command not found**: Check PATH environment variable
3. **SSL errors**: Update certificates or use `--trusted-host` with pip
4. **Dependency conflicts**: Use virtual environments or minimal installation

### Getting Help

- **Official documentation**: [GitHub repository](https://github.com/yt-dlp/yt-dlp)
- **Issue tracker**: Report bugs and get support
- **Community forums**: Reddit, Discord, and other community platforms

Choose the installation method that best fits your technical comfort level, system requirements, and intended use case. Each method has its advantages, and you can always switch between methods if your needs change.
