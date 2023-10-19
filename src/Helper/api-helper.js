export const customFetch = async function (url) {
    return new Promise(function (resolve) {
        fetch(url, {
            headers: { 'Content-Type': 'application/json' }
        }).then(response => {
            return response.json();
        }).then(data => resolve(data))
            .catch((e, i, o) => {
                resolve({ status: false })
            });
    })
}

export const customPost = async function (url, formData) {
    return new Promise(function (resolve) {
        fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: formData
        }).then(response => response.json())
            .then(data => resolve(data))
            .catch(() => resolve({ status: false }));
    })
}

export const customFormDataPost = async function (url, formData) {
    var requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    };
    return new Promise(function (resolve) {
        fetch(url, requestOptions).then(response => response.json())
            .then(data => resolve(data))
            .catch((e) => {
                console.log(e);
                resolve({ status: false });
            });
    })
}
