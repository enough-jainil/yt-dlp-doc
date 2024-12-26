---
sidebar_position: 1
---

# Methods of Installation

yt-dlp can be installed on various platforms using different methods. Choose the one that best suits your system and preferences.

## 1. Using Release Binaries

The simplest method for most users is to download pre-compiled binaries.

### Windows

1. Download the latest `yt-dlp.exe` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Place it in a directory within your PATH.

### macOS

1. Download `yt-dlp_macos` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Rename it to `yt-dlp` and make it executable:

   ```sh
   chmod a+rx yt-dlp
   ```

3. Move it to a directory in your PATH, e.g.:

   ```sh
   mv yt-dlp /usr/local/bin
   ```

### Linux

1. Download `yt-dlp` from the [releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Make it executable:

   ```sh
   chmod a+rx yt-dlp
   ```

3. Move it to a directory in your PATH, e.g.:

   ```sh
   sudo mv yt-dlp /usr/local/bin
   ```

## 2. Using pip (Python Package Manager)

For Python users, installing via pip is recommended:

```sh
python3 -m pip install -U yt-dlp
```

To install the latest development version:

```sh
python3 -m pip install -U --pre yt-dlp
```

## 3. Third-party Package Managers

### Homebrew (macOS and Linux)

```sh
brew install yt-dlp
```

### Chocolatey (Windows)

```sh
choco install yt-dlp
```

### Scoop (Windows)

```sh
scoop install yt-dlp
```

### apt (Debian-based Linux)

```sh
sudo add-apt-repository ppa:tomtomtom/yt-dlp
sudo apt update
sudo apt install yt-dlp
```

## 4. Building from Source

For advanced users who want the latest features:

1. Clone the repository:

   ```sh
   git clone https://github.com/yt-dlp/yt-dlp.git
   ```

2. Navigate to the directory:

   ```sh
   cd yt-dlp
   ```

3. Install dependencies:

   ```sh
   python3 -m pip install -U -r requirements.txt
   ```

4. Run:

   ```sh
   python3 setup.py install
   ```

## Updating yt-dlp

### For Binary Installations

```sh
yt-dlp -U
```

### For pip Installations

```sh
python3 -m pip install -U yt-dlp
```

### For Package Managers

Use the manager's update command.

## Verifying Installation

After installation, verify it's working:

```sh
yt-dlp --version
```

This should display the version number of yt-dlp.

Remember to keep yt-dlp updated regularly to ensure you have the latest features and bug fixes.
