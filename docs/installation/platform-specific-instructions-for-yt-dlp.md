---
sidebar_position: 5
---

# Platform-specific Instructions for yt-dlp

This guide provides detailed instructions for installing and using yt-dlp on various platforms.

## Windows

### Installation

#### Using the Executable:

1. Download `yt-dlp.exe` from the [official releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Place it in a folder that's in your system's PATH (e.g., `C:\Windows`).

#### Using Chocolatey:

```sh
choco install yt-dlp
```

#### Using Scoop:

```sh
scoop install yt-dlp
```

### Usage

Open Command Prompt or PowerShell and run:

```sh
yt-dlp [OPTIONS] URL
```

### Notes

- Install Microsoft Visual C++ 2010 Redistributable Package (x86) if you encounter `MSVCR100.dll` errors.

## macOS

### Installation

#### Using Homebrew:

```sh
brew install yt-dlp
```

#### Using the Binary:

1. Download `yt-dlp_macos` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Rename it to `yt-dlp` and make it executable:

   ```sh
   chmod a+rx yt-dlp
   ```

3. Move it to a directory in your PATH:

   ```sh
   sudo mv yt-dlp /usr/local/bin/
   ```

### Usage

Open Terminal and run:

```sh
yt-dlp [OPTIONS] URL
```

### Notes

- Install FFmpeg for full functionality:

  ```sh
  brew install ffmpeg
  ```

## Linux

### Installation

#### Using Package Managers:

##### Debian/Ubuntu:

```sh
sudo add-apt-repository ppa:tomtomtom/yt-dlp
sudo apt update
sudo apt install yt-dlp
```

##### Arch Linux:

```sh
sudo pacman -S yt-dlp
```

#### Using the Binary:

1. Download `yt-dlp` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Make it executable and move to a directory in your PATH:

   ```sh
   chmod a+rx yt-dlp
   sudo mv yt-dlp /usr/local/bin/
   ```

### Usage

Open a terminal and run:

```sh
yt-dlp [OPTIONS] URL
```

### Notes

- Install FFmpeg for full functionality:

  ```sh
  sudo apt install ffmpeg
  ```

  (or equivalent for your distribution)

## Android

### Installation

1. Install Termux from F-Droid or Google Play Store.
2. Open Termux and run:

   ```sh
   pkg update && pkg upgrade
   pkg install python
   pip install yt-dlp
   ```

### Usage

In Termux, run:

```sh
yt-dlp [OPTIONS] URL
```

### Notes

- To access device storage:

  ```sh
  termux-setup-storage
  ```

- Install FFmpeg:

  ```sh
  pkg install ffmpeg
  ```

## General Tips

- Update yt-dlp regularly:

  ```sh
  yt-dlp -U
  ```

- Check installed version:

  ```sh
  yt-dlp --version
  ```

- For all platforms, consider using a virtual environment if you're using pip to install yt-dlp.

- Remember to always download yt-dlp from official sources to ensure security and reliability.

Each platform may have specific nuances, so consult the official documentation for any platform-specific issues or advanced configurations.
