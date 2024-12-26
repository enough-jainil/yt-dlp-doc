---
sidebar_position: 3
---

# Installing yt-dlp via Third-party Package Managers

Third-party package managers offer a convenient way to install and update yt-dlp on various operating systems. Here are instructions for some popular package managers:

## Windows

### Chocolatey

1. Install Chocolatey if you haven't already.
2. Open an administrator PowerShell and run:

   ```sh
   choco install yt-dlp
   ```

3. To update:

   ```sh
   choco upgrade yt-dlp
   ```

### Scoop

1. Install Scoop if you haven't already.
2. Open PowerShell and run:

   ```sh
   scoop install yt-dlp
   ```

3. To update:

   ```sh
   scoop update yt-dlp
   ```

### winget

1. Open PowerShell and run:

   ```sh
   winget install yt-dlp
   ```

2. To update:

   ```sh
   winget upgrade yt-dlp
   ```

## macOS

### Homebrew

1. Install Homebrew if you haven't already.
2. Open Terminal and run:

   ```sh
   brew install yt-dlp
   ```

3. To update:

   ```sh
   brew upgrade yt-dlp
   ```

### MacPorts

1. Install MacPorts if you haven't already.
2. Open Terminal and run:

   ```sh
   sudo port install yt-dlp
   ```

3. To update:

   ```sh
   sudo port selfupdate
   sudo port upgrade yt-dlp
   ```

## Linux

### Arch Linux (pacman)

```sh
sudo pacman -S yt-dlp
```

### Debian/Ubuntu-based distributions (APT)

1. Add the PPA:

   ```sh
   sudo add-apt-repository ppa:tomtomtom/yt-dlp
   ```

2. Update and install:

   ```sh
   sudo apt update
   sudo apt install yt-dlp
   ```

### Fedora (DNF)

```sh
sudo dnf install yt-dlp
```

### Alpine Linux

```sh
doas apk add yt-dlp
```

## Verifying Installation

After installation, verify yt-dlp is working:

```sh
yt-dlp --version
```

## Notes and Considerations

- Package managers may not always have the latest version of yt-dlp immediately after a new release.
- Some package managers require root/administrator privileges to install or update packages.
- Using package managers integrates yt-dlp with your system's update process, making it easier to keep up-to-date.
- If you encounter issues, check the package manager's documentation or community forums for troubleshooting.

## Advantages of Using Package Managers

- Simplified installation process
- Easy updates and version management
- Automatic handling of dependencies
- Integration with system-wide package management

Remember to keep your package manager and system up-to-date to ensure you have access to the latest versions and security updates for yt-dlp and other software.
