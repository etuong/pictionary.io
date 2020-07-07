(function(t){function e(e){for(var a,n,o=e[0],c=e[1],l=e[2],d=0,h=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/pictionary.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"4ec6":function(t,e,s){},"52ce":function(t,e,s){},5515:function(t,e,s){"use strict";var a=s("52ce"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=s("8c4f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("section",{staticClass:"section-xs container has-text-centered"},[t._m(1),s("button",{staticClass:"button is-primary is-large ",on:{click:t.openRoomCreator}},[s("strong",[t._v("Create a room")])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"column is-12"},[s("h2",{staticClass:"title is-1"},[t._v("Hello 👋")]),s("h3",{staticClass:"subtitle is-2"},[t._v("\n                        Welcome to Coaxium Super Friendly (Easy Mode) Pictionary!\n                    ")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero is-light"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"content"},[s("h4",{staticClass:"title is-3 "},[t._v("The rules are simple:")]),s("p",[t._v("Every round has maximum time of 2 minutes")]),s("p",[t._v("You need at least 2 players to start the game")]),s("p",[t._v("As a painter you have to draw the suggested word")]),s("p",[t._v("As a viewer you have to guess the word")]),s("h5",{staticClass:"title is-5"},[t._v("Enjoy 😄")])])])])}],o={name:"homepage",methods:{openRoomCreator:function(){this.$emit("openRoomCreator")}}},c=o,l=(s("76c3"),s("2877")),u=Object(l["a"])(c,i,n,!1,null,"a0f8c088",null),d=u.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("section",{staticClass:"section"},[s("table",{staticClass:"table is-hoverable is-fullwidth"},[t._m(1),s("tbody",t._l(t.rooms,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.isPrivate?"Private":"Public"))]),s("td",[t._v(t._s(e.players.length)+"/"+t._s(e.maxPlayers))]),s("td",{staticClass:"is-paddingless"},[s("router-link",{staticClass:"button is-light is-fullwidth",attrs:{to:"./room/"+e.id}},[t._v("Join")])],1)])})),0)])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("This page displays all the active rooms")]),s("h2",{staticClass:"subtitle"},[t._v("Choose a room, or create new one and start the game️")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Name")]),s("th",[t._v("Type")]),s("th",[t._v("Players")]),s("th",[t._v("Actions")])])])}],v={name:"Rooms",data:function(){return{rooms:[]}},sockets:{receive_rooms:function(t){this.$data.rooms=t}},mounted:function(){this.$socket.emit("get_rooms")}},p=v,f=Object(l["a"])(p,h,m,!1,null,null,null),g=f.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-xs container"},[s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-full"},[t.room?s("h1",{staticClass:"title is-2 has-text-centered"},[t._v("\n                "+t._s(t.room.name.toUpperCase())+"\n            ")]):t._e(),t.room?s("h2",{staticClass:"subtitle is-4 has-text-centered"},[t._v("\n                "+t._s(parseInt(t.time/60))+":"+t._s(t.time%60<=9?"0"+t.time%60:t.time%60)+"\n            ")]):t._e()]),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("Players: "+t._s(t.players.length))])]),s("div",{staticClass:"card-content"},[t.showPlayers?s("ul",{staticClass:"content playerlist"},t._l(t.sortedPlayers,(function(e){return t.painter==e.id?s("li",{key:e.id},[s("strong",[t._v(t._s(e.name)+" ✏️")]),t._v(" :\n                            "),s("span",{staticClass:"has-text-weight-bold"},[t._v(t._s(e.points))])]):s("li",{key:e.id},[t._v("\n                            "+t._s(e.name)+" :\n                            "),s("span",{staticClass:"has-text-weight-bold"},[t._v(t._s(e.points))])])})),0):t._e()]),s("footer",{staticClass:"card-footer"},[s("router-link",{staticClass:"card-footer-item has-text-danger is-hoverable",attrs:{to:"/rooms"}},[t._v("\n                        Leave Room\n                    ")])],1)]),t.iDraw&&!t.roundStarted&&t.words.length>0?s("div",{staticClass:"card card--painter"},[s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[s("p",[t._v("Choose next word")]),s("span",[t._v(t._s(t.wordTime)+"s")])])]),s("div",{staticClass:"card-content"},[s("ul",{staticClass:"content"},t._l(t.words,(function(e){return s("li",{key:e},[s("button",{staticClass:"button is-fullwidth is-word",on:{click:function(){t.chooseWord(e)}}},[t._v("\n                                "+t._s(e)+"\n                            ")])])})),0)])]):t._e(),t.iDraw&&t.roundStarted?s("div",{staticClass:"card card--painter"},[t._m(0),s("div",{staticClass:"card-content"},[s("p",{staticClass:"content"},[t._v(t._s(t.guessedWord))])])]):t._e(),!t.iDraw&&t.roundStarted?s("div",{staticClass:"card card--painter"},[t._m(1),s("div",{staticClass:"card-content"},[s("p",{staticClass:"content"},[t._v(t._s(t.hints))])])]):t._e()]),s("whiteboard",{attrs:{iDraw:t.iDraw,started:t.roundStarted}}),s("div",{staticClass:"column is-3",attrs:{id:"chat"}},[s("div",{staticClass:"card chat"},[t._m(2),s("div",{ref:"chat",staticClass:"chat-body"},[s("ul",{staticClass:"chat-messages"},t._l(t.messages,(function(e){return s("li",{key:e.id,staticClass:"chat-message"},["server"!=e.sender?s("span",{staticClass:"has-text-weight-bold"},[t._v(t._s(e.sender)+":")]):t._e(),"server"==e.sender?s("span",[s("strong",[t._v(t._s(e.msg))])]):s("span",[t._v(t._s(" "+e.msg))])])})),0)]),s("footer",{staticClass:"card-footer"},[s("form",{staticClass:"field has-addons chat-input",on:{submit:t.sendMessage}},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"input is-borderless",attrs:{type:"text",placeholder:"Send a message..."},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._m(3)])])])])],1)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[s("p",[t._v("Your secret word")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("div",{staticClass:"card-header-title"},[s("p",[t._v("Word")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[t._v("Chat")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"control"},[s("input",{staticClass:"button is-primary is-borderless",attrs:{type:"submit",value:"Send"}})])}],_=(s("55dd"),s("6762"),s("2fdb"),s("96cf"),s("3b8d")),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-6"},[s("div",{staticClass:"card whiteboard-wrapper"},[t.iDraw?s("canvas",{ref:"canvas",staticClass:"whiteboard",attrs:{height:"600",width:"800",draggable:!1},on:{mousemove:t.emitLine,touchmove:t.getTouchPosition,mouseleave:t.leaveCanvas}}):s("canvas",{ref:"canvas",staticClass:"whiteboard",attrs:{height:"600",width:"800",draggable:!1}}),t.iDraw?s("footer",{staticClass:"card-footer"},[s("div",{staticClass:"card-footer-item"},[s("span",{staticClass:"label-input "},[t._v("Color: ")]),s("input",{staticClass:"color",attrs:{type:"color",value:"activeColor"},on:{change:function(e){return t.onColorChange(e)}}})]),s("div",{staticClass:"card-footer-item"},[s("span",{staticClass:"label-input "},[t._v("Line Width: ")]),s("input",{attrs:{type:"number",value:"activeLineWidth",min:"1",max:"200"},on:{change:function(e){return t.onLineWidthChange(e)}}})]),s("div",{staticClass:"card-footer-item"},[s("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clearBoard(e)}}},[t._v("Clear the board")])])]):t._e()])])},y=[];s("ac6a"),s("ac4d"),s("8a81"),s("5df3"),s("1c4c"),s("7f7f"),s("6b54");function x(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=$(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){o=!0,i=t},f:function(){try{n||null==s.return||s.return()}finally{if(o)throw i}}}}function $(t,e){if(t){if("string"===typeof t)return P(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?P(t,e):void 0}}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,a=new Array(e);s<e;s++)a[s]=t[s];return a}var k={name:"Whiteboard",data:function(){return{activeColor:"#000",activeLineWidth:1,prevPos:{x:null,y:null},ctx:null,draw:!1}},props:["iDraw","started"],methods:{initBoard:function(){this.ctx=this.$refs.canvas.getContext("2d"),this.ctx.lineJoin="round"},clearBoard:function(){this.$socket.emit("clear")},onColorChange:function(t){this.activeColor=t.target.value},onLineWidthChange:function(t){this.activeLineWidth=t.target.value},drawLine:function(t){var e=this.ctx,s=t.color,a=t.lineWidth,r=t.coords;r&&(e.strokeStyle=s,e.lineWidth=a,e.beginPath(),e.moveTo(r.prevPos.x,r.prevPos.y),e.lineTo(r.currPos.x,r.currPos.y),e.closePath(),e.stroke())},emitLine:function(t){if(this.draw&&this.iDraw){var e=this.getCanvasPosition(this.$refs.canvas,t);if(null!=this.prevPos.x&&null!=this.prevPos.y&&this.started){var s={prevPos:this.prevPos,currPos:e},a={color:this.activeColor,lineWidth:this.activeLineWidth,coords:s};this.$socket.emit("paint",a),this.drawLine(a)}this.prevPos.x=e.x,this.prevPos.y=e.y}},enableDrawing:function(){this.draw=!0},disableDrawing:function(){this.draw=!1,this.prevPos.x=null,this.prevPos.y=null},leaveCanvas:function(){this.prevPos.x=null,this.prevPos.y=null},getTouchPosition:function(t){if(this.iDraw){t.preventDefault(),t.stopPropagation();var e=t.touches[0],s=new MouseEvent("mousemove",{clientX:e.clientX,clientY:e.clientY});this.emitLine(s)}},getCanvasPosition:function(t,e){var s=t.getBoundingClientRect(),a=t.width/s.width,r=t.height/s.height;return{x:(e.clientX-s.left)*a,y:(e.clientY-s.top)*r}},addEvents:function(){window.addEventListener("mousedown",this.enableDrawing),window.addEventListener("touchstart",this.enableDrawing),window.addEventListener("mouseup",this.disableDrawing),window.addEventListener("touchend",this.disableDrawing)},removeEvents:function(){window.removeEventListener("mousedown",this.enableDrawing),window.removeEventListener("touchstart",this.enableDrawing),window.removeEventListener("mouseup",this.disableDrawing),window.removeEventListener("touchend",this.disableDrawing)}},watch:{iDraw:function(t){t?this.addEvents():this.removeEvents()}},sockets:{paint:function(t){t&&this.drawLine(t)},getPainting:function(t){var e,s=x(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;this.drawLine(a)}}catch(r){s.e(r)}finally{s.f()}},clear:function(){this.ctx.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height)}},mounted:function(){this.initBoard(),this.iDraw&&this.addEvents()},destroyed:function(){this.removeEvents()}},E=k,R=(s("5515"),Object(l["a"])(E,b,y,!1,null,null,null)),T=R.exports,j={name:"Room",data:function(){return{players:[],showPlayers:!1,room:null,message:"",messages:[],painter:null,words:[],iDraw:!1,guessedWord:null,hints:null,roundStarted:!1,time:0,wordTime:0}},components:{Whiteboard:T},methods:{joinRoom:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e="",this.room.players.includes(this.$socket.id)||!this.room.isPrivate){t.next=5;break}return t.next=4,this.getPassword();case 4:e=t.sent;case 5:return t.next=7,this.getName();case 7:s=t.sent,this.$socket.emit("join_room",{id:this.$route.params.id,name:s,password:e}),this.$socket.name=s,this.showPlayers=!0;case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPlayers:function(){this.$socket.emit("get_players")},getRoomInfo:function(){this.$socket.emit("get_room",this.$route.params.id)},getName:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$swal({title:"Enter your name",input:"text",showCancelButton:!1,inputPlaceholder:"Your name is...",inputAttributes:{autocapitalize:"off",autocorrect:"off"}});case 2:return e=t.sent,t.abrupt("return",e.value);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getPassword:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$swal({title:"Enter your password",input:"password",showCancelButton:!0,inputPlaceholder:"Enter your password",inputAttributes:{autocapitalize:"off",autocorrect:"off"}});case 2:return e=t.sent,s=e.value,t.abrupt("return",s);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendMessage:function(t){t.preventDefault(),0!=this.message.length&&(this.$socket.emit("send_message",this.message),this.message="")},chooseWord:function(t){this.$socket.emit("word_chosen",t)},setPainter:function(t){this.painter=t,this.iDraw=t==this.$socket.id},scrollChat:function(){var t=this;this.$nextTick((function(){t.$refs.chat.scrollTo(0,t.$refs.chat.scrollHeight)}))}},sockets:{receive_players:function(t){this.players=t},join_room_error:function(t){this.$swal({title:t,type:"error"}),this.$router.push("/rooms")},receive_room:function(t){t?(this.room=t,this.setPainter(t.painter),this.getPlayers(),this.joinRoom()):(this.$swal({title:"This room does not exist",type:"error"}),this.$router.push("/rooms"))},receive_message:function(t){t&&t.msg&&t.msg.length&&(this.messages.push(t),this.scrollChat())},receive_server_message:function(t){t&&t.length&&(this.messages.push({sender:"server",msg:t}),this.scrollChat())},receive_callback:function(t){t&&t.length&&(this.messages.push({sender:"server",msg:t}),this.scrollChat())},receive_guessed_word:function(t){this.guessedWord=t},receive_hints:function(t){this.hints=t},round_initialized:function(t){this.words=t},round_started:function(){this.roundStarted=!0,this.words=[]},round_stopped:function(){this.roundStarted=!1},painter_changed:function(t){this.setPainter(t)},countdown:function(t){this.time=t},countdown_painter:function(t){this.wordTime=t}},computed:{sortedPlayers:function(){return this.players.sort((function(t,e){return e.points-t.points}))}},mounted:function(){this.getRoomInfo()},watch:{"$route.params.id":function(t){this.messages=[],this.getRoomInfo()}}},D=j,O=(s("e4f4"),Object(l["a"])(D,w,C,!1,null,"029a0186",null)),S=O.exports;a["a"].use(r["a"]);var L=new r["a"]({routes:[{path:"/",name:"home",component:d},{path:"/rooms",name:"rooms",component:g},{path:"/room/:id",name:"room",component:S}]}),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app",attrs:{id:"app"}},[s("audio",{attrs:{id:"audio",src:"https://www.soundjay.com/human/sounds/fart-03.mp3",autostart:"false"}}),s("navigation",{on:{openCreator:t.openRoomCreator}}),s("div",{staticClass:"main"},[s("router-view",{on:{openRoomCreator:t.openRoomCreator}})],1),s("room-creator",{attrs:{isVisible:t.isModalVisible},on:{closeRoomCreator:t.closeRoomCreator}}),s("footer-component")],1)},W=[],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-menu",class:{"is-active":t.active},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Homepage")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/rooms"}},[t._v("Rooms")])],1)])])},A=[],N={name:"Nav",data:function(){return{active:!1}}},I=N,V=(s("d79f"),Object(l["a"])(I,B,A,!1,null,null,null)),Y=V.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-modal",{staticClass:"section-xs",attrs:{visible:t.isVisible,title:"Create a room",transition:"fade"},on:{cancel:t.close,ok:t.createRoom}},[s("form",{staticClass:"columns is-multiline"},[s("div",{staticClass:"field column is-12"},[s("label",{staticClass:"label"},[t._v("Room name")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter the name..",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t.errors["name"]?s("p",{staticClass:"help is-danger"},[t._v("\n                You have to enter the name.\n            ")]):t._e()]),s("div",{staticClass:"field column is-6"},[s("label",{staticClass:"label"},[t._v("Password")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text",placeholder:"Text input",disabled:!t.isPrivate},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.errors["password"]?s("p",{staticClass:"help is-danger"},[t._v("\n                Minimum password length is 3\n            ")]):t._e()]),s("div",{staticClass:"field column is-6"},[s("label",{staticClass:"label"},[t._v("Max Players")]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPlayers,expression:"maxPlayers"}],staticClass:"input",attrs:{type:"number",placeholder:"Text input",min:"2",required:""},domProps:{value:t.maxPlayers},on:{input:function(e){e.target.composing||(t.maxPlayers=e.target.value)}}})]),t.errors["players"]?s("p",{staticClass:"help is-danger"},[t._v("\n                Minimum players quantity is 2\n            ")]):t._e()]),s("div",{staticClass:"column is-6"},[s("label",{staticClass:"label"},[t._v("Round time")]),s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-fullwidth"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.roundTime,expression:"roundTime"}],staticClass:"input",attrs:{type:"number",placeholder:"Text input",min:"30",required:""},domProps:{value:t.roundTime},on:{input:function(e){e.target.composing||(t.roundTime=e.target.value)}}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-static"},[t._v("s")])])]),t.errors["round"]?s("p",{staticClass:"help is-danger"},[t._v("\n                Minimum time for a round is 30 seconds.\n            ")]):t._e()]),s("div",{staticClass:"column is-6"},[s("label",{staticClass:"label"},[t._v("Word choosing time")]),s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-fullwidth"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.wordTime,expression:"wordTime"}],staticClass:"input",attrs:{type:"number",placeholder:"Text input",min:"10",required:""},domProps:{value:t.wordTime},on:{input:function(e){e.target.composing||(t.wordTime=e.target.value)}}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-static"},[t._v("s")])])]),t.errors["word"]?s("p",{staticClass:"help is-danger"},[t._v("\n                Minimum time for choosing a word is 10 seconds.\n            ")]):t._e()]),s("div",{staticClass:"field column is-12"},[s("div",{staticClass:"control"},[s("switches",{attrs:{"text-enabled":"The room is private","text-disabled":"The room is public",theme:"bulma",color:"default"},model:{value:t.isPrivate,callback:function(e){t.isPrivate=e},expression:"isPrivate"}})],1)])])])},F=[],J=s("a8db"),z=s("5c47"),H=s("aea8"),U={name:"roomCreator",data:function(){return{name:"",password:"",maxPlayers:5,roundTime:80,wordTime:25,isPrivate:!1,errors:{}}},components:{Switches:z["a"],CardModal:H["a"]},props:["isVisible"],methods:{createRoom:function(){var t=this.$data,e=(t.errors,Object(J["a"])(t,["errors"])),s=!0;return e.name.length<1?(this.$set(this.$data.errors,"name",!0),s=!1):this.$set(this.$data.errors,"name",!1),e.isPrivate&&(e.password.length<3?(this.$set(this.$data.errors,"password",!0),s=!1):this.$set(this.$data.errors,"password",!1)),e.maxPlayers<2?(this.$set(this.$data.errors,"players",!0),s=!1):this.$set(this.$data.errors,"players",!1),e.roundTime<30?(this.$set(this.$data.errors,"round",!0),s=!1):this.$set(this.$data.errors,"round",!1),e.wordTime<10?(this.$set(this.$data.errors,"word",!0),s=!1):this.$set(this.$data.errors,"word",!1),!!s&&(this.$socket.emit("create_room",e),this.$emit("closeRoomCreator"),this.resetForm(),!0)},close:function(){this.$emit("closeRoomCreator")},resetForm:function(){this.$data.name="",this.$data.password="",this.$data.maxPlayers=5,this.$data.isPrivate=!1,this.$data.errors={}}}},X=U,G=(s("8276"),Object(l["a"])(X,q,F,!1,null,null,null)),K=G.exports,Q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("p",[t._v("\n                Forked and Modified by\n                "),s("a",{attrs:{href:"https://github.com/etuong/pictionary.io.git",target:"_blank"}},[t._v("Ethan Uong")]),t._v(" 👨‍💻\n            ")])])])])}],tt={name:"footer"},et=tt,st=(s("d60d"),Object(l["a"])(et,Q,Z,!1,null,"02e22cd3",null)),at=st.exports,rt={name:"App",data:function(){return{isModalVisible:!1}},components:{navigation:Y,"room-creator":K,"footer-component":at},methods:{openRoomCreator:function(){this.$data.isModalVisible=!0},closeRoomCreator:function(){this.$data.isModalVisible=!1}},sockets:{room_created:function(t){this.$router.push({name:"room",params:{id:t}})},play_audio:function(){var t=document.getElementById("audio");t.play()}},watch:{$route:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e,s){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:"room"==s.name&&this.$socket.emit("leave_room");case 1:case"end":return t.stop()}}),t,this)})));function e(e,s){return t.apply(this,arguments)}return e}()}},it=rt,nt=(s("5c0b"),Object(l["a"])(it,M,W,!1,null,null,null)),ot=nt.exports,ct=s("5132"),lt=s.n(ct),ut=s("cf1e"),dt=s.n(ut),ht=s("619c"),mt=s("9483");Object(mt["a"])("".concat("/pictionary.io/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});s("b20f");a["a"].config.productionTip=!1,a["a"].use(new lt.a({debug:!1,connection:"http://localhost:5050"})),a["a"].use(ht["a"],{confirmButtonColor:dt.a.primary,cancelButtonColor:dt.a.light}),new a["a"]({router:L,render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("e332"),r=s.n(a);r.a},"76c3":function(t,e,s){"use strict";var a=s("d5dd"),r=s.n(a);r.a},8276:function(t,e,s){"use strict";var a=s("e6c7"),r=s.n(a);r.a},"9e74":function(t,e,s){t.exports={primary:"#325B84",light:"#dcdcdc"}},b20f:function(t,e,s){t.exports={primary:"#325B84",light:"#dcdcdc"}},c76b:function(t,e,s){},cf1e:function(t,e,s){t.exports={primary:"#325B84",light:"#dcdcdc"}},d5dd:function(t,e,s){},d60d:function(t,e,s){"use strict";var a=s("4ec6"),r=s.n(a);r.a},d79f:function(t,e,s){"use strict";var a=s("9e74"),r=s.n(a);r.a},e332:function(t,e,s){t.exports={primary:"#325B84",light:"#dcdcdc"}},e4f4:function(t,e,s){"use strict";var a=s("c76b"),r=s.n(a);r.a},e6c7:function(t,e,s){}});
//# sourceMappingURL=app.36d3d8d5.js.map