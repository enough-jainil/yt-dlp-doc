---
sidebar_position: 2
---

# Installing yt-dlp Using pip

pip is the recommended method for installing yt-dlp when you have Python available. This guide covers all pip installation methods, from basic installation to advanced configurations.

## Prerequisites

### Python Version Requirements

yt-dlp requires:

- **Python 3.9+** (CPython)
- **Python 3.10+** (PyPy)

Check your Python version:

```bash
python3 --version
```

```bash
python --version
```

### pip Installation

Ensure pip is installed and up-to-date:

```bash
python3 -m pip install --upgrade pip
```

```bash
python -m pip install --upgrade pip
```

## Basic Installation

### Standard Installation with Default Dependencies

The recommended installation method includes common optional dependencies:

```bash
python3 -m pip install -U "yt-dlp[default]"
```

This installs yt-dlp with:

- Core functionality
- Most common optional dependencies
- Enhanced networking capabilities
- Basic post-processing support

### Minimal Installation

For a minimal installation without optional dependencies:

```bash
python3 -m pip install -U yt-dlp
```

This provides core functionality only, without optional features like:

- Advanced networking protocols
- Browser impersonation
- Extended metadata support
- Some post-processing capabilities

## Advanced Installation Options

### Installation with Specific Feature Sets

#### Browser Impersonation Support

For sites that require browser impersonation to bypass TLS fingerprinting:

```bash
python3 -m pip install -U "yt-dlp[default,curl-cffi]"
```

This adds `curl_cffi` for impersonating Chrome, Edge, and Safari browsers.

#### Minimal with Selected Dependencies

**Install minimal version with specific optional dependencies:**

With networking enhancements only

```bash
python3 -m pip install -U "yt-dlp[networking]"
```

With post-processing support only

```bash
python3 -m pip install -U "yt-dlp[postprocessing]"
```

Multiple feature sets

```bash
python3 -m pip install -U "yt-dlp[networking,postprocessing]"
```

### Development and Pre-release Versions

#### Latest Development Version

Install the latest pre-release/development version:

```bash
python3 -m pip install -U --pre "yt-dlp[default]"
```

#### Install from GitHub Master Branch

**Get the absolute latest code from the master branch:**

Ensure build tools are available

```bash
python3 -m pip install -U pip hatchling wheel
```

Install from master branch

```bash
python3 -m pip install -U --force-reinstall "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz"
```

#### Install Specific Development Build

**Install from a specific commit or branch:**

From specific commit

```bash
python3 -m pip install -U "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/COMMIT_HASH.tar.gz"
```

From specific branch

```bash
python3 -m pip install -U "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/BRANCH_NAME.tar.gz"
```

## Virtual Environment Installation

### Creating a Virtual Environment

**Using virtual environments is recommended to avoid conflicts:**

Create virtual environment

```bash
python3 -m venv yt-dlp-env
```

Activate virtual environment
On Linux/macOS:

```bash
source yt-dlp-env/bin/activate
```

On Windows:

```cmd
yt-dlp-env\Scripts\activate
```

Install yt-dlp in virtual environment

```bash
python3 -m pip install -U "yt-dlp[default]"
```

### Using pipx (Recommended for CLI Tools)

**pipx automatically creates isolated environments for CLI applications:**

Install pipx if not available

```bash
python3 -m pip install --user pipx
```

Install yt-dlp with pipx

```bash
pipx install "yt-dlp[default]"
```

Update yt-dlp via pipx

```bash
pipx upgrade yt-dlp
```

## Platform-Specific Instructions

### Windows

#### Using Python Launcher

If you have the Python Launcher installed:

```cmd
py -m pip install -U "yt-dlp[default]"
```

#### PowerShell Execution Policy

If you encounter execution policy issues:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

```powershell
python -m pip install -U "yt-dlp[default]"
```

#### Windows Store Python

For Windows Store Python installations:

```cmd
python -m pip install -U "yt-dlp[default]"
```

### macOS

#### System Python vs Homebrew Python

Using system Python (if available)

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

Using Homebrew Python

```bash
/opt/homebrew/bin/python3 -m pip install -U "yt-dlp[default]"
```

#### macOS Catalina and Later

On newer macOS versions, you may need to use `--user` flag:

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

### Linux

#### Distribution-Specific Considerations

**Ubuntu/Debian:**

Install Python pip if not available

```bash
sudo apt update
```

```bash
sudo apt install python3-pip
```

Install yt-dlp

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

**Fedora/CentOS/RHEL:**

Install Python pip if not available

```bash
sudo dnf install python3-pip
```

Install yt-dlp

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

**Arch Linux:**

Install Python pip if not available

```bash
sudo pacman -S python-pip
```

Install yt-dlp

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

## Updating yt-dlp

### Standard Update

```bash
python3 -m pip install -U "yt-dlp[default]"
```

### Force Reinstall

If you encounter issues with updates:

```bash
python3 -m pip install -U --force-reinstall "yt-dlp[default]"
```

### Update to Latest Development Version

```bash
python3 -m pip install -U --pre "yt-dlp[default]"
```

## Troubleshooting pip Installation

### Common Issues and Solutions

#### Permission Errors

**Problem:** Permission denied during installation

**Solutions:**

Use --user flag (recommended)

```bash
python3 -m pip install --user -U "yt-dlp[default]"
```

Or use virtual environment (recommended)

```bash
python3 -m venv yt-dlp-env
```

```bash
source yt-dlp-env/bin/activate
```

```bash
python3 -m pip install -U "yt-dlp[default]"
```

#### SSL Certificate Errors

**Problem:** SSL certificate verification failures

**Solutions:**

Upgrade certificates

```bash
python3 -m pip install --upgrade certifi
```

If still failing, use trusted host (less secure)

```bash
python3 -m pip install -U "yt-dlp[default]" --trusted-host pypi.org --trusted-host pypi.python.org --trusted-host files.pythonhosted.org
```

#### Dependency Conflicts

**Problem:** Conflicting dependencies

**Solutions:**

Use virtual environment

```bash
python3 -m venv clean-env
```

```bash
source clean-env/bin/activate
```

```bash
python3 -m pip install -U "yt-dlp[default]"
```

Or use minimal installation

```bash
python3 -m pip install -U yt-dlp
```

#### Build Failures

**Problem:** Failed building wheel or compilation errors

**Solutions:**

Install build dependencies

```bash
python3 -m pip install -U pip setuptools wheel
```

Use pre-built wheels only

```bash
python3 -m pip install -U "yt-dlp[default]" --only-binary=all
```

#### PATH Issues

**Problem:** `yt-dlp` command not found after installation

**Solutions:**

Check installation location

```bash
python3 -m pip show -f yt-dlp
```

Add to PATH (Linux/macOS)

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

Use python module directly

```bash
python3 -m yt_dlp --version
```

### Verification

#### Check Installation

Check if yt-dlp is installed

```bash
python3 -m pip show yt-dlp
```

Check version

```bash
yt-dlp --version
```

```bash
python3 -m yt_dlp --version
```

#### Test Basic Functionality

Test with a simple video

```bash
yt-dlp --simulate "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

## Configuration for pip Installations

### Default Configuration

Create a configuration file for consistent behavior:

Linux/macOS

```bash
mkdir -p ~/.config/yt-dlp
```

```bash
cat > ~/.config/yt-dlp/config << 'EOF'
# Default format selection
-f 'bestvideo[height<=1080]+bestaudio/best[height<=1080]'

# Output template
-o '%(uploader)s/%(title)s.%(ext)s'

# Embed metadata
--embed-metadata
--embed-chapters
EOF
```

### Environment Variables

**Set up environment variables for pip installations:**

Add to ~/.bashrc or ~/.zshrc

```bash
export YT_DLP_CONFIG_HOME="$HOME/.config/yt-dlp"
```

```bash
export YT_DLP_CACHE_DIR="$HOME/.cache/yt-dlp"
```

## Comparison with Other Installation Methods

### pip vs Binary Installation

| Aspect                 | pip Installation             | Binary Installation      |
| ---------------------- | ---------------------------- | ------------------------ |
| **Dependencies**       | Requires Python              | Self-contained           |
| **Updates**            | `pip install -U`             | `yt-dlp -U`              |
| **Customization**      | Full Python ecosystem        | Limited                  |
| **Size**               | Smaller (uses system Python) | Larger (includes Python) |
| **Flexibility**        | High (virtual environments)  | Limited                  |
| **System Integration** | Uses system Python           | Independent              |

### When to Use pip

**Choose pip installation when:**

- You already have Python installed
- You want the latest features and updates
- You need to integrate with Python scripts
- You want to use virtual environments
- You prefer package manager control

**Choose binary installation when:**

- You don't have Python or don't want to install it
- You want a simple, self-contained solution
- You're on a system where pip installation is problematic
- You prefer standalone applications

## Advanced pip Usage

### Installing Specific Versions

Install specific version

```bash
python3 -m pip install "yt-dlp==2023.12.30"
```

Install version range

```bash
python3 -m pip install "yt-dlp>=2023.12.30,<2024.01.01"
```

Install latest version in a series

```bash
python3 -m pip install "yt-dlp~=2023.12.0"
```

### Dependency Management

Generate requirements file

```bash
python3 -m pip freeze | grep yt-dlp > requirements.txt
```

Install from requirements file

```bash
python3 -m pip install -r requirements.txt
```

Show dependency tree

```bash
python3 -m pip show yt-dlp
```

### Development Installation

**For contributing to yt-dlp development:**

Clone repository

```bash
git clone https://github.com/yt-dlp/yt-dlp.git
```

```bash
cd yt-dlp
```

Install in development mode

```bash
python3 -m pip install -e ".[default]"
```

pip installation provides the most flexible and up-to-date way to install yt-dlp, especially for users who already have Python in their workflow. The ability to use virtual environments, install development versions, and integrate with Python scripts makes it the preferred method for power users and developers.
