

export const getColor = (approchType)=>{
    if(approchType==="Pain"){
        return "buttonSecondary"
    }
    else if(approchType==="Wellness"){
        return "wellnessColor"
    }
    else{
        return "buttonPrimary"
    }
} 