import ListGroup from './components/ListGroup';

let items = ["NewYork", "San Francisco", "Tokyo", "London", "paris"];
const handleItem=(item:string)=>{
  console.log(item);
}
export default function App(){
return(
  <>
  <h1>Hello world</h1>
    <ListGroup items={items} heading="cities" onSelectItem={handleItem}/>
  </>
)
}




