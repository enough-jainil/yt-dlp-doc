import Heading from "@theme/Heading";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Powerful Video Downloading",
    Svg: require("@site/static/img/Downloading.svg").default,
    description: (
      <>
        yt-dlp offers advanced capabilities for downloading videos from YouTube
        and thousands of other sites, with support for various formats and
        quality options.
      </>
    ),
  },
  {
    title: "Extensive Site Compatibility",
    Svg: require("@site/static/img/Compatibility.svg").default,
    description: (
      <>
        Beyond YouTube, yt-dlp supports a vast array of video hosting platforms,
        making it a versatile tool for content creators and enthusiasts alike.
      </>
    ),
  },
  {
    title: "Open Source and Customizable",
    Svg: require("@site/static/img/Source.svg").default,
    description: (
      <>
        As an open-source project, yt-dlp can be extended and customized to fit
        your specific needs. Contribute to its development or create your own
        plugins and features.
      </>
    ),
  },
  {
    title: "Advanced Format Selection",
    Svg: require("@site/static/img/Format.svg").default,
    description: (
      <>
        Choose from a wide range of video and audio formats, resolutions, and
        codecs. yt-dlp's intelligent format selection ensures you get the best
        quality available.
      </>
    ),
  },
  {
    title: "Playlist and Channel Support",
    Svg: require("@site/static/img/Playlist.svg").default,
    description: (
      <>
        Easily download entire playlists, channels, or user uploads with a
        single command. yt-dlp handles pagination and extraction efficiently.
      </>
    ),
  },

  {
    title: "Metadata Extraction",
    Svg: require("@site/static/img/Metadata.svg").default,
    description: (
      <>
        Extract rich metadata from videos, including titles, descriptions,
        thumbnails, and more. Perfect for archiving or integrating with media
        management tools.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="flex justify-center">
        <Svg className="h-48 w-48" role="img" />
      </div>
      <div className="text-center px-4">
        <Heading as="h3" className="text-xl font-semibold mt-4">
          {title}
        </Heading>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="flex flex-col items-center py-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
