// Botão "Alterar Foto"
document.getElementById('change-photo').addEventListener('click', function () {
    document.getElementById('profile-picture').click();
});

// Atualiza o preview da imagem
document.getElementById('profile-picture').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-picture-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Botão "Salvar Foto"
document.getElementById('save-photo').addEventListener('click', function () {
    alert("Foto de perfil atualizada!");
    // Aqui você pode enviar a imagem para o servidor usando AJAX/FormData.
});

// Botão "Sair"
document.getElementById('logout').addEventListener('click', function () {
    alert("Você saiu da conta!");
    // Redirecionamento ou limpeza de sessão pode ser feito aqui.
});

// Submissão do formulário
document.getElementById('edit-profile-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Perfil salvo com sucesso!");
    // Aqui você pode enviar os dados do formulário para o backend
});
