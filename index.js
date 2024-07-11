let menu_button = document.getElementById('menu_button');
        let menu = document.getElementById('menu');
        menu_button.addEventListener('click', abrirMenu);

        function abrirMenu() {

            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        }

        let menu_links = document.querySelectorAll('.menu-link');
        menu_links.forEach(link => {
            link.addEventListener('click', () => {

                if (!menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            });
        });

        let wsp_veterinaria = document.getElementById('wsp_veterinaria');
        let numero = "995305303";
        let mensaje = "Hola, me gustaría hacer una consulta sobre mi mascota.";
        wsp_veterinaria.addEventListener('click', function () {
            window.open(urlApiWhats);
        });
        let urlApiWhats = "https://api.whatsapp.com/send/?phone=" + numero + "&text=" + mensaje;

