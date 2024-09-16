"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[51],{733:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=i(4848),r=i(8453);const o={sidebar_position:2},t="Environment Variables in yt-dlp",l={id:"Configuration/environment-variables",title:"Environment Variables in yt-dlp",description:"Environment variables provide another way to configure yt-dlp without modifying configuration files or using command-line arguments. They can be particularly useful for setting sensitive information or system-specific configurations.",source:"@site/docs/Configuration/environment-variables.md",sourceDirName:"Configuration",slug:"/Configuration/environment-variables",permalink:"/docs/Configuration/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/enough-jainil/yt-dlp-doc/docs/Configuration/environment-variables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration Files in yt-dlp",permalink:"/docs/Configuration/configuration-files"},next:{title:"Plugins",permalink:"/docs/category/plugins"}},a={},c=[{value:"Using Environment Variables",id:"using-environment-variables",level:2},{value:"Common Environment Variables",id:"common-environment-variables",level:2},{value:"Setting Environment Variables",id:"setting-environment-variables",level:2},{value:"On Unix-like systems (Linux, macOS):",id:"on-unix-like-systems-linux-macos",level:3},{value:"On Windows:",id:"on-windows",level:3},{value:"Priority of Configuration Methods",id:"priority-of-configuration-methods",level:2},{value:"Examples of Using Environment Variables",id:"examples-of-using-environment-variables",level:2},{value:"Tips for Using Environment Variables",id:"tips-for-using-environment-variables",level:2},{value:"Security Considerations",id:"security-considerations",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"environment-variables-in-yt-dlp",children:"Environment Variables in yt-dlp"})}),"\n",(0,s.jsx)(n.p,{children:"Environment variables provide another way to configure yt-dlp without modifying configuration files or using command-line arguments. They can be particularly useful for setting sensitive information or system-specific configurations."}),"\n",(0,s.jsx)(n.h2,{id:"using-environment-variables",children:"Using Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["yt-dlp recognizes environment variables prefixed with ",(0,s.jsx)(n.code,{children:"YTD_LP_"}),". The rest of the variable name should be the uppercase version of the corresponding command-line option, with dashes replaced by underscores."]}),"\n",(0,s.jsx)(n.h2,{id:"common-environment-variables",children:"Common Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"Here are some commonly used environment variables for yt-dlp:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_USERNAME"}),": Set the default username for sites requiring authentication"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export YTD_LP_USERNAME=your_username\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_PASSWORD"}),": Set the default password"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export YTD_LP_PASSWORD=your_password\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_PROXY"}),": Specify a default proxy"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export YTD_LP_PROXY=socks5://127.0.0.1:9150\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_FORMAT"}),": Set the default download format"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_FORMAT="bestvideo+bestaudio/best"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_OUTPUT_TEMPLATE"}),": Define the default output template"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_OUTPUT_TEMPLATE="%(title)s-%(id)s.%(ext)s"\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"YTD_LP_CACHEDIR"}),": Specify the cache directory"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_CACHEDIR="/path/to/cache"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-environment-variables",children:"Setting Environment Variables"}),"\n",(0,s.jsx)(n.h3,{id:"on-unix-like-systems-linux-macos",children:"On Unix-like systems (Linux, macOS):"}),"\n",(0,s.jsx)(n.p,{children:"Temporarily:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export YTD_LP_VARIABLE_NAME=value\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Permanently (add to ",(0,s.jsx)(n.code,{children:"~/.bashrc"}),", ",(0,s.jsx)(n.code,{children:"~/.zshrc"}),", or equivalent):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'export YTD_LP_VARIABLE_NAME=value' >> ~/.bashrc\n"})}),"\n",(0,s.jsx)(n.h3,{id:"on-windows",children:"On Windows:"}),"\n",(0,s.jsx)(n.p,{children:"Temporarily (Command Prompt):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:"set YTD_LP_VARIABLE_NAME=value\n"})}),"\n",(0,s.jsx)(n.p,{children:"Permanently (System Properties > Environment Variables)"}),"\n",(0,s.jsx)(n.h2,{id:"priority-of-configuration-methods",children:"Priority of Configuration Methods"}),"\n",(0,s.jsx)(n.p,{children:"The order of precedence for configuration methods in yt-dlp is:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Command-line arguments"}),"\n",(0,s.jsx)(n.li,{children:"Environment variables"}),"\n",(0,s.jsx)(n.li,{children:"Configuration files"}),"\n",(0,s.jsx)(n.li,{children:"Default values"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This means environment variables will override settings in configuration files but can be overridden by command-line arguments."}),"\n",(0,s.jsx)(n.h2,{id:"examples-of-using-environment-variables",children:"Examples of Using Environment Variables"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Setting up a default proxy and format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_PROXY="socks5://127.0.0.1:9150"\r\nexport YTD_LP_FORMAT="bestvideo[height<=1080]+bestaudio/best"\r\nyt-dlp https://www.youtube.com/watch?v=dQw4w9WgXcQ\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Configuring default authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_USERNAME="your_username"\r\nexport YTD_LP_PASSWORD="your_password"\r\nyt-dlp https://www.example.com/private_video\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Setting a custom output template and download archive:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export YTD_LP_OUTPUT_TEMPLATE="~/Videos/%(uploader)s/%(title)s.%(ext)s"\r\nexport YTD_LP_DOWNLOAD_ARCHIVE="~/yt-dlp_archive.txt"\r\nyt-dlp https://www.youtube.com/playlist?list=PLxxxxxxxx\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-using-environment-variables",children:"Tips for Using Environment Variables"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use environment variables for sensitive information like passwords to avoid exposing them in command-line history or configuration files."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set system-specific configurations (like cache directories) using environment variables for portability across different machines."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Remember that environment variables are global to your session or system, which might affect other instances of yt-dlp or even other applications."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"yt-dlp --verbose"})," to see which environment variables are being used."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For complex configurations, consider using a combination of environment variables and configuration files."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Be cautious when setting sensitive information like passwords in environment variables, especially on shared systems."}),"\n",(0,s.jsxs)(n.li,{children:["On Unix-like systems, environment variables set in shell configuration files (like ",(0,s.jsx)(n.code,{children:".bashrc"}),") are generally only accessible to the user who owns the file."]}),"\n",(0,s.jsx)(n.li,{children:"On Windows, system-wide environment variables are accessible to all users of the computer."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By effectively using environment variables, you can create a flexible and secure setup for yt-dlp that adapts to different environments and use cases while keeping sensitive information protected."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>l});var s=i(6540);const r={},o=s.createContext(r);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);