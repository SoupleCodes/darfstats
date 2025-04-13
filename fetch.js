export async function fetchDarflenApi(endpoint) {
    try {
        const url = `https://corsproxy.io/?url=` +
            encodeURIComponent(`https://api.darflen.com/${endpoint}`)
        console.log(url)
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}