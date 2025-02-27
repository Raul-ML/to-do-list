var e=globalThis,t={},i={},s=e.parcelRequire94c2;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var s=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,s.call(o.exports,o,o.exports),o.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire94c2=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,s=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)s.set(t[i],{baseUrl:e,path:t[i+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1LzKV","index.53bb1d59.js","jLIXG","wall.133e2c4a.jpg"]'));const o={data:{list:[]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t();console.log("Soy el state, he cambiado ",this.data),console.log(document.querySelector("my-list"))},subscribe(e){this.listeners.push(e)},addItem(e){let t=this.getState();t.list.push([e,"pending","notselected"]),this.setState(t)}};new URL("wall.133e2c4a.jpg",import.meta.url).toString();class r extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){let e=this.shadow.querySelector(".form");e?.addEventListener("submit",e=>{e.preventDefault(),e.stopPropagation();let t=e.target.querySelector("input");o.addItem(t.value)})}render(){this.shadow.innerHTML=`
            <style>
                form {
                    width:100%;
                    display:flex;
                    flex-direction:row;
                    gap:10px;
                    justify-content: center;
                }
                input {
                    background-color: white;
                    border: 2px solid;
                    border-radius:5px;
                    color: black;
                    width:200px;
                }
                input::placeholder{
                    color:black;
                    font-weight: bold;
                    opacity:0.7; 
                    padding-left:5px;
                }
                button {
                    background-color: blue;
                    border-radius: 5px;
                    font-weight: bold;
                    color:white;
                }
            </style>
            <form class="form">
                <input type="text" placeholder="Write a new activity" class="input-activity">
                <button>ADD</button>
            </form>`}}customElements.define("my-form",r);class l extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){o.subscribe(()=>{this.render(),this.checkStatus(),this.deletePostit()})}deletePostit(){for(let e of this.shadow.querySelectorAll(".postit")||[]){let t=Number(e.id),i=e.querySelector("img");i?.addEventListener("click",e=>{e.preventDefault(),e.target;let i=o.getState().list.filter((e,i)=>i!==t);o.setState({list:i})})}}checkStatus(){let e=o.getState().list,t=document.querySelector("my-list"),i=t?.shadowRoot,s=i?.querySelectorAll(".postit");for(let t of s||[])if(t.classList.contains("postit")){let i=t.querySelector("input"),o=t.querySelector(".postit-text"),l=t.querySelector("img"),d=t.id;function r(){for(let e of s||[])e.classList.contains("selected")&&(e?.classList.remove("selected"),e?.classList.add("notselected"),e.querySelector("img").style.visibility="hidden");for(let t of e)t[2]="notselected"}"checked"==e[d][1]&&(i.checked=!0),i?.addEventListener("change",s=>{s.stopPropagation(),i.checked?(t.classList.add("checked"),o?.classList.add("checked"),t.classList.remove("pending"),o?.classList.remove("pending"),e[d][1]="checked"):(t.classList.add("pending"),o?.classList.add("pending"),t.classList.remove("checked"),o?.classList.remove("checked"),e[d][1]="pending")}),t?.addEventListener("click",i=>{i.stopPropagation(),t.classList.contains("notselected")?(r(),t?.classList.remove("notselected"),t?.classList.add("selected"),l.style.visibility="visible",e[d][2]="selected"):t.classList.contains("selected")&&r()})}}render(){let e=o.getState().list,t=-1;this.shadow.innerHTML=`
            <style>
                div.postit{
                    margin:0;
                    padding:0;
                    width:100%;
                    height:100px;
                    background-color:rgb(247, 245, 159);
                    border: solid black 2px;
                    border-radius:15px;
                    display: flex;
                    justify-content: space-between;                    
                    }
                div.postit-text{
                    width:70%;
                    height:100%;
                    padding:10px;
                    overflow-y: auto; 
                    word-wrap: break-word; 
                    white-space: normal; 
                    display: block; 
                    margin: 0; 
                    line-height: 1.5;
                    text-align: start;
                    box-sizing:border-box;
                    justify-content: center;                                        
                    
                }
                div.postit-check-delete{
                    display:flex;
                    flex-direction:column;
                    justify-content: space-between;                                        
                    height:100%;
                    width:auto;
                    padding: 4%;
                    box-sizing:border-box;
                }
                input[type="checkbox"]{
                    width:20px;
                    height:20px;
                    margin:0;
                }
                div.checked{
                    background-color:grey;
                    text-decoration: line-through;
                }
                div.selected{
                    border: solid black 5px;
                }
                div.notselected{
                    border: solid black 2px;
                }
                img.notselected{
                    visibility:hidden;
                }


            </style>
            ${e.map(i=>{var s=i[1];return t<e.length&&t++,`
                <div class="postit ${s} ${i[2]}" id="${t}">
                    <div class="postit-text ${s}" id="${t}">
                        ${i[0]}
                    </div>
                    
                    <div class="postit-check-delete">
                        <input type="checkbox">
                        <img class="${i[2]}" src="./del_img.2f2daab6.png" alt="del img" width="20px" height="20px">
                    </div>
                </div>
                            `}).join("")}`}}customElements.define("my-list",l);
//# sourceMappingURL=index.53bb1d59.js.map
