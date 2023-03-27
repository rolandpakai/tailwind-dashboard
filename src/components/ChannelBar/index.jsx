import { useState } from "react";
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

const ChannelBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-container">
        <DropDown header='Topics' selections={topics} />
        <DropDown header='Questions' selections={questions} />
        <DropDown header='Random' selections={random} />
      </div>
    </div>
  )
};

const ChannelBlock = () => {
  return (
  <div className="channel-block">
    <h5 className="channel-block-text">Channels</h5>
  </div>
  )
};

const DropDown = ({ header, selections }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setExpanded(!expanded)}>
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          { header }
        </h5>
        <FaPlus size="12" className="text-accent text-opacity-80 my-auto ml-auto" />
      </div>
      {expanded && selections &&
        selections.map((selection, index) => <TopicSelection key={index} selection={selection} />)
      }
    </div>
  )
};

const ChevronIcon = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  
  return expanded ? (
    <FaChevronDown size="14" className={chevClass}/>
  ) : (
    <FaChevronRight size="14" className={chevClass}/> 
  );
};

const TopicSelection = ({selection}) => {
  return (
  <div className="dropdown-selection">
    <BsHash size='24' className='text-gray-400' />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
  )
};

export default ChannelBar;