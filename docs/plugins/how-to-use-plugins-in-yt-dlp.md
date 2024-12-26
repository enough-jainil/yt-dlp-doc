---
sidebar_position: 1
---

# How to Use Plugins in yt-dlp

yt-dlp supports plugins, allowing users to extend its functionality without modifying the core code. This guide covers how to find, install, and use plugins with yt-dlp.

## Understanding yt-dlp Plugins

Plugins can add new extractors for websites or implement post-processing features. They are Python modules that yt-dlp loads dynamically.

## Types of Plugins

- **Extractor Plugins**: Add support for new websites.
- **PostProcessor Plugins**: Implement new post-download processing features.

## Finding Plugins

- Check the yt-dlp wiki for a list of known plugins.
- Search GitHub for repositories with the `yt-dlp-plugins` topic.
- Community forums and discussions may mention useful plugins.

## Installing Plugins

### Method 1: Manual Installation

1. Download the plugin file (usually a `.py` file).
2. Place it in one of these directories:
   - `yt_dlp_plugins/extractor/` for extractor plugins
   - `yt_dlp_plugins/postprocessor/` for post-processor plugins

These directories should be in one of the following locations:

- Your yt-dlp configuration directory (e.g., `~/.config/yt-dlp/`)
- The same directory as the yt-dlp executable
- A directory in your Python path

### Method 2: Using pip (if the plugin is packaged)

```sh
pip install yt-dlp-plugin-name
```

Replace `yt-dlp-plugin-name` with the actual name of the plugin package.

## Enabling Plugins

- **Extractor plugins** are automatically enabled when installed correctly.
- For **PostProcessor plugins**, use the `--use-postprocessor` option:

```sh
yt-dlp --use-postprocessor PluginName URL
```

## Verifying Plugin Installation

Run yt-dlp with the `--verbose` flag to see loaded plugins:

```sh
yt-dlp --verbose
```

Look for lines indicating plugin loading in the output.

## Example Usage

### Using an Extractor Plugin

```sh
yt-dlp https://supported-by-plugin-site.com/video
```

### Using a Post-Processor Plugin

```sh
yt-dlp --use-postprocessor ExamplePostProcessor URL
```

## Plugin-specific Options

Some plugins may introduce new command-line options. Refer to the plugin's documentation for details.

## Troubleshooting Plugin Issues

- Ensure the plugin is compatible with your yt-dlp version.
- Check if the plugin is correctly placed in the right directory.
- Look for error messages in the verbose output.
- Consult the plugin's documentation or issues tracker.

## Developing Plugins

If you're interested in creating your own plugin:

- Study the yt-dlp documentation on plugin development.
- Look at existing plugins for examples.
- Follow yt-dlp's coding standards and guidelines.

## Security Considerations

- Only install plugins from trusted sources.
- Be aware that plugins have the same level of system access as yt-dlp itself.
- Review the plugin code if you have security concerns.

## Keeping Plugins Updated

- Regularly check for updates to your installed plugins.
- Some pip-installed plugins can be updated with:

```sh
pip install --upgrade yt-dlp-plugin-name
```

- For manually installed plugins, check the source repository for updates.

## Disabling Plugins

### To Temporarily Disable a Plugin

- For extractors: Use the `--force-generic-extractor` option.
- For post-processors: Simply don't use the `--use-postprocessor` option.

### To Permanently Disable

Remove the plugin file from the plugin directory.

Plugins extend the capabilities of yt-dlp, allowing you to download from more sites or process downloads in new ways. By understanding how to find, install, and use plugins, you can significantly enhance your yt-dlp experience.
