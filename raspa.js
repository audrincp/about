function raspa(){
fetch ("http://www.santos.sp.gov.br/")
.then(resp => resp.text())
.then(x => {
let dom = new DOMParser();
let doc = dom.paeseFromString(x,"text/html");

docquerySlectorAll(".valor-salario-servidor")
.forEach(div => document.body.appendChild(div));
}
)
.cach(e => document.write(e))
