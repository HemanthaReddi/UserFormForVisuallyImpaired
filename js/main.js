
document.onmouseover = function(e) {
    console.log(e.target.id);
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (!checkbox.checked) {
      document.getElementById("accessibilityEnabled").innerHTML="Accessibilty disabled";
	  var accessibilityEnabled = false;
    } 
	else {
      document.getElementById("accessibilityEnabled").innerHTML="Accessibilty Enabled";
	  var accessibilityEnabled = true;
    }
  });
});

function textToAudio() {
                let msg = document.getElementById("fname").innerHTML;
                console.log(msg);
				console.log("hello");
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = msg;
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                
				
				window.speechSynthesis.cancel();
                window.speechSynthesis.speak(speech);
				
}

