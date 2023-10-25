const products = [
    {
        id: 'abrigo-01',
        name: 'Abrigo 01',
        price: 1000,
        category: 'abrigos',
        img: '../../img/abrigos/01.jpg',
        stock: 25,
        description: 'Abrigo elegante, cálido y cómodo, perfecto para el invierno.'
    },
    {
        id: 'camiseta-01',
        name: 'Camiseta 01',
        price: 3000,
        category: 'camisetas',
        img: '../../img/camisetas/01.jpg',
        stock: 35,
        description: 'Camiseta de algodón suave y transpirable con cuello redondo.'
    },
    {
        id: 'pantalon-01',
        name: 'Pantalon 01',
        price: 50000,
        category: 'pantalones',
        img: '../../img/pantalones/01.jpg',
        stock: 35,
        description: 'Pantalón moderno, cómodo y versátil para cualquier ocasión casual.'
    },
    {
        id: 'abrigo-02',
        name: 'Abrigo 02',
        price: 1000,
        category: 'abrigos',
        img: '../../img/abrigos/02.jpg',
        stock: 25,
        description: 'Abrigo elegante, cálido y cómodo, perfecto para el invierno.'
    },
    {
        id: 'camiseta-02',
        name: 'Camiseta 02',
        price: 3000,
        category: 'camisetas',
        img: '../../img/camisetas/02.jpg',
        stock: 35,
        description: 'Camiseta de algodón suave y transpirable con cuello redondo.'
    },
    {
        id: 'pantalon-02',
        name: 'Pantalon 02',
        price: 50000,
        category: 'pantalones',
        img: '../../img/pantalones/02.jpg',
        stock: 35,
        description: 'Pantalón moderno, cómodo y versátil para cualquier ocasión casual.'
    },
    {
        id: 'abrigo-03',
        name: 'Abrigo 03',
        price: 1000,
        category: 'abrigos',
        img: '../../img/abrigos/03.jpg',
        stock: 25,
        description: 'Abrigo elegante, cálido y cómodo, perfecto para el invierno.'
    },
    {
        id: 'camiseta-03',
        name: 'Camiseta 03',
        price: 3000,
        category: 'camisetas',
        img: '../../img/camisetas/03.jpg',
        stock: 35,
        description: 'Camiseta de algodón suave y transpirable con cuello redondo.'
    },
    {
        id: 'pantalon-03',
        name: 'Pantalon 03',
        price: 50000,
        category: 'pantalones',
        img: '../../img/pantalones/03.jpg',
        stock: 35,
        description: 'Pantalón moderno, cómodo y versátil para cualquier ocasión casual.'
    },
    {
        id: 'abrigo-04',
        name: 'Abrigo 04',
        price: 1000,
        category: 'abrigos',
        img: '../../img/abrigos/04.jpg',
        stock: 25,
        description: 'Abrigo elegante, cálido y cómodo, perfecto para el invierno.'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category))
      }, 500);
    });
  };

  export const getCategories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = Array.from(new Set(products.map(prod => prod.category)))
        resolve(categories);
      }, 500);
    });
  };