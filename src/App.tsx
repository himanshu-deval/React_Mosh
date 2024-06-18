import ListGroup from './components/ListGroup';

let items = ["NewYork", "San Francisco", "Tokyo", "London", "paris"];

export default function App(){
return(
  <>
  <h1>Hello world</h1>
    <ListGroup items={items} heading="cities"/>
  </>
)
}




