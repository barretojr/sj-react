(function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
        return;
    }

    function darkMode() {
        document.querySelectorAll('.bg-light').forEach((element) => {
            element.className = element.className.replace(/-light/g, '-dark');
        });

        document.querySelectorAll('.link-dark').forEach((element) => {
            element.className = element.className.replace(/link-dark/, 'text-white');
        });

        document.body.classList.add('bg-dark');

        if (document.body.classList.contains('text-dark')) {
            document.body.classList.replace('text-dark', 'text-light');
        } else {
            document.body.classList.add('text-light');
        }

        var tables = document.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
            
            tables[i].classList.add('table-dark');
        }

        if (!lightSwitch.checked) {
            lightSwitch.checked = true;
        }
        localStorage.setItem('lightSwitch', 'dark');
    }

    function lightMode() {
        document.querySelectorAll('.bg-dark').forEach((element) => {
            element.className = element.className.replace(/-dark/g, '-light');
        });

        document.querySelectorAll('.text-white').forEach((element) => {
            element.className = element.className.replace(/text-white/, 'link-dark');
        });

        document.body.classList.add('bg-light');

        if (document.body.classList.contains('text-light')) {
            document.body.classList.replace('text-light', 'text-dark');
        } else {
            document.body.classList.add('text-dark');
        }

        
        var tables = document.querySelectorAll('table');
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].classList.contains('table-dark')) {
                tables[i].classList.remove('table-dark');
            }
        }

        if (lightSwitch.checked) {
            lightSwitch.checked = false;
        }
        localStorage.setItem('lightSwitch', 'light');
    }

    function onToggleMode() {
        if (lightSwitch.checked) {
            darkMode();
        } else {
            lightMode();
        }
    }

    function getSystemDefaultTheme() {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkThemeMq.matches) {
            return 'dark';
        }
        return 'light';
    }

    function setup() {
        var settings = localStorage.getItem('lightSwitch');
        if (settings == null) {
            settings = getSystemDefaultTheme();
        }

        if (settings === 'dark') {
            lightSwitch.checked = true;
        }

        lightSwitch.addEventListener('change', onToggleMode);
        onToggleMode();
    }

    setup();
})();
