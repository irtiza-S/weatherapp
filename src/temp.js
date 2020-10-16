//scripts for temp conversion.

export default function kelvintocelsius(kel) { 
    let c = Math.round(kel - 273);
    return c;
}

export function kelvintofahrenheit(kel) { 
    let f = (kel - 273.15) * (9/5) + 32;
    return f;
}

