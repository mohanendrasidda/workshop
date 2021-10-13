const dateFilter = (isDate)=>{
    const d= new Date(isDate)
    return d.toDateString();
}
export default dateFilter

