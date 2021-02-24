(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["badge-examples-vue"],{"0f68":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("title-link",{attrs:{h2:""}},[e._v("Default")]),n("p",[e._v("The default badge background color is primary.")]),n("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge>\n  <template #badge>3</template>\n  <w-button color="primary">\n    <w-icon class="mr1">mdi mdi-email</w-icon>\n    Emails\n  </w-button>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-button",{staticClass:"primary",attrs:{text:""}},[n("w-icon",{staticClass:"mr1"},[e._v("mdi mdi-email")]),e._v("Emails")],1)],1)],1),n("title-link",{attrs:{h2:""}},[e._v("V-model")]),n("p",[e._v("The badge appears if one of these conditions is fulfilled:")]),e._m(0),n("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex align-center>\n  <w-button\n    @click="showBadge--"\n    icon="wi-minus"\n    bg-color="success"\n    sm>\n  </w-button>\n\n  <w-badge\n    class="mx6"\n    v-model="showBadge"\n    bg-color="error"\n    overlap>\n    <w-icon color="grey-light1" size="2.4em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-button\n    @click="showBadge++"\n    icon="wi-plus"\n    bg-color="success"\n    sm>\n  </w-button>\n</w-flex>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: 0\n})\n")]},proxy:!0}])},[n("w-flex",{attrs:{"align-center":""}},[n("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge--}}}),n("w-badge",{staticClass:"mx6",attrs:{"bg-color":"error",overlap:""},model:{value:e.showBadge,callback:function(t){e.showBadge=t},expression:"showBadge"}},[n("w-icon",{attrs:{color:"grey-light1",size:"2.4em"}},[e._v("mdi mdi-email")])],1),n("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.showBadge++}}})],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Positions")]),n("p",[e._v("The default position is top right.")]),n("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb2">Top</div>\n<w-badge class="ml4 mr10" top left>\n  <template #badge>3</template>\n  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n<w-badge top right>\n  <template #badge>3</template>\n  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n\n<div class="title4 mt6 mb2">Bottom</div>\n<w-badge class="ml4 mr10" bottom left>\n  <template #badge>3</template>\n  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n<w-badge bottom right>\n  <template #badge>3</template>\n  <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("div",{staticClass:"title4 mb2"},[e._v("Top")]),n("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("div",{staticClass:"title4 mt6 mb2"},[e._v("Bottom")]),n("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Color and background color")]),e._m(1),n("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge class="mr10" bg-color="error">\n  <template #badge>3</template>\n  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n\n<w-badge class="mr10" color="yellow">\n  <template #badge>3</template>\n  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n\n<w-badge bg-color="lime-light1" color="green-dark2">\n  <template #badge>3</template>\n  <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{staticClass:"mr10",attrs:{color:"yellow"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{"bg-color":"lime-light1",color:"green-dark2"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Dot")]),n("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge class="mr10" dot bg-color="red">\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n\n<w-badge dot bottom bg-color="red">\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red"}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{attrs:{dot:"",bottom:"","bg-color":"red"}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Sizes")]),e._m(2),n("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title3 mb2">Dots</div>\n<w-flex wrap>\n  <w-badge class="mr10" dot bg-color="red" xs>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" dot bg-color="red" sm>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" dot bg-color="red" md>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" dot bg-color="red" lg>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" dot bg-color="red" xl>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n</w-flex>\n\n<div class="title3 mt6 mb2">Text content</div>\n<w-flex wrap>\n  <w-badge class="mr10" bg-color="error" xs>\n    <template #badge>busy</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" sm>\n    <template #badge>busy</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" md>\n    <template #badge>busy</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" lg>\n    <template #badge>busy</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" xl>\n    <template #badge>busy</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n</w-flex>\n\n<div class="title3 mt6 mb2">Numeric content</div>\n<w-flex wrap>\n  <w-badge class="mr10" bg-color="error" xs>\n    <template #badge>3</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" sm>\n    <template #badge>3</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" md>\n    <template #badge>3</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" lg>\n    <template #badge>3</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n  <w-badge class="mr10" bg-color="error" xl>\n    <template #badge>3</template>\n    <w-icon size="2.5em">mdi mdi-account</w-icon>\n  </w-badge>\n</w-flex>\n')]},proxy:!0}])},[n("div",{staticClass:"title3 mb2"},[e._v("Dots")]),n("w-flex",{attrs:{wrap:""}},[n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xs:""}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",sm:""}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",md:""}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",lg:""}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{dot:"","bg-color":"red",xl:""}},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("div",{staticClass:"title3 mt6 mb2"},[e._v("Text content")]),n("w-flex",{attrs:{wrap:""}},[n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("div",{staticClass:"title3 mt6 mb2"},[e._v("Numeric content")]),n("w-flex",{attrs:{wrap:""}},[n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Overlap")]),n("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="title4 mb3">Top</div>\n<div class="w-flex wrap align-center">\n  <w-badge class="ml4 mr10" top left>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-badge top right>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-icon\n    class="mx12\n    grey-light3"\n    size="2.5em">\n    mdi mdi-arrow-right\n  </w-icon>\n\n  <w-badge class="mr10" top left overlap>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-badge top right overlap>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n</div>\n\n<div class="title4 mt8 mb3">Bottom</div>\n<div class="w-flex wrap align-center">\n  <w-badge class="ml4 mr10" bottom left>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-badge bottom right>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-icon\n    class="mx12\n    grey-light3"\n    size="2.5em">\n    mdi mdi-arrow-right\n  </w-icon>\n\n  <w-badge class="mr10" bottom left overlap>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n\n  <w-badge bottom right overlap>\n    <template #badge>3</template>\n    <w-icon\n      class="grey-light1"\n      size="2.5em">\n      mdi mdi-email\n    </w-icon>\n  </w-badge>\n</div>\n')]},proxy:!0}])},[n("div",{staticClass:"title4 mb3"},[e._v("Top")]),n("div",{staticClass:"w-flex wrap align-center"},[n("w-badge",{staticClass:"ml4 mr10",attrs:{top:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{top:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),n("w-badge",{staticClass:"mr10",attrs:{top:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{top:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1),n("div",{staticClass:"title4 mt8 mb3"},[e._v("Bottom")]),n("div",{staticClass:"w-flex wrap align-center"},[n("w-badge",{staticClass:"ml4 mr10",attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-icon",{staticClass:"mx12 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),n("w-badge",{staticClass:"mr10",attrs:{bottom:"",left:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{bottom:"",right:"",overlap:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)]),n("div",{staticClass:"title3 mt8 mb3"},[e._v("Overlaps with different sizes")]),n("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-flex wrap align-center>\n  <w-badge class="mr10" overlap xs>\n    <template #badge>3</template>\n    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n  </w-badge>\n\n  <w-badge class="mr10" overlap sm>\n    <template #badge>3</template>\n    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n  </w-badge>\n\n  <w-badge class="mr10" overlap md>\n    <template #badge>3</template>\n    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n  </w-badge>\n\n  <w-badge class="mr10" overlap lg>\n    <template #badge>3</template>\n    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n  </w-badge>\n\n  <w-badge overlap xl>\n    <template #badge>3</template>\n    <w-icon class="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n  </w-badge>\n</w-flex>\n')]},proxy:!0}])},[n("w-flex",{attrs:{wrap:"","align-center":""}},[n("w-badge",{staticClass:"mr10",attrs:{overlap:"",xs:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{staticClass:"mr10",attrs:{overlap:"",sm:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{staticClass:"mr10",attrs:{overlap:"",md:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{staticClass:"mr10",attrs:{overlap:"",lg:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1),n("w-badge",{attrs:{overlap:"",xl:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("3")]},proxy:!0}])},[n("w-icon",{staticClass:"grey-light1",attrs:{size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Force round badge")]),e._m(3),n("example",{attrs:{"content-class":"mt1"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge bg-color="error">\n  <template #badge="">\n    <span class="size--sm">11</span>\n  </template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n\n<w-icon\n  class="ml12 mr6 grey-light3"\n  size="2.5em">\n  mdi mdi-arrow-right\n</w-icon>\n\n<w-badge bg-color="error" round>\n  <template #badge="">\n    <span class="size--sm">11</span>\n  </template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{attrs:{"bg-color":"error"},scopedSlots:e._u([{key:"badge",fn:function(){return[n("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),n("w-badge",{attrs:{"bg-color":"error",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[n("span",{staticClass:"size--sm"},[e._v("11")])]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Icons")]),n("example",{attrs:{"content-class":"mt2"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge class="mr10" bg-color="success" overlap round>\n  <template #badge>\n    <w-icon>mdi mdi-check</w-icon>\n  </template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n\n<w-badge class="mr10" bg-color="error" overlap round>\n  <template #badge>\n    <w-icon>mdi mdi-close</w-icon>\n  </template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n\n<w-badge bg-color="transparent" overlap round>\n  <template #badge>\n    <w-icon color="pink-light1" md>mdi mdi-heart</w-icon>\n  </template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"success",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[n("w-icon",[e._v("mdi mdi-check")])]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{staticClass:"mr10",attrs:{"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[n("w-icon",[e._v("mdi mdi-close")])]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-badge",{attrs:{"bg-color":"transparent",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[n("w-icon",{attrs:{color:"pink-light1",md:""}},[e._v("mdi mdi-heart")])]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Override badge padding")]),n("example",{attrs:{"content-class":"w-flex wrap align-center"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-badge bg-color="error" badge-class="px1">\n  <template #badge>busy</template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n\n<w-icon\n  class="ml12 mr6 grey-light3"\n  size="2.5em">\n  mdi mdi-arrow-right\n</w-icon>\n\n<w-badge bg-color="error" badge-class="px4">\n  <template #badge>busy</template>\n  <w-icon size="2.5em">mdi mdi-account</w-icon>\n</w-badge>\n')]},proxy:!0}])},[n("w-badge",{attrs:{"bg-color":"error","badge-class":"px1"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1),n("w-icon",{staticClass:"ml12 mr6 grey-light3",attrs:{size:"2.5em"}},[e._v("mdi mdi-arrow-right")]),n("w-badge",{attrs:{"bg-color":"error","badge-class":"px4"},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("busy")]},proxy:!0}])},[n("w-icon",{attrs:{size:"2.5em"}},[e._v("mdi mdi-account")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Transitions")]),e._m(4),n("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex align-center wrap">\n  <w-flex column no-grow align-end>\n    <span class="mb2">Toggle with this transition effect:</span>\n    <w-button\n      class="code ma1"\n      @click="transition = \'fade\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      fade\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'bounce\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      bounce\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'twist\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      twist\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'scale\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      scale\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'scale-fade\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      scale-fade\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'slide-fade-left\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      slide-fade-left\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'slide-fade-right\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      slide-fade-right\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'slide-fade-up\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      slide-fade-up\n    </w-button>\n    <w-button\n      class="code ma1"\n      @click="transition = \'slide-fade-down\';showBadge = !showBadge"\n      bg-color="primary"\n      xs>\n      slide-fade-down\n    </w-button>\n  </w-flex>\n\n  <div class="w-flex grow">\n    <div class="xs2"></div>\n    <div class="xs10">\n      <w-badge\n        class="ma4"\n        v-model="showBadge"\n        :transition="transition"\n        bg-color="error"\n        overlap\n        round>\n        <template #badge>5</template>\n        <w-icon color="grey-light1" size="2.5em">mdi mdi-email</w-icon>\n      </w-badge>\n    </div>\n  </w-flex>\n</div>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  showBadge: false,\n  transition: 'fade'\n})")]},proxy:!0}])},[n("div",{staticClass:"w-flex align-center wrap"},[n("w-flex",{attrs:{column:"","no-grow":"","align-end":""}},[n("span",{staticClass:"mb2"},[e._v("Toggle with this transition effect:")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="fade",e.showBadge2=!e.showBadge2}}},[e._v("fade")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="bounce",e.showBadge2=!e.showBadge2}}},[e._v("bounce")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="twist",e.showBadge2=!e.showBadge2}}},[e._v("twist")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale",e.showBadge2=!e.showBadge2}}},[e._v("scale")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="scale-fade",e.showBadge2=!e.showBadge2}}},[e._v("scale-fade")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-left",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-left")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-right",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-right")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-up",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-up")]),n("w-button",{staticClass:"code ma1",attrs:{"bg-color":"primary",xs:""},on:{click:function(t){e.transition="slide-fade-down",e.showBadge2=!e.showBadge2}}},[e._v("slide-fade-down")])],1),n("div",{staticClass:"w-flex grow"},[n("div",{staticClass:"xs2"}),n("div",{staticClass:"xs10"},[n("w-badge",{staticClass:"ma4",attrs:{transition:e.transition,"bg-color":"error",overlap:"",round:""},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("5")]},proxy:!0}]),model:{value:e.showBadge2,callback:function(t){e.showBadge2=t},expression:"showBadge2"}},[n("w-icon",{attrs:{color:"grey-light1",size:"2.5em"}},[e._v("mdi mdi-email")])],1)],1)])],1)])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("No v-model or value is provided but a badge slot is.")]),n("li",[e._v("A v-model or a value is given and is not "),n("code",[e._v("null")]),e._v(", "),n("code",[e._v("false")]),e._v(" or "),n("code",[e._v("0")]),e._v("."),n("br"),e._v("\nIf you want to show one of these values, you can cast it to a string and it will show up.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Like in most components, you can set a "),n("code",[e._v("color")]),e._v(" for the text and a "),n("code",[e._v("bg-color")]),e._v(" for the\nbackground.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The badge size can be controlled via the preset sizes "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("sm")]),e._v(", "),n("code",[e._v("md")]),e._v(",\n"),n("code",[e._v("lg")]),e._v(", "),n("code",[e._v("xl")]),e._v(" or via the "),n("code",[e._v("size")]),e._v(" prop (sets the font-size).")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("For instance, if you increase the font size of the badge like in this example, the natural behavior\nof the badge is to increase its width to adapt to its content."),n("br"),e._v("\nWith the option "),n("code",[e._v("round")]),e._v(" you can force it to be round.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The default transition is "),n("code",[e._v("fade")]),e._v(".")])}],o={data:function(){return{showBadge:0,showBadge2:!1,transition:"fade"}}},s=o,r=n("2877"),c=Object(r["a"])(s,a,i,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=badge-examples-vue.1b8749eb.js.map