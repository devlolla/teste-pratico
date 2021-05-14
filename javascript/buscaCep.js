function limpa_form_cep() {
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
}

function callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById('logradouro').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
  }

  else {
    limpa_formulario_cep()
    alert('CEP não encontrada.')
  }
}

function pesquisaCep(valor) {
  var CEP = valor.replace(/\D/g, '');

  if (CEP != "") {
    var validacep = /^[0-9]{8}$/;

    if (validacep.test(CEP)) {
      document.getElementById('logradouro').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";

      var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/' + CEP + '/json/?callback=callback';

      document.body.appendChild(script);
    }
    else {
      limpa_form_cep();
      alert("Formato de CEP inválido")
    }
  }
  else {
    limpa_form_cep();
  }

}