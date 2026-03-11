

// function showsidebar(){
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.add('active'); // Add class
// }

// function closesidebar() {
//     const sidebar = document.querySelector('.sidebar');
//     sidebar.classList.remove('active'); // Remove class
// }


function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
}