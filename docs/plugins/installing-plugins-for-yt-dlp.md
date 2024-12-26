---
sidebar_position: 2
---

# Installing Plugins for yt-dlp

This guide will walk you through the process of installing plugins to extend yt-dlp's functionality.

## Understanding yt-dlp Plugins

Plugins are additional pieces of code that add new features or support for websites to yt-dlp without modifying the core software.

## Types of Plugins

- **Extractor Plugins**: Add support for new websites.
- **PostProcessor Plugins**: Add new post-download processing capabilities.

## Finding Plugins

- Check the yt-dlp wiki for a list of known plugins.
- Search GitHub for repositories with the `yt-dlp-plugins` topic.
- Look for recommendations in yt-dlp community forums.

## Installation Methods

### 1. Using pip (Recommended for Packaged Plugins)

If the plugin is available as a Python package:

```sh
pip install yt-dlp-plugin-name
```

Replace `yt-dlp-plugin-name` with the actual name of the plugin package.

### 2. Manual Installation

For plugins not packaged for pip:

1. Download the plugin file (usually a `.py` file).
2. Place it in one of these directories:
   - `yt_dlp_plugins/extractor/` for extractor plugins
   - `yt_dlp_plugins/postprocessor/` for post-processor plugins

These directories should be located in one of the following:

- Your yt-dlp configuration directory (e.g., `~/.config/yt-dlp/`)
- The same directory as the yt-dlp executable
- A directory in your Python path

## Step-by-Step Installation Guide

### For pip Installation

1. Open a terminal or command prompt.
2. Ensure yt-dlp is installed and up to date:

```sh
pip install -U yt-dlp
```

3. Install the plugin:

```sh
pip install yt-dlp-plugin-name
```

4. Verify the installation:

```sh
yt-dlp --version
```

Look for the plugin name in the output.

### For Manual Installation

1. Download the plugin file from the source (e.g., GitHub repository).
2. Identify the correct plugin directory:

```sh
yt-dlp --config-location
```

This will show you the configuration directory.

3. Create the plugin directory if it doesn't exist:

```sh
mkdir -p ~/.config/yt-dlp/yt_dlp_plugins/extractor
```

(Replace `extractor` with `postprocessor` for post-processor plugins)

4. Move the downloaded plugin file to this directory:

```sh
mv downloaded_plugin.py ~/.config/yt-dlp/yt_dlp_plugins/extractor/
```

5. Verify the installation:

```sh
yt-dlp --verbose
```

Look for lines indicating the plugin was loaded.

## Verifying Plugin Installation

Run yt-dlp with the `--verbose` flag:

```sh
yt-dlp --verbose
```

Look for lines in the output that mention loading plugins.

## Troubleshooting

If the plugin doesn't appear to be working:

- Ensure you're using the latest version of yt-dlp.
- Check that the plugin is compatible with your yt-dlp version.
- Verify the plugin file is in the correct directory.
- Look for error messages in the verbose output.
- Consult the plugin's documentation or issues tracker.

## Using Installed Plugins

- **Extractor plugins** are automatically used when you try to download from a supported site.
- **PostProcessor plugins** often require explicit activation:

```sh
yt-dlp --use-postprocessor PluginName URL
```

## Updating Plugins

### For pip-installed plugins

```sh
pip install -U yt-dlp-plugin-name
```

### For manually installed plugins

Replace the old file with the new version.

## Removing Plugins

### For pip-installed plugins

```sh
pip uninstall yt-dlp-plugin-name
```

### For manually installed plugins

Delete the plugin file from the plugin directory.

## Security Considerations

- Only install plugins from trusted sources.
- Be aware that plugins have the same system access as yt-dlp itself.
- Review the plugin code if you have security concerns.

## Managing Multiple Plugins

- Keep track of installed plugins and their sources.
- Regularly check for updates to ensure compatibility and security.
- Be mindful of potential conflicts between plugins.

By following this guide, you should be able to successfully install and manage plugins for yt-dlp, enhancing its functionality to meet your specific needs. Remember to always use plugins responsibly and in compliance with the terms of service of the websites you're interacting with.
