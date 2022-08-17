class contaBancaria {
  constructor(agencia, numero,saldo, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; //sempre que tiver get/ser colocar _ na frente para utilizar nome no getter/setter
  }
  get saldo() {
    return this;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação Negada.";
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo= "corrente:";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupança extends contaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo= "poupança:";
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo= "universitaria:";
    }

    sacar(valor){
        if(valor > 500){
            return "Operação Negada."
        }
        this._saldo = this._saldo - valor;
    }
}
