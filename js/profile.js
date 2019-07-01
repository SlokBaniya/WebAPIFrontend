window.onload = function() {
const username = localStorage.getItem('username');

fetch('http://localhost:8000/api/users/profile', {
    mheaders: {
        "Authorization": localStorage.getItem('Token')
    }
})
.then(data => {
    return data.json()
})
.then(data => {
    // const news = data.data;
    let details = '';

    details += `
    <tr>
        <td><b>Fullname</b></td>
        <td><b>Address</b></td>
        <td><b>Contact</b></td>
        <td><b>Username</b></td>
        <td><b>Password</b></td>
        <td><b>Date and Time</b></td>
        <td colspan="2" align="center"><b>Action</b></td>
       
     </tr>
    `

    const url = 'http://localhost:3000/uploads/';
    data.forEach(element => {
        details += ` 
        <tr>
             <td>${element.title}</td>
            <td>${element.content}</td>
            <td>${element.author}</td>
            <td>${element.category}</td>
            <td><img src="${url+element.image}" height="50" width"60"></td>
            <td>${element.CURRENT_TIMESTAMP}</td>
            <td><a href="" class="btn btn-success">Edit</a></td>
            <td><a href="" class="btn btn-danger">Delete</a></td>
            </tr>
             `;

    });
    document.getElementById('detail').innerHTML = details;

})

.catch(error => {
console.log(error)
})


}