// Necesitamos una url base
// TS (Time Start)
// Necesitamos la public key
// Hash -MD5- (se hace x el generador)

const urlBase = `http://gateway.marvel.com/v1/public/`
let ts = `ts=1`
const publicKey = "&apikey=5e6d164c6b294904e1de47020e72bf60"
const hash = "&hash=93d32ac313b5f4bd1d8f5b551a91336c"

const getCharacters = async () => {
    const url = `${urlBase}characters?${ts}${publicKey}${hash}`  
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.results)
}
getCharacters()

const getComics = async () => {
    const url = `${urlBase}comics?${ts}${publicKey}${hash}`  
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
getComics()