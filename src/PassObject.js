import React from 'react';

const getImageUrl = (person, extra = 's') => {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      extra +
      '.jpg'
    );
  }
  
const Avatar = ({person, size}) =>{
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

const PassObject = () => {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

export default PassObject;