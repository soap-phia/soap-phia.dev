async function setPfp(img) {
    icon.href = '/pfps/' + img + 'circle.png';
    image.src = '/pfps/' + img + '.png';
}

document.addEventListener('DOMContentLoaded', function() {
    icon = document.getElementById('favicon');
    image = document.getElementById('pfp');
    date = new Date();
    month = date.getMonth() + 1;
    switch (month) {
        case 10:
            setPfp('soapoween');
            break;
        case 11:
        case 12:
            setPfp('mariahsoapy');
            break;
        default:
            setPfp('soap');
            break;
    }
});