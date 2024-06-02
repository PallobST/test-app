document.addEventListener('alpine:init', () => {
    Alpine.store('test', {
        data: {
            name:'jahid',
        },

        fetchPosts() {
            fetch('http://localhost:3000/posts')
            .then(data => {
                return data.json();
            })
            .then(post => {
                console.log(post);
            });
        },

        fetchUsers(){
            fetch('http://localhost:3001/users')
            .then(data => {
                return data.json();
            })
            .then(post => {
                console.log(post);
            });
        }
    })
})