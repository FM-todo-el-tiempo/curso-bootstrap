$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 1500
    })
    $('#confirmar-reserva').on('show.bs.modal', function(e){
        console.log('el modal se muestra');
        $('.btn-reserva').removeClass('btn-warning');
        $('.btn-reserva').addClass('btn-success');
    });
    $('#confirmar-reserva').on('hide.bs.modal', function(e){
        console.log('el modal se oculta');
        $('.btn-reserva').removeClass('btn-success');
        $('.btn-reserva').addClass('btn-warning');
    });
});