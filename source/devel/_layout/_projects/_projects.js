document.addEventListener("DOMContentLoaded", function() {
    var xs = 550,
        sm = 768,
        md = 960,
        lg = 1150,
        xlg = 1850;
    var grid = 4;

    var parent__projects = document.querySelector('.projects');
    var projects = parent__projects.querySelectorAll('.project');
    // var ifGrid = document.querySelectorAll('.grid__column');

    gridCreate();

    function gridCreate() {
        gridCount();
        for (var i = 0; i < grid; i++) {
            var itemGrid = document.createElement('div');
            itemGrid.classList.add('grid__column');
            parent__projects.appendChild(itemGrid)
        }
        var gridColumn = document.querySelectorAll('.grid__column');
        for (var i = 0; i < projects.length; i++) {
            for (var j = 0; j < grid; j++) {
                if (projects[grid * i + j]) {
                    gridColumn[j].appendChild(projects[grid * i + j]);
                }
            }
        }
    }

    function gridCount() {
        var windowWidth = window.innerWidth;
        if (windowWidth < xs) {
            grid = 1;
        } else if (windowWidth < md) {
            grid = 2;
        } else if (windowWidth < lg) {
            grid = 3;
        } else if (windowWidth < xlg) {
            grid = 4;
        } else {
            grid = 4;
        }
    }
    window.addEventListener('resize', function(e) {
        var ifGrid = document.querySelectorAll('.grid__column');
        gridCount();
        if (ifGrid.length !== grid) {
            document.querySelector('.projects').innerHTML = '';
            gridCreate();
        }
    });
});
