// Função para lidar com a inserção dos links sociais
function inserirLinkSocial(tipo) {
    let link = prompt("Insira o link:");
    if (link !== null && link !== "") {
        switch (tipo) {
            case 'linkedin':
                alert("Link do LinkedIn inserido: " + link);
                break;
            case 'facebook':
                alert("Link do Facebook inserido: " + link);
                break;
            case 'instagram':
                alert("Link do Instagram inserido: " + link);
                break;
            case 'lattes':
                alert("Link do Currículo Lattes inserido: " + link);
                break;
            case 'email':
                alert("Email inserido: " + link);
                break;
            case 'github':
                alert("Link do Github inserido: " + link);
                break;
            default:
                break;
        }
    }
}
