import { state } from "../src/state.ts";


class ComponentCard extends HTMLElement{
    shadow = this.attachShadow({ mode: "open"});

    constructor(){
        super();
        this.render()
    }
    connectedCallback(){
        state.subscribe(()=>{
            this.render();
        })
    }
    render(){
        const list= state.getState().list;
        this.shadow.innerHTML= `
            <style>
                div{
                border: solid black 2px;
                display: flex;
                background-color:yellow;
                }
            </style>
            <div>
                ${Object.entries(list).map(([key, item])=>{
                return `<input type="checkbox"><p>${key}</p>`;
            }).join("")}
            </div>
        `;
    };
}

customElements.define("postitcard", ComponentCard);

