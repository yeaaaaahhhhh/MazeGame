class GameObject{
    constructor()
    {
        this.components=[]
    }
    draw(ctx)
    {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
    update()
    {
        this.components.filter(c=>c.update).forEach(c=>c.update())
    }
    getComponent(componentString)
    {
        return this.components.find(c=>c.constructor.name==componentString)
    }
}

export default GameObject