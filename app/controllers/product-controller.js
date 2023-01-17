import scraper from '../utils/webscraper.js'

const SearchProduct = async (req, res) => {
  const productsScraper = await scraper()
  res.status(200).json(productsScraper)
}

export default SearchProduct
