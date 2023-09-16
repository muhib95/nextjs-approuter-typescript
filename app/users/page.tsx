import AddProduct from "../component/ProductCarts/AddProduct"

const UsersPage=async()=> {
    interface user{
        id:number;
        name:string;
    }
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const users:user[]=await res.json();
    // console.log(users);

    
  return (
    <div>Users page
<ul>
    {
        users.map(user=><li key={user.id}>Id: {user.id} Name:{user.name}</li>)

    }
</ul>
        <AddProduct></AddProduct>
    </div>
  )
}

export default UsersPage