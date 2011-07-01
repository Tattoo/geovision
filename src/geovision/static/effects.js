var opened = false;

function openSearch()
{
	elem = $('#graphnavi')
        if (!opened){
            opened = true;
            elem.find('#optiontag').hide();
            elem.animate({width: "40%"}, {complete:
		function() { elem.find('*').not('#optiontag').fadeIn(); }});
	}
}
function closeSearch()
{
	if (opened){
		$('#graphnavi').find('*').hide();/*!Hide all elements*/
		$('#graphnavi').animate({width: "7px"}, {complete: function() {
                       $(this).find('#optiontag').fadeIn();
                       opened = false;
		}});
	}
}
jQuery(function($) {
/*! Function to open the graph-option-navigation and the alignment with a nice animation.
 */
    $('#graphnavi').mouseenter(openSearch);
    $('#close').click(closeSearch);
    $('#graphrefresh').click(function(){
		$('#loader').fadeIn(); //loader in
    });
	$('.submitForm').live('click', function() {
		$('#ec').replaceWith('<input size="10" type="text" name="ecnumber" id="ec" value="'+$(this).attr('id')+'"/>');
		$(this).parents('form').submit();
	})
	var alignmentopen = false;
	$('.alignlink').click(function(){
		if (alignmentopen == false){
			$.getJSON('/show_alignment', {id: $(this).attr('id')}, function (data) {
				alignmentopen = true;
				var part1 = $('<nobr></nobr>');
				var part2 = $('<nobr></nobr>');
				part1.css('display', 'none');
				part2.css('display', 'none');
				part1.appendTo($('#alignment'));
				$('<br/>').appendTo($('#alignment'));
				part2.appendTo($('#alignment'));
				$('#test').after(alignment);
				part1.load(data.readseq);
				part2.load(data.dbseq);
				$('#alignment').css('border', '2px solid #265434');
				$('#alignment').css('margin-bottom', '10px');
				$('#alignment').animate({height: "60px"}, {complete:
					  function() { part1.fadeIn(); part2.fadeIn();
									var close = $('<div id = "closealign">Close</div>');
									$('#alignment').before(close);  }
				});
				$('#log').css('top', '90px');
			});
			return false;
		}
		else {
			return false;
		}
	})
    $('#closealign').live('click', function() {
		if (alignmentopen == true){
			alignmentopen = false;
            $('#alignment').find('*').remove();/*!Hide all elements*/
			$('#closealign').remove();
            $('#alignment').animate({height: "1px"});
			$('#alignment').css('border', '0px');
			$('#alignment').css('background-color', '#E6F2EA');
			$('#alignment').css('margin-bottom', '0px');
			$('#log').css('top', '15px');
		}
    });
});
