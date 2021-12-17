(function(){
    const input = document.querySelector('#itnew');
    const form = document.querySelector('#formitnew');
    const selectList = document.querySelector('#slist');
    const listsContainer = document.querySelector('#lists');

    let todos = []
    let lists = [
        {id: uuidv4(), text: 'General', count: 0},
        {id: uuidv4(), text: 'Casa', count: 0},
        {id: uuidv4(), text: 'Trabajo', count: 0}
    ];

    document.addEventListener('DOMContentLoaded', e =>{
        refreshUI();
        lists.forEach( list =>{
            selectList.innerHTML += 
        })
    });

    function refreshUI(){

    }
    function uuidv4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r& 0x3 | 0x8);
            return v.toString(16);
        });
    }

})();