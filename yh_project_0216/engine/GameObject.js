class GameObject{
    constructor()
    {
        this.components=[]
    }
    draw(ctx)
    {
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
    getComponent(componentString)
    {
        return this.components.find(c=>c.constructor.name==componentString)
    }
}

export default GameObject