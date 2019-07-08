
window.onload = function() {
   
if(!localStorage.getItem('username')){
window.location.href ="login.html"
alert("please login first!");
} else{

    const id = window.location.search.substring(1);

    fetch('http://localhost:8000/api/item/view/'+id, {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    itemsname: itemsname,
                    itemId: itemId,
                    username: username,
                    userid: userid,
                    created_at: created_at
                })
            })
            .then(data => {
                return data.json();
            })
            .then(json => {
                if (json.status === 'success') {
                    // localStorage.setItem('Token', json.accessToken);
                    // window.location.href = 'dashboard.html'
                    alert("Account created")
                } else {
                    alert('Unabble to create account');
                }
            })
            .catch(error => {
                console.log(error)
            })

    })

}