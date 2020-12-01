
//get dog images
function getDogImages(numOfDogs) {
    if (numOfDogs < 3 || numOfDogs > 50) {
        $('#number-of-dogs').val('');
        return alert("Please only enter a number between 3 and 50");
    } else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
            .then(response=> response.json())
            .then(responseJson => console.log(responseJson))
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

/*
function handleButton() {
    $('#dogQty-btn').on('click', function() {
        let numOfDogs = $('#number-of-dogs').val();
        getDogImages( numOfDogs ); 
    })
}

//$('#dogs').find('input[type=text], textarea').val('');
*/

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});






