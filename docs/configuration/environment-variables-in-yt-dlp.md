---
sidebar_position: 2
---

# Environment Variables in yt-dlp

Environment variables provide another way to configure yt-dlp without modifying configuration files or using command-line arguments. They can be particularly useful for setting sensitive information or system-specific configurations.

## Using Environment Variables

yt-dlp recognizes environment variables prefixed with `YTD_LP_`. The rest of the variable name should be the uppercase version of the corresponding command-line option, with dashes replaced by underscores.

## Common Environment Variables

Here are some commonly used environment variables for yt-dlp:

- `YTD_LP_USERNAME`: Set the default username for sites requiring authentication

  ```sh
  export YTD_LP_USERNAME=your_username
  ```

- `YTD_LP_PASSWORD`: Set the default password

  ```sh
  export YTD_LP_PASSWORD=your_password
  ```

- `YTD_LP_PROXY`: Specify a default proxy

  ```sh
  export YTD_LP_PROXY=socks5://127.0.0.1:9150
  ```

- `YTD_LP_FORMAT`: Set the default download format

  ```sh
  export YTD_LP_FORMAT="bestvideo+bestaudio/best"
  ```

- `YTD_LP_OUTPUT_TEMPLATE`: Define the default output template

  ```sh
  export YTD_LP_OUTPUT_TEMPLATE="%(title)s-%(id)s.%(ext)s"
  ```

- `YTD_LP_CACHEDIR`: Specify the cache directory

  ```sh
  export YTD_LP_CACHEDIR="/path/to/cache"
  ```

## Setting Environment Variables

### On Unix-like Systems (Linux, macOS)

#### Temporarily

```sh
export YTD_LP_VARIABLE_NAME=value
```

#### Permanently (add to `~/.bashrc`, `~/.zshrc`, or equivalent)

```sh
echo 'export YTD_LP_VARIABLE_NAME=value' >> ~/.bashrc
```

### On Windows

#### Temporarily (Command Prompt)

```sh
set YTD_LP_VARIABLE_NAME=value
```

#### Permanently (System Properties > Environment Variables)

1. Open System Properties.
2. Go to the Advanced tab and click on Environment Variables.
3. Add or edit the environment variable in the System variables or User variables section.

## Priority of Configuration Methods

The order of precedence for configuration methods in yt-dlp is:

1. Command-line arguments
2. Environment variables
3. Configuration files
4. Default values

This means environment variables will override settings in configuration files but can be overridden by command-line arguments.

## Examples of Using Environment Variables

### Setting up a Default Proxy and Format

```sh
export YTD_LP_PROXY="socks5://127.0.0.1:9150"
export YTD_LP_FORMAT="bestvideo[height<=1080]+bestaudio/best"
yt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### Configuring Default Authentication

```sh
export YTD_LP_USERNAME="your_username"
export YTD_LP_PASSWORD="your_password"
yt-dlp https://www.example.com/private_video
```

### Setting a Custom Output Template and Download Archive

```sh
export YTD_LP_OUTPUT_TEMPLATE="~/Videos/%(uploader)s/%(title)s.%(ext)s"
export YTD_LP_DOWNLOAD_ARCHIVE="~/yt-dlp_archive.txt"
yt-dlp https://www.youtube.com/playlist?list=PLxxxxxxxx
```

## Tips for Using Environment Variables

- Use environment variables for sensitive information like passwords to avoid exposing them in command-line history or configuration files.
- Set system-specific configurations (like cache directories) using environment variables for portability across different machines.
- Remember that environment variables are global to your session or system, which might affect other instances of yt-dlp or even other applications.
- Use `yt-dlp --verbose` to see which environment variables are being used.
- For complex configurations, consider using a combination of environment variables and configuration files.

## Security Considerations

- Be cautious when setting sensitive information like passwords in environment variables, especially on shared systems.
- On Unix-like systems, environment variables set in shell configuration files (like `.bashrc`) are generally only accessible to the user who owns the file.
- On Windows, system-wide environment variables are accessible to all users of the computer.

By effectively using environment variables, you can create a flexible and secure setup for yt-dlp that adapts to different environments and use cases while keeping sensitive information protected.