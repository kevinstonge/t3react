(this["webpackJsonptic-tac-toe-react-stretch"]=this["webpackJsonptic-tac-toe-react-stretch"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=(n(12),n(1)),u=n(2),s=n(4),l=n(3),f=(n(13),function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Game status: ",this.props.gameState),r.a.createElement("div",{id:"gameBoard"},this.props.boardMap.map((function(e,n){return r.a.createElement("div",{key:"cell".concat(n),className:"gameCell",onClick:function(){return t.props.update(n)}},"e"!==e?"p"===e?t.props.pSymbol:t.props.cSymbol:"")}))))}}]),n}(r.a.Component)),p=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e="easy"===this.props.difficulty?"hard":"easy";return r.a.createElement("div",null,r.a.createElement("h2",null,"options:"),r.a.createElement("button",{onClick:function(){return t.props.updateSettings("newGame")}},"new game"),r.a.createElement("button",{onClick:function(){return t.props.updateSettings("difficulty")}},"set difficulty to ",e))}}]),n}(r.a.Component),h=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]],d=function(t){var e=[];return h.forEach((function(n){var a=0;t.forEach((function(t){n.includes(t)&&a++,2===a&&e.push(n)}))})),e},m=function(t){var e=[];return h.forEach((function(n){t.includes(n[0])&&t.includes(n[1])&&t.includes(n[2])&&e.push(n)})),e},y=function(t,e){var n=e,a=[],r=[];if(n.boardMap.forEach((function(t,e){"p"===t&&a.push(e),"c"===t&&r.push(e)})),a.includes(t)||r.includes(t)||"your turn"!==n.gameState)return n;if(a.push(t),n.boardMap[t]="p",m(a).length>0)return n.gameState="you win!",n;var c=[],i=d(r).concat(d(a));i.length>0&&i.forEach((function(t){t.forEach((function(t){r.includes(t)||a.includes(t)||c.push(t)}))}));var o=[4,0,2,6,8,1,3,5,7];"easy"===n.difficulty&&(o=o.reverse());var u=-1;return 0===a.length&&0===r.length&&"c"===n.firstPlayer?u="easy"===n.difficulty?o[Math.ceil(Math.random()*(o.length-1))]:o[0]:(o.forEach((function(t){r.includes(t)||a.includes(t)||c.push(t)})),c[0]>-1&&(u=c[0])),-1!==u&&(r.push(u),n.boardMap[u]="c"),m(r).length>0&&(n.gameState="you lost!"),r.length+a.length===9&&(n.gameState="nobody won"),n},g=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).updateBoard=function(t){var e=y(t,a.state);a.setState(e)},a.changeSetting=function(t){var e=a.state;"newGame"===t&&(e.boardMap.fill("e"),e.gameState="your turn"),"difficulty"===t&&(e.difficulty="easy"===e.difficulty?"hard":"easy"),a.setState(e)},a.state={gameState:"your turn",firstPlayer:"p",difficulty:"hard",pSymbol:"\ud83d\ude42",cSymbol:"\ud83e\udd16",boardMap:new Array(9).fill("e")},a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"T3 - ReactJS (--typescript)"),r.a.createElement(f,Object.assign({},this.state,{update:this.updateBoard})),r.a.createElement(p,Object.assign({},this.state,{updateSettings:this.changeSetting})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.febbe6ab.chunk.js.map