
// This code is made to calculate a person's sleep hours and compare them to their ideal sleep goals.


const getSleepHours = (day) => {
    switch(day) {
    
    case 'monday':
    return 1;
    
    case 'tuesday':
    return 2;
  
    case 'wednesday':
    return 3;
  
    case 'thursday':
    return 4;
  
    case 'friday':
    return 5;
  
    case 'saturday':
    return 6;
  
    case 'sunday':
    return 7;
  
    }
  };
  
  const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  
  
  // console.log(getSleepHours('monday'));
  // console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  
  }
  // the weekly idealhours:
  console.log(getIdealSleepHours());
  
  
  
  
    const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); 
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('you got the perfect amount of sleep');
      
      
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`you got more sleep than needed ${actualSleepHours - idealSleepHours} over your ideal sleep!`);
  
    } else {
      console.log(`you should get some rest. You need to sleep ${idealSleepHours - actualSleepHours} to match your ideal sleep`);
  
    }
  };
  
  calculateSleepDebt();
  
  
  
  
  
  