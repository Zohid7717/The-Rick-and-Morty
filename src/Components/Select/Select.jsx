import React, { useState }  from 'react';
import Select from 'react-select'

const SelectApp = ({ results, totelPage, setId }) => {
  const [value, setValue] = useState({value: 1, label: 'Episode-'+1})
  setId((value).value)
  const options = []
  for (let i = 0; i < totelPage; i++){
    options.push({ value: i+1, label:'Episode-'+(i+1)})
  }
  
  return (
    <Select
      options={options}
      placeholder='Select episode'
      defaultValue={value}
      onChange={setValue} />
  );
}

export default SelectApp;
