import React from 'react';
import EventForm from './components/EventForm';


class EventPage extends React.Component {
  
  render() {
    return <EventForm onSubmit={this.submit} />
  }
}

function App() {
  return (
    <div className="App">
      <h1>Event form</h1>
      <EventPage />
    </div>
  );
}

export default App;
