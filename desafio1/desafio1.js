class ProductManager {
    static id = 0

    constructor() {
        this.products = [];
    }

    //método para añadir los productos
    addProduct(title, description, price, thumbnail, code, stock) {
        //validación de los datos
        if(!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los valores son obligatorios. Debes completar todos los datos.")
            return 
        }

        //varificación del code
        const existCodeInProducts = this.products.some((product) => product.code === code)
        if(existCodeInProducts) {
            console.log(`El código ${code} no puede repetirse.`)
            return
        }

        //creación del nuevo producto
        const newProduct = {
            id: ProductManager.id + 1,
            title, 
            description, 
            price,
            thumbnail,
            code,
            stock,
        }

        this.products.push(newProduct)
        ProductManager.id++
        return newProduct
    }

    //método de retorno del array
    getProduct() {
        return this.products
    }

    //método para obtener productos por el id
    productExist(id) {
        return this.products.find((product) => product.id === id)
    }

    getProductById(id) {
        if (!this.productExist(id)) {
            console.log("Not Found")
        } else {
            console.log(this.productExist(id))
        }
    }
}

//instanciar la clase
const products = new ProductManager()

        //primera llamada con array vacio
//console.log(products.getProduct())

        //producto agregado fallido
//products.addProduct("producto1", 300, "abc785", 56)

        //validar el code
//products.addProduct("product Fail", "éste producto es falso", 865, "sin imagen", "abc123", 78)

    //agregar productos
products.addProduct("producto prueba", "éste es el primer producto de prueba", 200, "sin imagen", "abc123", 25)
products.addProduct("producto1", "Éste es el segundo producto de prueba", 500, "sin imagen", "abc124", 45)
products.addProduct("product2", "éste es el tercer producto de prueba", 800, "sin imagen", "abc129", 62)
products.addProduct("product3", "éste es el cuarto producto de prueba", "sin imagen", 1502, "abc125", 65)
products.addProduct("product4", "éste es el quinto producto de prueba", 745, "sin imagen", "abc126", 98)

    //llamada del array con productos agregados
//console.log(products.getProduct())

    //buscar producto por id
products.getProductById(1)
products.getProductById(5)
    //id fail
products.getProductById(8)