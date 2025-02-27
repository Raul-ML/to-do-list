import { state } from "../src/state.ts";
import "../src/wall.jpg"


class ComponentForm extends HTMLElement{
    shadow = this.attachShadow({ mode: "open"});

    constructor(){
        super();
        this.render();
    }
    connectedCallback(){
        let form = this.shadow.querySelector(".form");
        form?.addEventListener("submit", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            const f = e.target as any;
            const input= f.querySelector("input")
            state.addItem(input.value)
        })
    }
    render(){
        this.shadow.innerHTML= `
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
            </form>`;
    }
}

customElements.define("my-form", ComponentForm);
