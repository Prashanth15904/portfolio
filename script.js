let postsElement = document.querySelector('#posts');

fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    return response.json();
}).then((data)=>{
    data.forEach(element => {
        postsElement.innerHTML += `
            <div>
                <h1>${element.id} - ${element.title}</h1>
                <p>${element.body}</p>
            </div>
        `
    });
})