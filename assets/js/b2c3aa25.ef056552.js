"use strict";(self.webpackChunkytdlp_docs=self.webpackChunkytdlp_docs||[]).push([[3648],{8610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const o={sidebar_position:2},s="How to Contribute Code to yt-dlp",l={id:"Contributing/how-to-contribute-code",title:"How to Contribute Code to yt-dlp",description:"Contributing code to yt-dlp is a great way to improve the project and add new features. This guide will walk you through the process of contributing code to yt-dlp.",source:"@site/docs/Contributing/how-to-contribute-code.md",sourceDirName:"Contributing",slug:"/Contributing/how-to-contribute-code",permalink:"/yt-dlp-doc/docs/Contributing/how-to-contribute-code",draft:!1,unlisted:!1,editUrl:"https://github.com/enough-jainil/yt-dlp-doc/docs/Contributing/how-to-contribute-code.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Report Bugs in yt-dlp",permalink:"/yt-dlp-doc/docs/Contributing/how-to-report-bugs"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step-by-Step Guide to Contributing",id:"step-by-step-guide-to-contributing",level:2},{value:"1. Fork the Repository",id:"1-fork-the-repository",level:3},{value:"2. Clone Your Fork",id:"2-clone-your-fork",level:3},{value:"3. Set Up the Development Environment",id:"3-set-up-the-development-environment",level:3},{value:"4. Create a New Branch",id:"4-create-a-new-branch",level:3},{value:"5. Make Your Changes",id:"5-make-your-changes",level:3},{value:"6. Run Tests",id:"6-run-tests",level:3},{value:"7. Commit Your Changes",id:"7-commit-your-changes",level:3},{value:"8. Push to Your Fork",id:"8-push-to-your-fork",level:3},{value:"9. Create a Pull Request",id:"9-create-a-pull-request",level:3},{value:"Best Practices for Contributing",id:"best-practices-for-contributing",level:2},{value:"Code Review Process",id:"code-review-process",level:2},{value:"Additional Guidelines",id:"additional-guidelines",level:2},{value:"Getting Help",id:"getting-help",level:2},{value:"Recognition",id:"recognition",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"how-to-contribute-code-to-yt-dlp",children:"How to Contribute Code to yt-dlp"})}),"\n",(0,i.jsx)(n.p,{children:"Contributing code to yt-dlp is a great way to improve the project and add new features. This guide will walk you through the process of contributing code to yt-dlp."}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"Before you start contributing, make sure you have:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A GitHub account"}),"\n",(0,i.jsx)(n.li,{children:"Git installed on your local machine"}),"\n",(0,i.jsx)(n.li,{children:"Python 3.8 or later installed"}),"\n",(0,i.jsx)(n.li,{children:"Basic knowledge of Python programming"}),"\n",(0,i.jsx)(n.li,{children:"Familiarity with git and GitHub workflows"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-by-step-guide-to-contributing",children:"Step-by-Step Guide to Contributing"}),"\n",(0,i.jsx)(n.h3,{id:"1-fork-the-repository",children:"1. Fork the Repository"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://github.com/yt-dlp/yt-dlp",children:"yt-dlp GitHub repository"})]}),"\n",(0,i.jsx)(n.li,{children:'Click the "Fork" button in the top-right corner'}),"\n",(0,i.jsx)(n.li,{children:"This creates a copy of the repository in your GitHub account"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-clone-your-fork",children:"2. Clone Your Fork"}),"\n",(0,i.jsx)(n.p,{children:"Clone your forked repository to your local machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/YOUR_USERNAME/yt-dlp.git\r\ncd yt-dlp\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-set-up-the-development-environment",children:"3. Set Up the Development Environment"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a virtual environment:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m venv venv\r\nsource venv/bin/activate  # On Windows, use `venv\\Scripts\\activate`\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install development dependencies:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-create-a-new-branch",children:"4. Create a New Branch"}),"\n",(0,i.jsx)(n.p,{children:"Create a new branch for your feature or bugfix:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout -b your-feature-branch\n"})}),"\n",(0,i.jsx)(n.h3,{id:"5-make-your-changes",children:"5. Make Your Changes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Implement your feature or fix the bug"}),"\n",(0,i.jsxs)(n.li,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md#coding-conventions",children:"yt-dlp coding conventions"})]}),"\n",(0,i.jsx)(n.li,{children:"Add or update tests as necessary"}),"\n",(0,i.jsx)(n.li,{children:"Update documentation if you're adding new features"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"6-run-tests",children:"6. Run Tests"}),"\n",(0,i.jsx)(n.p,{children:"Ensure all tests pass:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python3 -m pytest\n"})}),"\n",(0,i.jsx)(n.h3,{id:"7-commit-your-changes",children:"7. Commit Your Changes"}),"\n",(0,i.jsx)(n.p,{children:"Commit your changes with a clear and descriptive commit message:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git add .\r\ngit commit -m "Add new feature: Short description of your changes"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"8-push-to-your-fork",children:"8. Push to Your Fork"}),"\n",(0,i.jsx)(n.p,{children:"Push your changes to your GitHub fork:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push origin your-feature-branch\n"})}),"\n",(0,i.jsx)(n.h3,{id:"9-create-a-pull-request",children:"9. Create a Pull Request"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to your fork on GitHub"}),"\n",(0,i.jsx)(n.li,{children:'Click "New Pull Request"'}),"\n",(0,i.jsx)(n.li,{children:"Select your feature branch"}),"\n",(0,i.jsx)(n.li,{children:"Fill out the pull request template with details about your changes"}),"\n",(0,i.jsx)(n.li,{children:'Click "Create Pull Request"'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"best-practices-for-contributing",children:"Best Practices for Contributing"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Keep it focused"}),": Each pull request should address a single feature or bug fix"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Follow coding standards"}),": Adhere to PEP 8 and yt-dlp's specific coding conventions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Write tests"}),": Add tests for new features and ensure existing tests pass"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Update documentation"}),": If you're adding or changing functionality, update the relevant documentation"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Describe your changes"}),": Provide a clear description of what your code does and why it's needed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Be responsive"}),": Be prepared to answer questions and make changes based on review feedback"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"code-review-process",children:"Code Review Process"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A maintainer will review your pull request"}),"\n",(0,i.jsx)(n.li,{children:"They may ask for changes or clarifications"}),"\n",(0,i.jsx)(n.li,{children:"Make any requested changes and push them to your branch"}),"\n",(0,i.jsx)(n.li,{children:"Once approved, a maintainer will merge your pull request"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"additional-guidelines",children:"Additional Guidelines"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extractor contributions"}),": If you're adding or updating an extractor, make sure to follow the ",(0,i.jsx)(n.a,{href:"https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md#adding-support-for-a-new-site",children:"extractor writing guidelines"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Core functionality changes"}),": Discuss major changes in an issue before implementing them"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Performance considerations"}),": Ensure your changes don't negatively impact performance, especially for commonly used features"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-help",children:"Getting Help"}),"\n",(0,i.jsx)(n.p,{children:"If you need help or have questions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Check the ",(0,i.jsx)(n.a,{href:"https://github.com/yt-dlp/yt-dlp/blob/master/CONTRIBUTING.md",children:"contributing guidelines"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ask in the ",(0,i.jsx)(n.a,{href:"https://github.com/yt-dlp/yt-dlp/issues",children:"yt-dlp issues section"})]}),"\n",(0,i.jsx)(n.li,{children:"Join community discussions on platforms like Discord or Matrix (if available)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"recognition",children:"Recognition"}),"\n",(0,i.jsx)(n.p,{children:"Your contributions will be recognized in the project's changelog and contributors list. Significant contributions may lead to maintainer status."}),"\n",(0,i.jsx)(n.p,{children:"Remember, contributing to open-source projects like yt-dlp is a great way to improve your skills, give back to the community, and make a meaningful impact on a widely-used tool. Thank you for considering contributing to yt-dlp!"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);