interface InitParameters {
  shopPermanentDomain: string
  productId: string
}

function init(params: InitParameters) {
  console.log('init', params)
}

export { init }
