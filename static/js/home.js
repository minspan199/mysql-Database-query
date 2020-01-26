var $DOM = $(document);
$DOM.on('click', '#search_submit', function() {

	console.log("search clicked");
    console.log("search clicked");
    query = $(".search").val();
    console.log("request character counts: "+query.length);
    $('.search_results').empty();

    if (query.length < 3){
        alertify.set('notifier', 'position', 'top-right');
        alertify.error('Please input a name of 3 or more characters!');
    } else {
        $.ajax({
		type: 'get',
		url: '/search?query=' + query,
		success: function(result) {
            console.log(result)
            $('.search_results').append(result)
		}
	});
    }

});

