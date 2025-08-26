const about_me = document.querySelector(".About_me")
const contact = document.querySelector(".Contact")
const portfolio = document.querySelector(".Portfolio")
const close = document.querySelector(".close")
const nav = document.querySelector("nav")

about_me.addEventListener("click", (event) => {
    nav.insertAdjacentHTML("beforebegin", `<p class="text_about_me text_remove">
        Hello! My name is Vladislav, I’m 17 years old.
        I’m a frontend developer and plan to grow into
        a fullstack developer.I work with HTML, CSS,
        JavaScript, and React. I enjoy experimenting
        with animations, design, and creating real
        projects. In the future, I want to move to
        Canada or Dubai to work and develop my IT skills.
        </p>
        `)
    nav.classList.toggle("remove")
    close.classList.toggle("remove")
})

contact.addEventListener("click", (event) => {
    nav.classList.toggle("remove")
    close.classList.toggle("remove")
})

portfolio.addEventListener("click", (event) => {
    nav.classList.toggle("remove")
    close.classList.toggle("remove")
})

close.addEventListener("click", (event) => {
    nav.classList.toggle("remove")
    close.classList.toggle("remove")
    const text_remove = document.querySelector(".text_remove").remove()
})