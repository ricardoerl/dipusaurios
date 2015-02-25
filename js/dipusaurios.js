$(function(){
	$.getJSON('data/dipusaurios.json', function (data) {
		var getTemplate = $("#person-template").html(),
		template    = Handlebars.compile(getTemplate);

		var container = $('.card-container').html(template(data)).isotope({
			masonry: {
			  columnWidth: '.card-sizer'
			},
			itemSelector: '.card',
			getSortData : {
				years: '.years parseInt'
			},			 
			sortBy: 'years',
			sortAscending: false
		});			

		$('#by_department').on('change', function() {
			var filterValue = this.value + ($("#by_gang option:selected").val());
		    filterValue = filterValue.replace(/[*]+/, '*');

			container.isotope({
				filter: filterValue
			});
		});
		$('#by_gang').on('change', function() {
			var filterValue = this.value + ($("#by_department option:selected").val());
		    filterValue = filterValue.replace(/[*]+/, '*');

			container.isotope({
				filter: filterValue
			});
		});

		$("#by_department, #by_gang").selectOrDie({
		cycle: true
		});
		
		$('.card').click(function(){
	        $(this).find('.card-wrapper').addClass('flipped').mouseleave(function(){
	            $(this).removeClass('flipped');
	        });
	        return false;
	    });
		
	});	
});
