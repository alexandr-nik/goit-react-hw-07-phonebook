import { ContactsForm } from './ContactForm';
import { Contacts } from './Contacts';
import { AppBlock } from './App.styled';
import { Section } from './Section';
import { ContactsFilter } from './ContactsFilter';

export function App() { 
  return (
    <AppBlock>
      <ContactsForm  />
      <Section title="Contacts">
        <ContactsFilter  />
        <Contacts  
        />
      </Section>
    </AppBlock>
  );
}

