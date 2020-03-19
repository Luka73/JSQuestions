function executaJsQ3() {
    /* Ferias box */
    var radios = document.getElementsByName("ferias");
    var ferias = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          ferias = radios[i].value;
          break;
        }
    }

    /* Dinheiro box */
    var dinheiro = document.getElementById("dinheiro").value;
    var msg = document.getElementById("msg");

    if (ferias == 0 || dinheiro < 0 || dinheiro == ""){
        msg.innerHTML = "Preencha o formulário corretamente";
        msg.className = "";
        msg.classList.add("text-danger");
    }
    else if (dinheiro < 500 || ferias == 'N') {
        msg.innerHTML = "Não pode viajar =(";
        msg.className = "";
        msg.classList.add("text-warning");
    } else {
        msg.innerHTML = "Boa viagem! =)";
        msg.className = "";
        msg.classList.add("text-success");
    }
}

function executaJsQ4() {
    /* Estudante box */
    var radios = document.getElementsByName("estudante");
    var estudante = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          estudante = radios[i].value;
          break;
        }
    }

    /* Idade box */
    var idade = document.getElementById("idade").value;
    var msg = document.getElementById("msg");

    if (estudante == 0 || idade <= 0 || idade == "") {
        msg.innerHTML = "Preencha o formulário corretamente";
        msg.className = "";
        msg.classList.add("text-danger");
    }
    else if (idade < 21 || idade >= 65 || estudante == 'S') {
        msg.innerHTML = "Paga meia! =)";
        msg.className = "";
        msg.classList.add("text-success");
    } else {
        msg.innerHTML = "Não paga meia! =(";
        msg.className = "";
        msg.classList.add("text-warning");
    }
}

function executaJsQ5() {
    var n1 = document.getElementById("primeiro").value;
    var n2 = document.getElementById("segundo").value;
    var n3 = document.getElementById("terceiro").value;

    var msg = document.getElementById("msg");
    msg.classList.add("text-success");
    var msg2 = document.getElementById("msg2");
    msg2.classList.add("text-info");

    if (n1 < n2 && n1 < n3) {
        msg.innerHTML = (n2 < n3 ) ? n1 + "," + n2 + "," + n3 : n1 + "," + n3 + "," + n2;
    } else if (n2 < n1 && n2 < n3) {
        msg.innerHTML = (n1 < n3 ) ? n2 + "," + n1 + "," + n3 : n2 + "," + n3 + "," + n1;
    } else {
        msg.innerHTML = (n1 < n2 ) ? n3 + "," + n1 + "," + n2 : n3 + "," + n2 + "," + n1;
    }

    var array = [n1, n2, n3];
    msg2.innerHTML = array.sort();
    
}

function executaJsQ6() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var msg = document.getElementById("msg");

    if ((a < b + c) && (b < a + c) && (c < a + b)) {
        msg.className = "";
        msg.classList.add("text-success"); 

        if (a == b && b == c) {
            msg.innerHTML = "Triângulo equilátero";
        } else if (a == b || b == c || c == a) {
            msg.innerHTML = "Triângulo isósceles";
        } else {
            msg.innerHTML = "Triângulo escaleno";  
        }
    } else {
        msg.innerHTML = "Essas medidas não formam um triângulo";
        msg.className = "";
        msg.classList.add("text-danger");
    }
}

function executaJsQ7() {
    var ano = parseInt(document.getElementById("ano").value);
    var mes = parseInt(document.getElementById("mes").value);

    var msg = document.getElementById("msg");
    msg.classList.add("text-success");

    var dias = 28;

    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)) {
        dias = 29;
    }

    switch (mes) {
        case 1:
        case 3:
        case 5: 
        case 7: 
        case 8:
        case 10:
        case 12:
            msg.innerHTML = "O mês " + mes + " tem 31 dias no anos de " + ano + ".";
            break;
        case 4:
        case 6: 
        case 9:
        case 11:
            msg.innerHTML = "O mês " + mes + " tem 30 dias no anos de " + ano + ".";
            break;
        case 2:
            msg.innerHTML = "O mês " + mes + " tem " + dias + " dias no anos de " + ano + ".";
            break;
        default:
            msg.innerHTML = "Insira informações válidas";
            break;
    }
}

function executaJsQ8() {
    var dia = parseInt(document.getElementById("dia").value);
    var mes = parseInt(document.getElementById("mes").value);
    var estacao = 0;

    var msg = document.getElementById("msg");

    switch (mes) {
        case 4:
        case 5: 
            estacao = "Outono";
            break;
        case 7:
        case 8: 
            estacao = "Inverno";
            break;
        case 10:
        case 11: 
            estacao = "Primavera";
            break;
        case 1:
        case 2: 
            estacao = "Verão";
            break;
        case 3:
            estacao = (dia < 20) ? "Verão" : "Outono";
            break;
        case 6:
            estacao = (dia < 20) ? "Outono" : "Inverno";
            break;
        case 9:
            estacao = (dia < 22) ? "Inverno" : "Primavera";
            break;
        case 12:
            estacao = (dia < 22) ? "Primavera" : "Verão";
            break;
        default:
            msg.className = "";
            msg.innerHTML = "Preencha as informações corretamente";
            msg.classList.add("text-danger");
            break;
    }

    msg.className = "";

    if (dia > 31) {
        msg.innerHTML = "O dia não pode ser maior que 31";
        msg.classList.add("text-danger");
    } else {
        
        msg.innerHTML = "No dia " + dia + " do mês " + mes + " é " + estacao;
        msg.classList.add("text-success");
    }

    
}