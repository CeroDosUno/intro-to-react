import React from'react';
import useResources from './useResources';

const ResourceList = ({resource}) => {
    const resources = useResources(resource);


    return (
      <div>
      <ul>
      {resources.map(record =>
      <li key={record.id}>{resource === 'users'? record.name : record.title}</li>)}
      </ul>
      </div>
    );
}

export default ResourceList;
