import React, { useRef, useEffect } from 'react'
import "./canvas.css"
function Canvas(props) {
    const canvasRef = useRef(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const c = canvas.getContext("2d")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            init()
        })
        let mousePos = {
            x: null,
            y: null,
            radius:(canvas.height/80)*(canvas.width/80)
        }
    
        window.addEventListener("mousemove",(e)=>{
            mousePos.x = e.x
            mousePos.y = e.y
            
                        
        })
        function Circle(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;

            this.dx = dx;
            this.dy = dy;

            this.radius = radius;
            this.color = color;
            
            this.draw = () => {
                c.beginPath();
                c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                c.fillStyle = this.color;
                c.fill();

            }
            this.update = () => {
                if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0)
                {
                    this.dx = -this.dx
                }
                if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0)
                {
                    this.dy = -this.dy
                }

                let directionX = mousePos.x - this.x
                let directionY = mousePos.y - this.y
                let dist = Math.sqrt(directionX * directionX + directionY * directionY)
                
                if(dist < mousePos.radius + this.radius)
                {
                    console.log("hi")
                    if(mousePos.x < this.x && this.x<canvas.width - this.radius * 10)
                    {
                        this.x += 10
                    }
                    if(mousePos.x>this.x&&this.x>this.radius*10)
                    {
                        this.x-=10
                    }
                    if(mousePos.y<this.y&&this.y<canvas.height-this.radius*10)
                    {
                        this.y+=10
                    }
                    if(mousePos.y>this.y&&this.y>this.radius*10)
                    {
                        this.y-=10
                    }
                }

                this.x+=this.dx
                this.y+=this.dy

            }
        }


        let circleArray = []
        function init() {
            circleArray=[]
            let colors = ["rgb(255, 107, 107)", "rgb(107, 203, 119)", "rgb(77, 150, 255)", "yellow", "orange", "purple", "pink", "brown", "black", "white"]
    
            for (let i = 0; i < 150; i++) {
                let radius = Math.random() * 3 + 1;
                let x = Math.random() * (window.innerWidth - radius * 2) + radius;
                let y = Math.random() * (window.innerHeight - radius * 2) + radius;
                let dx = (Math.random() - 0.5) * 2;
                let dy = (Math.random() - 0.5) * 2;
                let color = colors[Math.floor(Math.random() * colors.length)];
    
                circleArray.push(new Circle(x, y, dx, dy, radius, color))
            }
            
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].draw()
            }
        }



        init()

        function animate()
        {
            requestAnimationFrame(animate)
            c.clearRect(0, 0, window.innerWidth, window.innerHeight)
            for (let i = 0; i < circleArray.length; i++) {
                circleArray[i].update()
                circleArray[i].draw()
            }    
            connect()
        }


        animate()
        // connect the dots
        function connect()
        {

        for(let h=0; h<circleArray.length;h++)
        {
            for(let y=h;y<circleArray.length;y++)
            {
                let distance = ((circleArray[h].x - circleArray[y].x) * (circleArray[h].x - circleArray[y].x)) + ((circleArray[h].y - circleArray[y].y) * (circleArray[h].y - circleArray[y].y))
                if(distance < (canvas.width/7) * (canvas.height/7)){
                    c.beginPath()
                    c.moveTo(circleArray[h].x,circleArray[h].y)
                    c.lineTo(circleArray[y].x, circleArray[y].y)
                    c.strokeStyle = `rgba(200,205,200,0.15)`
                    c.stroke()
                }
            }

        }
    }
    




    window.addEventListener("resize", ()=>{
        canvas.width=window.innerWidth
        canvas.height=window.innerHeight
        mousePos.radius=((canvas.height)/80)*(canvas.height/80)
    })
    window.addEventListener("mouseout",()=>{
        mousePos.x = undefined
        mousePos.y = undefined
    })

    }, [])
    return (<canvas className='canvas' ref={canvasRef} {...props} />)
}
export default Canvas