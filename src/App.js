import React, { Component } from "react";
import NotesList from "./NotesList";
import SiteHeader from "./SiteHeader";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true
      }
    ],
    searchText: ""
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true
    };
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (!newSearchText) {
        //return notes with true value in doesMatchSearch when input is empty
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        if (
          title.includes(newSearchText) ||
          description.includes(newSearchText)
        ) {
          note.doesMatchSearch = true;
        } else {
          note.doesMatchSearch = false;
        }
        return note;
      }
    });
    this.setState({ notes: updatedNotes, searchText: newSearchText });
  };

  removeNote = (id) => {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  };

  onType = (editedId, updatedField, updatedValue) => {
    //editedId = id of the note that was edited
    //updatedField = field that was updated (title/description)
    //updatedValue = the value of the field
    const updatedNotes = this.state.notes.map((note) => {
      if (editedId !== note.id) {
        //returns the note as is if when there are no updates
        return note;
      } else if (updatedField === "title") {
        note.title = updatedValue;
        return note;
      } else {
        note.description = updatedValue;
        return note;
      }
    });
    this.setState({ notes: updatedNotes });
  };

  componentDidUpdate() {
    const stateString = JSON.stringify(this.state);
    localStorage.setItem("savedString", stateString);
  }

  componentDidMount() {
    const savedString = localStorage.getItem("savedString");
    if (savedString) {
      const savedState = JSON.parse(savedString);
      this.setState(savedState);
    }
  }

  render() {
    return (
      <div>
        <SiteHeader
          siteTitle="Super Sticky Notes"
          inputValue="Type here to search..."
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList
          notes={this.state.notes}
          onType={this.onType}
          removeNote={this.removeNote}
        />
      </div>
    );
  }
}

export default App;
