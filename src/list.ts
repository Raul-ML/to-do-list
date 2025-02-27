import { state } from "../src/state.ts";

class ComponentList extends HTMLElement{
    shadow = this.attachShadow({ mode: "open"});

    constructor(){
        super();
        this.render()
    }
    connectedCallback(){
        state.subscribe(()=>{
            this.render();
            this.checkStatus();
            this.deletePostit();
        })
    }
    deletePostit(){
        let deleteImage = this.shadow.querySelectorAll(".postit");
        
        for (const element of deleteImage||[]) {
            const indexDiv= Number(element.id);
            const imgElement=element.querySelector("img");
            imgElement?.addEventListener("click", (e)=>{
                e.preventDefault();
                const f = e.target as any;
                const listOG= state.getState().list;
                const listOG2 = listOG.filter((_, index) => index !== indexDiv);   
                state.setState({"list": listOG2});
                });
            }
        }
    
    checkStatus(){        
        const list= state.getState().list;
        const mylistcontainer= document.querySelector("my-list");
        const shadowroot= mylistcontainer?.shadowRoot;
        const postitdiv= shadowroot?.querySelectorAll(".postit");
        for (const element of postitdiv||[]) {
            if (element.classList.contains("postit")){   
                
                const checkbox= element.querySelector("input");
                const postitText= element.querySelector(".postit-text");
                const deleteImage= element.querySelector("img");
                const indexN=element.id

                if(list[indexN][1]=="checked"){
                    checkbox!.checked=true; //Keep checked after render
                }
      
                checkbox?.addEventListener("change", (e) => {
                    e.stopPropagation();

                    if (checkbox.checked) {
                    element.classList.add("checked"); // Add class "checked"
                    postitText?.classList.add("checked"); // Add class "checked"
                    element.classList.remove("pending"); // Remove class "pending"
                    postitText?.classList.remove("pending"); // Remove class "pending"
                    list[indexN][1]="checked"
                    
                    } else {
                        element.classList.add("pending"); // Add class "pending"
                        postitText?.classList.add("pending"); // Add class "pending"
                        element.classList.remove("checked"); // Remove class "checked"
                        postitText?.classList.remove("checked"); // Remove class "checked"
                        list[indexN][1]="pending"
                    }
                })

            function resetPostitSelection(){
                for (const elem of postitdiv||[]) {
                    if (elem.classList.contains("selected")){   
                        elem?.classList.remove("selected"); 
                        elem?.classList.add("notselected"); 
                        const delIMG = elem.querySelector("img")
                        delIMG!.style.visibility="hidden"
                    }
                }
                for (const elem of list) {
                    elem[2]="notselected"
                }
            }
            element?.addEventListener("click", (e) => {
                e.stopPropagation();
                
                if (element.classList.contains("notselected")){   
                    resetPostitSelection()
                    element?.classList.remove("notselected"); 
                    element?.classList.add("selected"); 
                    deleteImage!.style.visibility="visible"
                    list[indexN][2]="selected"                    
                }
                else if (element.classList.contains("selected")){   
                    resetPostitSelection()
                }
            })
            
        }
        }        
    }  
    render(){
        const list= state.getState().list;
        let n=-1
        this.shadow.innerHTML= `
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
            ${list.map((element)=>{
                var status=element[1]
                if(n<list.length){n++}
                return `
                <div class="postit ${status} ${element[2]}" id="${n}">
                    <div class="postit-text ${status}" id="${n}">
                        ${element[0]}
                    </div>
                    
                    <div class="postit-check-delete">
                        <input type="checkbox">
                        <img class="${element[2]}" src="./del_img.2f2daab6.png" alt="del img" width="20px" height="20px">
                    </div>
                </div>
                            `}).join("")}`
        
        };
            
        
    };

customElements.define("my-list", ComponentList);