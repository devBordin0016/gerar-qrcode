function gerarQRCode() {
    var inputUsuario = document.querySelector('textarea').value;
    var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=https://site-pesqueiroarnaldao.vercel.app/';
    var conteudoQRCode = googleChartApi + inputUsuario;

    document.querySelector('#QrCodeImage').src = conteudoQRCode;
}