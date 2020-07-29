var m = prompt("Enter the countdown time in minutes: ")
  
        
        var s = m * 60; 
  
        
        function cd() { 
            setTimeout('Decrement()', 60); 
        } 
  
        
        function Decrement() { 
            if (document.getElementById) { 
                minutes = document.getElementById("min"); 
                seconds = document.getElementById("sec"); 
  
                
                if (seconds < 59) { 
                    seconds.value = secs; 
                } 
  
                
                else { 
                    minutes.value = getminutes(); 
                    seconds.value = getseconds(); 
                } 
                
                if (m < 1) { 
                    minutes.style.color = "blue"; 
                    seconds.style.color = "blue"; 
                } 
                
                if (m < 0) { 
                    alert('time up'); 
                    minutes.value = 0; 
                    seconds.value = 0; 
                } 
                
                else { 
                    s--; 
                    setTimeout('Decrement()', 1000); 
                } 
            } 
        } 
  
        function getminutes() { 
            
            m = Math.floor(s / 60); 
            return m; 
        } 
  
        function getseconds() { 
            
            return s - Math.round(m * 60); 
        } 
  
        
     