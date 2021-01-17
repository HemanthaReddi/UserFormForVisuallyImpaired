
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (!checkbox.checked) {
      document.getElementById("accessibilityEnabled").innerHTML="Accessibilty disabled";
    } 
	else {
      document.getElementById("accessibilityEnabled").innerHTML="Accessibilty Enabled";

    }
  });
});

function textToAudio() {
                let msg = document.getElementById("fname").value;
                
                let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = msg;
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
                
				window.speechSynthesis.cancel();
                window.speechSynthesis.speak(speech);
				
}

