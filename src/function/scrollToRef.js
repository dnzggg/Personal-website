
const scrollToRef = (e) => {
    const id = e.target.innerText.toLowerCase()
    const y = document.getElementById(id).getBoundingClientRect().y + window.scrollY
    console.log(y)
    window.scrollTo({top: y,behavior: "smooth"})
}

export default scrollToRef