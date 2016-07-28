class PontoController {

    constructor() {
        //o Bind associa o contexto do Document ao comportamento querySelector ($);
        let $ = document.querySelector.bind(document);
        this._data_cadastro = $('#data_cadastro');
        this._hora1 = $('#hora1');
        this._hora2 = $('#hora2');
        this._hora3 = $('#hora3');
        this._hora4 = $('#hora4');
        this._hora5 = $('#hora5');
        this._hora6 = $('#hora6');

        this._listaPontos = new ListaPonto(model => this._pontosView.update(this._listaPontos));

        //Cria elemento passando o local onde a view irá se fixar
        this._pontosView = new PontosView($('#pontosView'));
        this._mensagem = new Mensagem();

        //Insere a tabela
        this._pontosView.update(this._listaPontos);
    }

    //Métodos
    adiciona(event) {
        event.preventDefault();

        let ponto = new Ponto(
            this._data_cadastro.value,
            this._hora1.value,
            this._hora2.value,
            this._hora3.value,
            this._hora4.value,
            this._hora5.value,
            this._hora6.value
        );

        this._listaPontos.adiciona(ponto);
        this._mensagem.toast = "Ponto cadastrado com sucesso";
        this._limpaForm();

    }

    apaga() {

        let msg;

        if (this._listaPontos.pontos.length == 0) {
            msg = 'Lista já está vazia'
            this._mensagem.toast = msg;
        } else {
            if (this._listaPontos.esvazia(this._listaPontos)) {
                msg = 'Dados removidos com sucesso!';
                this._mensagem.toast = msg;
            } else {
                msg = 'Não foi possível remover os dados';
                this._mensagem.toast = msg;
                throw new Error(msg)
            }
        }
    }

    _limpaForm() {
        this._data_cadastro.value = '';
        //this._hora1.value = '';
        this._hora1.focus();
        //this._hora2.value = '';
        //this._hora3.value = '';
        //this._hora4.value = '';
        //this._hora5.value = '';
        //this._hora6.value = '';

        //reinicia os inputs (materializecss)
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 16 // Creates a dropdown of 15 years to control year            

        });
    }
}