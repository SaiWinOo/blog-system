async function fetchData(url) {
    return await window.axios(url);
}

export default fetchData;