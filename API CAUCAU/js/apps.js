function validaFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
  
   
    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
  
    const senhaRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (senhaRegex.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }
  
   const confirmSenhaRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (confirmSenhaRegex !== senha) {
        alert("As senhas não coincidem.");
        return;
    }else(senha === confirmSenha){
        

    }
  
   
    alert("Formulário válido. Enviando dados...");
  }
  
  function olhoPassword() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function olhoPassword2() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon2');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function abrirModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'block';
  }
  
  function fecharModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'none';
  }