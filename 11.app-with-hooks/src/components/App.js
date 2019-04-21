import React,{useState} from 'react';
import ResourceList from './ResourceList';


const App = () => {
  const [resource,setResource] = useState('posts');
  const [count,currentCount] = useState(0);

    return(
      <div>
        <div>
          <button onClick={() => setResource('posts')}>Posts</button>
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource} />
      </div>
    );

}

export default App;