"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[5263],{869:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(4848),s=n(8453);const t={sidebar_position:2},l="Filtering and Sorting Formats in yt-dlp",d={id:"Advanced Features/filtering-and-sorting-formats",title:"Filtering and Sorting Formats in yt-dlp",description:"yt-dlp provides powerful options for filtering and sorting available formats, allowing you to precisely select the media quality you want to download.",source:"@site/docs/Advanced Features/filtering-and-sorting-formats.md",sourceDirName:"Advanced Features",slug:"/Advanced Features/filtering-and-sorting-formats",permalink:"/docs/Advanced Features/filtering-and-sorting-formats",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Format Selection in yt-dlp",permalink:"/docs/Advanced Features/format-selection"},next:{title:"Playlist Handling in yt-dlp",permalink:"/docs/Advanced Features/playlist-handling"}},o={},c=[{value:"Filtering Formats",id:"filtering-formats",level:2},{value:"Basic Syntax",id:"basic-syntax",level:3},{value:"Filter Operators",id:"filter-operators",level:3},{value:"Common Filters",id:"common-filters",level:3},{value:"Advanced Filtering",id:"advanced-filtering",level:3},{value:"Filtering Examples",id:"filtering-examples",level:3},{value:"Sorting Formats",id:"sorting-formats",level:2},{value:"Basic Syntax",id:"basic-syntax-1",level:3},{value:"Sorting Fields",id:"sorting-fields",level:3},{value:"Sorting Order",id:"sorting-order",level:3},{value:"Sorting Examples",id:"sorting-examples",level:3},{value:"Combining Filtering and Sorting",id:"combining-filtering-and-sorting",level:2},{value:"Tips for Effective Filtering and Sorting",id:"tips-for-effective-filtering-and-sorting",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"filtering-and-sorting-formats-in-yt-dlp",children:"Filtering and Sorting Formats in yt-dlp"})}),"\n",(0,r.jsx)(i.p,{children:"yt-dlp provides powerful options for filtering and sorting available formats, allowing you to precisely select the media quality you want to download."}),"\n",(0,r.jsx)(i.h2,{id:"filtering-formats",children:"Filtering Formats"}),"\n",(0,r.jsxs)(i.p,{children:["Use the ",(0,r.jsx)(i.code,{children:"-f"})," or ",(0,r.jsx)(i.code,{children:"--format"})," option to filter formats based on specific criteria."]}),"\n",(0,r.jsx)(i.h3,{id:"basic-syntax",children:"Basic Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -f FILTER URL\n"})}),"\n",(0,r.jsx)(i.h3,{id:"filter-operators",children:"Filter Operators"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"+"}),": Merge two formats (e.g., separate video and audio)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"/"}),": Fallback if the former format is unavailable"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:","}),": Download multiple formats"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"common-filters",children:"Common Filters"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"best"}),": Best quality format"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"worst"}),": Worst quality format"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"bestvideo"}),": Best quality video-only format"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"bestaudio"}),": Best quality audio-only format"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"advanced-filtering",children:"Advanced Filtering"}),"\n",(0,r.jsxs)(i.p,{children:["Use square brackets ",(0,r.jsx)(i.code,{children:"[]"})," to apply additional filters:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"bestvideo[height<=720]"}),": Best video with height no more than 720p"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"bestaudio[ext=m4a]"}),": Best m4a audio"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"best[fps>30][height>720]"}),": Best format with more than 30 fps and height greater than 720p"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"filtering-examples",children:"Filtering Examples"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Best mp4 video with m4a audio:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' URL\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Best video no larger than 720p:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]' URL\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Worst video at least 480p:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -f 'worst[height>=480]' URL\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"sorting-formats",children:"Sorting Formats"}),"\n",(0,r.jsxs)(i.p,{children:["Use the ",(0,r.jsx)(i.code,{children:"-S"})," or ",(0,r.jsx)(i.code,{children:"--format-sort"})," option to sort formats based on multiple criteria."]}),"\n",(0,r.jsx)(i.h3,{id:"basic-syntax-1",children:"Basic Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -S SORT_ORDER URL\n"})}),"\n",(0,r.jsx)(i.h3,{id:"sorting-fields",children:"Sorting Fields"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"filesize"}),": File size"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"res"}),": Video resolution"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"fps"}),": Frame rate"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"codec:vcodec"}),": Video codec preference"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"codec:acodec"}),": Audio codec preference"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"br"}),": Average bitrate"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"asr"}),": Audio sample rate"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"proto"}),": Protocol preference"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"ext"}),": File extension preference"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"sorting-order",children:"Sorting Order"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Descending order (default): ",(0,r.jsx)(i.code,{children:"field1,field2,field3"})]}),"\n",(0,r.jsxs)(i.li,{children:["Ascending order: ",(0,r.jsx)(i.code,{children:"+field1,+field2,+field3"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"sorting-examples",children:"Sorting Examples"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Prefer higher resolution, then higher bitrate:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -S 'res,br' URL\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Prefer mp4 container, then higher resolution:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -S 'ext:mp4:m4a,res' URL\n"})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Prefer better codec, then higher bitrate, then larger file size:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -S '+codec,+br,+size' URL\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"combining-filtering-and-sorting",children:"Combining Filtering and Sorting"}),"\n",(0,r.jsx)(i.p,{children:"You can use both filtering and sorting together for precise format selection:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"yt-dlp -f 'bestvideo[height<=1080]+bestaudio' -S 'proto,ext:mp4:m4a,res,br' URL\n"})}),"\n",(0,r.jsx)(i.p,{children:"This command selects the best video up to 1080p and best audio, then sorts by protocol, preferring mp4/m4a container, higher resolution, and higher bitrate."}),"\n",(0,r.jsx)(i.h2,{id:"tips-for-effective-filtering-and-sorting",children:"Tips for Effective Filtering and Sorting"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"-F"})," or ",(0,r.jsx)(i.code,{children:"--list-formats"})," to view available formats before filtering/sorting."]}),"\n",(0,r.jsx)(i.li,{children:"Combine multiple criteria for more precise selection."}),"\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"--verbose"})," to see how yt-dlp is interpreting your format selection."]}),"\n",(0,r.jsx)(i.li,{children:"Remember that not all options may be available for every video source."}),"\n",(0,r.jsxs)(i.li,{children:["Test your filters with ",(0,r.jsx)(i.code,{children:"--simulate"})," first to ensure they work as expected."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"By mastering format filtering and sorting, you can ensure you're always downloading the exact quality and format of media you need with yt-dlp."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var r=n(6540);const s={},t=r.createContext(s);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);