let button = document.querySelector(".button")

button.addEventListener("click", ()=>{
    button.classList.add("active")

    setTimeout(()=>{
        button.classList.remove("active"); // remove active class
        document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
        document.querySelector(".button-text").innerText = "Completed"
    },4000) // 1s = 1000ms
})