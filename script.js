let intervalId;

document.getElementById(
 "timeCalculator").addEventListener(
 "submit",
 function(e) {
  e.preventDefault();

  const birthDateInput = document
   .getElementById("birthDate");
  const birthDate = new Date(
   birthDateInput.value);
  const now = new Date();

  const resultContainer = document
   .getElementById("result");

  // Exibe alerta caso o campo esteja vazio
  if (!birthDateInput.value) {
   alert(
    "Por favor, insira uma data e hora válidas."
   );
   resultContainer.classList.add(
    "hidden");
   return;
  }

  if (isNaN(birthDate) || birthDate >
   now) {
   alert(
    "Por favor, insira uma data e hora no passado."
   );
   resultContainer.classList.add(
    "hidden");
   return;
  }

  resultContainer.classList.remove(
   "hidden");

  // Atualiza os valores a cada segundo
  if (intervalId) clearInterval(
   intervalId
  ); // Evita múltiplos intervalos
  intervalId = setInterval(() =>
   updateAge(birthDate), 1000);

  // Atualiza a idade imediatamente ao clicar no botão
  updateAge(birthDate);
 });

function updateAge(birthDate) {
 const now = new Date();
 const diffInMs = now - birthDate;

 const seconds = Math.floor(diffInMs /
  1000);
 const minutes = Math.floor(seconds /
  60);
 const hours = Math.floor(minutes /
  60);
 const days = Math.floor(hours / 24);
 const weeks = Math.floor(days / 7);
 const months = Math.floor(days /
  30.4375); // Média de dias por mês
 const years = Math.floor(days /
  365.25); // Média de dias por ano

 document.getElementById("years")
  .textContent = years;
 document.getElementById("months")
  .textContent = months;
 document.getElementById("weeks")
  .textContent = weeks;
 document.getElementById("days")
  .textContent = days;
 document.getElementById("hours")
  .textContent = hours;
 document.getElementById("minutes")
  .textContent = minutes;
 document.getElementById("seconds")
  .textContent = seconds;
}
