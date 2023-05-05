import List from "./List";
import { useState } from "react";

const Display = (props) => {
    const [filteredlabel, setFilteredlabel] = useState('');
  
    const filterChangeHandler = (selectedlabel) => {
      setFilteredlabel(selectedlabel);
    };
  
    return (
      <div>
    
          <List
            selected={filteredlabel}
            onChangeFilter={filterChangeHandler}
          />
      
      </div>
    );
  };
  
  export default Display;