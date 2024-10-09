import{r as l,o as m,g as u,a as s,w as n,b as e,d as o,h as w,_ as f}from"./index-BhQVIzBi.js";const v={class:"mt6"},g={class:"mt4"},k={class:"w-flex align-center"},b={class:"mt4"},y={class:"w-flex align-center"};function x(i,t,U,$,W,M){const p=l("title-link"),a=l("ssh-pre"),r=l("w-icon"),d=l("router-link");return m(),u("main",null,[s(p,{class:"mt4",h1:""},{default:n(()=>t[0]||(t[0]=[e("Migration strategy from version 2.x to version 3.x")])),_:1}),t[17]||(t[17]=o("p",null,[e("The migration from Wave UI 2.x is extremely simple. You'll be done in two steps, two minutes!"),o("br"),e(`
But if you want to offer two themes in your app, there's a bit more work.`)],-1)),o("ol",v,[o("li",g,[t[4]||(t[4]=o("div",{class:"title3"},"Update the initialization of Wave UI.",-1)),o("div",k,[s(a,{language:"js",label:"before",dark:i.$store.state.darkMode,style:{"min-width":"290px"}},{default:n(()=>t[1]||(t[1]=[e(`const app = createApp(App)
new WaveUI(app, { /* Some Wave UI options */ })
app.mount('#app')`)])),_:1},8,["dark"]),s(r,{class:"ma2 grey",xl:""},{default:n(()=>t[2]||(t[2]=[e("mdi mdi-arrow-right")])),_:1}),s(a,{language:"js",label:"after",dark:i.$store.state.darkMode,style:{"min-width":"290px"}},{default:n(()=>t[3]||(t[3]=[e(`const app = createApp(App)
app.use(WaveUI, { /* Some Wave UI options */ })
app.mount('#app')
`)])),_:1},8,["dark"])])]),o("li",b,[t[9]||(t[9]=o("div",{class:"title3"},[e("Remove the <w-app> component, it's no longer needed!"),o("br")],-1)),t[10]||(t[10]=e("Note: there is also an ")),s(d,{to:"/options-presets-and-waveui"},{default:n(()=>t[5]||(t[5]=[e("option to define the Wave UI root")])),_:1}),t[11]||(t[11]=e(" (Default: ")),t[12]||(t[12]=o("code",{class:"code"},"#app",-1)),t[13]||(t[13]=e(", if not found, ")),t[14]||(t[14]=o("code",{class:"code"},"body",-1)),t[15]||(t[15]=e(").")),o("div",y,[s(a,{language:"html-vue",label:"before",dark:i.$store.state.darkMode,style:{"min-width":"290px"}},{default:n(()=>t[6]||(t[6]=[e(`<w-app>
  <w-button>My button</w-button>
</w-app>`)])),_:1},8,["dark"]),s(r,{class:"ma2 grey",xl:""},{default:n(()=>t[7]||(t[7]=[e("mdi mdi-arrow-right")])),_:1}),s(a,{language:"html-vue",label:"after",dark:i.$store.state.darkMode,style:{"min-width":"290px"}},{default:n(()=>t[8]||(t[8]=[e(`<w-button>My button</w-button>
`)])),_:1},8,["dark"])])]),t[16]||(t[16]=w('<li class="mt4"><div class="title3">If you were using <code>useWaveUI</code> in composition API</div><p>just replace it with <code>inject(&#39;$waveui&#39;)</code>.</p></li><li class="mt4"><div class="title3">Optionally, if you want to use two themes.</div><p>Follow the steps in the <a href="/themes#adding-themes-in-your-wave-ui-app">themes</a> page.</p></li>',2))])])}const I={},A=f(I,[["render",x]]);export{A as default};