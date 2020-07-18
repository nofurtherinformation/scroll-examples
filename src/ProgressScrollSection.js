import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import styled from 'styled-components';

const StepText = styled.div`
    height:80vh;
    border:1px solid gray;
`
const ScrollamaDemo = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [currentStepProgress, setCurrentStepProgress] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  
  const onStepProgress = ({ element, data, progress }) => {
    setCurrentStepProgress(progress);
  };

  return (
    <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
      <div style={{ position: 'sticky', top: 0, border: '1px solid orchid', fontSize:'2rem' }}>
        I'm sticky. The current triggered step index is: {currentStepIndex}... and the progress is: {currentStepProgress}
      </div>
      <Scrollama onStepEnter={onStepEnter} onStepProgress={onStepProgress} progress={true} debug>
          <Step data={1} key={1}>
            <StepText style={{opacity: currentStepIndex === 1 ? 1 : 0.2}}>
              I'm a Scrollama Step of index 1
            </StepText>
          </Step>
          <Step data={2} key={2}>
            <StepText style={{opacity: currentStepIndex === 2 ? 1 : 0.2}}>
              I'm a Scrollama Step of index 2
            </StepText>
          </Step>
          <Step data={3} key={3}>
            <StepText style={{opacity: currentStepIndex === 3 ? 1 : 0.2}}>
              I'm a Scrollama Step of index 3
            </StepText>
          </Step>
          <Step data={4} key={4}>
            <StepText style={{opacity: currentStepIndex === 4 ? 1 : 0.2}}>
              I'm a Scrollama Step of index 4
            </StepText>
          </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollamaDemo;