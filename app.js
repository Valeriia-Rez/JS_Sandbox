//Basic structure

//(function(){
    //Declare private vars and functions

    //return{
        //Declare public var ana functions

    //}
//})();
//STANDART MODULE PATTERN
//const UICtrl = (function(){
    //let text = "Hello world";

    //const changeText = function(){
        //const element = document.querySelector("h1");
        //element.textContent = text;
    //}
    //return{
        //callChangeText: function(){
            //changeText();
            //console.log(text);
        //}
    //}
//})();
//UICtrl.callChangeText();
//UICtrl.changeText();
//console.log(UICtrl.text);

//REVEALING MODULE PATTERN
//const ItemCtrl = (function(){
    //let data = [];

    //function add(item){
        //data.push(item);
        //console.log("Item Added...");
    //}
    //function get(id){
        //return data.find(item => {
            //return item.id === id;
        //});
    //}
    //return{
        //add: add,
        //get: get
    //}
//})();

//ItemCtrl.add({id:1, name: "John"});
//ItemCtrl.add({id:2, name: "Mike"});
//console.log(ItemCtrl.get(1));

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: "Brad"});
        return object;
    }

    return{
        getInstance:function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();
 const instanceA = Singleton.getInstance();
 console.log(instanceA);















