function raspa(){
fetch ("http://www.santos.sp.gov.br/")
.then(resp => resp.text())
.then(x => {
let dom = new DOMParser();
let doc = dom.paeseFromString(x,"text/html");

docquerySlectorAll(".A951ec68aa49144e7b3918a6e16417db552")
.forEach(div => document.body.appendChild(DENOMINAÇÃO CARGO/ FUNÇÃO));
}
)
.cach(e => document.write(e))
