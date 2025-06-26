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

```cmd
# System-wide (requires admin rights)
C:\Windows\System32\

# User-specific
C:\Users\%USERNAME%\AppData\Local\Microsoft\WindowsApps\

# Custom directory (add to PATH)
C:\Tools\yt-dlp\
```

#### Adding to PATH

```cmd
# Add directory to PATH permanently
setx PATH "%PATH%;C:\Tools\yt-dlp"
```

### macOS

#### Intel Macs

1. **Download**: Get `yt-dlp_macos` from [releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. **Rename and Make Executable**:
   ```bash
   mv yt-dlp_macos yt-dlp
   chmod +x yt-dlp
   ```
3. **Install System-wide**:
   ```bash
   sudo mv yt-dlp /usr/local/bin/
   ```

#### Apple Silicon (M1/M2) Macs

1. **Download**: Get `yt-dlp_macos` (universal binary works on both architectures)
2. **Handle Security Warnings**:
   ```bash
   # Remove quarantine attribute if needed
   xattr -d com.apple.quarantine yt-dlp
   ```
3. **Install**:
   ```bash
   chmod +x yt-dlp
   sudo mv yt-dlp /usr/local/bin/
   ```

### Linux

#### Universal Linux Binary

1. **Download**: Get `yt-dlp` from [releases page](https://github.com/yt-dlp/yt-dlp/releases)
2. **Make Executable and Install**:
   ```bash
   chmod +x yt-dlp
   sudo mv yt-dlp /usr/local/bin/
   ```

#### Alternative Installation Locations

```bash
# User-specific installation (no sudo required)
mkdir -p ~/.local/bin
mv yt-dlp ~/.local/bin/
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Auto-update Feature

All binary installations support self-updating:

```bash
# Update to latest release
yt-dlp -U

# Update to specific version
yt-dlp -U --update-to 2023.12.30
```

## 2. Python Package Installation (pip)

Best for Python users who want the latest features and flexible installation options.

### Prerequisites

- **Python 3.9+** (CPython) or **Python 3.10+** (PyPy)
- **pip** package manager

### Basic Installation

```bash
# Standard installation with common dependencies
python3 -m pip install -U "yt-dlp[default]"

# Minimal installation (core features only)
python3 -m pip install -U yt-dlp
```

### Advanced Installation Options

```bash
# With browser impersonation support
python3 -m pip install -U "yt-dlp[default,curl-cffi]"

# Development/pre-release version
python3 -m pip install -U --pre "yt-dlp[default]"

# From GitHub master branch
python3 -m pip install -U "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz"
```

### Virtual Environment (Recommended)

```bash
# Create isolated environment
python3 -m venv yt-dlp-env
source yt-dlp-env/bin/activate  # Linux/macOS
# yt-dlp-env\Scripts\activate   # Windows

# Install in virtual environment
python3 -m pip install -U "yt-dlp[default]"
```

### Using pipx (Recommended for CLI Tools)

```bash
# Install pipx
python3 -m pip install --user pipx

# Install yt-dlp with pipx
pipx install "yt-dlp[default]"
```

## 3. Third-party Package Managers

Convenient for users who prefer system package managers for software management.

### Windows Package Managers

#### Chocolatey

```powershell
# Install Chocolatey (if not already installed)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install yt-dlp
choco install yt-dlp

# Update
choco upgrade yt-dlp
```

#### Scoop

```powershell
# Install Scoop (if not already installed)
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# Install yt-dlp
scoop install yt-dlp

# Update
scoop update yt-dlp
```

#### winget (Windows Package Manager)

```cmd
# Install
winget install yt-dlp.yt-dlp

# Update
winget upgrade yt-dlp.yt-dlp
```

### macOS Package Managers

#### Homebrew

```bash
# Install Homebrew (if not already installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install yt-dlp
brew install yt-dlp

# Update
brew upgrade yt-dlp
```

#### MacPorts

```bash
# Install MacPorts (requires separate installation)
# Then install yt-dlp
sudo port install yt-dlp

# Update
sudo port selfupdate
sudo port upgrade yt-dlp
```

### Linux Package Managers

#### Debian/Ubuntu (APT)

```bash
# Add official PPA (most up-to-date)
sudo add-apt-repository ppa:yt-dlp/stable
sudo apt update
sudo apt install yt-dlp

# Alternative: Use distribution package (may be older)
sudo apt install yt-dlp
```

#### Fedora/CentOS/RHEL (DNF/YUM)

```bash
# Fedora
sudo dnf install yt-dlp

# Enable additional repositories if needed
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
```

#### Arch Linux (pacman)

```bash
# Official repository
sudo pacman -S yt-dlp

# AUR for development versions
yay -S yt-dlp-git
```

#### openSUSE (zypper)

```bash
sudo zypper install yt-dlp
```

#### Alpine Linux (apk)

```bash
# Add community repository
echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories

# Install
doas apk add yt-dlp
```

## 4. Building from Source

For developers and users who want the absolute latest features.

### Prerequisites

```bash
# Install build dependencies
python3 -m pip install -U pip setuptools wheel hatchling
```

### Standard Build

```bash
# Clone repository
git clone https://github.com/yt-dlp/yt-dlp.git
cd yt-dlp

# Install dependencies
python3 -m pip install -U -r requirements.txt

# Build and install
python3 -m pip install -e .
```

### Creating Standalone Executable

```bash
# Install PyInstaller
python3 -m pip install pyinstaller

# Build executable
python3 -m PyInstaller --onefile --name yt-dlp yt_dlp/__main__.py
```

### Development Installation

```bash
# Clone and install in development mode
git clone https://github.com/yt-dlp/yt-dlp.git
cd yt-dlp
python3 -m pip install -e ".[default]"
```

## 5. Container/Docker Installation

For containerized environments and isolated execution.

### Docker

```bash
# Run directly
docker run --rm -v "$(pwd):/downloads" jauderho/yt-dlp:latest [OPTIONS] URL

# Build custom image
cat > Dockerfile << 'EOF'
FROM python:3.11-alpine
RUN pip install yt-dlp[default]
ENTRYPOINT ["yt-dlp"]
EOF

docker build -t my-yt-dlp .
docker run --rm -v "$(pwd):/downloads" my-yt-dlp [OPTIONS] URL
```

### Podman

```bash
# Similar to Docker
podman run --rm -v "$(pwd):/downloads:Z" jauderho/yt-dlp:latest [OPTIONS] URL
```

## 6. Mobile and Alternative Platforms

### Android (Termux)

```bash
# Install Termux from F-Droid
# In Termux:
pkg update && pkg upgrade
pkg install python
pip install yt-dlp[default]

# Optional: Install FFmpeg
pkg install ffmpeg
```

### iOS (iSH)

```bash
# Install iSH from App Store
# In iSH terminal:
apk update
apk add python3 py3-pip
pip3 install yt-dlp[default]
```

### Chrome OS (Linux container)

```bash
# Enable Linux development environment
# In Linux terminal:
sudo apt update
sudo apt install python3-pip
pip3 install --user yt-dlp[default]
```

## Installation Verification

### Basic Verification

```bash
# Check version
yt-dlp --version

# Test functionality
yt-dlp --simulate "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# Check available extractors
yt-dlp --list-extractors | head -20
```

### Comprehensive Testing

```bash
# Test format listing
yt-dlp -F "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

# Test with different sites
yt-dlp --simulate "https://vimeo.com/123456789"
yt-dlp --simulate "https://soundcloud.com/example/track"

# Check post-processing capabilities
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

```bash
# Self-update (recommended)
yt-dlp -U

# Check for updates without installing
yt-dlp --update --simulate
```

### pip Installations

```bash
# Update to latest stable
python3 -m pip install -U yt-dlp[default]

# Update to development version
python3 -m pip install -U --pre yt-dlp[default]
```

### Package Manager Installations

```bash
# Follow your package manager's update process
brew upgrade yt-dlp           # macOS Homebrew
choco upgrade yt-dlp          # Windows Chocolatey
sudo apt upgrade yt-dlp       # Debian/Ubuntu
sudo pacman -Syu yt-dlp       # Arch Linux
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
