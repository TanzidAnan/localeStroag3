const addProduct = () => {
    const productFild =document.getElementById('product-name');
    const productQutntaty =document.getElementById('product-quentaty');

    const product =productFild.value;
    const quentaty =productQutntaty.value;

    productFild.value ='';
    productQutntaty.value='';

    console.log(product,quentaty);
    displayProduct(product,quentaty)
}

const displayProduct =(product,quentaty) =>{
    const productContatiner = document.getElementById('item-contatiner');
    const p =document.createElement('p');
    p.innerText =`${product} : ${quentaty}`;
    productContatiner.appendChild(p)
}