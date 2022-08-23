

    document.getElementById('btn-neymer').addEventListener('click', function(){
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Neymar Jr';
        playerSelect.appendChild(createList);

       
    })
    
    document.getElementById('btn-machado').addEventListener('click', function(){
       
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Vítor Machado';
        playerSelect.appendChild(createList);
    })
    document.getElementById('btn-messi').addEventListener('click', function(){
       
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Lionel Messi';
        playerSelect.appendChild(createList);
    })
    document.getElementById('btn-mbappe').addEventListener('click', function(){
       
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Kylian Mbappé';
        playerSelect.appendChild(createList);
    })
    document.getElementById('btn-ramos').addEventListener('click', function(){
      
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Sergio Ramos';
        playerSelect.appendChild(createList);
    })
    document.getElementById('btn-santos').addEventListener('click', function(){
       
        const playerSelect = document.getElementById('player-list')
        const createList = document.createElement('li');
        createList.innerText = 'Renato Sanches';
        playerSelect.appendChild(createList);

       
    });





    function isNanField(amount){
        if(isNaN(amount)){
            alert('provide vallid number');
        }
    }

// player budget start here 

document.getElementById('btn-expense').addEventListener('click', function(){

    const playerList = document.getElementById('player-list');
    const playerChildes = playerList.childNodes;
    const players =playerChildes.length-1;
  
    // get per player expense 
    const playerExpense = document.getElementById('expense-field');
    const PlayerExpenseString = playerExpense.value ;
    const perPlayerExpense = parseFloat(PlayerExpenseString);
    // playerExpense.value = '';

   
    
    isNanField(perPlayerExpense);

    //  get player total expense 
    const  getPlayerExpense = (perPlayerExpense * players).toFixed(2);
    const  playerExpenseTotal = parseFloat(getPlayerExpense);

    
    const playersExpense = document.getElementById('total-expense');
    playersExpense.innerText = playerExpenseTotal;
    
});

//  get stuff coast 


document.getElementById('btn-total').addEventListener('click', function(){

    const managerField = document.getElementById('manager-field');
    const managerFieldString = managerField.value;
    const managerCoast = parseFloat (managerFieldString);
    
    // get coach coast 
    const coachField = document.getElementById('coach-field');
    const coachFieldString = coachField.value ;
    const coachCoast = parseFloat(coachFieldString); 

    // get player expense 
    const playersExpense = document.getElementById('total-expense');
    const playerExpenseString = playersExpense.innerText
    const previouExpense = parseFloat(playerExpenseString);

    isNanField(managerCoast, coachCoast);

    // get total amount 
    const getTotalCoast = previouExpense + managerCoast + coachCoast;

    const totalCoast = document.getElementById('total');
    totalCoast.innerText = getTotalCoast;

    

});