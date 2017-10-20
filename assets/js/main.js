$( "input[type='text']" ).keypress( function ( event ) {
     if ( event.which === 13 ) {
          var todoText = $( this ).val( );
          $( this ).val( "" );
          $( "ul" ).append( "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>" );
     }
});
$( "ul" ).on( "click", "li", function ( ) {
     $( this ).toggleClass( "completed" );

});

$( "ul" ).on( "click", "li span", function ( evnt ) {
     $( this ).parent( ).fadeOut( 500, function ( ) {
          $( this ).remove( );
     });
     evnt.stopPropagation( );

});
$( ".fa-plus" ).on( "click", function ( ) {
     $( "input[type='text']" ).fadeToggle( );
});
