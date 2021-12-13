/*  Hello feature.  */
window.onload = (event) => {
let result = prompt("Enter Your Name","");
console.log(document.getElementById("enter-name"))
document.getElementById("enter-name").innerText = `Welcome to my portfolio website, ${result}!`;
};

/*  Audio player feature.  */

window.addEventListener('load', function () {
    let friend = document.getElementById("friend");
    let friend_player = document.getElementById("friend_player");
    let colleague = document.getElementById("colleague");
    let colleague_player = document.getElementById("colleague_player");
    let student = document.getElementById("student");
    let student_player = document.getElementById("student_player");
    let enemy = document.getElementById("enemy");
    let enemy_player = document.getElementById("enemy_player");

    console.log(friend);
    friend.addEventListener('mouseenter', () => {
        console.log("eeee");
        friend_player.play();
    })

    friend.addEventListener('mouseleave', () => {
        friend_player.pause();
    })

    colleague.addEventListener('mouseenter', () => {
        colleague_player.play();
    })

    colleague.addEventListener('mouseleave', () => {
        colleague_player.pause();
    })
    
    student.addEventListener('mouseenter', () => {
        student_player.play();
    })

    student.addEventListener('mouseleave', () => {
        student_player.pause();
    })
    
    enemy.addEventListener('mouseenter', () => {
        enemy_player.play();
    })

    enemy.addEventListener('mouseleave', () => {
        enemy_player.pause();
    })
})


