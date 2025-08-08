var form = window.document.querySelector('form')
var nome = window.document.getElementById('inome')
var email = window.document.getElementById('iemail')

form.addEventListener('submit', function(event){
    if(nome.value.trim().length === 0 ){
        event.preventDefault() //impede o envio do form
        window.alert('[ERRO] nome inválido, tente novamente')
    }
    else if(email.value.trim().length === 0){
        event.preventDefault()
        window.alert('[ERRO] e-mail inválido')
    }
})