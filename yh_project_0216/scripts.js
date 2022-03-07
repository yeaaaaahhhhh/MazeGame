function getCanvas()
{
    let canvas=document.querySelector("#canv")
    let ctx= canvas.getContext("2d");

    canvas.width= window.innerWidth;
    canvas.height=window.innerHeight;
    ctx.globalAlpha=1
    return {canvas, ctx};
}