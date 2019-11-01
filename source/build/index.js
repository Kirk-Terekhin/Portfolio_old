document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function() {
        document.body.classList.toggle('unity_active');
    });
});

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










// document.addEventListener("DOMContentLoaded", function() {
//     function scrollWidth() {
//         var div = document.createElement('div');
//
//         div.style.overflowY = 'scroll';
//         div.style.width = '50px';
//         div.style.height = '50px';
//
//         div.style.visibility = 'hidden';
//
//         document.body.appendChild(div);
//         var scrollWidth = div.offsetWidth - div.clientWidth;
//         document.body.removeChild(div);
//
//         return scrollWidth;
//     }
//     // closeDevel()
//     // function closeDevel() {
//     // 	var inDevel = document.querySelector('.inDevel');
//     // 	var close = document.querySelector('.inDevel__button');
//     // 	var closeButton = document.querySelector('.inDevel__closeButton');
//     // 	if (sessionStorage.getItem('closeDevel') !== 'close') {
//     // 		inDevel.classList.remove('close', 'close__hide');
//     // 		close.addEventListener('click', function() {
//     // 			inDevel.classList.add('close');
//     // 			sessionStorage.setItem('closeDevel', 'close');
//     // 			addClassDelay(inDevel, 'close__hide', closeRemoveDelay);
//     // 		});
//     // 		closeButton.addEventListener('click', function(ev) {
//     // 			inDevel.classList.add('close');
//     // 			addClassDelay(inDevel, 'close__hide', closeRemoveDelay);
//     // 		});
//     // 	}
//     // }
//     //
//     // function addClassDelay(elem, strClass, delay) {
//     // 	setTimeout(function() {
//     // 		elem.classList.add(strClass);
//     // 	}, delay);
//     // }
// });
