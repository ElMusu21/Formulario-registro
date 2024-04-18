
let a = ["mati","pepe","jose",3,[2,3],{}]


a.forEach(element => {
    console.log(element);
    element +=2
    console.log(element);
    console.log(typeof element);
});