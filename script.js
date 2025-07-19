

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active'); // Add class
}

function closesidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Remove class
}
