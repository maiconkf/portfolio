var app = {};

app.init = function() {
	app.loader();
	app.hover();
	app.modal();
};

app.hover = function() {
	var elements = document.getElementsByClassName('menu--link');
	for(var i = 0; i < elements.length; i++) { 
        elements[i].addEventListener('mouseenter', function() {
        	Object.keys(elements).forEach(function(key) {
    			elements[key].style.opacity = '.6';
    		});
    		this.style.opacity = '1';
    	});
        elements[i].addEventListener('mouseleave', function() {
        	Object.keys(elements).forEach(function(key) {
    			elements[key].style.opacity = '1';
    		});
    	});
    }
};

app.modal = function() {
	var elements = document.getElementsByClassName('open-modal');
	
	for(var i = 0; i< elements.length; i++) {
		elements[i].addEventListener('click', function() {
			document.getElementById('modal').style.display = 'block';
			fadeIn('modal', .3);
			app.contact();
		});
	}

	document.getElementById('close').addEventListener('click', function() {
		fadeOut('modal', .3);
	});

	fadeOut = function(id, time) {
	    fade(id, time, 100, 0);

	    setTimeout(function() {
	    	document.getElementById(id).style.display = 'none';
	    }, time);
	}

	var fadeIn = function(id, time) {
	    fade(id, time, 0, 100);
	}

	var fade = function(id, time, ini, fin) {
	    var target = document.getElementById(id);
	    var alpha = ini;
	    var inc;
	    if (fin >= ini) { 
	        inc = 2; 
	    } else {
	        inc = -2;
	    }
	    timer = (time * 1000) / 50;
	    var i = setInterval(
	        function() {
	            if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
	                clearInterval(i);
	            }
	            setAlpha(target, alpha);
	            alpha += inc;
	        }, timer);
	}

	var setAlpha = function(target, alpha) {
	    target.style.filter = "alpha(opacity="+ alpha +")";
	    target.style.opacity = alpha/100;
	}
};

app.contact = function() {
	var form = document.querySelector('form');

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		var name = encodeURIComponent(document.getElementById('name').value);
		var email = encodeURIComponent(document.getElementById('email').value);
		var message = encodeURIComponent(document.getElementById('message').value);

		var ajax = new XMLHttpRequest();
		var data = "name="+name+"&email="+email+"&message="+message;

		ajax.open("POST", "/email.php", true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		ajax.send(data);

		ajax.onreadystatechange = function() {
			console.log(ajax.readyState);
			console.log(ajax.status);

			if (ajax.readyState == 4 && ajax.status == 200) {
		    	fadeOut('modal', .4);
			} else if(ajax.status != 200) {
				alert('erro');
			}
		}

		return false;
	});
};

app.loader = function() {
	document.onreadystatechange = function () {
		var state = document.readyState;

		if (state == 'complete') {
			fadeOut('pre-loader', .3);
		}
	}​;
};

app.init();