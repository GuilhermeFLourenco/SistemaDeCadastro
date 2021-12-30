class Aluno{
	constructor(){
       this.id = 0;
       this.arrayAlunos = [];   
	}
    
    salvar(){
    	let aluno = this.lerDados();

        if(this.validaCampos(aluno)) {
          this.adicionar(aluno);

          alert('Aluno(a) cadastrado com sucesso!');
        }

        this.listaTabela();



        //console.log(this.arrayAlunos);

    }

    listaTabela(){
      let tbody = document.getElementById('tabela');
      tbody.innerText = '';

      for(let i = 0; i < this.arrayAlunos.length; i++ ){
          let tr = tbody.insertRow();
          
          let td_id = tr.insertCell();
          let td_nomeAluno = tr.insertCell();
          let td_telefone = tr.insertCell();
          let td_dataNascimento = tr.insertCell();
          let td_notaFinal = tr.insertCell();
          let td_botaoExcluir = tr.insertCell();

          td_id.innerText = this.arrayAlunos[i].id;
          td_nomeAluno.innerText = this.arrayAlunos[i].nomeAluno;
          td_telefone.innerText = this.arrayAlunos[i].telefone;
          td_dataNascimento.innerText = this.arrayAlunos[i].dataNascimento;
          td_notaFinal.innerText = this.arrayAlunos[i].notaFinal;

          let iconeExcluir = document.createElement('img');
          iconeExcluir.src = 'img/excluir.png';
          iconeExcluir.setAttribute('onclick','aluno.deletar('+ this.arrayAlunos[i].id +')');

          td_botaoExcluir.appendChild(iconeExcluir);
          
          console.log(this.arrayAlunos);
      }
    }

    adicionar(aluno){
       this.arrayAlunos.push(aluno);
       this.id++;
    }

    lerDados (){
       let aluno = {}
       
       aluno.id = this.id;
       aluno.nomeAluno = document.getElementById('nomeAluno').value;
       aluno.telefone = document.getElementById('telefone').value;
       aluno.dataNascimento = document.getElementById('dataNascimento').value;
       aluno.notaFinal = document.getElementById('notaFinal').value;

       return aluno;
    }

    validaCampos(aluno){
      let msg = '';

      if(aluno.nomeAluno == ''){
        msg += ' Informe o nome\n';
      }

      if(aluno.telefone == '') {
        msg += ' Informe o telefone\n';
      }

      if(aluno.dataNascimento == '') {
        msg += ' Informe a data de nascimento\n';
      }

      if(aluno.notaFinal == '') {
        msg += ' Informe a nota final do curso\n';
      }

      if(msg != '') {
        alert(msg);
        return false
      }

      return true;
    }

    cancelar(){
    	document.getElementById('nomeAluno').value = '';
      document.getElementById('telefone').value = '';
      document.getElementById('dataNascimento').value = '';
      document.getElementById('notaFinal').value = '';
    }

    deletar(id){
       
      let tbody = document.getElementById('tabela');

      for(let i = 0; i < this.arrayAlunos.length; i++){
         if(this.arrayAlunos[i].id == id){
              this.arrayAlunos.splice(i, 1);
              tbody.deleteRow(i);
         }
      }

      console.log(this.arrayAlunos);
    
    }

}
var aluno = new Aluno();

