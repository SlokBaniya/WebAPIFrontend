window.onload = function() {

    fetch('http://localhost:8000/api/users/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: localStorage.getItem('username')
         
        })
      })
      .then(data => {
        data.json()
        .then(actualData => {
          fetch('http://localhost:8000/api/users/profile',{
         method:'GET'
        })
        .then(data => {
            return data.json()
        })
        .then(data => {
            const users = data.data;
            let details = '';
  
            details += `
        <tr>
            <td><b>First Name</b></td>
            <td><b>Last Name</b></td>
            <td><b>Username</b></td>
            <td><b>Password</b></td>
            <td><b>Date and Time</b></td>
            <td align="center"><b>Action</b></td>
           
         </tr>
        `
            users.forEach(element => {
                details += ` 
            <tr>
                 <td>${element.firstName}</td>
                <td>${element.lastName}</td>
                <td>${element.username}</td>
                <td>${element.password}</td>
                <td>${element.CURRENT_TIMESTAMP}</td>
                <td><a href="delete.html?${element.id}" class="btn btn-danger">Delete</a></td>
                </tr>
               
                 `;
  
            })
  
            document.getElementById('detail').innerHTML = details;
        })
  
    .catch(error => {
        console.log(error)
    })

    })
})
}
        