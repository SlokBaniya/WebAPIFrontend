
window.onload = function() {
   
if(!localStorage.getItem('username')){
window.location.href ="login.html"
alert("please login first!");
} else{
    const username = localStorage.getItem('username');
    const itemId = window.location.search.substring(1);

    
    fetch('http://localhost:8000/api/booking/add', {
        method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                   
                    itemId: itemId,
                    username: username,                   
                   
                })
            })
            .then(data => {
                return data.json();
            })
            .then(json => {
                if (json.status) {
                    // localStorage.setItem('Token', json.accessToken);
                    
                    alert("Items added to cart")
                    window.location.href = 'collection.html'
                } else {
                    alert('Unable to add items');
                    window.location.href = 'collection.html'
                }
            })
            .catch(error => {
                console.log(error)
            })

   
}
}