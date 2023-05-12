function insereNumeroNoVisor(valor, visorId) {
    var visor = document.getElementById(visorId);
    visor.value += valor;
  }
  
  function insereDecimalNoVisor(valor, visorId) {
    var visor = document.getElementById(visorId);
    if (!visor.value.includes('.')) {
      visor.value += valor;
    }
  }
  
  function insereOperadorNoVisor(valor, visorId) {
    var visor = document.getElementById(visorId);
    if (
      visor.value !== '' &&
      !isNaN(visor.value[visor.value.length - 1]) &&
      valor !== '.'
    ) {
      visor.value += valor;
    }
  }
  
  function limparVisor(visorId) {
    var visor = document.getElementById(visorId);
    visor.value = '';
  }
  
  function avaliarResultado(visorId) {
    var visor = document.getElementById(visorId);
    try {
      visor.value = eval(visor.value);
    } catch (error) {
      if (error instanceof SyntaxError) {
        visor.value = 'Erro de expressão';
      } else if (error instanceof TypeError) {
        visor.value = 'Erro de tipo';
      } else {
        visor.value = 'Erro de cálculo';
      }
    }
  }
  