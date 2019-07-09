window.onload = function() {

    const id = window.location.search.substring(1);
    const url = 'http://localhost:8000/api/booking/delete/'
    fetch(url + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(json => {
            alert('Deleted successfully')
            window.location.href = 'adminBooking.html'
        })
        .catch(error => {
            console.log(error)
        })

}