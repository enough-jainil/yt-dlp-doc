"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[3649],{3467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(4848),o=n(8453);const r={sidebar_position:1},s="Format Selection in yt-dlp",d={id:"Advanced Features/format-selection",title:"Format Selection in yt-dlp",description:"Format selection in yt-dlp allows you to choose specific video and audio qualities for download. This powerful feature gives you control over the format of the media you're downloading.",source:"@site/docs/Advanced Features/format-selection.md",sourceDirName:"Advanced Features",slug:"/Advanced Features/format-selection",permalink:"/yt-dlp-doc/docs/Advanced Features/format-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/enough-jainil/yt-dlp-doc/docs/Advanced Features/format-selection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Features",permalink:"/yt-dlp-doc/docs/category/advanced-features"},next:{title:"Filtering and Sorting Formats in yt-dlp",permalink:"/yt-dlp-doc/docs/Advanced Features/filtering-and-sorting-formats"}},l={},c=[{value:"Basic Syntax",id:"basic-syntax",level:2},{value:"Format Codes",id:"format-codes",level:2},{value:"Common Format Selectors",id:"common-format-selectors",level:2},{value:"Advanced Format Selection",id:"advanced-format-selection",level:2},{value:"Quality Preference",id:"quality-preference",level:3},{value:"Format Filtering",id:"format-filtering",level:3},{value:"Sorting Formats",id:"sorting-formats",level:3},{value:"Format Selection Examples",id:"format-selection-examples",level:2},{value:"Format Sorting (<code>-S</code> option)",id:"format-sorting--s-option",level:2},{value:"Tips for Format Selection",id:"tips-for-format-selection",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"format-selection-in-yt-dlp",children:"Format Selection in yt-dlp"})}),"\n",(0,i.jsx)(t.p,{children:"Format selection in yt-dlp allows you to choose specific video and audio qualities for download. This powerful feature gives you control over the format of the media you're downloading."}),"\n",(0,i.jsx)(t.h2,{id:"basic-syntax",children:"Basic Syntax"}),"\n",(0,i.jsx)(t.p,{children:"The basic syntax for format selection is:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f FORMAT URL\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"FORMAT"})," is a format selector string."]}),"\n",(0,i.jsx)(t.h2,{id:"format-codes",children:"Format Codes"}),"\n",(0,i.jsx)(t.p,{children:"Each downloadable media stream has a unique format code. You can view available formats using:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -F URL\n"})}),"\n",(0,i.jsx)(t.h2,{id:"common-format-selectors",children:"Common Format Selectors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"best"}),": Select the best quality format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"worst"}),": Select the worst quality format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bestvideo"}),": Select the best quality video-only format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"bestaudio"}),": Select the best quality audio-only format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"mp4"}),": Select the best mp4 format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"136+140"}),": Select format code 136 for video and 140 for audio"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advanced-format-selection",children:"Advanced Format Selection"}),"\n",(0,i.jsx)(t.h3,{id:"quality-preference",children:"Quality Preference"}),"\n",(0,i.jsx)(t.p,{children:"Use comparison operators to set quality preferences:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"best[height<=720]"}),": Best quality video with height no more than 720 pixels"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"best[fps>30]"}),": Best quality video with more than 30 fps"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"format-filtering",children:"Format Filtering"}),"\n",(0,i.jsx)(t.p,{children:"Filter formats based on various criteria:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"best[ext=mp4]"}),": Best mp4 format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"best[acodec^=opus]"}),": Best format with opus audio codec"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sorting-formats",children:"Sorting Formats"}),"\n",(0,i.jsxs)(t.p,{children:["Use ",(0,i.jsx)(t.code,{children:"/"})," to specify preference order:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f 'bestvideo+bestaudio/best' URL\n"})}),"\n",(0,i.jsx)(t.p,{children:"This tries to download and merge the best video with the best audio, falling back to the best combined format if merging fails."}),"\n",(0,i.jsx)(t.h2,{id:"format-selection-examples",children:"Format Selection Examples"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best video with best audio, prefer mp4:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best' URL\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best video no larger than 720p:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f 'bestvideo[height<=720]+bestaudio/best[height<=720]' URL\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best mp4 video with m4a audio:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' URL\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Worst video no worse than 480p:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -f 'worst[height>=480]' URL\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Best video and audio but no better than 720p:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -S 'res:720' URL\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"format-sorting--s-option",children:["Format Sorting (",(0,i.jsx)(t.code,{children:"-S"})," option)"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"-S"})," option allows for more flexible sorting of formats:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"yt-dlp -S 'ext:mp4:m4a' URL\n"})}),"\n",(0,i.jsx)(t.p,{children:"This prefers mp4 video and m4a audio extensions."}),"\n",(0,i.jsx)(t.h2,{id:"tips-for-format-selection",children:"Tips for Format Selection"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Use ",(0,i.jsx)(t.code,{children:"-F"})," to list all available formats before deciding"]}),"\n",(0,i.jsx)(t.li,{children:"Combine format selectors for precise control"}),"\n",(0,i.jsx)(t.li,{children:"Remember that not all formats may be available for every video"}),"\n",(0,i.jsxs)(t.li,{children:["Use ",(0,i.jsx)(t.code,{children:"--merge-output-format"})," to specify the final container if merging separate audio and video"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Format selection is a powerful feature of yt-dlp. Experiment with different selectors to find the perfect balance of quality and file size for your needs."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);