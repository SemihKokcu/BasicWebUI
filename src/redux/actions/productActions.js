import * as actionTypes from "./actionTypes";
// redux anlaması için bir objeye dönüştürdük

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: products };
}
export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function uptadeProductSuccess(product) {
  return { type: actionTypes.UPTADE_PRODUCT_SUCCESS, payload: product };
}
// elimdeki data --> json : strşngfy
//gelen json string --> dön json

export function saveProductApi(product) {
  // data gönderme işlemi için
  // api derki : hangi id değişecek ver onu bana

  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST", // id varsa put yoksa post
    headers: { "content-type": "application/json" }, // ??
    body: JSON.stringify(product), // body giden datadır.
    //stringfy : string hale getirmek
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((saveProduct) => {
        product.id
          ? dispatch(uptadeProductSuccess(saveProduct))
          : dispatch(createProductSuccess(saveProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response){
    if (response.ok) {
      return response.json()
    }

    const error = await response.text()
    throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu");
  throw error;
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
