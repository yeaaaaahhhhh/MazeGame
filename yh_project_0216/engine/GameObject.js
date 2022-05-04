class GameObject{
    constructor()
    {
        this.components=[]
        this.markForDelete=false;
        this.visibility=true;
    }
    draw(ctx)
    {
        if(this.visibility)
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