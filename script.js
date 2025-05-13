document.getElementById('flavourQuiz').addEventListener('submit', function(e) {
  e.preventDefault();
  const answer = document.querySelector('input[name="q4"]:checked');
  const result = document.getElementById('result');
  if (!answer) {
    result.textContent = "Lūdzu izvēlies atbildi uz 4. jautājumu!";
    return;
  }

  let flavor, color;
  switch (answer.value) {
    case 'a':
      flavor = 'Tev piestāvētu BEACHY EDITION!';
      color = '#004d00'; // dark green
      break;
    case 'b':
      flavor = 'Tev piestāvētu TROPICAL EDITION!';
      color = '#cc6600'; // dark orange
      break;
    case 'c':
      flavor = 'Tev piestāvētu MIDNIGHT EDITION!';
      color = '#330033'; // dark purple
      break;
    case 'd':
      flavor = 'Tev piestāvētu SUMMER EDITION!';
      color = '#b38f00'; // dark yellow
      break;
  }

  document.body.style.backgroundColor = color;
  result.textContent = flavor;
});
