const about_me = document.querySelector(".About_me")
const contact = document.querySelector(".Contact")
const portfolio = document.querySelector(".Portfolio")
const close = document.querySelector(".close")
const nav = document.querySelector("nav")

about_me.addEventListener("click", (event) => {
    nav.insertAdjacentHTML("beforebegin", render_about_me())
    toggle()
})

contact.addEventListener("click", (event) => {
    render_contact()
    toggle()
})

portfolio.addEventListener("click", (event) => {
    nav.insertAdjacentHTML("beforebegin", render_portfolio())
    toggle()
})

close.addEventListener("click", (event) => {
    toggle()
    const text_remove = document.querySelectorAll(".text_remove")
    text_remove.forEach((text) => {
        text.remove()
    })
})

function toggle() {
    nav.classList.toggle("remove")
    close.classList.toggle("remove")
}

function render_about_me() {
    return `
    <p class="text_about_me text_remove">
    Hello! My name is Vladislav, I’m 17 years old.
    I’m a frontend developer and plan to grow into
    a fullstack developer.I work with HTML, CSS,
    JavaScript, and React. I enjoy experimenting
    with animations, design, and creating real
    projects. In the future, I want to move to
    Canada or Dubai to work and develop my IT skills.
    </p>
        `
}

function render_contact() {
    const nav2 = document.createElement("nav")
    const ul = document.createElement("ul")
    nav2.classList.add("text_remove")

    const a_tik_tok = document.createElement("a")
    const a_instagram = document.createElement("a")
    const a_telegram = document.createElement("a")

    a_tik_tok.href = "https://www.tiktok.com/@f1ntura"
    a_tik_tok.textContent = "TikTok"
    a_tik_tok.target = "_blank"
    a_tik_tok.rel = "noopener noreferrer"
    a_tik_tok.classList.add("text_remove")
    a_tik_tok.classList.add("nav_a")

    a_instagram.href = "https://www.instagram.com/f1ntura/?igsh=c3Fud2tzNDBtN2Ny#"
    a_instagram.textContent = "Instagram"
    a_instagram.target = "_blank"
    a_instagram.rel = "noopener noreferrer"
    a_instagram.classList.add("text_remove")
    a_instagram.classList.add("nav_a")

    a_telegram.href = "https://t.me/F1NTURA"
    a_telegram.textContent = "Telegram"
    a_telegram.target = "_blank"
    a_telegram.rel = "noopener noreferrer"
    a_telegram.classList.add("text_remove")
    a_telegram.classList.add("nav_a")

    const gg = [a_tik_tok, a_telegram, a_instagram]

    for (let i = 0; i < gg.length; i++) {
        const li = document.createElement("li")

        li.append(gg[i])

        ul.append(li)
    }

    console.log(ul)

    nav2.append(ul)
    nav.before(nav2)
}

function render_portfolio() {
    return `
    <p class="text_about_me text_remove">
 Empty
    </p>
        `
} 