
let elemento = document.getElementsByClassName('botaoUm');
        Array.from(elemento).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("textoUm")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.getElementsByClassName("mais")[0].innerText = "+";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                    this.getElementsByClassName("mais")[0].innerText = "-";
                }
            })
        })
        let elemento2 = document.getElementsByClassName('botaoDois');
        Array.from(elemento2).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("textoDois")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                    this.getElementsByClassName("mais")[0].innerText = "+";
                    
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                    this.getElementsByClassName("mais")[0].innerText = "-";
                }
            })
        })
        let elemento3 = document.getElementsByClassName('botaoTres');
        Array.from(elemento3).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("textoTres")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                    this.getElementsByClassName("mais")[0].innerText = "+";
                    
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                    this.getElementsByClassName("mais")[0].innerText = "-";
                }
            })
        })
        let elemento4 = document.getElementsByClassName('Ref');
        let elemento5 = document.getElementsByClassName('RefUm');
        let elemento6 = document.getElementsByClassName('RefDois');
        let elemento7 = document.getElementsByClassName('RefTres');
        let elemento8 = document.getElementsByClassName('RefQuatro');

        Array.from(elemento4).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("referencias")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                }
            })
        })
        Array.from(elemento5).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("referenciasUm")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                }
            })
        })
        Array.from(elemento6).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("referenciasDois")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                }
            })
        })
        Array.from(elemento7).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("referenciasTres")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                }
            })
        })
        Array.from(elemento8).forEach((item) => {
            item.addEventListener('click', function (e) {
                let texto = this.parentNode.getElementsByClassName("referenciasQuatro")[0];
                let estado = texto.style.display;
                if (estado === "block") {
                    texto.style.display = "none";
                    this.style.borderBottomRightRadius = "30px";
                    this.style.borderBottomLeftRadius = "30px";
                } else {
                    this.style.borderBottomRightRadius = 0;
                    this.style.borderBottomLeftRadius = 0;
                    texto.style.borderTopLeftRadius = 0;
                    texto.style.borderTopRightRadius = 0;
                    texto.style.display = "block";
                }
            })
        })