
const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let output = '<h2>List of Users</h2>';
        output += '<ul>';
        users.forEach(user => {
            output += `
                <li>
                    ${user.name}
                </li>
            `;
        });
        output += '</ul>';
        document.getElementById('response').innerHTML = output;
    })
};

const addPost = event => {
    event.preventDefault(); // prevents the default behaviour of the browser to save data

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    const myPost = {
        title: title,
        body: body
    };

    fetch('https://jsonplaceholder.typicode.com/postsxxx', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(myPost)
    })
        .then( res => {
            if (res.ok){
                return res.json();
            } else {
                return Promise.reject({satus: res.status, statusText: res.statusText});
            }
        })
        .then( data => console.log(data))
        .catch(err => console.log('Error message:', err.statusText));
}

let dataDisplay = document.getElementById('fetchUserDataBtn');
let post = document.getElementById('addPostForm');

dataDisplay.addEventListener('click', fetchUserData);
post.addEventListener('submit', addPost)

//0:20:59