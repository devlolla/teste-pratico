window.onload = function () {

  var localStorageKeyName = 'data';


  loadFromLocalStorage();

  document.querySelector("#register-button").addEventListener('click', function () {
    var name = document.getElementById("nome"),
      email = document.getElementById("email"),
      cpf = document.getElementById("cpf"),
      telefone = document.getElementById("telefone"),
      cep = document.getElementById("cep"),
      bairro = document.getElementById("bairro"),
      numero = document.getElementById("numero"),
      logradouro = document.getElementById("logradouro"),
      cidade = document.getElementById("cidade"),
      uf = document.getElementById("uf");


    // Validação
    if (
      name.value.length === 0 ||
      email.value.length === 0 ||
      cpf.value.length === 0 ||
      telefone.value.length === 0 ||
      cep.value.length === 0 ||
      bairro.value.length === 0 ||
      numero.value.length === 0 ||
      logradouro.value.length === 0 ||
      cidade.value.length === 0 ||
      uf.value.length === 0
    ) return;

    var user = {
      name: name.value,
      email: email.value,
      cpf: cpf.value,
      telefone: telefone.value,
      cep: cep.value,
      bairro: bairro.value,
      numero: numero.value,
      logradouro: logradouro.value,
      cidade: cidade.value,
      uf: uf.value,
    };

    // Limpa os dados

    name.value = '';
    email.value = '';
    cpf.value = '';
    telefone.value = '';
    cep.value = '';
    bairro.value = '';
    numero.value = '';
    logradouro.value = '';
    cidade.value = '';
    uf.value = '';

    appendObjectToLocalStorage(user);
  })
  // Guardar no LocalStorage
  function appendObjectToLocalStorage(obj) {
    var users = [],
      dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    if (dataInLocalStorage !== null) {
      users = JSON.parse(dataInLocalStorage);
    }

    users.push(obj);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users));

    loadFromLocalStorage();
  }
  // Listagem
  function loadFromLocalStorage() {
    var users = [],
      dataInLocalStorage = localStorage.getItem(localStorageKeyName),
      gridBody = document.querySelector("#list tbody");

    if (dataInLocalStorage !== null) {
      users = JSON.parse(dataInLocalStorage);
    }

    gridBody.innerHTML = '';

    users.forEach(function (x, i) {
      var tr = document.createElement("tr"),
        tdName = document.createElement("td"),
        tdEmail = document.createElement("td"),
        tdCpf = document.createElement("td"),
        tdTelefone = document.createElement("td"),
        tdCep = document.createElement("td"),
        tdBairro = document.createElement("td"),
        tdNumero = document.createElement("td"),
        tdLogradouro = document.createElement("td"),
        tdCidade = document.createElement("td"),
        tdUf = document.createElement("td"),
        tdRemove = document.createElement("td"),
        btnRemove = document.createElement("button");

      tdName.innerHTML = x.name;
      tdEmail.innerHTML = x.email;
      tdCpf.innerHTML = x.cpf;
      tdTelefone.innerHTML = x.telefone;
      tdCep.innerHTML = x.cep;
      tdBairro.innerHTML = x.bairro;
      tdNumero.innerHTML = x.numero;
      tdLogradouro.innerHTML = x.logradouro;
      tdCidade.innerHTML = x.cidade;
      tdUf.innerHTML = x.uf;

      btnRemove.textContent = 'X';
      btnRemove.className = 'btn btn-xs btn-danger';
      btnRemove.addEventListener('click', function () {
        deleteLocalStorage(i);
      });

      tdRemove.appendChild(btnRemove);


      tr.appendChild(tdName);
      tr.appendChild(tdEmail);
      tr.appendChild(tdCpf);
      tr.appendChild(tdTelefone);
      tr.appendChild(tdCep);
      tr.appendChild(tdBairro);
      tr.appendChild(tdNumero);
      tr.appendChild(tdLogradouro);
      tr.appendChild(tdCidade);
      tr.appendChild(tdUf);
      tr.appendChild(tdRemove);


      gridBody.appendChild(tr);
    })
  }
  // Delete
  function deleteLocalStorage(index) {
    var users = [],
      dataInLocalStorage = localStorage.getItem(localStorageKeyName);

    users = JSON.parse(dataInLocalStorage);

    users.splice(index, 1);

    localStorage.setItem(localStorageKeyName, JSON.stringify(users));

    loadFromLocalStorage();
  }
}