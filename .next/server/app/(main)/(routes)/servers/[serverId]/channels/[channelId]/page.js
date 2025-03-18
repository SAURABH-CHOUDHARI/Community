"use strict";(()=>{var e={};e.id=3217,e.ids=[3217],e.modules={53524:e=>{e.exports=require("@prisma/client")},55403:e=>{e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{e.exports=require("assert")},50852:e=>{e.exports=require("async_hooks")},14300:e=>{e.exports=require("buffer")},32081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},73292:e=>{e.exports=require("fs/promises")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},41808:e=>{e.exports=require("net")},72254:e=>{e.exports=require("node:buffer")},6005:e=>{e.exports=require("node:crypto")},87561:e=>{e.exports=require("node:fs")},88849:e=>{e.exports=require("node:http")},22286:e=>{e.exports=require("node:https")},87503:e=>{e.exports=require("node:net")},49411:e=>{e.exports=require("node:path")},97742:e=>{e.exports=require("node:process")},84492:e=>{e.exports=require("node:stream")},72477:e=>{e.exports=require("node:stream/web")},41041:e=>{e.exports=require("node:url")},47261:e=>{e.exports=require("node:util")},65628:e=>{e.exports=require("node:zlib")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},77282:e=>{e.exports=require("process")},12781:e=>{e.exports=require("stream")},24404:e=>{e.exports=require("tls")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},88731:(e,r,s)=>{s.r(r),s.d(r,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l});var t=s(73137),n=s(54647),o=s(4183),i=s.n(o),a=s(71775),p={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(p[e]=()=>a[e]);s.d(r,p);let d=t.AppPageRouteModule,l=["",{children:["(main)",{children:["(routes)",{children:["servers",{children:["[serverId]",{children:["channels",{children:["[channelId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4896)),"C:\\Users\\Asus\\Desktop\\Community\\app\\(main)\\(routes)\\servers\\[serverId]\\channels\\[channelId]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,80716)),"C:\\Users\\Asus\\Desktop\\Community\\app\\(main)\\(routes)\\servers\\[serverId]\\layout.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,7914)),"C:\\Users\\Asus\\Desktop\\Community\\app\\(main)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,26790)),"C:\\Users\\Asus\\Desktop\\Community\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\Asus\\Desktop\\Community\\app\\(main)\\(routes)\\servers\\[serverId]\\channels\\[channelId]\\page.tsx"],c="/(main)/(routes)/servers/[serverId]/channels/[channelId]/page",x={require:s,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:n.x.APP_PAGE,page:"/(main)/(routes)/servers/[serverId]/channels/[channelId]/page",pathname:"/servers/[serverId]/channels/[channelId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4896:(e,r,s)=>{s.r(r),s.d(r,{default:()=>m});var t=s(48144),n=s(1945),o=s(6465),i=s(53524),a=s(581),p=s(29298),d=s(48704),l=s(5247),u=s(85692),c=s(30953);let x=async({params:e})=>{let r=await (0,a.D)();if(!r)return(0,n.OX)();let s=await c.db.channel.findUnique({where:{id:e.channelId}}),x=await c.db.member.findFirst({where:{serverId:e.serverId,profileId:r.id}});return s&&x||(0,o.redirect)("/"),(0,t.jsxs)("div",{className:"bg-white dark:bg-[#313338] flex flex-col h-full",children:[t.jsx(p.C,{name:s.name,serverId:s.serverId,type:"channel"}),s.type===i.ChannelType.TEXT&&(0,t.jsxs)(t.Fragment,{children:[t.jsx(l.j,{member:x,name:s.name,chatId:s.id,type:"channel",apiUrl:"/api/messages",socketUrl:"/api/socket/messages",socketQuery:{channelId:s.id,serverId:s.serverId},paramKey:"channelId",paramValue:s.id}),t.jsx(d.x,{name:s.name,type:"channel",apiUrl:"/api/socket/messages",query:{channelId:s.id,serverId:s.serverId}})]}),s.type===i.ChannelType.AUDIO&&t.jsx(u.z,{chatId:s.id,video:!1,audio:!0}),s.type===i.ChannelType.VIDEO&&t.jsx(u.z,{chatId:s.id,video:!0,audio:!0})]})},m=x}};var r=require("../../../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[8497,1945,7189,6885,5717,5326,5307,953,474,9371,4202],()=>s(88731));module.exports=t})();