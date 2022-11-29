$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });


    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(___) _______-_______'
    })

    $('#cpf').mask('000.000.000-00', { reverse: true });


    $('#cep').mask('00000-000', {
        placeholder:'_______-_____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
            },
            endereço: {
                required: true,
            },
            cep: {
                required: true,
            },

        },
        messages: {
            nome:'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incompletos`)
            }
        }
    })

})

