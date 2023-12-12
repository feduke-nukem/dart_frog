"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[684],{4174:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var l=n(5893),i=n(1151);const r={sidebar_position:1,title:"\u2601\ufe0f Google Cloud Run"},t="Google Cloud Run \u2601\ufe0f",s={id:"deploy/google-cloud-run",title:"\u2601\ufe0f Google Cloud Run",description:"Cloud Run is a service in the Google Cloud Platform that allows you to deploy highly scalable containerized applications using your favorite language on a fully managed serverless platform. You can use Cloud Run to serve requests from your Dart Frog API to the internet. This will provide:",source:"@site/docs/deploy/google-cloud-run.md",sourceDirName:"deploy",slug:"/deploy/google-cloud-run",permalink:"/docs/deploy/google-cloud-run",draft:!1,unlisted:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/deploy/google-cloud-run.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u2601\ufe0f Google Cloud Run"},sidebar:"docs",previous:{title:"Deploy",permalink:"/docs/category/deploy"},next:{title:"\ud83c\udfc3 AWS App Runner",permalink:"/docs/deploy/aws-app-runner"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function u(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h1,{id:"google-cloud-run-\ufe0f",children:"Google Cloud Run \u2601\ufe0f"}),"\n",(0,l.jsxs)(o.p,{children:[(0,l.jsx)(o.a,{href:"https://cloud.google.com/run",children:"Cloud Run"})," is a service in the ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/",children:"Google Cloud Platform"})," that allows you to deploy highly scalable containerized applications using your favorite language on a fully managed serverless platform. You can use Cloud Run to serve requests from your Dart Frog API to the internet. This will provide:"]}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:"Fully managed autoscaling to handle any number of requests"}),"\n",(0,l.jsx)(o.li,{children:"Only pay for the computing resources you use, and pay nothing when your service isn't being used"}),"\n",(0,l.jsxs)(o.li,{children:["Automatic logging in ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/logging",children:"Cloud Logging"})]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(o.p,{children:"Before you get started, if you don't already have these, you'll need to create:"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["A ",(0,l.jsx)(o.a,{href:"https://support.google.com/accounts/answer/27441?hl=en",children:"free Google Account"})]}),"\n",(0,l.jsxs)(o.li,{children:["A ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects",children:"Google Cloud Platform (GCP) Project"})]}),"\n",(0,l.jsxs)(o.li,{children:["A ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/billing/docs/how-to/manage-billing-account#create_a_new_billing_account",children:"billing account"})," connected to your GCP project"]}),"\n"]}),"\n",(0,l.jsx)(o.admonition,{type:"caution",children:(0,l.jsxs)(o.p,{children:["While the Google Cloud Platform has a free tier that should cover testing projects, you can incur costs when running this quickstart through Cloud Run, Cloud Build, or Artifact Registry. For more details, see the ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/pricing/list",children:"Google Cloud Price List"}),"."]})}),"\n",(0,l.jsxs)(o.p,{children:["Additionally, you'll need the ",(0,l.jsxs)(o.a,{href:"https://cloud.google.com/sdk/docs/install",children:[(0,l.jsx)(o.code,{children:"gcloud"})," command line interface (CLI)"]})," installed on your computer."]}),"\n",(0,l.jsxs)(o.p,{children:["Finally, you'll want to log in to ",(0,l.jsx)(o.code,{children:"gcloud"})," by running:"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"gcloud auth login\n"})}),"\n",(0,l.jsx)(o.h2,{id:"deploying",children:"Deploying"}),"\n",(0,l.jsxs)(o.ol,{children:["\n",(0,l.jsx)(o.li,{children:"Build your API for production use by running:"}),"\n"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"dart_frog build\n"})}),"\n",(0,l.jsxs)(o.p,{children:["This will create a ",(0,l.jsx)(o.code,{children:"/build"})," directory with all the files needed to deploy your API."]}),"\n",(0,l.jsxs)(o.ol,{start:"2",children:["\n",(0,l.jsx)(o.li,{children:"Deploy your API to Cloud Run by running:"}),"\n"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"gcloud run deploy [SERVICE_NAME] \\\n  --source build \\\n  --project=[PROJECT_ID] \\\n  --region=[REGION] \\\n  --allow-unauthenticated\n"})}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"[SERVICE_NAME]"}),": The name of the Cloud Run service you want to create/update"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"[PROJECT_ID]"}),": The ID of the Google Cloud project"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"[REGION]"}),": The GCP region you wish to deploy to (ex: us-central1)"]}),"\n"]}),"\n",(0,l.jsx)(o.p,{children:"Running this command will do three things:"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["Upload the code in the ",(0,l.jsx)(o.code,{children:"/build"})," directory"]}),"\n",(0,l.jsxs)(o.li,{children:["Build the Docker image in ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/build",children:"Cloud Build"})," and upload it to ",(0,l.jsx)(o.a,{href:"https://cloud.google.com/artifact-registry",children:"Artifact Registry"})]}),"\n",(0,l.jsx)(o.li,{children:"Deploy the image to the specified Cloud Run service"}),"\n"]}),"\n",(0,l.jsxs)(o.ol,{start:"3",children:["\n",(0,l.jsx)(o.li,{children:"Congratulations! \ud83c\udf89 You have successfully built and deployed your API to Cloud Run. You can now access your API at the Service URL that is printed in the last line of output."}),"\n"]}),"\n",(0,l.jsx)(o.admonition,{type:"note",children:(0,l.jsxs)(o.p,{children:["If you have not already enabled the necessary Google Cloud APIs to deploy your API, ",(0,l.jsx)(o.code,{children:"gcloud"})," can enable them for you. Just select ",(0,l.jsx)(o.code,{children:"Y"})," when prompted."]})}),"\n",(0,l.jsxs)(o.admonition,{type:"tip",children:[(0,l.jsxs)(o.p,{children:["You can save the project ID and region to ",(0,l.jsx)(o.code,{children:"gcloud"})," so you don't have to specify them each time you deploy."]}),(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"gcloud config set core/project [PROJECT_ID]\ngcloud config set run/region [REGION]\n"})})]}),"\n",(0,l.jsx)(o.p,{children:"Example:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"$ gcloud run deploy hello  --source build --allow-unauthenticated\n\nBuilding using Dockerfile and deploying container to Cloud Run service [hello] in project [dart-demo] region [us-central1]\n\u2713 Building and deploying new service... Done.\n  \u2713 Uploading sources...\n  \u2713 Building Container... Logs are available at [https://console.cloud.google.com/cloud-build/builds/df7f07d1-d88b-4443-a2b1-bdfd3cdab15b?project=700116488077].\n  \u2713 Creating Revision... Revision deployment finished. Waiting for health check to begin.\n  \u2713 Routing traffic...\n  \u2713 Setting IAM Policy...\nDone.\nService [hello] revision [hello-00001-yen] has been deployed and is serving 100 percent of traffic.\nService URL: https://hello-gpua4upw6q-uc.a.run.app\n"})}),"\n",(0,l.jsx)(o.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://cloud.google.com/run/docs/overview/what-is-cloud-run",children:"What is Cloud Run"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsxs)(o.a,{href:"https://cloud.google.com/sdk/gcloud/reference/run/deploy",children:[(0,l.jsx)(o.code,{children:"gcloud run deploy"})," documentation"]})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://cloud.google.com/run/docs/logging",children:"Cloud Run automatic logging"})}),"\n",(0,l.jsx)(o.li,{children:(0,l.jsx)(o.a,{href:"https://cloud.google.com/run/docs/mapping-custom-domains",children:"Mapping custom domains to Cloud Run"})}),"\n"]})]})}function a(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>s,a:()=>t});var l=n(7294);const i={},r=l.createContext(i);function t(e){const o=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:o},e.children)}}}]);