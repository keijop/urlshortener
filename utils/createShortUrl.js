
//returns 0 if no collection exists in DB or adds 1 to latest collection shorturl number
const createShortUrl = (latestCollection) => {
  return !latestCollection[0] ? 0 : latestCollection[0].shortUrl + 1  
}

module.exports = createShortUrl