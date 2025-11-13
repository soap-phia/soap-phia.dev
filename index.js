document.addEventListener('DOMContentLoaded', function() {
button = document.getElementById('soapbutton');
const tag = `
<a href="https://soap-phia.dev" target="_blank">
    <img src="https://soap-phia.dev/button.png" alt="soap" class="button-88x31">
</a>
`;
button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(tag);
    alert(tag + `
        
        copied to clipboard.`)
})
});