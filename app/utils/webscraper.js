import pup from 'puppeteer'

const scraper = async () => {
  const browser = await pup.launch()
  const page = await browser.newPage()
  await page.goto(process.env.APP_WERSCRAPER_URL_TARGET)

  const productsList = await page.evaluate(() => {
    /** get all the products */
    const nodeListOfProducts = document.querySelectorAll('.thumbnail')

    // turn node list into array
    const arrayOfProducts = [...nodeListOfProducts]

    // array of filtered products
    const arrayOfProductsFiltered = []

    arrayOfProducts.forEach((product) => {
      const productTitle = product.querySelector('.title').innerHTML

      if (productTitle.toLocaleLowerCase().includes('lenovo')) {
        const priceProduct = product
          .querySelector('.pull-right.price')
          .innerHTML.replace('$', '')
        const descriptionProduct =
          product.querySelector('.description').innerHTML
        const reviewProduct = product.querySelector(
          '.ratings > .pull-right'
        ).innerHTML
        const figureProduct = product.querySelector('.img-responsive').src
        const startsProduct = product.querySelector('[data-rating]')
        arrayOfProductsFiltered.push({
          title: productTitle,
          price: parseFloat(priceProduct),
          description: descriptionProduct,
          figure: figureProduct,
          reviews: reviewProduct,
          stars: parseFloat(startsProduct.dataset.rating || 0)
        })
      }
    })

    // sorting products by price
    const productSortToPrice = arrayOfProductsFiltered.sort(
      (a, b) => a['price'] - b['price']
    )

    return productSortToPrice
  })

  await browser.close()

  return productsList
}

export default scraper
