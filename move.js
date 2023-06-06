function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return window.getComputedStyle(obj,false)[attr]
    }
}
function startMove(obj,data,func){
clearInterval(obj.timer);
let iSpeed;
let iCur;
let name;
startTimer = obj.timer = setInterval(function(){
    let bStop=true;
    for(var attr in data){
        if(attr ==='opacity'){
            name =attr;
            iCur=parseFloat(getStyle(obj,attr)) * 100;
        }else{
            iCur=parseFloat(getStyle(obj,attr));
        }
        iSpeed=(data[attr] - iCur) / 8;
        if(iSpeed >0){
            iSpeed=Math.ceil(iSpeed);
        }else{
            iSpeed=Math.floor(iSpeed);
        }
        if(attr ==="opacity"){
            obj.style.opacity=(iCur + iSpeed) / 100;
        }else{
            obj.style[attr]= iCur + iSpeed +'px';
        }
        if(Math.floor(Math.abs(data[attr] - iCur)) != 0){
            bStop=false;
        }
    }
    if(bStop){
        clearInterval(obj.timer);
        if(name === 'opacity'){
            obj.style.opacity=data[name] / 100;
        }
        func();
    }
},30)
}