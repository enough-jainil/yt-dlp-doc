"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[2303],{983:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var s=n(4848),o=n(8453);const l={sidebar_position:2},t="Common Options and Flags for yt-dlp",d={id:"Basic Usage/common-options-and-flags",title:"Common Options and Flags for yt-dlp",description:"yt-dlp offers a wide range of options to customize your download experience. This page covers some of the most commonly used options and flags.",source:"@site/docs/Basic Usage/common-options-and-flags.md",sourceDirName:"Basic Usage",slug:"/Basic Usage/common-options-and-flags",permalink:"/docs/Basic Usage/common-options-and-flags",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"yt-dlp Command-line Syntax",permalink:"/docs/Basic Usage/command-line-syntax"},next:{title:"Output Templates in yt-dlp",permalink:"/docs/Basic Usage/output-templates"}},r={},a=[{value:"General Options",id:"general-options",level:2},{value:"Video Selection",id:"video-selection",level:2},{value:"Download Options",id:"download-options",level:2},{value:"Filesystem Options",id:"filesystem-options",level:2},{value:"Thumbnail Options",id:"thumbnail-options",level:2},{value:"Verbosity / Simulation Options",id:"verbosity--simulation-options",level:2},{value:"Workarounds",id:"workarounds",level:2},{value:"Video Format Options",id:"video-format-options",level:2}];function c(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"common-options-and-flags-for-yt-dlp",children:"Common Options and Flags for yt-dlp"})}),"\n",(0,s.jsx)(i.p,{children:"yt-dlp offers a wide range of options to customize your download experience. This page covers some of the most commonly used options and flags."}),"\n",(0,s.jsx)(i.h2,{id:"general-options",children:"General Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-h, --help"}),": Display the help message and exit"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--version"}),": Print program version and exit"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-U, --update"}),": Update this program to the latest version"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-i, --ignore-errors"}),": Continue on download errors, e.g., to skip unavailable videos in a playlist"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-abort-on-error"}),": Continue with next video on extraction errors"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--default-search PREFIX"}),': Use this prefix for unqualified URLs (e.g., "ytsearch:")']}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"video-selection",children:"Video Selection"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--playlist-start NUMBER"}),": Playlist video to start at (default is 1)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--playlist-end NUMBER"}),": Playlist video to end at (default is last)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--playlist-items ITEM_SPEC"}),": Comma-separated playlist_index of the items to download"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--match-filter FILTER"}),': Generic video filter (e.g., "!is_live", "like_count>?100")']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-playlist"}),": Download only the video, if the URL refers to a video and a playlist"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--yes-playlist"}),": Download the playlist, if the URL refers to a video and a playlist"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--age-limit YEARS"}),": Download only videos suitable for the given age"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"download-options",children:"Download Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-f FORMAT, --format FORMAT"}),': Video format code, see "FORMAT SELECTION" for more details']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-F, --list-formats"}),": List all available formats of requested videos"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--merge-output-format FORMAT"}),": If a merge is required, output to given container format"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-r RATE, --limit-rate RATE"}),": Maximum download rate in bytes per second (e.g., 50K or 4.2M)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-R RETRIES, --retries RETRIES"}),': Number of retries (default is 10), or "infinite"']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--fragment-retries RETRIES"}),": Number of retries for a fragment (default is 10)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--skip-unavailable-fragments"}),": Skip unavailable fragments (default)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--abort-on-unavailable-fragment"}),": Abort downloading when a fragment is unavailable"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--keep-fragments"}),": Keep downloaded fragments on disk after downloading is finished"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--buffer-size SIZE"}),": Size of download buffer (e.g., 1024 or 16K) (default is 1024)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-resize-buffer"}),": Do not automatically adjust the buffer size"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"filesystem-options",children:"Filesystem Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-o TEMPLATE, --output TEMPLATE"}),': Output filename template, see "OUTPUT TEMPLATE" for details']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--restrict-filenames"}),': Restrict filenames to only ASCII characters, and avoid "&" and spaces']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-w, --no-overwrites"}),": Do not overwrite files"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-c, --continue"}),": Force resume of partially downloaded files"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"thumbnail-options",children:"Thumbnail Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--write-thumbnail"}),": Write thumbnail image to disk"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--write-all-thumbnails"}),": Write all thumbnail image formats to disk"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--list-thumbnails"}),": List all available thumbnails of each video"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"verbosity--simulation-options",children:"Verbosity / Simulation Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-q, --quiet"}),": Activate quiet mode"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-warnings"}),": Ignore warnings"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-s, --simulate"}),": Do not download the video and do not write anything to disk"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--skip-download"}),": Do not download the video"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-g, --get-url"}),": Simulate, quiet but print URL"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-e, --get-title"}),": Simulate, quiet but print title"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-id"}),": Simulate, quiet but print id"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-thumbnail"}),": Simulate, quiet but print thumbnail URL"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-description"}),": Simulate, quiet but print video description"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-duration"}),": Simulate, quiet but print video length"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-filename"}),": Simulate, quiet but print output filename"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--get-format"}),": Simulate, quiet but print output format"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-j, --dump-json"}),": Simulate, quiet but print JSON information"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-J, --dump-single-json"}),": Simulate, quiet but print JSON information for each command-line argument"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"workarounds",children:"Workarounds"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-check-certificate"}),": Suppress HTTPS certificate validation"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--prefer-insecure"}),": Use an unencrypted connection to retrieve information about the video"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--user-agent UA"}),": Specify a custom user agent"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--referer URL"}),": Specify a custom referer, use if the video access is restricted to one domain"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--add-header FIELD:VALUE"}),": Specify a custom HTTP header and its value"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--bidi-workaround"}),": Work around terminals that lack bidirectional text support"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"video-format-options",children:"Video Format Options"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"-f FORMAT, --format FORMAT"}),': Video format code, see the "FORMAT SELECTION" for more details']}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--all-formats"}),": Download all available video formats"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--prefer-free-formats"}),": Prefer free video formats unless a specific one is requested"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--no-prefer-free-formats"}),": Don't prefer free video formats"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--youtube-skip-dash-manifest"}),": Do not download the DASH manifests and related data on YouTube videos"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"--merge-output-format FORMAT"}),": If a merge is required, output to given container format"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Remember to consult the full documentation or use ",(0,s.jsx)(i.code,{children:"yt-dlp --help"})," for a complete list of options and more detailed explanations."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>d});var s=n(6540);const o={},l=s.createContext(o);function t(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);