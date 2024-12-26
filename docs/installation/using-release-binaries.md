---
sidebar_position: 2
---

# Using Release Binaries

Release binaries are pre-compiled executables that allow you to run yt-dlp without installing Python or any dependencies. This method is recommended for most users due to its simplicity.

## Downloading Release Binaries

### For Windows (64-bit)

1. Visit the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Download the file named `yt-dlp.exe`.
3. Place the downloaded file in a directory of your choice.

### For macOS

1. Go to the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Download the file named `yt-dlp_macos`.
3. Rename the downloaded file to `yt-dlp`.

### For Linux

1. Navigate to the [yt-dlp releases page](https://github.com/yt-dlp/yt-dlp/releases).
2. Download the file simply named `yt-dlp`.

## Installation Steps

### Windows

1. Move `yt-dlp.exe` to a directory in your system PATH (e.g., `C:\Windows`).
2. Alternatively, you can add the directory containing `yt-dlp.exe` to your PATH.

### UNIX-like Systems (MacOS, Linux, BSD)

You can install yt-dlp into your `$PATH` (e.g., `~/.local/bin`) using any of these commands:

```sh
# Using curl
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o ~/.local/bin/yt-dlp
chmod a+rx ~/.local/bin/yt-dlp

# Using wget
wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O ~/.local/bin/yt-dlp
chmod a+rx ~/.local/bin/yt-dlp

# Using aria2c
aria2c https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp --dir ~/.local/bin -o yt-dlp
chmod a+rx ~/.local/bin/yt-dlp
```

## Verifying Installation

To ensure yt-dlp is correctly installed:

1. Open a command prompt or terminal.
2. Type the following command:

   ```sh
   yt-dlp --version
   ```

You should see the version number of yt-dlp displayed.

## Updating yt-dlp

To update yt-dlp to the latest version:

1. Open a command prompt or terminal.
2. Run the following command:

   ```sh
   yt-dlp -U
   ```

## Troubleshooting

- If you encounter a "command not found" error, ensure the binary is in a directory listed in your system's PATH.
- On Windows, you may need to restart your command prompt after adding yt-dlp to the PATH.
- For macOS/Linux, if you get a permission error when moving the file, try using `sudo`.

## Additional Notes

- Release binaries are self-contained and do not require Python to be installed on your system.
- Always download binaries from the official yt-dlp GitHub repository to ensure security.
- If you need features not yet available in the latest release, consider using the nightly builds or installing from source.

By using release binaries, you can quickly get started with yt-dlp without worrying about dependencies or complex installation procedures.
