

//   function getPlayersName(player){
    
//   }
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
      
    if('player-name'.length >5){
        alert('no more choise player');
        return;
    }
})

// player budget start here 

document.getElementById('btn-expense').addEventListener('click', function(){

    const playerList = document.getElementById('player-list');
    const perPlayerPriceString = playerList.value ;
    const playerListTotal = parseFloat(perPlayerPriceString);
    // get player expense 
    const playerExpense = document.getElementById('expense-field');
    const PlayerExpenseString = playerExpense.value ;
    const perPlayerExpense = parseFloat(PlayerExpenseString);

    const  getPPlayerExpense = (perPlayerExpense * playerListTotal).toFixed(2);
    const  playerExpenseTotal = parseFloat(getPPlayerExpense);
    // get player total expense 
    const playersExpense = document.getElementById('total-expense');
    playersExpense.innerText = playerExpenseTotal;
    // const PlayerExpenseString = playersExpense.innerText;
    
});

//  get final coast 

document.getElementById('btn-total').addEventListener('click', function(){
    const managerField = document.getElementById('manager-field');

});