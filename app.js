      const textarea = document.querySelector('#text')
      let _voice = document.querySelector('#voice')
      let _btn = document.querySelector('.submit')

      let synth = speechSynthesis
      let isSpeaking = true

      function speech() {
        // Adding Voice option
        for (let voice of synth.getVoices()) {
          let option = document.createElement('option')
          option.text = voice.name
          _voice.add(option)
          console.log(option)
        }
      }

      synth.addEventListener('voiceschanged', speech)

      function textToSpeech(text) {
        let utternance = new SpeechSynthesisUtterance(text)
        for (let voice of synth.getVoices()) {
          if (voice.name === _voice.value) {
            utternance.voice = voice
          }
        }
        speechSynthesis.speak(utternance)
      }

      //
      _btn.addEventListener('click', (e) => {
        e.preventDefault()
        if (textarea.value != '') {
          if (!synth.speaking) {
            textToSpeech(textarea.value)
          }
      else {
            _btn.innerHTML = 'Convert To Speech'
          }
        }
        else{
            alert("No Text, Type something first ")
        }
      })
      speech()