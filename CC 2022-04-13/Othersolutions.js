//Other solutions on CodeWars

var calculateAge = (old, news) => {
    if ( old === news ) {
      return "You were born this very year!" 
    }else if ( news > old ) {
      return news - old === 1 ? "You are 1 year old." : `You are ${news - old} years old.`
    }else{
      return old - news === 1 ? "You will be born in 1 year." : `You will be born in ${old - news} years.`
    } 
  }


//other solution:
function  calculateAge(m, n) {
    if(m == n) return 'You were born this very year!';
    var year = Math.abs(m-n) == 1 ? 'year' : 'years';
    if(m < n) return "You are "+(n-m)+' '+year+' old.';
    if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
  }
