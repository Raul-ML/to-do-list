const state = {
    data: {
      list: [], //[text input, checked or not, selected or not]
    },
    listeners: [],
    getState() {
      return this.data;
    },
    setState(newState) {
       this.data=newState;
       for (const cb of this.listeners){
        cb();
       }
       console.log("Soy el state, he cambiado ", this.data )
       console.log(document.querySelector("my-list"));
       

    },
    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },
    addItem(item:string) {
        const cs = this.getState();
        cs.list.push([item,"pending","notselected"]);
        this.setState(cs);
    },
  };

  export {state};
  