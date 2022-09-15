

const obstacles = [[1,4], [3,5], [7,4]]
fun=()=>{
    let x=0
    let y=0
    let z="NORTH"
    var earthsign=document.getElementById("command").value
    let ouPut=document.getElementById("T")
    let vText=[]
    //let message=document.getElementById("warn")
    let aixs=document.getElementById("coord")
    
    //Translate earthsign command to mars 
    for (var i = 0; i < earthsign.length; i++) {
        console.log(earthsign.charAt(i))
        earthsign[i]=="R" && z=="NORTH"? (console.log("Return Right to EAST"),vText[i]="Return Right to EAST", (z="EAST")):
        earthsign[i]=="R" && z=="SOUTH"? (console.log("Return Right to WEST") ,vText[i]="Return Right to WEST", (z="WEST")):
        earthsign[i]=="R" && z=="EAST"? (console.log("Return Right to SOUTH") ,vText[i]="Return Right to SOUTH", (z="SOUTH")):
        earthsign[i]=="R" && z=="WEST"? (console.log("Return Right to NORTH") ,vText[i]="Return Right to NORTH", (z="NORTH")):

        earthsign[i]=="L" && z=="NORTH"? (console.log("Return Left to WEST") ,vText[i]="Return Left to WEST", (z="WEST")):
        earthsign[i]=="L" && z=="SOUTH"? (console.log("Return Left to EAST") ,vText[i]="Return Left to EAST", (z="EAST")):
        earthsign[i]=="L" && z=="EAST"? (console.log("Return Left to NORTH") ,vText[i]="Return Left to NORTH", (z="NORTH")):
        earthsign[i]=="L" && z=="WEST"? (console.log("Return Left to SOUTH") ,vText[i]="Return Left to SOUTH", (z="SOUTH")):

        earthsign[i]=="F" && z=="NORTH"? (console.log("Go Forward to NORTH") ,vText[i]="Go Forward to NORTH", (x,y=y+1)):
        earthsign[i]=="F" && z=="SOUTH"? (console.log("Go Forward to SOUTH") ,vText[i]="Go Forward to SOUTH", (x,y=y-1)):
        earthsign[i]=="F" && z=="EAST"? (console.log("Go Forward to EAST") , vText[i]="Go Forward to EAST",(x=x+1,y)):
        earthsign[i]=="F" && z=="WEST"? (console.log("Go Forward to WEST") ,vText[i]="Go Forward to WEST",(x=x-1,y)):

        earthsign[i]=="B" && z=="NORTH"? (console.log("Go Backward to SOUTH"), vText[i]="Go Backward to SOUTH", (x,y=y-1)):
        earthsign[i]=="B" && z=="SOUTH"? (console.log("Go Backward to NORTH") , vText[i]="Go Backward to NORTH",(x,y=y+1)):
        earthsign[i]=="B" && z=="EAST"? (console.log("Go Backward to EAST") ,vText[i]="Go Backward to EAST", (x=x-1,y)):
        earthsign[i]=="B" && z=="WEST"?(console.log("Go Backward to WEST"),vText[i]="Go Backward to WEST", (x=x+1,y)) :
        alert("Invalid input please us (F,B,L,R) ONLY ")
}
ouPut.innerHTML=vText
aixs.innerHTML=`(${x},${y})  ${z}`
console.log(`(${x},${y}) ${z}`)


//checking obstacles point to be carfull
obstacles.forEach(element => {
 (element[0]==x+1 && element[1]==y)||(element[0]==x && element[1]==y)||
 (element[0]==x  && element[1]==y+1)?

(console.log(`(${element[0]},${element[1]}) ${z} Warning plz STOP!`),alert(`WARNING THESE IS AN obstacle ON (${element[0]},${element[1]}) ${z}`)):
false
//console.log(element);
}); 

 

//calculate safe direction and turn it to command
calculat=()=>{
var x1=x
var y1=y
var z3=z
var x2=document.getElementById("axisx").value
var y2=document.getElementById("axisy").value
let final=document.getElementById("d")
let dText=[]
let yarray=[]
let xarray=[]

//console.log(x1,x1,z3,x2,y2)

//Nouth
nourth=()=>{
    console.log("hi2")

nourthCheck1=()=>{
    while(y1<y2 ){
        console.log(x1,y1)
        for(var i=y1;i<y2;i++){
            yarray.push("F")
        }
        y1++
    }
    console.log(yarray)
}

nourthCheck2=()=>{ 
while(y1>y2 ){
    console.log(x1,y1,"B")
    for(var i=y1;i>y2;i--){
        yarray[i]="B"
    }
    y1-- 
}
console.log(yarray)
}

nourthCheck3=()=>{
   xarray[0]="R"
while(x1<x2 ){
    //console.log(x1,y1,"F")

    obstacles.forEach(element => {
        element[0]==x1+1 && element[1]==y1? (console.log("L"),xarray.push("L"),y1=y1+1):false
    })
     xarray.push("F")
    x1++
    console.log(xarray)
}
//console.log("l")
xarray.push("L")
y1=y1-1
//console.log("B")
xarray.push("B")
console.log(x1,y1)

dText=[...yarray,...xarray] 
 final.innerHTML=dText
 
/*obstacles.forEach(element => {
    element[0]==x1 && element[1]==y1-1? (console.log("R"),xarray.push("R"),x1=x1+1):false
}),
xarray.push("B"),
console.log(x1,y1),
xarray.push("L"),
x1=x1-1,
console.log(x1,y1)
/*xarray.push("F")
console.log(x1,y1)
xarray.push("R")
x1=x1-1
xarray.push("B")
console.log(x1,y1)*/
  
}

nourthCheck4=()=>{
    console.log("R")
 while(x1>x2 ){
    console.log(x1,y1,"F")
    obstacles.forEach(element => {
        element[0]==x1+1 && element[1]==y1? (console.log("R"),xarray.push("R"),y1=y1-1):false
    })
     xarray.push("F")
    x1--
    console.log(xarray)
}
//console.log("l")
xarray.push("L")
y1=y1+1
//console.log("B")
xarray.push("B")
console.log(x1,y1)

dText=[...yarray,...xarray] 
 final.innerHTML=dText
}
y2>y1? nourthCheck1():nourthCheck2()
x2>x1? nourthCheck3():nourthCheck4()

}


//South
south=()=>{
    southCheck1=()=>{
        while(y1<y2 ){
            //console.log(x1,y1)
            for(var i=y1;i<y2;i++){
                yarray.push("B")
            }
            y1++
        }
        console.log(yarray)
    }
    
    southCheck2=()=>{ 
    while(y1>y2 ){
       // console.log(x1,y1,"B")
        for(var i=y1;i>y2;i--){
            yarray[i]="F"
        }
        y1-- 
    }
    console.log(yarray)
    }
    
    southCheck3=()=>{
       xarray[0]="L"
    while(x1<x2 ){
        //console.log(x1,y1,"F")
    
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("R"),xarray.push("R"),y1=y1+1):false
        })
         xarray.push("B")
        x1++
        console.log(xarray)
    }
    //console.log("l")
    xarray.push("R")
    y1=y1-1
    //console.log("B")
    xarray.push("F")
    console.log(x1,y1)
    
    dText=[...yarray,...xarray] 
     final.innerHTML=dText
    
    }
    
    southCheck4=()=>{
        console.log("L")
    while(x1>x2 ){
        //console.log(x1,y1,"F")
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("L"),xarray.push("L"),y1=y1-1):false
        })
         xarray.push("B")
        x1--
        console.log(xarray)
    }
    //console.log("l")
    xarray.push("R")
    y1=y1+1
    //console.log("B")
    xarray.push("F")
    console.log(x1,y1)
    
    dText=[...yarray,...xarray] 
     final.innerHTML=dText
    }
    y2>y1? southCheck1():southCheck2()
    x2>x1? southCheck3():southCheck4()

}

//East
east=()=>{
    eastCheck1=()=>{
        while(x1<x2 ){
            console.log(x1,y1)
            for(var i=X1;i<X2;i++){
                xarray.push("F")
            }
            X1++
        }
        console.log(xarray)
    }
    
    eastCheck2=()=>{ 
    while(x1>x2 ){
        console.log(x1,y1,"B")
        for(var i=x1;i>x2;i--){
            xarray[i]="B"
        }
        x1-- 
    }
    console.log(xarray)
    }
    
    eastCheck3=()=>{
       xarray[0]="L"
    while(y1<y2 ){
        //console.log(x1,y1,"F")
    
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("L"),xarray.push("L"),x1=x1+1):false
        })
         yarray.push("F")
        y1++
        console.log(yarray)
    }
    //console.log("l")
    yarray.push("R")
    x1=x1-1
    //console.log("B")
    xarray.push("B")
    console.log(x1,y1)
    
    dText=[...xarray,...yarray] 
     final.innerHTML=dText
    }
    
    eastCheck4=()=>{
        console.log("L")
    while(y1>y2 ){
        console.log(x1,y1,"B")
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("R"),xarray.push("R"),x1=x1-1):false
        })
         yarray.push("F")
        y1--
        console.log(yarray)
    }
    //console.log("l")
    yarray.push("R")
    y1=y1+1
    //console.log("B")
    yarray.push("B")
    console.log(x1,y1)
    
    dText=[...xarray,...yarray] 
     final.innerHTML=dText
    }
    x2>x1? eastCheck1():eastCheck2()
    y2>y1? eastCheck3():eastCheck4()
}

//West
west=()=>{
    westCheck1=()=>{
        while(x1<x2 ){
            console.log(x1,y1)
            for(var i=x1;i<x2;i++){
                xarray.push("B")
            }
            x1++
        }
        console.log(xarray)
    }
    
    westCheck2=()=>{ 
    while(x1>x2 ){
        console.log(x1,y1,"F")
        for(var i=x1;i>x2;i--){
            xarray[i]="F"
        }
        x1-- 
    }
    console.log(xarray)
    }
    
    westCheck3=()=>{
       yarray[0]="R"
    while(x1<x2 ){
        //console.log(x1,y1,"F")
    
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("L"),xarray.push("L"),x1=x1+1):false
        })
         yarray.push("F")
        y1++
        console.log(yarray)
    }
    //console.log("l")
    yarray.push("L")
    x1=x1-1
    //console.log("B")
    xarray.push("B")
    console.log(x1,y1)
    
    dText=[...xarray,...yarray] 
     final.innerHTML=dText
    }
    
    westCheck4=()=>{
        console.log("R")
    while(y1>y2 ){
        console.log(x1,y1,"B")
        obstacles.forEach(element => {
            element[0]==x1+1 && element[1]==y1? (console.log("L"),xarray.push("L"),x1=x1-1):false
        })
         yarray.push("B")
        y1--
        console.log(yarray)
    }
    //console.log("l")
    yarray.push("L")
    x1=x1+1
    //console.log("B")
    xarray.push("F")
    console.log(x1,y1)
    
    dText=[...xarray,...yarray] 
     final.innerHTML=dText
    }
    x2>x1? westCheck1():westCheck2()
    y2>y1? westCheck3():westCheck4()
}

z3=="NORTH"? nourth(): false
z3=="SOUTH"? south():false
z3=="EAST"? east():false
z3=="WEST"? west():false

}
//calculat()
}
fun()
