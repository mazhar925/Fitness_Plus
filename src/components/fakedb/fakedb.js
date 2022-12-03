const setValue = (e)=>{
    localStorage.setItem('break-time', e);
}

const getValue = ()=>{
    const val = localStorage.getItem('break-time');
    return val;

}

export {
    setValue,
    getValue
}