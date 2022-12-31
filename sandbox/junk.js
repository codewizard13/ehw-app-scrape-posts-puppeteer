// SmallPersonListItem.js

export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person

  return (
    <p>Name: {name}, Age: {age} years</p>
  )
}


// LargePersonListItem.js

export const LargePersonListItem = ({ person }) => {
  const { name, age, hairColor, hobbies } = person

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  )
}



// RegularList.js

export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  )
}



// App.js

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />    </>
  );
}

export default App;



// SmallProductListItem.js

export const SmallProductListItem = ({ product }) => {
  const { name, price } = product

  return (
    <h3>{name} - {price}</h3>
  )
}

// LargeProductListItem.js

export const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  )
}



// NumberedList.js

export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      <h3>{i + 1}</h3>
      <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  )
}

// App.js

...

function App() {
  return (
    <>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <NumberedList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </>
  );
}




// Modal.js

import { useState } from 'react'
import styled from 'styled=-components'

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
	background-color: white;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false) // hidden initially

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {
        shouldShow && (
          <ModalBackground onClick={() => setShouldShow(false)}  >
            <ModalBody onClick={e => e.stopPropagation()}>
              <button onClick={() => setShouldShow(false)}>Hide Modal</button>
              {children}
            </ModalBody>
          </ModalBackground>
        )
      }
    </>
  )
}

// App.js

import { Modal } from "./Modal";
import { NumberedList } from "./NumberedList";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { RegularList } from "./RegularList";

...

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>
    </>
  )
}

// Beginning to Intermediate React Developer Normal Strategy

const Child1 = () => {
  // load data...
  return (
    // display the data
  )
}