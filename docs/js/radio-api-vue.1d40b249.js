(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["radio-api-vue"],{5075:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radios-api"}},[e._v("<w-radios> API")]),a("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),a("api",{staticClass:"mt0",attrs:{items:e.radiosProps,descriptions:e.radios.propsDescs,title:"Props"}}),a("api",{attrs:{items:e.radios.slots,title:"Slots"}}),a("api",{attrs:{items:e.radiosEvents,title:"Events"}}),a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:"",slug:"w-radio-api"}},[e._v("<w-radio> API")]),a("api",{staticClass:"mt0",attrs:{items:e.radioProps,descriptions:e.radio.propsDescs,title:"Props"}}),a("api",{attrs:{items:e.radio.slots,title:"Slots"}}),a("api",{attrs:{items:e.radioEvents,title:"Events"}})],1)},s=[],r=(a("13d5"),a("5530")),i=a("c0bc"),l=a("e101"),n=a("13aa"),d={propsDescs:{items:"",value:"",labelOnLeft:"",itemLabel:"",itemValue:"",itemColor:"",inline:"",color:'Applies a color to the active radio buttons. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',name:"",disabled:"",readonly:"",required:"",validators:""},slots:{item:{description:"Provide a custom content for each radio button label."}},eventsDescs:{input:"Emitted each time any of the radio buttons is toggled. It updates the v-model value in Vue 2.x only.<br>The return-value of the selected radio button is passed as a parameter.<br>The return-value will be one of these attributes, if they exist, in this order: the item value, the item label, the item index.","update:modelValue":"Emitted each time any of the radio buttons is toggled. It updates the v-model value in Vue 3 only.<br>The return-value of the selected radio button is passed as a parameter.<br>The return-value will be one of these attributes, if they exist, in this order: the item value, the item label, the item index.",focus:"Emitted on each radio button focus. The focus DOM event is returned as a parameter."}},u={propsDescs:{value:"",returnValue:"",label:"",labelOnLeft:"",color:'Applies a color to the radio button when active. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',noRipple:"",name:"",disabled:"",readonly:"",required:"",validators:""},slots:{default:{description:"The radio button label content."}},eventsDescs:{input:"Emitted each time the state of the radio button changes. It updates the v-model value in Vue 2.x only.<br>A boolean for the current state is passed as a parameter.","update:modelValue":"Emitted each time the state of the radio button changes. It updates the v-model value in Vue 3 only.<br>A boolean for the current state is passed as a parameter.",focus:"Emitted on each radio button focus. The focus DOM event is returned as a parameter."}},c={data:function(){return{radios:d,radio:u}},computed:{radiosProps:function(){return Object(r["a"])(Object(r["a"])({},l["a"].props),i["a"].props)},radioProps:function(){return Object(r["a"])(Object(r["a"])({},n["a"].props),i["a"].props)},radiosEvents:function(){return l["a"].emits.reduce((function(e,t){return(e[t]={description:d.eventsDescs[t]||""})&&e}),{})},radioEvents:function(){return n["a"].emits.reduce((function(e,t){return(e[t]={description:u.eventsDescs[t]||""})&&e}),{})}}},p=c,h=a("2877"),m=Object(h["a"])(p,o,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=radio-api-vue.1d40b249.js.map