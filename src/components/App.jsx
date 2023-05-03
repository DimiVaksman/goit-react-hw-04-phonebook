
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Title } from './Title/title';
import { useState } from 'react';
import { useEffect } from 'react';
import inContacts from 'data.json';
import { nanoid } from 'nanoid'

export const App = () => {
  const [contacts, setContacts] = useState(  () => JSON.parse(localStorage.getItem('contacts')) ?? inContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  
const addContact = ({name, number}) => {

    const Search  = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase())

      if(Search){
        alert(`${name}: is already in contacts`)
        return
      }
      const contact = {
        id: nanoid(3),
        name,
        number,
      };

    setContacts(prevContacts => [contact, ...prevContacts]);

}

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };


  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

const visibleContacts = getVisibleContacts()

  return (
    <div>
      <Phonebook title="Phonebook" onSave={addContact} />
      <Title title="Contacts" />
      <FilterContacts value={filter} onChange={changeFilter} />
      <Contacts items={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};


// export class App extends Component {
//     state = {
//       contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
//         { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
//         { id: 'id-3', name: 'Eden Clements', number: '6451779' },
//         { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
//       ],
//       filter: '',
//     };
  
//     addCotact = newContact => {
//       this.state.contacts.filter(
//         contact =>
//           contact.name.toLowerCase().trim() ===
//             newContact.name.toLowerCase().trim() ||
//           contact.number.trim() === newContact.number.trim()
//       ).length
//         ? alert(`${newContact.name}: is already in contacts`)
//         : this.setState(prevState => ({
//             contacts: [newContact, ...prevState.contacts],
//           }));
//     };
  
//     deleteContact = contactId => {
//       this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//       }));
//     };
  
//     getVisibleContacts = () => {
//       return this.state.contacts.filter(contact =>
//         contact.name.includes(this.state.filter)
//       );
//     };
  
//     changeFilter = event => {
//       this.setState({ filter: event.currentTarget.value });
//     };
  
//     componentDidMount() {
//       console.log('app Mount');
//       const contacts = localStorage.getItem('contacts');
//       const parsedContacts = JSON.parse(contacts);
//       if (parsedContacts) {
//         this.setState({ contacts: parsedContacts });
//       }
//     }
  
//     componentDidUpdate(prevProps, prevState) {
//       if (this.state.contacts !== prevState.contacts) {
//         localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//       }
//     }
  
//     render() {
//       const visibleContacts = this.getVisibleContacts();
  
//       return (
//         <div>
//           <Phonebook title="Phonebook" onSave={this.addCotact} />
//           <Title title="Contacts" />
//           <FilterContacts
//             value={this.state.filter}
//             onChange={this.changeFilter}
//           />
//           <Contacts items={visibleContacts} onDelete={this.deleteContact} />
//         </div>
//       );
//     }
//   }
  