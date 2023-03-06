let texto = 'Hola esto es una prueba de voz'
const hablar = (texto)=>speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

hablar(texto)