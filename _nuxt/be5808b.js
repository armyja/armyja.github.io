(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(t,e,n){var content=n(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("2839c739",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";n(202)},204:function(t,e,n){var r=n(48)(!1);r.push([t.i,".background{--tw-bg-opacity:1;background-color:rgba(239,68,68,var(--tw-bg-opacity));width:32rem}.background .text{text-align:justify;color:rgba(255,255,255,var(--tw-text-opacity));white-space:pre}.background .text,button{font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1}button{--tw-bg-opacity:1;background-color:rgba(252,252,252,var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(239,68,68,var(--tw-border-opacity));border-radius:1.5rem;border-style:solid;cursor:pointer;font-weight:700;height:2rem;color:rgba(239,68,68,var(--tw-text-opacity));width:5rem}.animation-text-wipe{-webkit-mask-image:linear-gradient(90deg,#fff 0,transparent 1%,transparent 50%,#fff 0,#fff);-webkit-mask-image:linear-gradient(90deg,#fff 0,transparent 1% 50%,#fff 50% 100%);-webkit-mask-size:400%;-webkit-mask-position:-33%;-webkit-animation-name:text-wipe;animation-name:text-wipe;-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes text-wipe{0%{-webkit-mask-position:2%}to{-webkit-mask-position:-33%}}@keyframes text-wipe{0%{-webkit-mask-position:2%}to{-webkit-mask-position:-33%}}",""]),t.exports=r},205:function(t,e,n){"use strict";n.r(e);n(47);var r=n(0),o=Object(r.d)({setup:function(){return{_canvas:null,arr:[],flag:!1,timeoutFn:0,interval:1600}},methods:{getTextWidth:function(text,t){var e=(this._canvas||(this._canvas=window.document.createElement("canvas"))).getContext("2d");return e.font=t,e.measureText(text).width},clearText:function(){this.arr.splice(0,this.arr.length);var t=window.document.querySelector(".background");if(t)for(;t.lastElementChild!==t.firstElementChild;)t.lastElementChild&&t.removeChild(t.lastElementChild)},skip:function(){if(0!==this.arr.length){this.flag=!0;var t=window.document.querySelectorAll(".animation-text-wipe");t[t.length-1].classList.remove("animation-text-wipe"),window.clearTimeout(this.timeoutFn),this.fn()}},fn:function(){var t=this,time=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return window.setTimeout((function(){if(0!==t.arr.length){var e=window.document.querySelector(".background"),n=window.document.createElement("div");n.textContent=t.arr.shift()||"",n.classList.add("text"),t.flag||n.classList.add("animation-text-wipe"),e&&e.appendChild(n),t.arr.length>0&&(t.timeoutFn=t.fn(t.flag?0:t.interval))}}),time)},generate:function(){if(!(this.arr.length>0)){this.clearText(),this.flag=!1;for(var t=getComputedStyle(document.querySelector("#empty")).width,e=getComputedStyle(document.querySelector("#empty")).font,n=parseFloat(t.replace("px","")),content=window.document.querySelector("#content").value,r=0,i=0,o=0;i<content.length;i++){if(o+=this.getTextWidth(content[i],e),"\n"===content[i]){o=0;var c=content.substring(r,i);this.arr.push(c),r=i+1}if(o>n){o=this.getTextWidth(content[i],e);var l=content.substring(r,i);this.arr.push(l),r=i}}r<i&&this.arr.push(content.substring(r,i)),this.timeoutFn=this.fn()}}},mounted:function(){var t=this;setTimeout((function(){t.generate()}),1e3)},unmounted:function(){window.clearTimeout(this.timeoutFn),this.clearText()},head:function(){return{title:"文字动画",meta:[{hid:"description",name:"description",content:"文字动画"}]}}}),c=(n(203),n(30)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nuxt-link",{attrs:{to:"text/list"}},[t._v("列表")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"space-x-3 my-3"},[n("button",{attrs:{id:"btn"},on:{click:t.generate}},[t._v("生成")]),t._v(" "),n("button",{attrs:{id:"btn1"},on:{click:t.skip}},[t._v("跳过")]),t._v(" "),n("button",{attrs:{id:"btn2"},on:{click:t.clearText}},[t._v("清空")])]),t._v(" "),n("textarea",{staticStyle:{width:"500px",height:"100vh"},attrs:{id:"content"}},[t._v("        长歌行\n        作者：李白\n        \n        桃李待日开，荣华照当年。\n        东风动百物，草木尽欲言。\n        枯枝无丑叶，涸水吐清泉。\n        大力运天地，羲和无停鞭。\n        功名不早著，竹帛将何宣。\n        桃李务青春，谁能贯白日。\n        富贵与神仙，蹉跎成两失。\n        金石犹销铄，风霜无久质。\n        畏落日月后，强欢歌与酒。\n        秋霜不惜人，倏忽侵蒲柳。\n\n        桃李盛开的日子，荣华灿烂照耀当年。春风吹动万物，大地上处处充满了蓬勃的生机，草木都意欲彰显自己最美的一面。在这万物复苏的季节，枯枝上不会长出丑叶，干涸之水也会吐出清泉。天地万物都跟随大自然的运转，太阳公羲和没有停鞭休息的时候。如果功名不早著，自己的功勋怎会彪炳史册呢？桃李开时须是春天，谁能让白天悄悄流逝，而期望它能再次回来？富贵与神仙，两者是不能同时得到的，再蹉跎下去二者都会以失败而告终。金石尚且能够销铄，风霜尚且没有固定的品质，何况是人呢？害怕等到日下月落之后，只会在歌与酒之间强颜欢笑，蹉跎时光。秋霜是不会等人的，突然之间蒲树与柳树的叶子就凋落了。\n\n        诗用浪漫手法开始，前四句谈自己生平的抱负：或者做个安期生那样的神仙，游戏人生；要么做个李西平那样的名将，杀敌立功。这四句写得气势很雄壮，与李白《将进酒》等古风一样，给人以一种强烈的激励，使人进入振奋的状态。就表达上来说，前者又只是后者的陪衬，做神仙是幻想，做名将才是诗人努力想实现的方向。同时，用李西平事又十分贴切当时时局，陆游正是想要同李西平扫平逆贼、收复旧京长安一样扫平金虏、收复旧都汴京。\n\n　　然而，现实是残酷无情的，愿望是那么地虚无缥缈。诗人回到了现实，便把前四句放出的狂澜一下子倒挽回来，进而感叹自己，年龄老大，功业无成，只能闲居在僧寮，无聊地躺着，默送着夕阳西下。他想着，像自己这样的战士，就不能只作个诗人，发出凄苦的吟声，这决不是自己所愿意的，于是诗在沉重的压抑中再度放开，故作豪语，先写自己放浪于酒，意气奋发，从而在吐露心中郁结的烦闷时，又表现自己的豪情、对未来的向往，这就是收复失地，饮酒庆功。末两句结得很自然，既承上饮酒而来，又与起首要做李西平遥遥呼应。\n\n　　后人评放翁诗十九都是从军之作，这首诗虽然是闲居遣怀，主题仍与从军诗保持了一致。诗的格调雄放豪轶，悲中带壮，既有不满与牢骚，又充满积极向上的奋斗精神，无论是醉歌作达还是自我排遣，都紧密围绕对国事的关心与对未来的信心，所以很有鼓舞力。\n    ")])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background"},[e("div",{staticClass:"text",attrs:{id:"empty"}})])}],!1,null,null,null);e.default=component.exports}}]);