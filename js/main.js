const navButton = document.querySelector("#navButton")
const offCanvas = document.querySelector("#offCanvas")
const body = document.querySelector("body")


navButton.addEventListener("click", () => {
    if(!offCanvas.classList.contains('active'))
    {
        offCanvas.classList.add("active")
        body.classList.add("off-canvas-open")
    }
    else
    {
        offCanvas.classList.remove("active")
        body.classList.remove("off-canvas-open")
    }
});

offCanvas.addEventListener("click", (e) =>
{
    console.log(e.target)
    if(e.target.classList.contains("links"))
    {
        offCanvas.classList.remove("active")
        body.classList.remove("off-canvas-open")
    }
    
})