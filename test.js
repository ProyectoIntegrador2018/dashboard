var dict = {
  "falla1": {name:"falla1", valor:[], color:"jjdfij"}
}

dict["falla1"].valor.push(50)

dict["falla2"] = {name:"falla2", valor:[], color:"jdaffij"}

array = []

for (var key in dict){
  array.push(dict[key])
}

console.log(array)
