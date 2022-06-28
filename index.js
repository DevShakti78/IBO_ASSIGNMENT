const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


1.
function getUniqueProductCount(product){
  let obj= {};
  for(let i=0;i<product.length;i++){
    if(product[i]["productName"] in obj){
      obj[product[i]["productName"]]++;
    }
    else{
      obj[product[i]["productName"]]= 1;
    }
  }
  return obj;
}

let productList= getUniqueProductCount(listOfProducts);
 console.log(productList);


// 2.
function getUniquePrducts(product){
  
  let newArr= [];
  for(let key in productList){
    var obj={"productName": key,
             "quantity": 0};
    for(let i=0;i<product.length;i++){
      if(key == product[i]["productName"]){
        obj["productName"]= key;
        obj["description"]= product[i]["description"];
        obj["quantity"]+= product[i]["quantity"];
      }
    }
    newArr.push(obj);
  }
  return newArr;
}
console.log(getUniquePrducts(listOfProducts));