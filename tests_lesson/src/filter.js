
const filter = (arr, key, val) => {
const items = arr.filter((item) =>{
 const keys = Object.keys(item);
for( const ke of keys){
  if(ke === key && item[ke]===val) { return true; } 
}
     
    });
    return items;
};
export default filter;

