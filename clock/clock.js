// id
// получать текущую дату(старт)
// передавать размер часов
// картинка с интернета(часы)


function test(params) {
  const clockBody = document.querySelector(`#${params.id}`);            // id
  clockBody.classList.add("clockBody");

  const date = params.startDate;                                        // получать текущую дату(старт)
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  clockBody.style.cssText = `width: ${params.size}px;
                             height: ${params.size}px;
                             background: url('${params.imgURL}');       
                             background-size: cover;`;                  // передавать размер часов, картинка с интернета(часы)
                             
  const hoursLine = document.createElement("div");                      // часовая стрелка
  hoursLine.classList.add("hoursLine");
  const minutesLine = document.createElement("div");                    // минутная стрелка
  minutesLine.classList.add("minutesLine");
  const secondsLine = document.createElement("div");                    // секундная стрелка
  secondsLine.classList.add("secondsLine");

  let angleFactorSec = seconds / 60;                                    // коэфициент угла секундной стрелки
  clockBody.append(secondsLine);
  secondsLine.style.cssText = `width: ${params.size / 133}px;
                               height: ${params.size / 1.1}px;
                               transform: rotate(${angleFactorSec}turn);`;
                               
  let angleFactorMin = (minutes + angleFactorSec) / 60;                 // коэфициент угла минутной стрелки
  clockBody.append(minutesLine);
  minutesLine.style.cssText = `width: ${params.size / 133}px;
                               height: ${params.size / 1.3}px;
                               transform: rotate(${angleFactorMin}turn);`;
  
  let angleFactorHour = (hours + angleFactorMin) / 12;                  // коэфициент угла часовой стрелки
  clockBody.append(hoursLine);
  hoursLine.style.cssText = `width: ${params.size / 80}px;
                             height: ${params.size / 1.7}px;
                             transform: rotate(${angleFactorHour}turn);`;
  
  setInterval(() => {
    seconds += 1;                                                       // каждую секунду(1000ms) меняем время на +1 секунду
    if(seconds === 60){
      seconds = 0;
      minutes += 1;
    }
    angleFactorSec = seconds / 60;
    angleFactorMin = (minutes + angleFactorSec) / 60;
    angleFactorHour = (hours + angleFactorMin) / 12;
    hoursLine.style.transform = `rotate(${angleFactorHour}turn)`;
    minutesLine.style.transform = `rotate(${angleFactorMin}turn)`;
    secondsLine.style.transform = `rotate(${angleFactorSec}turn)`;
  }, 1000);
}

