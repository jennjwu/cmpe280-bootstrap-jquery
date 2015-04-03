'use strict';

$(function(){

  $('#get-whitepaper-btn').on('click', function(){
    $.post( "/users/new", $("#get-whitepaper-form").serialize())
      .done(function( data ) {
        window.location.href='/downloads/bigdata-whitepaper.pdf';
      });
      
  });

  $('#get-brochure-btn').on('click', function(){
    $.post("/users/new", $("#get-brochure-form").serialize())
      .done(function( data ) {
        window.location.href='/downloads/bigdata-brochure.pdf';
      });
  });
});