const addProduct = () => {
    const productFild =document.getElementById('product-name');
    const productQutntaty =document.getElementById('product-quentaty');

    const product =productFild.value;
    const quentaty =productQutntaty.value;

    productFild.value ='';
    productQutntaty.value='';

    console.log(product,quentaty);
    displayProduct(product,quentaty);
    saveProductLocaleStroge(product,quentaty)
}

const displayProduct =(product,quentaty) =>{
    const productContatiner = document.getElementById('item-contatiner');
    const p =document.createElement('div');
    p.innerText =`${product} : ${quentaty}`;
    productContatiner.appendChild(p)
}

const getStrogeShopingCart =() =>{
    let cart ={};
    const storeCart =localStorage.getItem('cart');
    if(storeCart){
        cart=JSON.parse(storeCart);
    }
    return cart;
}


const saveProductLocaleStroge =(product, quentaty) =>{
    const cart =getStrogeShopingCart();
    cart[product] =quentaty;
    // console.log(cart);
    const cartStringFild =JSON.stringify(cart);
    // console.log(cartStringFild);
    localStorage.setItem('cart',cartStringFild)
}

const displayFromLocalStrog =() =>{
    const saveCart =getStrogeShopingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quentaty =saveCart[product]
        console.log(product,quentaty);
        displayProduct(product,quentaty)
    }
}
displayFromLocalStrog()