
class ProductManager {
    constructor (){
        this.products = []
        this.id = 1 //Declaro el ID en 1 
    }
   
    getProducts(){
        console.log (this.products)
    }

    addProducts(title, description, code, stock, price, thumbnail, id){
        
        if(!title|| !description || !code || !stock || !price || !thumbnail){
            
            console.log("Todos los campos son obligatorios ")    

        }
        else if(!this.products.some((p)=> p.code === code)){
            let id = this.id ++ //Hago que el id se incremente y no se repita
            let newProduct = {title,description ,price, code, stock, thumbnail, id }
            
            this.products.push(newProduct)
            console.log(`El producto ${title} fue agregado correctamente`)
        }else {
            console.log(`Ya existe un libro con el code ${code}`)
        }
    }
  getProductById(id){
    let product = this.products.find((p)=> p.id === id)
    
    if(product){
        return console.log (product)
    }else{
        console.log(`Not Found id:  ${id}`)
    }
}
}
const product = new ProductManager()
product.addProducts("Tomate", "Es rojo y delicioso", 2354, 500, 100,"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmercagarden.com%2F525-large_default%2Ftomate.jpg&tbnid=B550Y6HN1NMH4M&vet=12ahUKEwjomY3mvaGDAxVZN7kGHWjtBw0QMygGegQIARB5..i&imgrefurl=https%3A%2F%2Fmercagarden.com%2Fhortifichas%2Ftomate.html&docid=JQqhkvpQyQS2zM&w=381&h=492&q=tomate&client=firefox-b-d&ved=2ahUKEwjomY3mvaGDAxVZN7kGHWjtBw0QMygGegQIARB5")
product.addProducts("Lechuga", "Es verde y refrescante", 2356, 400, 90,"https://www.google.com/imgres?imgurl=https%3A%2F%2Fbiotrendies.com%2Fwp-content%2Fuploads%2F2015%2F07%2Flechuga.jpg&tbnid=RI9LNzkoqQ-enM&vet=12ahUKEwjmy6qgvqGDAxVTO7kGHSS2DG8QMygEegQIARB0..i&imgrefurl=https%3A%2F%2Fbiotrendies.com%2Fverduras%2Flechuga&docid=V1fUIECMSNSKLM&w=2000&h=1518&q=lechuga&client=firefox-b-d&ved=2ahUKEwjmy6qgvqGDAxVTO7kGHSS2DG8QMygEegQIARB0")
product.getProducts()

//Busqueda por codigod e libro
console.log("-------------")
product.getProductById(23.2783323) //No lo encuentra porque ya no usamos Math.random
product.getProductById(1)


