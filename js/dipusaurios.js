$(function(){
	$.getJSON('data/dipusaurios.json', function (data) {
		var getTemplate = $("#person-template").html(),
			template    = Handlebars.compile(getTemplate);

		var container = $('.content__people').html(template(data)).isotope({
<<<<<<< HEAD
			itemSelector: '.person',
			layoutMode: 'fitRows',
			getSortData : {
				years: '.years__charge parseInt'
				},			 
				sortBy: 'years',
				sortAscending: false
			});			

		$('#by_department').on('change', function() {
			var filterValue = this.value + ($('#partys button.active').length ? $('#partys button.active').attr('data-filter') : '');
=======
			itemSelector: '.card__container',
			layoutMode: 'fitRows',
			getSortData : {
				years: '.years parseInt'
			},			 
			sortBy: 'years',
			sortAscending: false
		});			

		$('#by_department').on('change', function() {
			var filterValue = this.value + ($("#by_gang option:selected").val());
>>>>>>> gh-pages
		    filterValue = filterValue.replace(/[*]+/, '*');

			container.isotope({
				filter: filterValue
			});
		});
<<<<<<< HEAD
		$('#partys').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $container.isotope({ filter: filterValue });
		});	
	});
	$("#by_department, #by_gang").selectOrDie({
		cycle: true
	});
	$('.card').on( 'click', function() {
		$( this ).toggleClass( "flip" );
	});
});

=======
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
		$('.card').on( 'click', function() {
			$( this ).toggleClass( "flip" );
		});		
	});
});
>>>>>>> gh-pages
