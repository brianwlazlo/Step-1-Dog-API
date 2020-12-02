
//get dog images
function getDogImages(numOfDogs) {
    if (numOfDogs > 50) {
        $('#number-of-dogs').val('');
        return alert("Please only enter a number up to 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
            .then(response=> response.json())
            .then(responseJson => displayResults(responseJson))
            .catch(error => alert("Somthing went wrong"));
    }
    $('#number-of-dogs').val('');
}

// watch for user input
function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let numOfDogs = $('#number-of-dogs').val();
      getDogImages( numOfDogs );
    });
    
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});






