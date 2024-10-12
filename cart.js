const addProduct = () => {
    const productFild =document.getElementById('product-name');
    const productQutntaty =document.getElementById('product-quentaty');

    const product =productFild.value;
    const quentaty =productQutntaty.value;

    productFild.value =' ';
    productQutntaty.value=' ';

    console.log(product,quentaty)
}