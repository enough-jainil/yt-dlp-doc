"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[1417],{270:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=s(4848),i=s(8453);const r={sidebar_position:6},t="SponsorBlock Integration in yt-dlp",l={id:"Advanced Features/sponsor-block-integration",title:"SponsorBlock Integration in yt-dlp",description:"yt-dlp integrates with SponsorBlock, a crowdsourced service that allows users to skip or mark sponsored segments in YouTube videos. This feature helps you automatically handle sponsor segments, intros, outros, and other parts of videos you might want to skip.",source:"@site/docs/Advanced Features/sponsor-block-integration.md",sourceDirName:"Advanced Features",slug:"/Advanced Features/sponsor-block-integration",permalink:"/docs/Advanced Features/sponsor-block-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/enough-jainil/yt-dlp-doc/docs/Advanced Features/sponsor-block-integration.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Geo-restriction Bypass in yt-dlp",permalink:"/docs/Advanced Features/geo-restriction-bypass"},next:{title:"Configuration",permalink:"/docs/category/configuration"}},c={},d=[{value:"What is SponsorBlock?",id:"what-is-sponsorblock",level:2},{value:"Enabling SponsorBlock in yt-dlp",id:"enabling-sponsorblock-in-yt-dlp",level:2},{value:"Mark Sponsors",id:"mark-sponsors",level:3},{value:"Remove Sponsors",id:"remove-sponsors",level:3},{value:"SponsorBlock Categories",id:"sponsorblock-categories",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Custom Chapter Title",id:"custom-chapter-title",level:3},{value:"Specify SponsorBlock API URL",id:"specify-sponsorblock-api-url",level:3},{value:"Examples",id:"examples",level:2},{value:"Tips for Using SponsorBlock",id:"tips-for-using-sponsorblock",level:2},{value:"Limitations and Considerations",id:"limitations-and-considerations",level:2},{value:"Ethical Use",id:"ethical-use",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"sponsorblock-integration-in-yt-dlp",children:"SponsorBlock Integration in yt-dlp"})}),"\n",(0,n.jsx)(o.p,{children:"yt-dlp integrates with SponsorBlock, a crowdsourced service that allows users to skip or mark sponsored segments in YouTube videos. This feature helps you automatically handle sponsor segments, intros, outros, and other parts of videos you might want to skip."}),"\n",(0,n.jsx)(o.h2,{id:"what-is-sponsorblock",children:"What is SponsorBlock?"}),"\n",(0,n.jsx)(o.p,{children:"SponsorBlock is a database of user-submitted timestamps for sponsored segments in YouTube videos. It allows viewers to skip non-content parts of videos automatically."}),"\n",(0,n.jsx)(o.h2,{id:"enabling-sponsorblock-in-yt-dlp",children:"Enabling SponsorBlock in yt-dlp"}),"\n",(0,n.jsx)(o.p,{children:"SponsorBlock features are disabled by default. To enable them, use the following options:"}),"\n",(0,n.jsx)(o.h3,{id:"mark-sponsors",children:"Mark Sponsors"}),"\n",(0,n.jsx)(o.p,{children:"To mark sponsor segments in the video file:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-mark all URL\n"})}),"\n",(0,n.jsx)(o.p,{children:"This will add chapters to the video file, marking the sponsored segments."}),"\n",(0,n.jsx)(o.h3,{id:"remove-sponsors",children:"Remove Sponsors"}),"\n",(0,n.jsx)(o.p,{children:"To remove sponsor segments from the video:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-remove all URL\n"})}),"\n",(0,n.jsx)(o.p,{children:"This will cut out the sponsored segments from the downloaded video."}),"\n",(0,n.jsx)(o.h2,{id:"sponsorblock-categories",children:"SponsorBlock Categories"}),"\n",(0,n.jsx)(o.p,{children:"SponsorBlock recognizes several categories of segments:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"sponsor"}),"\n",(0,n.jsx)(o.li,{children:"intro"}),"\n",(0,n.jsx)(o.li,{children:"outro"}),"\n",(0,n.jsx)(o.li,{children:"selfpromo"}),"\n",(0,n.jsx)(o.li,{children:"preview"}),"\n",(0,n.jsx)(o.li,{children:"filler"}),"\n",(0,n.jsx)(o.li,{children:"interaction"}),"\n",(0,n.jsx)(o.li,{children:"music_offtopic"}),"\n",(0,n.jsx)(o.li,{children:"poi_highlight"}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"You can specify which categories to mark or remove:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-mark sponsor,intro --sponsorblock-remove outro URL\n"})}),"\n",(0,n.jsx)(o.h2,{id:"advanced-usage",children:"Advanced Usage"}),"\n",(0,n.jsx)(o.h3,{id:"custom-chapter-title",children:"Custom Chapter Title"}),"\n",(0,n.jsx)(o.p,{children:"Customize the title of SponsorBlock chapters:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'yt-dlp --sponsorblock-mark all --sponsorblock-chapter-title "[SponsorBlock]: %(category)s" URL\n'})}),"\n",(0,n.jsx)(o.h3,{id:"specify-sponsorblock-api-url",children:"Specify SponsorBlock API URL"}),"\n",(0,n.jsx)(o.p,{children:"If you want to use a different SponsorBlock API server:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-api URL https://sponsor.ajay.app URL\n"})}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Mark all sponsor segments but remove intros:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-mark sponsor --sponsorblock-remove intro URL\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Remove all segments except music_offtopic:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"yt-dlp --sponsorblock-remove all,-music_offtopic URL\n"})}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsx)(o.p,{children:"Mark sponsors and intros with custom chapter titles:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:'yt-dlp --sponsorblock-mark sponsor,intro --sponsorblock-chapter-title "%(category)s: %(start)s - %(end)s" URL\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"tips-for-using-sponsorblock",children:"Tips for Using SponsorBlock"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["Use ",(0,n.jsx)(o.code,{children:"--verbose"})," to see details about SponsorBlock actions"]}),"\n",(0,n.jsx)(o.li,{children:"Combine with other yt-dlp features like format selection for a customized download"}),"\n",(0,n.jsx)(o.li,{children:"Be aware that SponsorBlock data is user-submitted and may not be 100% accurate"}),"\n",(0,n.jsx)(o.li,{children:"Consider contributing to SponsorBlock if you find it useful"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"limitations-and-considerations",children:"Limitations and Considerations"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"SponsorBlock integration only works with YouTube videos"}),"\n",(0,n.jsx)(o.li,{children:"The accuracy depends on user submissions to the SponsorBlock database"}),"\n",(0,n.jsx)(o.li,{children:"Processing videos with SponsorBlock may increase download time slightly"}),"\n",(0,n.jsx)(o.li,{children:"Removed segments might affect video continuity in some cases"}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"ethical-use",children:"Ethical Use"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Respect content creators' work while using SponsorBlock features"}),"\n",(0,n.jsx)(o.li,{children:"Consider supporting creators through other means if you frequently skip sponsored content"}),"\n",(0,n.jsx)(o.li,{children:'Be mindful that some "sponsored" content may be integral to the video\'s context'}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"SponsorBlock integration in yt-dlp provides a powerful way to customize your video downloading experience, allowing you to automatically handle sponsored and non-content segments in YouTube videos. Use it responsibly to enhance your viewing experience while respecting content creators' efforts."})]})}function p(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,o,s)=>{s.d(o,{R:()=>t,x:()=>l});var n=s(6540);const i={},r=n.createContext(i);function t(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);