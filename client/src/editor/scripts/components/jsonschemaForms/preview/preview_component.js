import React from 'react';
import ChartWidget from 'shared/components/chartWidget/chartWidget_container';
import './preview.css';

const handleClick = (showPreview, handleShowPreview, triggerUpdatePreview) => {
  if (showPreview === false) {
    // make visible
    handleShowPreview();
  }
  // rehydrate
  triggerUpdatePreview();
};

const Preview = ({handleShowPreview, triggerUpdatePreview, showPreview, slices}) => {
  return (
    <div className="EDI_Preview">
      <hr className="mt-1 mb-2" />
      <button className="UIK-button btn btn-secondary mb-1" onClick={handleClick.bind(this, showPreview, handleShowPreview, triggerUpdatePreview)}>{showPreview ? 'Refresh preview' : 'Click to preview'}</button>
      {showPreview && slices && <ChartWidget slices={slices} />}
    </div>
  )
};

export default Preview;
