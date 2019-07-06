window.onload = function() {

    fetch('http://localhost:8000/api/admin/users', {
            headers: {
                "Authorization": localStorage.getItem('Token')
            }
        })
           .then(data => {
            return data.json()
            
        })
        .then(data => {
            const users = data.data;
           // console.log(users);
            let details = '';

            details += `
        <tr>
            <td><b>Full Name</b></td>
            <td><b>Address</b></td>
            <td><b>Contact</b></td>
            <td><b>Username</b></td>
            <td><b>Password</b></td>
            <td><b>Gender</b></td>
            <td align="center"><b>Action</b></td>
           
         </tr>
        `
            users.forEach(element => {
                details += ` 
            <tr>
                 <td>${element.fullname}</td>
                <td>${element.address}</td>
                <td>${element.contact}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td>${element.gender}</td>
                <td><a href="delete.html?${element.id}" class="btn btn-danger">Delete</a></td>
                </tr>
               
                 `;

            })

             document.getElementById('detail').innerHTML = details;
        })

    .catch(error => {
        console.log(error)
    })
}