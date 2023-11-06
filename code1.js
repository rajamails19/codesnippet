.App-header {
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;

  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  
}

===


const SpreadOp = () => {
    const response = {
      data :{
        response: {
          name: 'John',
          age:30
        }
      }
    }
    const modifiedResponse = {
      ...response.data.response,
      country: 'USA'
    }
  
    const {name, age, country } = modifiedResponse;

    

    
======

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


====

<input type="text" value={text} onChange={(e) => setText(e.target.value)} />

====

const items = Array.from ( {
    length: totalItems
}, 
(_, index) => `Item ${index + 1}`);

===

const initialUsers = [
    {id:1, name:'John', age:25},
    {id:2, name:'Adam', age:15}
]
const [users,setUsers] = useState(initialUsers)



====




const initialUsers = [
    {id:1, name:'John', age:25},
    {id:2, name:'Adam', age:15}
]
const [users,setUsers] = useState(initialUsers)
const [userAdded, setUserAdded] = useState(false);

const addUser = () => {
    if(!userAdded){
        const newUser = {
            id: users.length + 1, 
            name: 'Bill',
            age:18
        }
        setUsers([...users, newUser]);
        setUserAdded(true)
    }
}




=====






