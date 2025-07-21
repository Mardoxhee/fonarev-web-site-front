
async function getFromAPi(url) {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
            },

        };

        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`API call failed avec erreur status ${response.status}`);
        }
        const data = (await response.json()) ;

        console.error(' need to see ', data);
        return data.src;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export async function getFileLink(file) {
    const url = `https://360.fonasite.app:5521/minio/files/${file}`;
    const data = await getFromAPi(url);
    return data;
}

export async function getArticleDetails(lastPart) {
    const url = `https://fonarev-api.onrender.com/articles/${lastPart}`;
    const data = await getFromAPi(url);
    return data;
}