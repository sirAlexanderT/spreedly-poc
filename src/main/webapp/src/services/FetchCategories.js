export const FetchCategories = url => {
    return fetch(url)
        .then(response => response)
        .then(response => response.json());
};
