---
sidebar_position: 3
---

# Installing yt-dlp Using pip

pip is the package installer for Python. It allows you to easily install and manage Python packages, including yt-dlp. This method is recommended for Python users and those who want to easily keep yt-dlp up-to-date.

## Prerequisites

- Python 3.8 or later installed on your system
- pip (usually comes installed with Python)

To check if you have Python and pip installed, open a terminal or command prompt and run:

```bash
python --version
pip --version
```

If either command is not recognized, you'll need to install Python first.

## Installation Steps

Open a terminal or command prompt.

Install yt-dlp using pip:

```bash
python3 -m pip install -U yt-dlp
```

This command installs yt-dlp and its dependencies. The `-U` flag ensures you get the latest version.

To install with all optional dependencies:

```bash
python3 -m pip install -U "yt-dlp[default]"
```

## Verifying Installation

After installation, verify that yt-dlp is correctly installed:

```bash
yt-dlp --version
```

This should display the version number of yt-dlp.

## Updating yt-dlp

To update yt-dlp to the latest stable version:

```bash
python3 -m pip install -U yt-dlp
```

## Installing Development Versions

If you want to try the latest features before they're officially released:

For the nightly build:

```bash
python3 -m pip install -U --pre yt-dlp
```

For the bleeding-edge version from the master branch:

```bash
python3 -m pip install -U pip hatchling wheel
python3 -m pip install --force-reinstall "yt-dlp[default] @ https://github.com/yt-dlp/yt-dlp/archive/master.tar.gz"
```

## Troubleshooting

If you get a "permission denied" error, try using `sudo` (on Unix-based systems) or run the command prompt as administrator (on Windows).
On some systems, you may need to use `py` or `python` instead of `python3`.
If you're having issues, ensure your Python and pip are up-to-date.

## Uninstalling

To remove yt-dlp:

```bash
python3 -m pip uninstall yt-dlp
```

## Additional Notes

Using pip allows you to easily manage yt-dlp alongside other Python packages.
This method installs yt-dlp globally on your system, making it available from any directory.
Consider using virtual environments if you need to manage multiple Python project dependencies.
Installing via pip is a flexible and powerful way to get yt-dlp up and running, especially for users familiar with Python environments.
