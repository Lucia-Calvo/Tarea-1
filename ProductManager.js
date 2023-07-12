class ProductManager {
    constructor () {
        this.products =[];
        this.nextId = 1;
    }

    static id = 0;

//Cada una de las propiedades las agregamos no en el constructor sino en el método addProduct (que es el que agrega un producto).
    addProduct(title, description, price, thumbnail, code, stock) {
        //Validar que no se repita el campo "code".
        const existingProduct = this.products.find((item) => item.code === code);
        if (existingProduct) {
            console.log(`El código del producto ya existe`);
        }
        //Validar que todos los campos sean obligatorios.
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(`Todos los campos son obligatorios`);
            return;
        }

        const product = {id: this.nextId++, title, description, price, thumbnail, code, stock}
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((item) => item.id === id);
    //buscamos en products que el id ingresado exista
    // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    if (!product) {
        console.log(`“Not found” El producto con el id ${id} no existe`);
        return;
    }
    console.log(`El producto con el id ${id} fue encontrado`);
    return product;
    }
}

const products = new ProductManager;

//Agregamos producto por lo que NO devuelve un array vacio. Para esto habría que "consologear" getProducts antes.
products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
console.log(products.getProducts());

// products.addProduct('titulo1', 'descripcion1', 350, 'imagen1', 'abc123', 2);
// products.addProduct('titulo1', 'descripcion1', 350, 'imagen1', 'abc123', 2);
// console.log(products.getProducts());


products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
products.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
products.getProductById(4);
products.getProductById(2);
console.log(products.getProducts());
