import React, { Component } from "react";
import { Segment, Input } from "semantic-ui-react";

class SearchBar extends Component {
  findSearch = e => {
    if (e.keyCode === 13) {
      const searchTerm = e.target.value;
      console.log(searchTerm);
    }
  };

  render() {
    return (
      <div className="search-bar">
        <Segment stacked>
          <Input
            icon="search"
            onKeyDown={(e) => this.findSearch(e)}
            size="large"
            placeholder="Search..."
          />
        </Segment>
      </div>
    );
  }
}
export default SearchBar;
