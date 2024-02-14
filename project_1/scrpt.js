const panels = document.querySelectorAll('.panel');

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                // Remove "active" class from all panels (excluding the clicked one)
                panels.forEach(p => p !== panel && p.classList.remove('active'));

                // Add "active" class to the clicked panel
                panel.classList.add('active');
            });
        });