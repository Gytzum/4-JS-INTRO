function calculateTip(amount, rating) {
    let tip = 0;
    let a = rating.toLowerCase ();
    if (a === 'terrible') { tip = 0}
    else if (a === 'poor') { tip = amount * 0.05}
    else if (a === 'good') { tip = amount * 0.1}
    else if (a === 'great') {  tip = amount * 0.15}
    else if (a === 'excellent'){  tip = amount * 0.2} 
  else {return "Rating not recognised"}
    return Math.ceil(tip);  
    }

    console.log(calculateTip(20, "Excellent"), 4);
    console.log(calculateTip(26.95, "good"), 3);
    
