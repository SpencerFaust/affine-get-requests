$(document).ready(onReady);

function onReady() {
    console.log('JQuery has been loaded.');
    beginningQuotes();
    $('#submit').on('click', addQuote);
}



function beginningQuotes() {
    for (i = 0; i < quotes_data.length; i++) {
        $('#quotesTable').append(`<tr><td>${quotes_data[i].quote}</td><td>${quotes_data[i].author}</td></tr>`)
    }
}

function addQuote() {
    $('table').append('<tr><td>' + $('#quote').val() + '</td><td>' + $('#author').val() + '</td></tr>');
    $('#quote').val('');
    $('#author').val('');
}

